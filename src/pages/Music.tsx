import React from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, Music2 } from 'lucide-react';

const playlists = [
  {
    id: 1,
    title: 'Summer Vibes 2024',
    description: 'The perfect mix for your summer parties',
    duration: '1:45:30',
    image: 'https://images.unsplash.com/photo-1594623930572-300a3011d9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 2,
    title: 'Deep House Journey',
    description: 'A journey through the depths of house music',
    duration: '2:15:00',
    image: 'https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 3,
    title: 'Techno Underground',
    description: 'Raw and powerful techno beats',
    duration: '1:30:00',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  }
];

function Music() {
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-8">Music</h1>

          <div className="mb-12">
            <div className="relative w-full h-[300px] rounded-xl overflow-hidden mb-8">
              <img 
                src="https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                alt="DJ nauJ music banner"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-spotify-black to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h2 className="text-4xl font-bold mb-2">Latest Releases</h2>
                <p className="text-gray-300">Check out my newest tracks and mixes</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {playlists.map((playlist) => (
                <motion.div
                  key={playlist.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-spotify-black/50 rounded-lg overflow-hidden backdrop-blur-sm"
                >
                  <div className="relative group">
                    <img 
                      src={playlist.image} 
                      alt={playlist.title}
                      className="w-full aspect-square object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                      <button className="bg-spotify-green text-spotify-black p-4 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <Play className="h-6 w-6" />
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-1">{playlist.title}</h3>
                    <p className="text-gray-300 text-sm mb-2">{playlist.description}</p>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Clock className="h-4 w-4" />
                      <span>{playlist.duration}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-spotify-black/50 p-8 rounded-xl backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-6">
              <Music2 className="h-8 w-8 text-spotify-green" />
              <h2 className="text-2xl font-bold">Spotify Player</h2>
            </div>
            <iframe
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DXc8kgYqY7jP5"
              width="100%"
              height="380"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              className="rounded-xl"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Music;