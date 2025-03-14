import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from 'react-router-dom'
import DashboardLayout from './components/layout/DashboardLayout'
import ArtistDashboard from './components/dashboards/artist/ArtistDashboard'
import AdminDashboard from './components/dashboards/admin/AdminDashboard'
import ViewerDashboard from './components/dashboards/viewer/ViewerDashboard'
const userTypes = {
  ARTIST: 'artist',
  ADMIN: 'admin',
  VIEWER: 'viewer',
}
const UserTypeSelector = ({ userType, setUserType }) => {
  const navigate = useNavigate()
  const handleUserTypeChange = (type) => {
    setUserType(type)
    navigate(`/${type}`)
  }
  const getProfileImage = () => {
    switch (userType) {
      case 'artist':
        return 'https://images.unsplash.com/photo-1516016096676-4aac68721a4d?q=80&w=100&auto=format&fit=crop'
      case 'admin':
        return 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=100&auto=format&fit=crop'
      case 'viewer':
        return 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop'
      default:
        return ''
    }
  }
  const getUserName = () => {
    switch (userType) {
      case 'artist':
        return 'Sarah Johnson'
      case 'admin':
        return 'Michael Rodriguez'
      case 'viewer':
        return 'Alex Thompson'
      default:
        return 'User'
    }
  }
  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-gray-900 bg-opacity-80 backdrop-blur-md p-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2 md:space-x-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-full overflow-hidden border-2 border-indigo-500">
              <img
                src={getProfileImage()}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium">{getUserName()}</p>
              <p className="text-xs text-gray-500 capitalize">{userType}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          <button
            className={`px-3 py-1 rounded-full text-xs sm:text-sm ${userType === userTypes.ARTIST ? 'bg-indigo-600' : 'bg-gray-800 hover:bg-gray-700'}`}
            onClick={() => handleUserTypeChange(userTypes.ARTIST)}
          >
            Artist View
          </button>
          <button
            className={`px-3 py-1 rounded-full text-xs sm:text-sm ${userType === userTypes.ADMIN ? 'bg-indigo-600' : 'bg-gray-800 hover:bg-gray-700'}`}
            onClick={() => handleUserTypeChange(userTypes.ADMIN)}
          >
            Admin View
          </button>
          <button
            className={`px-3 py-1 rounded-full text-xs sm:text-sm ${userType === userTypes.VIEWER ? 'bg-indigo-600' : 'bg-gray-800 hover:bg-gray-700'}`}
            onClick={() => handleUserTypeChange(userTypes.VIEWER)}
          >
            Fan View
          </button>
        </div>
      </div>
    </div>
  )
}
export function App() {
  const [userType, setUserType] = useState(userTypes.ARTIST)
  return (
    <Router>
      <div className="w-full min-h-screen bg-gray-900 text-white font-sans">
        <UserTypeSelector userType={userType} setUserType={setUserType} />
        <div className="pt-12">
          <Routes>
            <Route
              path="/"
              element={<Navigate to={`/${userType}`} replace />}
            />
            <Route
              path="/artist/*"
              element={
                <DashboardLayout userType={userTypes.ARTIST}>
                  <ArtistDashboard />
                </DashboardLayout>
              }
            />
            <Route
              path="/admin/*"
              element={
                <DashboardLayout userType={userTypes.ADMIN}>
                  <AdminDashboard />
                </DashboardLayout>
              }
            />
            <Route
              path="/viewer/*"
              element={
                <DashboardLayout userType={userTypes.VIEWER}>
                  <ViewerDashboard />
                </DashboardLayout>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  )
}
