import logo from './logo.svg';
import './App.css';
import {BrowserRouter, BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/header/header.component';
import Search from './components/search/search.component';
import SearchBody from './components/searchbody/searchbody.component';

function App() {
  return (

   <div>
     <BrowserRouter>
     <Route exact path="/">
     <Header/>
     <Search/>
     </Route>
     <Route path="/url/:param">
     <Header/>
     <SearchBody/>
     </Route>
     </BrowserRouter>
   </div>
  );
}

export default App;
