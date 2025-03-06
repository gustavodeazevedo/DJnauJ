import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const events = [
  {
    id: 1,
    date: '2024-03-25',
    name: 'Electronic Nights',
    location: 'Club Zero, São Paulo',
    ticketLink: 'https://tickets.com/event1',
    status: 'upcoming'
  },
  {
    id: 2,
    date: '2024-04-15',
    name: 'Summer Festival',
    location: 'Beach Arena, Rio de Janeiro',
    ticketLink: 'https://tickets.com/event2',
    status: 'upcoming'
  },
  {
    id: 3,
    date: '2024-02-10',
    name: 'Tech House Party',
    location: 'Underground Club, Curitiba',
    status: 'past'
  }
];

function Events() {
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-8">Events</h1>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-6">Upcoming Shows</h2>
            {events
              .filter(event => event.status === 'upcoming')
              .map(event => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-spotify-black/50 p-6 rounded-lg backdrop-blur-sm"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-spotify-green mb-2">
                        <Calendar className="h-5 w-5" />
                        <span>{new Date(event.date).toLocaleDateString('en-US', { 
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-1">{event.name}</h3>
                      <div className="flex items-center gap-2 text-gray-300">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    {event.ticketLink && (
                      <a
                        href={event.ticketLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-spotify-green text-spotify-black px-6 py-2 rounded-full flex items-center gap-2 hover:bg-opacity-80 transition-all duration-200"
                      >
                        <span>Get Tickets</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}

            <h2 className="text-3xl font-bold mb-6 mt-12">Past Events</h2>
            {events
              .filter(event => event.status === 'past')
              .map(event => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-spotify-black/30 p-6 rounded-lg backdrop-blur-sm"
                >
                  <div className="flex items-center gap-2 text-gray-400 mb-2">
                    <Calendar className="h-5 w-5" />
                    <span>{new Date(event.date).toLocaleDateString('en-US', { 
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{event.name}</h3>
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Events;