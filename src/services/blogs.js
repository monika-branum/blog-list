import { checkError, client } from './client';

export async function fetchBlogs() {
  const resp = await client.from('blogs').select('*');
  console.log(resp, 'response');
  return checkError(resp);
}
