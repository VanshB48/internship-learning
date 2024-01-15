import React, { useState, useRef, useEffect } from 'react';
import './ImageGenerator.css';
import preview from '../Assets/preview.png'; // Use import statement for the image

const ImageGenerator = () => {
  const [image, setImage] = useState("/");
  const inputRef = useRef(null);

  const imageGenerator = async () => {
    try {
      if (inputRef.current.value === "") {
        return 0;
      }

      const response = await fetch(
        "https://api.openai.com/v1/images/generations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer <OPENAI_API>",
            "User-Agent": "Chrome",
          },
          body: JSON.stringify({
            prompt: inputRef.current.value,
            n: 1,
            size: '512X512',
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      let array_data=data.data;
      setImage(array_data[0].url); // Assuming the response contains the image data
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    // You can call the imageGenerator function here if you want it to run on component mount
  }, []); // The empty dependency array ensures that it runs only once on mount

  return (
    <div className='ai_image_generator'>
      <div className='header'>AI Image <span>Generator</span></div>
      <div className="img-loading">
        <div className="image"><img src={image === '/' ? preview : image} alt="" /></div>
      </div>
      <div className="search-box">
        <input type="text" ref={inputRef} className="search-input" placeholder='An oil painting by Matisse of a humanoid robot playing chess' />
        <div className="generate-btn" onClick={() => { imageGenerator() }}>Generate</div>
      </div>
    </div>
  );
}

export default ImageGenerator;
