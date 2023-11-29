import { HomeIcon, Location } from "../assets/icons";
import {
  Apple,
  Beef,
  ChickenBreast,
  Eggs,
  Garlic,
  Hero,
  Melon,
  Paprika,
  ShoppingNow1,
  ShoppingNow2,
  SweetCorn,
} from "../assets/images";

export const topCards = [
  {
    prefix: Location,
    label: "Lokasi Toko",
    content: "Bandung",
    description: "R.E. Martadinata",
  },
  {
    prefix: HomeIcon,
    label: "Dikirim Ke",
    content: "Alamat Rumah",
    description: "Buah Batu",
  },
];

export const heroCarouselData = [
  {
    id: 1,
    image: Hero,
  },
  {
    id: 2,
    image: Hero,
  },
  {
    id: 3,
    image: Hero,
  },
];

export const shoppingNowData = [
  {
    id: 1,
    image: ShoppingNow1,
    title: "Grocery Store",
    description: "Belanja makanan segar dengan beberapa klik",
    buttonText: "Belanja Sekarang",
  },
  {
    id: 2,
    image: ShoppingNow2,
    title: "Ready-To-Eat",
    description: "Berbagai menu Ready-to-Eat dari resep warga",
    buttonText: "Belanja Sekarang",
  },
];

export const freshProducts = [
  {
    id: 1,
    image: ChickenBreast,
    title: "Dada Ayam Tanpa Kulit 0.45Kg",
    price: "Rp 7,700 / Each",
    discount: 30,
    discountedPrice: 9000,
    total: 34600,
  },
  {
    id: 2,
    image: Apple,
    title: "Pacific Rose Apel",
    price: "Rp5,800 / 100 g",
    discount: 0,
    discountedPrice: 0,
    total: 11600,
  },
  {
    id: 3,
    image: SweetCorn,
    title: "Jagung Manis Kulit 1 Paket",
    price: "Rp 1,700 / 100 g",
    discount: 0,
    discountedPrice: 0,
    total: 16900,
  },
  {
    id: 4,
    image: Beef,
    title: "Daging Rendang Reguler 1 Paket",
    price: "Rp 15,700 / 100 g",
    discount: 0,
    discountedPrice: 0,
    total: 706000,
  },
  {
    id: 5,
    image: Melon,
    title: "Golden Melon",
    price: "Rp 1,900 / 100 g",
    discount: 3,
    discountedPrice: 39000,
    total: 37500,
  },
  {
    id: 6,
    image: Paprika,
    title: "Naturally Grown Paprika Kuning",
    price: "Rp 8,000 / 100 g",
    discount: 0,
    discountedPrice: 0,
    total: 16000,
  },
];

export const specialProducts = [
  {
    id: 1,
    image: Garlic,
    title: "Bawang Putih Honan 1kg",
    price: "Rp 4,000 / 1kg",
    discount: 10,
    discountedPrice: 40000,
    total: 36000,
  },
  {
    id: 2,
    image: Eggs,
    title: "Telur Ayam Negeri Curah 0.25kg ",
    price: "Rp 24,000 / 1kg",
    discount: 30,
    discountedPrice: 9000,
    total: 6000,
  },
];
