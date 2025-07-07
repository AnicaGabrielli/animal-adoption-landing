'use client';

import { motion } from 'framer-motion';
import { Heart, Mail, Phone, MapPin, Github, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2"
          >
            <div className="flex items-center mb-4">
              <Heart className="w-8 h-8 text-red-500 mr-3" />
              <h3 className="text-2xl font-bold font-poppins">Adoção com Amor</h3>
            </div>
            <p className="text-gray-400 mb-6 font-inter leading-relaxed">
              Conectamos corações e transformamos vidas através da adoção responsável. 
              Nossa missão é encontrar lares amorosos para animais que precisam de uma segunda chance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Links Rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 font-poppins">Links Rápidos</h4>
            <ul className="space-y-2 font-inter">
              <li>
                <a href="#animals" className="text-gray-400 hover:text-white transition-colors">
                  Animais para Adoção
                </a>
              </li>
              <li>
                <a href="#events" className="text-gray-400 hover:text-white transition-colors">
                  Eventos
                </a>
              </li>
              <li>
                <a href="#volunteers" className="text-gray-400 hover:text-white transition-colors">
                  Voluntários
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Como Adotar
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contato */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 font-poppins">Contato</h4>
            <div className="space-y-3 font-inter">
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-3" />
                <span>contato@adocaocomamor.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-3" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-3" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400 font-inter">
            © 2024 Adoção com Amor. Feito com <Heart className="w-4 h-4 inline text-red-500" /> para nossos amigos de quatro patas.
          </p>
          <p className="text-gray-500 text-sm mt-2 font-inter">
            Desenvolvido como projeto educacional - API disponível em{' '}
            <a 
              href="https://github.com/mathpestana/AnimalAdoption-Api" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              GitHub
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}