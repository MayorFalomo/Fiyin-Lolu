import { GalleryItem } from "@/app/types/types";

export const GalleryItems: GalleryItem[] = [
     {
    id: 1,
    title: "Mountain Retreat",
    description: "Serene mountain landscape at sunset",
    imageUrl: "/lolu_look.webp",
    size: "large"
  },
  {
    id: 2,
    title: "Coastal Waves",
    description: "Ocean waves crashing against rocky shore",
    imageUrl: "/almost_kissing.webp",
    size: "tall"
  },
  {
    id: 3,
    title: "Desert Dunes",
    description: "Golden sand dunes at dawn",
    imageUrl: "/entrance.webp",
    size: "medium"
  },
  {
    id: 4,
    title: "Forest Path",
    description: "Misty forest trail in autumn",
    imageUrl: "/shoe_exchange.webp",
    size: "small"
  },
  {
    id: 5,
    title: "Urban Skyline",
    description: "City skyline at night with lights",
    imageUrl: "/flower_ring.webp",
    size: "small"
  },
  {
    id: 6,
    title: "Tropical Paradise",
    description: "Palm trees and clear blue water",
    imageUrl: "/lolu_look.webp",
    size: "tall"
  },
  {
    id: 7,
    title: "Snowy Peaks",
    description: "Snow-capped mountain peaks",
    imageUrl: "/smells_her.webp",
    size: "large"
  },
  {
    id: 8,
    title: "Autumn Colors",
    description: "Vibrant fall foliage by a lake",
    imageUrl: "/entrance.webp",
    size: "medium"
  },
  {
    id: 9,
    title: "Autumn Colors",
    description: "Vibrant fall foliage by a lake",
    imageUrl: "/smiling_faces.webp",
    size: "medium"
  },
  {
    id: 10,
    title: "Autumn Colors",
    description: "Vibrant fall foliage by a lake",
    imageUrl: "/walking.webp",
    size: "medium"
  },
  {
    id: 11,
    title: "Autumn Colors",
    description: "Vibrant fall foliage by a lake",
    imageUrl: "back_to_wall.webp",
    size: "tall"
  },
  {
    id: 12,
    title: "Autumn Colors",
    description: "Vibrant fall foliage by a lake",
    imageUrl: "/rest_on_him.webp",
    size: "medium"
  },
  {
    id: 13,
    title: "Autumn Colors",
    description: "Vibrant fall foliage by a lake",
    imageUrl: "/hero.webp",
    size: "small"
  },
  {
    id: 14,
    title: "Autumn Colors",
    description: "Vibrant fall foliage by a lake",
    imageUrl: "/ring_showing.webp",
    size: "small"
  },
  {
    id: 15,
    title: "Autumn Colors",
    description: "Vibrant fall foliage by a lake",
    imageUrl: "/waist_held.webp",
    size: "small"
  },
]

 // Function to determine the height based on item size
 export const getItemHeight = (size: string): string => {
    switch (size) {
      case 'small':
        return '200px';
      case 'medium':
        return '280px';
        case 'tall':
            return '500px';
            case 'wide':
                return '400px';
                case 'large':
                  return '500px';
      default:
        return '250px';
    }
};
  
 // Function to get grid classes based on item size
 export const getGridClasses = (size: string): string => {
    switch (size) {
      case 'small':
        return '';
      case 'medium':
        return 'sm:col-span-1';
      case 'large':
        return 'sm:col-span-2 md:row-span-2';
      case 'tall':
        return 'sm:row-span-2';
      case 'wide':
        return 'sm:col-span-2';
      default:
        return '';
    }
  };