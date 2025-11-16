// src/components/TodoStats.jsx
const TodoStats = ({ todos }) => {
  const total = todos.length;
  const completed = todos.filter(todo => todo.completed).length;
  const active = total - completed;
  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

  const priorityCounts = todos.reduce((acc, todo) => {
    acc[todo.priority] = (acc[todo.priority] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
      <div className="text-center">
        <div className="text-2xl font-bold text-blue-600">{total}</div>
        <div className="text-sm text-gray-600">Total</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-green-600">{active}</div>
        <div className="text-sm text-gray-600">Active</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-gray-600">{completed}</div>
        <div className="text-sm text-gray-600">Completed</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-purple-600">{completionRate}%</div>
        <div className="text-sm text-gray-600">Done</div>
      </div>
    </div>
  );
};

export default TodoStats;