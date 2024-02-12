import axios from 'axios';

const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/login/', { email, password });
    return response.data; // Assuming your API returns useful data upon login
  } catch (error) {
    console.error('Error:', error);
    throw new Error('An error occurred during login.');
  }
};

export default loginUser;
