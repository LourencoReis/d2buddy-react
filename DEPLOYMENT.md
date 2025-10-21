# Sherpa's Corner Vercel Deployment Guide

## Prerequisites
1. Install Vercel CLI: `npm i -g vercel`
2. Have a domain ready (optional - Vercel provides free .vercel.app subdomain)

## Deployment Steps

### 1. Login to Vercel
```bash
vercel login
```

### 2. Deploy from project root
```bash
cd "C:\Users\laure\Documents\TEST REACT"
vercel
```

### 3. Follow prompts:
- Set up and deploy? → Y
- Which scope? → Select your account
- Link to existing project? → N
- Project name? → sherpas-corner (or your preferred name)
- Directory? → ./ (current directory)
- Modify settings? → N

### 4. Set Environment Variables
```bash
vercel env add DISCORD_CLIENT_SECRET
```
Enter your secret: `tD9SuQwhhJzP3LEN1ymJel8iIJUerMQe`

### 5. Update Discord Application Settings
In Discord Developer Portal:
- Add your Vercel URL to "Redirect URIs": `https://your-app.vercel.app/auth/callback`

### 6. Update Domain References
Replace "your-domain.com" in:
- `/api/index.js` (lines 11, 27)
- `/frontend/src/components/Header.jsx` (line 15)

With your actual Vercel domain.

### 7. Redeploy
```bash
vercel --prod
```

## Custom Domain Setup (Optional)

### 1. In Vercel Dashboard:
- Go to your project → Settings → Domains
- Add your custom domain

### 2. Update DNS:
- Add CNAME record pointing to your-app.vercel.app
- Or A record to Vercel's IP (they'll provide this)

### 3. Update Discord OAuth:
- Add your custom domain to redirect URIs
- Update code references from .vercel.app to your domain

## Commands Summary
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
cd "C:\Users\laure\Documents\TEST REACT"
vercel

# Set environment variable
vercel env add DISCORD_CLIENT_SECRET

# Production deploy
vercel --prod
```