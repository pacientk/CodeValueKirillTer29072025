export type TProducts = {
   id: string;
   name: string;
   description: string;
   price: number;
   creationDate: string;
};
export const mockProducts: TProducts[] = [
   {
      id: 'ab7953dc-ff2c-4abd-8d51-affcdccd0656',
      name: 'Classic Blue T-Shirt',
      description:
         'Praesent quis orci sit amet ante facilisis suscipit. Integer in eros molestie, ultricies arcu ac, cursus quam. Nulla facilisi. Ut egestas semper magna ac condimentum. Aliquam erat volutpat. Sed bibendum sollicitudin orci, at viverra metus vehicula sed. Etiam accumsan urna a mauris dapibus, nec aliquet nunc convallis. Phasellus eget justo et libero ultrices posuere. Cras euismod, arcu nec congue convallis, ipsum nunc cursus nibh, vel condimentum sapien orci non libero. Integer ullamcorper felis sit amet felis placerat, eu convallis lorem iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Aliquam erat volutpat. Nullam scelerisque auctor libero, id volutpat est dignissim vitae. Aliquam erat volutpat. Integer laoreet, nisi a tincidunt tincidunt, odio nisl commodo libero, id ultricies sapien purus non odio. Phasellus ac ultricies ex, vel scelerisque libero. Integer a ipsum vitae urna varius egestas. Integer laoreet, sapien eget vehicula vehicula, odio lorem scelerisque magna, nec gravida libero nulla eget risus. Nulla facilisi. Donec at magna ut nulla pharetra cursus. Curabitur auctor, tellus in congue vestibulum, lacus lacus convallis justo, at fermentum libero felis nec ligula.',
      price: 19.99,
      creationDate: '2025-01-15T09:30:00Z',
   },
   {
      id: 'bc8053ed-1f3d-5bce-9e62-b00ddeed0767',
      name: 'Wireless Earbuds',
      description: 'High-quality wireless earbuds with noise cancellation and long battery life.',
      price: 59.99,
      creationDate: '2025-03-22T14:15:00Z',
   },
   {
      id: 'cd9153fe-2g4e-6cdf-af73-c11effef0878',
      name: 'Leather Wallet',
      description: 'Sleek leather wallet with multiple card slots and a minimalist design.',
      price: 29.99,
      creationDate: '2025-02-10T11:45:00Z',
   },
   {
      id: 'de0264gf-3h5f-7deg-bg84-d22gggfg0989',
      name: 'Running Shoes',
      description: 'Lightweight running shoes with excellent cushioning for all terrains.',
      price: 79.99,
      creationDate: '2025-04-05T16:20:00Z',
   },
   {
      id: 'ef1375hg-4i6g-8efh-ch95-e33hhhgh1090',
      name: 'Stainless Steel Water Bottle',
      description: 'Insulated water bottle that keeps drinks cold for 24 hours.',
      price: 24.99,
      creationDate: '2025-06-12T08:00:00Z',
   },
   {
      id: 'fg2486ih-5j7h-9fgi-di06-f44iiiih2101',
      name: 'Gaming Mouse',
      description: 'Ergonomic gaming mouse with customizable RGB lighting and high precision.',
      price: 49.99,
      creationDate: '2025-05-18T13:10:00Z',
   },
   {
      id: 'gh3597ji-6k8i-0hjg-ej17-g55jjjji3212',
      name: 'Yoga Mat',
      description: 'Non-slip yoga mat with extra cushioning for comfort during workouts.',
      price: 34.99,
      creationDate: '2025-03-01T10:30:00Z',
   },
   {
      id: 'hi4608kj-7l9j-1ikf-fk28-h66kkkkj4323',
      name: 'Bluetooth Speaker',
      description: 'Portable Bluetooth speaker with rich sound and waterproof design.',
      price: 39.99,
      creationDate: '2025-07-10T15:50:00Z',
   },
   {
      id: 'ij5719lk-8m0k-2jlg-gl39-i77llllk5434',
      name: 'Sunglasses',
      description: 'Stylish polarized sunglasses with UV protection for outdoor activities.',
      price: 44.99,
      creationDate: '2025-02-25T12:00:00Z',
   },
   {
      id: 'jk6820ml-9n1l-3kmh-hm40-j88mmmmll6545',
      name: 'Backpack',
      description: 'Durable backpack with multiple compartments for daily use.',
      price: 54.99,
      creationDate: '2025-06-30T09:15:00Z',
   },
   {
      id: 'kl7931nm-0o2m-4lnj-in51-k99nnnnm7656',
      name: 'Smart Watch',
      description: 'Fitness tracker with heart rate monitor and notification alerts.',
      price: 99.99,
      creationDate: '2025-04-20T14:30:00Z',
   },
   {
      id: 'lm8042on-1p3n-5moi-jo62-l00oooon8767',
      name: 'Coffee Mug',
      description: 'Ceramic coffee mug with a minimalist design and comfortable grip.',
      price: 14.99,
      creationDate: '2025-01-05T08:45:00Z',
   },
   {
      id: 'mn9153po-2q4o-6npj-kp73-m11ppppo9878',
      name: 'Desk Lamp',
      description: 'Adjustable LED desk lamp with multiple brightness settings.',
      price: 29.99,
      creationDate: '2025-05-15T11:20:00Z',
   },
   {
      id: 'no0264qp-3r5p-7okq-lq84-n22qqqqp0989',
      name: 'Hoodie',
      description: 'Cozy hoodie with a soft interior and kangaroo pocket.',
      price: 39.99,
      creationDate: '2025-07-01T13:40:00Z',
   },
   {
      id: 'op1375rq-4s6q-8plq-mr95-o33rrrrq1090',
      name: 'Notebook',
      description: 'Hardcover notebook with lined pages, ideal for journaling.',
      price: 12.99,
      creationDate: '2025-03-10T10:00:00Z',
   },
   {
      id: 'pq2486sr-5t7r-9qmr-ns06-p44ssssr2101',
      name: 'Wireless Charger',
      description: 'Fast wireless charger compatible with most smartphones.',
      price: 24.99,
      creationDate: '2025-06-05T09:30:00Z',
   },
   {
      id: 'qr3597ts-6u8s-0rns-ot17-q55ttttss3212',
      name: 'Baseball Cap',
      description: 'Classic baseball cap with adjustable strap and breathable fabric.',
      price: 19.99,
      creationDate: '2025-04-12T15:10:00Z',
   },
   {
      id: 'rs4608ut-7v9t-1sot-pu28-r66uuuuut4323',
      name: 'Travel Mug',
      description: 'Insulated travel mug with a spill-proof lid for on-the-go use.',
      price: 22.99,
      creationDate: '2025-02-18T12:25:00Z',
   },
   {
      id: 'st5719vu-8w0u-2tpu-qv39-s77vvvvu5434',
      name: 'Portable Power Bank',
      description: 'Compact power bank with 10,000mAh capacity for charging devices.',
      price: 34.99,
      creationDate: '2025-05-25T14:00:00Z',
   },
   {
      id: 'tu6820wv-9x1v-3uqv-rw40-t88wwwwwv6545',
      name: 'Laptop Stand',
      description: 'Adjustable laptop stand for ergonomic positioning and better airflow.',
      price: 29.99,
      creationDate: '2025-07-20T16:45:00Z',
   },
];
