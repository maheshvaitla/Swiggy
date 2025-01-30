import { Card } from "@/components/Card";
import Navbar from "@/components/Navbar";


export default function Home() {

  const restaurants = [
    {
      id: "394084",
      name: "Chinese Wok",
      image: "e0839ff574213e6f35b3899ebf1fc597",
      locality: "3rd Stage",
      area: "Banashankari",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
      avgRating: 4.3,
      totalRatings: "4.5K+",
      badges: ["Best In Veg Noodles"],
      imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
    },
    {
      id: "10589",
      name: "Pizza Hut",
      image: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/757d1e19-f91a-4380-b3ac-bbdffe7dcd47_10589.jpg",
      locality: "2nd Stage",
      area: "Banashankari",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.2,
      totalRatings: "12K+",
      availability: { nextCloseTime: "2025-01-31 01:00:00", opened: true },
      imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/757d1e19-f91a-4380-b3ac-bbdffe7dcd47_10589.jpg"
    },
    {
      id: "594259",
      name: "Burger King",
      image: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/662bb58f-7b46-40e3-938a-6ca094b2677a_594259.JPG",
      locality: "3rd Stage",
      area: "Banashankari",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.3,
      totalRatings: "7.2K+",
      availability: { nextCloseTime: "2025-01-31 04:00:00", opened: true },
      badges: ["bolt!", "Best in Burger"],
      imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/662bb58f-7b46-40e3-938a-6ca094b2677a_594259.JPG"
    },
    {
      id: "290271",
      name: "Thalairaj Biryani",
      image: "qf8lwn0ehi8sgvjvsi2l",
      locality: "5th Phase",
      area: "Jayanagar",
      costForTwo: "₹300 for two",
      cuisines: ["Andhra", "Biryani", "Hyderabadi", "South Indian", "Indian", "Kebabs", "Snacks", "Beverages"],
      avgRating: 4.3,
      totalRatings: "5.6K+",
      availability: { nextCloseTime: "2025-01-30 23:00:00", opened: true },
      imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x4uyxvihmg8qa3pddkgf"
    },
    {
      id: "389325",
      name: "Nandhana Palace",
      image: "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/21/00f67cca-8318-441a-94ab-2f56f0af4ba3_389325.jpg",
      locality: "BEML Layout 5th Stage",
      area: "Banashankari",
      costForTwo: "₹600 for two",
      cuisines: ["Andhra", "Biryani", "North Indian", "Chinese", "Beverages", "Desserts"],
      avgRating: 4.2,
      totalRatings: "7.2K+",
      availability: { nextCloseTime: "2025-01-31 01:00:00", opened: true },
      badges: ["Best in Andhra"],
      imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/15/fb40dee9-b4c6-454e-8c79-dbdff33d7b36_1468.jpg"
    },
    {
      id: "924311",
      name: "Cheesecake & Co.",
      image: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/18/b1e64c1a-aca1-41c2-910c-e4226b429f43_924311.jpg",
      locality: "Kathriguppe Road",
      area: "Banashankari",
      costForTwo: "₹300 for two",
      cuisines: ["Desserts", "Bakery", "Beverages"],
      avgRating: 4.5,
      totalRatings: "193",
      availability: { nextCloseTime: "2025-01-31 00:00:00", opened: true },
      badges: ["bolt!", "Gourmet"],
      imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/18/b1e64c1a-aca1-41c2-910c-e4226b429f43_924311.jpg"
    },
    {
      id: "942723",
      name: "Olio - The Wood Fired Pizzeria",
      image: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/26/c816ca32-eb96-4524-970c-2ad6878568b0_942723.jpg",
      locality: "3rd Stage",
      area: "Banashankari",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Fast Food", "Snacks", "Beverages", "Desserts"],
      avgRating: 4.0,
      totalRatings: "118",
      availability: { nextCloseTime: "2025-01-31 06:00:00", opened: true },
      badges: ["bolt!", "Gourmet"],
      discount: "ITEMS AT ₹99",
      imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/26/c816ca32-eb96-4524-970c-2ad6878568b0_942723.jpg"
    },
    {
      id: "792606",
      name: "Shiv Sagar Signature",
      image: "75c49a5d43681cb2406227ae82f6c781",
      locality: "Basavanagudi",
      area: "Basavanagudi",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian"],
      avgRating: 4.5,
      totalRatings: "1.0K+",
      availability: { nextCloseTime: "2025-01-30 23:00:00", opened: true },
      badges: ["bolt!", "Pure Veg"],
      imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/75c49a5d43681cb2406227ae82f6c781"
    },
  ];
  
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap gap-4">
      <Card data={restaurants}/>
      
      </div>
    </>
  );
}
