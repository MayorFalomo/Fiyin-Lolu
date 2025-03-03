export interface NavbarType {
    id: number;
    title: string;
    path: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  size: 'small' | 'medium' | 'large' | 'tall' | 'wide';
}

export interface FaqType {
  id: number;
  question: string;
  answer: string;
  title?: string;
}