import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Card from './components/card';
import BodyCards from './components/body_cards';
import {useState} from 'react';

function App() {

  const [searchText,setSearchText] = useState("")

  return (
    <>
      <Navbar setSearchText={setSearchText} />

      
        <div className="grid grid-cols-2 grid-flow-row">
          <BodyCards searchText={searchText}/>
          
    </div>
    </>
  );
}

export default App;
