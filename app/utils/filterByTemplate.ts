function filterByTemplate(source: Record<string, unknown>, template: unknown) {
  if (typeof template !== "object" || template === null) {
    // Якщо шаблон не об'єкт, повертаємо порожнє значення
    return null;
  }

  return Object.keys(template).reduce((filtered, key) => {
    if (key in source) {
      // Якщо поле є в шаблоні, перевіряємо його рекурсивно (для вкладених об'єктів)
      filtered[key] =
        typeof (template as Record<string, unknown>)[key] === "object" &&
        (template as Record<string, unknown>)[key] !== null
          ? filterByTemplate(
              source[key] as Record<string, unknown>,
              (template as Record<string, unknown>)[key]
            )
          : source[key];
    }
    return filtered;
  }, {} as Record<string, unknown>);
}

export default filterByTemplate;
