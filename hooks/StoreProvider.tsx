import React, { createContext, useState, ReactNode, useContext, useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client"; 
import uuid from "react-native-uuid"
import axios from "axios";

export const API_URL="http://192.0.0.4:3005"
// Définition du type pour currentLive
interface LiveContextType {
  currentLive: string | null;
  setCurrentLive: (title: string | null) => void;
  socket: Socket | null;
}

// Création du contexte avec une valeur par défaut
const LiveContext = createContext<LiveContextType | undefined>();

// Provider pour englober l'application
export const LiveProvider = ({ children }: { children: ReactNode }) => {
  const [currentLive, setCurrentLive] = useState<string | null>(null);
  const socket = useRef<Socket | null>(null);

  useEffect(() => {
    socket.current = io(API_URL);
   // console.log("server", socket.current)

    socket.current.on("connect", () => {
      console.log("Connecté au serveur", socket.current?.id);
    });

    // Nettoyage à la fermeture
    return () => {
      socket.current?.disconnect();
    };
  }, [socket]);
  
  const handleCreateLive=async()=>{
    try {
      const currentLive = {
  roomTitle: "hello",
  roomId: uuid.v4(),
  roomArticles: [],
  userHost: {
    uid: "cpqIR3rwxtSbbIYAzyqLCnmAHfX2",
    username: "john_doe",
    imageProfile: "http://example.com/profile.jpg",
    email: "john@example.com",
    bio: "Développeur passionné",
    agoraId: "agoraId",
    isHost: true
  },
  isPro: true,
  users: [],
  tags: ["tech", "coding"],
  roomImage: "http://example.com/room.jpg"
};
  const response= await axios.post(`${application}/api/live/create`)
  console.log(response.data)
    } catch (error) {
      console.log("eerr",error)
    }
  }

  return (
    <LiveContext.Provider value={{ 
      currentLive, setCurrentLive, 
      socket,handleCreateLive
    }}>
      {children}
    </LiveContext.Provider>
  );
};

// Custom hook pour utiliser le contexte
export const useLive = () => {
  const context = useContext(LiveContext);
  if (!context) {
    throw new Error("useLive doit être utilisé dans un LiveProvider");
  }
  return context;
};
