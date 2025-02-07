import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import React from 'react';
import {useTheme} from '../../context/ThemeContext';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCubes,
  faFile,
  faFilter,
  faPlus,
  faSearch,
  faShare,
} from '@fortawesome/free-solid-svg-icons';
import Header from '../../Components/Header/Header';
import {useNavigation} from '@react-navigation/native';

type InventoryProps = {
  id: string;
  name: string;
  category: string;
  salePrice: number;
  purchasePrice: number;
  stockInQuantity: number;
  minStockQualntity: number;
  itemImageUrl?: string;
};

const InventoryScreen = () => {
  const {theme} = useTheme();

  const navigation = useNavigation();
  const inventoryItems = [
    {
      id: 'item-1',
      name: 'Apple iPhone 13',
      category: 'Electronics',
      salePrice: 999.99,
      purchasePrice: 850.0,
      stockInQuantity: 50,
      minStockQualntity: 10,
      itemImageUrl: 'https://picsum.photos/200/300?random=1',
    },
    {
      id: 'item-2',
      name: 'Nike Air Max 270',
      category: 'Fashion',
      salePrice: 129.99,
      purchasePrice: 90.0,
      stockInQuantity: 75,
      minStockQualntity: 15,
      itemImageUrl: 'https://picsum.photos/200/300?random=2',
    },
    {
      id: 'item-3',
      name: 'Samsung 4K TV',
      category: 'Electronics',
      salePrice: 1499.99,
      purchasePrice: 1200.0,
      stockInQuantity: 20,
      minStockQualntity: 5,
      itemImageUrl: 'https://picsum.photos/200/300?random=3',
    },
    {
      id: 'item-4',
      name: 'Adidas Superstar',
      category: 'Fashion',
      salePrice: 99.99,
      purchasePrice: 70.0,
      stockInQuantity: 100,
      minStockQualntity: 20,
      itemImageUrl: 'https://picsum.photos/200/300?random=4',
    },
    {
      id: 'item-5',
      name: 'PlayStation 5',
      category: 'Electronics',
      salePrice: 499.99,
      purchasePrice: 400.0,
      stockInQuantity: 30,
      minStockQualntity: 10,
      itemImageUrl: 'https://picsum.photos/200/300?random=5',
    },
    {
      id: 'item-6',
      name: "Levi's Jeans",
      category: 'Fashion',
      salePrice: 69.99,
      purchasePrice: 50.0,
      stockInQuantity: 80,
      minStockQualntity: 15,
      itemImageUrl: 'https://picsum.photos/200/300?random=6',
    },
    {
      id: 'item-7',
      name: 'Canon EOS Camera',
      category: 'Electronics',
      salePrice: 799.99,
      purchasePrice: 650.0,
      stockInQuantity: 25,
      minStockQualntity: 5,
      itemImageUrl: 'https://picsum.photos/200/300?random=7',
    },
    {
      id: 'item-8',
      name: 'Converse Chuck Taylor',
      category: 'Fashion',
      salePrice: 59.99,
      purchasePrice: 40.0,
      stockInQuantity: 90,
      minStockQualntity: 20,
      itemImageUrl: 'https://picsum.photos/200/300?random=8',
    },
    {
      id: 'item-9',
      name: 'Xbox Series X',
      category: 'Electronics',
      salePrice: 599.99,
      purchasePrice: 500.0,
      stockInQuantity: 35,
      minStockQualntity: 10,
      itemImageUrl: 'https://picsum.photos/200/300?random=9',
    },
    {
      id: 'item-10',
      name: 'Ray-Ban Sunglasses',
      category: 'Fashion',
      salePrice: 129.99,
      purchasePrice: 90.0,
      stockInQuantity: 60,
      minStockQualntity: 15,
      itemImageUrl: 'https://picsum.photos/200/300?random=10',
    },
  ];
  return (
    <View
      className={`flex-1 ${theme === 'dark' ? 'bg-black' : 'bg-neutral-100'}`}>
      <StatusBar
        backgroundColor={theme === 'dark' ? '#000000' : '#ffffff'}
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
      />

      <View className={`${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
        <Header />
      </View>
      <View className="flex-1">
        <QuickLinks />
        <SummaryCard />
        <SearchInventory />
        {/* Render item lists */}
        <View className="flex-1">
          <FlatList
            data={inventoryItems}
            keyExtractor={item => item.id}
            renderItem={({item}) => <ItemCard {...item} />}
            ItemSeparatorComponent={() => <View className="h-2" />}
            contentContainerStyle={{paddingBottom: 60}}
          />
        </View>
        <TouchableOpacity
          className="absolute bottom-2 right-2 bg-sky-600 p-4 rounded-full flex-row items-center shadow-lg"
          onPress={() => navigation.navigate('AddItem')}>
          <FontAwesomeIcon icon={faPlus} size={16} color={'white'} />
          <Text className="ml-2 text-white font-semibold">Add Item</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InventoryScreen;

const SummaryCard = () => {
  const {theme} = useTheme();
  return (
    <View
      className={`${
        theme === 'dark' ? 'bg-neutral-900' : 'bg-white'
      } p-4 mx-2 my-2 rounded-md shadow-md`}>
      <View className="flex-row justify-between">
        <View className="items-center">
          <Text className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            Total item in stock
          </Text>
          <Text className="text-green-600 font-bold text-lg">₹ 0</Text>
        </View>
        <View className="items-center">
          <Text className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            Total price
          </Text>
          <Text className="text-red-600 font-bold text-lg">₹ 7,800</Text>
        </View>
        <View className="items-center">
          <Text className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            QR Collections
          </Text>
          <Text className="text-blue-500 font-bold text-lg">₹ 0</Text>
        </View>
      </View>
      <TouchableOpacity className="mt-2 bg-blue-600 p-2 rounded-md flex items-center flex-row justify-center gap-2">
        <FontAwesomeIcon icon={faFile} size={16} color={'white'} />
        <Text className="text-white font-semibold">VIEW REPORTS</Text>
      </TouchableOpacity>
    </View>
  );
};

const SearchInventory = () => {
  const {theme} = useTheme();
  return (
    <View
      className={`flex-row py-2 px-3 mb-2 mx-2 rounded-md items-center shadow-md ${
        theme === 'dark' ? 'bg-neutral-900 text-white' : 'bg-white text-black'
      }}`}>
      <FontAwesomeIcon size={14} color={'#9ca3af'} icon={faSearch} />
      <TextInput
        placeholder="Search Item"
        className={`flex-1 p-2 text-gray-700 ${
          theme === 'dark' && 'text-white'
        } placeholder:text-gray-400`}
      />
      <TouchableOpacity className="ml-2 p-1">
        <FontAwesomeIcon icon={faFilter} size={20} color={'#3b82f6'} />
      </TouchableOpacity>
    </View>
  );
};

const ItemCard = ({...props}: InventoryProps) => {
  const navigation = useNavigation();
  const {theme} = useTheme();
  return (
    <TouchableOpacity
      className={`${
        theme === 'dark'
          ? 'bg-neutral-900 border border-slate-800'
          : 'bg-white border-slate-700 shadow-md'
      } p-3 mx-2 rounded-lg shadow-md`}
      onPress={() =>
        navigation.navigate('InventoryItemDetail', {id: props.id})
      }>
      <View className="flex flex-row items-center justify-between gap-1">
        <View>
          <Text
            className={`text-lg font-bold text-wrap ${
              theme === 'dark' ? 'text-white' : 'text-slate-800'
            }`}>
            {props.name}
          </Text>
        </View>
        <View className="flex flex-row gap-2 items-center">
          <View
            className={`${
              theme === 'dark' ? 'bg-neutral-700' : 'bg-slate-50'
            } py-1 px-3 rounded-full`}>
            <Text
              className={`${
                theme === 'dark' ? 'text-slate-300' : 'text-black'
              } font-semibold text-sm`}>
              {props.category}
            </Text>
          </View>
          <View>
            <TouchableOpacity className="p-2">
              <View>
                <FontAwesomeIcon
                  icon={faShare}
                  size={20}
                  color={theme === 'dark' ? '#e2e8f0' : '#cbd5e1'}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="flex flex-row items-center justify-between pt-3">
        <View className="flex flex-col gap-1">
          <Text
            className={`${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            } text-xs md:text-sm`}>
            Sale Price
          </Text>
          <Text
            className={`font-bold text-sm md:text-base ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>
            10000
          </Text>
        </View>
        <View className="flex flex-col gap-1">
          <Text
            className={`${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            } text-xs md:text-sm`}>
            Purchase Price
          </Text>
          <Text
            className={`font-bold text-sm md:text-base ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>
            10000
          </Text>
        </View>
        <View className="flex flex-col gap-1">
          <Text
            className={`${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            } text-xs md:text-sm`}>
            Stock
          </Text>
          <Text
            className={`font-bold text-sm md:text-base ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>
            200
          </Text>
        </View>
        <View className="flex flex-col gap-1">
          <Text
            className={`${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            } text-xs md:text-sm`}>
            Sale Price
          </Text>
          <Text
            className={`font-bold text-sm md:text-base ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>
            10000
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const QuickLinks = () => {
  const {theme} = useTheme();
  const links = [
    {id: 'home', name: 'Home', link: '', icon: 'home'},
    {
      id: 'inventory',
      name: 'Inventory',
      link: '',
      icon: 'inventory',
    },
    {
      id: 'parties',
      name: 'Parties',
      link: '',
      icon: 'parties',
    },
    {
      id: 'bill',
      name: 'Bill',
      link: '',
      icon: 'bill',
    },
  ];

  const Card = () => {
    return (
      <TouchableOpacity
        className={`${
          theme === 'dark' ? 'bg-neutral-800' : 'bg-sky-100'
        } p-4 rounded-xl px-5 flex items-center gap-1`}>
        <FontAwesomeIcon icon={faCubes} size={25} color={'#3b82f6'} />
        <Text className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>
          Import
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View
      className={`${
        theme === 'dark' ? 'bg-neutral-900' : 'bg-white'
      } p-2 mt-2 mx-2 rounded-md shadow-md`}>
      <View className="">
        <Text
          className={`text-base font-bold ${
            theme === 'dark' ? 'text-white' : 'text-black'
          } pb-1`}>
          Quick Links
        </Text>
      </View>
      <FlatList
        data={links}
        ItemSeparatorComponent={() => <View className="w-2" />}
        keyExtractor={item => item.id}
        renderItem={({item: any}) => <Card />}
        horizontal={true}
      />
    </View>
  );
};
