import axios from 'axios';

async function fekrahChat(prompt: string) {
  try {
    const response = await axios.post('http://127.0.0.1:8000/fekrah/chat/', {'user_input': prompt});
    console.log(response)
    // If the request is successful, return the response data
    return response.data.response;
  } catch (error) {
    // If there's an error, handle it here
    console.error('Error:', error);
    // Optionally, you can throw the error to let the caller handle it
    throw error;
  }
}

export default fekrahChat;
