import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useState } from 'react';
import { Avatar } from '@rneui/themed';
import { MagnifyingGlassIcon, ChevronDownIcon, ChatBubbleLeftRightIcon } from 'react-native-heroicons/outline';

const orders = [
  {
    name: 'Anita Sanchez',
    code: 'CF744312737',
    date: '14 fév. 2025',
    amount: 152.95,
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    feedbackCount: 2,
  },
  {
    name: 'Antoine Landet',
    code: 'RL574312738',
    date: '13 fév. 2025',
    amount: 214.85,
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    feedbackCount: 1,
  },
  {
    name: 'Joey Le Page',
    code: 'ZP684312765',
    date: '12 fév. 2025',
    amount: 364.65,
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    feedbackCount: 0,
  },
  {
    name: 'Géraldine Banot',
    code: 'PF654318327',
    date: '11 fév. 2025',
    amount: 144.10,
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    feedbackCount: 1,
  },
  {
    name: 'Cyril Leclerc',
    code: 'NA784318391',
    date: '10 fév. 2025',
    amount: 1802.90,
    avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    feedbackCount: 2,
  },
  {
    name: 'Nordan Balin',
    code: 'NH684529872',
    date: '09 fév. 2025',
    amount: 140.90,
    avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
    feedbackCount: 1,
  },
];

export default function OrdersEnded() {
  const [search, setSearch] = useState('');

  return (
    <View className="flex-1 bg-black  pt-10">
      {/* Barre de recherche */}
      <View className="flex-row items-center mb-4 space-x-3">
        <View className="flex-1 flex-row items-center bg-zinc-800 rounded-full px-3 py-2">
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="N° de commande ou produit"
            placeholderTextColor="#a3a3a3"
            className="ml-2 text-white flex-1"
          />
        </View>
        <TouchableOpacity className="flex-row items-center bg-zinc-800 px-3 py-2 rounded-full">
          <Text className="text-white mr-1">Commandes</Text>
          <ChevronDownIcon size={16} color="white" />
        </TouchableOpacity>
      </View>

      {/* Liste des commandes */}
      <ScrollView>
        {orders.map((order, index) => (
          <View
            key={index}
            className="bg-[#1e1e1e] flex-row justify-between items-center px-4 py-3 rounded-xl mb-3"
          >
            {/* Avatar et infos */}
            <View className="flex-row items-center space-x-3">
              <Avatar
                rounded
                size={40}
                source={{ uri: order.avatar }}
              />
              <View>
                <Text className="text-white font-semibold">{order.name}</Text>
                <Text className="text-zinc-400 text-xs">{order.code}</Text>
              </View>
            </View>

            {/* Détails */}
            <View className="items-end">
              <Text className="text-white text-sm">Livrée le {order.date}</Text>
              <View className="flex-row items-center mt-1 space-x-2">
                <Text className="text-white text-base font-semibold">{order.amount.toFixed(2)}€</Text>

                <View className="bg-lime-400 rounded-full px-2 py-1 flex-row items-center">
                  <Text className="text-black font-bold mr-1 text-sm">{order.feedbackCount}</Text>
                  <ChatBubbleLeftRightIcon color="black" size={14} />
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}