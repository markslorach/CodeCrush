"use client";
import supabase from "../config/supabaseClient";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

export default function GetUser() {
  const { isSignedIn, user } = useUser();

  useEffect(() => {
    const addPlayer = async () => {
      // Check if player already exists in the database.
      if (user) {
        let { data: player, error } = await supabase
          .from("players")
          .select()
          .eq("user_id", user.id)
          .single();

        if (error) {
          console.log(error);
        }

        // If player doesn't exist, insert them into the database.
        if (!player) {
          const { error } = await supabase
            .from("players")
            .insert([
              {
                name: user.firstName,
                user_id: user.id,
                score: 0,
                streak: 0,
                answered: 0,
              },
            ])
            .select();

          if (error) {
            console.log(error);
          }
        }
      }
    };
    addPlayer();
  }, []);

  if (isSignedIn) {
    return <h1>{`Hello, ${user.firstName}.`}</h1>;
  }
}
