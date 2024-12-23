import data from "../data";

export default function handler(req, res) {
	const { id } = req.query;

	if (id) {
		const post = data.posts.find(post => post.id.toString() === id);

		if (post) {
			return res.status(200).json(post);
		}
	}

	return res.status(404).json({ error: "Data not found" });
}
