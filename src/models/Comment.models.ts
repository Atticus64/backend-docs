import { DataTypes } from 'sequelize';
import db from '../config/database';

const CommentModels = db.define(
  'comment',
  {
    id: {
      type: DataTypes.NUMBER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  { tableName: 'comment' }
);

export default CommentModels;
