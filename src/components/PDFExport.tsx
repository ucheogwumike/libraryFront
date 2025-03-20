import React from "react";
import { Document, Page, Text, Image, PDFDownloadLink } from "@react-pdf/renderer";

interface PDFProps {
  image: string | null;
  text: string;
}

const PDFExport: React.FC<PDFProps> = ({ image, text }) => {
  const MyDocument = (
    <Document>
      <Page size="A4" style={{ padding: 20 }}>
        {/* {image && <Image src={image} style={{ width: "100%", marginBottom: 10 }} />} */}
        <Text>{text}</Text>
      </Page>
    </Document>
  );

  return (
    <div className="mt-4">
      <PDFDownloadLink document={MyDocument} fileName="scanned-document.pdf">
        {({ loading }) => (
          <button className="bg-red-500 text-white px-4 py-2 rounded-md">
            {loading ? "Generating PDF..." : "Download PDF"}
          </button>
        )}
      </PDFDownloadLink>
    </div>
  );
};

export default PDFExport;
