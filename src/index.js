const express = require("express");
const app = express();
const PORT = 8080;


app.listen(
    PORT,
    () => console.log("Listo!. El Puerto Del Server Es", {PORT}, "Y La Direcion Es http://localhost:8080")
)
app.use( express.json() )

app.get("/apiplasuma/videoinfo", (req, res) => {
   res.status(200).send({
    game: "Minecraft",
    title: "Jugando A Ping Poing En Minecraft!!!!!"
   })
})
app.get("/apiplasuma/avatar", (req, res) => {
    res.status(200).send({
     name: "Lucas11",
     decription: "Un Progamador Que Siemple Quiere Progamar"
    })
 })


app.post('/apiplasuma/videologo', (req, res) => {
   const { logo } = req.body;
   const { ip_locarisation } = req.body;

   if(!logo) {
    res.status(418).send({ message: 'Nececitamos Un Logo!!!' })
   }

   res.send({
    logo_type: `${logo}`,
    ip_locarisation: `${ip_locarisation}`,

   });

});