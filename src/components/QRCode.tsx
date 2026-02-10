import React from 'react';
import { motion } from 'framer-motion';
import { Copy, CheckCircle, Smartphone } from 'lucide-react';

interface QRCodeProps {
  value: string;
  size?: number;
  title?: string;
  description?: string;
}

const QRCode: React.FC<QRCodeProps> = ({ 
  value, 
  size = 200, 
  title = "Scan to Pay",
  description = "Use any UPI app to scan"
}) => {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Generate QR code URL using a free service
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(value)}`;

  return (
    <motion.div
      className="bg-white rounded-2xl p-6 shadow-xl"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <Smartphone className="w-6 h-6 text-primary-600 mr-2" />
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        </div>
        
        <div className="relative inline-block mb-4">
          <img
            src={qrCodeUrl}
            alt="Payment QR Code"
            className="rounded-lg shadow-lg"
            style={{ width: size, height: size }}
          />
          <div className="absolute inset-0 bg-white/90 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <Smartphone className="w-12 h-12 text-primary-600" />
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-4">{description}</p>
        
        <div className="bg-gray-100 rounded-lg p-3 mb-4">
          <p className="text-xs text-gray-500 mb-1">UPI ID / Phone Number</p>
          <p className="font-mono text-sm text-gray-800 break-all">{value}</p>
        </div>

        <motion.button
          onClick={copyToClipboard}
          className={`w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
            copied 
              ? 'bg-green-500 text-white' 
              : 'bg-primary-600 text-white hover:bg-primary-700'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {copied ? (
            <>
              <CheckCircle className="w-4 h-4" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copy UPI ID</span>
            </>
          )}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default QRCode;
