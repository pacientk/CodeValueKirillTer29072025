import { useMemo, useState } from 'react';
import { TProducts } from '../utils/mockData';

export const usePagination = (items: TProducts[]) => {
   const itemsPerPage = 5;
   const [currentPage, setCurrentPage] = useState(1);

   const totalPages = useMemo(
      () => Math.ceil(items.length / itemsPerPage),
      [items.length, itemsPerPage]
   );

   const paginatedList = useMemo(
      () => items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage),
      [items, currentPage, itemsPerPage]
   );

   const handlePrevPage = () => {
      if (currentPage > 1) setCurrentPage(currentPage - 1);
   };

   const handleNextPage = () => {
      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
   };

   return {
      currentPage,
      totalPages,
      paginatedList,
      setCurrentPage,
      handlePrevPage,
      handleNextPage,
   };
};
