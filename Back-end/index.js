const express = require("express")
const app = express()
const port = 3001
const cors = require("cors")

app.use(express.json())
app.use(cors())




const movies = [
  {id: 1,title: 'Mean Girls'},
  {id: 2,title: 'Hackers'},
  {id: 3,title: 'The Grey'},
  {id: 4,title: 'Sunshine'},
  {id: 5,title: 'Ex Machina'},
  {id: 6,title: '300'},
  {id: 7,title: 'Shotas'},
  {id: 8,title: 'Blank Panter'},
  {id: 9,title: 'Avengers'},
  {id: 10,title: 'Ace Ventura'},
  {id: 11, title: 'Mad Max'},
  {id: 12, title: 'Venom'},
  {id: 13, title: 'Spiderman'},

];




app.get('/', function(req, res){
    res.status(200).send(movies)
})

app.listen(port, () =>{console.log(`the server running on this ${port}`)})