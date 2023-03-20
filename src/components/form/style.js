import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    back:{
        alignItems:"center",
        margin:30
    },
    entradas:{
        backgroundColor:"#ccc",
        fontSize:14, 
        height:40,
        width:350,
        marginTop:8,
        paddingStart:10,
        borderRadius:5
    },
    entry:{
        paddingBottom:50,
    }, 
    labels:{
        fontWeight:"bold",
        fontSize:18,
        paddingTop:10,
        paddingStart:5
    },
    btn:{
        backgroundColor:"#027a9c",
        borderRadius:15,
        alignItems:"center",
        justifyContent:"center",
        width:"100%",
        paddingBottom:12,
        paddingTop:12,
    },
    txtbtn:{
        fontSize:18,
        color:"#fff"
    },
    erro:{
        fontSize:12,
        color:"#f00",
        fontWeight:"bold",
        paddingLeft:10,
    }
});

export default styles