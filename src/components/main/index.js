import React from "react";
import {View, StyleSheet,} from 'react-native';

import Form from "../form";

export default function Main(){
    return(
        <View style={styles.container}>
           <Form/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#e0e5e5",
        flex:1,
        marginTop:80,
        bottom:0,
        height:"auto", 
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        
    },
});