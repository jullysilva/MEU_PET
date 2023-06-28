import { uuid } from 'uuidv4';

class Animal {
  id: string;
  name: string;
  age: number;
  type: 'cat' | 'dog';
  race: string;

  constructor({ name, age, type, race }: Omit<Animal, 'id'>) {
    this.id = uuid();
    this.name = name;
    this.age = age;
    this.type = type;
    this.race = race;
  }
}

export default Animal;
