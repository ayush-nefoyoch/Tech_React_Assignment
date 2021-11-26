import { Navbar } from "./components/UI/Navbar";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
    <Routes>
      <Route exact path = "/" element = {<Navbar/>}></Route>
      {/* <Route exact path = "/about" element = {<About/>}></Route>
      <Route exact path = "/contact" element = {<Contact/>}></Route>
      <Route exact path = "/apicall" element = {<CallAPI/>}></Route>
      <Route exact path = "/lifecycle" element = {<LifeCycle/>}></Route>
      <Route exact path = "/formik" element = {<Signup/>}></Route> */}
    </Routes>
    
    </div>
    </Router>
  );
}

export default App;
