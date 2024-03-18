const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

export async function fetchBooks() {
  const response = await fetch(`${API_URL}/books`);
  const data = await response.json();
  return data;
}

export async function fetchBooksById(id) {
  const response = await fetch(`${API_URL}/books/${id}`);
  const result = await response.json();
  return result.book;
}

export async function createUser(firstname, lastname, email, password) {
  fetch(`${API_URL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstname,
      lastname,
      email,
      password,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch(console.error);
}

export async function fetchUser(token) {
  const response = await fetch(`${API_URL}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.token}`,
    },
  });
  const data = await response.json();
  return data;
}
export async function login(email, password) {
  const response = await fetch(`${API_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await response.json();
  return data;
}

export async function reserveBook(id, token) {
  try {
    const response = await fetch(`${API_URL}/books/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        available: false,
      }),
    });
  
    const data = await response.json();
    
    return data;
  } catch (error) {
    console.log(error);
  }
}

 export async function returnBook(resvId, token) {
  try {
    const response = await fetch (`${API_URL}/reservations/${resvId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
    });
  
    const data = await response.json();
    return data;
  }catch (error){
    console.log(error);
  }
}
 