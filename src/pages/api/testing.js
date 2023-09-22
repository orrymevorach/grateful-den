export default async function handler(req, res) {
  try {
    res.status(200).json({});
  } catch (err) {
    res.status(err.statusCode || 500).json({ errors: err.message });
  }
}
