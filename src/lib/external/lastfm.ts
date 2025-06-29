// lib/external/lastfm.ts
// works with last.fm api
// https://lastfm-docs.github.io/api-docs/
const apiKey = import.meta.env.LFM_API_KEY;

async function lfmAPIRequest(
	method: string,
	limit?: number,
	overrideUser?: string,
): Promise<Response> {
	let user = "lxjv"; // my last.fm uname
	if (overrideUser) user = overrideUser;

	const req = await fetch(
		`https://ws.audioscrobbler.com/2.0/?api_key=${apiKey}&method=${method}&user=${user}&format=json${limit && `&limit=${limit}`}`,
	);
	return req;
}

export async function lfmGetTracks() {
	const req = await lfmAPIRequest("User.getrecenttracks", 1);
	console.log(req);
}
