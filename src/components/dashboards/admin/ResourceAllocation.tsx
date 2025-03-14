import React from 'react'
import { UsersIcon, SpeakerIcon, CameraIcon, BoxIcon } from 'lucide-react'
const ResourceAllocation = () => {
  const resources = [
    {
      id: 1,
      name: 'Studio A',
      type: 'Recording Studio',
      status: 'In Use',
      bookedBy: 'Sarah Johnson',
      timeRemaining: '2h 30m',
      icon: BoxIcon,
    },
    {
      id: 2,
      name: 'Marketing Team 3',
      type: 'Marketing Resource',
      status: 'Available',
      currentProjects: 2,
      capacity: 4,
      icon: UsersIcon,
    },
    {
      id: 3,
      name: 'Sound Equipment Set B',
      type: 'Equipment',
      status: 'Maintenance',
      nextAvailable: '2 days',
      icon: SpeakerIcon,
    },
    {
      id: 4,
      name: 'Video Production Unit',
      type: 'Production Team',
      status: 'In Use',
      bookedBy: 'Luna Ray',
      timeRemaining: '4h 15m',
      icon: CameraIcon,
    },
  ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {resources.map((resource) => (
        <div
          key={resource.id}
          className="bg-gray-700/30 rounded-xl p-4 border border-gray-600"
        >
          <div className="flex items-start justify-between">
            <div className="p-2 rounded-lg bg-gray-700/50">
              <resource.icon size={20} className="text-indigo-400" />
            </div>
            <span
              className={`text-xs px-2 py-1 rounded-full ${resource.status === 'Available' ? 'bg-green-500/20 text-green-400' : resource.status === 'In Use' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400'}`}
            >
              {resource.status}
            </span>
          </div>
          <h3 className="font-medium mt-3">{resource.name}</h3>
          <p className="text-sm text-gray-400 mt-1">{resource.type}</p>
          <div className="mt-3 text-xs text-gray-300">
            {resource.status === 'In Use' && (
              <>
                <p>Booked by: {resource.bookedBy}</p>
                <p className="mt-1">Time remaining: {resource.timeRemaining}</p>
              </>
            )}
            {resource.status === 'Available' && (
              <p>
                Capacity: {resource.currentProjects}/{resource.capacity}{' '}
                projects
              </p>
            )}
            {resource.status === 'Maintenance' && (
              <p>Next available: {resource.nextAvailable}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
export default ResourceAllocation
