import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  HomeIcon,
  UploadIcon,
  BarChart3Icon,
  FileTextIcon,
  UsersIcon,
  CheckSquareIcon,
  DollarSignIcon,
  LayoutIcon,
  MusicIcon,
  TrophyIcon,
  HeartIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'lucide-react'
interface SidebarProps {
  userType: string
  collapsed: boolean
  toggleCollapsed: () => void
}
const Sidebar = ({ userType, collapsed, toggleCollapsed }: SidebarProps) => {
  const getNavItems = () => {
    switch (userType) {
      case 'artist':
        return [
          {
            to: '/artist',
            icon: <HomeIcon size={20} />,
            text: 'Dashboard',
          },
          {
            to: '/artist/uploads',
            icon: <UploadIcon size={20} />,
            text: 'Upload Music',
          },
          {
            to: '/artist/analytics',
            icon: <BarChart3Icon size={20} />,
            text: 'Analytics',
          },
          {
            to: '/artist/contracts',
            icon: <FileTextIcon size={20} />,
            text: 'Contracts',
          },
        ]
      case 'admin':
        return [
          {
            to: '/admin',
            icon: <HomeIcon size={20} />,
            text: 'Overview',
          },
          {
            to: '/admin/artists',
            icon: <UsersIcon size={20} />,
            text: 'Artists',
          },
          {
            to: '/admin/approvals',
            icon: <CheckSquareIcon size={20} />,
            text: 'Approvals',
          },
          {
            to: '/admin/resources',
            icon: <LayoutIcon size={20} />,
            text: 'Resources',
          },
          {
            to: '/admin/finances',
            icon: <DollarSignIcon size={20} />,
            text: 'Finances',
          },
        ]
      case 'viewer':
        return [
          {
            to: '/viewer',
            icon: <HomeIcon size={20} />,
            text: 'Discover',
          },
          {
            to: '/viewer/music',
            icon: <MusicIcon size={20} />,
            text: 'My Music',
          },
          {
            to: '/viewer/points',
            icon: <HeartIcon size={20} />,
            text: 'My Points',
          },
          {
            to: '/viewer/leaderboard',
            icon: <TrophyIcon size={20} />,
            text: 'Leaderboard',
          },
        ]
      default:
        return []
    }
  }
  const getLogo = () => {
    switch (userType) {
      case 'artist':
        return 'ARTIST PORTAL'
      case 'admin':
        return 'ADMIN PANEL'
      case 'viewer':
        return 'FAN ZONE'
      default:
        return 'BEAT BOX'
    }
  }
  const navItems = getNavItems()
  const logo = getLogo()
  return (
    <div
      className={`fixed left-0 top-12 h-screen bg-gray-900 border-r border-gray-800 transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'} z-30`}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-800">
        {!collapsed && (
          <h2 className="text-lg font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            {logo}
          </h2>
        )}
        <button
          onClick={toggleCollapsed}
          className="p-1 rounded-md hover:bg-gray-800 text-gray-400 hover:text-white"
        >
          {collapsed ? (
            <ChevronRightIcon size={20} />
          ) : (
            <ChevronLeftIcon size={20} />
          )}
        </button>
      </div>
      <nav className="mt-6">
        <ul>
          {navItems.map((item, index) => (
            <li key={index} className="mb-2 px-3">
              <NavLink
                to={item.to}
                end={item.to.split('/').length <= 2}
                className={({ isActive }) =>
                  `flex items-center p-3 rounded-lg transition-all ${isActive ? 'bg-indigo-900/50 text-indigo-400 border-l-2 border-indigo-500' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`
                }
              >
                <div className="flex items-center">
                  {item.icon}
                  {!collapsed && <span className="ml-3">{item.text}</span>}
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
export default Sidebar
