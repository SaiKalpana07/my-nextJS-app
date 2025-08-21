import { type NextRequest } from "next/server";
import { users } from "../data";

export async function GET(request: NextRequest) {

  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get("query")
  const filterData = query ? users.filter((user) => user.name.includes(query) || user.id.includes(query)) : users
  return Response.json(filterData)
 
  // return new Response(JSON.stringify(users), {
  //   status: 200,
  //   headers: { "Content-type": "application/json" },
  // });
}
