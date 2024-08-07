import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskContent from "./components/TaskContent";
import TaskFilter from "./components/TaskFilter";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [text, setText] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [status, setStatus] = useState('all');

  const saveStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  const handleClick = () => {
    if (text.trim()) {
      const items = [...tasks];
      if (editIndex !== null) {
        items[editIndex].text = text;
        setEditIndex(null);
      } else {
        items.unshift({ text: text, status: 0 });
      }
      setText('');
      setTasks(items);
      saveStorage(items);
    }
  }

  const handleEdit = (index) => {
    if (tasks[index]) {
      setEditIndex(index);
      setText(tasks[index].text);
    }
  }

  const handleDelete = (index) => {
    const items = [...tasks];
    items.splice(index, 1);
    setTasks(items);
    saveStorage(items);
  }

  const handleStatus = (index) => {
    const items = [...tasks];
    items[index].status = items[index].status  ? 0 : 1;
    setTasks(items);
    saveStorage(items);
  }

  const handleChangeStatus = (value) => {
    setStatus(value);
    const items = JSON.parse(localStorage.getItem('tasks')) || [];
    if (value === 'pending') {
      setTasks(items.filter(i => i.status === 0));
    } else if (value === 'completed') {
      setTasks(items.filter(i => i.status === 1));
    } else {
      setTasks(items);
    }
  }
  

  return (
    <div className="w-[350px] mx-auto my-4 border border-gray-200 p-2">
      <TaskForm
        text={text}
        setText={setText}
        handleClick={handleClick}
      />

      <TaskFilter
        status={status}
        onClick={handleChangeStatus}
      />

      <TaskContent
        tasks={tasks}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleStatus={handleStatus}
      />
    </div>
  )
}

export default App;
