export interface ILivestreamState {
  livestreams: ILivestream[];
  loading: boolean;
  error: boolean;
  searchQuery: string;
}

export interface ILivestream {
  id: string;
  title: string;
  description?: string;
  date: string;
  livestreamUrl: string;
  imageUrl?: string;
}

export interface IState {
  livestreamState: ILivestreamState;
}
