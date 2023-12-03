// client.js

const axios = require('axios');

// Replace this URL with your actual server URL
const baseURL = 'http://localhost:3000';

// CRUD operations
async function getAllItems() {
  const response = await axios.get(`${baseURL}/items`);
  console.log('All items:', response.data);
}

async function createItem(item) {
  const response = await axios.post(`${baseURL}/items`, item);
  console.log('Created item:', response.data);
}

async function getItemById(id) {
  const response = await axios.get(`${baseURL}/items/${id}`);
  console.log('Item by ID:', response.data);
}

async function updateItem(id, updatedData) {
  const response = await axios.put(`${baseURL}/items/${id}`, updatedData);
  console.log('Updated item:', response.data);
}

async function deleteItem(id) {
  const response = await axios.delete(`${baseURL}/items/${id}`);
  console.log(response.data.message);
}

// Example usage
const newItem = {
  name: 'Sample Item',
  description: 'This is a sample item description.',
};

createItem(newItem)
  .then(() => getAllItems())
  .then(() => getItemById('<REPLACE_WITH_ITEM_ID>'))
  .then(() => updateItem('<REPLACE_WITH_ITEM_ID>', { description: 'Updated description' }))
  .then(() => deleteItem('<REPLACE_WITH_ITEM_ID>'))
  .then(() => getAllItems())
  .catch((error) => console.error('Error:', error));
