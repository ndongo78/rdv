import React, { useState, useRef, useEffect } from "react";
import {View, TextInput, TouchableOpacity, Text, FlatList, Image, Pressable,} from "react-native";
import { CameraView , useCameraPermissions } from "expo-camera";
import {io} from "socket.io-client"
import {router } from "expo-router"
import uuid from "react-native-uuid"
import {useLive} from '@/hooks/StoreProvider'
import {plats} from "@/public/plats"
import { Dimensions } from "react-native";
import {View as RNMotionView, Image as RNImage, Text as RNText} from "moti";
import {SafeAreaView} from "react-native-safe-area-context"
import Animated, {useSharedValue, useAnimatedStyle, withTiming, Keyframe,Easing} from 'react-native-reanimated';
import {IconSymbol} from "@/components/ui/IconSymbol";
import {FontAwesome6, Ionicons} from "@expo/vector-icons"
const AnimatedImage = ({ selectedItem }: any) => {
    const scale = useSharedValue(0);
    const opacity = useSharedValue(0);

    useEffect(() => {
        // Animation à chaque changement d'élément sélectionné
        scale.value = withTiming(1, { duration: 500 });
        opacity.value = withTiming(1, { duration: 500 });

        return () => {
            scale.value = withTiming(0.5, { duration: 500 });
            opacity.value = withTiming(0, { duration: 500 });
        };
    }, [selectedItem]);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
        opacity: opacity.value,
    }));

    return (
        <Animated.View style={[animatedStyle, { position: 'absolute', top: 50, alignSelf: 'center' }]}>
            <Image source={selectedItem?.image} style={{ width: 150, height: 150 }} resizeMode="contain" />
        </Animated.View>
    );
};

const { height } = Dimensions.get("window");
const ITEM_HEIGHT = height * 0.35;
const SPACING = 10;

const LiveScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectItem, setSelectedItem] = useState(null)
    const [cart, setCart] = useState<any>([]);
    const [isShow, setIsShow] = useState(false);
  const flatListRef = useRef(null);
    const enteringAnimation = new Keyframe({
        0: {
            opacity: 0,
            transform: [
                { translateY: 50 },
                { rotate: '820deg' },
                { skewX: '0deg' },
                { scale: 0 },
            ],
        },
        50: {
            opacity: 0.5,
            transform: [
                { translateY: 25 },
                { rotate: '-180deg' },
                { skewX: '30deg' },
                { scale: 0.5 },
            ],
            easing: Easing.out(Easing.quad),
        },
        100: {
            opacity: 1,
            transform: [
                { translateY: 0 },
                { rotate: '0deg' },
                { skewX: '0deg' },
                { scale: 1 },
            ],
        },
    }).duration(1000);

    const exitingAnimation = new Keyframe({
        0: {
            opacity: 1,
            transform: [{ translateY: 0 }, { rotateZ: '0deg' }],
        },
        10: {
            opacity: 1,
            transform: [{ translateY: 25 }, { rotateZ: '0deg' }],
            easing: Easing.exp,
        },
        50: {
            opacity: 0.5,
            transform: [{ translateY: -100 }, { rotateZ: '60deg' }],
        },
        100: {
            opacity: 0,
            transform: [{ translateY: -300 }, { rotateZ: '120deg' }],
        },
    }).duration(1000);

    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            // Trouver l'élément le plus proche du centre
            const centerIndex = viewableItems.reduce((prev, curr) => {
                return Math.abs(curr.index - plats.length / 2) < Math.abs(prev.index - plats.length / 2) ? curr : prev;
            });

            console.log("Élément au centre :", centerIndex);

            setSelectedItem(centerIndex.item);
            setCurrentIndex(centerIndex.index);
        }
    }).current;

//console.log("selectItem", sele)
    const categories = [
    { id: 1, name: "Pizza", image: '' },
    { id: 2, name: "Burger", image: '' },
    { id: 3, name: "Salad", image:'' },
    { id: 4, name: "Dessert", image: '' },
    { id: 5, name: "Drinks", image: '' },
    ];

    const handlePress = (item) => {
        const index = plats.findIndex((plat) => plat.id === item.id);
        setCurrentIndex(index);
        setSelectedItem(item);
        flatListRef.current?.scrollToIndex({ index, animated: true });
    };

const addCart = () => {
    // check if item is already in cart
    const exist = cart.find((x) => x.id === selectItem.id);
    if (exist) {
        setCart(
            cart.map((x) =>
                x.id === selectItem.id ? { ...exist, qty: exist.qty + 1 } : x
            )
        );
        setIsShow(true)
    } else {
        setCart([...cart, { ...selectItem, qty: 1 }]);
        setIsShow(true)
    }
}
const addQuantity = (item) => {
    const exist = cart.find((x) => x.id === item.id);
    if (exist) {
        setCart(
            cart.map((x) =>
                x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
            )
        );
    }
}
const removeQuantity = (item) => {
    const exist = cart.find((x) => x.id === item.id);
    if (exist) {
       if(exist.qty === 1) {
           setCart(cart.filter((x) => x.id !== item.id));
           setIsShow(false)
       }
         else {
              setCart(
                cart.map((x) =>
                     x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
                )
              );
         }
    }
};

    const renderImageQty = (it) => {
        const array = Array(it.qty).fill(1);

        return (
            <View className="w-40 h-40 items-center justify-center">
                {array.map((_, index) => (
                    <Animated.Image
                        key={index}
                        entering={enteringAnimation}
                        exiting={exitingAnimation}
                        source={it.image}
                        className="w-32 h-32 rounded-full absolute -left-3"
                        resizeMode="contain"
                        style={{
                            left: index * 12, // Décalage horizontal (optionnel)
                            right: index * 10, // Décalage horizontal (optionnel)
                            transform: [{ scale: 1 - index * 0.1 }], // Réduit la taille légèrement
                        }}
                    />
                ))}
            </View>
        );
    };

    return (
    <SafeAreaView className="flex-1 bg-[#060607] ">
        <RNMotionView >
         <FlatList
             horizontal={true}
             data={categories}
             renderItem={({item}) => (
              <TouchableOpacity>
                <View className="flex-row items-center bg-white rounded-full p-2 m-4">
                  <RNText>{item.name}</RNText>
                </View>
              </TouchableOpacity>
            )} />
        </RNMotionView>
      <View className="flex-row justify-center items-center">
      <RNMotionView className={'w-[35%]'}>
          <FlatList
              ref={flatListRef}
              data={plats}
              style={{
                  paddingBottom: 5,
                  paddingTop: 10,
              }}
              snapToAlignment="center"
              snapToInterval={ITEM_HEIGHT - SPACING}
              keyExtractor={(item) => item.id.toString()}
              showsVerticalScrollIndicator={false}
              decelerationRate="normal" // 👈 Change "fast" en "normal" pour éviter un effet trop rapide
              viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
              onViewableItemsChanged={onViewableItemsChanged}
              getItemLayout={(data, index) => ({
                  length: ITEM_HEIGHT + SPACING ,
                  offset: (ITEM_HEIGHT + SPACING) * index ,
                  index,
              })}
              initialScrollIndex={Math.floor(plats.length / 8)}
              contentContainerStyle={{
                  paddingVertical: height * 0.5,
              }}
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
                      className={`w-[50%] h-[${ITEM_HEIGHT}px] my-5 flex justify-center items-center rounded-full `}
                  >
                      <TouchableOpacity onPress={() => handlePress(item)}>
                          <Image
                              source={item.image}
                              className={`w-24 h-24 rounded-full ${ selectItem?.id === item?.id ? "bg-green-500" : "bg-transparent"}`}
                              resizeMode="contain"
                          />
                      </TouchableOpacity>
                  </RNMotionView>
              )}
          />
      </RNMotionView>
<RNMotionView className={'w-[55%] flex-2'}>
      <Animated.View
          entering={enteringAnimation}
          exiting={exitingAnimation}
          key={currentIndex}
      >
        <Image
 source={selectItem?.image}
  className="w-64 h-64 self-center"
  resizeMode="contain"
/>
      </Animated.View>
    <RNMotionView className={'rounded-tr-[50px] rounded-tl-[50px] shadow-2xl'}>
        <RNMotionView className={'flex-row items-center justify-between mr-2'}>
            <RNText className="text-3xl font-bold text-white">{selectItem?.name}</RNText>
            <TouchableOpacity>
                <Ionicons name="heart-outline" size={35} color={'white'} />
            </TouchableOpacity>
        </RNMotionView>
        <TouchableOpacity className={'flex-row items-center justify-between my-2 mr-2'}>
            <RNText className={'text-gray-500 text-base'}>Ingredients</RNText>
            <Ionicons name={'chevron-forward'} size={24} color={'white'} className={''} />
        </TouchableOpacity>
        <RNMotionView className={'flex-row items-center justify-between'}>
            <RNText className="text-xl font-bold text-white">{selectItem?.price}€</RNText>
            <TouchableOpacity className="w-2/4 border border-green-500 rounded-full py-2 my-4">
                <RNText className="text-white text-center text-lg">Commander</RNText>
            </TouchableOpacity>
        </RNMotionView>
        <RNText className={'text-2xl text-white flex-wrap my-2'}>
            {selectItem?.description}
        </RNText>
        <TouchableOpacity onPress={addCart} className={'bg-green-500 rounded-tl-xl rounded-br-xl justify-center items-center self-end mt-10 h-20 w-52'}>
            <RNText className={'text-white text-xl'}>Ajouter au panier</RNText>
        </TouchableOpacity>
    </RNMotionView>
</RNMotionView>
      </View>
        {
            isShow &&(
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
                        duration: 1000
                    }}
                    className={'absolute h-72  bg-black w-full bottom-0 rounded-tl-3xl'}>
                    <Pressable onPress={()=> {
                        setCart([])
                        setIsShow(false)
                    }} className={'absolute z-50 right-3 drop-shadow-xl  rounded-full w-5 h-5 shadow-gray-400 top-2 justify-center items-center'}>
                        <RNText className={'text-lg  text-red-500'}>X</RNText>
                    </Pressable>
                    {
                        cart.map((item, index) => (
                            <RNMotionView
                                key={index}
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
                                    duration: 1000
                                }}
                                className={' '}>
                                <RNMotionView className={'flex-row items-center'}>
                                    {renderImageQty(item)}
                                    <RNText className={'text-2xl text-white'}>{item.name}</RNText>
                                </RNMotionView>
                                <RNMotionView className={'flex-row items-center justify-between'}>
                                    <RNMotionView className={'flex-row items-center ml-4'}>
                                        <TouchableOpacity className={'m-2'} onPress={()=>removeQuantity(item)}>
                                            <Ionicons name="remove" size={20} color={'white'} />
                                        </TouchableOpacity>
                                        <RNText className={'text-white text-lg mx-1'}> {item?.qty} </RNText>
                                        <TouchableOpacity className={'m-2'} onPress={()=>addQuantity(item)}>
                                            <Ionicons name="add" size={20} color={'white'} />
                                        </TouchableOpacity>
                                    </RNMotionView>
                                    <RNText className={'text-3xl text-white font-bold'}>{item.price * item?.qty}€</RNText>
                                    <RNMotionView />
                                </RNMotionView>
                                <RNMotionView className={'flex-row items-center mt-8'}>
                                    <TouchableOpacity className={'bg-white/50 w-1/2 h-14 justify-center items-center rounded-tl-2xl'}>
                                        <RNText className={'text-white text-xl'}>Continuer vos achats</RNText>
                                    </TouchableOpacity>
                                    <TouchableOpacity className={'bg-green-500 w-1/2 h-14 flex-row  justify-center items-center rounded-br-2xl'}>
                                        <RNText className={'text-white text-xl mr-4'}>Panier</RNText>
                                        <FontAwesome6 name="bag-shopping" size={24} color="white" />
                                    </TouchableOpacity>

                                </RNMotionView>
                            </RNMotionView>
                        ))
                    }
                </RNMotionView>
            )
        }
    </SafeAreaView>
  );
};

export default LiveScreen;

