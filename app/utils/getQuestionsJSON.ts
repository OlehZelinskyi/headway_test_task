"use server";

import fs from "fs";
import path from "path";
import { QuestionsJSON } from "../types";

const getQuestionsJSON: () => Promise<QuestionsJSON> = async () => {
  const filePath = path.join(process.cwd(), "public", "questions.json");

  const fileContent = await fs.promises.readFile(filePath, "utf-8");

  return JSON.parse(fileContent);
};

export default getQuestionsJSON;
