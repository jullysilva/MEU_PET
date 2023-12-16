// models/dono.ts
import { DataTypes, Model } from "sequelize"
import { sequelize } from "../config/database" // Importe a instância do Sequelize

class Dono extends Model {
  public id!: number
  public name!: string
  public rg!: string
  public telephone!: string
  public address!: string
}

Dono.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rg: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telephone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Dono",
    tableName: "donos", // O nome da tabela no banco de dados
  }
)

export { Dono }
