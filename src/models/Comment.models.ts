import { DataTypes } from 'sequelize';
import db from '../config/database';

const CommentModels = db.define(
  'comment',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createOn: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  { tableName: 'comment' }
);

export default CommentModels;
