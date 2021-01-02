import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Main from './src/Main'
import { Provider as PaperProvider } from 'react-native-paper'

const App = () => {
    return (
        <PaperProvider>
            <NavigationContainer>
                <Main />
            </NavigationContainer>
        </PaperProvider>
    )
}

export default App