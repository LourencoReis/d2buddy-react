// Simple test endpoint to check if API is working
export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  console.log('=== TEST API CALLED ===');
  console.log('Method:', req.method);
  console.log('Query:', req.query);
  console.log('Headers:', req.headers);

  return res.status(200).json({
    success: true,
    timestamp: new Date().toISOString(),
    method: req.method,
    query: req.query,
    message: 'Test endpoint is working'
  });
}