import React from 'react'
const PerformanceChart = () => {
  // This would normally use a charting library like recharts
  // For this example, we'll create a visual representation with CSS
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
  const streamData = [15, 30, 25, 45, 35, 55]
  const listenerData = [8, 12, 10, 18, 22, 28]
  const maxValue = Math.max(...streamData, ...listenerData)
  return (
    <div className="w-full">
      <div className="flex justify-end mb-4 space-x-4">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-indigo-500 mr-2"></div>
          <span className="text-sm text-gray-300">Streams (K)</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
          <span className="text-sm text-gray-300">Listeners (K)</span>
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
                height: `${(streamData[index] / maxValue) * 100}%`,
                maxHeight: '90%',
              }}
            ></div>
            <div
              className="w-3 bg-purple-500 rounded-t transition-all duration-500"
              style={{
                height: `${(listenerData[index] / maxValue) * 100}%`,
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
export default PerformanceChart
