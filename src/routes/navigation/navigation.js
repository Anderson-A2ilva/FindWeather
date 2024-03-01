import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BoasVindas from "../../screens/boas vindas/boasvindas";
import Home from '../../components/Home/EmptyState';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabRoutes(){
    return(
        <Tab.Navigator screenOptions={{
            headerTitle: "",
            headerShown: false,
        }}>
            <Tab.Screen name='Home' component={Home} />
        </Tab.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Boas Vindas" screenOptions={{
                headerTitle: "",
                headerShown: false,
            }}>
                <Stack.Screen name="Boas Vindas" component={BoasVindas} />
                <Stack.Screen name="TabRoutes" component={TabRoutes} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}