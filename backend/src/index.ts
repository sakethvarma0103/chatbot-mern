import app from  './app.js';
import connectToDatabase from  "./db/connection.js";

connectToDatabase()
.then(() =>{
    const port = 5000;
    app.listen(port, ()=> console.log(`Server is running on ${port}`));
})
.catch((err) => {console.error("Error connecting to the database: ", err)});
