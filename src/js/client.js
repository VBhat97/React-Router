import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, Indexroute, hashHistory} from "react-router";

import Layout from "./pages/Layout";
import Archived from "./pages/Archived";
import Featured from "./pages/Featured";
import Settings from "./pages/Settings";

const app = document.getElementById('app');
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<Indexroute component={Featured}></Indexroute>
			<Route path="Archived" component={Archived}></Route>
			<Route path="Settings" component={Settings}></Route>
		</Route>
	</Router>
, app);
