const TodoItem = ({ todo, onDelete }) => {
    return (
        <div className="flex justify-between items-center p-4 border-b-2 border-black">
            <span className="text-lg">{todo}</span>
            <button 
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                onClick={onDelete}
            >
                Delete
            </button>
        </div>
    );
};

export default TodoItem;