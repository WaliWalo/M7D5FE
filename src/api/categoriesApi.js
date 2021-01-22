//GET ALL Categories
const url = process.env.REACT_APP_BE_URL;
export async function getCategories() {
  try {
    const response = await fetch(`${url}/categories`, {
      method: "GET",
    });
    if (response.ok) {
      let data = response.json();
      return data;
    } else {
      let error = response.json();
      return error;
    }
  } catch (error) {
    return error;
  }
}
//POST A CATEGORY
export async function postCategory(category) {
  try {
    console.log(category);
    const response = await fetch(`${url}/categories`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(category),
    });
    if (response.ok) {
      let result = response.json();
      return result;
    } else {
      alert("fuck");
      let error = response.json();
      return error;
    }
  } catch (error) {
    return error;
  }
}
