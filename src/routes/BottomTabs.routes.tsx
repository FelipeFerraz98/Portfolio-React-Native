import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { HomeScreen } from '../screens/Home/HomeScreen'

const { Screen, Navigator } = createBottomTabNavigator()


export function TabsRoutes() {
  return (
    <NavigationContainer>
        <Navigator
        initialRouteName="Home"
        >
            <Screen
                name='Home'
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <MaterialIcons name="home" size={24} color='#232323' />
                      ),
                }
            }
            />
        </Navigator>
    </NavigationContainer>
  )
}