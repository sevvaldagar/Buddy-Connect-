const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'recommended', label: 'Recommended' },
  { id: 'available', label: 'Available' },
  { id: 'pending', label: 'Pending' },
  { id: 'connected', label: 'Connected' },
]

export default function SearchBar({ value, onChange, filter, onFilterChange }) {
  return (
    <div className="space-y-3">
      {/* Search input */}
      <div className="relative">
        <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <svg
            className="w-4 h-4"
            style={{ color: '#4a4a5e' }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
            />
          </svg>
        </span>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search by name or interest..."
          className="w-full pl-11 pr-4 py-3 rounded-xl text-sm outline-none transition-all"
          style={{
            backgroundColor: '#111115',
            border: '1px solid rgba(255,255,255,0.07)',
            color: '#f0f0f2',
            caretColor: '#919bdd',
          }}
            onFocus={(e) => (e.target.style.borderColor = 'rgba(145,155,221,0.5)')}
          onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.07)')}
        />
      </div>

      {/* Filter chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {FILTERS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => onFilterChange(id)}
            className="px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex-shrink-0"
            style={
              filter === id
                ? { backgroundColor: '#919bdd', color: '#fff' }
                : {
                    backgroundColor: '#111115',
                    color: '#6b7280',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }
            }
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}
