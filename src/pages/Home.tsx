import React from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
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
        className="text-4xl sm:text-5xl font-bold mb-1"
      >
        DJ nauJ
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-md sm:text-lg text-gray-300 mt-5 mb-8"
      >
        Festas de comissão | Festas de aniversário | DJ Set
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-row flex-wrap justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none"
      >
        <a
          href="https://www.instagram.com/nauj.dj?igsh=ZXdtNzk4ejRkaWY="
          target="_blank"
          rel="noopener noreferrer"
          className="bg-spotify-green text-spotify-black px-5 sm:px-6 py-3 sm:py-3 rounded-full flex items-center justify-center space-x-2 hover:bg-opacity-80 transition-all duration-200 text-base sm:text-lg"
        >
          <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
          <span>Instagram</span>
        </a>

        <a
          href="https://open.spotify.com/intl-pt/artist/7kCo73uiRFAZCeQwBPu5P6?si=F6Ypt3m7Q7WXfpACe-zxPg"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-spotify-green text-spotify-black px-5 sm:px-6 py-3 sm:py-3 rounded-full flex items-center justify-center space-x-2 hover:bg-opacity-80 transition-all duration-200 text-base sm:text-lg"
        >
          <img
            src="https://img.icons8.com/ios/50/spotify--v1.png"
            className="w-5 sm:w-6"
            alt="Spotify"
          />
          <span>Spotify</span>
        </a>

        <a
          href="https://www.youtube.com/@DJnauJ/featured"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-spotify-green text-spotify-black px-5 sm:px-6 py-3 sm:py-3 rounded-full flex items-center justify-center space-x-2 hover:bg-opacity-80 transition-all duration-200 text-base sm:text-lg"
        >
          <img
            src="https://img.icons8.com/ios/50/youtube-play--v1.png"
            alt="YouTube"
            className="w-5 sm:w-6"
          />
          <span>YouTube</span>
        </a>
      </motion.div>
    </div>
  );
}

export default Home;
