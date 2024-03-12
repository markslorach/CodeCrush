"use client";
import React, { useEffect, useState } from "react";
import supabase from "@/app/config/supabaseClient";

export const revalidate = 0;

export default function Leaderboard() {
  const [players, setPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Start as loading
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAllPlayers = async () => {
      try {
        // Optional Small Delay:
        await new Promise((resolve) => setTimeout(resolve, 300));

        let { data, error } = await supabase
          .from("players")
          .select()
          .order("score", { ascending: false });

        if (error) throw error;

        setPlayers(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    getAllPlayers();
  }, []);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error fetching players: {error.message}</div>}

      {!isLoading &&
        !error &&
        players.map((player, idx) => (
          <p key={player.id}>
            {idx + 1} {player.username} {player.score}
          </p>
        ))}
    </div>
  );
}
