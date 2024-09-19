/**
 * Reads a file and returns its contents as a base64 encoded data URL string
 * @param image The file to read
 */
const parseImageFile = async (image: File): Promise<string> => {
  const reader = new FileReader();
  reader.readAsDataURL(image);
  return await new Promise((resolve) => {
    reader.onload = () => resolve(reader.result as string);
  });
};

export default parseImageFile;
