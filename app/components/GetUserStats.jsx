// Import the same dependencies as the CurrentUser component
"use client";
import supabase from "../config/supabaseClient";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

// Components
import StatCard from "../dashboard/UserStatCard";

export default function GetUserStats() {
  const { isSignedIn, user, isLoaded } = useUser();
  const [player, setPlayer] = useState(null);
  const [players, setPlayers] = useState(null);

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
      <div className="flex justify-between">
        <StatCard title={`Score`} value={player?.score ?? 0} />
        <StatCard title={`Streak`} value={player?.streak ?? 0} />
        <StatCard title={`Leaderboard`} value={playerPlace} />
      </div>
    );
  }
}
