import BuddyCard from './BuddyCard'

export default function BuddyGrid({ buddies, onConnect }) {
  if (buddies.length === 0) {
    return (
      <div className="text-center py-20" style={{ color: '#4a4a5e' }}>
        <svg
          className="w-10 h-10 mx-auto mb-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          style={{ color: '#9ca3af' }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="text-sm font-medium" style={{ color: '#9ca3af' }}>No results found</p>
        <p className="text-xs mt-1" style={{ color: '#6b7280' }}>Try a different search term.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {buddies.map((buddy) => (
        <BuddyCard key={buddy.id} buddy={buddy} onConnect={onConnect} />
      ))}
    </div>
  )
}
