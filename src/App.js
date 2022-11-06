import './App.css';
import { useState } from 'react';

function App() {
const [task, setTask] = useState("");
const [list, setList] = useState([])

  return (
    <div className="App">
      <div className='container'>
        {list.map((task, index)=>{
            return <div key={index}>
             <input type="checkbox" checked={task.isDone} onChange={(event)=>{
              const newList = [...list];
              newList[index].isDone = event.target.checked;
              setList(newList);
             }} />
              <p className={task.isDone ? "done" : ""}>{task.title}</p>
              <p onClick={()=> {
                const newList= [];
                for (let i =0; i < list.length; i++){
                  if (i !== index){
                    newList.push(list[i]);
                  }
                }
                setList(newList)
              }}>DELETE</p>
              </div>

        })}
        <input className="research" type="text" value={task} placeholder='new task'onChange={(event)=>{
          setTask(event.target.value);
        }}/>
        <button type='submit' onClick={()=> {
          const newTab = [...list];
          newTab.push({
            title: task,
            isDone: false
          });
          setList(newTab);
          setTask('');
        }}>Add task</button>
      </div>
    </div>
  );
}

export default App;
