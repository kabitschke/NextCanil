export type PetType = 'dog' | 'cat' | 'fish';

export type Pets = {
  type: 'dog' | 'cat' | 'fish',
  image: string,
  name: string,
  color: string,
  sex: 'Feminino' | 'Masculino'
};