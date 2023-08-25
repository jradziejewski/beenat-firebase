"use client";
import { Button } from "@/components/ui/button";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import addData from "@/firebase/firestore/addData";
import getData from "@/firebase/firestore/getData";
import { useEffect, useState } from "react";
import { EventItem } from "@/types";

export default function Page() {
  const [event, setEvent] = useState<Array<EventItem>>([]);
  const user = useAuthContext();
  const router = useRouter();

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

      setEvent(events);
    }

    getEventData();
  }, []);

  async function handleAddData() {
    const data = {
      artist: "Ghost",
      place: "Gdansk",
    };
    const { result, error } = await addData("event", data);

    if (error) {
      return console.log(error);
    }

    console.log(result);
  }

  if (user == null) {
    router.push("/login");
  } else
    return (
      <div className="w-full h-full flex items-center justify-center">
        <h1>Welcome to your profile!</h1>
        <Button onClick={handleAddData}>Add Data</Button>
        <div>
          {event ? (
            <div>
              {event.map((key) => {
                return <div key={key.id}>{key.artist}</div>;
              })}
            </div>
          ) : (
            <span>Loading...</span>
          )}
        </div>
      </div>
    );
}
