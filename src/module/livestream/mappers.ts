import { ILivestream } from '@/type/types';

export const liveStreamsBackToFrontMapper = (livestreams: any): ILivestream[] => livestreams.map((livestream: any) => ({
  id: livestream.id,
  livestreamUrl: livestream.linkToStream || undefined,
  title: livestream.artist || undefined,
  description: livestream.description || undefined,
  date: livestream.date || undefined,
  imageUrl: undefined,
}));
