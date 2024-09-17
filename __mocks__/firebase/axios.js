// __mocks__/axios.js
const mockAxios = {
    get: jest.fn(() => Promise.resolve({ data: {} })),
    post: jest.fn(() => Promise.resolve({ data: {} })),
  };
  
  export default mockAxios;
  