const mongoose = require('mongoose')

const { Schema } = mongoose

const SubjectsSchema = new Schema(
  {
    title: String,
    parent_id: Number,
    article_id: String
  },
  { timestamps: true }
)

SubjectsSchema.methods.toJSON = function() {
  return {
    _id: this._id,
    title: this.title,
    parent_id: this.parent_id,
    article_id: this.article_id
    createdAt: this.createdAt,
    updatedAt: this.updatedAt
  }
}

mongoose.model('Subjects', SubjectsSchema)
