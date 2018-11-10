const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch(err => {
    console.log("could not connect to mongodb", err);
  });


async function createCourse() {
    const courseSchema = mongoose.Schema({
        name: String,
        author: String,
        tags: [String],
        date: { type: String, default: Date.now },
        isPublished: Boolean
    });


    const Course = mongoose.model('Course', courseSchema);
    const course = new Course({
        name: 'Node.js course',
        author: 'mosh',
        tags: ['node','backend'],
        isPublished: true
    })

    const result = await course.save();
    console.log(result);

}


createCourse();
