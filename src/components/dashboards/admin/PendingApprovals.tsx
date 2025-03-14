import React from 'react'
import { CheckIcon, XIcon, FileTextIcon } from 'lucide-react'
const PendingApprovals = () => {
  const approvals = [
    {
      id: 1,
      type: 'Song Upload',
      title: 'Summer Nights',
      artist: 'Sarah Johnson',
      submitted: '2 hours ago',
    },
    {
      id: 2,
      type: 'Artist Application',
      title: 'New Artist Signup',
      artist: 'David Chen',
      submitted: '5 hours ago',
    },
    {
      id: 3,
      type: 'Album Release',
      title: 'Midnight Chronicles',
      artist: 'Luna Ray',
      submitted: '1 day ago',
    },
  ]
  return (
    <div className="space-y-3">
      {approvals.map((approval) => (
        <div
          key={approval.id}
          className="flex items-center p-3 rounded-lg hover:bg-gray-700/50 transition-colors"
        >
          <div className="p-2 rounded-lg bg-gray-700/50 mr-3">
            <FileTextIcon size={18} className="text-yellow-400" />
          </div>
          <div className="flex-1">
            <h4 className="font-medium">{approval.title}</h4>
            <div className="flex items-center text-xs text-gray-400">
              <span>{approval.type}</span>
              <span className="mx-2">•</span>
              <span>{approval.artist}</span>
              <span className="mx-2">•</span>
              <span>{approval.submitted}</span>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="p-1.5 rounded-lg bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-colors">
              <CheckIcon size={16} />
            </button>
            <button className="p-1.5 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors">
              <XIcon size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
export default PendingApprovals
