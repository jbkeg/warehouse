'use client';

import Layout from '@/components/Layout';
import { useState } from 'react';

export default function QRScannerPage() {
  const [scanResult, setScanResult] = useState<any>(null);
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    // Simulate scanning delay
    setTimeout(() => {
      setScanResult({
        product: 'Wireless Headphones',
        sku: 'SKU001',
        location: 'A-01-01',
        status: 'In Stock',
        quantity: 45,
        inboundDate: '2024-01-10',
        supplier: 'Tech Supplies Inc',
        condition: 'Good'
      });
      setIsScanning(false);
    }, 2000);
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Inbound QR Code Scanner</h1>
            <p className="text-gray-600">Scan QR codes to check product location and inbound information</p>
          </div>
        </div>

        {/* Scanner Section */}
        <div className="bg-white rounded-lg shadow-sm border p-8">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Product Location Scanner</h2>
              <p className="text-gray-600">Position the QR code within the frame to scan</p>
            </div>

            {/* Scanner Interface */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center mb-6">
              {isScanning ? (
                <div className="space-y-4">
                  <div className="animate-spin w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto"></div>
                  <p className="text-blue-600 font-medium">Scanning...</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <i className="ri-qr-scan-line w-24 h-24 flex items-center justify-center mx-auto text-gray-400"></i>
                  <button
                    onClick={handleScan}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                  >
                    Start Scanning
                  </button>
                </div>
              )}
            </div>

            {/* Scan Result */}
            {scanResult && (
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <i className="ri-check-line w-5 h-5 flex items-center justify-center mr-2 text-green-600"></i>
                  Scan Result
                </h3>
                <div className="space-y-3">
                  <div className="bg-white rounded border p-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm text-gray-600">Product:</span>
                        <p className="font-medium text-gray-900">{scanResult.product}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">SKU:</span>
                        <p className="font-medium text-gray-900">{scanResult.sku}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Location:</span>
                        <p className="font-medium text-gray-900">{scanResult.location}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Status:</span>
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                          {scanResult.status}
                        </span>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Quantity:</span>
                        <p className="font-medium text-gray-900">{scanResult.quantity} units</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Condition:</span>
                        <p className="font-medium text-gray-900">{scanResult.condition}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Inbound Date:</span>
                        <p className="font-medium text-gray-900">{scanResult.inboundDate}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Supplier:</span>
                        <p className="font-medium text-gray-900">{scanResult.supplier}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-4 mt-4">
                  <button
                    onClick={() => setScanResult(null)}
                    className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap"
                  >
                    Scan Again
                  </button>
                  <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
                    View Details
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Recent Scans */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold text-gray-900">Recent Scans</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {[
                { product: 'Bluetooth Speaker', sku: 'SKU002', location: 'A-01-02', time: '10:15 AM' },
                { product: 'Smart Watch', sku: 'SKU003', location: 'B-02-01', time: '10:08 AM' },
                { product: 'Phone Case', sku: 'SKU004', location: 'A-02-03', time: '09:55 AM' }
              ].map((scan, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{scan.product}</p>
                    <p className="text-sm text-gray-600">{scan.sku} - {scan.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">{scan.time}</p>
                    <button className="text-blue-600 hover:text-blue-800 text-sm">
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}