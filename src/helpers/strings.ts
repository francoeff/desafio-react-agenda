export const searchInAttributes = (search: string, ...attributes: string[]) =>
  attributes
    .map((attribute) => attribute.toLowerCase())
    .join(' ')
    .includes(search.toLowerCase());
