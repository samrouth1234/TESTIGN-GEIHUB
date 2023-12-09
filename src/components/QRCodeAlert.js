"use client"
import QRCode from "qrcode.react";
import { useState } from "react";

const QRCodeAlert = () => {
  const [isScanned, setIsScanned] = useState(false);

  const handleQRCodeScan = () => {
    setIsScanned(true);
    alert("QR code scanned!");
  };

  return (
    <div>
      <h1>QR Code</h1>
      {!isScanned && (
        <QRCode value="https://example.com" onScan={handleQRCodeScan} />
      )}
    </div>
  );
};

export default QRCodeAlert;
