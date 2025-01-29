import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native'
import { Routes } from './src/routes'

export default function App(){
    return(
        <NavigationIndependentTree>
        <NavigationContainer>
            <Routes/>
        </NavigationContainer>        
      </NavigationIndependentTree>  
    )
}
