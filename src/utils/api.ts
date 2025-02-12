export const fetchData = async () => {
  try {
    const response = await fetch("https://spla3.yuu26.com/api/bankara-open/schedule", {
      method: "GET",
      headers: {
        "User-Agent": "takeuchi180121@gmail.com",
        "Accept": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data from the API.");
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return { error: "Failed to fetch data" };
  }
}
