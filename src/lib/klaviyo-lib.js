export async function createProfileAndAddToList({ email }) {
  const { profile, errors } = await fetch('/api/create-profile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  }).then(res => res.json());

  if (errors) return { error: errors[0] };

  if (profile?.data) {
    const response = await fetch('/api/add-profile-to-list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ profileId: profile.data.id }),
    });
    return response;
  }
  return;
}
