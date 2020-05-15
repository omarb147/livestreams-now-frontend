export interface ILivestreamState {
  livestreams: ILivestream[];
  loading: boolean;
  error: boolean;
  searchQuery: string;
}

export interface ILivestream {
  id: string;
  title: string;
  time: string;
  description?: string;
  date: string;
  livestreamUrl: string;
  imageUrl?: string;
  extra?: string;
}

export interface IState {
  livestreamState: ILivestreamState;
}

export interface ISortedLiveStreams {
  [index: string]: ILivestream[];
}
