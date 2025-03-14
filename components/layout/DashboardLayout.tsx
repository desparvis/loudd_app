import React from 'react'
interface DashboardLayoutProps {
  children: React.ReactNode
  userType: string
}
const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="h-screen pt-12">
      <main className="p-3 md:p-6 overflow-auto h-[calc(100vh-48px)]">
        {children}
      </main>
    </div>
  )
}
export default DashboardLayout
