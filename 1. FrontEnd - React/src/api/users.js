// Base url for the users API
const url = "'YOUR_SERVER_URL_AND_PORT'/users";

// Function to get all users
const getAllUsers = async (query = {}) => {
  const { limit = 10, from = 0, sort = -1 } = query;
  try {
    const response = await fetch(
      url + `?limit=${limit}&from=${from}&sort=${sort}`
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return { status: response.status, data };
  } catch (error) {
    throw new Error(
      "There was an error retrieving the users, please check your logs"
    );
  }
};

// Function to get one user
const getSingleUser = async (id) => {
  try {
    const response = await fetch(url + `/${id}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return { status: response.status, data };
  } catch (error) {
    throw new Error(
      "There was an error retrieving the user, please check your logs"
    );
  }
};

// Function to create a user
const createUser = async (user) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return { status: response.status, data };
  } catch (error) {
    throw new Error(
      "There was an error creating the user, please check your logs"
    );
  }
};

// Function to update a user
const updateUser = async (id, user) => {
  try {
    const response = await fetch(url + `/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return { status: response.status, data };
  } catch (error) {
    throw new Error(
      "There was an error updating the user, please check your logs"
    );
  }
};

// Function to delete a user
const deleteUser = async (id) => {
  try {
    const response = await fetch(url + `/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return { status: response.status, data };
  } catch (error) {
    throw new Error(
      "There was an error deleting the user, please check your logs"
    );
  }
};

// Export the functions
export { getAllUsers, getSingleUser, createUser, updateUser, deleteUser };
