export const generateURL = (file: any): string => {
  const imageArray = Array.from(new Uint8Array(file));
  const base64Image = btoa(String.fromCharCode.apply(null, imageArray));
  return `data:image/png;base64,${base64Image}`;
};
