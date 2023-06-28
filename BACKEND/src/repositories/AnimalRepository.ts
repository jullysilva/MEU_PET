import Animal from '../models/Animal';

interface AnimalDTO {
  name: string;
  age: number;
  type: 'cat' | 'dog';
  race: string;
}

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class AnimalsRepository {
  private animals: Animal[];

  constructor() {
    this.animals = [];
  }

  public all(): Animal[] {
    return this.animals;
  }

  public create({ name, age, type, race }: AnimalDTO): Animal {
    const animal = new Animal({ name, age, type, race });

    this.animals.push(animal);

    return animal;
  }
}

export default AnimalsRepository;
