import UserModels from './User.models';
import CommentModels from './Comment.models';

CommentModels.belongsTo(UserModels, {
  foreignKey: 'userId',
  targetKey: 'id'
});
