
'use client';

import Layout from '@/components/Layout';
import { useState } from 'react';

export default function OutboundPage() {
  const [activeTab, setActiveTab] = useState('orders');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const orders = [
    {
      id: 'ORD-2024-001',
      customer: 'Samsung Electronics',
      status: 'picking',
      priority: 'High',
      items: 45,
      createDate: '2024-01-15',
      dueDate: '2024-01-17',
      picker: 'John Smith',
      progress: 75
    },
    {
      id: 'ORD-2024-002',
      customer: 'LG Electronics',
      status: 'packing',
      priority: 'Medium',
      items: 28,
      createDate: '2024-01-14',
      dueDate: '2024-01-16',
      picker: 'Jane Doe',
      progress: 90
    },
    {
      id: 'ORD-2024-003',
      customer: 'Hyundai Motors',
      status: 'shipped',
      priority: 'Low',
      items: 67,
      createDate: '2024-01-13',
      dueDate: '2024-01-15',
      picker: 'Mike Johnson',
      progress: 100
    },
    {
      id: 'ORD-2024-004',
      customer: 'SK Hynix',
      status: 'pending',
      priority: 'High',
      items: 89,
      createDate: '2024-01-15',
      dueDate: '2024-01-18',
      picker: '-',
      progress: 0
    }
  ];

  const pickingList = [
    {
      id: 'PICK-001',
      orderId: 'ORD-2024-001',
      picker: 'John Smith',
      location: 'A-12-3',
      product: 'Smartphone Case',
      quantity: 15,
      status: 'in-progress'
    },
    {
      id: 'PICK-002',
      orderId: 'ORD-2024-002',
      picker: 'Jane Doe',
      location: 'B-05-7',
      product: 'Wireless Charger',
      quantity: 8,
      status: 'completed'
    },
    {
      id: 'PICK-003',
      orderId: 'ORD-2024-004',
      picker: 'Mike Johnson',
      location: 'C-08-2',
      product: 'USB Cable',
      quantity: 25,
      status: 'pending'
    }
  ];

  const packingList = [
    {
      id: 'PACK-001',
      orderId: 'ORD-2024-001',
      packer: 'Sarah Wilson',
      items: 15,
      boxSize: 'Medium Box',
      status: 'in-progress',
      weight: '2.5kg'
    },
    {
      id: 'PACK-002',
      orderId: 'ORD-2024-002',
      packer: 'David Lee',
      items: 8,
      boxSize: 'Small Box',
      status: 'completed',
      weight: '1.2kg'
    },
    {
      id: 'PACK-003',
      orderId: 'ORD-2024-003',
      packer: 'Lisa Park',
      items: 25,
      boxSize: 'Large Box',
      status: 'pending',
      weight: '4.1kg'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'picking': return 'bg-blue-100 text-blue-800';
      case 'packing': return 'bg-purple-100 text-purple-800';
      case 'shipped': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return 'Pending';
      case 'picking': return 'Picking';
      case 'packing': return 'Packing';
      case 'shipped': return 'Shipped';
      case 'in-progress': return 'In Progress';
      case 'completed': return 'Completed';
      default: return status;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Outbound Management</h1>
            <p className="text-gray-600">Monitor order processing and outbound operations</p>
          </div>
          <button 
            onClick={() => setShowCreateModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
          >
            <i className="ri-add-line w-4 h-4 flex items-center justify-center mr-2 inline-block"></i>
            Create Outbound Order
          </button>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Orders</p>
                <p className="text-2xl font-bold text-gray-900">87</p>
              </div>
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <i className="ri-file-list-3-line text-white w-6 h-6 flex items-center justify-center"></i>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Picking</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                <i className="ri-hand-heart-line text-white w-6 h-6 flex items-center justify-center"></i>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Packing</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                <i className="ri-box-3-line text-white w-6 h-6 flex items-center justify-center"></i>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Shipped Today</p>
                <p className="text-2xl font-bold text-gray-900">67</p>
              </div>
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <i className="ri-truck-line text-white w-6 h-6 flex items-center justify-center"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="border-b">
            <div className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('orders')}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === 'orders'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Outbound Order Status
              </button>
              <button
                onClick={() => setActiveTab('picking')}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === 'picking'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Picking List
              </button>
              <button
                onClick={() => setActiveTab('packing')}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === 'packing'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Packing List
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'orders' && (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Order ID</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Customer</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Priority</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Item Count</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Assigned To</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Progress</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Due Date</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium text-gray-900">{order.id}</td>
                        <td className="py-3 px-4 text-gray-900">{order.customer}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                            {getStatusText(order.status)}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(order.priority)}`}>
                            {order.priority}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-gray-900">{order.items}</td>
                        <td className="py-3 px-4 text-gray-900">{order.picker}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                              <div
                                className="bg-blue-600 h-2 rounded-full"
                                style={{ width: `${order.progress}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-600">{order.progress}%</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-gray-900">{order.dueDate}</td>
                        <td className="py-3 px-4">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-800">
                              <i className="ri-eye-line w-4 h-4 flex items-center justify-center"></i>
                            </button>
                            <button className="text-green-600 hover:text-green-800">
                              <i className="ri-edit-line w-4 h-4 flex items-center justify-center"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'picking' && (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Picking ID</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Order ID</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Assigned To</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Location</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Product</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Quantity</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pickingList.map((item) => (
                      <tr key={item.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium text-gray-900">{item.id}</td>
                        <td className="py-3 px-4 text-gray-900">{item.orderId}</td>
                        <td className="py-3 px-4 text-gray-900">{item.picker}</td>
                        <td className="py-3 px-4 text-gray-900">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                            {item.location}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-gray-900">{item.product}</td>
                        <td className="py-3 px-4 text-gray-900">{item.quantity}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(item.status)}`}>
                            {getStatusText(item.status)}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-800">
                              <i className="ri-qr-scan-line w-4 h-4 flex items-center justify-center"></i>
                            </button>
                            <button className="text-green-600 hover:text-green-800">
                              <i className="ri-check-line w-4 h-4 flex items-center justify-center"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'packing' && (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Packing ID</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Order ID</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Assigned To</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Item Count</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Box Size</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Weight</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {packingList.map((item) => (
                      <tr key={item.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium text-gray-900">{item.id}</td>
                        <td className="py-3 px-4 text-gray-900">{item.orderId}</td>
                        <td className="py-3 px-4 text-gray-900">{item.packer}</td>
                        <td className="py-3 px-4 text-gray-900">{item.items}</td>
                        <td className="py-3 px-4 text-gray-900">{item.boxSize}</td>
                        <td className="py-3 px-4 text-gray-900">{item.weight}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(item.status)}`}>
                            {getStatusText(item.status)}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-800">
                              <i className="ri-printer-line w-4 h-4 flex items-center justify-center"></i>
                            </button>
                            <button className="text-green-600 hover:text-green-800">
                              <i className="ri-check-line w-4 h-4 flex items-center justify-center"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Create Order Modal */}
        {showCreateModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Create New Outbound Order</h2>
                <button 
                  onClick={() => setShowCreateModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <i className="ri-close-line w-6 h-6 flex items-center justify-center"></i>
                </button>
              </div>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Order ID</label>
                    <input
                      type="text"
                      placeholder="ORD-2024-XXX"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Customer Name</label>
                    <input
                      type="text"
                      placeholder="Enter customer name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Due Date</label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm pr-8">
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Special Instructions</label>
                  <textarea
                    rows={3}
                    placeholder="Enter any special instructions..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  ></textarea>
                </div>
                
                <div className="flex justify-end space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowCreateModal(false)}
                    className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                  >
                    Create Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
