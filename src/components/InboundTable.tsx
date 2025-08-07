'use client';

import { useState } from 'react';

interface InboundItem {
  id: string;
  poNumber: string;
  supplier: string;
  expectedDate: string;
  status: 'pending' | 'in-transit' | 'received' | 'processing';
  items: number;
  totalValue: number;
}

const mockInboundData: InboundItem[] = [
  {
    id: 'IB001',
    poNumber: 'PO-2024-001',
    supplier: 'ABC 전자 주식회사',
    expectedDate: '2024-01-15',
    status: 'in-transit',
    items: 125,
    totalValue: 15750.00
  },
  {
    id: 'IB002',
    poNumber: 'PO-2024-002',
    supplier: '글로벌 부품 공급업체',
    expectedDate: '2024-01-16',
    status: 'pending',
    items: 89,
    totalValue: 8900.50
  },
  {
    id: 'IB003',
    poNumber: 'PO-2024-003',
    supplier: '테크 솔루션즈',
    expectedDate: '2024-01-14',
    status: 'received',
    items: 67,
    totalValue: 12340.75
  },
  {
    id: 'IB004',
    poNumber: 'PO-2024-004',
    supplier: '산업용 부품 공급업체',
    expectedDate: '2024-01-17',
    status: 'processing',
    items: 203,
    totalValue: 25600.00
  }
];

export default function InboundTable() {
  const [inboundData, setInboundData] = useState<InboundItem[]>(mockInboundData);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'in-transit': return 'bg-blue-100 text-blue-800';
      case 'received': return 'bg-green-100 text-green-800';
      case 'processing': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return '대기 중';
      case 'in-transit': return '운송 중';
      case 'received': return '입고 완료';
      case 'processing': return '처리 중';
      default: return status;
    }
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedItems(inboundData.map(item => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleSelectItem = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedItems([...selectedItems, id]);
    } else {
      setSelectedItems(selectedItems.filter(item => item !== id));
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">입고 현황</h3>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
            <i className="ri-add-line w-4 h-4 flex items-center justify-center mr-2 inline-block"></i>
            입고 등록
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left">
                <input
                  type="checkbox"
                  className="rounded border-gray-300"
                  checked={selectedItems.length === inboundData.length}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                입고 ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                PO 번호
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                공급업체
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                예정일
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                상태
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                항목 수
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                총 금액
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                작업
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {inboundData.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300"
                    checked={selectedItems.includes(item.id)}
                    onChange={(e) => handleSelectItem(item.id, e.target.checked)}
                  />
                </td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {item.id}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {item.poNumber}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {item.supplier}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {item.expectedDate}
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(item.status)}`}>
                    {getStatusText(item.status)}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  {item.items}개
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  ₩{item.totalValue.toLocaleString()}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-800 transition-colors">
                      <i className="ri-eye-line w-4 h-4 flex items-center justify-center"></i>
                    </button>
                    <button className="text-green-600 hover:text-green-800 transition-colors">
                      <i className="ri-edit-line w-4 h-4 flex items-center justify-center"></i>
                    </button>
                    <button className="text-red-600 hover:text-red-800 transition-colors">
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
  );
}