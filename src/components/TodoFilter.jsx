// src/components/TodoFilter.jsx
const TodoFilter = ({
  filter,
  onFilterChange,
  searchTerm,
  onSearchChange,
  onClearCompleted,
  onToggleAll,
  hasTodos
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-6">
      {/* Search Input */}
      <div className="flex-1 w-full sm:max-w-xs">
        <input
          type="text"
          placeholder="Search todos..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-2">
        {['all', 'active', 'completed'].map((filterType) => (
          <button
            key={filterType}
            onClick={() => onFilterChange(filterType)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === filterType
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
          </button>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <button
          onClick={onToggleAll}
          disabled={!hasTodos}
          className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Toggle All
        </button>
        <button
          onClick={onClearCompleted}
          className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600 transition-colors"
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default TodoFilter;