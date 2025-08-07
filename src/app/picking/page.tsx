'use client';

import Layout from '@/components/Layout';
import { useState } from 'react';

export default function PickingPage() {
  const [activeOrder, setActiveOrder] = useState<string | null>(null);
  const [showScanner, setShowScanner] = useState(false);
  const [currentItem, setCurrentItem] = useState<any>(null);
  const [scanResult, setScanResult] = useState<any>(null);

  const pickingOrders = [
    {
      id: 'ORD-2024-001',
      customer: 'Tech Solutions Inc',
      priority: 'High',
      items: [
        { sku: 'SKU001', product: 'Wireless Headphones', location: 'A-01-01', quantity: 2, picked: 0 },
        { sku: 'SKU002', product: 'Bluetooth Speaker', location: 'A-01-02', quantity: 1, picked: 0 }
      ],
      status: 'Picking'
    },
    {
      id: 'ORD-2024-002',
      customer: 'Global Electronics',
      priority: 'Normal',
      items: [
        { sku: 'SKU003', product: 'Smart Watch', location: 'B-02-01', quantity: 3, picked: 3 }
      ],
      status: 'Completed'
    }
  ];

  const handleStartPicking = (orderId: string) => {
    setActiveOrder(orderId);
    const order = pickingOrders.find(o => o.id === orderId);
    if (order) {
      const nextItem = order.items.find(item => item.picked < item.quantity);
      setCurrentItem(nextItem);
    }
  };

  const handleScanProduct = () => {
    setShowScanner(true);
    // Simulate scanning
    setTimeout(() => {
      setScanResult({
        product: currentItem?.product || 'Wireless Headphones',
        sku: currentItem?.sku || 'SKU001',
        location: currentItem?.location || 'A-01-01',
        barcode: '1234567890123',
        verified: true
      });
      setShowScanner(false);
    }, 2000);
  };

  const handleConfirmPick = () => {
    if (activeOrder && currentItem) {
      // Update picked quantity (in real app, this would update the backend)
      setScanResult(null);
      
      // Find next item to pick
      const order = pickingOrders.find(o => o.id === activeOrder);
      if (order) {
        const nextItem = order.items.find(item => item.picked < item.quantity && item.sku !== currentItem.sku);
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
            <h1 className="text-2xl font-bold text-gray-900">Picking Operations</h1>
            <p className="text-gray-600">Pick items for outbound orders using barcode scanning</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Picking Queue */}
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-900">Picking Queue</h3>
            </div>
            <div className="p-6 space-y-4">
              {pickingOrders.map((order) => (
                <div key={order.id} className={`border rounded-lg p-4 ${activeOrder === order.id ? 'border-blue-500 bg-blue-50' : 'hover:shadow-md'} transition-all`}>
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
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-gray-600">{item.product}</span>
                        <span className={`font-medium ${item.picked >= item.quantity ? 'text-green-600' : 'text-gray-900'}`}>
                          {item.picked}/{item.quantity}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {order.status === 'Picking' && activeOrder !== order.id && (
                    <button
                      onClick={() => handleStartPicking(order.id)}
                      className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                    >
                      Start Picking
                    </button>
                  )}
                  
                  {order.status === 'Completed' && (
                    <div className="flex items-center justify-center py-2">
                      <span className="text-green-600 font-medium text-sm">
                        <i className="ri-check-line w-4 h-4 flex items-center justify-center mr-1 inline-block"></i>
                        Completed
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Active Picking */}
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-900">Active Picking</h3>
            </div>
            <div className="p-6">
              {activeOrder && currentItem ? (
                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-medium text-blue-900 mb-2">Current Order: {activeOrder}</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-blue-700">Product:</span>
                        <span className="font-medium text-blue-900">{currentItem.product}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-blue-700">SKU:</span>
                        <span className="font-medium text-blue-900">{currentItem.sku}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-blue-700">Location:</span>
                        <span className="font-medium text-blue-900">{currentItem.location}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-blue-700">Quantity to Pick:</span>
                        <span className="font-medium text-blue-900">{currentItem.quantity}</span>
                      </div>
                    </div>
                  </div>

                  {!scanResult && (
                    <button
                      onClick={handleScanProduct}
                      disabled={showScanner}
                      className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap disabled:opacity-50"
                    >
                      <i className="ri-barcode-line w-5 h-5 flex items-center justify-center mr-2 inline-block"></i>
                      {showScanner ? 'Scanning...' : 'Scan Product Barcode'}
                    </button>
                  )}

                  {showScanner && (
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <div className="animate-spin w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                      <p className="text-green-600 font-medium">Scanning barcode...</p>
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
                          <span className="text-green-700">Location:</span>
                          <span className="font-medium text-green-900">{scanResult.location}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-green-700">Status:</span>
                          <span className="font-medium text-green-600">✓ Verified</span>
                        </div>
                      </div>
                      <button
                        onClick={handleConfirmPick}
                        className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap"
                      >
                        Confirm Pick
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-12">
                  <i className="ri-hand-heart-line w-16 h-16 flex items-center justify-center mx-auto mb-4 text-gray-400"></i>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">No Active Picking</h4>
                  <p className="text-gray-600">Select an order from the picking queue to start</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Today's Picking Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Items Picked</p>
                <p className="text-2xl font-bold text-gray-900">127</p>
              </div>
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <i className="ri-check-line text-white w-6 h-6 flex items-center justify-center"></i>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Orders Completed</p>
                <p className="text-2xl font-bold text-gray-900">23</p>
              </div>
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <i className="ri-shopping-cart-line text-white w-6 h-6 flex items-center justify-center"></i>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pick Accuracy</p>
                <p className="text-2xl font-bold text-gray-900">98.5%</p>
              </div>
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                <i className="ri-target-line text-white w-6 h-6 flex items-center justify-center"></i>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Pick Time</p>
                <p className="text-2xl font-bold text-gray-900">2.3min</p>
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