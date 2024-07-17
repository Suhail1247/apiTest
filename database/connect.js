import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
async function connect() {
    const db = await mongoose.connect('mongodb+srv://suhailwt12:hsUJqXxEanctYkO0@cluster0.1tcxazi.mongodb.net/?retryWrites=true&w=majority');
    console.log('Connected to MongoDB ');
    return db;
  }

  export default connect;