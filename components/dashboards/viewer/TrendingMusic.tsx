import React from 'react'
import { PlayIcon, HeartIcon } from 'lucide-react'
const TrendingMusic = () => {
  const trending = [
    {
      id: 1,
      title: 'Electric Dreams',
      artist: 'Sarah Johnson',
      plays: '245.8K',
      duration: '3:45',
      coverArt:
        'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&q=80&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Neon Nights',
      artist: 'Mike Rivers',
      plays: '182.3K',
      duration: '4:12',
      coverArt:
        'https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?w=100&h=100&q=80&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Urban Soul',
      artist: 'Luna Ray',
      plays: '156.4K',
      duration: '3:28',
      coverArt:
        'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=100&h=100&q=80&auto=format&fit=crop',
    },
  ]
  return (
    <div className="space-y-3">
      {trending.map((track) => (
        <div
          key={track.id}
          className="flex items-center p-3 rounded-lg hover:bg-gray-700/50 transition-colors group"
        >
          <div className="relative w-12 h-12 rounded-md overflow-hidden mr-3">
            <img
              src={track.coverArt}
              alt={track.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
              <PlayIcon size={20} className="text-white" />
            </div>
          </div>
          <div className="flex-1">
            <h4 className="font-medium">{track.title}</h4>
            <p className="text-sm text-gray-400">{track.artist}</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right text-sm">
              <div className="text-gray-400">{track.plays} plays</div>
              <div className="text-gray-500">{track.duration}</div>
            </div>
            <button className="p-2 rounded-full hover:bg-gray-600 text-gray-400 hover:text-red-400 transition-colors">
              <HeartIcon size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
export default TrendingMusic
