export async function request(query, { variables } = {}) {
  const res = await fetch('https://graphql.datocms.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.DATOCMS_READ_ONLY_API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    throw new Error('Failed to fetch API');
  }

  return json.data;
}


export async function getAllContinentsSlug()
{
  const data = await request(`{ allContinents { slug } }`);

  return data?.allContinents;
}
