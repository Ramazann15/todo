import Input from './components/Input/Input';
import { StyleSheet, Text, View , FlatList} from 'react-native';
import Card from './components/Card/card';
import { useEffect, useState } from 'react';

export default function App() {


  const [input,setInput] = useState("");
  const [todo,setTodo] = useState([{ id: 0 ,todo:"Hello", isCompleted:false}])
  const [todoCounter,setTodoCounter] = useState(0)

  
  const renderItem = (item)=> <Card todoData = {item} todo={todo} setTodo={setTodo }  setTodoCounter={setTodoCounter}/>


  useEffect(()=>{
    const completedToDo = todo.filter(todo=>todo.isCompleted ===true).length
    setTodoCounter(completedToDo)
  },[todo])

  return (
    <View style={styles.container}>

      <View style={styles.header} >
        <Text style={styles.context}>YAPILACAKLAR</Text>
        <Text style = {styles.counter}>{todo.length - todoCounter}</Text>
      </View>


      <View style={styles.content}>
        
        <FlatList data={todo} renderItem={renderItem} keyExtractor ={(item)=>{item.id.toString()}}/>

        <Input setForm = {setInput} setTodo={setTodo} formInput={input} todo ={todo} />

      </View>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  context : {
    color:"#FFA500",
    fontSize:24,
    fontWeight:'bold'
  },
  counter : {
    color:"#FFA500",
    fontSize:24,
    fontWeight:'bold'
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:26,
    margin:8,
    marginBottom:16
  },
  content:{
    flex:1,
    justifyContent:"space-between"
  }


});
