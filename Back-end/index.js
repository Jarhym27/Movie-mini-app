const express = require("express")
const app = express()
const port = 3001
const cors = require("cors")

app.use(express.json())
app.use(cors())



let MovieArray = [];

const movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
  {title: '300'},
  {title: 'Shotas'},
  {title: 'Blank Panter'},
  {title: 'Avengers'},
  {title: 'Ace Ventura'},
  {title: 'Mad Max'},{title: 'Venom'},
  {title: 'Spiderman'},

];
// for(let i = 0; i <  30; i++){
//   MovieArray.push({movie: faker.internet.songName(), actor: faker.name.fullName()  })
// }



app.get('/', function(req, res){
    res.status(200).send(movies)
})

app.listen(port, () =>{console.log(`the server running on this ${port}`)})