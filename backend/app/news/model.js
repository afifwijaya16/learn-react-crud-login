import { Sequelize } from "sequelize";
import db from "../../config/Database.js";

const { DataTypes } = Sequelize;

const News = db.define(
  "news",
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 100],
      },
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    url: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default News;
// (async () => {
//   await db.sync();
// })();
