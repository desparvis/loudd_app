import React from 'react'
import { MoreHorizontalIcon, PlayIcon } from 'lucide-react'
const RecentUploads = () => {
  const uploads = [
    {
      id: 1,
      title: 'Midnight Dreams',
      coverArt:
        'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&q=80&auto=format&fit=crop',
      uploadDate: '2 days ago',
      status: 'Published',
      streams: 1240,
    },
    {
      id: 2,
      title: 'Electric Sunset',
      coverArt:
        'https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?w=100&h=100&q=80&auto=format&fit=crop',
      uploadDate: '1 week ago',
      status: 'Published',
      streams: 3450,
    },
    {
      id: 3,
      title: 'Urban Echoes',
      coverArt:
        'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=100&h=100&q=80&auto=format&fit=crop',
      uploadDate: '2 weeks ago',
      status: 'Published',
      streams: 8920,
    },
  ]
  return (
    <div className="space-y-3">
      {uploads.map((track) => (
        <div
          key={track.id}
          className="flex items-center p-3 rounded-lg hover:bg-gray-700/50 transition-colors"
        >
          <div className="relative w-12 h-12 rounded-md overflow-hidden mr-3 group">
            <img
              src={track.coverArt}
              alt={track.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <PlayIcon size={18} className="text-white" />
            </div>
          </div>
          <div className="flex-1">
            <h4 className="font-medium">{track.title}</h4>
            <div className="flex items-center text-xs text-gray-400">
              <span>{track.uploadDate}</span>
              <span className="mx-2">•</span>
              <span
                className={`${track.status === 'Published' ? 'text-green-400' : 'text-yellow-400'}`}
              >
                {track.status}
              </span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium">
              {track.streams.toLocaleString()}
            </div>
            <div className="text-xs text-gray-400">streams</div>
          </div>
          <button className="ml-4 p-1 rounded-full hover:bg-gray-600">
            <MoreHorizontalIcon size={18} className="text-gray-400" />
          </button>
        </div>
      ))}
    </div>
  )
}
export default RecentUploads
