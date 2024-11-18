import styles from '@/src/components/collections/collections.module.css';

export type CollectionsGroup = {
  top: Collection[];
  bottom: Collection[];
};

export type Collection = {
  img: string;
  style?: string;
};
export type CollectionList = {
  img: string;
  name: string;
};

export const collectionsList: CollectionList[] = [
  {
    img: '/pictures/collections/line2hl/main.webp',
    name: 'firstCollection',
  },
  {
    img: '/pictures/collections/line2hr/main.webp',
    name: 'secondCollection',
  },
  {
    img: '/pictures/collections/line3hr/main.webp',
    name: 'thirdCollection',
  },
  {
    img: '/pictures/collections/line3w/main.webp',
    name: 'fourthCollection',
  },
  {
    img: '/pictures/collections/line1w/main.webp',
    name: 'fifthCollection',
  },
  {
    img: '/pictures/collections/sixcollection/main.webp',
    name: 'sixCollcetion',
  },
  {
    img: '/pictures/collections/seventhcollection/main.webp',
    name: 'seventhCollection',
  },
  {
    img: '/pictures/collections/eightcollection/main.webp',
    name: 'eightCollection',
  },
  {
    img: '/pictures/collections/ninethcollection/main.webp',
    name: 'ninethCollection',
  },
  {
    img: '/pictures/collections/tenthcollection/main.webp',
    name: 'tenthCollection',
  },
];

export const morningCollection: CollectionsGroup = {
  top: [
    { img: '/pictures/collections/line2hl/line2h-1.webp', style: styles.div1 },
    { img: '/pictures/collections/line2hl/line2h-2.webp', style: styles.div2 },
    { img: '/pictures/collections/line2hl/line2h-3.webp', style: styles.div4 },
    { img: '/pictures/collections/line2hl/line2h-4.webp', style: styles.div6 },
  ],
  bottom: [
    { img: '/pictures/collections/line2hl/line2h-5.webp', style: styles.div7 },
    { img: '/pictures/collections/line2hl/main.webp', style: styles.div8 },
    { img: '/pictures/collections/line2hl/line2h-6.webp', style: styles.div9 },
  ],
};

export const secondCollection: CollectionsGroup = {
  top: [
    { img: '/pictures/collections/line2hr/main.webp', style: styles.div1 },
    { img: '/pictures/collections/line2hr/line2h-2.webp', style: styles.div2 },
    { img: '/pictures/collections/line2hr/line2h-3.webp', style: styles.div4 },
    { img: '/pictures/collections/line2hr/line2h-4.webp', style: styles.div6 },
  ],
  bottom: [
    { img: '/pictures/collections/line2hr/line2h-5.webp', style: styles.div7 },
    { img: '/pictures/collections/line2hr/line2h-6.webp', style: styles.div8 },
    { img: '/pictures/collections/line2hr/line2h-7.webp', style: styles.div9 },
  ],
};

export const thirdCollection: CollectionsGroup = {
  top: [
    { img: '/pictures/collections/line3hr/main.webp', style: styles.div1 },
    { img: '/pictures/collections/line3hr/line3h-2.webp', style: styles.div2 },
    { img: '/pictures/collections/line3hr/line3h-3.webp', style: styles.div4 },
    { img: '/pictures/collections/line3hr/line3h-4.webp', style: styles.div6 },
  ],
  bottom: [
    { img: '/pictures/collections/line3hr/line3h-5.webp', style: styles.div7 },
    { img: '/pictures/collections/line3hr/line3h-6.webp', style: styles.div8 },
    { img: '/pictures/collections/line3hr/line3h-7.webp', style: styles.div9 },
  ],
};
export const fourCollection: CollectionsGroup = {
  top: [
    { img: '/pictures/collections/line3w/line3w-1.webp', style: styles.div1 },
    { img: '/pictures/collections/line3w/line3w-2.webp', style: styles.div2 },
    { img: '/pictures/collections/line3w/line3w-3.webp', style: styles.div4 },
    { img: '/pictures/collections/line3w/line3w-4.webp', style: styles.div6 },
  ],
  bottom: [
    { img: '/pictures/collections/line3w/main.webp', style: styles.div7 },
    { img: '/pictures/collections/line3w/line3w-6.webp', style: styles.div8 },
    { img: '/pictures/collections/line3w/line3w-5.webp', style: styles.div9 },
  ],
};

export const fiveCollection: CollectionsGroup = {
  top: [
    { img: '/pictures/collections/line1w/line1w-1.webp', style: styles.div1 },
    { img: '/pictures/collections/line1w/line1w-2.webp', style: styles.div2 },
    { img: '/pictures/collections/line1w/line1w-3.webp', style: styles.div4 },
    { img: '/pictures/collections/line1w/line1w-4.webp', style: styles.div6 },
  ],
  bottom: [
    { img: '/pictures/collections/line1w/main.webp', style: styles.div7 },
    { img: '/pictures/collections/line1w/line1w-6.webp', style: styles.div8 },
    { img: '/pictures/collections/line1w/line1w-5.webp', style: styles.div9 },
  ],
};

export const sixCollection: Collection[] = [
  { img: '/pictures/collections/sixcollection/main.webp' },
  { img: '/pictures/collections/sixcollection/2.webp' },
  { img: '/pictures/collections/sixcollection/3.webp' },
  { img: '/pictures/collections/sixcollection/4.webp' },
  { img: '/pictures/collections/sixcollection/5.webp' },
  { img: '/pictures/collections/sixcollection/6.webp' },
  { img: '/pictures/collections/sixcollection/7.webp' },
  { img: '/pictures/collections/sixcollection/8.webp' },
  { img: '/pictures/collections/sixcollection/9.webp' },
  { img: '/pictures/collections/sixcollection/10.webp' },
  { img: '/pictures/collections/sixcollection/11.webp' },
  { img: '/pictures/collections/sixcollection/12.webp' },
  { img: '/pictures/collections/sixcollection/13.webp' },
];

export const seventhCollection: Collection[] = [
  { img: '/pictures/collections/seventhcollection/main.webp' },
  { img: '/pictures/collections/seventhcollection/2.webp' },
  { img: '/pictures/collections/seventhcollection/3.webp' },
  { img: '/pictures/collections/seventhcollection/4.webp' },
  { img: '/pictures/collections/seventhcollection/5.webp' },
  { img: '/pictures/collections/seventhcollection/6.webp' },
  { img: '/pictures/collections/seventhcollection/7.webp' },
  { img: '/pictures/collections/seventhcollection/8.webp' },
  { img: '/pictures/collections/seventhcollection/9.webp' },
  { img: '/pictures/collections/seventhcollection/10.webp' },
  { img: '/pictures/collections/seventhcollection/11.webp' },
  { img: '/pictures/collections/seventhcollection/12.webp' },
  { img: '/pictures/collections/seventhcollection/13.webp' },
];

export const eightCollection: CollectionsGroup = {
  top: [
    { img: '/pictures/collections/eightcollection/1.webp', style: styles.div1 },
    { img: '/pictures/collections/eightcollection/2.webp', style: styles.div2 },
    { img: '/pictures/collections/eightcollection/3.webp', style: styles.div4 },
    { img: '/pictures/collections/eightcollection/4.webp', style: styles.div6 },
  ],
  bottom: [
    { img: '/pictures/collections/eightcollection/5.webp', style: styles.div7 },
    {
      img: '/pictures/collections/eightcollection/main.webp',
      style: styles.div8,
    },
    { img: '/pictures/collections/eightcollection/6.webp', style: styles.div9 },
  ],
};

export const ninethCollection: Collection[] = [
  { img: '/pictures/collections/ninethcollection/1.webp' },
  { img: '/pictures/collections/ninethcollection/2.webp' },
  { img: '/pictures/collections/ninethcollection/3.webp' },
  { img: '/pictures/collections/ninethcollection/4.webp' },
  { img: '/pictures/collections/ninethcollection/5.webp' },
  { img: '/pictures/collections/ninethcollection/6.webp' },
  { img: '/pictures/collections/ninethcollection/7.webp' },
  { img: '/pictures/collections/ninethcollection/8.webp' },
  { img: '/pictures/collections/ninethcollection/9.webp' },
  { img: '/pictures/collections/ninethcollection/10.webp' },
  { img: '/pictures/collections/ninethcollection/11.webp' },
  { img: '/pictures/collections/ninethcollection/12.webp' },
  { img: '/pictures/collections/ninethcollection/13.webp' },
  { img: '/pictures/collections/ninethcollection/14.webp' },
  { img: '/pictures/collections/ninethcollection/15.webp' },
];

export const tenthCollection: Collection[] = [
  { img: '/pictures/collections/tenthcollection/1.webp' },
  { img: '/pictures/collections/tenthcollection/2.webp' },
  { img: '/pictures/collections/tenthcollection/3.webp' },
  { img: '/pictures/collections/tenthcollection/4.webp' },
  { img: '/pictures/collections/tenthcollection/5.webp' },
  { img: '/pictures/collections/tenthcollection/6.webp' },
  { img: '/pictures/collections/tenthcollection/7.webp' },
  { img: '/pictures/collections/tenthcollection/8.webp' },
  { img: '/pictures/collections/tenthcollection/9.webp' },
  { img: '/pictures/collections/tenthcollection/10.webp' },
  { img: '/pictures/collections/tenthcollection/11.webp' },
  { img: '/pictures/collections/tenthcollection/12.webp' },
  { img: '/pictures/collections/tenthcollection/13.webp' },
  { img: '/pictures/collections/tenthcollection/14.webp' },
  { img: '/pictures/collections/tenthcollection/15.webp' },
];
