import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { mockProducts, TProducts } from '../../utils/mockData';
import { v4 as uuidv4 } from 'uuid';

export interface IProductsStore {
   products: TProducts[];
}

const loadInitState = (): TProducts[] => {
   const savedProducts = localStorage.getItem('products');
   if (savedProducts) {
      try {
         const parsedProducts = JSON.parse(savedProducts) as TProducts[];
         return parsedProducts.filter(
            p => p.id && p.creationDate && p.price && p.name && p.description
         );
      } catch (e) {
         console.error('Error with prosucts:', e);
         return mockProducts;
      }
   }
   return mockProducts;
};

const initialState: IProductsStore = {
   products: loadInitState(),
};

const productsSlice = createSlice({
   name: 'productsSlice',
   initialState,
   reducers: {
      createProd: (state, action: PayloadAction<TProducts>) => {
         const newProduct: TProducts = {
            ...action.payload,
            id: uuidv4(),
            creationDate: new Date().toISOString(),
         };
         state.products.push(newProduct);
      },
      updateProd: (state, action: PayloadAction<TProducts>) => {
         const index = state.products.findIndex(p => p.id === action.payload.id);
         if (index !== -1) {
            state.products[index] = { ...action.payload, creationDate: new Date().toISOString() };
         }
      },
      deleteProd: (state, action: PayloadAction<string>) => {
         state.products = state.products.filter(p => p.id !== action.payload);
      },
   },
});

export const { createProd, updateProd, deleteProd } = productsSlice.actions;
export default productsSlice.reducer;
