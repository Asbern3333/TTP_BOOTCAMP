const axios = require('axios');
const getUserProfile = require('./fetching');

jest.mock(axios)

test('fetches user profile from the API', async () => {
  // Setup
//   const mockUser = { id: 1, name: 'John Doe' };
//   axios.get.mockResolvedValue({ data: mockUser });

//   // Exercise
//   const user = await getUserProfile(1);
  const mockResponse = { data: { id: 1, name: 'John Doe', }, };
  // Verify
  expect(user).toEqual(mockUser);
  expect(axios.get).toHaveBeenCalledWith('https://api.example.com/users/1');
});

//I should check the fetching and how it works