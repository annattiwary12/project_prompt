import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, 'Email already exists!'],
      required: [true, 'Email is required!'],
    },
    username: {
      type: String,
      required: [true, 'Username is required!'],
      match: [
        /^(?=.{8,20}$)(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
        'Username must be 8-20 characters long and can only contain letters, numbers, underscores, and periods. No consecutive special characters.'
      ],
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = models.User || model('User', UserSchema);
export default User;
