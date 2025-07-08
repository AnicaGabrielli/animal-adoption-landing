// src/services/api.ts

import { Animal, ApiResponse, PaginatedResponse, AnimalFilters } from '@/types';

class ApiService {
  private baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

  // Dados mock para desenvolvimento
  private mockAnimals: Animal[] = [
    {
      id: '1',
      nome: 'Mel',
      descricao: 'Uma cadelinha muito carinhosa e brincalhona, adora crianças e é muito obediente. Está procurando uma família que possa dar muito amor e carinho.',
      idade: 2,
      peso: 15,
      cor: 'Dourado',
      raca: 'Golden Retriever',
      status: 'Disponível',
      foto: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop',
      telefone: '(11) 99999-9999',
      email: 'contato@ongamor.com'
    },
    {
      id: '2',
      nome: 'Rex',
      descricao: 'Um cão protetor e leal, ideal para famílias que buscam um companheiro fiel. Muito inteligente e fácil de treinar.',
      idade: 4,
      peso: 25,
      cor: 'Preto',
      raca: 'Pastor Alemão',
      status: 'Disponível',
      foto: 'https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=300&fit=crop',
      telefone: '(11) 99999-9999',
      email: 'contato@ongamor.com'
    },
    {
      id: '3',
      nome: 'Luna',
      descricao: 'Uma gatinha muito independente e carinhosa, perfeita para apartamentos. Adora brincar e é muito limpa.',
      idade: 1,
      peso: 4,
      cor: 'Cinza',
      raca: 'Persa',
      status: 'Em Processo',
      foto: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=300&fit=crop',
      telefone: '(11) 99999-9999',
      email: 'contato@ongamor.com'
    },
    {
      id: '4',
      nome: 'Thor',
      descricao: 'Um cão forte e amigável, adora brincar e fazer exercícios ao ar livre. Ideal para pessoas ativas.',
      idade: 3,
      peso: 30,
      cor: 'Marrom',
      raca: 'Rottweiler',
      status: 'Disponível',
      foto: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400&h=300&fit=crop',
      telefone: '(11) 99999-9999',
      email: 'contato@ongamor.com'
    },
    {
      id: '5',
      nome: 'Mimi',
      descricao: 'Uma gatinha muito sociável e brincalhona, adora fazer novos amigos. Muito carinhosa e dócil.',
      idade: 2,
      peso: 3,
      cor: 'Laranja',
      raca: 'Siamês',
      status: 'Disponível',
      foto: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=300&fit=crop',
      telefone: '(11) 99999-9999',
      email: 'contato@ongamor.com'
    },
    {
      id: '6',
      nome: 'Buddy',
      descricao: 'Um cão muito energético e inteligente, ideal para pessoas ativas. Adora aprender truques novos.',
      idade: 5,
      peso: 20,
      cor: 'Tricolor',
      raca: 'Border Collie',
      status: 'Disponível',
      foto: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop',
      telefone: '(11) 99999-9999',
      email: 'contato@ongamor.com'
    },
    {
      id: '7',
      nome: 'Princesa',
      descricao: 'Uma cadela muito elegante e carinhosa, ideal para quem busca um animal de companhia tranquilo.',
      idade: 6,
      peso: 8,
      cor: 'Branco',
      raca: 'Poodle',
      status: 'Disponível',
      foto: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=400&h=300&fit=crop',
      telefone: '(11) 99999-9999',
      email: 'contato@ongamor.com'
    },
    {
      id: '8',
      nome: 'Simba',
      descricao: 'Um gato muito majestoso e independente, perfeito para quem aprecia a personalidade felina.',
      idade: 3,
      peso: 5,
      cor: 'Laranja',
      raca: 'Maine Coon',
      status: 'Disponível',
      foto: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400&h=300&fit=crop',
      telefone: '(11) 99999-9999',
      email: 'contato@ongamor.com'
    }
  ];

  // Simula uma requisição HTTP
  private async makeRequest<T>(
    endpoint: string,
    options?: RequestInit
  ): Promise<ApiResponse<T>> {
    try {
      // Simula delay de rede
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Para desenvolvimento, sempre retorna dados mock
      throw new Error('API em desenvolvimento');
      
    } catch (error) {
      // Em caso de erro, retorna dados mock
      console.warn('Usando dados mock:', error);
      throw error;
    }
  }

  // Buscar todos os animais
  async getAnimals(filters?: AnimalFilters): Promise<Animal[]> {
    try {
      const response = await this.makeRequest<Animal[]>('/animals');
      return response.data;
    } catch (error) {
      // Retorna dados mock filtrados
      let filteredAnimals = [...this.mockAnimals];
      
      if (filters) {
        if (filters.status) {
          filteredAnimals = filteredAnimals.filter(animal => 
            animal.status === filters.status
          );
        }
        if (filters.raca) {
          filteredAnimals = filteredAnimals.filter(animal => 
            animal.raca.toLowerCase().includes(filters.raca!.toLowerCase())
          );
        }
        if (filters.idadeMin !== undefined) {
          filteredAnimals = filteredAnimals.filter(animal => 
            animal.idade >= filters.idadeMin!
          );
        }
        if (filters.idadeMax !== undefined) {
          filteredAnimals = filteredAnimals.filter(animal => 
            animal.idade <= filters.idadeMax!
          );
        }
      }
      
      return filteredAnimals;
    }
  }

  // Buscar animal por ID
  async getAnimalById(id: string): Promise<Animal | null> {
    try {
      const response = await this.makeRequest<Animal>(`/animals/${id}`);
      return response.data;
    } catch (error) {
      const animal = this.mockAnimals.find(a => a.id === id);
      return animal || null;
    }
  }

  // Criar novo animal
  async createAnimal(animal: Omit<Animal, 'id' | 'created_at' | 'updated_at'>): Promise<Animal> {
    try {
      const response = await this.makeRequest<Animal>('/animals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(animal),
      });
      return response.data;
    } catch (error) {
      // Simula criação com dados mock
      const newAnimal: Animal = {
        ...animal,
        id: Date.now().toString(),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };
      this.mockAnimals.push(newAnimal);
      return newAnimal;
    }
  }

  // Atualizar animal
  async updateAnimal(id: string, updates: Partial<Animal>): Promise<Animal> {
    try {
      const response = await this.makeRequest<Animal>(`/animals/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates),
      });
      return response.data;
    } catch (error) {
      // Simula atualização com dados mock
      const index = this.mockAnimals.findIndex(a => a.id === id);
      if (index === -1) {
        throw new Error('Animal não encontrado');
      }
      
      this.mockAnimals[index] = {
        ...this.mockAnimals[index],
        ...updates,
        updated_at: new Date().toISOString(),
      };
      
      return this.mockAnimals[index];
    }
  }

  // Deletar animal
  async deleteAnimal(id: string): Promise<void> {
    try {
      await this.makeRequest<void>(`/animals/${id}`, {
        method: 'DELETE',
      });
    } catch (error) {
      // Simula deleção com dados mock
      const index = this.mockAnimals.findIndex(a => a.id === id);
      if (index === -1) {
        throw new Error('Animal não encontrado');
      }
      this.mockAnimals.splice(index, 1);
    }
  }

  // Método para obter dados mock (para desenvolvimento)
  getMockAnimals(): Animal[] {
    return [...this.mockAnimals];
  }

  // Buscar animais com paginação
  async getAnimalsPaginated(
    page: number = 1,
    limit: number = 10,
    filters?: AnimalFilters
  ): Promise<PaginatedResponse<Animal>> {
    try {
      const response = await this.makeRequest<PaginatedResponse<Animal>>(
        `/animals?page=${page}&limit=${limit}`
      );
      return response.data;
    } catch (error) {
      // Simula paginação com dados mock
      const animals = await this.getAnimals(filters);
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedAnimals = animals.slice(startIndex, endIndex);
      
      return {
        data: paginatedAnimals,
        total: animals.length,
        page,
        limit,
        hasNext: endIndex < animals.length,
        hasPrev: page > 1,
      };
    }
  }
}

export const apiService = new ApiService();