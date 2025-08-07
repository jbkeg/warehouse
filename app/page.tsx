
'use client';

import Layout from '@/components/Layout';
import DashboardCard from '@/components/DashboardCard';
import InboundTable from '@/components/InboundTable';

export default function Home() {
  const dashboardData = [
    {
      title: 'Total Inventory',
      value: '12,847',
      icon: 'ri-stack-line',
      color: 'bg-blue-500',
      trend: { value: 12, isPositive: true }
    },
    {
      title: 'Pending Inbound',
      value: '23',
      icon: 'ri-inbox-line',
      color: 'bg-yellow-500',
      trend: { value: 8, isPositive: false }
    },
    {
      title: 'Active Orders',
      value: '156',
      icon: 'ri-shopping-cart-line',
      color: 'bg-green-500',
      trend: { value: 15, isPositive: true }
    },
    {
      title: 'Low Stock Items',
      value: '7',
      icon: 'ri-alert-line',
      color: 'bg-red-500',
      trend: { value: 3, isPositive: false }
    }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        {/* Dashboard Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Overview of your warehouse operations</p>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dashboardData.map((card, index) => (
            <DashboardCard
              key={index}
              title={card.title}
              value={card.value}
              icon={card.icon}
              color={card.color}
              trend={card.trend}
            />
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-center">
                <i className="ri-qr-scan-2-line w-6 h-6 flex items-center justify-center mx-auto mb-2 text-blue-600"></i>
                <span className="text-sm font-medium text-gray-700">QR Scanner</span>
              </button>
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-center">
                <i className="ri-export-line w-6 h-6 flex items-center justify-center mx-auto mb-2 text-green-600"></i>
                <span className="text-sm font-medium text-gray-700">Process Orders</span>
              </button>
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-center">
                <i className="ri-bar-chart-line w-6 h-6 flex items-center justify-center mx-auto mb-2 text-purple-600"></i>
                <span className="text-sm font-medium text-gray-700">Generate Report</span>
              </button>
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-center">
                <i className="ri-settings-3-line w-6 h-6 flex items-center justify-center mx-auto mb-2 text-gray-600"></i>
                <span className="text-sm font-medium text-gray-700">Settings</span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <i className="ri-check-line text-green-600 w-4 h-4 flex items-center justify-center"></i>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Inbound IB003 received</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="ri-truck-line text-blue-600 w-4 h-4 flex items-center justify-center"></i>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Order #ORD-2024-145 shipped</p>
                  <p className="text-xs text-gray-500">4 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <i className="ri-alert-line text-yellow-600 w-4 h-4 flex items-center justify-center"></i>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Low stock alert: Product SKU-789</p>
                  <p className="text-xs text-gray-500">6 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Inbound Management Section */}
        <InboundTable />
      </div>
    </Layout>
  );
}
