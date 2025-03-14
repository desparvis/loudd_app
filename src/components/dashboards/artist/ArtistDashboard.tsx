import React from 'react'
import {
  PlayIcon,
  UsersIcon,
  TrendingUpIcon,
  DollarSignIcon,
  MusicIcon,
  UploadIcon,
  FileTextIcon,
} from 'lucide-react'
import PerformanceChart from './PerformanceChart'
import RecentUploads from './RecentUploads'
import ContractsList from './ContractsList'
const ArtistDashboard = () => {
  return (
    <div className="container mx-auto space-y-4 md:space-y-6">
      <h1 className="text-2xl font-bold">Artist Dashboard</h1>
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Streams"
          value="245.8K"
          change="+12.6%"
          icon={<PlayIcon size={20} className="text-indigo-400" />}
        />
        <StatCard
          title="Monthly Listeners"
          value="18.4K"
          change="+5.2%"
          icon={<UsersIcon size={20} className="text-purple-400" />}
        />
        <StatCard
          title="Growth Rate"
          value="24%"
          change="+3.1%"
          icon={<TrendingUpIcon size={20} className="text-green-400" />}
        />
        <StatCard
          title="Revenue"
          value="$1,245"
          change="+18.4%"
          icon={<DollarSignIcon size={20} className="text-yellow-400" />}
        />
      </div>
      {/* Performance Chart */}
      <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
        <h2 className="text-lg font-medium mb-4">Performance Analytics</h2>
        <PerformanceChart />
      </div>
      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ActionCard
          title="Upload New Track"
          description="Share your latest music with fans"
          icon={<UploadIcon size={24} className="text-indigo-400" />}
          link="/artist/uploads"
        />
        <ActionCard
          title="Manage Music"
          description="Edit details and organize your catalog"
          icon={<MusicIcon size={24} className="text-purple-400" />}
          link="/artist/music"
        />
        <ActionCard
          title="Review Contracts"
          description="View and sign pending agreements"
          icon={<FileTextIcon size={24} className="text-blue-400" />}
          link="/artist/contracts"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Uploads */}
        <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
          <h2 className="text-lg font-medium mb-4">Recent Uploads</h2>
          <RecentUploads />
        </div>
        {/* Contracts */}
        <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
          <h2 className="text-lg font-medium mb-4">Active Contracts</h2>
          <ContractsList />
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
  const isPositive = change.startsWith('+')
  return (
    <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-400">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
        </div>
        <div className="p-2 rounded-lg bg-gray-700/50">{icon}</div>
      </div>
      <div
        className={`mt-2 text-sm ${isPositive ? 'text-green-400' : 'text-red-400'}`}
      >
        {change} from last month
      </div>
    </div>
  )
}
interface ActionCardProps {
  title: string
  description: string
  icon: React.ReactNode
  link: string
}
const ActionCard = ({ title, description, icon, link }: ActionCardProps) => {
  return (
    <a
      href={link}
      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 border border-gray-700 hover:border-indigo-500/50 transition-all group"
    >
      <div className="p-3 rounded-lg bg-gray-700/30 w-fit mb-4 group-hover:bg-indigo-900/30 transition-all">
        {icon}
      </div>
      <h3 className="font-medium text-lg">{title}</h3>
      <p className="text-gray-400 text-sm mt-1">{description}</p>
    </a>
  )
}
export default ArtistDashboard
