'use server';

type ImageData = {
  data: { id: string; url: string; };
  success: boolean;
  status: number;
};

/**
 * Uploads an image to imgbb.com and returns the url
 * @param data The base64 encoded image data
 * @returns The url of the uploaded image
 * @throws Error if the upload fails
 */
const uploadImage = async (data: string) => {
  const apiKey = process.env.IMGBB_API;

  const body = new FormData();
  body.append('image', data.replace(/^data:image\/\w+;base64,/, ''));
  const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, { method: 'POST', body });

  if (!response.ok) throw new Error('Failed to upload image: ' + response.statusText);
  const result = (await response.json()) as ImageData;
  return result.data.url;
};

export default uploadImage;
