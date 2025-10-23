# Supabase Migration Guide for Sherpa's Corner

Complete step-by-step guide to migrate your Bungie API integration from Vercel to Supabase Edge Functions.

## Why Supabase?

- **Longer timeouts**: Edge Functions support longer execution times than Vercel's 10-second limit
- **Built-in database caching**: Store precomputed raid stats in Postgres for instant responses
- **Free tier**: Generous free tier with 500,000 Edge Function invocations/month
- **Better for API-heavy workflows**: Supabase is designed for backend API work

---

## Prerequisites

- GitHub account (for deploying the function)
- Your Bungie API key
- Supabase CLI (optional but recommended)

---

## Step 1: Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com) and sign up/login
2. Click **"New Project"**
3. Fill in:
   - **Organization**: Choose or create one
   - **Name**: `sherpas-corner` (or your preferred name)
   - **Database Password**: Create a strong password (save it somewhere safe)
   - **Region**: Choose closest to your users (e.g., `East US (North Virginia)`)
   - **Pricing Plan**: Free
4. Click **"Create new project"**
5. Wait 1-2 minutes for the project to initialize

---

## Step 2: Set Up the Database Cache Table

This creates a table in your Supabase database to store cached raid stats so your site loads instantly on repeat visits.

### Detailed Instructions:

1. **Go to your Supabase project dashboard**
   - You should see your project name at the top
   - In the left sidebar, you'll see a list of menu items

2. **Open the SQL Editor**
   - In the LEFT sidebar, scroll down and click on **"SQL Editor"**
   - It has an icon that looks like `</>` 

3. **Create a new query**
   - You'll see a button that says **"+ New query"** in the top right area
   - Click it
   - A blank text editor will appear on the right side

4. **Copy the SQL code**
   - Open the file `supabase/migrations/001_create_bungie_cache.sql` from your project
   - OR copy this code directly:

```sql
CREATE TABLE IF NOT EXISTS bungie_stats_cache (
  cache_key TEXT PRIMARY KEY,
  data JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_bungie_stats_cache_updated_at 
  ON bungie_stats_cache(updated_at);
```

5. **Paste it into the editor**
   - Click inside the big text box on the right side
   - Press `Ctrl+V` to paste
   - You should now see the SQL code in the editor

6. **Run the query**
   - Look for a button in the bottom-right corner that says **"Run"** or **"RUN"**
   - It might be a green or blue button
   - Click it

7. **Check for success**
   - Below the editor, you should see a results panel
   - If successful, it will show: **"Success. No rows returned"** in green
   - This is GOOD - it means the table was created!

8. **Verify the table exists (optional)**
   - In the left sidebar, click **"Table Editor"**
   - You should now see a table called **"bungie_stats_cache"** in the list
   - Click on it - it should show 3 columns: `cache_key`, `data`, `updated_at`
   - The table will be empty (0 rows) - that's normal!

### What This Does:

- Creates a table to store your Bungie stats temporarily
- Each time someone loads their profile, it saves the results for 2 minutes
- Next time they load the page (within 2 min), it shows instantly from the cache instead of calling Bungie again
- This makes your site MUCH faster and avoids hitting Bungie's rate limits

### Troubleshooting:

**If you see "permission denied" or "error":**
- Make sure you're in YOUR project (check the project name at the top)
- Try refreshing the page and running the query again

**If the Run button is grayed out:**
- Make sure you pasted the SQL code into the editor
- Click inside the text editor first, then try clicking Run

**If you don't see "SQL Editor" in the sidebar:**
- Scroll down in the left sidebar - it might be below "Database" section
- Try refreshing the browser page

---

## Step 3: Deploy the Edge Function

### Option A: Using Supabase CLI (Recommended)

1. **Install Supabase CLI**:

```powershell
# Using npm (if you have Node.js)
npm install -g supabase

# OR using Scoop (Windows package manager)
scoop bucket add supabase https://github.com/supabase/scoop-bucket.git
scoop install supabase
```

2. **Login to Supabase**:

```powershell
supabase login
```

3. **Link your project**:

```powershell
cd "c:\Users\laure\Documents\TEST REACT"
supabase link --project-ref YOUR_PROJECT_REF
```

   - Find `YOUR_PROJECT_REF` in your Supabase dashboard URL:
     `https://app.supabase.com/project/YOUR_PROJECT_REF`

4. **Deploy the function**:

```powershell
supabase functions deploy bungie-stats
```

5. **Set environment variables**:

```powershell
# Set your Bungie API key
supabase secrets set BUNGIE_API_KEY=your_bungie_api_key_here

# Set Supabase URL (from dashboard Settings > API)
supabase secrets set SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co

# Set Service Role Key (from dashboard Settings > API > service_role secret)
supabase secrets set SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

### Option B: Using Dashboard (Simpler for first-time)

1. In Supabase dashboard, click **"Edge Functions"** in the left sidebar
2. Click **"Create a new function"**
3. Name it: `bungie-stats`
4. Copy the entire contents of `supabase/functions/bungie-stats/index.ts`
5. Paste into the editor
6. Click **"Deploy function"**
7. Go to **"Settings"** tab of the function
8. Add environment variables (secrets):
   - `BUNGIE_API_KEY`: Your Bungie API key
   - `SUPABASE_URL`: Your project URL (Settings > API > Project URL)
   - `SUPABASE_SERVICE_ROLE_KEY`: Your service role key (Settings > API > service_role secret)

---

## Step 4: Get Your Function URL

After deploying, your function will be available at:

```
https://YOUR_PROJECT_REF.supabase.co/functions/v1/bungie-stats
```

Find `YOUR_PROJECT_REF` in:
- Dashboard URL: `https://app.supabase.com/project/YOUR_PROJECT_REF`
- OR Settings > API > Project URL

Example:
```
https://abcdefghijklmnop.supabase.co/functions/v1/bungie-stats
```

---

## Step 5: Update Your Frontend

You need to point your React app to the Supabase function instead of the Vercel API.

### If you're still on Vercel for frontend:

1. Go to your Vercel project dashboard
2. Click **"Settings"** > **"Environment Variables"**
3. Add a new variable:
   - **Name**: `REACT_APP_API_BASE`
   - **Value**: `https://YOUR_PROJECT_REF.supabase.co/functions/v1`
   - **Environment**: Production, Preview, Development (select all)
4. Click **"Save"**
5. Redeploy your frontend (Vercel > Deployments > three dots > Redeploy)

### Or update locally for testing:

Create a `.env` file in the `frontend/` folder:

```env
REACT_APP_API_BASE=https://YOUR_PROJECT_REF.supabase.co/functions/v1
```

Then rebuild:
```powershell
cd frontend
npm run build
```

---

## Step 6: Test the Integration

1. Go to your deployed site
2. Log in with Discord
3. Click **"Connect Bungie.net"**
4. After authorizing, your profile should now load raid completion stats
5. Check your Supabase dashboard > Edge Functions > bungie-stats > Logs to see requests

---

## Step 7: Verify Caching is Working

1. Load your profile stats once
2. In Supabase dashboard, go to **"Table Editor"**
3. Open the `bungie_stats_cache` table
4. You should see one row with your `cache_key` and `data`
5. Refresh your profile page - the second load should be instant (cache hit)

---

## Troubleshooting

### Function returns 500 error
- Check Edge Functions > bungie-stats > Logs for errors
- Verify all 3 environment variables are set correctly
- Make sure BUNGIE_API_KEY is valid

### "Missing Bearer token" error
- Make sure you're logged into Bungie.net first
- Check browser console for authorization header

### Stats not loading
- Open browser DevTools > Network tab
- Look for the request to `/bungie-stats`
- Check the response and headers
- Verify REACT_APP_API_BASE is set correctly

### Cache not working
- Check if the `bungie_stats_cache` table exists
- Verify the function has permissions to write to the table
- Check Logs for database errors

---

## Next Steps

- **Add dungeons**: Modify the Edge Function to include dungeon stats
- **Add raid guide integration**: Show completion counts on individual raid guide pages
- **Set up monitoring**: Use Supabase's built-in monitoring to track function performance
- **Optimize cache TTL**: Adjust `CACHE_TTL_SECONDS` based on your needs (currently 120s)

---

## Cost Estimate (Free Tier Limits)

Supabase Free Tier includes:
- ✅ 500,000 Edge Function invocations/month
- ✅ 500 MB database storage
- ✅ 2 GB bandwidth
- ✅ 50,000 monthly active users

For your use case (checking stats a few times per user session with caching):
- **Expected monthly invocations**: ~1,000-10,000 (well under limit)
- **Database usage**: < 1 MB (just cache data)
- **Bandwidth**: < 100 MB

You should stay comfortably within free tier limits.

---

## Support

If you encounter issues:
1. Check Supabase documentation: https://supabase.com/docs
2. Join Supabase Discord: https://discord.supabase.com
3. Check Edge Functions logs in your dashboard

---

## Migration Checklist

- [ ] Created Supabase project
- [ ] Ran SQL to create `bungie_stats_cache` table
- [ ] Deployed `bungie-stats` Edge Function
- [ ] Set all 3 environment variables (BUNGIE_API_KEY, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
- [ ] Updated REACT_APP_API_BASE on Vercel
- [ ] Tested Bungie connection and stats loading
- [ ] Verified caching in database
- [ ] Checked Edge Function logs for errors

Once all checkboxes are complete, your migration is done! 🎉
