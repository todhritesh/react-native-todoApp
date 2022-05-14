import { Text, View , StyleSheet , TouchableOpacity , TextInput , ScrollView } from 'react-native'
import React , {useState} from 'react'
import EntypoIcon from 'react-native-vector-icons/Entypo';

const  App = ()=>{
  const [todoList , setTodoList] = useState([])
  const [disableSubmit , setDisableSubmit] = useState(true)
  const [todoInput , setTodoInput] = useState("")

  function handleTodoInput(val){
    if(val===""){
      setDisableSubmit(true)
      setTodoInput("")
      return 
    }
    setDisableSubmit(false)
    setTodoInput(val)
  }

  function handleRemoveTodo(index){
    setTodoList(todoList.filter(((item,i)=>(i!==index))))
  }

  function handleCompletedTodo(index){
    const data = todoList.map((item,i)=>{
      if(i===index){
        item.status=true
        return item;
      }
      return item;
    })

    setTodoList(data);
  }

  function handleSubmit(){
    const data = {
      status:false,
      todo:todoInput
    }
    setTodoList([...todoList,data]);
    setTodoInput("");
    setDisableSubmit(true)
  }
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Todo</Text>
        </View>

        <View style={styles.todoListContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>

            {
              todoList.map((item,i)=>(
                
              <View key={i} style={{...styles.todoListItem,backgroundColor:`${item.status ? "#b1ffb0e6" : "white"}`}} >
                <View style={styles.todoImage}></View>
                <View style={{flex:1}}>
                  <Text style={styles.todoTitle}>{item.todo}</Text>
                </View>
                <View style={styles.todoActions}>
                  {
                    !item.status &&
                    <View style={styles.todoCompleted} >
                    <TouchableOpacity 
                    onPress={()=>handleCompletedTodo(i)}
                    >
                      <EntypoIcon name="check" size={30} color="green" />
                    </TouchableOpacity>
                  </View>
                  }
                  <View style={styles.todoDelete} >
                    <TouchableOpacity 
                    onPress={()=>handleRemoveTodo(i)}
                    >
                      <EntypoIcon name="cross" size={30} color="red" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              ))
            }

            {
              !todoList.length  && 
              <View style={styles.todoListItem} >
                <View style={styles.todoImage}></View>
                <View style={{flex:1}}>
                  <Text style={styles.todoTitle}>Write Your Todo </Text>
                </View>
                <View style={styles.todoActions}>
                  {/* <View style={styles.todoCompleted} >
                  <TouchableOpacity 
                    onPress={()=>console.log("hello world")}
                    >
                      <EntypoIcon name="cross" size={30} color="red" />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.todoDelete} >
                  <TouchableOpacity 
                    onPress={()=>console.log("hello world")}
                    >
                      <EntypoIcon name="cross" size={30} color="red" />
                  </TouchableOpacity>
                  </View> */}
                </View>
              </View>
            }

          </ScrollView>
        </View>
        
        <View style={styles.addTodoContainer}>
          <View style={styles.addTodoInput}>
            <TextInput value={todoInput} onChangeText={(val)=>handleTodoInput(val)} placeholder='Write sometthing...' style={{fontSize:22,paddingHorizontal:15}} />
          </View>
          <View style={styles.addTodoButton}>
            <TouchableOpacity onPress={()=>handleSubmit()} disabled={disableSubmit} >
              <EntypoIcon name='circle-with-plus' size={60} color={`${disableSubmit?"grey":"green"}`} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }


const styles = StyleSheet.create({
  container:{
    backgroundColor:"#dfe6e9",
    position:'relative',
    flex:1,
    paddingLeft:5,
    paddingRight:5,
  },
  header:{
    alignItems:"center",
    marginTop:15
  },
  headerText:{
    fontSize:25,
    fontWeight:"bold",
  },
  todoListContainer:{
    paddingTop:20,
    paddingBottom:10,
    paddingLeft:15,
    paddingRight:15,
    flex:1
  },
  todoListItem:{
    borderRadius:10,
    backgroundColor:"white",
    padding:10,
    flexDirection:'row',
    justifyContent:'flex-start',
    marginTop:20,
    elevation:15,
    alignItems:'center'
  },
  todoTitle:{
    fontSize:20,
    color:'black'
  },
  todoImage:{
    width:30,
    height:30,
    backgroundColor:'#81ecec',
    marginRight:15,
    borderRadius:10
  },
  todoActions:{
    flex:1,
    fontSize:20,
    flexDirection:'row',
    justifyContent:'flex-end'
  },
  todoCompleted:{
    marginRight:5
  },
  todoDelete:{
    
  },
  addTodoContainer:{
    paddingTop:10,
    paddingBottom:20,
    paddingRight:20,
    paddingLeft:20,
    flexDirection:'row',
    justifyContent:"space-between",
    width:"100%",
    alignItems:'center',
  },
  addTodoInput:{
    flex:3,
    borderWidth:2,
    borderColor:"grey",
    borderRadius:40,
    fontSize:30,
    height:55
  },
  addTodoButton:{
    paddingLeft:10,
  }
})

export default App;

