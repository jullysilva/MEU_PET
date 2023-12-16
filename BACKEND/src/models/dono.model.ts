"use strict"

import { Model, DataTypes, Sequelize } from "sequelize"

class Dono extends Model {
  public id!: number
  public name!: string
  public rg!: string
  public telephone!: string
  public address!: string

  public readonly updatedAt!: Date
  public readonly createdAt!: Date

  static associate(models: any) {
    Dono.hasMany(models.Animal, { foreignKey: "dono_id", as: "animal" })
  }
}

export function initDono(sequelize: Sequelize) {
  Dono.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      rg: {
        type: DataTypes.STRING,
        validate: {
          is: {
            args: /^\+?[0-8]*$/g,
            msg: "identidade está com parâmetros incorretos",
          },
        },
      },
      telephone: {
        type: DataTypes.STRING,
        validate: {
          is: {
            args: /^\+?[0-9]*$/g,
            msg: "Phone number must use + at first (optional) and numbers only",
          },
        },
      },
      address: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "Donos",
    }
  )
  return Dono
}
