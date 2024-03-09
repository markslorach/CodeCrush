"use client";
import { createContext, useContext, useState, useEffect } from "react";
import supabase from "../config/supabaseClient";
import { useUser } from "@clerk/nextjs";

const PlayerContext = createContext();

export const usePlayer = () => {
  return useContext(PlayerContext);
};

export const PlayerProvider = ({ children }) => {
  const { user } = useUser();
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    const getPlayer = async () => {
      if (user) {
        const { data, error } = await supabase
          .from("players")
          .select()
          .eq("user_id", user.id)
          .single();

        if (error) {
          console.log(error);
        }
        if (data) {
          setPlayer(data);
        }
      }
    };
    getPlayer();
  }, [user, player]);

  return (
    <PlayerContext.Provider value={player}>{children}</PlayerContext.Provider>
  );
};
