import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function ReturnImages(props) {
	const [gif, setGif] = useState([]);

	async function fetchGiphyData() {
		const fetchArray = [
			fetch(
				`https://api.giphy.com/v1/gifs/translate?api_key=CgD3MYdRZc931mpYG58j9haL4EfRa3PG&s=cat`
			),
			fetch(
				`https://api.giphy.com/v1/gifs/translate?api_key=CgD3MYdRZc931mpYG58j9haL4EfRa3PG&s=monster`
			),
			fetch(
				`https://api.giphy.com/v1/gifs/translate?api_key=CgD3MYdRZc931mpYG58j9haL4EfRa3PG&s=tree`
			),
			fetch(
				`https://api.giphy.com/v1/gifs/translate?api_key=CgD3MYdRZc931mpYG58j9haL4EfRa3PG&s=dolphin`
			),
			fetch(
				`https://api.giphy.com/v1/gifs/translate?api_key=CgD3MYdRZc931mpYG58j9haL4EfRa3PG&s=ape`
			),
			fetch(
				`https://api.giphy.com/v1/gifs/translate?api_key=CgD3MYdRZc931mpYG58j9haL4EfRa3PG&s=car`
			),
		];
		Promise.all(fetchArray)
			.then((values) => Promise.all(values.map((value) => value.json())))
			.then((data) => setGif(data));
	}

	useEffect(() => {
		fetchGiphyData();
	}, []);

	if (0 !== gif.length) {
		return (
			<>
				<img key={uuidv4()} src={gif[`${props.image}`].data.images.original.url}></img>
			</>
		);
	}
}
