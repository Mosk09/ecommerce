import { data } from "../pages/api/hello";

export async function getItems() {
  console.log(data);

  return data;
}

export async function getLatestItems() {
  const items = data;

  return items.slice(0, 3);
}
