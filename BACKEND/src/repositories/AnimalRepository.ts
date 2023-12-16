import Animal from "../teste/Animal"
const { create } = require("../services/AnimalsService")

class AnimalsRepository {
  private animals: Animal[]

  constructor() {
    this.animals = []
  }

  public all(): Animal[] {
    return this.animals
  }

  public create({ name, age, type, race }: AnimalDTO): Animal {
    const animal = new Animal({ name, age, type, race })

    this.animals.push(animal)

    return animal
  }
}

const createAnimal = async (req, res) => {
  const { type, message } = await create(req.body)
}

module.exports = {
  createAnimal,
}
