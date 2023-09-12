export type UserData = {
  id: string;
  email: string;
  username: string;
  event_ids?: string[];
};

export type EventItem = {
  id: string;
  artist: string;
  place: string;
  datetime: string;
  setlist: string;
};
