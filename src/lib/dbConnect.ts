import * as mongoose from "mongoose";
declare global {
  var mongoose: any // This must be a `var` and not a `let / const`
}

const MONGODB_URI = "mongodb://localhost:27017"
console.log(MONGODB_URI,'MONGODB_URI',mongoose);

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      useNewUrlParser: true, 
      useUnifiedTopology: true
    }
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log('Connected to the database');
      return mongoose
    }).catch((error) => {
      console.error('Failed to connect to the database:', error);
    });
  }
  try {
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null
    throw e
  }

  return cached.conn
}

export default dbConnect

// getting-started.js
export const connectDB = ()=>{
  main().catch(err => console.log(err));
}

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const kittySchema = new mongoose.Schema({
  name: String
});
export const Kitten = mongoose.model('Kitten', kittySchema);
// const silence = new Kitten({ name: 'Silence' });
// console.log(silence.name); // 'Silence'
// // NOTE: methods must be added to the schema before compiling it with mongoose.model()
// kittySchema.methods.speak = function speak() {
//   const greeting = this.name
//     ? 'Meow name is ' + this.name
//     : 'I don\'t have a name';
//   console.log(greeting);
// };
