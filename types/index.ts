export type UserData = {
  id: string;
  email: string;
  username: string;
  event_ids?: string[];
};

export type EventItem = {
  artist: string;
  place: string;
  id?: string;
};
