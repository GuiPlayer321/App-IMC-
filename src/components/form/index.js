import React, {useState} from "react";
import {TextInput, View, Text,TouchableOpacity, Vibration, Pressable, Keyboard} from 'react-native';

import ResultIMC from "./resultIMC";
import styles from "./style";
export default function Form(){

const [height, setHeight] =useState(null)
const [weight, setWeight] =useState(null)
const [messageIMC, setMessageIMC] =useState("Preencha a altura e peso")
const [IMC, setIMC] =useState(null)
const [textButton, setTextButton] =useState("Calcular")
const [typeI, setTypeIMC] = useState("")
const [errorMessage, setErrorMessage] = useState(null)

function imcCalculator(){
    let heightFormat = height.replace(",",".")
    let weightFormat = weight.replace(",",".")
    return setIMC((weightFormat/(heightFormat*heightFormat)).toFixed(2))
   
}

function verificationIMC(){
    if (IMC == null){
        Vibration.vibrate()
        setErrorMessage("Campo Obirgatório")
    }
}

function validationIMC(){
    setTypeIMC("")
    if(weight != null && height != null){
        tipo()
        imcCalculator()
        setHeight(null)
        setWeight(null)

        setMessageIMC("Seu IMC é igual a: ")
        setTextButton("Calcular novamente")
        setErrorMessage(null)
        return
    }
    verificationIMC()
    setIMC(null)
    setTypeIMC("")
    setTextButton("Calcular")
    setMessageIMC("Preencha a altura e o peso")
}

function tipo(){
    if(IMC <= 18.5){
        setTypeIMC("Magreza")
    }else{
        if (IMC > 18.5 && IMC <= 25){
            setTypeIMC("Normal")
        } else{
            if(IMC > 25 && IMC <= 30){
                setTypeIMC("SobrePeso")
            }else{
                if(IMC > 30 && IMC <= 40){
                    setTypeIMC("Obesidade I")
                } else{
                    setTypeIMC("Obesidade")
                }
            }
        } 
    }
}

    return(
        <View >
           <Pressable onPress={Keyboard.dismiss} style={styles.back}>
            <View style={styles.entry}>
                <Text style={styles.labels}>Altura</Text>
                <TextInput onChangeText={setHeight} value={height} placeholder="Ex: 1.75" keyboardType="numeric" style={styles.entradas}/>
                <Text style={styles.erro}>{errorMessage}</Text>
                <Text style={styles.labels}>Peso</Text>
                <TextInput style={styles.entradas} onChangeText={setWeight} value={weight} placeholder="Ex: 75.50" keyboardType="numeric"/>
                <Text style={styles.erro}>{errorMessage}</Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress={() => validationIMC()}> 
            <Text style={styles.txtbtn}>{textButton}</Text>
            </TouchableOpacity>
            
           </Pressable>
                <ResultIMC messageResultIMC={messageIMC} resultIMC={IMC} typeIMC={typeI}/>
        </View>
    );
};
