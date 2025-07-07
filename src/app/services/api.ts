import { Animal, Adotante, Voluntario, Evento, ProcessoAdocao } from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

class ApiService {
  private async fetchWithErrorHandling<T>(endpoint: string): Promise<T> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error);
      throw error;
    }
  }

  async getAnimals(): Promise<Animal[]> {
    return this.fetchWithErrorHandling<Animal[]>('/api/animals');
  }

  async getAdotantes(): Promise<Adotante[]> {
    return this.fetchWithErrorHandling<Adotante[]>('/api/adotantes');
  }

  async getVoluntarios(): Promise<Voluntario[]> {
    return this.fetchWithErrorHandling<Voluntario[]>('/api/voluntarios');
  }

  async getEventos(): Promise<Evento[]> {
    return this.fetchWithErrorHandling<Evento[]>('/api/eventos');
  }

  async getProcessosAdocao(): Promise<ProcessoAdocao[]> {
    return this.fetchWithErrorHandling<ProcessoAdocao[]>('/api/processos-adocao');
  }

  // Métodos para dados mockados (fallback)
  getMockAnimals(): Animal[] {
    return [
      {
        id: 1,
        nome: "Buddy",
        especie: "Cachorro",
        raca: "Golden Retriever",
        idade: 3,
        peso: 25.5,
        cor: "Dourado",
        descricao: "Cão muito amigável e brincalhão, ideal para famílias com crianças.",
        status: "Disponível",
        foto: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=300&h=300&fit=crop",
        createdAt: "2024-01-15T10:30:00Z",
        updatedAt: "2024-01-15T10:30:00Z"
      },
      {
        id: 2,
        nome: "Luna",
        especie: "Gato",
        raca: "Siamês",
        idade: 2,
        peso: 4.2,
        cor: "Cinza e Branco",
        descricao: "Gata carinhosa e tranquila, perfeita para apartamentos.",
        status: "Disponível",
        foto: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300&h=300&fit=crop",
        createdAt: "2024-01-10T14:20:00Z",
        updatedAt: "2024-01-10T14:20:00Z"
      }
    ];
  }

  getMockEventos(): Evento[] {
    return [
      {
        id: 1,
        nome: "Feira de Adoção - Shopping Center",
        descricao: "Grande evento de adoção com mais de 50 animais disponíveis",
        data: "2024-02-15",
        hora: "09:00",
        local: "Shopping Center - Praça Central",
        responsavel: "Maria Silva",
        createdAt: "2024-01-20T09:00:00Z",
        updatedAt: "2024-01-20T09:00:00Z"
      },
      {
        id: 2,
        nome: "Campanha de Vacinação",
        descricao: "Vacinação gratuita para pets adotados",
        data: "2024-02-20",
        hora: "14:00",
        local: "Clínica Veterinária Amor Animal",
        responsavel: "Dr. João Santos",
        createdAt: "2024-01-22T11:30:00Z",
        updatedAt: "2024-01-22T11:30:00Z"
      }
    ];
  }

  getMockVoluntarios(): Voluntario[] {
    return [
      {
        id: 1,
        nome: "Ana Costa",
        email: "ana@email.com",
        telefone: "(11) 99999-1234",
        area_interesse: "Cuidados veterinários",
        disponibilidade: "Fins de semana",
        experiencia: "3 anos como voluntária em ONGs",
        createdAt: "2024-01-15T10:30:00Z",
        updatedAt: "2024-01-15T10:30:00Z"
      },
      {
        id: 2,
        nome: "Carlos Oliveira",
        email: "carlos@email.com",
        telefone: "(11) 88888-5678",
        area_interesse: "Transporte e eventos",
        disponibilidade: "Tardes da semana",
        experiencia: "Novo voluntário, muito motivado",
        createdAt: "2024-01-18T16:45:00Z",
        updatedAt: "2024-01-18T16:45:00Z"
      }
    ];
  }
}

export const apiService = new ApiService();