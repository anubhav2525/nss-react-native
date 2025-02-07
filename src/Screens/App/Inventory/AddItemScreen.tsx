import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useTheme} from '../../../context/ThemeContext';
import CustomTxtInput from '../../../Components/CustomTxtInput/CustomTxtInput';
import {useNavigation} from '@react-navigation/native';

const AddItemScreen = () => {
  const {theme} = useTheme();
  const navigation = useNavigation();
  return (
    <SafeAreaView
      className={`flex-1 ${
        theme === 'dark' ? 'bg-black' : 'bg-slate-100'
      } flex flex-col p-2 md:p-4 gap-3`}>
      <ScrollView className="flex-1">
        {/* item details */}
        <View
          className={`p-3 rounded-md ${
            theme === 'dark' ? 'bg-neutral-900' : 'bg-white'
          }`}>
          <CustomTxtInput
            label={'Item Name'}
            placeholder={'Enter Item Name'}
            inputMode={'text'}
          />

          <CustomTxtInput
            label={'Category'}
            placeholder={'Enter Category'}
            inputMode={'text'}
          />

          <CustomTxtInput
            label={'Item Code'}
            placeholder={'Enter Item Code'}
            inputMode={'text'}
          />

          <CustomTxtInput
            label={'Description'}
            placeholder={'Enter Description'}
            inputMode={'text'}
          />
        </View>
        {/* price details */}
        <View
          className={`p-3 mt-2 rounded-md ${
            theme === 'dark' ? 'bg-neutral-900' : 'bg-white'
          }`}>
          <Text
            className={`text-lg font-semibold mb-2 ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>
            Price Details
          </Text>
          <CustomTxtInput
            label={'Sale Price in ₹/unit'}
            placeholder={'Enter Sale Price in ₹'}
            inputMode={'numeric'}
          />

          <CustomTxtInput
            label="Discount in %"
            inputMode={'numeric'}
            placeholder="Enter Discount"
          />

          <CustomTxtInput
            label={'Purchase Price in ₹/unit'}
            placeholder={'Enter Purchase Price in ₹'}
            inputMode={'numeric'}
          />
          {/* taxes using select */}
        </View>
        {/* stock details */}
        <View
          className={`p-3 mt-2 rounded-md ${
            theme === 'dark' ? 'bg-neutral-900' : 'bg-white'
          }`}>
          <Text
            className={`text-lg font-semibold mb-2 ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>
            Stock Details
          </Text>
          <CustomTxtInput
            label={'Opening Stock'}
            placeholder={'Enter Opening Stock'}
            inputMode={'numeric'}
          />
          <CustomTxtInput
            label={'Minimum Stock'}
            placeholder={'Enter Minimum Stock'}
            inputMode={'numeric'}
          />
          <CustomTxtInput
            label={'Item Location'}
            placeholder={'Enter Item Location'}
            inputMode={'text'}
          />
        </View>
        {/* item image */}
        <View className="flex flex-row items-center justify-between gap-3 my-4 ">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View className={`px-8 py-2 rounded-lg bg-white`}>
              <Text className="text-black text-lg font-semibold">Cancel</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className={`px-8 py-2 rounded-lg bg-red-500`}>
              <Text className="text-white text-lg font-semibold">Save</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddItemScreen;
