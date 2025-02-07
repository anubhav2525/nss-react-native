import {View, Text, SafeAreaView, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import React from 'react';

const OnboardingScreen = ({
  handleOnboardingComplete,
}: {
  handleOnboardingComplete: () => void;
}) => {
  return (
    <SafeAreaView>
      <Onboarding
        onDone={handleOnboardingComplete}
        pages={[
          {
            backgroundColor: 'white',
            image: (
              <Image
                source={require('../../../assets/images/fire.png')}
                className="w-40 h-40 object-contain"
              />
            ),
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
        ]}
      />
    </SafeAreaView>
  );
};

export default OnboardingScreen;
