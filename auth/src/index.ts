import express from 'express';
import {json} from 'body-parser';


const app = express();
app.use(json());

app.get('/api/users/currentUser', (req, res) => {
    res.send("Hello User!!")
})

app.listen(3000, () => {
    console.log("Server running on port 3000 !!!!!!!")
})