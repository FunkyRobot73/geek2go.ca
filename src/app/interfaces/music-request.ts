// models/music-request.model.ts
export interface MusicRequest {
  id?: number;
  customerId: number;
  phaseId: number;
  songOrder: number;
  artist: string;
  title: string;
  youtubeUrl?: string;
  specialInstructions?: string;
  isSpecialDance?: boolean;
  danceType?: string;
}

export interface EventPhase {
  id: number;
  name: string;
  description: string;
  maxSongs: number;
}

export interface SpecialDanceType {
  id: number;
  name: string;
  description: string;
}