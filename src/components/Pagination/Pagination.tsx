import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import React from 'react';

interface PaginationProps {
   currentPage: number;
   totalPages: number;
   onPrevPage: () => void;
   onNextPage: () => void;
   totalItems: number;
}

const Pagination: React.FC<PaginationProps> = ({
   currentPage,
   totalPages,
   onPrevPage,
   onNextPage,
   totalItems,
}) => {
   return (
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-6">
         <div className="flex flex-1 items-center justify-center">
            <div>
               <nav
                  aria-label="Pagination"
                  className="isolate inline-flex items-center -space-x-px rounded-md">
                  <button
                     onClick={onPrevPage}
                     disabled={currentPage === 1}
                     className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-900 focus:z-20 focus:outline-offset-0 disabled:opacity-50">
                     <ChevronLeftIcon aria-hidden="true" className="size-5" />
                     <span className="mx-1 text-sm text-gray-700">Previous page</span>
                  </button>

                  <p className="mx-4 text-sm text-gray-700">
                     Showing <span className="font-medium">{(currentPage - 1) * 5 + 1}</span> to{' '}
                     <span className="font-medium">{Math.min(currentPage * 5, totalItems)}</span> of{' '}
                     <span className="font-medium">{totalItems}</span> total
                  </p>

                  <button
                     onClick={onNextPage}
                     disabled={currentPage === totalPages}
                     className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-900 focus:z-20 focus:outline-offset-0 disabled:opacity-50">
                     <span className="mx-1 text-sm text-gray-700">Next page</span>
                     <ChevronRightIcon aria-hidden="true" className="size-5" />
                  </button>
               </nav>
            </div>
         </div>
      </div>
   );
};

export default Pagination;
