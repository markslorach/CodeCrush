'use client'
import { useEffect, useState } from "react";
import supabase from "@/app/config/supabaseClient";

export const revalidate = 0;

export default function Leaderboard() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // Get all players in the data base and order them by score
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
  }, [players]);

  return (
    <div>
      <h1>Leaderboard</h1>
    
      {players.map((player, idx) => (
        <p>
          {idx + 1} {player.username} {player.score}
        </p>
      ))}
    </div>
  );
}
