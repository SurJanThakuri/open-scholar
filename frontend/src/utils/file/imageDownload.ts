const downloadImage = async (imageUrl: string, fileName: string = "downloaded-image.png") => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
  
      const objectUrl = URL.createObjectURL(blob);
  
      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
  
      URL.revokeObjectURL(objectUrl);
    } catch (error) {
      console.error("Image download failed:", error);
    }
  };
  
  export default downloadImage;