"use client";
import supabase from "../config/supabaseClient";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

const GetUser = () => {
  const { isLoaded, isSignedIn, user } = useUser();

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

  return (
    <div>
      {!isLoaded && <h1>Loading...</h1>}

      {isLoaded && isSignedIn && (
        <h1>
          <span className="text-white/50">Hello, </span>
          {user.username
            ? user.username.charAt(0).toUpperCase() + user.username.slice(1)
            : user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1)}
          <span className="text-white/50">!</span>
        </h1>
      )}
    </div>
  );
};

export default GetUser;
