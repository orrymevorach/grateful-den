export default async function handler(req, res) {
  try {
    res.status(200).json({});
  } catch (err) {
    res.status(err.statusCode || 500).json({ errors: err.message });
  }
}

export const config = {
  api: {
    // disable nextjs's body parser while deployed
    // (as body parsing is handled by `https.onRequest()`),
    // but enable it for local development using `next dev`
    bodyParser: process.env.NODE_ENV !== 'production',
  },
};
