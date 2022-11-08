import React from "react";
import "./homeStyles.css";
import Webcam from "react-webcam";

const Home = () => {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    console.log('imageSrc',imageSrc);
  }, [webcamRef, setImgSrc]);

  return (
    <div className="main-container">
      <div className="camera-section">
        <h1>Capture the Picture!</h1>
        <Webcam
          height={200}
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
        />
        <br />
        <button onClick={capture} className="button">
          Capture photo
        </button>
      </div>

      <div className="camera-section">
        {imgSrc && <img src={imgSrc} alt="img" />}
      </div>
    </div>
  );
};

export default Home;
