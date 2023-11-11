import { useState } from "react";
import Cards from "./Cards";
import Score from "./Score";

export default function DisplayUI() {
	const [currentScore, setCurrentScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [clicked, setClicked] = useState([]);

	function handleClick(data) {
		console.log(data);
	}

	return (
		<>
			<h1>Memory Cards Game</h1>
			<Score currentScore={currentScore} bestScore={bestScore} />
			<Cards onClick={handleClick} />
		</>
	);
}
