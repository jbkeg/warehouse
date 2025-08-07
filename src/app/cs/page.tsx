
'use client';

import Layout from '@/components/Layout';
import { useState } from 'react';

export default function CSPage() {
  const [activeTab, setActiveTab] = useState('tickets');
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<any>(null);

  const tickets = [
    {
      id: 'TKT-001',
      user: 'John Doe',
      email: 'john.doe@company.com',
      subject: 'Missing items in shipment',
      priority: 'High',
      status: 'Open',
      category: 'Shipping Issue',
      createdAt: '2024-01-15 09:30',
      lastUpdate: '2024-01-15 14:20',
      description: 'Order #ORD-2024-001 was delivered but 2 items are missing from the package.'
    },
    {
      id: 'TKT-002',
      user: 'Sarah Smith',
      email: 'sarah.smith@email.com',
      subject: 'Damaged product received',
      priority: 'Medium',
      status: 'In Progress',
      category: 'Product Quality',
      createdAt: '2024-01-14 16:45',
      lastUpdate: '2024-01-15 10:15',
      description: 'Received damaged wireless headphones. Product appears to have been dropped during shipping.'
    },
    {
      id: 'TKT-003',
      user: 'Mike Johnson',
      email: 'mike.j@business.com',
      subject: 'Incorrect item delivered',
      priority: 'Medium',
      status: 'Resolved',
      category: 'Order Error',
      createdAt: '2024-01-13 11:20',
      lastUpdate: '2024-01-14 09:30',
      description: 'Ordered SKU-123 but received SKU-456 instead. Need replacement.'
    }
  ];

  const complaints = [
    {
      id: 'CMP-001',
      user: 'Alice Brown',
      type: 'Delivery Delay',
      severity: 'High',
      status: 'Under Review',
      description: 'Package was supposed to arrive yesterday but still not delivered',
      assignedTo: 'Customer Support Team',
      createdAt: '2024-01-15 08:45'
    },
    {
      id: 'CMP-002',
      user: 'Robert Wilson',
      type: 'Poor Packaging',
      severity: 'Medium',
      status: 'Resolved',
      description: 'Items were poorly packaged and arrived damaged',
      assignedTo: 'Quality Team',
      createdAt: '2024-01-14 13:20'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open': return 'bg-red-100 text-red-800';
      case 'In Progress': return 'bg-yellow-100 text-yellow-800';
      case 'Resolved': return 'bg-green-100 text-green-800';
      case 'Under Review': return 'bg-blue-100 text-blue-800';
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

  const openTicketModal = (ticket: any) => {
    setSelectedTicket(ticket);
    setShowTicketModal(true);
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Customer Support Management</h1>
            <p className="text-gray-600">Handle customer inquiries, complaints, and support tickets</p>
          </div>
          <div className="flex space-x-3">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
              <i className="ri-mail-line w-4 h-4 flex items-center justify-center mr-2 inline-block"></i>
              Send Email
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Open Tickets</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                <i className="ri-ticket-line text-white w-6 h-6 flex items-center justify-center"></i>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">In Progress</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                <i className="ri-time-line text-white w-6 h-6 flex items-center justify-center"></i>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Resolved Today</p>
                <p className="text-2xl font-bold text-gray-900">15</p>
              </div>
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <i className="ri-check-line text-white w-6 h-6 flex items-center justify-center"></i>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Response Time</p>
                <p className="text-2xl font-bold text-gray-900">2.5h</p>
              </div>
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <i className="ri-speed-up-line text-white w-6 h-6 flex items-center justify-center"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="border-b">
            <div className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('tickets')}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === 'tickets'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Support Tickets
              </button>
              <button
                onClick={() => setActiveTab('complaints')}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === 'complaints'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Complaints
              </button>
              <button
                onClick={() => setActiveTab('knowledge')}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === 'knowledge'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Knowledge Base
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'tickets' && (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Ticket ID</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">User</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Subject</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Priority</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Category</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Created</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tickets.map((ticket) => (
                      <tr key={ticket.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium text-gray-900">{ticket.id}</td>
                        <td className="py-3 px-4 text-gray-900">{ticket.user}</td>
                        <td className="py-3 px-4 text-gray-900">{ticket.subject}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(ticket.priority)}`}>
                            {ticket.priority}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(ticket.status)}`}>
                            {ticket.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-gray-900">{ticket.category}</td>
                        <td className="py-3 px-4 text-gray-900">{ticket.createdAt}</td>
                        <td className="py-3 px-4">
                          <div className="flex space-x-2">
                            <button 
                              onClick={() => openTicketModal(ticket)}
                              className="text-blue-600 hover:text-blue-800"
                            >
                              <i className="ri-eye-line w-4 h-4 flex items-center justify-center"></i>
                            </button>
                            <button className="text-green-600 hover:text-green-800">
                              <i className="ri-mail-line w-4 h-4 flex items-center justify-center"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'complaints' && (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Complaint ID</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">User</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Type</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Severity</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Assigned To</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Created</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {complaints.map((complaint) => (
                      <tr key={complaint.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium text-gray-900">{complaint.id}</td>
                        <td className="py-3 px-4 text-gray-900">{complaint.user}</td>
                        <td className="py-3 px-4 text-gray-900">{complaint.type}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(complaint.severity)}`}>
                            {complaint.severity}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(complaint.status)}`}>
                            {complaint.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-gray-900">{complaint.assignedTo}</td>
                        <td className="py-3 px-4 text-gray-900">{complaint.createdAt}</td>
                        <td className="py-3 px-4">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-800">
                              <i className="ri-eye-line w-4 h-4 flex items-center justify-center"></i>
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

            {activeTab === 'knowledge' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium text-gray-900 mb-3">Common Issues</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-gray-600">
                        <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center mr-2"></i>
                        Missing items in shipment
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center mr-2"></i>
                        Damaged product during shipping
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center mr-2"></i>
                        Incorrect item delivered
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center mr-2"></i>
                        Delivery delays
                      </li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium text-gray-900 mb-3">Quick Responses</h3>
                    <div className="space-y-2">
                      <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
                        <p className="text-sm font-medium text-gray-900">Shipping Issue Template</p>
                        <p className="text-xs text-gray-600">Standard response for shipping problems</p>
                      </button>
                      <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
                        <p className="text-sm font-medium text-gray-900">Refund Process</p>
                        <p className="text-xs text-gray-600">How to process customer refunds</p>
                      </button>
                      <button className="w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
                        <p className="text-sm font-medium text-gray-900">Replacement Request</p>
                        <p className="text-xs text-gray-600">Steps for product replacement</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Ticket Detail Modal */}
        {showTicketModal && selectedTicket && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Ticket Details</h2>
                <button 
                  onClick={() => setShowTicketModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <i className="ri-close-line w-6 h-6 flex items-center justify-center"></i>
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ticket ID</label>
                    <p className="text-sm text-gray-900">{selectedTicket.id}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(selectedTicket.status)}`}>
                      {selectedTicket.status}
                    </span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <p className="text-sm text-gray-900">{selectedTicket.subject}</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <p className="text-sm text-gray-900">{selectedTicket.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Customer</label>
                    <p className="text-sm text-gray-900">{selectedTicket.user}</p>
                    <p className="text-sm text-gray-500">{selectedTicket.email}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(selectedTicket.priority)}`}>
                      {selectedTicket.priority}
                    </span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Response</label>
                  <textarea
                    rows={4}
                    placeholder="Type your response here..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  ></textarea>
                </div>
                
                <div className="flex justify-end space-x-4 pt-4">
                  <button
                    onClick={() => setShowTicketModal(false)}
                    className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap"
                  >
                    Cancel
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
                    Send Response
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
