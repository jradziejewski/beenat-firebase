"use client";
import { Button } from "@/components/ui/button";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { addData } from "@/firebase/firestore";
import { EventItem } from "@/types";
import Link from "next/link";

export default function Page() {
  const user = useAuthContext();
  const router = useRouter();

  async function handleAddData() {
    const data: EventItem = {
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
      <div className="w-full h-full flex items-center flex-col justify-center">
        <h1>Welcome to your profile!</h1>
        <Link href="/dashboard/see">
          <Button variant="link">See your events</Button>
        </Link>
        <Link href="/dashboard/add">
          <Button variant="link">Add event</Button>
        </Link>
        <Button onClick={handleAddData}>Add Data</Button>
      </div>
    );
}
