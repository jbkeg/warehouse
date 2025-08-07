'use client';

import Layout from '@/components/Layout';
import { useState } from 'react';

export default function PerformancePage() {
  const [selectedMetric, setSelectedMetric] = useState('efficiency');

  const performanceMetrics = [
    { id: 'efficiency', label: 'Operational Efficiency', icon: 'ri-speed-line' },
    { id: 'productivity', label: 'Productivity', icon: 'ri-bar-chart-line' },
    { id: 'accuracy', label: 'Accuracy', icon: 'ri-check-line' },
    { id: 'cost', label: 'Cost Analysis', icon: 'ri-money-dollar-circle-line' }
  ];

  const teamPerformance = [
    { name: 'John Smith', role: 'Picker', efficiency: 94, orders: 156, accuracy: 98.2 },
    { name: 'Sarah Johnson', role: 'Packer', efficiency: 89, orders: 143, accuracy: 97.8 },
    { name: 'Mike Wilson', role: 'Picker', efficiency: 92, orders: 167, accuracy: 99.1 },
    { name: 'Alice Brown', role: 'Supervisor', efficiency: 88, orders: 89, accuracy: 96.5 },
    { name: 'David Lee', role: 'Packer', efficiency: 91, orders: 134, accuracy: 98.9 }
  ];

  const departmentMetrics = [
    { 
      department: 'Inbound', 
      efficiency: 94, 
      target: 95, 
      throughput: '145 shipments/day',
      avgTime: '2.3 hours',
      trend: 'up'
    },
    { 
      department: 'Picking', 
      efficiency: 87, 
      target: 90, 
      throughput: '234 orders/day',
      avgTime: '15 minutes',
      trend: 'up'
    },
    { 
      department: 'Packing', 
      efficiency: 92, 
      target: 88, 
      throughput: '287 packages/day',
      avgTime: '8 minutes',
      trend: 'stable'
    },
    { 
      department: 'Shipping', 
      efficiency: 89, 
      target: 85, 
      throughput: '156 shipments/day',
      avgTime: '45 minutes',
      trend: 'down'
    }
  ];

  const costAnalysis = [
    { category: 'Labor', current: 45200, budget: 48000, variance: -2800 },
    { category: 'Equipment', current: 12500, budget: 15000, variance: -2500 },
    { category: 'Utilities', current: 8900, budget: 9500, variance: -600 },
    { category: 'Maintenance', current: 6700, budget: 6000, variance: 700 },
    { category: 'Supplies', current: 4300, budget: 4500, variance: -200 }
  ];

  const getEfficiencyColor = (efficiency: number, target: number) => {
    if (efficiency >= target) return 'text-green-600';
    if (efficiency >= target * 0.9) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return 'ri-arrow-up-line text-green-500';
      case 'down': return 'ri-arrow-down-line text-red-500';
      case 'stable': return 'ri-subtract-line text-gray-500';
      default: return 'ri-subtract-line text-gray-500';
    }
  };

  const renderEfficiencyMetrics = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {departmentMetrics.map((dept, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{dept.department}</h3>
              <i className={`w-5 h-5 flex items-center justify-center ${getTrendIcon(dept.trend)}`}></i>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Efficiency</span>
                <span className={`font-semibold ${getEfficiencyColor(dept.efficiency, dept.target)}`}>
                  {dept.efficiency}% / {dept.target}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${
                    dept.efficiency >= dept.target ? 'bg-green-500' : 
                    dept.efficiency >= dept.target * 0.9 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${Math.min(dept.efficiency, 100)}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Throughput: {dept.throughput}</span>
                <span>Avg Time: {dept.avgTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderProductivityMetrics = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold text-gray-900">Team Performance</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Employee
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Efficiency
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Orders Processed
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Accuracy
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Performance
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {teamPerformance.map((employee, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {employee.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {employee.role}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {employee.efficiency}%
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {employee.orders}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {employee.accuracy}%
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className={`h-2 rounded-full ${
                            employee.efficiency >= 90 ? 'bg-green-500' : 
                            employee.efficiency >= 80 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${employee.efficiency}%` }}
                        ></div>
                      </div>
                      <span className={`text-sm font-medium ${
                        employee.efficiency >= 90 ? 'text-green-600' : 
                        employee.efficiency >= 80 ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {employee.efficiency >= 90 ? 'Excellent' : 
                         employee.efficiency >= 80 ? 'Good' : 'Needs Improvement'}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderCostAnalysis = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold text-gray-900">Cost Analysis</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Current
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Budget
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Variance
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {costAnalysis.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {item.category}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    ${item.current.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    ${item.budget.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">
                    <span className={item.variance < 0 ? 'text-green-600' : 'text-red-600'}>
                      {item.variance < 0 ? '-' : '+'}${Math.abs(item.variance).toLocaleString()}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      item.variance < 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {item.variance < 0 ? 'Under Budget' : 'Over Budget'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderMetricContent = () => {
    switch (selectedMetric) {
      case 'efficiency': return renderEfficiencyMetrics();
      case 'productivity': return renderProductivityMetrics();
      case 'cost': return renderCostAnalysis();
      default: return renderEfficiencyMetrics();
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Performance Dashboard</h1>
            <p className="text-gray-600">Monitor and analyze warehouse performance metrics</p>
          </div>
          <div className="flex space-x-3">
            <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap">
              <i className="ri-download-line w-4 h-4 flex items-center justify-center mr-2 inline-block"></i>
              Export
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
              <i className="ri-refresh-line w-4 h-4 flex items-center justify-center mr-2 inline-block"></i>
              Refresh
            </button>
          </div>
        </div>

        {/* Performance Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Overall Efficiency</p>
                <p className="text-2xl font-bold text-gray-900">91%</p>
              </div>
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <i className="ri-speed-line text-white w-6 h-6 flex items-center justify-center"></i>
              </div>
            </div>
            <div className="mt-2 flex items-center">
              <i className="ri-arrow-up-line text-green-500 w-4 h-4 flex items-center justify-center mr-1"></i>
              <span className="text-sm font-medium text-green-600">+3.2%</span>
              <span className="text-sm text-gray-500 ml-1">vs last month</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Productivity Score</p>
                <p className="text-2xl font-bold text-gray-900">88</p>
              </div>
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <i className="ri-bar-chart-line text-white w-6 h-6 flex items-center justify-center"></i>
              </div>
            </div>
            <div className="mt-2 flex items-center">
              <i className="ri-arrow-up-line text-green-500 w-4 h-4 flex items-center justify-center mr-1"></i>
              <span className="text-sm font-medium text-green-600">+1.8%</span>
              <span className="text-sm text-gray-500 ml-1">vs last month</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Accuracy Rate</p>
                <p className="text-2xl font-bold text-gray-900">98.3%</p>
              </div>
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                <i className="ri-check-line text-white w-6 h-6 flex items-center justify-center"></i>
              </div>
            </div>
            <div className="mt-2 flex items-center">
              <i className="ri-arrow-up-line text-green-500 w-4 h-4 flex items-center justify-center mr-1"></i>
              <span className="text-sm font-medium text-green-600">+0.5%</span>
              <span className="text-sm text-gray-500 ml-1">vs last month</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Cost Efficiency</p>
                <p className="text-2xl font-bold text-gray-900">$2.34</p>
              </div>
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                <i className="ri-money-dollar-circle-line text-white w-6 h-6 flex items-center justify-center"></i>
              </div>
            </div>
            <div className="mt-2 flex items-center">
              <i className="ri-arrow-down-line text-green-500 w-4 h-4 flex items-center justify-center mr-1"></i>
              <span className="text-sm font-medium text-green-600">-2.1%</span>
              <span className="text-sm text-gray-500 ml-1">cost per order</span>
            </div>
          </div>
        </div>

        {/* Metric Selection */}
        <div className="bg-white rounded-lg shadow-sm p-6 border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {performanceMetrics.map((metric) => (
              <button
                key={metric.id}
                onClick={() => setSelectedMetric(metric.id)}
                className={`p-4 border rounded-lg text-left transition-colors ${
                  selectedMetric === metric.id 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center">
                  <i className={`${metric.icon} w-6 h-6 flex items-center justify-center mr-3 ${
                    selectedMetric === metric.id ? 'text-blue-600' : 'text-gray-600'
                  }`}></i>
                  <span className={`font-medium ${
                    selectedMetric === metric.id ? 'text-blue-600' : 'text-gray-900'
                  }`}>
                    {metric.label}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Metric Content */}
        {renderMetricContent()}
      </div>
    </Layout>
  );
}