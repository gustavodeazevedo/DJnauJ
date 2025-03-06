import React from "react";
import { motion } from "framer-motion";
import { Instagram, AlignJustify as Spotify } from "lucide-react";
import "../../src/index.css";

function Home() {
  return (
    <div className="min-h-screen pt-16 flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative flex items-center justify-center w-48 h-48 mb-2"
      >
        <img
          id="profile"
          src="https://yt3.googleusercontent.com/KanHfxH7fjlbwyzLoQGjrpy5D4Vgbe66jO3hLVItm_UQCWr3YkSsRHA_03baRKT5uuZ4FJIf-w=s160-c-k-c0x00ffffff-no-rj"
          alt="DJ nauJ"
          className="rounded-full object-cover w-full h-full shadow-2xl ring-4 ring-spotify-green/20"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-5xl font-bold mb-1"
      >
        DJ nauJ
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-lg text-gray-300 mt-5 mb-8"
      >
        Dj nauJ - o que toca e elas sentem!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex space-x-4"
      >
        <a
          href="https://www.instagram.com/nauj.dj?igsh=ZXdtNzk4ejRkaWY="
          target="_blank"
          rel="noopener noreferrer"
          className="bg-spotify-green text-spotify-black px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-opacity-80 transition-all duration-200"
        >
          <Instagram className="h-5 w-5" />
          <span>Instagram</span>
        </a>
        <a
          href="https://open.spotify.com/intl-pt/artist/7kCo73uiRFAZCeQwBPu5P6?si=F6Ypt3m7Q7WXfpACe-zxPg"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-spotify-green text-spotify-black px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-opacity-80 transition-all duration-200"
        >
          <Spotify className="h-5 w-5" />
          <span>Spotify</span>
        </a>
      </motion.div>
    </div>
  );
}

export default Home;
