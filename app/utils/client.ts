import filterByTemplate from "./filterByTemplate";
import getQuestionsJSON from "./getQuestionsJSON";
import graphqlToJSON from "./graphqlToJSON";

const client = {
  async query(queryString: string) {
    const overallInfo = await getQuestionsJSON();
    const parsedQuery = graphqlToJSON(queryString);

    const data = filterByTemplate(
      overallInfo as unknown as Record<string, unknown>,
      parsedQuery
    );

    return data;
  },
};

export default client;
