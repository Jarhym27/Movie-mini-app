const express = require("express")
const app = express()
const port = 3001
const cors = require("cors")

app.use(express.json())
app.use(cors())




const movies = [
  {id: 1,title: 'Mean Girls', year:2019, actors:"Jennifer Lawrence and Tom Hardy", description:"When an ocean liner falls victim to a deadly virus, a small group of survivors fight to stay alive. Rated PG-1"},
  {id: 2,title: 'Hackers',year:2019, actors:"Zendaya and Michael B. Jordan", description:"In a post-apocalyptic world, a young woman sets out on a dangerous journey to find the last remaining habitable place on Earth. Rated R."},
  {id: 3,title: 'The Grey', year:2019, actors:"Chris Hemsworth and Charlize Theron", description:"When a group of terrorists take over a nuclear power plant, a team of elite soldiers must stop them before it's too late. Rated PG-13."},
  {id: 4,title: 'Sunshine',year:2019, actors:"Jennifer Lawrence and Tom Hardy", description:"When an ocean liner falls victim to a deadly virus, a small group of survivors fight to stay alive. Rated PG-1"},
  {id: 5,title: 'Ex Machina', year:2019, actors:"Zendaya and Michael B. Jordan", description:"In a post-apocalyptic world, a young woman sets out on a dangerous journey to find the last remaining habitable place on Earth. Rated R."},
  {id: 6,title: '300', year:2019, actors:"Chris Hemsworth and Charlize Theron",description:"In a post-apocalyptic world, a young woman sets out on a dangerous journey to find the last remaining habitable place on Earth. Rated R."},
  {id: 7,title: 'Shotas', year:2019, actors:"Jennifer Lawrence and Tom Hardy",description:"In a post-apocalyptic world, a young woman sets out on a dangerous journey to find the last remaining habitable place on Earth. Rated R."},
  {id: 8,title: 'Blank Panter', year:2019, actors:"Zendaya and Michael B. Jordan",description:"In a post-apocalyptic world, a young woman sets out on a dangerous journey to find the last remaining habitable place on Earth. Rated R."},
  {id: 9,title: 'Avengers', year:2019, actors:"Chris Hemsworth and Charlize Theron",description:"An archaeologist discovers a hidden city in the Amazon, but must fight to protect it from a ruthless billionaire who wants to exploit its secrets. Rated PG-13."},
  {id: 10,title: 'Ace Ventura', year:2019, actors:"Jennifer Lawrence and Tom Hardy",description:"In a future where Earth is dying, a group of explorers embark on a dangerous mission to find a new home for humanity. Rated R."},
  {id: 11, title: 'Mad Max', year:2019, actors:"Chris Hemsworth and Charlize Theron",description:"In a post-apocalyptic world, a young woman sets out on a dangerous journey to find the last remaining habitable place on Earth. Rated R."},
  {id: 12, title: 'Venom', year:2019, actors:"Jennifer Lawrence and Tom Hardy",description:"In a post-apocalyptic world, a young woman sets out on a dangerous journey to find the last remaining habitable place on Earth. Rated R."},
  {id: 13, title: 'Spiderman', year:2019, actors:"Zendaya and Michael B. Jordan",description:"In a future where Earth is dying, a group of explorers embark on a dangerous mission to find a new home for humanity. Rated R."},
  {id: 14, title: "Beyond the Horizon", year:2019, actors:"Chris Hemsworth and Charlize Theron",description:"In a post-apocalyptic world, a young woman sets out on a dangerous journey to find the last remaining habitable place on Earth. Rated R."},
  {id: 15, title: "The Final Stand", year:2019, actors:"Jennifer Lawrence and Tom Hardy",description:"In a post-apocalyptic world, a young woman sets out on a dangerous journey to find the last remaining habitable place on Earth. Rated R."},


];






app.get('/', function(req, res){
    res.status(200).send(movies)
})

app.listen(port, () =>{console.log(`the server running on this ${port}`)})