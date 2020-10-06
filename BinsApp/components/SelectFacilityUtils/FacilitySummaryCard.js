import React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


/*
 * Small Item Card that holds information about a facility.
 * Appears when a user is trying to initially select a facility.
 * 
 * Props:
 * 1. onPress
 * 2. src: Source for the image to be rendered
 * 3. address: A facility's address
 */
export default FacilitySummaryCard = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.FacilityCardContainer}>
                <View style={styles.FacilityImageContainer}>
                  <Image style={styles.FacilityImage} source={props.src} />
                </View>

                <View style={styles.FacilityInfoContainer}>
                  <Text>CSI Mini Storage</Text>
                  <Text>{props.address}</Text>
                  <Text>$19.99/delivery, free initial move-in</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles= StyleSheet.create({
  FacilityCardContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  FacilityImageContainer: {
    flex: 1
  },
  FacilityImage: {
    height: 50,
    width: 50,
  },
  FacilityInfoContainer: {
    flex: 5,
    backgroundColor: 'white',
    height: 50,
    paddingLeft: 10,
  }
});


/* The code from the old file
<TouchableOpacity onPress={() => {this.setState({modalVisible:true, storageAddress: '855 Parr Boulevard, Richmond, CA 94801'})
            }}>
              <View style={{flexDirection: 'row', backgroundColor: 'white', padding: 10, borderRadius: 10}}>
                <View style={{flex: 1}}>
                  <Image style={{width: 50, height: 50}} source={require('../photos/csimini.png') }/>
                </View>
                <View style={{flex: 5, backgroundColor: 'white', height: 50, paddingLeft: 10}}>
                  <Text style={{fontSize: 20}}>CSI Mini Storage</Text>
                  <Text>855 Parr Boulevard, Richmond, CA 94801</Text>
                  <Text>$19.99/delivery, free initial move-in</Text>
                </View>
              </View>
            </TouchableOpacity>
*/