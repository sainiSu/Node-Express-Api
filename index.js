import  express from 'express';

import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';



const app = express();
const PORT = 5000


app.use(bodyParser.json());

app.use('/users', usersRoutes)

app.get('/',(req , res) => {
    console.log ('[TEST]!');
    res.send("Hello world from Node.js");
})

app.listen(PORT,() => {
    console.log(`Server is running on port:http://localhost:${PORT}`);
})