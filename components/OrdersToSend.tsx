import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { CheckBox, Avatar } from '@rneui/themed';
import {useState} from 'react'

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

interface Props {
  // Define your props here
}

const OrdersToSend = (props: Props) => {
  return (
    <View className="flex-1 mb-24">
            <Text className="text-white text-center text-lg mb-2">
        Vous avez <Text className="text-lime-400 font-bold">4</Text> commandes à confirmer
      </Text>
      <Text className="text-white text-center text-xs mb-4">
        Une fois la commande confirmée, vous avez 72h pour envoyer le colis.
      </Text>

      <View className="flex-1">
        {orders.map(order => (
          <View key={order.id} className="bg-[#1a1a1a] rounded-xl border border-slate-500 shadow-2xl  w-full  mb-4">
            <View className="flex-row items-center mb-2 p-2   bg-yellow-900  rounded-t-xl">
             {/*<CheckBox checked={order.selected} className="" 
              />
              */}

              <View className="border border-white rounded-full ml-2">
              <Avatar
    size={32}
    rounded
    source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
    className="border-2 border-white"
  />
  </View>
              <View className="ml-2 flex-1 gap-y-2">
                <Text className="text-white font-semibold">{order.name}</Text>
                <Text className="text-white text-xs">{order.id}</Text>
              </View>
              <View>
              <Text className="text-white font-medium">
                A expédier sous  <Text className="text-red-900 text-xl font-medium mx-2">72h</Text>
              </Text>
              </View>
            </View>
            {order.items.map((item, idx) => (
              <View key={idx} className="flex-row items-center m-2 mb-3">
                <View className="flex-row justify-between">
                <Image source={{uri: item.image}} className="w-16 h-16 rounded mr-3" />
                <View className="flex-1">
                  <Text className="text-white font-medium">{item.title}</Text>
                  {/*<Text className="text-white text-xs">{item.subtitle}</Text>*/}
                  <View className="bg-slate-500 w-7 h-7 justify-center items-center rounded-full my-2">
                   <Text className="text-white text-base">{item.taille}</Text> 
                  </View>
                </View>
                    <Text className="text-white font-medium mr-2">{item.quantity}</Text>
                </View>

              </View>
            ))}
           
          </View>
        ))}
      </View>

     
    </View>
  );
};

export default OrdersToSend;