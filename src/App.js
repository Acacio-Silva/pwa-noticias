import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './containers/Home'
import Post from './containers/Post'


function App() {
  return (
    <main>
      <BrowserRouter>
      <Switch>  
        
        <Route path="/:subject/:id">
             <Post />
        </Route>

        <Route path="/">
          <Home/>
        </Route>
      </Switch>
      </BrowserRouter>
      
    </main>
  );
}

export default App;
