import { GalleryItem } from "@/app/types/types";

export const GalleryItems: GalleryItem[] = [
     {
    id: 1,
    title: "Mountain Retreat",
    description: "Serene mountain landscape at sunset",
    imageUrl: "/lolu_look.jpg",
    size: "large"
  },
  {
    id: 2,
    title: "Coastal Waves",
    description: "Ocean waves crashing against rocky shore",
    imageUrl: "/almost_kissing.jpg",
    size: "tall"
  },
  {
    id: 3,
    title: "Desert Dunes",
    description: "Golden sand dunes at dawn",
    imageUrl: "/kiss_shoulder.jpg",
    size: "medium"
  },
  {
    id: 4,
    title: "Forest Path",
    description: "Misty forest trail in autumn",
    imageUrl: "/shoe_exchange.jpg",
    size: "small"
  },
  {
    id: 5,
    title: "Urban Skyline",
    description: "City skyline at night with lights",
    imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    size: "small"
  },
  {
    id: 6,
    title: "Tropical Paradise",
    description: "Palm trees and clear blue water",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    size: "wide"
  },
  {
    id: 7,
    title: "Snowy Peaks",
    description: "Snow-capped mountain peaks",
    imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    size: "medium"
  },
  {
    id: 8,
    title: "Autumn Colors",
    description: "Vibrant fall foliage by a lake",
    imageUrl: "https://images.unsplash.com/photo-1508669232496-137b159c1cdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    size: "small"
  },
  {
    id: 9,
    title: "Autumn Colors",
    description: "Vibrant fall foliage by a lake",
    imageUrl: "https://images.unsplash.com/photo-1508669232496-137b159c1cdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    size: "medium"
  },
  {
    id: 10,
    title: "Autumn Colors",
    description: "Vibrant fall foliage by a lake",
    imageUrl: "https://images.unsplash.com/photo-1508669232496-137b159c1cdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    size: "small"
  }
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
        return 'md:col-span-1';
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'tall':
        return 'md:row-span-2';
      case 'wide':
        return 'md:col-span-2';
      default:
        return '';
    }
  };