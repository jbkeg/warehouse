'use client';

import Layout from '@/components/Layout';
import { useState } from 'react';

export default function AnalyticsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('30');

  const kpiData = [
    { title: 'Order Fulfillment Rate', value: '96.8%', trend: 2.1, isPositive: true },
    { title: 'Average Processing Time', value: '2.3h', trend: -0.5, isPositive: true },
    { title: 'Inventory Turnover', value: '4.2x', trend: 0.8, isPositive: true },
    { title: 'Customer Satisfaction', value: '4.7/5', trend: 0.2, isPositive: true }
  ];

  const warehouseMetrics = [
    { metric: 'Total Orders Processed', value: '2,847', change: '+12.5%' },
    { metric: 'Items Shipped', value: '15,234', change: '+8.7%' },
    { metric: 'Revenue Generated', value: '$487,500', change: '+15.2%' },
    { metric: 'Returns Processed', value: '127', change: '-3.8%' }
  ];

  const performanceData = [
    { department: 'Inbound', efficiency: 94, target: 95, trend: 'up' },
    { department: 'Picking', efficiency: 87, target: 90, trend: 'up' },
    { department: 'Packing', efficiency: 92, target: 88, trend: 'up' },
    { department: 'Shipping', efficiency: 89, target: 85, trend: 'down' }
  ];

  const topProducts = [
    { name: 'Wireless Headphones', sales: 234, revenue: '$46,800', growth: '+15%' },
    { name: 'Bluetooth Speaker', sales: 189, revenue: '$28,350', growth: '+8%' },
    { name: 'Smart Watch', sales: 167, revenue: '$58,450', growth: '+22%' },
    { name: 'Phone Case', sales: 145, revenue: '$7,250', growth: '+5%' },
    { name: 'Charging Cable', sales: 132, revenue: '$3,960', growth: '+12%' }
  ];

  const getEfficiencyColor = (efficiency: number, target: number) => {
    if (efficiency >= target) return 'text-green-600';
    if (efficiency >= target * 0.9) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
            <p className="text-gray-600">Performance insights and warehouse analytics</p>
          </div>
          <div className="flex items-center space-x-3">
            <select 
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8"
            >
              <option value="7">Last 7 days</option>
              <option value="30">Last 30 days</option>
              <option value="90">Last 90 days</option>
              <option value="365">Last year</option>
            </select>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
              <i className="ri-refresh-line w-4 h-4 flex items-center justify-center mr-2 inline-block"></i>
              Refresh
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {kpiData.map((kpi, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 border">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-600">{kpi.title}</h3>
                <i className={`ri-arrow-${kpi.isPositive ? 'up' : 'down'}-line w-4 h-4 flex items-center justify-center ${
                  kpi.isPositive ? 'text-green-500' : 'text-red-500'
                }`}></i>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-gray-900">{kpi.value}</span>
                <span className={`text-sm font-medium ${
                  kpi.isPositive ? 'text-green-600' : 'text-red-600'
                }`}>
                  {kpi.isPositive ? '+' : ''}{kpi.trend}%
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Warehouse Performance */}
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Warehouse Performance</h3>
            <div className="space-y-4">
              {performanceData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium text-gray-900">{item.department}</span>
                    <i className={`ri-arrow-${item.trend === 'up' ? 'up' : 'down'}-line w-4 h-4 flex items-center justify-center ${
                      item.trend === 'up' ? 'text-green-500' : 'text-red-500'
                    }`}></i>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          item.efficiency >= item.target ? 'bg-green-500' : 
                          item.efficiency >= item.target * 0.9 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${item.efficiency}%` }}
                      ></div>
                    </div>
                    <span className={`text-sm font-medium ${getEfficiencyColor(item.efficiency, item.target)}`}>
                      {item.efficiency}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Warehouse Metrics */}
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Metrics</h3>
            <div className="space-y-4">
              {warehouseMetrics.map((metric, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">{metric.metric}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-bold text-gray-900">{metric.value}</span>
                    <span className={`text-sm font-medium ${
                      metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {metric.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold text-gray-900">Top Performing Products</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sales
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Revenue
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Growth
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Trend
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {topProducts.map((product, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {product.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {product.sales}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {product.revenue}
                    </td>
                    <td className="px-6 py-4 text-sm text-green-600 font-medium">
                      {product.growth}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <i className="ri-arrow-up-line w-4 h-4 flex items-center justify-center text-green-500 mr-1"></i>
                        <span className="text-sm text-green-600">Trending</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Activity Timeline */}
        <div className="bg-white rounded-lg shadow-sm p-6 border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-check-line text-green-600 w-4 h-4 flex items-center justify-center"></i>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Order fulfillment rate increased to 96.8%</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-truck-line text-blue-600 w-4 h-4 flex items-center justify-center"></i>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">New shipment arrived from ABC Electronics</p>
                <p className="text-xs text-gray-500">4 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-alert-line text-yellow-600 w-4 h-4 flex items-center justify-center"></i>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Low stock alert for Wireless Headphones</p>
                <p className="text-xs text-gray-500">6 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-bar-chart-line text-purple-600 w-4 h-4 flex items-center justify-center"></i>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Monthly performance report generated</p>
                <p className="text-xs text-gray-500">8 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}