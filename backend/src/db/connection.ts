import {connect}  from 'mongoose';

async function connectToDatabase (){
    try{
        await connect(process.env.MONGODB_URL);
        console.log('MongoDB Connected...');
    }catch(err) {
        console.error(err);
        process.exit(1);
    };
};

export  default connectToDatabase;