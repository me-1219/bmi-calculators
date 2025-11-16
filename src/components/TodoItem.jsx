// src/components/TodoItem.jsx
import { useState } from 'react';

const TodoItem = ({ todo, onToggle, onDelete, onEdit, onPriorityChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className={`flex items-center gap-3 p-4 border rounded-lg transition-all duration-200 ${
      todo.completed 
        ? 'bg-gray-50 border-gray-200 opacity-75' 
        : 'bg-white border-gray-200 hover:shadow-md'
    }`}>
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-5 h-5 text-blue-500 rounded focus:ring-blue-500"
      />

      {/* Todo Content */}
      <div className="flex-1 min-w-0">
        {isEditing ? (
          <div className="flex gap-2">
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleEdit()}
              className="flex-1 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              autoFocus
            />
            <button
              onClick={handleEdit}
              className="px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="px-3 py-1 text-sm bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2 mb-1">
              <span
                className={`text-sm px-2 py-1 rounded-full border ${getPriorityColor(todo.priority)}`}
              >
                {todo.priority}
              </span>
              <span className="text-xs text-gray-500">
                {formatDate(todo.createdAt)}
              </span>
            </div>
            <p
              className={`break-words ${
                todo.completed ? 'line-through text-gray-500' : 'text-gray-800'
              }`}
            >
              {todo.text}
            </p>
          </>
        )}
      </div>

      {/* Actions */}
      {!isEditing && (
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {/* Priority Selector */}
          <select
            value={todo.priority}
            onChange={(e) => onPriorityChange(todo.id, e.target.value)}
            className="text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          {/* Edit Button */}
          <button
            onClick={() => setIsEditing(true)}
            className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
            title="Edit"
          >
            ✏️
          </button>

          {/* Delete Button */}
          <button
            onClick={() => onDelete(todo.id)}
            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
            title="Delete"
          >
            🗑️
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;