import React, { forwardRef, useRef, useState, useEffect } from "react";
import { toBase64 } from "../../../helper/ImageConverter";

const ImageField = forwardRef(({ imageBytes, setValue }) => {
  const fileInputRef = useRef({});

  const [imageSource, setImageSource] = useState("");

  useEffect(() => {
    if (imageBytes) {
      setImageSource(`data:image/jpeg;base64,${imageBytes}`);
    }
  }, [imageBytes]);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    const base64 = await toBase64(selectedFile);
    setImageSource(base64);
    const index = base64.indexOf(",");
    const res = base64.substring(index + 1, base64.length);
    setValue("image", res);
  };

  return (
    <div className="form-group my-2">
      <img
        src={imageSource}
        width={400}
        height={400}
        onClick={handleImageClick}
        alt="Зображення оголошення"
      />
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="d-none"
      />
    </div>
  );
});

export default ImageField;
