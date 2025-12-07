// app/_utils/CartApis.js
import axiosClient from './axiosClient';

// Helper: resolve numeric product id from a documentId string
const getProductIdByDocumentId = async (documentId) => {
  if (!documentId) return null;
  // we query products by documentId to get the numeric id
  const q = `/products?filters[documentId][$eq]=${documentId}`;
  const res = await axiosClient.get(q);
  const list = res?.data?.data || [];
  return list.length ? list[0].id : null;
};

const addToCart = async (productIdentifier, email, username) => {
  // productIdentifier may be numeric id OR a documentId string
  let productId = null;
  if (!productIdentifier) throw new Error('No product identifier provided');

  // if it's a number already, use it
  const maybeNum = Number(productIdentifier);
  if (!Number.isNaN(maybeNum)) {
    productId = maybeNum;
  } else {
    // else resolve documentId -> numeric id
    productId = await getProductIdByDocumentId(productIdentifier);
  }

  if (!productId) {
    // No matching product found
    const err = new Error('Product not found to add to cart');
    err.status = 404;
    throw err;
  }

  // Create cart entry linking to numeric product id
  return axiosClient.post('/carts', {
    data: {
      email,
      username,
      products: [productId]
    }
  });
};

const getUserCartItems = (email) =>
  axiosClient.get(`/carts?filters[email][$eq]=${email}&populate=products.banner`);


const deleteCartItem = (id) => axiosClient.delete(`/carts/${id}`);

// DELETE ONE PRODUCT FROM A CART ENTRY
const removeProductFromCart = async (productId, email) => {
  // 1. Fetch all cart entries for this user
  const res = await axiosClient.get(`/carts?filters[email][$eq]=${email}&populate=products`);
  const allCarts = res.data.data;

  // 2. Filter cart entries that contain this product
  const toDelete = allCarts.filter(cart => cart.products.some(p => p.id === productId));

  // 3. Delete all relevant cart entries
  const deletes = toDelete.map(cart => axiosClient.delete(`/carts/${cart.id}`));
  await Promise.all(deletes);
};


export default {
  addToCart,
  getUserCartItems,
  deleteCartItem,
  removeProductFromCart
};
