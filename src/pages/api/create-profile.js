export default async function handler(req, res) {
  try {
    console.log('hey dude!');
    const { email } = req.body;
    const date = new Date();
    const revision = date.toISOString().split('T')[0];
    const profileOptions = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        revision,
        'content-type': 'application/json',
        Authorization: `Klaviyo-API-Key ${process.env.KLAVIYO_API_KEY}`,
      },
      body: JSON.stringify({
        data: {
          type: 'profile',
          attributes: {
            email,
          },
        },
      }),
    };
    const profile = await (
      await fetch('https://a.klaviyo.com/api/profiles/', profileOptions)
    ).json();

    if (!!profile.errors) {
      res.status(200).json({ errors: profile.errors });
    } else {
      res.status(200).json({ profile });
    }
  } catch (err) {
    res.status(err.statusCode || 500).json({ errors: err.message });
  }
}
