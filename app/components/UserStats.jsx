// Import the same dependencies as the CurrentUser component
"use client";
import supabase from "../config/supabaseClient";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

// Define a custom card component that takes a title and a value as props
function Card({ title, value }) {
  return (
    <div className="bg-white/10 p-4 rounded-lg shadow-lg">
      <h3 className="text-black/80 text-xl">{title}</h3>
      <p className="text-black/90 text-2xl font-bold">{value}</p>
    </div>
  );
}

export default function UserStats() {
  const { isSignedIn, user, isLoaded } = useUser();
  const [player, setPlayer] = useState(null);
  const [players, setPlayers] = useState(null);

  // Use the same useEffect hooks as the CurrentUser component to fetch the player and players data
  useEffect(() => {
    const getPlayer = async () => {
      if (user) {
        // Check if user already exists in the database
        let { data: player, error } = await supabase
          .from("players")
          .select()
          .eq("user_id", user.id)
          .single();

        if (error) {
          console.log(error);
        }
        setPlayer(player);
      }
    };
    getPlayer();

    const getAllPlayers = async () => {
      let { data, error } = await supabase
        .from("players")
        .select()
        .order("score", { ascending: false })
        .select();
      if (error) {
        console.log(error);
      }
      if (data) {
        setPlayers(data);
      }
    };
    getAllPlayers();
  }, [user]); // Run the effect only when the user changes

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  if (isSignedIn) {
    // Get the index of the current player from the players array
    const playerIndex = players?.findIndex((p) => p.user_id === user.id) ?? -1;
    // Get the place of the current player in the leaderboard
    let playerPlace = `${playerIndex + 1}`;

    return (
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-black/90 text-2xl">Your Stats</h2>
        <div className="flex flex-row items-center gap-4">
          <Card title="Score" value={player?.score ?? 0} />
          <Card title="Streak" value={player?.streak ?? 0} />
          <Card title="Place" value={playerPlace} />
        </div>
      </div>
    );
  }
}
