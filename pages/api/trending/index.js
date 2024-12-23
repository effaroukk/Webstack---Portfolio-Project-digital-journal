import data from "../data";

export default function handler(req, res) {
	const { trending } = data;

	if (trending) {
		return res.status(200).json(trending);
	}

	return res.status(404).json({ error: "Data not found" });
}
