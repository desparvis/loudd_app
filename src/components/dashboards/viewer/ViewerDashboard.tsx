import React from 'react'
import {
  MusicIcon,
  HeartIcon,
  PlayCircleIcon,
  TrophyIcon,
  SparklesIcon,
} from 'lucide-react'
import TrendingMusic from './TrendingMusic'
import AchievementsList from './AchievementsList'
import TopFans from './TopFans'
import MediaPlayer from './MediaPlayer'
const ViewerDashboard = () => {
  return (
    <div className="container mx-auto space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        <h1 className="text-xl md:text-2xl font-bold">Fan Dashboard</h1>
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center space-x-1 bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full text-sm">
            <SparklesIcon size={16} />
            <span>1,245 points</span>
          </div>
          <button className="px-4 py-1 bg-indigo-600 rounded-full text-sm hover:bg-indigo-700 transition-colors">
            Redeem Rewards
          </button>
        </div>
      </div>
      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        <StatCard
          title="Listened Songs"
          value="287"
          change="+24"
          icon={<MusicIcon size={20} className="text-indigo-400" />}
        />
        <StatCard
          title="Favorite Artists"
          value="18"
          change="+3"
          icon={<HeartIcon size={20} className="text-red-400" />}
        />
        <StatCard
          title="Hours Streamed"
          value="42.5"
          change="+6.2"
          icon={<PlayCircleIcon size={20} className="text-purple-400" />}
        />
        <StatCard
          title="Fan Points"
          value="1,245"
          change="+180"
          icon={<TrophyIcon size={20} className="text-yellow-400" />}
        />
      </div>
      {/* Media Player */}
      <div className="bg-gray-800 rounded-xl p-4 md:p-5 border border-gray-700">
        <MediaPlayer />
      </div>
      {/* Trending Music */}
      <div className="bg-gray-800 rounded-xl p-4 md:p-5 border border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Trending Now</h2>
          <button className="text-sm text-indigo-400 hover:text-indigo-300">
            View All
          </button>
        </div>
        <TrendingMusic />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* Achievements */}
        <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Recent Achievements</h2>
            <span className="bg-indigo-500/20 text-indigo-400 text-xs px-2 py-1 rounded-full">
              3 new
            </span>
          </div>
          <AchievementsList />
        </div>
        {/* Top Fans */}
        <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Top Fans This Week</h2>
            <button className="text-sm text-indigo-400 hover:text-indigo-300">
              View Leaderboard
            </button>
          </div>
          <TopFans />
        </div>
      </div>
    </div>
  )
}
interface StatCardProps {
  title: string
  value: string
  change: string
  icon: React.ReactNode
}
const StatCard = ({ title, value, change, icon }: StatCardProps) => {
  return (
    <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-400">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
        </div>
        <div className="p-2 rounded-lg bg-gray-700/50">{icon}</div>
      </div>
      <div className="mt-2 text-sm text-green-400">{change} this month</div>
    </div>
  )
}
export default ViewerDashboard
