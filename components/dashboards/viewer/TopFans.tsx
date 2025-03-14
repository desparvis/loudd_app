import React from 'react'
import { TrophyIcon } from 'lucide-react'
const TopFans = () => {
  const fans = [
    {
      id: 1,
      name: 'Alex Thompson',
      points: 2450,
      rank: 1,
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&q=80&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Maria Garcia',
      points: 2280,
      rank: 2,
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&q=80&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'James Wilson',
      points: 2150,
      rank: 3,
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&q=80&auto=format&fit=crop',
    },
    {
      id: 4,
      name: 'Emily Chen',
      points: 1980,
      rank: 4,
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&q=80&auto=format&fit=crop',
    },
  ]
  return (
    <div className="space-y-3">
      {fans.map((fan) => (
        <div
          key={fan.id}
          className="flex items-center p-3 rounded-lg hover:bg-gray-700/50 transition-colors"
        >
          <div className="w-10 text-center font-medium text-lg mr-3">
            {fan.rank === 1 && (
              <TrophyIcon size={24} className="text-yellow-400" />
            )}
            {fan.rank === 2 && (
              <TrophyIcon size={24} className="text-gray-400" />
            )}
            {fan.rank === 3 && (
              <TrophyIcon size={24} className="text-orange-400" />
            )}
            {fan.rank > 3 && <span className="text-gray-500">#{fan.rank}</span>}
          </div>
          <img
            src={fan.avatar}
            alt={fan.name}
            className="w-10 h-10 rounded-full object-cover mr-3"
          />
          <div className="flex-1">
            <h4 className="font-medium">{fan.name}</h4>
            <div className="text-sm text-gray-400">{fan.points} points</div>
          </div>
          <div className="w-24 bg-gray-700 rounded-full h-2">
            <div
              className="bg-indigo-500 h-full rounded-full"
              style={{
                width: `${(fan.points / 2450) * 100}%`,
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default TopFans
