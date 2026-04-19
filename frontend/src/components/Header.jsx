export default function Header({ availableCount, pendingCount, filter, onFilterChange }) {
  return (
    <div className="mb-2">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ color: '#f0f0f2' }}>
            Discover
          </h1>
          <p className="mt-1 text-sm" style={{ color: '#9ca3af' }}>
            Discover people with shared interests
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => onFilterChange(filter === 'available' ? 'all' : 'available')}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all"
            style={
              filter === 'available'
                ? { backgroundColor: 'rgba(145,155,221,0.12)', border: '1px solid rgba(145,155,221,0.3)' }
                : { backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)' }
            }
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: filter === 'available' ? '#919bdd' : '#d1d5db' }}
            />
            <span
              className="text-xs font-medium"
              style={{ color: filter === 'available' ? '#919bdd' : '#9ca3af' }}
            >
              {availableCount} available
            </span>
          </button>

          {pendingCount > 0 && (
            <button
              onClick={() => onFilterChange(filter === 'pending' ? 'all' : 'pending')}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all"
              style={
                filter === 'pending'
                  ? { backgroundColor: 'rgba(145,155,221,0.12)', border: '1px solid rgba(145,155,221,0.3)' }
                  : { backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)' }
              }
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: filter === 'pending' ? '#919bdd' : '#d1d5db' }}
              />
              <span
                className="text-xs font-medium"
                style={{ color: filter === 'pending' ? '#919bdd' : '#9ca3af' }}
              >
                {pendingCount} pending
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
