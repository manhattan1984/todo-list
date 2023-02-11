import "server-only";
import HomePage from "./HomePage";
import { createClient } from "../utils/supabase-server";

export const revalidate = 0;

export default async function Home() {
  const supabase = createClient();

  let { data: todos, error } = await supabase.from("todos").select("*");

  console.log(todos);

  return <HomePage todos={todos}/>;
}
