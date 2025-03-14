import React, { useState } from 'react'
import {
  PlayIcon,
  PauseIcon,
  SkipBackIcon,
  SkipForwardIcon,
  VolumeIcon,
  HeartIcon,
  ShareIcon,
} from 'lucide-react'
const MediaPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <div>
      <div className="flex items-center space-x-4">
        <img
          src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=120&h=120&q=80&auto=format&fit=crop"
          alt="Album cover"
          className="w-16 h-16 rounded-lg"
        />
        <div className="flex-1">
          <h3 className="font-medium">Electric Dreams</h3>
          <p className="text-sm text-gray-400">Sarah Johnson</p>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
            <HeartIcon size={20} className="text-gray-400" />
          </button>
          <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
            <ShareIcon size={20} className="text-gray-400" />
          </button>
        </div>
      </div>
      <div className="mt-4">
        <div className="relative w-full h-1 bg-gray-700 rounded-full">
          <div
            className="absolute left-0 top-0 h-full bg-indigo-500 rounded-full"
            style={{
              width: '45%',
            }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>1:42</span>
          <span>3:45</span>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center space-x-4">
        <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
          <SkipBackIcon size={24} className="text-gray-400" />
        </button>
        <button
          className="p-3 bg-indigo-600 hover:bg-indigo-700 rounded-full transition-colors"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? (
            <PauseIcon size={24} className="text-white" />
          ) : (
            <PlayIcon size={24} className="text-white" />
          )}
        </button>
        <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
          <SkipForwardIcon size={24} className="text-gray-400" />
        </button>
      </div>
      <div className="mt-4 flex items-center space-x-2">
        <VolumeIcon size={20} className="text-gray-400" />
        <div className="flex-1 h-1 bg-gray-700 rounded-full">
          <div
            className="h-full bg-gray-400 rounded-full"
            style={{
              width: '75%',
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}
export default MediaPlayer
