"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { addData, pushEventToUserCollection } from "@/firebase/firestore";
import { useAuthContext } from "@/context/AuthContext";

const formSchema = z.object({
  artist: z.string().min(0).max(50),
  place: z.string().min(0).max(50),
  datetime: z.string().min(0).max(50),
  setlist: z.string().min(0).max(50),
});

export default function AddEvent() {
  const user = useAuthContext();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const event_id = `${values.artist}-${values.place}-${values.datetime}`;

    const data = {
      id: event_id,
      artist: values.artist,
      place: values.place,
      datetime: values.datetime,
      setlist: values.setlist,
    };
    const { result, error } = await addData("event", data);

    if (user?.uid) await pushEventToUserCollection(event_id, user?.uid);

    if (error) {
      return console.log(error);
    }

    console.log(result);

    window.location.reload();
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      artist: "",
      place: "",
      datetime: "",
      setlist: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="artist"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Artist</FormLabel>
              <FormControl>
                <Input placeholder="Artist" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="place"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Place</FormLabel>
              <FormControl>
                <Input placeholder="Place" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="datetime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date</FormLabel>
              <FormControl>
                <Input placeholder="Date" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="setlist"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Setlist</FormLabel>
              <FormControl>
                <Input placeholder="Setlist" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
