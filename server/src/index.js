const htttp = require("http");
const characters = require("./utils/data");

const PORT = 3001


http.createServer((req, res) =>{
    console.log(`Server raised o port ${PORT}`);
    res.setHeader('Access-Control-Allow-Origin', '*');
    const {url} = req;  
     
    if(url.includes("/rickandmorty/characte/")){
        const urlId = parseInt(url.split("/").pop());

        let found = characters.find((characters)=>characters.id === urlId)

        if(found){
            res.writeHead(200, {"Content-Type": "application/json"})
            .end(JSON.stringify(found));
        }
    }
   
    
});listenerCount(PORT, "localhost")