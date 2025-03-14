import React from 'react'
import { TrophyIcon, HeadphonesIcon, ShareIcon, StarIcon } from 'lucide-react'
const AchievementsList = () => {
  const achievements = [
    {
      id: 1,
      title: 'Super Fan',
      description: 'Listened to 100 songs in a week',
      icon: HeadphonesIcon,
      points: 100,
      new: true,
    },
    {
      id: 2,
      title: 'Social Butterfly',
      description: 'Shared 5 songs with friends',
      icon: ShareIcon,
      points: 50,
      new: true,
    },
    {
      id: 3,
      title: 'Early Adopter',
      description: 'First 100 to listen to a new release',
      icon: StarIcon,
      points: 75,
      new: true,
    },
    {
      id: 4,
      title: 'Dedicated Fan',
      description: 'Streamed an artist for 10 hours',
      icon: TrophyIcon,
      points: 150,
      new: false,
    },
  ]
  return (
    <div className="space-y-3">
      {achievements.map((achievement) => (
        <div
          key={achievement.id}
          className="flex items-center p-3 rounded-lg bg-gray-700/30 border border-gray-600"
        >
          <div className="p-2 rounded-lg bg-indigo-500/20 mr-3">
            <achievement.icon size={20} className="text-indigo-400" />
          </div>
          <div className="flex-1">
            <div className="flex items-center">
              <h4 className="font-medium">{achievement.title}</h4>
              {achievement.new && (
                <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
                  New
                </span>
              )}
            </div>
            <p className="text-sm text-gray-400">{achievement.description}</p>
          </div>
          <div className="text-right">
            <div className="text-indigo-400 font-medium">
              +{achievement.points}
            </div>
            <div className="text-xs text-gray-400">points</div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default AchievementsList
