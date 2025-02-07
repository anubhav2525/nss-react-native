import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import {useTheme} from '../../../context/ThemeContext';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faPlus,
  faSearch,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';

type SupplierCardProps = {
  id: string;
  name: string;
  amount: string;
  time: string;
  supplierImageUrl: string;
  companyName?: string;
};

const customers: SupplierCardProps[] = [
  {
    id: '1',
    name: 'John Doe',
    amount: '7,800',
    time: '2 hours ago',
    companyName: 'abchdd',
    supplierImageUrl:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '2',
    name: 'Jane Smith',
    amount: '4,200',
    time: '1 hour ago',
    supplierImageUrl:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '3',
    name: 'Bob Johnson',
    amount: '9,500',
    time: '3 hours ago',
    supplierImageUrl: '',
  },
  {
    id: '4',
    name: 'Alice Brown',
    amount: '2,100',
    time: '30 minutes ago',
    supplierImageUrl: '',
  },
  {
    id: '5',
    name: 'Mike Davis',
    amount: '6,300',
    time: '2 hours ago',
    supplierImageUrl: '',
  },
  {
    id: '6',
    name: 'Emily Chen',
    amount: '8,400',
    time: '1 hour ago',
    supplierImageUrl: '',
  },
  {
    id: '7',
    name: 'David Lee',
    amount: '3,800',
    time: '45 minutes ago',
    supplierImageUrl: '',
  },
  {
    id: '8',
    name: 'Sophia Patel',
    amount: '5,600',
    time: '2 hours ago',
    supplierImageUrl: '',
  },
  {
    id: '9',
    name: 'Oliver Kim',
    amount: '1,900',
    time: '1 hour ago',
    supplierImageUrl: '',
  },
  {
    id: '10',
    name: 'Isabella Hall',
    amount: '4,800',
    time: '3 hours ago',
    supplierImageUrl: '',
  },
];
const SupplierScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1">
      <SummaryCard />
      <SearchCustomer />
      <FlatList
        data={customers}
        renderItem={({item: CustomerCardProps}) => (
          <SupplierCard {...CustomerCardProps} />
        )}
        ItemSeparatorComponent={() => <View className="h-2" />}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingBottom: 60}}
      />

      <TouchableOpacity
        className="absolute bottom-2 right-2 bg-orange-600 p-4 rounded-full flex-row items-center shadow-lg"
        onPress={() => navigation.navigate('AddNewSupplier')}>
        <FontAwesomeIcon icon={faPlus} size={16} color={'white'} />
        <Text className="ml-2 text-white font-semibold">Add Supplier</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SupplierScreen;

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
            You will give
          </Text>
          <Text className="text-green-600 font-bold text-lg">₹ 0</Text>
        </View>
        <View className="items-center">
          <Text className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            You will get
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
      <TouchableOpacity className="mt-2 bg-blue-600 p-2 rounded-md flex items-center">
        <Text className="text-white font-semibold">VIEW REPORTS</Text>
      </TouchableOpacity>
    </View>
  );
};

const SearchCustomer = () => {
  const {theme} = useTheme();
  return (
    <View
      className={`flex-row py-2 px-3 mb-2 mx-2 rounded-md items-center shadow-md ${
        theme === 'dark' ? 'bg-neutral-900 text-white' : 'bg-white text-black'
      }}`}>
      <FontAwesomeIcon size={14} color={'#9ca3af'} icon={faSearch} />
      <TextInput
        placeholder="Search Supplier"
        className={`flex-1 p-2 text-gray-700 ${
          theme === 'dark' && 'text-white'
        } placeholder:text-gray-400`}
      />
      <TouchableOpacity className="ml-2">
        <Text className="text-blue-600">Filters</Text>
      </TouchableOpacity>
    </View>
  );
};

const SupplierCard = ({
  name,
  amount,
  time,
  supplierImageUrl,
}: SupplierCardProps) => {
  const {theme} = useTheme();
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className={`${
        theme === 'dark'
          ? 'bg-neutral-900 border border-slate-800'
          : 'bg-white border-slate-700 shadow-md'
      } p-3 mx-2 rounded-lg flex-row items-center shadow-md`}
      onPress={() => navigation.navigate('SupplierDetail')}>
      {/* Profile Image or Initials */}
      <View className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center">
        {supplierImageUrl ? (
          <Image
            source={{uri: supplierImageUrl}}
            className="h-full w-full object-cover rounded-full"
          />
        ) : (
          <Text className="text-black text-lg font-semibold">{name[0]}</Text>
        )}
      </View>

      {/* Customer Details */}
      <View className="ml-3 flex-1">
        <Text
          className={`text-lg font-semibold ${
            theme === 'dark' ? 'text-white ' : 'text-black'
          }`}>
          {name}
        </Text>
        <Text
          className={`${
            theme === 'dark' ? 'text-slate-300' : 'text-slate-500'
          }`}>
          {time}
        </Text>
      </View>

      {/* Amount & Remind Button */}
      <View className="items-end">
        <Text className="text-red-600 font-bold text-lg">₹ {amount}</Text>
        <TouchableOpacity className="flex-row items-center gap-1">
          <Text className="text-blue-600 font-semibold text-sm">REMIND</Text>
          <View>
            <FontAwesomeIcon icon={faArrowRight} size={10} color="#2563eb" />
          </View>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
