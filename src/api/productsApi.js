//GET ALL PRODUCTS
const url = process.env.REACT_APP_BE_URL;
export async function getProducts() {
  try {
    const response = await fetch(`${url}/products`, {
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

//POST A PRODUCT
export async function postProduct(product) {
  try {
    console.log(product);
    let formdata = new FormData();
    formdata.append("name", product.name);
    formdata.append("image", product.imageUrl, product.imageUrl.name);
    formdata.append("description", product.description);
    formdata.append("price", product.price);
    formdata.append("brand", product.brand);
    formdata.append("categoryId", product.categoryId);

    // const response = await fetch(`${url}/products/`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(product),
    // });

    const response = await fetch(`${url}/products/`, {
      method: "POST",
      body: formdata,
    });

    if (response.ok) {
      alert("success");
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

//GET A SINGLE PRODUCT
export async function getSingleProduct(id) {
  try {
    const response = await fetch(`${url}/products/${id}`, {
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

//UPDATE A PRODUCT
export async function updateProducts(id, product) {
  try {
    console.log(product, id);
    const response = await fetch(`${url}/products/${id}`, {
      method: "PUT",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    if (response.ok) {
      // let data = await response.json();
      alert("SUCCESS");
      // return data;
    } else {
      let error = await response.json();
      return error;
    }
  } catch (error) {
    return error;
  }
}

//REMOVE A PRODUCT
export async function removeProduct(id) {
  try {
    const response = await fetch(`${url}/products/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      return "Product Deleted";
    } else {
      return response.json();
    }
  } catch (error) {
    return error;
  }
}

// "/:id/reviews" GET ALL REVIEWS FOR A SINGLE PRODUCT
export async function getAllReviews(productId) {
  try {
    const response = await fetch(`${url}/reviews/${productId}`, {
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

// "/:id/reviews" POST A REVIEW FOR A PRODUCT
export async function postReview(productId, review) {
  try {
    const response = await fetch(`${url}/reviews/${productId}/1`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review),
    });
    if (response.ok) {
      alert("successfuly added");
      let result = response.json();
      return result;
    } else {
      alert("fuck! smthing wrong");
      let error = response.json();
      return error;
    }
  } catch (error) {
    return error;
  }
}

// UPDATE A REVIEW
export async function updateReview(reviewId, review) {
  try {
    const response = await fetch(`${url}/products/${reviewId}/reviews`, {
      method: "PUT",
      headers: new Headers("Content-Type", "application/json"),
      body: JSON.stringify(review),
    });
    if (response.ok) {
      let result = response.json();
      return result;
    } else {
      let error = response.json();
      return error;
    }
  } catch (error) {
    return error;
  }
}

//DELETE A REVIEW
export async function deleteReview(reviewId) {
  try {
    const response = await fetch(`${url}/reviews/update/${reviewId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      return "REVIEW DELETED";
    } else {
      return response.json();
    }
  } catch (error) {
    return error;
  }
}

//POST A IMAGE
export async function postProductImage(productId, file) {
  try {
    console.log(file);
    let formData = new FormData();
    formData.append("product", file, file.name);
    const response = await fetch(`${url}/products/${productId}/image`, {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const error = await response.json();
      return error;
    }
  } catch (error) {
    return error;
  }
}

//POST product to cart
export async function addProductToCart(productId, userId) {
  try {
    userId = 1;
    let response = await fetch(`${url}/carts/${productId}/${userId}`, {
      method: "POST",
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const error = await response.json();
      return error;
    }
  } catch (error) {
    return error;
  }
}

//GET BASKET
export async function getBasket(userId) {
  try {
    userId = 1;
    let response = await fetch(`${url}/carts/getCart/${userId}/`, {
      method: "GET",
    });
    if (response.ok) {
      const data = await response.json();

      return data;
    } else {
      const error = await response.json();
      return error;
    }
  } catch (error) {
    return error;
  }
}

//DELETE ITEM FROM BASKET
export async function removeItemFromBasket(productId, userId) {
  try {
    userId = 1;
    let response = await fetch(`${url}/carts/update/${productId}/${userId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      const data = await response.json();

      return data;
    } else {
      const error = await response.json();
      return error;
    }
  } catch (error) {
    return error;
  }
}

//GET PRODUCT PDF
export async function getProductPdf(id) {
  try {
    let response = await fetch(`${url}/products/${id}/exportPdf`, {
      method: "GET",
    });
    const file = { file: `${url}/products/${id}/exportPdf` };

    if (response.ok) {
      alert("SUCCESS! SENT TO YOUR EMAIL!");
      // window.open(file.file);
      return file;
    } else {
      alert("SOMETHING WENT WRONG");
      const error = response.json();
      return error;
    }
  } catch (error) {
    return error;
  }
}

export async function downloadList() {
  try {
    let response = await fetch(`${url}/products/csv/exportToCSV`, {
      method: "GET",
    });
    const file = { file: `${url}/products/csv/exportToCSV` };

    if (response.ok) {
      // alert("SUCCESS!");
      window.open(file.file);
    } else {
      alert("SOMETHING WENT WRONG");
      const error = response.json();
      return error;
    }
  } catch (error) {
    return error;
  }
}
