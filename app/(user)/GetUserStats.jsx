"use client";
import supabase from "../config/supabaseClient";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

// Icons
import { FaStar } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa";
import { BsFillLightningChargeFill } from "react-icons/bs";

// Components
import StatCard from "./UserStatCard";

export default function GetUserStats() {
  const { isSignedIn, user, isLoaded } = useUser();
  const [player, setPlayer] = useState(null);
  const [players, setPlayers] = useState(null);

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
    getPlayer();

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
  }, [user]);

  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
    // Get the index of the current player in the players array
    const playerIndex = players?.findIndex((p) => p.user_id === user.id) ?? -1;
    // Get the place of the current player in the leaderboard
    let playerPlace = `${playerIndex + 1}`;

    return (
      <div className="my-10">
        <div className="flex justify-around gap-5">
          <StatCard
            title={`Score`}
            value={player?.score ?? 0}
            icon={<FaStar />}
          />
          <StatCard
            title={`Streak`}
            value={player?.streak ?? 0}
            icon={<BsFillLightningChargeFill />}
          />
          <StatCard title={`Rank`} value={playerPlace} icon={<FaTrophy />} />
        </div>
      </div>
    );
  }
}
