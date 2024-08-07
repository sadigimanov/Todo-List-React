function TaskFilter({status, onClick}) {
    return (
        <div className="flex items-center mt-4 gap-x-2">
            <button onClick={() => onClick('all')} className={`${status === 'all' ? 'bg-gray-200' : ''} h-[40px] border border-gray-200 flex-1 inline-flex items-center justify-center`}>All</button>
            <button onClick={() => onClick('pending')} className={`${status === 'pending' ? 'bg-gray-200' : ''} h-[40px] border border-gray-200 flex-1 inline-flex items-center justify-center`}>Pending</button>
            <button onClick={() => onClick('completed')} className={`${status === 'completed' ? 'bg-gray-200' : ''} h-[40px] border border-gray-200 flex-1 inline-flex items-center justify-center`}>Completed</button>
        </div>
    );
}

export default TaskFilter;