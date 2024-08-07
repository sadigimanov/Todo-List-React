import { FiEdit, FiTrash } from "react-icons/fi";

function TaskItem({ task, index, handleDelete, handleEdit, handleStatus }) {
    return (
        <div className="flex items-center border border-gray-200 p-2">
            <label className={`flex flex-1 items-center gap-x-1 ${task.status ? 'line-through' : ''}`}>
                <input
                    checked={task.status}
                    type="checkbox"
                    onChange={() => handleStatus(index)}
                />
                <span>{task.text}</span>
            </label>
            <div className="space-x-1">
                <button onClick={() => handleEdit(index)} className="bg-blue-500 text-white size-[30px] inline-flex justify-center items-center rounded">
                    <FiEdit />
                </button>
                <button onClick={() => handleDelete(index)} className="bg-red-500 text-white size-[30px] inline-flex justify-center items-center rounded">
                    <FiTrash />
                </button>
            </div>
        </div>
    )
}

export default TaskItem;