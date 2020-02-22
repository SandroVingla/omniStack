 import { createAppContainer } from 'react-navigation'
 import { createStackNavigator} from 'react-navigation-stack'

 

 import Main from './pages/main';
 import Profile from './pages/Profile';

 const Routes = createAppContainer(
     createStackNavigator({
         Main: {
             screen: Main,
             navigationOptions:{
                 title: 'DevRadar'
             }
         },
         Profile:{
             screen: Profile,
             navigationOptions:{
                 title: 'Pefil do github'
             }

         }
     }, {
         defaultNavigationOptions:{
             headerTintColor: '#fff',
             headerStyle: {
                 backgroundColor: '#7d40e7'
             }
         }
     })
 )

 export default Routes;