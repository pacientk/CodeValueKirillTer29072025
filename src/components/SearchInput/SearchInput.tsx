import React, { ChangeEvent } from 'react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid';

interface SearchInputProps {
   value: string;
   onChange: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
   };

   return (
      <div
         className={
            'flex w-full items-center rounded-md border border-gray-500 bg-white px-3 py-2 lg:text-center'
         }>
         <MagnifyingGlassIcon className="mr-2 h-5 w-5 text-gray-400" />
         <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder={'Search...'}
            className="w-full bg-transparent text-black placeholder-gray-400 outline-none"
         />
         {value.length ? (
            <button className={'cursor-pointer'} onClick={() => onChange('')}>
               <XMarkIcon className="mr-2 h-5 w-5 text-gray-400" />
            </button>
         ) : null}
      </div>
   );
};

export default SearchInput;
