import axios from "axios";

const signupUser = async (
  name: string,
  email: string,
  password: string,
  profileURL: string,
  role: string
) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/v1/auth/signup",
      {
        name,
        email,
        password,
        profileURL,
        role,
      }
    );
    return response.data;
  } catch (error: any) {
    console.log(error);
  }
};

export default signupUser;
