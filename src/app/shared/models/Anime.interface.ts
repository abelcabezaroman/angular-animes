export interface AnimeInterface {
  attributes: AttributesInterface;
}

interface AttributesInterface {
  posterImage: ImageInterface;
  canonicalTitle: string;
  averageRating: string;
}

interface ImageInterface {
  original: string;
}
