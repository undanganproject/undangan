export interface Comment {
  id: string;
  name: string;
  email?: string;
  text: string;
  timestamp: string | Date;
  isAdmin?: boolean;
}

export interface RSVPResponse {
  name: string;
  status: 'hadir' | 'tidak_hadir';
  guestsCount: number;
}
