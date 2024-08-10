import React from "react";
import {Navigate} from "react-router-dom";

const PrivateRoute = ({
	isLoggedIn,
	component: Component,
}) => {
	return isLoggedIn ? (
		<Component />
	) : (
		<Navigate to='/Login' />
	);
};

export default PrivateRoute;
