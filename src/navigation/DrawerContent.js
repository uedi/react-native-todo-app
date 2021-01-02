import React from 'react'
import { StyleSheet, View } from 'react-native'
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentContainer: {
    },
    drawerItem: {
    },
    drawerLabel: {
    }
})

const DrawerContent = props => {
    return (
        <View style={styles.container}>
            <DrawerContentScrollView
                {...props}
                scrollEnabled={false}
                contentContainerStyle={styles.contentContainer}
            >
                <DrawerItem 
                    label='Home'
                    labelStyle={styles.drawerLabel}
                    style={styles.drawerItem}
                    onPress={() => props.navigation.navigate('Home')}
                />
                <DrawerItem
                    label='TODOs'
                    labelStyle={styles.drawerLabel}                
                    style={styles.drawerItem}
                    onPress={() => props.navigation.navigate('Todos')}
                />
            </DrawerContentScrollView>
        </View>
    )
}

export default DrawerContent