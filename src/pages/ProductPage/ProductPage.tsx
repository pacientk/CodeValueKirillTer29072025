import { memo } from 'react';
import { useParams } from 'react-router';
import { useAppSelector } from '../../store/store';
import { initStateSelector } from '../../store/selectors';
import prodImg from '../../assets/prodImg.jpg';

const ProductPage = () => {
   const { id } = useParams<{ id: string }>();
   const prodList = useAppSelector(initStateSelector);
   const product = prodList.find(p => p.id === id);

   if (!product) return <div>Product not found</div>;

   return (
      <div className="mx-auto max-w-4xl p-4">
         <div className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
               <img
                  alt={product.description}
                  src={prodImg}
                  className="size-24 flex-none rounded bg-gray-50"
               />
               <div className="min-w-0 flex-auto">
                  <p className="text-lg font-semibold text-gray-900">{product.name}</p>
                  <p className="mt-1 text-gray-900">{product.description}</p>
                  <p className="mt-3 text-gray-900">Price: {product.price}$</p>
                  <p className="mt-2 text-sm/6 text-gray-900">
                     Created at:{'\u00A0'}
                     {new Date(product.creationDate).toLocaleDateString()}
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default memo(ProductPage);
