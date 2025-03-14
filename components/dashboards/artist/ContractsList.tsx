import React from 'react'
import { FileTextIcon, CheckCircleIcon, ClockIcon } from 'lucide-react'
const ContractsList = () => {
  const contracts = [
    {
      id: 1,
      title: 'Album Distribution Agreement',
      date: 'Valid until Dec 2023',
      status: 'Active',
      type: 'Distribution',
    },
    {
      id: 2,
      title: 'Streaming Royalties Contract',
      date: 'Valid until Mar 2024',
      status: 'Active',
      type: 'Royalties',
    },
    {
      id: 3,
      title: 'Music Video Production',
      date: 'Awaiting signature',
      status: 'Pending',
      type: 'Production',
    },
  ]
  return (
    <div className="space-y-3">
      {contracts.map((contract) => (
        <div
          key={contract.id}
          className="flex items-center p-3 rounded-lg hover:bg-gray-700/50 transition-colors"
        >
          <div className="p-2 rounded-lg bg-gray-700/50 mr-3">
            <FileTextIcon size={18} className="text-blue-400" />
          </div>
          <div className="flex-1">
            <h4 className="font-medium">{contract.title}</h4>
            <div className="text-xs text-gray-400">{contract.date}</div>
          </div>
          <div className="text-right">
            <div className="text-xs font-medium text-gray-300">
              {contract.type}
            </div>
            <div className="flex items-center text-xs mt-1">
              {contract.status === 'Active' ? (
                <>
                  <CheckCircleIcon size={12} className="text-green-400 mr-1" />
                  <span className="text-green-400">Active</span>
                </>
              ) : (
                <>
                  <ClockIcon size={12} className="text-yellow-400 mr-1" />
                  <span className="text-yellow-400">Pending</span>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default ContractsList
