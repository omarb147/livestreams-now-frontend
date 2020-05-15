import { ILivestream } from '@/type/types';

export const liveStreamsBackToFrontMapper = (livestreams: any): ILivestream[] => livestreams.map((livestream: any) => ({
  id: livestream.id,
  livestreamUrl: livestream.livestreamUrl || undefined,
  title: livestream.title,
  description: livestream.description || undefined,
  date: new Date(livestream.date).toDateString() || undefined,
  time: livestream.time || undefined,
  imageUrl: livestream.imageUrl || undefined,
  extra: livestream.extra || null,
}));
