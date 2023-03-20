import React from "react";
import {View, Text, Image, StyleSheet,} from 'react-native';

import styles from "./style";

export default function Tittle (){
    return(
        <View style={styles.back}>
            <View style={styles.marca}>
                <Text style={styles.text}> Gui Health & IMC Clinical</Text>
                <Text style={styles.sub}> Sua Saúde, Nossa Prioridade</Text>
            </View>
            <Image source={require('../../../assets/tittle.png')} style={styles.logo}/>
        </View>
    );
}
