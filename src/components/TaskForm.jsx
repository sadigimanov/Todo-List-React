import { FiPlus } from "react-icons/fi";

function TaskForm({ text, setText, handleClick }) {
    return (
        <div className="flex items-center">
            <input
                value={text}
                onChange={e => setText(e.target.value)}
                type="text" className="h-[40px] border border-gray-200 w-full outline-none px-4"
            />
            <button
                onClick={handleClick}
                className="size-[40px] inline-flex justify-center items-center bg-green-500 text-white">
                <FiPlus />
            </button>
        </div>
    );
}

export default TaskForm;