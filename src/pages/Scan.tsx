import React, { useRef, useState} from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Webcam from "react-webcam";
import axios from "axios";
import SideMenu from "../components/SideMenu";
import UploadModal from "../components/UploadModal";
import { FaTrash, FaUpload } from "react-icons/fa";


const Scan = () => {
  const [images, setImages] = useState<any>([]);
  const [uploadStatus, setUploadStatus] = useState("");
  const [scan, setScan] = useState(false)
  const [upload, setUpload] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadData, setUploadData] = useState<{ name: string; category: string } | null>(null);


  const handleScan = () => {
    setUpload(false)
    setScan(true)
  }

  const handleUpload = () => {
    setUpload(true)
    setScan(false)
  }

  const deleteImage = (index: number) => {
    setImages((prev:any) => prev.filter((_:any, i:any) => i !== index));
  };

  const handleFiles = (event:any) => {
    const files = event.target.files;
    if (files.length === 0) return;

    const imageArray = Array.from(files).map((file:any) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    setImages(imageArray);
  };

  const generateAndUploadPDF = async (name: string, category: string) => {
    if (images.length === 0) {
      setUploadStatus("Please upload images first.");
      return;
    }

    setUploadStatus("Generating PDF...");

    const pdf = new jsPDF();

    for (let i = 0; i < images.length; i++) {
      

      if (i > 0) pdf.addPage();
      pdf.addImage(images[i], "JPEG", 10, 10, 190, 0);
      console.log(i)
    }

    

   

    // Convert PDF to Blob
    const pdfBlob = pdf.output("blob");

    // Create FormData and append PDF
    const formData = new FormData();
    formData.append("file", pdfBlob, `${name}.pdf`);
    formData.append("name", name);
    formData.append("category", category);
    

    try {
      setUploadStatus("Uploading PDF...");
      const response = await axios.post("http://localhost:3500/files", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setUploadStatus(`Upload successful: ${response.data.message}`);
    } catch (error) {
      setUploadStatus("Upload failed. Please try again.");
      console.error("Upload error:", error);
    }
  };

  const webcamRef = useRef<Webcam>(null);
    const [image, setImage] = useState<string>('');
    const [isShowVideo, setIsShowVideo] = useState(false);
    const [count, setCount] = useState(0)
  
    // Capture Image from Webcam
   
    const capture = () => {
    if (webcamRef.current){
        const imageSrc = webcamRef.current?.getScreenshot();
        let imgArray:any = []
        let numArr =[]

        setCount(count+1)

      if (imageSrc) {
        setImage(imageSrc);
        numArr.push(1)
        imgArray= imgArray.push(imageSrc)
        // console.log(imageSrc)
        console.log(imgArray)
        setImages(() => (
            [...images,imageSrc]
        ))
      }
      console.log(count)

      console.log(images)

    }
     

      
    };
  
    
    const off = () => {
      if(webcamRef.current) {
          const cam = webcamRef.current?.video?.srcObject as MediaStream;
          if(cam) {
              cam.getTracks().forEach(track => track.stop());
              setIsShowVideo(false);
          }
      }
      
    }

    const handleUploadClick = () => {
        setIsModalOpen(true);
      };
  
  
    const startCam = () => {
      setIsShowVideo(true);
  }

  return (
    <div className="flex">
        <SideMenu/>
        <div className="w-full" style={{ textAlign: "center", padding: "20px" }}>
      {/* <button onClick={handleUpload}>Upload Images and Convert to PDF</button> */}
      <h2 className="bg-green-900 text-white py-3 rounded-lg hover:bg-green-800 transition" >Scan Images and Convert to PDF</h2>
      {/* {upload && <>
        <input type="file" multiple accept="image/*" onChange={handleFiles} />
      <div style={{ marginTop: "20px" }}>
        {images.map((img:any, index:string|number) => (
          <img
            key={index}
            src={img.url}
            alt={`Preview ${index}`}
            style={{ width: "100px", height: "100px", margin: "5px" }}
          />
        ))}
      </div>
      <button
        onClick={generateAndUploadPDF}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Upload PDF
      </button>
      <p>{uploadStatus}</p>
      </>} */}
      {/* { */}
        {/* scan && <> */}
          {/* <input type="file" multiple accept="image/*" onChange={handleFiles} /> */}
          <div className="flex flex-col items-center">
        {isShowVideo &&
            <Webcam 
            ref={webcamRef} 
            screenshotFormat="image/jpeg" 
            className="border rounded-md"
          />
        
        }


        <button 
        onClick={startCam} 
        className="mt-4 bg-green-900 text-white px-4 py-2 rounded-md"
      >
        turn on
      </button>


        <button 
        onClick={off} 
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
      >
        turn off
      </button>
      
      <button 
        onClick={capture} 
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Capture 📸
      </button>

    

      

      
      
    </div>
    <>{console.log(images.length)}</>
    {images.length  > 0 && (
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img:any, index:number) => (
            
            <div key={index} className="relative group">
                <img
                key={index}
                src={img}
                alt={`Preview ${index}`}
                style={{ width: "100px", height: "100px", margin: "5px" }}
              /> 
                
             <button
                onClick={() => deleteImage(index)}
                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
              >
                <FaTrash size={16} />
              </button>

            </div>
            
            
              
          
        ))}
        
      </div>
    )}
      

      <button
        onClick={handleUploadClick}
        className="mt-5 px-6 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition"
      >
        <FaUpload className="m-auto" size={20} /><br/>
        UPLOAD PDF 
      </button>
      <p>{uploadStatus}</p>
        {/* </> */}
      {/* } */}
    
    </div>

    <UploadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onUpload={generateAndUploadPDF} />
    </div>
    
  );
};

export default Scan;