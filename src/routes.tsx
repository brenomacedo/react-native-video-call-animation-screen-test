import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer'
import React from 'react'
import Blue from './screens/Blue'
import Red from './screens/Red'
import { Text, View } from 'react-native'
import Yellow from './screens/Yellow'
import Green from './screens/Green'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()

/* ======================== TAB ========================== */

const TabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName='yellow' screenOptions={{
            headerShown: false,
            tabBarShowLabel: true,
            // eslint-disable-next-line react-native/no-inline-styles
            tabBarIcon: props => <View style={[{ backgroundColor: props.color, height: 20, width: 20 }]} />,
            tabBarActiveBackgroundColor: 'cyan',
            tabBarItemStyle: {
                flexDirection: 'row'
            }
        }}>
            <Tab.Screen name='yellow' component={Yellow} options={{
                
            }} />
            <Tab.Screen name='green' component={Green} options={{
                
            }} />
        </Tab.Navigator>
    )
}

/* ======================== TAB ========================== */

/* ======================== DRAWER ========================== */

const renderDrawer = (props: DrawerContentComponentProps) => {
    return (
        <View>
            <Text>Hello world</Text>
            {props.state.routeNames[props.state.index]}
        </View>
    )
}

// const customDrawerContent = (props: DrawerContentComponentProps) => {
//     return (
//         <View>
//             {/* My custom content goes here */}
//             <DrawerContent {...props} />
//         </View>
//     )
// }

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={renderDrawer /*(props) => <customDrawerContent {...props} />*/} >
            <Drawer.Screen name='red' component={Red} options={{
                headerShown: false
            }} />
        </Drawer.Navigator>
    )
}

/* ======================== DRAWER ========================== */

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='home'>
                <Stack.Screen name='hello' component={Blue} options={{
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: 'cyan' }
                }} />
                <Stack.Screen name='hithere' component={DrawerNavigator} options={{
                    headerShown: false
                }} />
                <Stack.Screen name='home' component={TabNavigator} options={{
                    headerShown: false
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes