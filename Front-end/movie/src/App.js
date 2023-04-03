import logo from './logo.svg';
import './App.css';
import { faker } from '@faker-js/faker'

function App() {

  let MovieArray = [];

  const movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ];
  for(let i = 0; i <  30; i++){
    MovieArray.push({movie: faker.music.songName, actor: faker.name.fullName  })
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Movie list

       
       <p><div>{movies.map(element => <div>{element.title}</div>)}</div></p> 
       {/* {/* </div> {homes.map(home => <div>{home.name}</div>)} */}
 </p>
        <a 
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
         
        </a>
        <div> </div>
      </header>
    </div>
  );
}

export default App;
