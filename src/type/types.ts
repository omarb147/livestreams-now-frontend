export interface ILivestreamState {
  livestreams: ILivestream[];
  loading: boolean;
  error: boolean;
}

export interface ILivestream {
  id: string;
  title: string;
  description?: string;
  date: string;
  livestreamUrl: string;
  ImageUrl?: string;
}

export interface IState {
  livestreamState: ILivestreamState;
}
