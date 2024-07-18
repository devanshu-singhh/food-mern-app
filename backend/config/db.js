import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://rajputdevanshu9084:dev########6@cl####r0.6###6y.mongodb.net/food-delivery').then(()=>console.log("DB Connected"));
}