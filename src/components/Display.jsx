import { useEffect, useState } from "react";
import Cards from "./Cards";
import Score from "./Score";
import Data from "../data/Data";

export default function DisplayUI() {
	const [currentScore, setCurrentScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [clicked, setClicked] = useState([]);

	function handleClick(data) {
		if (currentScore === data.score) {
			setCurrentScore(data.score + 1);
		} else if (currentScore !== data.score) {
			setBestScore(currentScore);
			setCurrentScore(0);
		}
	}

	return (
		<>
			<h1>Memory Cards Game</h1>
			<Score currentScore={currentScore} bestScore={bestScore} />
			<Cards onClick={handleClick} />
		</>
	);
}
