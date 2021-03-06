 import React, {useEffect, useState } from 'react'
 import { StyleSheet, Image, View, Text} from 'react-native'
 import MapView, {Marker, Callout} from 'react-native-maps'
 import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'
  

 function Main(){ 
    const [currentRegion, setCurrentRegion] = useState(null)

     useEffect(() => {
         async function loadInitialPosition(){
             const { granted } = await requestPermissionsAsync();
             if(granted){
                 const { coords } = await getCurrentPositionAsync({
                     enableHighAccuracy: true,
                 });
                 const { latitude, longitude } = coords; 

                 setCurrentRegion({
                     latitude,
                     longitude,
                     latitudeDelta:0.00,
                     longitudeDelta:0.00,
                 })
                
             }

         }

         loadInitialPosition();

     }, []);

    if(!currentRegion){
        return null;
    }

    return (
        <MapView initialRegion={currentRegion} style={styles.map}>
            <Marker coordinate={{latitude: -27.8355979, longitude: -50.3184167}}>
                <Image style={styles.avatar} source={{ uri: 'https://avatars1.githubusercontent.com/u/52587920?s=460&v=4' }} />
                <Callout>
                    <View style={styles.Callout}>
                        <Text style={styles.devNmae}>Sandro Vingla</Text>
                        <Text style={styles.devBio}>aprendendo as melhores techs</Text>
                        <Text style={styles.devTechs}>ReactJs, React Native, node.Js</Text>

                    </View>
                </Callout>
            </Marker>  
        </MapView>
    
    )
 }
 const styles = StyleSheet.create ({
     map: {
         flex:1
     },

     avatar: {
         width:54,
         height: 54,
         borderRadius: 4,
         borderWidth: 4,
         borderColor: '#fff'
     },

     Callout:{
         width: 260,

     },
     devNmae:{
         fontWeight: 'bold',
         fontSize: 16,
     },
     devBio:{
         color:'#666',
         marginTop: 5,

     },
     devTechs:{
         marginTop: 5,
     }

 })
 export default Main;