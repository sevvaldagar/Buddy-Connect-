import { useState, useEffect } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import BuddyGrid from './components/BuddyGrid'

const NAV_ITEMS = ['Feed', 'Connect', 'Messages']

export default function App() {
  const [buddies, setBuddies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/api/buddies')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch buddies')
        return res.json()
      })
      .then((data) => {
        setBuddies(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  async function handleConnect(id) {
    try {
      const res = await fetch(`/api/connect/${id}`, { method: 'POST' })
      if (!res.ok) throw new Error('Connection request failed')
      setBuddies((prev) =>
        prev.map((b) => (b.id === id ? { ...b, status: 'Pending' } : b))
      )
    } catch (err) {
      console.error(err)
    }
  }

  const availableCount = buddies.filter((b) => b.status === 'Available').length
  const pendingCount = buddies.filter((b) => b.status === 'Pending').length

  const filtered = buddies
    .filter((b) => {
      const term = searchTerm.toLowerCase().replace(/\s+/g, '')
      const name = b.name.toLowerCase()
      const nameCompact = name.replace(/\s+/g, '')
      return (
        name.includes(searchTerm.toLowerCase()) ||
        nameCompact.includes(term) ||
        (b.interests || []).some((i) => i.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    })
    .filter((b) => {
      if (filter === 'available') return b.status === 'Available'
      if (filter === 'pending') return b.status === 'Pending'
      if (filter === 'connected') return b.status === 'Connected'
      if (filter === 'recommended') return (b.match || 0) >= 75
      return true
    })

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: '#0a0a0c',
        backgroundImage: 'url(/bck.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: '#f0f0f2',
        paddingBottom: '0',
      }}
    >
      {/* Top Navigation — floating pill */}
      <div className="sticky top-0 z-20 flex justify-center pt-4 px-4">
        <nav
          className="flex items-center justify-between w-full max-w-3xl px-4 h-12"
          style={{
            backgroundColor: 'rgba(10,10,12,0.88)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '9999px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.5)',
          }}
        >
          {/* Logo */}
          <button style={{ padding: 0, background: 'none', border: 'none', cursor: 'pointer' }}>
            <img src="/logo.png" alt="Buddy Connect" className="h-6 w-auto object-contain block" />
          </button>

          {/* Nav items */}
          <div className="flex items-center gap-0.5">
            {[
              { id: 'Feed', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /> },
              { id: 'Connect', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /> },
              { id: 'Messages', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /> },
            ].map(({ id, icon }) => (
              <button
                key={id}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium transition-all"
                style={
                  id === 'Connect'
                    ? { color: '#919bdd', border: '1px solid rgba(145,155,221,0.3)', backgroundColor: 'rgba(145,155,221,0.08)' }
                    : { color: '#4b5563', border: '1px solid transparent', backgroundColor: 'transparent' }
                }
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  {icon}
                </svg>
                <span className="hidden sm:inline">{id}</span>
              </button>
            ))}
          </div>

          {/* Profile picture */}
          <button className="flex-shrink-0 rounded-full outline-none" style={{ padding: 0, background: 'none', border: 'none', cursor: 'pointer' }}>
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="Profile"
              className="w-7 h-7 rounded-full object-cover block"
              style={{ border: '1px solid rgba(255,255,255,0.15)' }}
            />
          </button>
        </nav>
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Header
          availableCount={availableCount}
          pendingCount={pendingCount}
          filter={filter}
          onFilterChange={setFilter}
        />

        <div className="mt-6 mb-6">
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            filter={filter}
            onFilterChange={setFilter}
          />
        </div>

        {!loading && !error && (
          <p className="text-xs mb-5" style={{ color: '#4b5563' }}>
            {filtered.length} people found
          </p>
        )}

        {loading && (
          <div className="flex justify-center items-center py-24">
            <div
              className="w-8 h-8 border-2 rounded-full animate-spin"
              style={{ borderColor: 'rgba(37,99,235,0.2)', borderTopColor: '#2563eb' }}
            />
          </div>
        )}

        {error && (
          <div
            className="rounded-xl p-5 text-center text-sm"
            style={{
              backgroundColor: '#1a1a22',
              border: '1px solid rgba(239,68,68,0.2)',
              color: '#f87171',
            }}
          >
            <p className="font-semibold mb-1">Connection failed</p>
            <p style={{ color: '#ef4444' }}>{error}</p>
            <p className="mt-2 text-xs" style={{ color: '#4a4a5e' }}>
              Make sure the backend is running at{' '}
              <code className="font-mono" style={{ color: '#60a5fa' }}>localhost:8000</code>.
            </p>
          </div>
        )}

        {!loading && !error && (
          <BuddyGrid buddies={filtered} onConnect={handleConnect} />
        )}
      </main>
    </div>
  )
}
