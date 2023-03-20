import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    back:{
        backgroundColor: '#293039',
        height:150,
        padding:15,
        width:"100%",
        flexDirection:"row"
    },
    text:{
        color:'#00C2CB',
        fontSize: 25,
        fontWeight:"bold",
    },
    sub:{
        color:'#C3EDEF',
        fontSize: 20,
        alignItems:"center",
        marginTop:10
    },
    logo:{
       width:160,
       height:160,
    },
    marca:{
        alignItems:'center',
        position:"relative",
        justifyContent:"center"
    }
});

export default styles