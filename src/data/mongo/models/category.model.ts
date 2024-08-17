import mongoose, { Schema } from 'mongoose';

const categorySchema = new mongoose.Schema({

  name: {
    type: String,
    required: [ true, 'Name is required' ],
    unique: true,
  },
  available: {
    type: Boolean,
    default: false,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }

});

categorySchema.set('toJSON', {
  virtuals: true, // pone el id sin _
  versionKey: false, // Quita la version _v
  transform: function(doc, ret, options) {
    delete ret._id; // Quita el _id
  },
});

export const CategoryModel = mongoose.model('Category', categorySchema);