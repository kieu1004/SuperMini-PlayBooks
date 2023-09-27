import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavBar from '../components/NavBar';
import WishlistScreen from '../screens/WishlistScreen';

export type WishlistStackParamList = {
  Wishlist: undefined;
};

const Wishlist = createNativeStackNavigator<WishlistStackParamList>();

const WishlistNavigator = () => {
  return (
    <Wishlist.Navigator
      screenOptions={{
        header: props => <NavBar {...props} />,
      }}>
      <Wishlist.Screen name="Wishlist" component={WishlistScreen} />
    </Wishlist.Navigator>
  );
};

export default WishlistNavigator;
