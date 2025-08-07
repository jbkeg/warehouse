'use client';

import Layout from '@/components/Layout';
import { useState } from 'react';

export default function SuppliersPage() {
  const [showSupplierModal, setShowSupplierModal] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState<any>(null);
  const [modalMode, setModalMode] = useState<'create' | 'edit' | 'view'>('create');

  const suppliers = [
    {
      id: 1,
      name: 'ABC Electronics Ltd',
      contactPerson: 'John Wilson',
      email: 'john.wilson@abcelectronics.com',
      phone: '+1 (555) 123-4567',
      address: '123 Industrial Park, Tech City, TC 12345',
      category: 'Electronics',
      status: 'Active',
      rating: 4.8,
      totalOrders: 47,
      totalValue: '$287,500',
      lastOrder: '2024-01-15',
      paymentTerms: 'Net 30',
      leadTime: '5-7 days'
    },
    {
      id: 2,
      name: 'Global Components Inc',
      contactPerson: 'Sarah Martinez',
      email: 'sarah.martinez@globalcomponents.com',
      phone: '+1 (555) 234-5678',
      address: '456 Supply Chain Ave, Manufacturing City, MC 23456',
      category: 'Components',
      status: 'Active',
      rating: 4.6,
      totalOrders: 32,
      totalValue: '$156,800',
      lastOrder: '2024-01-14',
      paymentTerms: 'Net 45',
      leadTime: '3-5 days'
    },
    {
      id: 3,
      name: 'Tech Solutions Co',
      contactPerson: 'Mike Johnson',
      email: 'mike.johnson@techsolutions.com',
      phone: '+1 (555) 345-6789',
      address: '789 Innovation Blvd, Digital City, DC 34567',
      category: 'Software',
      status: 'Active',
      rating: 4.9,
      totalOrders: 28,
      totalValue: '$198,750',
      lastOrder: '2024-01-13',
      paymentTerms: 'Net 15',
      leadTime: '1-3 days'
    },
    {
      id: 4,
      name: 'Industrial Parts Ltd',
      contactPerson: 'Emily Davis',
      email: 'emily.davis@industrialparts.com',
      phone: '+1 (555) 456-7890',
      address: '321 Factory Road, Industrial Zone, IZ 45678',
      category: 'Industrial',
      status: 'Inactive',
      rating: 4.2,
      totalOrders: 15,
      totalValue: '$89,200',
      lastOrder: '2024-01-05',
      paymentTerms: 'Net 60',
      leadTime: '7-14 days'
    },
    {
      id: 5,
      name: 'Premium Supplies Corp',
      contactPerson: 'Robert Lee',
      email: 'robert.lee@premiumsupplies.com',
      phone: '+1 (555) 567-8901',
      address: '654 Quality Street, Premium District, PD 56789',
      category: 'Premium',
      status: 'Active',
      rating: 4.7,
      totalOrders: 41,
      totalValue: '$345,600',
      lastOrder: '2024-01-16',
      paymentTerms: 'Net 30',
      leadTime: '4-6 days'
    }
  ];

  const categories = [
    'Electronics',
    'Components',
    'Software',
    'Industrial',
    'Premium',
    'Accessories',
    'Tools'
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Inactive': return 'bg-red-100 text-red-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 4.5) return 'text-green-600';
    if (rating >= 4.0) return 'text-yellow-600';
    return 'text-red-600';
  };

  const openSupplierModal = (mode: 'create' | 'edit' | 'view', supplier?: any) => {
    setModalMode(mode);
    setSelectedSupplier(supplier || null);
    setShowSupplierModal(true);
  };

  const closeSupplierModal = () => {
    setShowSupplierModal(false);
    setSelectedSupplier(null);
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Supplier Management</h1>
            <p className="text-gray-600">Manage suppliers and vendor relationships</p>
          </div>
          <div className="flex space-x-3">
            <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap">
              <i className="ri-download-line w-4 h-4 flex items-center justify-center mr-2 inline-block"></i>
              Export
            </button>
            <button 
              onClick={() => openSupplierModal('create')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
              <i className="ri-add-line w-4 h-4 flex items-center justify-center mr-2 inline-block"></i>
              Add Supplier
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Suppliers</p>
                <p className="text-2xl font-bold text-gray-900">23</p>
              </div>
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <i className="ri-truck-line text-white w-6 h-6 flex items-center justify-center"></i>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Suppliers</p>
                <p className="text-2xl font-bold text-gray-900">19</p>
              </div>
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <i className="ri-check-line text-white w-6 h-6 flex items-center justify-center"></i>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Orders</p>
                <p className="text-2xl font-bold text-gray-900">163</p>
              </div>
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                <i className="ri-shopping-cart-line text-white w-6 h-6 flex items-center justify-center"></i>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Value</p>
                <p className="text-2xl font-bold text-gray-900">$1.2M</p>
              </div>
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                <i className="ri-money-dollar-circle-line text-white w-6 h-6 flex items-center justify-center"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Suppliers Table */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">All Suppliers</h3>
              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  placeholder="Search suppliers..."
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm pr-8">
                  <option value="">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Supplier
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rating
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Orders
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Value
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {suppliers.map((supplier) => (
                  <tr key={supplier.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm">
                      <div>
                        <p className="font-medium text-gray-900">{supplier.name}</p>
                        <p className="text-gray-500">{supplier.address}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div>
                        <p className="font-medium text-gray-900">{supplier.contactPerson}</p>
                        <p className="text-gray-500">{supplier.email}</p>
                        <p className="text-gray-500">{supplier.phone}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {supplier.category}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(supplier.status)}`}>
                        {supplier.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex items-center">
                        <span className={`font-medium ${getRatingColor(supplier.rating)}`}>
                          {supplier.rating}
                        </span>
                        <i className="ri-star-fill w-4 h-4 flex items-center justify-center ml-1 text-yellow-400"></i>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {supplier.totalOrders}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {supplier.totalValue}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => openSupplierModal('view', supplier)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <i className="ri-eye-line w-4 h-4 flex items-center justify-center"></i>
                        </button>
                        <button 
                          onClick={() => openSupplierModal('edit', supplier)}
                          className="text-green-600 hover:text-green-800"
                        >
                          <i className="ri-edit-line w-4 h-4 flex items-center justify-center"></i>
                        </button>
                        <button className="text-red-600 hover:text-red-800">
                          <i className="ri-delete-bin-line w-4 h-4 flex items-center justify-center"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Supplier Modal */}
        {showSupplierModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-3xl max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  {modalMode === 'create' ? 'Add New Supplier' : 
                   modalMode === 'edit' ? 'Edit Supplier' : 'Supplier Details'}
                </h2>
                <button 
                  onClick={closeSupplierModal}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <i className="ri-close-line w-6 h-6 flex items-center justify-center"></i>
                </button>
              </div>
              
              <form className="space-y-6">
                {/* Basic Information */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Basic Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                      <input
                        type="text"
                        defaultValue={selectedSupplier?.name || ''}
                        disabled={modalMode === 'view'}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                      <select 
                        defaultValue={selectedSupplier?.category || ''}
                        disabled={modalMode === 'view'}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm pr-8"
                      >
                        <option value="">Select Category</option>
                        {categories.map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person</label>
                      <input
                        type="text"
                        defaultValue={selectedSupplier?.contactPerson || ''}
                        disabled={modalMode === 'view'}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        defaultValue={selectedSupplier?.email || ''}
                        disabled={modalMode === 'view'}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        defaultValue={selectedSupplier?.phone || ''}
                        disabled={modalMode === 'view'}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                      <select 
                        defaultValue={selectedSupplier?.status || 'Active'}
                        disabled={modalMode === 'view'}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm pr-8"
                      >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                        <option value="Pending">Pending</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                    <textarea
                      rows={3}
                      defaultValue={selectedSupplier?.address || ''}
                      disabled={modalMode === 'view'}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    ></textarea>
                  </div>
                </div>

                {/* Business Terms */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Business Terms</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Payment Terms</label>
                      <select 
                        defaultValue={selectedSupplier?.paymentTerms || 'Net 30'}
                        disabled={modalMode === 'view'}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm pr-8"
                      >
                        <option value="Net 15">Net 15</option>
                        <option value="Net 30">Net 30</option>
                        <option value="Net 45">Net 45</option>
                        <option value="Net 60">Net 60</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Lead Time</label>
                      <input
                        type="text"
                        defaultValue={selectedSupplier?.leadTime || ''}
                        disabled={modalMode === 'view'}
                        placeholder="e.g., 3-5 days"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                  </div>
                </div>

                {modalMode !== 'view' && (
                  <div className="flex justify-end space-x-4 pt-4">
                    <button
                      type="button"
                      onClick={closeSupplierModal}
                      className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                    >
                      {modalMode === 'create' ? 'Create Supplier' : 'Update Supplier'}
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}