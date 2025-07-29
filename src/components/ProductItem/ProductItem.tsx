import prodImg from '../../assets/prodImg.jpg';
import { TProducts } from '../../utils/mockData';
import { TrashIcon } from '@heroicons/react/24/outline';
import React, { memo } from 'react';
import { useNavigate } from 'react-router';

interface ProdItemProps {
   product: TProducts;
   getProd: (item: TProducts) => void;
   onDelete: (id: string) => void;
}

const ProductItem = ({ product, getProd, onDelete }: ProdItemProps) => {
   const navigate = useNavigate();

   const handleDelete = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (confirm(`Do you really want to delete the product ${product.name}?`)) {
         onDelete(product.id);
      }
   };

   const navToProdDetails = (e: React.MouseEvent) => {
      e.stopPropagation();
      navigate(`/products/${product.id}`);
   };

   return (
      <li className="flex py-6">
         <div
            className="flex flex-1 cursor-pointer justify-between gap-x-6 rounded-lg p-4 hover:bg-gray-50"
            onClick={() => getProd(product)}>
            <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
               <img alt={product.description} src={prodImg} className="object-center" />
            </div>
            <div className="ml-4 flex flex-1 flex-col">
               <div className="flex justify-between text-base font-medium text-gray-900">
                  <h3>
                     <p>{product.name}</p>
                  </h3>
                  <p className="ml-4">
                     {product.price}
                     <small>{'\u200A'}$</small>
                  </p>
               </div>
               <p className="me-25 mt-2 line-clamp-2 text-sm text-gray-500">
                  {product.description}
               </p>
               <button
                  onClick={navToProdDetails}
                  className="me-25 mt-2 block cursor-pointer self-start text-sm text-gray-500 underline">
                  Product details
               </button>
               <div className="flex justify-end text-sm">
                  <button
                     className={'block cursor-pointer rounded hover:bg-red-100'}
                     onClick={handleDelete}>
                     <TrashIcon className="m-2 h-5 w-5 text-red-400" />
                  </button>
               </div>
            </div>
         </div>
      </li>
   );
};

export default memo(ProductItem);
