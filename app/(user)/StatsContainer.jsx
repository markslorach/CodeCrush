"use client";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";

// Icons
import { FaStar } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa";
import { BsFillLightningChargeFill } from "react-icons/bs";

// Components
import StatCard from "./StatCard";

export default function StatsContainer() {
  const { user } = useUser();
  const [player, setPlayer] = useState([]);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const getPlayer = async () => {
      if (user) {
        // Check if player already exists in the database
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
    getPlayer();
    getAllPlayers();
  }, [user]);

  if (user && player && players) {
    // Get the index of the current player in the players array
    const playerIndex = players.findIndex((p) => p.user_id === user.id) ?? -1;
    // Get the place of the current player in the leaderboard
    let playerPlace = `${playerIndex + 1}`;

    return (
      <section className="mt-10 mb-20">
        <h2 className="mb-5">Stats</h2>
        <div className="flex justify-around gap-5">
          <StatCard
            title={`Score`}
            value={player.score ?? 0}
            icon={<FaStar />}
          />
          <StatCard
            title={`Streak`}
            value={player.streak ?? 0}
            icon={<BsFillLightningChargeFill />}
          />
          <StatCard
            title={`Rank`}
            value={playerPlace ?? 0}
            icon={<FaTrophy />}
          />
        </div>
      </section>
    );
  }
}
