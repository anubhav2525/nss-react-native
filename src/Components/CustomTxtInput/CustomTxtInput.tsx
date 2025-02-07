import {View, Text, TextInput, InputModeOptions} from 'react-native';
import React from 'react';
import {useTheme} from '../../context/ThemeContext';

type InputProps = {
  placeholder: string;
  inputMode: InputModeOptions | undefined;
  label: string;
  secureTextEntry?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  onChangeText?: (text: string) => void;
  value?: string;
  readonly?: boolean;
};

const CustomTxtInput = ({...props}: InputProps) => {
  const {theme} = useTheme();
  return (
    <View className="flex-col gap-2 ">
      <View>
        <Text
          className={`text-base font-semibold ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>
          {props.label}
        </Text>
      </View>
      <TextInput
        {...props}
        secureTextEntry={props.secureTextEntry}
        multiline={props.multiline}
        numberOfLines={props.numberOfLines}
        autoCapitalize={props.autoCapitalize}
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        value={props.value}
        readOnly={props.readonly}
        placeholder={props.placeholder}
        inputMode={props.inputMode}
        className={`p-3 rounded-md mb-2 border text-sm ${
          theme === 'dark'
            ? 'bg-neutral-900 border-slate-800 '
            : 'bg-slate-100 border-slate-400 placeholder:text-slate-500'
        }`}
      />
    </View>
  );
};

export default CustomTxtInput;
