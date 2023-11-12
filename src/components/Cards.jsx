import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
export default function Cards(props) {
	const [score, setScore] = useState(0);
	const [cards, setCards] = useState([
		{ card: "Test 1", id: uuidv4(), clicked: false },
		{ card: "Test 2", id: uuidv4(), clicked: false },
		{ card: "Test 3", id: uuidv4(), clicked: false },
		{ card: "Test 4", id: uuidv4(), clicked: false },
		{ card: "Test 5", id: uuidv4(), clicked: false },
		{ card: "Test 6", id: uuidv4(), clicked: false },
	]);

	function handleClick(e) {
		e.target.style.backgroundColor = "Red";

		setCards(
			cards.map((card) => {
				if (e.target.getAttribute("value") === card.id && card.clicked === false) {
					return { ...card, clicked: true };
				} else {
					return card;
				}
			})
		);

		let bestScoreArr = [];
		for (let i = 0; i < 6; i++) {
			if (cards[i].clicked === true) {
				bestScoreArr.push(i);
			}
		}

		for (const card of cards) {
			if (e.target.getAttribute("value") === card.id && card.clicked === false) {
				setScore(score + 1);
			} else if (e.target.getAttribute("value") === card.id && card.clicked === true) {
				setCards(
					cards.map((card) => {
						if (e.target.getAttribute("value") === card.id && card.clicked === true) {
							return { ...card, clicked: false };
						} else {
							return card;
						}
					})
				);
				return setScore(0);
			}
		}

		props.onClick({ score, findBestScore });
	}

	/* 
	useEffect(() => {
		setCards(cards.map((card) => {}));
	}, []);
 */
	return (
		<div className="cards-container">
			{cards.map((card) => (
				<li className="card" value={card.id} key={card.id} onClick={handleClick}>
					{card.card}
				</li>
			))}
		</div>
	);
}
