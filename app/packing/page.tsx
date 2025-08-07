'use client';

import Layout from '@/components/Layout';
import { useState } from 'react';

export default function PackingPage() {
  const [activeOrder, setActiveOrder] = useState<string | null>(null);
  const [showScanner, setShowScanner] = useState(false);
  const [currentItem, setCurrentItem] = useState<any>(null);
  const [scanResult, setScanResult] = useState<any>(null);

  const packingOrders = [
    {
      id: 'ORD-2024-002',
      customer: 'Global Electronics',
      priority: 'Normal',
      items: [
        { sku: 'SKU003', product: 'Smart Watch', quantity: 3, packed: 0, boxSize: 'Small', weight: '0.5kg' }
      ],
      status: 'Ready to Pack'
    },
    {
      id: 'ORD-2024-003',
      customer: 'Digital Store Co',
      priority: 'Urgent',
      items: [
        { sku: 'SKU001', product: 'Wireless Headphones', quantity: 3, packed: 3, boxSize: 'Medium', weight: '1.2kg' },
        { sku: 'SKU004', product: 'Phone Case', quantity: 5, packed: 0, boxSize: 'Small', weight: '0.3kg' }
      ],
      status: 'Packing'
    }
  ];

  const handleStartPacking = (orderId: string) => {
    setActiveOrder(orderId);
    const order = packingOrders.find(o => o.id === orderId);
    if (order) {
      const nextItem = order.items.find(item => item.packed < item.quantity);
      setCurrentItem(nextItem);
    }
  };

  const handleScanProduct = () => {
    setShowScanner(true);
    // Simulate scanning
    setTimeout(() => {
      setScanResult({
        product: currentItem?.product || 'Smart Watch',
        sku: currentItem?.sku || 'SKU003',
        barcode: '1234567890125',
        boxSize: currentItem?.boxSize || 'Small',
        weight: currentItem?.weight || '0.5kg',
        verified: true
      });
      setShowScanner(false);
    }, 2000);
  };

  const handleConfirmPack = () => {
    if (activeOrder && currentItem) {
      // Update packed quantity (in real app, this would update the backend)
      setScanResult(null);
      
      // Find next item to pack
      const order = packingOrders.find(o => o.id === activeOrder);
      if (order) {
        const nextItem = order.items.find(item => item.packed < item.quantity && item.sku !== currentItem.sku);
        setCurrentItem(nextItem);
        
        if (!nextItem) {
          // Order completed
          setActiveOrder(null);
          setCurrentItem(null);
        }
      }
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Urgent': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-orange-100 text-orange-800';
      case 'Normal': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Packing Operations</h1>
            <p className="text-gray-600">Pack items for shipping using barcode scanning</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Packing Queue */}
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-900">Packing Queue</h3>
            </div>
            <div className="p-6 space-y-4">
              {packingOrders.map((order) => (
                <div key={order.id} className={`border rounded-lg p-4 ${activeOrder === order.id ? 'border-purple-500 bg-purple-50' : 'hover:shadow-md'} transition-all`}>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-medium text-gray-900">{order.id}</h4>
                      <p className="text-sm text-gray-600">{order.customer}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(order.priority)}`}>
                      {order.priority}
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex justify-between items-center text-sm">
                        <div>
                          <span className="text-gray-900">{item.product}</span>
                          <span className="text-gray-500 ml-2">({item.boxSize})</span>
                        </div>
                        <span className={`font-medium ${item.packed >= item.quantity ? 'text-green-600' : 'text-gray-900'}`}>
                          {item.packed}/{item.quantity}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {order.status === 'Ready to Pack' && activeOrder !== order.id && (
                    <button
                      onClick={() => handleStartPacking(order.id)}
                      className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors whitespace-nowrap"
                    >
                      Start Packing
                    </button>
                  )}
                  
                  {order.status === 'Packing' && activeOrder !== order.id && (
                    <button
                      onClick={() => handleStartPacking(order.id)}
                      className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors whitespace-nowrap"
                    >
                      Continue Packing
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Active Packing */}
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-900">Active Packing</h3>
            </div>
            <div className="p-6">
              {activeOrder && currentItem ? (
                <div className="space-y-6">
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-medium text-purple-900 mb-2">Current Order: {activeOrder}</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-purple-700">Product:</span>
                        <span className="font-medium text-purple-900">{currentItem.product}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-purple-700">SKU:</span>
                        <span className="font-medium text-purple-900">{currentItem.sku}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-purple-700">Quantity to Pack:</span>
                        <span className="font-medium text-purple-900">{currentItem.quantity}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-purple-700">Box Size:</span>
                        <span className="font-medium text-purple-900">{currentItem.boxSize}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-purple-700">Weight:</span>
                        <span className="font-medium text-purple-900">{currentItem.weight}</span>
                      </div>
                    </div>
                  </div>

                  {!scanResult && (
                    <button
                      onClick={handleScanProduct}
                      disabled={showScanner}
                      className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors whitespace-nowrap disabled:opacity-50"
                    >
                      <i className="ri-barcode-line w-5 h-5 flex items-center justify-center mr-2 inline-block"></i>
                      {showScanner ? 'Scanning...' : 'Scan Product Barcode'}
                    </button>
                  )}

                  {showScanner && (
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <div className="animate-spin w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                      <p className="text-purple-600 font-medium">Scanning barcode...</p>
                    </div>
                  )}

                  {scanResult && (
                    <div className="bg-green-50 rounded-lg p-4">
                      <h5 className="font-medium text-green-900 mb-3 flex items-center">
                        <i className="ri-check-line w-5 h-5 flex items-center justify-center mr-2"></i>
                        Scan Result
                      </h5>
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-green-700">Product:</span>
                          <span className="font-medium text-green-900">{scanResult.product}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-green-700">SKU:</span>
                          <span className="font-medium text-green-900">{scanResult.sku}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-green-700">Box Size:</span>
                          <span className="font-medium text-green-900">{scanResult.boxSize}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-green-700">Weight:</span>
                          <span className="font-medium text-green-900">{scanResult.weight}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-green-700">Status:</span>
                          <span className="font-medium text-green-600">✓ Verified</span>
                        </div>
                      </div>
                      <button
                        onClick={handleConfirmPack}
                        className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap"
                      >
                        Confirm Pack
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-12">
                  <i className="ri-archive-line w-16 h-16 flex items-center justify-center mx-auto mb-4 text-gray-400"></i>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">No Active Packing</h4>
                  <p className="text-gray-600">Select an order from the packing queue to start</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Today's Packing Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Items Packed</p>
                <p className="text-2xl font-bold text-gray-900">89</p>
              </div>
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                <i className="ri-archive-line text-white w-6 h-6 flex items-center justify-center"></i>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Boxes Shipped</p>
                <p className="text-2xl font-bold text-gray-900">34</p>
              </div>
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <i className="ri-truck-line text-white w-6 h-6 flex items-center justify-center"></i>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pack Accuracy</p>
                <p className="text-2xl font-bold text-gray-900">99.2%</p>
              </div>
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <i className="ri-check-line text-white w-6 h-6 flex items-center justify-center"></i>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Pack Time</p>
                <p className="text-2xl font-bold text-gray-900">3.7min</p>
              </div>
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                <i className="ri-time-line text-white w-6 h-6 flex items-center justify-center"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}