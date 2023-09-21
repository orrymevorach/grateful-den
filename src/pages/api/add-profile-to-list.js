export default async function handler(req, res) {
  try {
    const { profileId } = req.body;
    const date = new Date();
    const revision = date.toISOString().split('T')[0];

    const LIST_ID = 'XnuRRt';
    const listOptions = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        revision,
        Authorization: `Klaviyo-API-Key ${process.env.KLAVIYO_API_KEY}`,
      },
      body: JSON.stringify({ data: [{ type: 'profile', id: profileId }] }),
    };
    const response = await fetch(
      `https://a.klaviyo.com/api/lists/${LIST_ID}/relationships/profiles/`,
      listOptions
    );

    if (response.errors) {
      res.status(200).json({ errors });
    } else {
      res.status(200).json(response);
    }
  } catch (err) {
    res.status(err.statusCode || 500).json(err.message);
  }
}
