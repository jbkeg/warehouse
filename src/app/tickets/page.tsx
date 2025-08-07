'use client';

import Layout from '@/components/Layout';
import { useState } from 'react';

export default function TicketsPage() {
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
      assignedTo: 'Sarah Johnson',
      createdAt: '2024-01-15 09:30',
      lastUpdate: '2024-01-15 14:20',
      description: 'Order #ORD-2024-001 was delivered but 2 items are missing from the package. Customer needs immediate resolution.',
      responses: 3
    },
    {
      id: 'TKT-002',
      user: 'Sarah Smith',
      email: 'sarah.smith@email.com',
      subject: 'Damaged product received',
      priority: 'Medium',
      status: 'In Progress',
      category: 'Product Quality',
      assignedTo: 'Mike Wilson',
      createdAt: '2024-01-14 16:45',
      lastUpdate: '2024-01-15 10:15',
      description: 'Received damaged wireless headphones. Product appears to have been dropped during shipping.',
      responses: 2
    },
    {
      id: 'TKT-003',
      user: 'Mike Johnson',
      email: 'mike.j@business.com',
      subject: 'Incorrect item delivered',
      priority: 'Medium',
      status: 'Resolved',
      category: 'Order Error',
      assignedTo: 'Alice Brown',
      createdAt: '2024-01-13 11:20',
      lastUpdate: '2024-01-14 09:30',
      description: 'Ordered SKU-123 but received SKU-456 instead. Need replacement.',
      responses: 5
    },
    {
      id: 'TKT-004',
      user: 'Emily Davis',
      email: 'emily.davis@corp.com',
      subject: 'Late delivery complaint',
      priority: 'Low',
      status: 'Open',
      category: 'Delivery Issue',
      assignedTo: 'John Smith',
      createdAt: '2024-01-12 14:30',
      lastUpdate: '2024-01-13 16:45',
      description: 'Package was supposed to arrive on 2024-01-10 but arrived 3 days late.',
      responses: 1
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open': return 'bg-red-100 text-red-800';
      case 'In Progress': return 'bg-yellow-100 text-yellow-800';
      case 'Resolved': return 'bg-green-100 text-green-800';
      case 'Closed': return 'bg-gray-100 text-gray-800';
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
            <h1 className="text-2xl font-bold text-gray-900">Support Tickets</h1>
            <p className="text-gray-600">Manage and track all customer support tickets</p>
          </div>
          <div className="flex space-x-3">
            <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap">
              <i className="ri-filter-line w-4 h-4 flex items-center justify-center mr-2 inline-block"></i>
              Filter
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
              <i className="ri-add-line w-4 h-4 flex items-center justify-center mr-2 inline-block"></i>
              Create Ticket
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Tickets</p>
                <p className="text-2xl font-bold text-gray-900">127</p>
              </div>
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <i className="ri-ticket-line text-white w-6 h-6 flex items-center justify-center"></i>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Open Tickets</p>
                <p className="text-2xl font-bold text-gray-900">23</p>
              </div>
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                <i className="ri-alert-line text-white w-6 h-6 flex items-center justify-center"></i>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">In Progress</p>
                <p className="text-2xl font-bold text-gray-900">35</p>
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
        </div>

        {/* Tickets Table */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold text-gray-900">All Support Tickets</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ticket ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Subject
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Priority
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Assigned To
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Responses
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tickets.map((ticket) => (
                  <tr key={ticket.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {ticket.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <div>
                        <p className="font-medium">{ticket.user}</p>
                        <p className="text-gray-500">{ticket.email}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {ticket.subject}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(ticket.priority)}`}>
                        {ticket.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(ticket.status)}`}>
                        {ticket.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {ticket.assignedTo}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <div className="flex items-center">
                        <i className="ri-chat-1-line w-4 h-4 flex items-center justify-center mr-1 text-gray-400"></i>
                        {ticket.responses}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {ticket.createdAt}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => openTicketModal(ticket)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <i className="ri-eye-line w-4 h-4 flex items-center justify-center"></i>
                        </button>
                        <button className="text-green-600 hover:text-green-800">
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

        {/* Ticket Detail Modal */}
        {showTicketModal && selectedTicket && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-3xl max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Ticket Details - {selectedTicket.id}</h2>
                <button 
                  onClick={() => setShowTicketModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <i className="ri-close-line w-6 h-6 flex items-center justify-center"></i>
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <p className="text-sm text-gray-900">{selectedTicket.subject}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(selectedTicket.status)}`}>
                      {selectedTicket.status}
                    </span>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(selectedTicket.priority)}`}>
                      {selectedTicket.priority}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Customer</label>
                    <p className="text-sm text-gray-900">{selectedTicket.user}</p>
                    <p className="text-sm text-gray-500">{selectedTicket.email}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Assigned To</label>
                    <p className="text-sm text-gray-900">{selectedTicket.assignedTo}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Created</label>
                    <p className="text-sm text-gray-900">{selectedTicket.createdAt}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-900">{selectedTicket.description}</p>
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Add Response</label>
                <textarea
                  rows={4}
                  placeholder="Type your response here..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                ></textarea>
              </div>
              
              <div className="flex justify-end space-x-4 mt-6">
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
        )}
      </div>
    </Layout>
  );
}