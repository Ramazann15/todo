import { useState } from 'react';
import {Text, View ,TextInput,TouchableOpacity} from 'react-native';
import styles from "./Input.styles"

function Input({setForm,setTodo,formInput,todo}) {

    const [clicked, setClicked] = useState(false);
    const [id,setId] = useState(1)
    const [formSpace,setFormSpace] = useState("")

    const onChangeInput = (text)=>{
      setFormSpace(text)
      setForm(text)

    }

    const onClickHandler = ()=>{
        const newClicked = true;
        setClicked(newClicked);
        if (newClicked) {
           setTodo([...todo,{id: id ,todo:formInput, isCompleted : false}])
        }
        let plus = id + 1
        setId(plus)
        setFormSpace("")
    }

  return (
    <View  style={styles.container}>
        <TextInput style={styles.input} value={formSpace} placeholder={"Yapılacak..."} placeholderTextColor={"gray"} onChangeText={(text)=>{onChangeInput(text)}}/>
       <TouchableOpacity onPress={onClickHandler} selectionColor={"gray"} style={styles.button}><Text style={styles.text}>Kaydet</Text></TouchableOpacity>
    </View>
  )
}

export default Input