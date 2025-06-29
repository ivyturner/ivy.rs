// src/pages/rss/status.xml.ts
import rss from "@astrojs/rss";
import { getStatusNotes } from "~/lib/content/notes";
import { createRSSItem } from "~/lib/content/rss-helpers";

export async function GET(context) {
	const notes = await getStatusNotes();

	const items = await Promise.all(
		notes.map((note) => createRSSItem(note, "https://ivy.rs")),
	);

	return rss({
		title: "Ivy's Media Journal",
		description: "Media I watch, read, listen to etc.",
		site: "https://ivy.rs/media",
		items,
		customData: `<language>en-us</language>`,
	});
}
