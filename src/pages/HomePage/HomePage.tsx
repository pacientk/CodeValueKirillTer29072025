import {
   AddEditItem,
   Footer,
   Pagination,
   ProductItem,
   SearchInput,
   TopHeader,
} from '../../components';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { initStateSelector } from '../../store/selectors';
import { createProd, deleteProd, updateProd } from '../../store/ProductsStore/ProductsSlice';
import { TProducts } from '../../utils/mockData';
import { usePagination } from '../../hooks/usePagination';

const HomePage = () => {
   const prodList = useAppSelector(initStateSelector);
   const dispatch = useAppDispatch();

   const [searchValue, setSearchValue] = useState('');
   const [isAddEditShown, setIsAddEditShown] = useState(false);
   const [selectedProduct, setSelectedProduct] = useState<TProducts | null>(null);
   const [sortBy, setSortBy] = useState<string>('');

   useEffect(() => {
      localStorage.setItem('products', JSON.stringify(prodList));
   }, [prodList]);

   const resetPage = () => setCurrentPage(1);

   const handleSave = (product: TProducts) => {
      if ('id' in product) {
         dispatch(updateProd(product));
      } else {
         dispatch(createProd(product));
      }
      setSortBy(sortBy);
      setIsAddEditShown(false);
      resetPage();
   };

   const handleRead = (searchVal: string) => {
      setSearchValue(searchVal);
      resetPage();
   };

   const handleDelete = (id: string) => {
      dispatch(deleteProd(id));
      resetPage();
   };

   const handleGetProd = (product: TProducts) => {
      setSelectedProduct(product);
      setIsAddEditShown(true);
   };

   const handleOpenCreateModal = () => {
      setSelectedProduct(null);
      setIsAddEditShown(true);
   };

   const handleSort = (byVal: string) => {
      setSortBy(byVal);
      resetPage();
   };

   const getSortedProducts = useCallback(
      (products: TProducts[]) => {
         if (!sortBy) return products;
         return [...products].sort((a, b) => {
            switch (sortBy) {
               case 'name':
                  return a.name.localeCompare(b.name);
               case 'creationDate':
                  return new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime();
               default:
                  return 0;
            }
         });
      },
      [sortBy]
   );

   const sortedProdList = useMemo(() => {
      let result = prodList;
      if (searchValue) {
         result = result.filter(p => p.name.toLowerCase().includes(searchValue.toLowerCase()));
      }
      if (sortBy) {
         result = getSortedProducts(result);
      }
      return result;
   }, [prodList, searchValue, sortBy, getSortedProducts]);

   const {
      currentPage,
      totalPages,
      paginatedList,
      handlePrevPage,
      handleNextPage,
      setCurrentPage,
   } = usePagination(sortedProdList);

   return (
      <div className="flex min-h-screen flex-col">
         <TopHeader />
         <div className="mx-auto w-full flex-grow sm:max-w-2xl lg:max-w-6xl">
            <div className="grid grid-cols-3 gap-4">
               <div className={'col-span-2 my-4'}>
                  <div className={'flex gap-4'}>
                     <div className="flex">
                        <button
                           onClick={handleOpenCreateModal}
                           disabled={isAddEditShown}
                           className="ml-3 w-auto cursor-pointer rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white hover:bg-green-500 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
                           Add new product
                        </button>
                     </div>
                     <div className="flex-1">
                        <SearchInput onChange={handleRead} value={searchValue} />
                     </div>
                  </div>
               </div>
               <div className={'col-span-2'}>
                  <div
                     className={
                        'mb-4 flex items-center justify-between rounded-lg bg-gray-100 px-4 py-2'
                     }>
                     <p className={'text-lg font-semibold'}>Products List</p>
                     <select
                        id="sortBy"
                        onChange={e => handleSort(e.target.value)}
                        className={
                           'flex w-42 rounded-lg border border-gray-300 bg-white p-2 text-sm text-gray-900 focus:border-gray-500 focus:ring-gray-500'
                        }>
                        <option value="default">Sort by...</option>
                        <option value="name">By Name</option>
                        <option value="creationDate">Created Date</option>
                     </select>
                  </div>
                  <ul role="list" className="-my-6 w-full divide-y divide-gray-200">
                     {paginatedList.map((product: TProducts) => (
                        <ProductItem
                           key={product.id}
                           getProd={handleGetProd}
                           onDelete={handleDelete}
                           product={product}
                        />
                     ))}
                  </ul>
                  <Pagination
                     currentPage={currentPage}
                     totalPages={totalPages}
                     onPrevPage={handlePrevPage}
                     onNextPage={handleNextPage}
                     totalItems={prodList.length}
                  />
               </div>
               <AddEditItem
                  product={selectedProduct}
                  isOpen={isAddEditShown}
                  onClose={() => setIsAddEditShown(false)}
                  onSave={handleSave}
               />
            </div>
         </div>
         <Footer />
      </div>
   );
};

export default HomePage;
