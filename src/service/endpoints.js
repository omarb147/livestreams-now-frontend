import axios from 'axios';
import { LIVESTREAMS_ENDPOINT } from './api';

export const fetchLivestreamsEndpoint = () => axios.get(LIVESTREAMS_ENDPOINT).then((res) => res.data);
