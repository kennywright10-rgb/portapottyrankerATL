// ============================================================
// Google Places API endpoint
// ============================================================
// To enable live Google ratings on the site:
//
// 1. Go to: https://console.cloud.google.com/
// 2. Enable the "Places API (New)" for your project
// 3. Create an API key (restrict it to your domain for security)
// 4. In Vercel dashboard → Settings → Environment Variables
//    Add: GOOGLE_PLACES_API_KEY = your_key_here
//
// Once set, any company in data.js with a "google_place_id" field
// will fetch live ratings, review count, and recent reviews.
//
// To find a company's Place ID:
// https://developers.google.com/maps/documentation/places/web-service/place-id
// ============================================================

exports.config = {
  runtime: 'nodejs'
};

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate'); // Cache 1 hour

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { place_id } = req.query;

  if (!place_id) {
    return res.status(400).json({ error: 'place_id parameter is required' });
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  // If no API key configured, return a clear message
  if (!apiKey) {
    return res.status(200).json({
      source: 'static',
      message: 'Google Places API key not configured. Add GOOGLE_PLACES_API_KEY to Vercel environment variables to enable live ratings.',
      rating: null,
      reviewCount: null,
      reviews: []
    });
  }

  try {
    // Fetch place details from Google Places API
    const fields = 'rating,user_ratings_total,reviews,name,formatted_phone_number,opening_hours';
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(place_id)}&fields=${fields}&key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== 'OK') {
      console.error('Google Places API error:', data.status, data.error_message);
      return res.status(200).json({
        source: 'google_error',
        error: data.status,
        rating: null,
        reviewCount: null,
        reviews: []
      });
    }

    const result = data.result;

    // Return normalized data
    return res.status(200).json({
      source: 'google',
      rating: result.rating || null,
      reviewCount: result.user_ratings_total || 0,
      phone: result.formatted_phone_number || null,
      isOpenNow: result.opening_hours?.open_now ?? null,
      reviews: (result.reviews || []).slice(0, 3).map(r => ({
        author: r.author_name,
        rating: r.rating,
        text: r.text,
        time: r.relative_time_description
      }))
    });

  } catch (error) {
    console.error('Google Places fetch error:', error);
    return res.status(500).json({
      source: 'error',
      error: error.message,
      rating: null,
      reviewCount: null,
      reviews: []
    });
  }
};
