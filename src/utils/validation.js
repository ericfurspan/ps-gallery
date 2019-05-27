
// Handles any API field formatting needs
export const formatResponse = (response) => {
  const clean = response.map(image => {
    const date = new Date(Date.parse(image.DATE)).toLocaleDateString();
    return {
      ...image,
      DATE: date
    }
  });
  return clean;
}