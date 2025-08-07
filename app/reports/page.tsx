'use client';

import Layout from '@/components/Layout';
import { useState } from 'react';

export default function ReportsPage() {
  const [selectedReport, setSelectedReport] = useState('inventory');
  const [dateRange, setDateRange] = useState('30');
  const [showExportModal, setShowExportModal] = useState(false);

  const reportTypes = [
    { id: 'inventory', name: 'Inventory Report', icon: 'ri-stack-line' },
    { id: 'inbound', name: 'Inbound Report', icon: 'ri-inbox-line' },
    { id: 'outbound', name: 'Outbound Report', icon: 'ri-export-line' },
    { id: 'performance', name: 'Performance Report', icon: 'ri-bar-chart-line' },
    { id: 'financial', name: 'Financial Report', icon: 'ri-money-dollar-circle-line' },
    { id: 'customer', name: 'Customer Report', icon: 'ri-user-line' }
  ];

  const inventoryData = [
    { category: 'Electronics', totalItems: 1247, value: 156750, lowStock: 23, turnover: 4.2 },
    { category: 'Components', totalItems: 2156, value: 89320, lowStock: 15, turnover: 6.8 },
    { category: 'Accessories', totalItems: 892, value: 45230, lowStock: 8, turnover: 5.1 },
    { category: 'Tools', totalItems: 456, value: 78940, lowStock: 12, turnover: 3.9 }
  ];

  const inboundData = [
    { month: 'Jan', received: 145, value: 187500, suppliers: 12, avgDelay: 1.2 },
    { month: 'Feb', received: 132, value: 165800, suppliers: 14, avgDelay: 0.8 },
    { month: 'Mar', received: 156, value: 201200, suppliers: 16, avgDelay: 1.5 },
    { month: 'Apr', received: 178, value: 225600, suppliers: 18, avgDelay: 0.9 }
  ];

  const outboundData = [
    { month: 'Jan', shipped: 234, value: 298500, customers: 145, avgTime: 2.3 },
    { month: 'Feb', shipped: 267, value: 342800, customers: 156, avgTime: 2.1 },
    { month: 'Mar', shipped: 298, value: 389200, customers: 167, avgTime: 2.5 },
    { month: 'Apr', shipped: 312, value: 425600, customers: 178, avgTime: 2.2 }
  ];

  const renderInventoryReport = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6 border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Inventory Summary</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium text-gray-600">Category</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Total Items</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Total Value</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Low Stock</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Turnover Rate</th>
              </tr>
            </thead>
            <tbody>
              {inventoryData.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{item.category}</td>
                  <td className="py-3 px-4 text-gray-900">{item.totalItems.toLocaleString()}</td>
                  <td className="py-3 px-4 text-gray-900">${item.value.toLocaleString()}</td>
                  <td className="py-3 px-4 text-gray-900">{item.lowStock}</td>
                  <td className="py-3 px-4 text-gray-900">{item.turnover}x</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 border">
          <h4 className="text-md font-semibold text-gray-900 mb-4">Stock Level Distribution</h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">In Stock</span>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
                <span className="text-sm text-gray-900">85%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Low Stock</span>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{width: '12%'}}></div>
                </div>
                <span className="text-sm text-gray-900">12%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Out of Stock</span>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{width: '3%'}}></div>
                </div>
                <span className="text-sm text-gray-900">3%</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 border">
          <h4 className="text-md font-semibold text-gray-900 mb-4">Top Categories by Value</h4>
          <div className="space-y-3">
            {inventoryData.sort((a, b) => b.value - a.value).map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{item.category}</span>
                <span className="text-sm font-medium text-gray-900">${item.value.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderInboundReport = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6 border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Inbound Performance</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium text-gray-600">Month</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Shipments Received</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Total Value</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Suppliers</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Avg Delay (Days)</th>
              </tr>
            </thead>
            <tbody>
              {inboundData.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{item.month}</td>
                  <td className="py-3 px-4 text-gray-900">{item.received}</td>
                  <td className="py-3 px-4 text-gray-900">${item.value.toLocaleString()}</td>
                  <td className="py-3 px-4 text-gray-900">{item.suppliers}</td>
                  <td className="py-3 px-4 text-gray-900">{item.avgDelay}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderOutboundReport = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6 border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Outbound Performance</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium text-gray-600">Month</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Orders Shipped</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Total Value</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Customers</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Avg Process Time (Hours)</th>
              </tr>
            </thead>
            <tbody>
              {outboundData.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{item.month}</td>
                  <td className="py-3 px-4 text-gray-900">{item.shipped}</td>
                  <td className="py-3 px-4 text-gray-900">${item.value.toLocaleString()}</td>
                  <td className="py-3 px-4 text-gray-900">{item.customers}</td>
                  <td className="py-3 px-4 text-gray-900">{item.avgTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderReportContent = () => {
    switch (selectedReport) {
      case 'inventory': return renderInventoryReport();
      case 'inbound': return renderInboundReport();
      case 'outbound': return renderOutboundReport();
      default: return <div className="text-center text-gray-500">Select a report type to view data</div>;
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
            <p className="text-gray-600">Generate and view detailed warehouse reports</p>
          </div>
          <div className="flex space-x-3">
            <button 
              onClick={() => setShowExportModal(true)}
              className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap"
            >
              <i className="ri-download-line w-4 h-4 flex items-center justify-center mr-2 inline-block"></i>
              Export
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
              <i className="ri-refresh-line w-4 h-4 flex items-center justify-center mr-2 inline-block"></i>
              Refresh
            </button>
          </div>
        </div>

        {/* Report Selection */}
        <div className="bg-white rounded-lg shadow-sm p-6 border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Report Type</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {reportTypes.map((report) => (
              <button
                key={report.id}
                onClick={() => setSelectedReport(report.id)}
                className={`p-4 border rounded-lg text-left transition-colors ${
                  selectedReport === report.id 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center">
                  <i className={`${report.icon} w-6 h-6 flex items-center justify-center mr-3 ${
                    selectedReport === report.id ? 'text-blue-600' : 'text-gray-600'
                  }`}></i>
                  <span className={`font-medium ${
                    selectedReport === report.id ? 'text-blue-600' : 'text-gray-900'
                  }`}>
                    {report.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
              <select 
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8"
              >
                <option value="7">Last 7 days</option>
                <option value="30">Last 30 days</option>
                <option value="90">Last 90 days</option>
                <option value="365">Last year</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Format</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8">
                <option value="detailed">Detailed</option>
                <option value="summary">Summary</option>
                <option value="executive">Executive</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8">
                <option value="all">All Categories</option>
                <option value="electronics">Electronics</option>
                <option value="components">Components</option>
                <option value="accessories">Accessories</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
                Apply Filters
              </button>
            </div>
          </div>
        </div>

        {/* Report Content */}
        {renderReportContent()}

        {/* Export Modal */}
        {showExportModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Export Report</h2>
                <button 
                  onClick={() => setShowExportModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <i className="ri-close-line w-6 h-6 flex items-center justify-center"></i>
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Export Format</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8">
                    <option value="pdf">PDF</option>
                    <option value="excel">Excel</option>
                    <option value="csv">CSV</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Include</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded mr-2" defaultChecked />
                      <span className="text-sm text-gray-700">Charts and Graphs</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded mr-2" defaultChecked />
                      <span className="text-sm text-gray-700">Raw Data</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded mr-2" />
                      <span className="text-sm text-gray-700">Summary Only</span>
                    </label>
                  </div>
                </div>
                
                <div className="flex space-x-4 pt-4">
                  <button
                    onClick={() => setShowExportModal(false)}
                    className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap"
                  >
                    Cancel
                  </button>
                  <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
                    Export
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