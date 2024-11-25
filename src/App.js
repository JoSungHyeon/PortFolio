import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Project from './page/Project';

function App() {
  	return (
  	  	<>
			<Router>			
      			<Routes>
      			  <Route path="/" element={<Home />} />
      			  <Route path="/project" element={<Project />} />
      			</Routes>
			</Router>
		</>
  	);
}

export default App;
