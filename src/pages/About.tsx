import React from "react";
import { motion } from "framer-motion";
import { Disc, Music, Headphones } from "lucide-react";

function About() {
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-8">Sobre DJ nauJ</h1>

          <div className="prose prose-invert mb-12">
            <p className="text-xl text-gray-300"></p>
          </div>

          <h2 className="text-3xl font-bold mb-6">Musical Influences</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-spotify-black/50 p-6 rounded-lg backdrop-blur-sm">
              <Disc className="h-8 w-8 text-spotify-green mb-4" />
              <h3 className="text-xl font-bold mb-2">House Music</h3>
              <p className="text-gray-300">
                Deep, soulful beats that move both body and spirit, inspired by
                Chicago house legends.
              </p>
            </div>
            <div className="bg-spotify-black/50 p-6 rounded-lg backdrop-blur-sm">
              <Music className="h-8 w-8 text-spotify-green mb-4" />
              <h3 className="text-xl font-bold mb-2">Techno</h3>
              <p className="text-gray-300">
                Raw, powerful rhythms drawing from Detroit's rich techno
                heritage.
              </p>
            </div>
            <div className="bg-spotify-black/50 p-6 rounded-lg backdrop-blur-sm">
              <Headphones className="h-8 w-8 text-spotify-green mb-4" />
              <h3 className="text-xl font-bold mb-2">Electronic</h3>
              <p className="text-gray-300">
                Progressive and melodic elements that create immersive
                soundscapes.
              </p>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              alt="DJ nauJ performing"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
