import React, { useState } from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import UpdateIcon from '@material-ui/icons/Update';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import background from "./img/bg.png";

function App() {

  const [todos, setTodos] = useState(["Todo App With Firebase", "Firebase Curd Operations"])
  const [text, setText] = useState("")


  // Add
  const Add = (e) => {
    e.preventDefault()
    setTodos([...todos, text])
    setText([""])
  }

  //  Update
  const Update = (i) => {
    const modifyTodo = prompt("Enter New Todo", todos[i])
    if (modifyTodo) {
      todos[i] = modifyTodo
      setTodos([...todos])
    }
    else { alert("update is cancelled") }

  }
  // Delete
  const Delete = (i) => {
    todos.splice(i, 1)
    setTodos([...todos])

  }
  //DeleteAll
  const DeleteAll = () => {
    if (DeleteAll) {
      alert("are you sure?")
      setTodos([])
    }
    else {
      alert("Delete All op. Cancelled")
    }
  }




  return (

    <div style={{ backgroundImage: `url(${background})` }}>
      <div>
      <h1 className="Todo_Header"> TODO APP</h1>

      <form>
        <Paper elevation={5} className="Add_Todo" >
          <TextField className="Text_Field" label="Enter Todos" value={text} onChange={(e) => setText(e.target.value)
          } /><br />
          <Button type="submit" variant="contained" disabled={!text} color="primary" onClick={Add}>ADD&nbsp;<AddBoxOutlinedIcon /></Button>
          <Button variant="contained" color="primary" onClick={DeleteAll}> Delete All&nbsp;</Button>

        </Paper>
      </form>


      {todos.map((data, i) => {
        return <Paper elevation={4} className="Todos_Rendering" >
          <p>{i + 1}. {data}</p>


          <div>
            <Button className="w-24 m-1 items-end" variant="contained" color="primary" onClick={() => Update(i)}> Update&nbsp; <UpdateIcon />  </Button>&nbsp;&nbsp;
            <Button className="w-24 m-1 items-end" variant="contained" color="secondary" onClick={() => Delete(i)}> Delete&nbsp; <DeleteOutlineOutlinedIcon /> </Button>&nbsp;&nbsp;


          </div>



        </Paper>
      })

      }

    </div>
    </div>
  );
}

export default App;
