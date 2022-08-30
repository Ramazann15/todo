import { StyleSheet } from "react-native";

export default StyleSheet.create({
    Activecard:{
        backgroundColor:"#7da453",
        marginLeft:8,
        marginRight:8,
        marginBottom:8,
        height:40,
        borderRadius:5,
        textAlign:"center",
        justifyContent:"center",
    },
    ActivetoDo:{
        color:"white",
        marginLeft:10
    },
    Passivecard:{
        backgroundColor:"#37474f",
        marginLeft:8,
        marginRight:8,
        marginBottom:8,
        height:40,
        borderRadius:5,
        textAlign:"center",
        justifyContent:"center"
    },
    PassivetoDo:{
        color:"gray",
        marginLeft:10,
        textDecorationLine:" line-through",
    }
})