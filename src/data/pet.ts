import { Pets, PetType } from '../types/types'

const data: Pets[] = [
  {
    type: 'dog',
    image: 'pastor-alemao.jpg',
    name: 'Pastor-alemão',
    color: 'Amarelo e Preto',
    sex: 'Masculino'
  },

  {
    type: 'dog',
    image: 'labrador.jpg',
    name: 'Labrador-retriever',
    color: 'Branco',
    sex: 'Masculino'
  },

  {
    type: 'dog',
    image: 'zwergspitz.jpg',
    name: 'Zwergspitz',
    color: ' Amarelo',
    sex: 'Feminino'
  },

  {
    type: 'dog',
    image: 'husky.jpg',
    name: 'Husky Siberiano',
    color: 'Branco e Preto',
    sex: 'Masculino'
  },

  {
    type: 'dog',
    image: 'golden.jpg',
    name: 'Golden Retriever',
    color: 'Amarelo',
    sex: 'Masculino'
  },

  {
    type: 'dog',
    image: 'poodle.jpg',
    name: 'Poodle',
    color: 'Branco',
    sex: 'Feminino'
  },

  {
    type: 'dog',
    image: 'bulldog.jpg',
    name: 'Bulldog',
    color: 'Branco e Amarelo',
    sex: 'Masculino'
  },

  {
    type: 'cat',
    image: 'persa.jpg',
    name: 'Persa',
    color: 'Amarelo',
    sex: 'Masculino'
  },

  {
    type: 'cat',
    image: 'mainecoon.jpg',
    name: 'Maine Coon',
    color: 'Preto e Branco',
    sex: 'Masculino'
  },

  {
    type: 'cat',
    image: 'bengal.jpg',
    name: 'Bengal',
    color: 'Branco, Preto e Amarelo',
    sex: 'Feminino'
  },

  {
    type: 'cat',
    image: 'siames.jpg',
    name: 'Siamês',
    color: 'Amarelo e Preto',
    sex: 'Masculino'
  },

  {
    type: 'cat',
    image: 'sphynx.jpg',
    name: 'Sphynx',
    color: 'Branco',
    sex: 'Masculino'
  },

  {
    type: 'fish',
    image: 'neon.jpg',
    name: 'Tetra Neon',
    color: 'Vermelho e Azul',
    sex: 'Masculino'
  },

  {
    type: 'fish',
    image: 'matogrosso.jpg',
    name: 'Mato Grosso',
    color: 'Laranja',
    sex: 'Masculino'
  },

  {
    type: 'fish',
    image: 'limpavidro.jpg',
    name: 'Limpa Vidro',
    color: 'Verde e Branco',
    sex: 'Masculino'
  },

  {
    type: 'fish',
    image: 'tanictis.jpg',
    name: 'Tanictis',
    color: 'Vermelho',
    sex: 'Masculino'
  },

  {
    type: 'fish',
    image: 'acara.jpg',
    name: 'Acará Bandeira',
    color: 'Preto',
    sex: 'Masculino'
  }

];

export const petConfig = {
  dogs: {
    type: "dog" as PetType,
    title: "Cachorros",
    background: "banner_dog.jpg"
  },
  cats: {
    type: "cat" as PetType,
    title: "Gatos",
    background: "banner_cat.jpg"
  },
  fishes: {
    type: "fish" as PetType,
    title: "Peixes",
    background: "banner_fish.jpg"
  }
};

export const Pet = {
  getAll: (): Pets[] => {
    //Todos os pets
    return data;
  },
  getFromType: (type: PetType): Pets[] => {
    return data.filter(item => item.type === type);
    //Filtra pelo tipo
  },

  getFromName: (q: string) => {
    return data.filter(item =>
      item.name.toLowerCase().indexOf(q.toLowerCase()) > -1
    );
    //-1 é quando não encontrou nada
  }
};