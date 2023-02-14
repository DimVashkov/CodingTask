const API_URL = 'http://localhost:5000';

export const getImages = async (nextCursor) => {
  const params = new URLSearchParams();

  if (nextCursor) {
    params.append('next_cursor',nextCursor);
  }

  const response = await fetch(`${API_URL}/?${params}`);

  return await response.json();
}

export const starImage = async (public_id, starred) => {
  if (!public_id) {
    return;
  }

  const params = new URLSearchParams();
  params.append('id', public_id);
  params.append('starred', starred === 'false');

  const response = await fetch(`${API_URL}/star?${params}`, {method: 'PATCH'})

  return await response.json();
}

export const deleteImage = async (public_id) => {
  if (!public_id) {
    return;
  }

  const params = new URLSearchParams();
  params.append('id', public_id);

  const response = await fetch(`${API_URL}/?${params}`, {method: 'DELETE'});

  return await response.json();
}