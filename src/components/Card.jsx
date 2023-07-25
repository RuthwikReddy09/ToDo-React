import React, {useState } from 'react'
import { MdDelete } from "react-icons/md"
import { GrUpdate } from "react-icons/gr"
function Todo() {
  const [change, setChange] = useState(false);
  const [newTodo, setNewTodo] = useState("");
  let temp = [];
  Object.keys(localStorage).forEach(function (key) {
    temp.push(JSON.parse(localStorage.getItem(key)));
  });
  const deleteTodo = (key) => {
    localStorage.removeItem(key);
    setChange(!change);
  }
  const updateTodo = (key) => {
    localStorage.removeItem(key);
    setChange(!change);
  }
  const doneTodo = (e,key) => {
    const checked=e.target.checked;
    const text = document.getElementById(key);
    if(checked==false)
    {
      text.style.textDecoration="none";
    }
    else
    {
      text.style.textDecoration="line-through";
    }
    const data = JSON.parse(localStorage.getItem(key));
    localStorage.removeItem(key);
    data.flag=!data.flag;
    localStorage.setItem(key,JSON.stringify(data));
    setChange(!change);
  }
  const addTodo = () => {
    if (newTodo != "") {
      const id=new Date().getTime().toString();
      localStorage.setItem(id, JSON.stringify({ key: id, task: newTodo, flag: false }));
      setNewTodo("");
      setChange(!change);
    }
  }
  return (
    <div className='todo-card'>
      <div className="input">
        <input value={newTodo} type="text" autofocus="autofocus" id="new" onChange={(e) => setNewTodo(e.target.value)} />
        <button onClick={(e) => addTodo()}>Add</button>
      </div>
      {temp.map((data) => {
        return (
          <div className='task' key={data.key}>
            <div className="add" id="add">
            {/* <input type='checkbox' name="done" id="done"   />   */}
            <input type='checkbox' name="done" id="done" className="checkbox" checked={data.flag} onChange={(e) => doneTodo(e,data.key)} />
            {!data.flag ? <p className="data" id={data.key} onClick={(e) => doneTodo(e,data.key)}>{data.task}</p>:<p className="data" id={data.key} style={{ textDecoration: "line-through" }} key={data.key} onClick={(e) => doneTodo(e,data.key)}>{data.task}</p>}
            </div>
           
              <div className="delete" onClick={() => deleteTodo(data.key)}>
                <MdDelete size={20} />
              </div>
          
          </div>
        )
      }
      )}
    </div>
  )
}
export default Todo
