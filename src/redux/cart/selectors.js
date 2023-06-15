export function selectorProductsCount(root) {
  const products = root.cartReducer.products;
  let count = 0;

  for (const product of products) {
    count += product.quantity;
  }

  return count;
}

export function selectorProductsTotalPrice(root) {
  const products = root.cartReducer.products;
  let totalPrice = 0;

  for (const product of products) {
    totalPrice += product.price * product.quantity;
  }

  return totalPrice;
}
