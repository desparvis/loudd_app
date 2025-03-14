import React from 'react'
import { BarChart3Icon, TrendingUpIcon, TrendingDownIcon } from 'lucide-react'
const ArtistsList = () => {
  const artists = [
    {
      id: 1,
      name: 'Sarah Johnson',
      genre: 'Pop',
      monthlyListeners: '245.8K',
      growth: '+12.6%',
      trending: 'up',
      image:
        'https://images.unsplash.com/photo-1516016096676-4aac68721a4d?w=100&h=100&q=80&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Mike Rivers',
      genre: 'Hip Hop',
      monthlyListeners: '189.2K',
      growth: '+8.3%',
      trending: 'up',
      image:
        'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&h=100&q=80&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'Electronic Dreams',
      genre: 'Electronic',
      monthlyListeners: '142.5K',
      growth: '-2.1%',
      trending: 'down',
      image:
        'https://images.unsplash.com/photo-1526218626217-dc65a29bb444?w=100&h=100&q=80&auto=format&fit=crop',
    },
    {
      id: 4,
      name: 'Luna Ray',
      genre: 'R&B',
      monthlyListeners: '98.3K',
      growth: '+15.7%',
      trending: 'up',
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&q=80&auto=format&fit=crop',
    },
  ]
  return (
    <div className="space-y-3">
      {artists.map((artist) => (
        <div
          key={artist.id}
          className="flex items-center p-3 rounded-lg hover:bg-gray-700/50 transition-colors"
        >
          <img
            src={artist.image}
            alt={artist.name}
            className="w-10 h-10 rounded-full object-cover mr-3"
          />
          <div className="flex-1">
            <h4 className="font-medium">{artist.name}</h4>
            <div className="flex items-center text-xs text-gray-400">
              <span>{artist.genre}</span>
              <span className="mx-2">•</span>
              <span>{artist.monthlyListeners} listeners</span>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-1">
              {artist.trending === 'up' ? (
                <TrendingUpIcon size={16} className="text-green-400" />
              ) : (
                <TrendingDownIcon size={16} className="text-red-400" />
              )}
              <span
                className={`text-sm font-medium ${artist.trending === 'up' ? 'text-green-400' : 'text-red-400'}`}
              >
                {artist.growth}
              </span>
            </div>
            <button className="text-xs text-indigo-400 hover:text-indigo-300 mt-1">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
export default ArtistsList
