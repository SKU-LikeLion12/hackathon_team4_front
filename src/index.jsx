import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import {CookiesProvider} from "react-cookie";
import {worker} from "./mocks/browser";
import {BrowserRouter} from "react-router-dom";
if (process.env.NODE_ENV === "development") {
	await worker.start();
}

const root = ReactDOM.createRoot(
	document.getElementById("root")
);
root.render(
	<CookiesProvider>
		<App />
	</CookiesProvider>
);
