import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import page1 from "./Pages/page1";
import chat from "./Pages/page2";
import history from './Pages/history';
{/* import page2 from "./Pages/page2"; */}



function App() {
  return (
    <div className="App">
      <Router history={history}>
        <main>
          <Switch>
            <Route path="/" exact component={page1} />
             <Route path="/page2" exact component={chat}/>
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
