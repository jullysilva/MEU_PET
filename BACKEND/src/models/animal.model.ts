"use strict"

import { Model, DataTypes, Sequelize } from "sequelize"

interface AnimalAttributes {
  name: string
  age: number
  type: string
  race: string
}

class Animal extends Model {
  public id!: number
  public name!: string
  public age!: number
  public type!: string
  public race!: string

  public readonly updatedAt!: Date
  public readonly createdAt!: Date
}

export function initAnimal(sequelize: Sequelize) {
  Animal.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      age: {
        type: DataTypes.INTEGER,
        validate: {
          len: {
            args: [0, 100],
            msg: "Idade fora dos parâmetros permitidos",
          },
        },
      },
      type: DataTypes.ENUM("cat", "dog"),
      race: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "Animals",
    }
  )
  return Animal
}
