import Animal from "../teste/Animal";
import AnimalsRepository from "../repositories/AnimalRepository";


interface Request {
  name: string;
  age: number;
  type: 'cat' | 'dog';
  race: string;
}

class CreateAnimalsService {
  private animalsRepository: AnimalsRepository;

  constructor(animalsRepository: AnimalsRepository) {
    this.animalsRepository = animalsRepository;
  }

  public execute({ name, age, type, race }: Request): Animal {
    if (type === 'cat') {
    //   const balance = this.animalsRepository.getBalance().total;

    }

    const animal = this.animalsRepository.create({
      name,
      age,
      type,
      race
    });

    return animal;
  }
}

export default CreateAnimalsService;
