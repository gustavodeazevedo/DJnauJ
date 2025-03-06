import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Instagram, AlignJustify as Spotify, Mail, Phone } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-8">Contact</h1>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-spotify-black/50 border border-gray-600 focus:border-spotify-green focus:outline-none focus:ring-1 focus:ring-spotify-green"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-spotify-black/50 border border-gray-600 focus:border-spotify-green focus:outline-none focus:ring-1 focus:ring-spotify-green"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 rounded-lg bg-spotify-black/50 border border-gray-600 focus:border-spotify-green focus:outline-none focus:ring-1 focus:ring-spotify-green"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-spotify-green text-spotify-black px-8 py-3 rounded-full flex items-center gap-2 hover:bg-opacity-80 transition-all duration-200"
                >
                  <span>Send Message</span>
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-spotify-black/50 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-spotify-green" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-300">booking@djnauj.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-spotify-black/50 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-spotify-green" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-300">+55 (11) 99999-9999</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-spotify-black/50 p-3 rounded-full">
                    <Instagram className="h-6 w-6 text-spotify-green" />
                  </div>
                  <div>
                    <h3 className="font-medium">Instagram</h3>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-spotify-green">
                      @djnauj
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-spotify-black/50 p-3 rounded-full">
                    <Spotify className="h-6 w-6 text-spotify-green" />
                  </div>
                  <div>
                    <h3 className="font-medium">Spotify</h3>
                    <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-spotify-green">
                      DJ nauJ
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;