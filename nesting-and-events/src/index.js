import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import TaskContainer from './components/TaskContainer';
import Task from './components/Task';

const taskList = [
  { id: "task1", title: "Buy Milk", isComplete: true},
  { id:"task2", title: "Read a book", isComplete: false},
  { id:"task3", title: "Early morning run", isComplete:false},
  { id:"task4", title:"Drink water", isComplete:false},
  { id:"task5", title:"Visit the puppy shelter", isComplete:true},
  { id:"task6", title:"Watch Bad Sisters", isComplete:false}
];


function App() {
  const [data] = React.useState(taskList)
   return (
      <Fragment>
        <h1 key="heading">Task List</h1>
        <TaskContainer>
          {data.map((item) => {
            const {title, isComplete, id} = item;
            console.log(item)
            return <Task 
            key={id} 
            id={id} 
            title={title} 
            isComplete={isComplete}/>
          })}
          <Task 
          id={taskList[0].id} 
          title={taskList[0].title} 
          isComplete={taskList[0].isComplete}>
          </Task>
        </TaskContainer>
      </Fragment>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

