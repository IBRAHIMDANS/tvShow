import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabParamList, RootTabScreenProps } from '../types';
import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';
import TabOneScreen from '../screens/TabOneScreen';
import { Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import TabTwoScreen from '../screens/TabTwoScreen';
import { ComponentProps } from 'react';
import TvShowScreen from '../screens/TvShowScreen';

const TabBarIcon = (props: {
  name: ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) => <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TvShow"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Home"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Home',
          tabBarIcon: ({ color }) =>
            <TabBarIcon name="home" color={color} activeOpacity={1} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />

      <BottomTab.Screen
        name="TvShow"
        component={TvShowScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Tv Show',
          tabBarIcon: ({ color }) =>
            <TabBarIcon name="tv" color={color} activeOpacity={1} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Info"
        component={TabTwoScreen}
        options={{
          title: 'Info',
          tabBarIcon: ({ color }) => <TabBarIcon name="info" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
