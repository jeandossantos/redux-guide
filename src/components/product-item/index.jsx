import { BsCartPlus } from 'react-icons/bs';

// Components
import CustomButton from '../custom-button/index';

// Styles
import * as Styles from './styles';
import { useCart } from '../../hooks/useCart.js';

// Utilities

const ProductItem = ({ product }) => {
  const { addProductToCart } = useCart();

  const handleAddProductToCart = () => {
    addProductToCart(product);
  };

  return (
    <Styles.ProductContainer>
      <Styles.ProductImage imageUrl={product.imageUrl}>
        <CustomButton
          startIcon={<BsCartPlus />}
          onClick={handleAddProductToCart}
        >
          Adicionar ao carrinho
        </CustomButton>
      </Styles.ProductImage>

      <Styles.ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </Styles.ProductInfo>
    </Styles.ProductContainer>
  );
};

export default ProductItem;
