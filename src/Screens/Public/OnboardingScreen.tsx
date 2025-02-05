import {View, Text, SafeAreaView, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import React from 'react';

const OnboardingScreen = () => {
  return (
    <SafeAreaView>
      <Onboarding
        onDone={() => console.log('Done')}
        pages={[
          {
            backgroundColor: 'white',
            image: <Image source={require('../../assets/images/fire.png')} />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
        ]}
      />
    </SafeAreaView>
  );
};

export default OnboardingScreen;
