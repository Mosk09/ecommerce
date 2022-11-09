import { getItems } from "../services/itemServices";

export async function getPathsFromId() {
  const items = await getItems();

  const ids = items.map((item) => {
    return {
      params: {
        id: convertToPath(item.title),
      },
    };
  });

  return ids;
}

export async function getItemData(id) {
  const items = await getItems();

  const product = items.find((item) => convertToPath(item.title) === id);

  return {
    id,
    data: product,
  };
}

export function convertToPath(title) {
  return title.toLowerCase().replace(/\s/g, "-");
}
