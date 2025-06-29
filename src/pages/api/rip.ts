import { getClacks } from "~/lib/fun";
export async function GET() {
  return new Response(`rip ${getClacks()}`);
}
