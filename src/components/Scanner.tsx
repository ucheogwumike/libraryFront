import React, { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import OCR from './OCR';

const Scanner: React.FC = () => {
  const webcamRef = useRef<Webcam>(null);
  const [image, setImage] = useState<string | null>(null);
  const [isShowVideo, setIsShowVideo] = useState(false);

  // Capture Image from Webcam
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    
    if (imageSrc) {
      setImage(imageSrc);
    }
  }, [webcamRef]);

  const off = () => {
    if(webcamRef.current) {
        const cam = webcamRef.current?.video?.srcObject as MediaStream;
        if(cam) {
            cam.getTracks().forEach(track => track.stop());
            setIsShowVideo(false);
        }
    }
    
  }


  const startCam = () => {
    setIsShowVideo(true);
}

  return (
    <div className="flex flex-col items-center">
        {isShowVideo &&
            <Webcam 
            ref={webcamRef} 
            screenshotFormat="image/jpeg" 
            className="border rounded-md"
          />
        
        }
      
      <button 
        onClick={capture} 
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Capture Image
      </button>

      <button 
        onClick={off} 
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        turn off
      </button>

      <button 
        onClick={startCam} 
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        turn on
      </button>

      {image && <img src={image} alt="Scanned Document" className="mt-4" />}
      <OCR image={image} />
    </div>
  );
};

export default Scanner;
