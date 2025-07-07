export interface Animal {
  id: number;
  nome: string;
  especie: string;
  raca: string;
  idade: number;
  peso: number;
  cor: string;
  descricao: string;
  status: string;
  foto?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Adotante {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
  cidade: string;
  estado: string;
  cep: string;
  profissao: string;
  experiencia_animais: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Voluntario {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  area_interesse: string;
  disponibilidade: string;
  experiencia: string;
  createdAt: string;
  updatedAt: string;
}

export interface Evento {
  id: number;
  nome: string;
  descricao: string;
  data: string;
  hora: string;
  local: string;
  responsavel: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProcessoAdocao {
  id: number;
  animal_id: number;
  adotante_id: number;
  data_solicitacao: string;
  status: string;
  justificativa?: string;
  data_agendamento?: string;
  hora_agendamento?: string;
  local_retirada?: string;
  createdAt: string;
  updatedAt: string;
  Animal?: Animal;
  Adotante?: Adotante;
}
