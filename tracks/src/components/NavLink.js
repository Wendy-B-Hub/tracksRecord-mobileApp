import React from "react";
import {TouchableOpacity, StyleSheet, Text} from "react-native";
import Spacer from "./Spacer";
import {withNavigation} from "react-navigation";


const NavLink=({navigation,routeName,footerText})=>{
  return(<>
        <TouchableOpacity onPress={()=>{navigation.navigate({routeName})}} >
          <Spacer>
            <Text style={styles.link}>{footerText}</Text>
          </Spacer>

        </TouchableOpacity>
  </>)
}

const styles=StyleSheet.create({
  link: {
    color: 'blue',
  },
})

export default withNavigation(NavLink);