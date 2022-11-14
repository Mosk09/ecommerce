export async function getItems() {
  const request = await fetch(
    "https://api.rawg.io/api/games?key=1de50f76c19f46d3a0526c3e25161e40"
  );
  const items = await request.json();

  return items;
}

export async function getLatestItems() {
  const items = await getItems();

  return items.slice(0, 3);
}
