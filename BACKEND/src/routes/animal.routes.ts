import { Router } from 'express';
import AnimalsRepository from '../repositories/AnimalRepository';
import AnimalsService from '../services/AnimalsService';



const animalRouter = Router();

const animalsRepository = new AnimalsRepository();

animalRouter.get('/:id', (request, response) => {
  try {
    const animals = animalsRepository.all();

    // eslint-disable-next-line object-shorthand
    return response.json({
      animals
    });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

animalRouter.post('/create', (request, response) => {
  try {
    const { name, age, type, race } = request.body;

    const createAnimal = new AnimalsService(
      animalsRepository,
    );

    const animal = createAnimal.execute({ name, age, type, race });

    return response.json(animal);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default animalRouter;
