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
        .replace(/([a-zA-Z0-9_]+)(\s*,|\s*\})/g, '"$1": null$2')
        // Замінюємо фігурні дужки на JSON-стиль із двокрапками
        .replace(/([a-zA-Z0-9_]+)\s*\{/g, '"$1": {')
        // Додаємо лапки для ключів
        .replace(/(['"])?([a-zA-Z0-9_]+)(['"])?\s*:/g, '"$2":')
        // Видаляємо зайві коми перед дужками
        .replace(/,(\s*[}\]])/g, "$1")
        .trim()
    ); // Додаємо лапки до ключів
  } catch (error) {
    console.error("Invalid GraphQL query format:", error);
    return null;
  }
}

export default graphqlToJSON;
