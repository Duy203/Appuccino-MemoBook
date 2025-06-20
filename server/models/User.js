import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model('User', userSchema, 'Users'); // specifies which collection to use at the end

export default User;
