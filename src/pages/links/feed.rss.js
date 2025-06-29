// src/pages/rss/status.xml.ts
import rss from "@astrojs/rss";
import { getLinkNotes } from "~/lib/content/notes";
import { createRSSItem } from "~/lib/content/rss-helpers";

export async function GET(context) {
	const notes = await getLinkNotes();

	const items = await Promise.all(
		notes.map((note) => createRSSItem(note, "https://ivy.rs")),
	);

	return rss({
		title: "ivy.rs Links",
		description: "Links i think are cool or have something to say about",
		site: context.site,
		items,
		customData: `<language>en-us</language>`,
	});
}
