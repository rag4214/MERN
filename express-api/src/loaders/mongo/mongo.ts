import mongoose from "mongoose";

// https://mongoosejs.com/docs/deprecations.html
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

const MONGO_HOST = process.env.MONGO_HOST || "127.0.0.1";
const mongoLoader = mongoose
  .connect(`mongodb://${MONGO_HOST}:27017`)
  .then(() =>
    console.log(`🍃 Connected to MongoDB Database Host: ${MONGO_HOST}`)
  );

export default mongoLoader;
