import {FlatList, StyleSheet, View, useWindowDimensions} from 'react-native';
import React, {useRef, useState} from 'react';
import WrapperLayout from '../../layout/WrapperLayout';
import {appColors, appMargin, appPadding} from '../../utils/styleGuide';
import {appImages} from '../../assets/images';
import {FullWidthButton} from '../../components/atoms/Buttons/Buttons';
import {useNavigation} from '@react-navigation/native';
import GeneralHeader from '../../components/organisms/Header/Header';
import {EnterEmail, AuthCode} from '../../components/screens/ForgotPassword';

const ForgotPassword = () => {
  const navigation: any = useNavigation();

  const width = useWindowDimensions().width;
  const flatListRef = useRef<FlatList>();

  console.log(width);

  const [activeStage, setActiveStage] = useState<number>(0);
  const [email, setEmail] = useState<string>('');
  const [code, setCode] = useState<string>('');

  const [error, setError] = useState<string>('');

  const stages = [
    <EnterEmail email={email} setText={setEmail} />,
    <AuthCode code={code} setCode={setCode} />,
  ];

  const isFirstStage = activeStage === 0;

  const nextStage = () => {
    setActiveStage(prev => {
      flatListRef.current?.scrollToIndex({
        index: prev + 1,
        animated: true,
      });

      return prev + 1;
    });
  };

  const prevStage = () => {
    setActiveStage(prev => {
      flatListRef.current?.scrollToIndex({
        index: prev - 1,
        animated: true,
      });

      return prev - 1;
    });
  };

  return (
    <WrapperLayout bgColor={appColors.white}>
      <GeneralHeader
        onPress={isFirstStage ? () => navigation.goBack() : prevStage()}
        title="ForgotPassword"
        icon={appImages.goBackIcon}
      />

      <View>
        <FlatList
          ref={flatListRef}
          showsHorizontalScrollIndicator={false}
          horizontal
          pagingEnabled
          scrollEnabled={false}
          data={stages}
          renderItem={({item}) => (
            <View style={{width: width - 40, marginRight: 20, height: 220}}>
              {item}
            </View>
          )}
        />
      </View>

      {activeStage === stages.length - 1 && code.length < 5 ? null : (
        <FullWidthButton
          // onPress={() => navigation.navigate('newPassword')}
          onPress={() => {
            activeStage === stages.length - 1 ? prevStage() : null;
            activeStage === 0 ? nextStage() : null;
          }}
          buttonText={
            activeStage === stages.length - 1 ? 'Confirm' : 'Continue'
          }
          wrapperStyle={{
            marginBottom: appMargin.md,
          }}
        />
      )}
    </WrapperLayout>
  );
};

export default ForgotPassword;
