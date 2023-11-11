import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
export default function Cards(props) {
	const [cards, setCards] = useState([
		{ card: "Test 1", id: uuidv4(), clicked: false },
		{ card: "Test 2", id: uuidv4(), clicked: false },
		{ card: "Test 3", id: uuidv4(), clicked: false },
		{ card: "Test 4", id: uuidv4(), clicked: false },
		{ card: "Test 5", id: uuidv4(), clicked: false },
		{ card: "Test 6", id: uuidv4(), clicked: false },
	]);

	function handleClick(e) {
		setCards(
			cards.map((card) => {
				if (e.target.getAttribute("value") === card.id) {
					return { ...card, clicked: true };
				} else {
					return card;
				}
			})
		);
		let clickedCards = 1;
		for (let i = 0; i < cards.length - 1; i++) {
			if (cards[i].clicked === true) clickedCards += 1;
		}
		console.log(clickedCards);
		props.onClick({ clickedCards });
	}

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
