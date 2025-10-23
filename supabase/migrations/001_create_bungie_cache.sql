-- Supabase SQL: Create cache table for Bungie stats
-- Run this in the SQL Editor in your Supabase dashboard

-- Create the cache table
CREATE TABLE IF NOT EXISTS bungie_stats_cache (
  cache_key TEXT PRIMARY KEY,
  data JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create index on updated_at for cleanup queries (optional)
CREATE INDEX IF NOT EXISTS idx_bungie_stats_cache_updated_at 
  ON bungie_stats_cache(updated_at);

-- Optional: Add a cleanup function to delete old cache entries (> 1 hour old)
CREATE OR REPLACE FUNCTION cleanup_old_bungie_cache()
RETURNS void AS $$
BEGIN
  DELETE FROM bungie_stats_cache
  WHERE updated_at < NOW() - INTERVAL '1 hour';
END;
$$ LANGUAGE plpgsql;

-- Optional: Schedule cleanup to run every hour (requires pg_cron extension)
-- Uncomment if you want automatic cleanup
-- SELECT cron.schedule(
--   'cleanup-bungie-cache',
--   '0 * * * *', -- Every hour
--   'SELECT cleanup_old_bungie_cache();'
-- );
