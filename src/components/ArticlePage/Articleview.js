import { useParams } from "react-router-dom";
import React from "react";

const Articleview = () => {
	const { id } = useParams();
	return <h1>{id}</h1>;
};

export default Articleview;
