import React from "react";
import { View, Text, TouchableOpacity, Share} from 'react-native';

import styles from "./style";

export default function ResultIMC(props){

  const onShare = async () => {
    const result = await Share.share({
      message:"Esse é o meu IMC: " + props.resultIMC + " com grau: " + props.typeIMC,
    })
  }

    return(
        <View style={styles.backImc}>
          
          <Text style={styles.txtImc}>{props.messageResultIMC}</Text>
          <Text style={styles.nmrImc}>{props.resultIMC}</Text>
          <Text style={styles.tpImc}>{props.typeIMC}</Text>
          <View style={styles.compart}>
            {props.resultIMC != null ?
            <TouchableOpacity style={styles.btnShare}>
              <Text onPress={onShare} style={styles.txtShare}>Share</Text>
            </TouchableOpacity>
            :
             <View/>
            }
          </View>
        </View>
    );
}