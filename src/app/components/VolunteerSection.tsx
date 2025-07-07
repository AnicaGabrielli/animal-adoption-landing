'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Mail, Phone, Clock, Star } from 'lucide-react';
import { Voluntario } from '@/types';
import { apiService } from '@/services/api';

export default function VolunteersSection() {
  const [volunteers, setVolunteers] = useState<Voluntario[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        setLoading(true);
        const data = await apiService.getVoluntarios();
        setVolunteers(data);
      } catch (err) {
        console.error('Error fetching volunteers:', err);
        setError('Erro ao carregar voluntários. Usando dados de exemplo.');
        setVolunteers(apiService.getMockVoluntarios());
      } finally {
        setLoading(false);
      }
    };

    fetchVolunteers();
  }, []);

  if (loading) {
    return (
      <section id="volunteers" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-96 mx-auto mb-12"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 rounded-xl h-64 mb-4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="volunteers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-poppins">
            Nossos
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-600">
              {' '}Voluntários
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Conheça as pessoas dedicadas que fazem a diferença na vida dos nossos animais todos os dias.
          </p>
          {error && (
            <div className="mt-4 text-orange-600 bg-orange-50 px-4 py-2 rounded-lg inline-block">
              {error}
            </div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {volunteers.map((volunteer, index) => (
            <motion.div
              key={volunteer.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 font-poppins">
                  {volunteer.nome}
                </h3>
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-4 h-4 text-yellow-500 mr-1" />
                  <span className="text-sm text-gray-600 font-inter">
                    {volunteer.area_interesse}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Mail className="w-4 h-4 mr-3 text-blue-500" />
                  <span className="text-sm font-inter">{volunteer.email}</span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-3 text-green-500" />
                  <span className="text-sm font-inter">{volunteer.telefone}</span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-3 text-purple-500" />
                  <span className="text-sm font-inter">{volunteer.disponibilidade}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 font-inter leading-relaxed">
                  {volunteer.experiencia}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-500 to-green-500 rounded-xl p-8 text-white"
        >
          <Heart className="w-16 h-16 mx-auto mb-6 animate-pulse-slow" />
          <h3 className="text-3xl font-bold mb-4 font-poppins">
            Seja um Voluntário!
          </h3>
          <p className="text-xl mb-8 font-inter max-w-2xl mx-auto">
            Junte-se à nossa causa e ajude a transformar vidas. Cada gesto de amor faz a diferença.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
              Quero ser Voluntário
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300">
              Saiba Mais
            </button>
          </div>
        </motion.div>

        {volunteers.length === 0 && !loading && (
          <div className="text-center py-16">
            <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Nenhum voluntário cadastrado
            </h3>
            <p className="text-gray-500">
              Seja o primeiro a se juntar à nossa causa!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}