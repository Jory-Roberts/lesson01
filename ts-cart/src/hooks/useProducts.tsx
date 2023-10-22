import { useContext } from 'react';
import ProductsContext from '../context/ProductsProvider';
import { UseProductContextType } from '../context/CartProvider';

const useProducts = (): UseProductContextType => {
  return useContext(ProductsContext);
};

export default useProducts;
