import mongoose from 'mongoose';

const MONGO_URI = 'mongodb+srv://profe:2OVlIoKuMxmI1FmO@cluster0.lapkq.mongodb.net/db-repaso';

const dbConexion = async () => {

try{
await mongoose.connect(MONGO_URI,{});
    console.log('Data base connected')
}
catch (error){
    console.error(error);
    console.error('Data base connection error :C')
};
}

export default dbConexion;