import express from "express";
import router from "./route.js";

const PORT = 5000;
const app = express();

app.use(express.json());
app.use(express.static('static'))
app.use('/api',router);

async function startApp(){
    try{
        app.listen(PORT, () => { console.log('SERVER START ' + PORT) });
    }catch(e){
        console.log(e)
    }
}
startApp();
