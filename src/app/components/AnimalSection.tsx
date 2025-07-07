'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar, Weight, Palette } from 'lucide-react';
import { Animal } from '@/types';
import { apiService } from '@/services/api';

export default function AnimalsSection() {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        setLoading(true);
        const data = await apiService.getAnimals();
        setAnimals(data);
      } catch (err) {
        console.error('Error fetching animals:', err);
        setError('Erro ao carregar animais. Usando dados de exemplo.');
        setAnimals(apiService.getMockAnimals());
      } finally {
        setLoading(false);
      }
    };

    fetchAnimals();
  }, []);

  if (loading) {
    return (
      <section id="animals" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-96 mx-auto mb-12"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 rounded-xl h-64 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="animals" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-poppins">
            Nossos Amigos
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              {' '}Especiais
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Cada um desses animais tem uma história única e está esperando por uma família amorosa.
          </p>
          {error && (
            <div className="mt-4 text-orange-600 bg-orange-50 px-4 py-2 rounded-lg inline-block">
              {error}
            </div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {animals.map((animal, index) => (
            <motion.div
              key={animal.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={animal.foto || `https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop`}
                  alt={animal.nome}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    animal.status === 'Disponível' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {animal.status}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <Heart className="w-6 h-6 text-white opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2 font-poppins">
                  {animal.nome}
                </h3>
                <p className="text-gray-600 mb-4 font-inter leading-relaxed">
                  {animal.descricao}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                    <span className="text-sm">{animal.idade} anos</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Weight className="w-4 h-4 mr-2 text-green-500" />
                    <span className="text-sm">{animal.peso}kg</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Palette className="w-4 h-4 mr-2 text-purple-500" />
                    <span className="text-sm">{animal.cor}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Heart className="w-4 h-4 mr-2 text-red-500" />
                    <span className="text-sm">{animal.raca}</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300">
                  Quero Adotar {animal.nome}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {animals.length === 0 && !loading && (
          <div className="text-center py-16">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Nenhum animal disponível no momento
            </h3>
            <p className="text-gray-500">
              Volte em breve para conhecer nossos novos amigos!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}