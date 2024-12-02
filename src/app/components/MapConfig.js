const GOOGLE_MAP_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || 'defaultApiKey';

export const mapOptions = {
    googleMapApiKey: GOOGLE_MAP_API_KEY,
};