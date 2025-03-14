import React from 'react'
const RevenueChart = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
  const revenueData = [32, 45, 38, 55, 48, 65]
  const profitData = [20, 28, 25, 35, 32, 42]
  const maxValue = Math.max(...revenueData, ...profitData)
  return (
    <div className="w-full">
      <div className="flex justify-end mb-4 space-x-4">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-indigo-500 mr-2"></div>
          <span className="text-sm text-gray-300">Revenue ($K)</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
          <span className="text-sm text-gray-300">Profit ($K)</span>
        </div>
      </div>
      <div className="h-64 flex items-end">
        {months.map((month, index) => (
          <div
            key={index}
            className="flex-1 flex justify-center items-end space-x-1"
          >
            <div
              className="w-3 bg-indigo-500 rounded-t transition-all duration-500"
              style={{
                height: `${(revenueData[index] / maxValue) * 100}%`,
                maxHeight: '90%',
              }}
            ></div>
            <div
              className="w-3 bg-green-500 rounded-t transition-all duration-500"
              style={{
                height: `${(profitData[index] / maxValue) * 100}%`,
                maxHeight: '90%',
              }}
            ></div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-2">
        {months.map((month, index) => (
          <div key={index} className="flex-1 text-center text-xs text-gray-400">
            {month}
          </div>
        ))}
      </div>
    </div>
  )
}
export default RevenueChart
