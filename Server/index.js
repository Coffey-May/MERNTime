import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './Routes/postsRoutes.js';
import userRouter from "./Routes/user.js";


const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use("/user", userRouter);
// const CONNECTION_url = 'mongodb://root:ygGrvt7ztf@coffey-may-coffey-may-mongo-production/admin?retryWrites=true&w=majority'
// const CONNECTION_url = process.env.CONNECTION_URL
const CONNECTION_url = 'mongodb://coffeytime:coffeytime12345@coffey-may-coffey-may-mongo-production/admin?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

// mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
//     .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);


// CONNECTION_URL = mongodb+srv://coffeytime:coffeytime123@cluster0.cdxer.mongodb.net/<dbname>?retryWrites=true&w=majority
// mongoose.connect('mongodb://admin:admin123@127.0.0.1:27017/food?authSource=admin');