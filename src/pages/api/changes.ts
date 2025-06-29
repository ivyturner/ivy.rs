import { getSiteCommits } from "~/lib/external/github";
export async function GET() {
  return new Response(
    JSON.stringify(await getSiteCommits())
  );
}
