import { redirect } from "next/navigation";
import getQuestionsJSON from "./utils/getQuestionsJSON";

export default async function Home() {
  const data = await getQuestionsJSON();

  const entry = data.entry;

  redirect(`/${entry}`);
}
