function graphqlToJSON(graphqlQuery: string) {
  // Видаляємо зайві символи (зайві пробіли, нові рядки)
  const cleanedQuery = graphqlQuery
    .replace(/\n/g, "") // Видаляємо переноси рядків
    .replace(/\s+/g, " ") // Скорочуємо множинні пробіли
    .trim(); // Видаляємо пробіли з країв

  // Видаляємо ключове слово 'query' (якщо є) та фігурні дужки ззовні
  const jsonLike = cleanedQuery
    .replace(/^query\s*/, "") // Видаляємо "query"
    .replace(/^\{|\}$/g, ""); // Видаляємо зовнішні дужки

  const jsonString = `{${jsonLike}}`;
  try {
    return JSON.parse(
      jsonString
        // Додаємо лапки для ключів і `null` для значень, вставляючи коми
        .replace(/([a-zA-Z0-9_]+)(\s*(,|\}))/g, '"$1": null$3')
        // Замінюємо ключі перед відкриваючими дужками на JSON-об'єкти
        .replace(/([a-zA-Z0-9_]+)\s*\{/g, '"$1": {')
        // Вставляємо коми між об'єктами, якщо їх немає
        .replace(/}\s*([a-zA-Z0-9_"])/g, "}, $1")
        // Видаляємо зайві коми перед закриваючою дужкою
        .replace(/,(\s*[}\]])/g, "$1")
        // Видаляємо зайві пробіли
        .trim()
    );
  } catch (error) {
    console.error("Invalid GraphQL query format:", error);
    return null;
  }
}

export default graphqlToJSON;
