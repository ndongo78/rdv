import React, { useState, useEffect, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { CameraView } from "expo-camera";
import { Video } from "expo-av";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { useNavigation } from 'expo-router';
import {useLive} from "@/hooks/StoreProvider"
const LiveScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [title, setTitle] = useState("");
  const [isLive, setIsLive] = useState(false);
  const drawerRef=useRef(null)
  const navigation = useNavigation();
  const {socket} = useLive()
  //console.log("socket", socket)
 useEffect(() => {
   socket.current.emit("")
   
 }, [])
 

const openDraw=()=>navigation.openDrawer();
  return (
    <GestureHandlerRootView 
    className="flex-1"
    >
   
    <View className="flex-1 bg-black">
      {/* Caméra en arrière-plan */}
      <CameraView  className="absolute top-0 left-0 right-0 bottom-0" facing={"front"} />

      {/* Header avec l'heure et infos live */}
      <View className="absolute top-2 left-5 right-5 flex-row justify-between items-center">
         <TouchableOpacity className="ml-2">
            <Image source={{uri: "https://picsum.photos/200/300"}} className="w-5 h-5" />
          </TouchableOpacity>
        <TouchableOpacity onPress={openDraw} className="flex-row items-center">
        <Text className="text-white text-lg">13:13</Text>
        <View className="flex-row items-center bg-black/50 px-3 py-1 rounded-lg">
          <Text className="text-white text-sm">0:00M</Text>
         </View>
        </TouchableOpacity>
      </View>

      {/* Cercle de profil avec pseudo */}
      <View className="absolute top-1/3 left-1/2 -translate-x-1/2 flex items-center">
        <View className="w-16 h-16 border-2 border-green-500 rounded-full flex items-center justify-center">
          <Image source={{ uri: "https://via.placeholder.com/150" }} className="w-14 h-14 rounded-full" />
        </View>
        <Text className="text-white text-lg mt-2">Ninhosdt</Text>
      </View>

      {/* Message d'arrivée en bas */}
      <View className="absolute bottom-20 left-5 right-5 flex-row items-center bg-green-800/70 px-3 py-2 rounded-lg">
        <Image source={{ uri: "https://via.placeholder.com/50" }} className="w-8 h-8 rounded-full" />
        <Text className="text-white ml-2">Ninhosdt vient d’arriver dans le live</Text>
      </View>

      {/* Input et boutons */}
      <View className="absolute bottom-5 left-5 right-5 flex-row items-center">
        <TouchableOpacity className="bg-green-700 p-3 rounded-full">
          <Image source={{ uri: "https://via.placeholder.com/150" }} className="w-6 h-6" />
        </TouchableOpacity>
        <TextInput
          placeholder="Envoyer un message"
          placeholderTextColor="white"
          className="flex-1 bg-white/20 text-white p-3 ml-3 rounded-lg"
        />
      </View>
    </View>

    </GestureHandlerRootView>
  );
};

export default LiveScreen;
