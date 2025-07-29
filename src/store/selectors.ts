import { RootState } from './store';

export const initStateSelector = (state: RootState) => state.productsStore.products;
