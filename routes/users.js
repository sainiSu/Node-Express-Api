import express from "express";

import { v4 as uuidv4 } from 'uuid'; // Import the uuid function


const router = express.Router();

let users = [
  {
    name: "John",
    lastName: "Doe",
    age: 30,
  },
  {
    name: "Jane",
    lastName: "Lara",
    age: 20,
  },
];

// all the routes in this file will start with /users

router.get("/", (req, res) => {
  console.log(users);

  res.json(users);
});

router.post('/',(req ,res)=>{ 
  

    console.log(req.body);

    const user = req.body; 

    const userId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    
    const userWithId = { ...user, id: userId }; // { name: 'John', lastName: 'Doe', age: 30, id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d' }

    users.push(userWithId); // Add the user to the users array

    res.send("User added successfully");

})

// /user/3 => id = 3 => req.params.id 

router.get('/:id',(req ,res)=>{
    console.log(req.params);
    const { id } = req.params; // Extract the id from the request parameters
   
    const foundUser = users.find((user)=> user.id === id); // Find the user with the matching id

    res.send(foundUser); // Send the found user as the response
})

router.delete('/:id',(req ,res)=>{
  const { id } = req.params; // Extract the id from the request parameters

  users = users.filter((user) => user.id !== id); // Filter out the user with the matching id

  res.send(`User with id ${id} deleted successfully`); // Send a success message
})

export default router;
