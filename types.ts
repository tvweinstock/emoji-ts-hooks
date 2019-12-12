export interface EmojiVendor {
  name: string;
  imageUrl: string;
}

export interface Emoji {
  objectID: string;
  name: string;
  value: string;
  url: string;
  category: string;
  categoryUrl: string;
  description: string;
  vendors: EmojiVendor[];
}
