import prodImg from '../../assets/prodImg.jpg';
import { TProducts } from '../../utils/mockData';
import { FormEvent, useEffect, useMemo, useState } from 'react';

interface IAddEditItemProps {
   product: TProducts | null;
   isOpen: boolean;
   onClose: () => void;
   onSave: (product: TProducts) => void;
}

const AddEditItem = ({ product, isOpen, onClose, onSave }: IAddEditItemProps) => {
   const [name, setName] = useState('');
   const [description, setDescription] = useState('');
   const [price, setPrice] = useState(0);
   const isValid = useMemo(
      () => name.length && description.length && price > 0,
      [name, description, price]
   );

   const resetState = () => {
      setName('');
      setDescription('');
      setPrice(0);
   };

   useEffect(() => {
      if (isOpen && product) {
         setName(product.name);
         setDescription(product.description);
         setPrice(product.price);
      } else if (!isOpen) {
         resetState();
      }
   }, [product, isOpen]);

   useEffect(() => {
      if (!isOpen) {
         resetState();
      }
   }, [isOpen]);

   const createProductItem = (
      base: { name: string; description: string; price: number },
      existing?: TProducts
   ) => ({
      ...base,
      ...(existing ? { id: existing.id, creationDate: new Date().toISOString() } : {}),
   });

   const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      if (isValid) {
         const newProduct = createProductItem({ name, description, price }, product as TProducts);
         onSave(newProduct as TProducts);
         onClose();
      }
   };

   if (!isOpen) {
      return <></>;
   }

   return (
      <div>
         <form className="rounded-xl bg-gray-100 p-2 pb-8" onSubmit={handleSubmit}>
            <div className="flex-1">
               <div className="p-4 text-start">
                  <p className="pb-2 text-2xl font-semibold text-gray-900">
                     {product ? 'Edit Product' : 'Add New Product'}
                  </p>
                  <div className="pt-3 sm:col-span-2">
                     <div className="mb-4 size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                           alt={product?.name || 'Product Img'}
                           src={prodImg}
                           className="object-center"
                        />
                     </div>

                     <label
                        htmlFor="productName"
                        className="block text-sm/6 font-semibold text-gray-900">
                        Product name
                     </label>
                     <input
                        id="productName"
                        name="productName"
                        type="text"
                        value={name}
                        minLength={2}
                        maxLength={30}
                        required={true}
                        onChange={e => setName(e.target.value)}
                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600"
                     />
                  </div>
                  <div className="pt-5 sm:col-span-2">
                     <label
                        htmlFor="productDescription"
                        className="block text-sm/6 font-semibold text-gray-900">
                        Product description
                     </label>
                     <textarea
                        id="productDescription"
                        name="productDescription"
                        value={description}
                        rows={4}
                        minLength={2}
                        maxLength={200}
                        required={true}
                        onChange={e => setDescription(e.target.value)}
                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600"
                     />
                  </div>
                  <div className="pt-5 sm:col-span-2">
                     <label
                        htmlFor="productPrice"
                        className="block text-sm/6 font-semibold text-gray-900">
                        Price
                     </label>
                     <div className="mt-0 flex">
                        <input
                           id="productPrice"
                           name="productPrice"
                           type="number"
                           value={price}
                           required={true}
                           onChange={e => setPrice(Number(e.target.value))}
                           className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600"
                        />
                        <p className="px-2 pt-2">$</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="mt-8 flex justify-end px-4">
               <button
                  type="button"
                  onClick={onClose}
                  className="mt-3 rounded-md bg-white px-6 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto">
                  Cancel
               </button>
               <button
                  type="submit"
                  disabled={!isValid}
                  className="rounded-md border-green-900 bg-green-600 px-6 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300 sm:ml-3">
                  {product ? 'Update' : 'Add'}
               </button>
            </div>
         </form>
      </div>
   );
};

export default AddEditItem;
