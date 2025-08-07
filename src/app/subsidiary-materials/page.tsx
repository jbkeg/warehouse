'use client';

import Layout from '@/components/Layout';
import { useState } from 'react';

export default function SubsidiaryMaterialsPage() {
  const [activeTab, setActiveTab] = useState('inventory');
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [showMaterialModal, setShowMaterialModal] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState<any>(null);
  const [modalMode, setModalMode] = useState<'create' | 'edit'>('create');

  const subsidiaryMaterials = [
    {
      id: 'MAT-001',
      name: 'Small Cardboard Box (10x10x10)',
      category: 'Packaging Box',
      currentStock: 45,
      minimumStock: 100,
      maxStock: 500,
      unitCost: 2.50,
      supplier: 'Box Solutions Inc',
      lastRestocked: '2024-01-10',
      status: 'Low Stock',
      location: 'A-01-05'
    },
    {
      id: 'MAT-002', 
      name: 'Medium Cardboard Box (15x15x15)',
      category: 'Packaging Box',
      currentStock: 78,
      minimumStock: 80,
      maxStock: 400,
      unitCost: 3.25,
      supplier: 'Box Solutions Inc',
      lastRestocked: '2024-01-12',
      status: 'Low Stock',
      location: 'A-01-06'
    },
    {
      id: 'MAT-003',
      name: 'Large Cardboard Box (20x20x20)',
      category: 'Packaging Box',
      currentStock: 156,
      minimumStock: 60,
      maxStock: 300,
      unitCost: 4.75,
      supplier: 'Premium Pack Co',
      lastRestocked: '2024-01-08',
      status: 'In Stock',
      location: 'A-01-07'
    },
    {
      id: 'MAT-004',
      name: 'Bubble Wrap Roll (24" x 250ft)',
      category: 'Protective Material',
      currentStock: 23,
      minimumStock: 30,
      maxStock: 100,
      unitCost: 8.90,
      supplier: 'Protection Plus',
      lastRestocked: '2024-01-05',
      status: 'Low Stock',
      location: 'B-02-03'
    },
    {
      id: 'MAT-005',
      name: 'Packing Tape (2" x 110yd)',
      category: 'Sealing Material',
      currentStock: 89,
      minimumStock: 50,
      maxStock: 200,
      unitCost: 1.85,
      supplier: 'Adhesive Works',
      lastRestocked: '2024-01-14',
      status: 'In Stock',
      location: 'B-03-01'
    },
    {
      id: 'MAT-006',
      name: 'Fragile Stickers (2" x 3")',
      category: 'Labeling',
      currentStock: 245,
      minimumStock: 100,
      maxStock: 500,
      unitCost: 0.15,
      supplier: 'Label Masters',
      lastRestocked: '2024-01-11',
      status: 'In Stock',
      location: 'B-03-02'
    }
  ];

  const clientMaterials = [
    {
      id: 'CLIENT-001',
      clientName: 'Samsung Electronics',
      materialType: 'Custom Branded Box',
      description: 'Samsung Logo Box (12x12x6)',
      currentStock: 120,
      minimumStock: 200,
      allocatedStock: 85,
      unitCost: 5.50,
      lastUsed: '2024-01-15',
      status: 'Low Stock',
      location: 'C-01-01'
    },
    {
      id: 'CLIENT-002',
      clientName: 'LG Electronics',
      materialType: 'Custom Insert',
      description: 'Foam Insert for Electronics',
      currentStock: 67,
      minimumStock: 100,
      allocatedStock: 45,
      unitCost: 3.20,
      lastUsed: '2024-01-14',
      status: 'Low Stock',
      location: 'C-01-02'
    },
    {
      id: 'CLIENT-003',
      clientName: 'Apple Inc',
      materialType: 'Premium Box',
      description: 'White Premium Box (8x8x4)',
      currentStock: 340,
      minimumStock: 150,
      allocatedStock: 120,
      unitCost: 8.75,
      lastUsed: '2024-01-13',
      status: 'In Stock',
      location: 'C-02-01'
    }
  ];

  const lowStockAlerts = [
    {
      id: 'ALERT-001',
      materialId: 'MAT-001',
      materialName: 'Small Cardboard Box (10x10x10)',
      currentStock: 45,
      minimumStock: 100,
      shortage: 55,
      priority: 'High',
      estimatedRunout: '3 days',
      action: 'Reorder Required'
    },
    {
      id: 'ALERT-002',
      materialId: 'MAT-002',
      materialName: 'Medium Cardboard Box (15x15x15)',
      currentStock: 78,
      minimumStock: 80,
      shortage: 2,
      priority: 'Medium',
      estimatedRunout: '5 days',
      action: 'Monitor Closely'
    },
    {
      id: 'ALERT-003',
      materialId: 'CLIENT-001',
      materialName: 'Samsung Logo Box (12x12x6)',
      currentStock: 120,
      minimumStock: 200,
      shortage: 80,
      priority: 'High',
      estimatedRunout: '2 days',
      action: 'Contact Client'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Stock': return 'bg-green-100 text-green-800';
      case 'Low Stock': return 'bg-red-100 text-red-800';
      case 'Out of Stock': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
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

  const openMaterialModal = (mode: 'create' | 'edit', material?: any) => {
    setModalMode(mode);
    setSelectedMaterial(material || null);
    setShowMaterialModal(true);
  };

  const sendLowStockAlert = () => {
    // Simulate sending alert to manager
    alert('Low stock alert has been sent to the warehouse manager!');
    setShowAlertModal(false);
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Subsidiary Material Management</h1>
            <p className="text-gray-600">Manage packaging materials and client-specific materials</p>
          </div>
          <div className="flex space-x-3">
            <button 
              onClick={() => setShowAlertModal(true)}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors whitespace-nowrap"
            >
              <i className="ri-alert-line w-4 h-4 flex items-center justify-center mr-2 inline-block"></i>
              Alert Manager
            </button>
            <button 
              onClick={() => openMaterialModal('create')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
              <i className="ri-add-line w-4 h-4 flex items-center justify-center mr-2 inline-block"></i>
              Add Material
            </button>
          </div>
        </div>

        {/* Alert Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Materials</p>
                <p className="text-2xl font-bold text-gray-900">152</p>
              </div>
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <i className="ri-box-2-line text-white w-6 h-6 flex items-center justify-center"></i>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Low Stock Items</p>
                <p className="text-2xl font-bold text-red-600">8</p>
              </div>
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                <i className="ri-alert-line text-white w-6 h-6 flex items-center justify-center animate-pulse"></i>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Client Materials</p>
                <p className="text-2xl font-bold text-gray-900">23</p>
              </div>
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                <i className="ri-user-star-line text-white w-6 h-6 flex items-center justify-center"></i>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Monthly Usage</p>
                <p className="text-2xl font-bold text-gray-900">$2,450</p>
              </div>
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <i className="ri-money-dollar-circle-line text-white w-6 h-6 flex items-center justify-center"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="border-b">
            <div className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('inventory')}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === 'inventory'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                General Materials
              </button>
              <button
                onClick={() => setActiveTab('client-materials')}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === 'client-materials'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Client Materials
              </button>
              <button
                onClick={() => setActiveTab('alerts')}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === 'alerts'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Low Stock Alerts
                <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                  {lowStockAlerts.length}
                </span>
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'inventory' && (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Material ID</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Name</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Category</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Current Stock</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Min/Max</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Unit Cost</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subsidiaryMaterials.map((material) => (
                      <tr key={material.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium text-gray-900">{material.id}</td>
                        <td className="py-3 px-4 text-gray-900">{material.name}</td>
                        <td className="py-3 px-4 text-gray-900">{material.category}</td>
                        <td className="py-3 px-4 text-gray-900 font-medium">{material.currentStock}</td>
                        <td className="py-3 px-4 text-gray-900">{material.minimumStock}/{material.maxStock}</td>
                        <td className="py-3 px-4 text-gray-900">${material.unitCost}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(material.status)}`}>
                            {material.status}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-800">
                              <i className="ri-eye-line w-4 h-4 flex items-center justify-center"></i>
                            </button>
                            <button 
                              onClick={() => openMaterialModal('edit', material)}
                              className="text-green-600 hover:text-green-800"
                            >
                              <i className="ri-edit-line w-4 h-4 flex items-center justify-center"></i>
                            </button>
                            <button className="text-purple-600 hover:text-purple-800">
                              <i className="ri-shopping-cart-line w-4 h-4 flex items-center justify-center"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'client-materials' && (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Client ID</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Client Name</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Material Type</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Description</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Available/Allocated</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Min Stock</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clientMaterials.map((material) => (
                      <tr key={material.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium text-gray-900">{material.id}</td>
                        <td className="py-3 px-4 text-gray-900 font-medium">{material.clientName}</td>
                        <td className="py-3 px-4 text-gray-900">{material.materialType}</td>
                        <td className="py-3 px-4 text-gray-900">{material.description}</td>
                        <td className="py-3 px-4 text-gray-900">
                          <div className="space-y-1">
                            <div className="text-sm">Available: <span className="font-medium">{material.currentStock - material.allocatedStock}</span></div>
                            <div className="text-sm text-gray-500">Allocated: {material.allocatedStock}</div>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-gray-900">{material.minimumStock}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(material.status)}`}>
                            {material.status}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-800">
                              <i className="ri-eye-line w-4 h-4 flex items-center justify-center"></i>
                            </button>
                            <button className="text-green-600 hover:text-green-800">
                              <i className="ri-edit-line w-4 h-4 flex items-center justify-center"></i>
                            </button>
                            <button className="text-orange-600 hover:text-orange-800">
                              <i className="ri-phone-line w-4 h-4 flex items-center justify-center"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'alerts' && (
              <div className="space-y-4">
                {lowStockAlerts.map((alert) => (
                  <div key={alert.id} className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                          <i className="ri-alert-line text-white w-5 h-5 flex items-center justify-center"></i>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{alert.materialName}</h4>
                          <p className="text-sm text-gray-600">ID: {alert.materialId}</p>
                        </div>
                      </div>
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(alert.priority)}`}>
                        {alert.priority} Priority
                      </span>
                    </div>
                    
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Current Stock</p>
                        <p className="font-medium text-red-600">{alert.currentStock}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Minimum Required</p>
                        <p className="font-medium text-gray-900">{alert.minimumStock}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Shortage</p>
                        <p className="font-medium text-red-600">{alert.shortage} units</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Est. Runout</p>
                        <p className="font-medium text-orange-600">{alert.estimatedRunout}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex space-x-2">
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                          Action: {alert.action}
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 whitespace-nowrap">
                          Reorder Now
                        </button>
                        <button className="px-3 py-1 bg-gray-600 text-white text-sm rounded-lg hover:bg-gray-700 whitespace-nowrap">
                          Contact Supplier
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Alert Manager Modal */}
        {showAlertModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Send Low Stock Alert</h2>
                <button 
                  onClick={() => setShowAlertModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <i className="ri-close-line w-6 h-6 flex items-center justify-center"></i>
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-4">
                  <h3 className="font-medium text-red-900 mb-2">Critical Low Stock Items:</h3>
                  <ul className="text-sm text-red-800 space-y-1">
                    <li>• Small Cardboard Box: 45 units (Need 55 more)</li>
                    <li>• Samsung Logo Box: 120 units (Need 80 more)</li>
                    <li>• Bubble Wrap Roll: 23 units (Need 7 more)</li>
                  </ul>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Alert Message</label>
                  <textarea
                    rows={4}
                    defaultValue="URGENT: Multiple packaging materials are running critically low. Immediate reordering required to prevent packaging delays."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  ></textarea>
                </div>
                
                <div className="flex justify-end space-x-4">
                  <button
                    onClick={() => setShowAlertModal(false)}
                    className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={sendLowStockAlert}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors whitespace-nowrap"
                  >
                    Send Alert
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Add/Edit Material Modal */}
        {showMaterialModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  {modalMode === 'create' ? 'Add New Material' : 'Edit Material'}
                </h2>
                <button 
                  onClick={() => setShowMaterialModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <i className="ri-close-line w-6 h-6 flex items-center justify-center"></i>
                </button>
              </div>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Material Name</label>
                    <input
                      type="text"
                      defaultValue={selectedMaterial?.name || ''}
                      placeholder="Enter material name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <select 
                      defaultValue={selectedMaterial?.category || ''}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm pr-8"
                    >
                      <option value="">Select Category</option>
                      <option value="Packaging Box">Packaging Box</option>
                      <option value="Protective Material">Protective Material</option>
                      <option value="Sealing Material">Sealing Material</option>
                      <option value="Labeling">Labeling</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Stock</label>
                    <input
                      type="number"
                      defaultValue={selectedMaterial?.currentStock || ''}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Stock</label>
                    <input
                      type="number"
                      defaultValue={selectedMaterial?.minimumStock || ''}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Maximum Stock</label>
                    <input
                      type="number"
                      defaultValue={selectedMaterial?.maxStock || ''}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Unit Cost ($)</label>
                    <input
                      type="number"
                      step="0.01"
                      defaultValue={selectedMaterial?.unitCost || ''}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Supplier</label>
                    <input
                      type="text"
                      defaultValue={selectedMaterial?.supplier || ''}
                      placeholder="Enter supplier name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Storage Location</label>
                  <input
                    type="text"
                    defaultValue={selectedMaterial?.location || ''}
                    placeholder="e.g., A-01-05"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
                
                <div className="flex justify-end space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowMaterialModal(false)}
                    className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                  >
                    {modalMode === 'create' ? 'Add Material' : 'Update Material'}
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