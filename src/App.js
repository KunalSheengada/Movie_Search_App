import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Homepage from "./Homepage";
// import Movieinfo from "./MovieInfo";

function App(){
	return (
		<BrowserRouter>
		<Routes>
			<Route path="/" element={<Homepage />}/>
		</Routes>
		</BrowserRouter>
		
	)
}

export default App;
