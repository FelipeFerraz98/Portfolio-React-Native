import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { HomeScreen } from '../screens/Home/HomeScreen';
import { PortfolioScreen } from '../screens/Portfolio/PortfolioScreen';

const { Screen, Navigator } = createBottomTabNavigator();

export function TabsRoutes() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: '#007BFF',
          tabBarInactiveTintColor: '#fff',
          tabBarStyle: { 
            backgroundColor: '#3a3a3a',
            borderTopWidth: 1.5,
            borderColor: '#4a4a4a',         
            elevation: 0,               // Remove a sombra no Android
            shadowOpacity: 0,           // Remove a sombra no iOS
          },
        }}
      >
        <Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Screen
          name="Portfolio"
          component={PortfolioScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="images" size={size} color={color} />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
