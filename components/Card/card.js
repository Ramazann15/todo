import { Text, View ,  Pressable , Vibration} from 'react-native';
import styles from "./card.styles"

export default function Card({todoData,setTodo,todo}) {


  const isCompletedHandler = (isCompleted)=>{
    if(!isCompleted){
      return  styles.Activecard
    }
    else{
      
      return  styles.Passivecard
      
    }
  }

  const isCompletedHandler2 = (isCompleted)=>{
    if(!isCompleted){
      return  styles.ActivetoDo
    }
    else{
      return styles.PassivetoDo
    }
  }

  const onClickHandler = (position)=>{
    const isCompleted = todo.map((todo,index)=>{
      if(index === position){
       return {...todo,isCompleted:!todo.isCompleted}
      }
      return todo
    })

    setTodo(isCompleted)
  }


  const destory = (id)=>{
    const ONE_SECOND_IN_MS = 1000;
   const filter = todo.filter((todo)=>{return id !== todo.id })
   Vibration.vibrate(0.1 * ONE_SECOND_IN_MS)
   setTodo(filter)
  }


  return (
    <View>

        <Pressable onLongPress={()=>{destory(todoData.item.id)}}  onPress={()=>{onClickHandler(todoData.index)}} style={isCompletedHandler(todoData.item.isCompleted)}>
            <Text  style={isCompletedHandler2(todoData.item.isCompleted)}>{todoData.item.todo}</Text>
        </Pressable>

        
    </View>
  )
}
