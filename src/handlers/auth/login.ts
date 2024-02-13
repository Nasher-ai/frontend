import axios from 'axios';

const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/login/`, { email, password });
    return response.data; // Assuming your API returns useful data upon login
  } catch (error) {
    console.error('Error:', error);
    throw new Error('An error occurred during login.');
  }
};

export default loginUser;
