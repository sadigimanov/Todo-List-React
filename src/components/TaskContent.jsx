import TaskItem from "./TaskItem";

function TaskContent({ tasks = [], handleDelete, handleEdit, handleStatus }) {
    return (
        <div className="mt-6 space-y-3">
            {tasks.map((task, index) => (
                <TaskItem
                    key={index}
                    task={task}
                    index={index}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    handleStatus={handleStatus}
                />
            ))}
        </div>
    );
}

export default TaskContent;