import React from 'react'
import { StyleSheet, View, Keyboard } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator, useIsDrawerOpen } from '@react-navigation/drawer'
import Animated from 'react-native-reanimated'
import { IconButton, Colors } from 'react-native-paper'
import Home from '../screens/Home'
import Todos from '../screens/Todos'
import DrawerContent from './DrawerContent'

const Stack = createStackNavigator()
const DrawerNavigator = createDrawerNavigator()

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    stack: {
        flex: 1
    },
    drawerStyles: {
        width: '50%',
        backgroundColor: 'transparent'
    },
    drawerContentContainer: {
    },
    drawerSceneContainer: {
        backgroundColor: 'transparent'
    }
})

const Screens = ({ navigation, style }) => {
    const isDrawerOpen = useIsDrawerOpen()

    return (
        <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
            <Stack.Navigator
                animationEnabled={false}
                screenOptions={{
                    initialRouteName: 'Home',
                    headerTransparent: true,
                    headerLeft: () => (
                        <IconButton
                            icon={isDrawerOpen ? 'close' : 'menu'}
                            color={Colors.blue500}
                            size={isDrawerOpen ? 30 : 40}
                            onPress={() => {
                                Keyboard.dismiss()
                                navigation.openDrawer()
                            }}
                        />
                    )
                }}
            >
                <Stack.Screen name='Home' options={{title: 'Home'}}>{props => <Home {...props} />}</Stack.Screen>
                <Stack.Screen name='Todos' options={{title: 'TODOs'}}>{props => <Todos {...props} />}</Stack.Screen>
            </Stack.Navigator>
        </Animated.View>
    )
}

const Drawer = () => {
    return (
        <View style={styles.container}>
            <DrawerNavigator.Navigator
                drawerType='slide'
                overlayColor='transparent'
                drawerStyles={styles.drawerStyles}
                contentContainerStyle={styles.drawerContentContainer}
                initialRouteName='Home'
                drawerContentOptions={{
                    activeBackgroundColor: 'transparent',
                    activeTintColor: 'white',
                    inactiveTintColor: 'white'
                }}
                sceneContainerStyle={styles.drawerSceneContainer}
                drawerContent={props => {
                    return <DrawerContent {...props} />
                }}
            >
                <DrawerNavigator.Screen name='Screens'>
                    {props => <Screens {...props} />}
                </DrawerNavigator.Screen>
            </DrawerNavigator.Navigator>
        </View>
    )
}

export default Drawer