import React from 'react'
import {
  UsersIcon,
  MusicIcon,
  CheckSquareIcon,
  DollarSignIcon,
  BarChart3Icon,
  AlertCircleIcon,
} from 'lucide-react'
import ArtistsList from './ArtistsList'
import PendingApprovals from './PendingApprovals'
import ResourceAllocation from './ResourceAllocation'
import RevenueChart from './RevenueChart'
const AdminDashboard = () => {
  return (
    <div className="container mx-auto space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        <h1 className="text-xl md:text-2xl font-bold">Admin Dashboard</h1>
        <div className="flex flex-wrap gap-2">
          <button className="px-3 py-1.5 bg-indigo-600 rounded-lg text-sm hover:bg-indigo-700 transition-colors">
            Add New Artist
          </button>
          <button className="px-3 py-1.5 bg-gray-700 rounded-lg text-sm hover:bg-gray-600 transition-colors">
            Generate Report
          </button>
        </div>
      </div>
      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        <StatCard
          title="Total Artists"
          value="124"
          change="+6"
          icon={<UsersIcon size={20} className="text-purple-400" />}
        />
        <StatCard
          title="Active Releases"
          value="532"
          change="+28"
          icon={<MusicIcon size={20} className="text-indigo-400" />}
        />
        <StatCard
          title="Pending Approvals"
          value="18"
          change="+3"
          icon={<CheckSquareIcon size={20} className="text-yellow-400" />}
        />
        <StatCard
          title="Monthly Revenue"
          value="$45.8K"
          change="+12.4%"
          icon={<DollarSignIcon size={20} className="text-green-400" />}
        />
      </div>
      {/* Revenue Chart */}
      <div className="bg-gray-800 rounded-xl p-4 md:p-5 border border-gray-700">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-4">
          <h2 className="text-lg font-medium">Revenue Analytics</h2>
          <select className="w-full sm:w-auto bg-gray-700 text-sm rounded-lg px-3 py-1.5 border border-gray-600">
            <option>Last 6 months</option>
            <option>Last year</option>
            <option>All time</option>
          </select>
        </div>
        <RevenueChart />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* Artists List */}
        <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Top Performing Artists</h2>
            <button className="text-sm text-indigo-400 hover:text-indigo-300">
              View All
            </button>
          </div>
          <ArtistsList />
        </div>
        {/* Pending Approvals */}
        <div className="bg-gray-800 rounded-xl p-5 border border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Pending Approvals</h2>
            <span className="bg-yellow-500/20 text-yellow-500 text-xs px-2 py-1 rounded-full">
              18 pending
            </span>
          </div>
          <PendingApprovals />
        </div>
      </div>
      {/* Resource Allocation */}
      <div className="bg-gray-800 rounded-xl p-4 md:p-5 border border-gray-700 overflow-x-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Resource Allocation</h2>
          <button className="text-sm text-indigo-400 hover:text-indigo-300 whitespace-nowrap">
            Manage Resources
          </button>
        </div>
        <ResourceAllocation />
      </div>
      {/* Alert Section */}
      <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3 md:p-4 flex items-start space-x-3">
        <AlertCircleIcon size={20} className="text-red-400 shrink-0 mt-0.5" />
        <div>
          <h3 className="font-medium text-red-400">System Alerts</h3>
          <p className="text-sm text-gray-300 mt-1">
            3 artists have not uploaded content in the last 30 days. Consider
            reaching out to maintain engagement.
          </p>
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
export default AdminDashboard
