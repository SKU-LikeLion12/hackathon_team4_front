import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import {CookiesProvider} from "react-cookie";
import {BrowserRouter} from "react-router-dom";
// import {worker} from "./mocks/browser";
// if (process.env.NODE_ENV === "development") {
// 	await worker.start();
// }

const root = ReactDOM.createRoot(
	document.getElementById("root")
);
root.render(
	<BrowserRouter>
		<CookiesProvider>
			<App />
		</CookiesProvider>
	</BrowserRouter>
);
