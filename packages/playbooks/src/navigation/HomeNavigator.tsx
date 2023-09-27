import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import NavBar from '../components/NavBar';
import EBookDetailScreen from '../screens/EBookDetailScreen';
import ABookDetailScreen from '../screens/ABookDetailScreen';
import CategoryListScreen from '../screens/CategoryListScreen';
import BestSellerScreen from '../screens/BestSellerScreen';
import NewEstablishScreen from '../screens/NewEstablishScreen';
import RecommendScreen from '../screens/RecommendScreen';
import RomanticScreen from '../screens/RomanticScreen';
import BookViewScreen from '../screens/BookViewScreen';
import AudioViewScreen from '../screens/AudioViewScreen';
import ABookCatgDetailScreen from '../screens/ABookCatgDetailScreen';
import EBookCatgDetailScreen from '../screens/EBookCatgDetailScreen';
import SearchResultScreen from '../screens/SearchResultScreen';



export type HomeStackParamList = {
  Home: undefined;
  EBookDetailScreen: undefined;
  ABookDetailScreen: undefined;
  CategoryListScreen: undefined;
  BestSellerScreen: undefined;
  NewEstablishScreen: undefined;
  RomanticScreen: undefined;
  RecommendScreen: undefined;
  BookViewScreen: undefined;
  AudioViewScreen: undefined;
  ABookCatgDetailScreen: undefined;
  EBookCatgDetailScreen: undefined;
  SearchResultScreen: undefined;
};

const Home = createNativeStackNavigator<HomeStackParamList>();

const HomeNavigator = () => {
  return (
    <Home.Navigator
      screenOptions={{
        header: props => <NavBar {...props} />,
        headerShown: false,
        // title: "PlayBooks"
      }}>
      <Home.Screen name="Home" component={HomeScreen} />
      <Home.Screen name="EBookDetailScreen" component={EBookDetailScreen} />
      <Home.Screen name="ABookDetailScreen" component={ABookDetailScreen} />
      <Home.Screen name="CategoryListScreen" component={CategoryListScreen} />
      <Home.Screen name="BestSellerScreen" component={BestSellerScreen} />
      <Home.Screen name="NewEstablishScreen" component={NewEstablishScreen} />
      <Home.Screen name="RomanticScreen" component={RomanticScreen} />
      <Home.Screen name="RecommendScreen" component={RecommendScreen} />
      <Home.Screen name="BookViewScreen" component={BookViewScreen} />
      <Home.Screen name="AudioViewScreen" component={AudioViewScreen} />
      <Home.Screen name="ABookCatgDetailScreen" component={ABookCatgDetailScreen} />
      <Home.Screen name="EBookCatgDetailScreen" component={EBookCatgDetailScreen} />
      <Home.Screen name="SearchResultScreen" component={SearchResultScreen} />
    </Home.Navigator>
  );
};

export default HomeNavigator;