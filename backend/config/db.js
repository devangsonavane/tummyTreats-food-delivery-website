import mongoose from 'mongoose';

export const connectDB=async ()=>{
    await mongoose.connect('mongodb+srv://devangsonavane:18042004@cluster0.nwmee3q.mongodb.net/tummyTreats').then(()=>{
        console.log('DB connected');
    })
}