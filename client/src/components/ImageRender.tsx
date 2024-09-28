import { useEffect, useState } from "react";
import axios from "axios";

const UNSPLASH_API_KEY = "ii_2Sf80VE_Cr9UU-tkLax99AlEi84MI_sExEINLV5Y";

interface UnsplashImageProps {
  productName: string;
  altText: string;
}

const UnsplashImage = ({ productName, altText }: UnsplashImageProps) => {
  const [imageUrl, setImageUrl] = useState<string>("/placeholder-image.jpg");

  useEffect(() => {
    const fetchImageFromUnsplash = async () => {
      const query = `${productName} vegetable image`;
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=${query}&client_id=ii_2Sf80VE_Cr9UU-tkLax99AlEi84MI_sExEINLV5Y`
        );
        const image = response.data.results[0]?.urls.raw;
        if (image) {
          setImageUrl(image);
        }
      } catch (error) {
        console.error("Error fetching Unsplash image:", error);
      }
    };

    fetchImageFromUnsplash();
  }, [productName]);

  return (
    <img
      src={imageUrl}
      alt={altText}
      className="w-full h-48 object-cover rounded-md"
    />
  );
};

export default UnsplashImage;
