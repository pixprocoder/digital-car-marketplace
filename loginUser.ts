import axios from "axios";

const loginUser = async (email, password, role, profileURL) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/v1/auth/login",
      {
        email,
        password,
        role,
        profileURL,
      }
    );

    // Assuming your backend returns a token upon successful login
    const token = response.data.token;
    console.log(token);

    // You can save the token to localStorage or use it as needed
    localStorage.setItem("token", token);
    console.log(response.data);

    // Return any relevant data from the response
    return response.data;
  } catch (error) {
    // Handle errors, e.g., display an error message to the user
    console.error("Error logging in:", error);
    throw error; // You may want to handle the error differently based on your needs
  }
};

export default loginUser;
