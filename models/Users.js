const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    required: "Username is required",
  },
  email: {
    type: String,
    unique: true,
    required: "Email is required",
    match: [/.+@.+\..+/],
  },
  thoughts: [
    {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
  ],
},
  {
    toJSON: {
        virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('User', userSchema);

model.exports = User;