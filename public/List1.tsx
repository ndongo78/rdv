import React, { useState, useRef, useEffect } from "react";
import { View, TextInput, TouchableOpacity, Text, FlatList, Image } from "react-native";
import { CameraView , useCameraPermissions } from "expo-camera";
import {io} from "socket.io-client"
import {router } from "expo-router"
import uuid from "react-native-uuid"
import {useLive} from '@/hooks/StoreProvider'
import {plats} from "@/public/plats"
import { Dimensions } from "react-native";
import {View as RNMotionView, Image as RNImage, Text as RNText} from "moti";
import {SafeAreaView} from "react-native-safe-area-context"
const { height } = Dimensions.get("window");
const ITEM_HEIGHT = height * 0.45;
const SPACING = 10;
const LiveScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectItem, setSelectedItem] = useState(null)
  const flatListRef = useRef(null);

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      console.log("view item", viewableItems)
      setSelectedItem(viewableItems[0].item)
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;
//console.log("selectItem", sele)
  return (
    <SafeAreaView className="flex-1 bg-black ">
      <View className="flex-1 flex-row justify-center items-center">
      <FlatList
        ref={flatListRef}
        data={plats}
        snapToAlignment="center"
        snapToInterval={ITEM_HEIGHT + SPACING}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        decelerationRate="normal" // 👈 Change "fast" en "normal" pour éviter un effet trop rapide
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
        onViewableItemsChanged={onViewableItemsChanged}
        getItemLayout={(data, index) => ({
          length: ITEM_HEIGHT + SPACING,
          offset: (ITEM_HEIGHT + SPACING) * index,
          index,
        })}
        initialScrollIndex={Math.floor(plats.length/5)}
        contentContainerStyle={{ paddingVertical: height * 0.4 }}
        renderItem={({ item, index }) => (
          <RNMotionView
               from={{
        translateY: 300,
        opacity: 0,
      }}
      animate={{
        translateY: 0,
        opacity: 1,
        //direction: 'ltr',
      }}
      transition={{
        type: 'timing',
        //delay: 600,
        duration: 1000 * index
      }}
            className={`w-[80%] h-[${ITEM_HEIGHT}px] my-4 flex justify-center items-center rounded-full ${
              index === currentIndex ? "bg-red-500" : "bg-transparent"
            }`}
          >
            <Image
              source={item.image}
              className="w-32 h-32"
              resizeMode="contain"
            />
          </RNMotionView>
        )}
      />
      <RNMotionView className="bg-green-600 w-32 h-32 rounded-full absolute left-0 -z-50" />
      <View>
        <RNImage
  from={{
    translateX: -200,
    opacity: 0,
    rotate: '0deg',
  }}
  animate={{
    translateX: 0,
    opacity: 1,
    rotate: '360deg', // Tourne sur elle-même
  }}
  transition={{
    type: 'timing',
   // delay: 500,
    duration: 500, // Durée totale de l'animation
   // loop: true, // Répète indéfiniment
  }}
 source={selectItem?.image}
  className="w-64 h-64 self-center"
  resizeMode="contain"
/>
      </View>
      </View>
    </SafeAreaView>
  );
};

export default LiveScreen;

