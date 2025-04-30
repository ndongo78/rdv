import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Avatar } from '@rneui/themed';
import { ArrowLeftIcon, CurrencyEuroIcon } from 'react-native-heroicons/outline';

export default function OrderDetailsScreen() {
  const order = {
    name: 'Sophie Bicet',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    number: '00021682',
    date: '02 fév. - 20h18',
    items: [
      {
        title: 'Dope – Blizzard W',
        description: 'Veste de Ski Femme Vert pâle',
        price: 152.95,
        image: 'https://picsum.photos/200/300',
        taille: 'M',
        quantity: 1,
      },
      {
        title: 'Superdry – Core',
        description: 'Pantalon de ski',
        price: 119.95,
        image: 'https://picsum.photos/201/300',
        taille: 'M',
        quantity: 1,
      },
    ],
    delivery: {
      mode: 'Express Chronopost',
      type: 'LOCKER',
      location: 'Carrefour Market',
      address: '265 allée des Balmes, 93 100 Montreuil',
    },
    total: 276.10,
  };

  return (
    <View className="flex-1 flex-col justify-between bg-black pt-12 px-4">
      {/* Header */}
 
 <View>
      {/* Infos client */}
      <View className="flex-row items-center justify-between mb-4">
        <View className="flex-row items-center space-x-3">
          <Avatar rounded size={40} source={{ uri: order.avatar }} />
          <View>
            <Text className="text-white font-semibold">{order.name}</Text>
            <Text className="text-white text-xs">{order.number}</Text>
          </View>
        </View>
        <Text className="text-white text-sm">{order.date}</Text>
      </View>

      {/* Liste produits */}
            <View className="border border-zinc-700 rounded-lg bg-black shadow-2xl">

      <View className=" mb-4 bg-gray-950">
        {order.items.map((item, index) => (
          <View key={index} className="flex-row items-center mb-3 bg-gray-950 p-2">
            <Image source={{ uri: item.image }} className="w-12 h-12 rounded mr-3" />
            <View className="flex-1">
              <Text className="text-white font-medium">{item.title}</Text>
              
              <View className="bg-zinc-600 w-6 h-6 rounded-full items-center justify-center mt-3">
                <Text className="text-white text-xs">{item.taille}</Text>
              </View>
            </View>
            <View className="items-end gap-y-4">
              <Text className="text-white text-sm text-right">x{item.quantity}</Text>
              <Text className="text-white font-semibold">{item.price.toFixed(2)}€</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Détails livraison */}
      <View className="mb-6 p-2">
        <Text className="text-white font-semibold mb-1">Destinataire :</Text>
        <Text className="text-white mb-2">{order.name}</Text>

        <Text className="text-white font-semibold mb-1">Livraison :</Text>
        <Text className="text-white">
          <Text className="font-bold">Express</Text> Chronopost
        </Text>
        <View className="flex-row items-center mt-1 space-x-1">
          <Text className="text-lime-400 font-semibold">LOCKER</Text>
          <Text className="text-white font-bold">{order.delivery.location}</Text>
        </View>
        <Text className="text-white text-sm">{order.delivery.address}</Text>
      </View>
      {/* Total */}
      <View className="flex-row justify-between items-center">
          <Text className="text-white  text-base font-bold mb-4 ml-2">
        Payé : 
      </Text>
      <Text className="text-white text-right text-base font-bold mb-4 mr-2">
         {order.total.toFixed(2)}€
      </Text>
      </View>
</View>
</View>
      {/* Boutons */}
      <View className="flex-row justify-between items-center">
        <TouchableOpacity className="flex-row items-center border border-lime-300 px-4 py-2 rounded-xl">
          <Text className="text-lime-300 font-medium mr-2">Refuser la commande</Text>
          <CurrencyEuroIcon size={18} color="#bef264" />
        </TouchableOpacity>
        <TouchableOpacity className="bg-lime-400 px-6 py-2 rounded-xl">
          <Text className="text-black font-bold">Confirmer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}