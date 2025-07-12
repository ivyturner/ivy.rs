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
		title: "Ivy's Status Updates",
		description: "Personal status updates and thoughts",
		site: context.site,
		items,
		customData: `<language>en-us</language>`,
	});
}
