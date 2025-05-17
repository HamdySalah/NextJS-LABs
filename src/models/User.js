import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    trim: true,
  },
  username: {
    type: String,
    required: [true, 'Please provide a username'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please provide a valid email',
    ],
    trim: true,
  },
  phone: {
    type: String,
    required: [true, 'Please provide a phone number'],
    trim: true,
  },
  website: {
    type: String,
    trim: true,
  },
  address: {
    street: String,
    suite: String,
    city: String,
    zipcode: String,
  },
  company: {
    name: String,
    catchPhrase: String,
  },
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', UserSchema);




