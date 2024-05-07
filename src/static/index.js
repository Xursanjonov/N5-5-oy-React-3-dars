import s24img from "../assets/images/S24-Ultra.webp";
import tvimg from "../assets/images/tv-img.png";
import homeimg from "../assets/images/home-img.png";

export const productsData_1 = [
  {
    id: 1,
    name: "Mobile & Computing",
    title: "Save up to $1,040",
    price: "$1,040",
    description:
      "With Galaxy S24 Ultra, Watch6, Buds2 Pro <sup>M</sup> and instante trade-in credit <sup>0</sup>",
    img: s24img,
    bg_color: "bg-white",
    color: "text-black",
    btn1: "btn-1",
    btn2: "btn-2",
    btn1_name: "Learn more",
    btn2_name: "Buy Now",
    btnbgColor: "bg-black",
    btnColor: "text-white",
    tabs: [
      { id: 1, name: "Galaxy S24 Ultra Bundle" },
      { id: 2, name: "Galaxy S24+" },
      { id: 3, name: "Galaxy Book4 Ultra" },
      { id: 4, name: "Galaxy Tab S9 Series" },
      { id: 5, name: "Galaxy Watch6 Series" },
    ],
  },
  {
    id: 2,
    name: "TV & Audio",
    title: "Our best-of-the-best audio",
    description:
      "Experience pure auditory elevation with the powerful new Q990D soundbar, featuring Wireless Dolby Atmos.",
    img: tvimg,
    bg_color: "bg-black",
    color: "text-white",
    btn1: false,
    btn2: "btn-2",
    btn2_name: "Buy Now",
    btnbgColor: "bg-white",
    btnColor: "text-black",
    tabs: [
      { id: 1, name: "Q990D Soundbar" },
      { id: 2, name: 'Crystal UHD DU9000 98"' },
      { id: 3, name: "Music Frame" },
    ],
  },
  {
    id: 3,
    name: "Home Appliances",
    title: "Our best-of-the-best audio",
    description:
      "Experience pure auditory elevation with the powerful new Q990D soundbar, featuring Wireless Dolby Atmos.",
    img: homeimg,
    bg_color: "bg-white",
    color: "text-black",
    btn1: "btn-1",
    btn2: "btn-2",
    btn1_name: "Learn more",
    btn2_name: "Buy Now",
    btnbgColor: "bg-black",
    btnColor: "text-white",
    tabs: [
      { id: 1, name: "Bundle deals" },
      { id: 2, name: ' Bespoke Refrigerators"' },
      { id: 3, name: " Bespoke Laundry" },
    ],
  },
];
