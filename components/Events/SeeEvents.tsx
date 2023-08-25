import { getData } from "@/firebase/firestore";
import { EventItem } from "@/types";
import React, { useEffect, useState } from "react";

export default function SeeEvents() {
  const [events, setEvents] = useState<Array<EventItem>>([]);

  useEffect(() => {
    async function getEventData() {
      const { resultArr, error } = await getData("event");

      if (error) {
        return console.log(error);
      }

      const events: Array<EventItem> = resultArr.map((item: EventItem) => ({
        id: item.id,
        artist: item.artist,
        place: item.place,
      }));

      setEvents(events);
    }

    getEventData();
  }, []);

  return (
    <div>
      SeeEvent
      <div>
        {events ? (
          <div>
            {events.map((key) => {
              return (
                <div key={key.id}>
                  <span className="text-5xl">{key.artist}</span> in{" "}
                  <p>{key.place}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <span>Loading...</span>
        )}
      </div>
    </div>
  );
}
