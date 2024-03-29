import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import Register from './screens/Register';
import Stacks from './screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MyTabs from './screens/Announcements';
import {Image} from 'react-native'
import Settings, { Stackz } from './screens/Settings';
import NapfaTabs from './screens/Napfa';
import OnboardingScreen from './screens/Onboarding';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs({ route }) {
  // const houses = route.params.house;
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Stacks}
        // initialParams={{ house: house }}
        options={{
          headerShown: false,
          tabBarIcon: () => (
           <Ionicon name="home-outline" size={27}/>
          ),
        }}
      />
      <Tab.Screen
        name="Announcements"
        component={MyTabs}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require("./assets/announcement-icon.png")}
              style={{ width: '30%', height: '80%'}}
            />
          ),
        }}
      />

      <Tab.Screen
        name="NAPFA"
        component={NapfaTabs}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require("./assets/ChallengeIcon.png")}
              style={{ width: '30%', height: '80%'}}
            />
          ),
        }}
      />
      
      <Tab.Screen
        name="Settings"
        component={Stackz}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require("./assets/SettingsIcon.jpeg")}
              style={{ width: '25%', height: '70%'}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


export default function MyStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="Home" component={Tabs} options={{headerShown: false}}/>
      <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{headerShown: false}}/>

    </Stack.Navigator>
    </NavigationContainer>
  );
}