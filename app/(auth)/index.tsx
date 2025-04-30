
// import React from "react";
// import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from "react-native";
// import {View as RNMotionView, Image as RNImage, Text as RNText} from "moti";
// import {SafeAreaView} from "react-native-safe-area-context"
// import {router} from "expo-router"
// import {StatusBar} from "expo-status-bar";
// export default function OnBoarding() {
//   return (
//     <SafeAreaView style={styles.container} className="bg-background">
//         <StatusBar style={'light'} animated={true} />
//             <RNMotionView
//       from={{
//         translateY: 300,
//         opacity: 0,
//       }}
//       animate={{
//         translateY: 0,
//         opacity: 1,
//         //direction: 'ltr',
//       }}
//       transition={{
//         type: 'timing',
//         //delay: 600,
//         duration: 1000
//       }}
//       className="bg-green-500 w-10 h-10 rounded-full absolute top-10 right-3"/>
//       <RNMotionView
//       from={{
//         translateX: 200,
//         opacity: 0,
//       }}
//       animate={{
//         translateX: 0,
//         opacity: 1,
//         //direction: 'ltr',
//       }}
//       transition={{
//         type: 'timing',
//         //delay: 600,
//         duration: 1000
//       }}

//               className="w-6/12 h-32 bg-primary text-3xl font-bold rounded-br-full justify-center mb-10 ">
//           <RNText
//           className="text-2xl font-black ml-2 text-textPrimary italic"
//             from={{
//     translateX: -200,
//     opacity: 0,
//   // rotate: '0deg',
//   }}
//   animate={{
//     translateX: 0,
//     opacity: 1,

//   }}
//   transition={{
//     type: 'timing',
//   // delay: 500,
//     duration: 500, // Durée totale de l'animation
//   // loop: true, // Répète indéfiniment
//   }}
//           >
//             Au FOODIS
//             </RNText>
//           <RNText className="text-sm m-2 text-textPrimary">Carrefour des saveurs</RNText>
//         </RNMotionView>
//       <View className="relative">

// <RNImage
//   from={{
//     translateX: -200,
//     opacity: 0,
//     rotate: '0deg',
//   }}
//   animate={{
//     translateX: 0,
//     opacity: 1,
//     rotate: '360deg', // Tourne sur elle-même
//   }}
//   transition={{
//     type: 'timing',
//   // delay: 500,
//     duration: 500, // Durée totale de l'animation
//   // loop: true, // Répète indéfiniment
//   }}
//   source={require("../../public/plat.png")}
//   className="w-64 h-64 self-center mb-20"
//   resizeMode="contain"
// />
//       <RNImage
//       from={{
//         translateX: 200,
//         opacity: 0,
//         //rotateX: "90"
//       }}
//       animate={{
//         translateX: 0,
//         opacity: 1,
//         //direction: 'ltr',
//       }}
//       transition={{
//         type: 'timing',
//       // delay: 600,
//         duration:2000
//       }}
//         source={require("../../public/assets/bas.png")}
//         className="w-24 h-20 absolute top-2 left-1"
//         resizeMode="contain"
//       />
//         <RNImage
//       from={{
//         translateX: -200,
//         opacity: 0,
//         //rotateX: "90"
//       }}
//       animate={{
//         translateX: 0,
//         opacity: 1,
//         //direction: 'ltr',
//       }}
//       transition={{
//         type: 'timing',
//       // delay: 600,
//         duration: 2000
//       }}
//         source={require("../../public/assets/to1.png")}
//         className="w-20 h-20 absolute right-4 bottom-10"
//         resizeMode="contain"
//       />
//       <RNImage
//       from={{
//         translateX: 200,
//         opacity: 0,
//         //rotateX: "90"
//       }}
//       animate={{
//         translateX: 0,
//         opacity: 1,
//         //direction: 'ltr',
//       }}
//       transition={{
//         type: 'timing',
//         //delay: 600,
//         duration: 2000
//       }}
//         source={require("../../public/assets/r.png")}
//         className="w-20 h-20 absolute left-4 bottom-10"
//         resizeMode="contain"
//       />
//           <RNImage
//       from={{
//         translateX: -200,
//         opacity: 0,
//         //rotateX: "90"
//       }}
//       animate={{
//         translateX: 0,
//         opacity: 1,
//         //direction: 'ltr',
//       }}
//       transition={{
//         type: 'timing',
//         //delay: 600,
//         duration: 2000
//       }}
//         source={require("../../public/assets/piment.png")}
//         className="w-20 h-20 absolute right-2 top-2"
//         resizeMode="contain"
//       />
//       </View>
//       <RNMotionView
//       from={{
//         translateY: 300,
//         opacity: 0,
//       }}
//       animate={{
//         translateY: 0,
//         opacity: 1,
//         //direction: 'ltr',
//       }}
//       transition={{
//         type: 'timing',
//         //delay: 600,
//         duration: 1000
//       }}
//       className="bg-primary flex-1 rounded-t-[100px] items-center justify-center">
//   <Text className="text-3xl font-medium text-textPrimary mt-2">Pour commande 👇</Text>

//       {/* Formulaire */}
//       <View className="w-2/3 mt-6 mx-4">
//         <RNMotionView
//             from={{
//                 translateY: 300,
//                 opacity: 0,
//             }}
//             animate={{
//                 translateY: 0,
//                 opacity: 1,
//                 //direction: 'ltr',
//             }}
//             transition={{
//                 type: 'timing',
//                 //delay: 600,
//                 duration: 1000
//             }}
//         >
//             <TextInput
//                 placeholder="Email"
//                 placeholderTextColor="#0D0D0D"
//                 className="w-full bg-[#72A68E] text-white px-4 py-3 rounded-xl mb-4"
//                 keyboardType="email-address"
//             />
//         </RNMotionView>
//           <RNMotionView
//               from={{
//                   translateY: 300,
//                   opacity: 0,
//               }}
//               animate={{
//                   translateY: 0,
//                   opacity: 1,
//                   //direction: 'ltr',
//               }}
//               transition={{
//                   type: 'timing',
//                 delay: 600,
//                   duration: 1000
//               }}
//           >
//         <TextInput
//           placeholder="Mot de passe"
//           placeholderTextColor="#0D0D0D"
//           secureTextEntry
//           className="w-full bg-[#72A68E] text-white px-4 my-2 py-3 rounded-xl mb-6"
//         />
//             </RNMotionView>
//             {/* Mot de passe oublié */}
//         {/* Bouton de soumission */}
//           <RNMotionView
//               from={{
//                   translateY: 300,
//                   opacity: 0,
//               }}
//               animate={{
//                   translateY: 0,
//                   opacity: 1,
//                   //direction: 'ltr',
//               }}
//               transition={{
//                   type: 'timing',
//                   delay: 700,
//                   duration: 1000
//               }}
//           >
//         <TouchableOpacity
//         onPress={()=>router.push("(home)")}
//         className="w-full bg-[#012619] py-3 rounded-lg items-center">
//           <Text className="text-[#C5D9D0] font-bold text-lg">Se connecter</Text>
//         </TouchableOpacity>
//             </RNMotionView>
//         {/* Inscription */}
//         <RNMotionView
//             className="mt-4 flex-row justify-center"
//             from={{
//                 translateY: 300,
//                 opacity: 0,
//             }}
//             animate={{
//                 translateY: 0,
//                 opacity: 1,
//                 //direction: 'ltr',
//             }}
//             transition={{
//                 type: 'timing',
//                 delay: 800,
//                 duration: 1000
//             }}
//         >
//           <Text className="text-white">Pas de compte ? </Text>
//           <TouchableOpacity>
//             <Text className="text-white font-bold underline">S'inscrire</Text>
//           </TouchableOpacity>
//         </RNMotionView>
//       </View>
//       </RNMotionView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { CheckBox, Avatar } from '@rneui/themed';
import {useState} from 'react'
import ConfirmOrders from '@/components/ConfirmOrders'
import OrdersToSend from '@/components/OrdersToSend'
import OrdersSender from '@/components/OrdersSender'
import OrdersEnded from '@/components/OdersEnded'
import {router} from "expo-router"
const orders = [
  {
    id: '00021682',
    date: '02 fév. - 20h18',
    name: 'Sophie Bicet',
    amount: 276.1,
    selected: false,
    items: [
      {
        title: 'Dope – Blizzard W',
        subtitle: 'Veste de Ski Femme Vert pâle',
        image: 'https://picsum.photos/200/300',
        quantity: 1,
        taille: 'XL'
      },
      {
        title: 'Superdry – Core',
        subtitle: 'Pantalon de ski',
        image: 'https://picsum.photos/200/300',
        quantity: 1,
        taille: 'M'
      },
    ],
  },
  {
    id: '00021681',
    date: '02 fév. - 16h39',
    name: 'Anita Capriski',
    amount: 143.4,
    selected: true,
    items: [
      {
        title: 'Casque visière Atomic',
        subtitle: 'Savor Visor Photo',
        image: 'https://picsum.photos/200/300',
        quantity: 1,
        taille: 'L'
      },
    ],
  },
    {
    id: '000216881',
    date: '02 fév. - 16h39',
    name: 'Anita Capriski',
    amount: 143.4,
    selected: true,
    items: [
      {
        title: 'Casque visière Atomic',
        subtitle: 'Savor Visor Photo',
        image: 'https://picsum.photos/200/300',
        quantity: 1,
        taille: 'L'
      },
    ],
  },
    {
    id: '0002168901',
    date: '02 fév. - 16h39',
    name: 'Anita Capriski',
    amount: 143.4,
    selected: true,
    items: [
      {
        title: 'Casque visière Atomic',
        subtitle: 'Savor Visor Photo',
        image: 'https://picsum.photos/200/300',
        quantity: 1,
        taille: 'L'
      },
    ],
  },
];

export default function MesVentesScreen() {
  const [activeTab, setActiveTab] = useState<'A confirmer' | 'A expédier' | 'Envoyées' | 'Terminées'>('A confirmer');
  
const renderTabView = () => {
  switch (activeTab) {
    case 'A confirmer':
      return <ConfirmOrders />;
    case 'A expédier':
      return <OrdersToSend />;
    case 'Envoyées':
      return <OrdersSender />;
    case 'Terminées':
      return <OrdersEnded />;
    default:
      return <ConfirmOrders />;
  }
};
  return (
    <>
    <ScrollView className="flex-1 bg-black px-4 pt-8">
      <Text className="text-white text-center text-xl font-semibold mb-4">Mes ventes</Text>

      <View className="flex-row justify-around mb-4">
        {['A confirmer', 'A expédier', 'Envoyées', 'Terminées'].map(tab => (
         <TouchableOpacity
          onPress={()=>setActiveTab(tab)}
          className={`${activeTab === tab ? 'border-b pb-2 border-lime-200' : ''}`}
         >
           
          <Text key={tab} className="text-white text-sm font-medium">{tab}</Text>
         </TouchableOpacity>
        ))}
      </View>
  {renderTabView()}

    </ScrollView>
{
  activeTab === "A confirmer" && (
       <View className="flex-row justify-between items-center bg-black w-full absolute bottom-0 py-4 border-b border-b-slate-300">
        <TouchableOpacity className="flex-row items-center space-x-1">
          <Text className="text-white">Tout</Text>
              <TouchableOpacity className="border border-yellow-300 w-5 h-5 justify-center items-center">
                <Text>✅</Text>
              </TouchableOpacity>
        </TouchableOpacity>
        <View className="flex-row space-x-2 ">
          <TouchableOpacity className="bg-[2e2e2e] border border-lime-200 px-8 py-2 rounded-lg ">
            <Text className="text-lime-400">Refuser</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-lime-400 px-8 py-2 rounded-lg">
            <Text className="text-black font-bold">Confirmer</Text>
          </TouchableOpacity>
        </View>
      </View>
  )
}
    </>
  );
}





