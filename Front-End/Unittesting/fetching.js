const axios = require('axios');

async function getUserProfile(userId) {
  const response = await axios.get(`https://api.example.com/users/${userId}`);
  return response.data;
}