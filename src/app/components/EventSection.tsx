'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, User } from 'lucide-react';
import { Evento } from '@/types';
import { apiService } from '@/services/api';

export default function EventsSection() {
  const [events, setEvents] = useState<Evento[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const data = await apiService.getEventos();
        setEvents(data);
      } catch (err) {
        console.error('Error fetching events:', err);
        setError('Erro ao carregar eventos. Usando dados de exemplo.');
        setEvents(apiService.getMockEventos());
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <section id="events" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-96 mx-auto mb-12"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 rounded-xl h-48 mb-4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="events" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-poppins">
            Próximos
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
              {' '}Eventos
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Participe dos nossos eventos e ajude a encontrar um lar para nossos amigos de quatro patas.
          </p>
          {error && (
            <div className="mt-4 text-orange-600 bg-orange-50 px-4 py-2 rounded-lg inline-block">
              {error}
            </div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-white">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <Calendar className="w-8 h-8 mb-4" />
                  <h3 className="text-2xl font-bold mb-2 font-poppins">
                    {event.nome}
                  </h3>
                  <p className="text-purple-100 font-inter">
                    {event.descricao}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-3 text-purple-500" />
                    <span className="font-inter">
                      {formatDate(event.data)}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-3 text-blue-500" />
                    <span className="font-inter">{event.hora}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-3 text-green-500" />
                    <span className="font-inter">{event.local}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <User className="w-5 h-5 mr-3 text-orange-500" />
                    <span className="font-inter">
                      Responsável: {event.responsavel}
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300">
                    Participar do Evento
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {events.length === 0 && !loading && (
          <div className="text-center py-16">
            <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Nenhum evento programado
            </h3>
            <p className="text-gray-500">
              Fique atento às nossas redes sociais para os próximos eventos!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}