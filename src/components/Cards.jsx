import { v4 as uuidv4 } from "uuid";
export default function Cards(props) {
	const clearCards = [
		{ card: "Test 1", id: uuidv4() },
		{ card: "Test 2", id: uuidv4() },
		{ card: "Test 3", id: uuidv4() },
		{ card: "Test 4", id: uuidv4() },
		{ card: "Test 5", id: uuidv4() },
		{ card: "Test 6", id: uuidv4() },
	];
	const clickedCards = [];

	function handleClick(e) {
		props.onClick({ clearCards, clickedCards });

		for (let i = 0; i < clearCards.length; i++) {
			if (e.target.textContent === clearCards[i].card) {
				clearCards.splice(i, 1);
				clickedCards.push(clearCards[i] - 1);
			}
		}
	}

	return (
		<div className="cards-container">
			{clearCards.map((card) => (
				<li className="card" key={card.id} onClick={handleClick}>
					{card.card}
				</li>
			))}
		</div>
	);
}
