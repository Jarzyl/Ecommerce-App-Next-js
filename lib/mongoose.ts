import mongoose from "mongoose";

export async function initMongoose() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  }
  const mongoDbKey = process.env.NEXT_PUBLIC_MONGODB_KEY || '';
  return await mongoose.connect(mongoDbKey);
}