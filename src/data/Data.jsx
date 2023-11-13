import { useEffect, useState } from "react";

export default function ReturnImages() {
	const [gif, setGif] = useState([]);
	const [defined, setDefined] = useState(false);

	async function fetchGiphyData() {
		try {
			const response = await fetch(
				`https://api.giphy.com/v1/gifs/translate?api_key=CgD3MYdRZc931mpYG58j9haL4EfRa3PG&s=cats`,
				{ mode: "cors" }
			);
			const result = await response.json();
			setGif(result);
			setDefined(true);
		} catch {
			throw console.log("error");
		}
	}

	useEffect(() => {
		fetchGiphyData();
	}, []);
	if (defined === true) {
		return (
			<>
				<img src={gif.data.images.original.url}></img>
			</>
		);
	}
}
