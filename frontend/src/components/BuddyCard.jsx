// pravatar.cc img numbers hand-picked per buddy
const AVATAR_PHOTOS = {
  1:  'https://i.pravatar.cc/150?img=47',
  2:  'https://i.pravatar.cc/150?img=11',
  3:  'https://i.pravatar.cc/150?img=49',
  4:  'https://i.pravatar.cc/150?img=15',
  5:  'https://i.pravatar.cc/150?img=44',
  6:  'https://i.pravatar.cc/150?img=45',
  7:  'https://i.pravatar.cc/150?img=57',
  8:  'https://i.pravatar.cc/150?img=56',
  9:  'https://i.pravatar.cc/150?img=5',
  10: 'https://i.pravatar.cc/150?img=13',
  11: 'https://i.pravatar.cc/150?img=20',
  12: 'https://i.pravatar.cc/150?img=33',
  13: 'https://i.pravatar.cc/150?img=38',
  14: 'https://i.pravatar.cc/150?img=52',
  15: 'https://i.pravatar.cc/150?img=19',
  16: 'https://i.pravatar.cc/150?img=60',
  17: 'https://i.pravatar.cc/150?img=41',
  18: 'https://i.pravatar.cc/150?img=25',
  19: 'https://i.pravatar.cc/150?img=9',
  20: 'https://i.pravatar.cc/150?img=68',
}

const AVATAR_GRADIENTS = [
  'linear-gradient(135deg, #1e1e24 0%, #2a2a34 100%)',
  'linear-gradient(135deg, #1a1a20 0%, #28282f 100%)',
  'linear-gradient(135deg, #222228 0%, #2e2e38 100%)',
  'linear-gradient(135deg, #1c1c22 0%, #262630 100%)',
  'linear-gradient(135deg, #1e1e26 0%, #2c2c36 100%)',
  'linear-gradient(135deg, #181820 0%, #24242c 100%)',
  'linear-gradient(135deg, #202028 0%, #2a2a34 100%)',
  'linear-gradient(135deg, #1a1a22 0%, #26262e 100%)',
]

const BANNER_IMAGES = {
  1:  'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=60&fit=crop&h=160', // UX Design
  2:  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=60&fit=crop&h=160', // Code
  3:  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=60&fit=crop&h=160', // Data Science
  4:  'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=60&fit=crop&h=160', // Web Dev
  5:  'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=60&fit=crop&h=160', // Product / Planning
  6:  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=60&fit=crop&h=160', // Cloud
  7:  'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=60&fit=crop&h=160', // Mobile
  8:  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=60&fit=crop&h=160', // DevOps / Servers
  9:  'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=60&fit=crop&h=160', // Graphic Design
  10: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=60&fit=crop&h=160', // Cybersecurity
  11: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=60&fit=crop&h=160', // AI / ML
  12: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=60&fit=crop&h=160', // Blockchain
  13: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=60&fit=crop&h=160', // Marketing / Analytics
  14: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=60&fit=crop&h=160', // Game Dev
  15: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=800&q=60&fit=crop&h=160', // Biology / Science
  16: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=60&fit=crop&h=160', // IoT / Hardware
  17: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=60&fit=crop&h=160', // Technical Writing
  18: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=60&fit=crop&h=160', // System Design / AWS
  19: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=60&fit=crop&h=160', // AR / VR
  20: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=60&fit=crop&h=160', // Startup
}

const TAG_STYLE = {
  bg: 'rgba(220, 220, 220, 0.2)',
  text: '#ffffff',
  border: 'rgba(200,200,200,0.13)',
}

function getInitials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export default function BuddyCard({ buddy, onConnect }) {
  const isPending = buddy.status === 'Pending'
  const isConnected = buddy.status === 'Connected'
  const gradient = AVATAR_GRADIENTS[(buddy.id - 1) % AVATAR_GRADIENTS.length]
  const bannerImage = BANNER_IMAGES[buddy.id]
  const photoUrl = AVATAR_PHOTOS[buddy.id]

  function handleMouseEnter(e) {
    e.currentTarget.style.backgroundColor = '#0d0d0d'
    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
    e.currentTarget.style.transform = 'translateY(-3px)'
    e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.7)'
  }

  function handleMouseLeave(e) {
    e.currentTarget.style.backgroundColor = '#000000'
    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
    e.currentTarget.style.transform = 'translateY(0)'
    e.currentTarget.style.boxShadow = 'none'
  }

  return (
    <div
      className="flex flex-col rounded-2xl transition-all duration-200 overflow-hidden"
      style={{
        backgroundColor: '#000000',
        border: '1px solid rgba(255,255,255,0.07)',
        cursor: 'default',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Banner */}
      <div
        className="h-20 w-full flex-shrink-0 relative overflow-hidden"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.45)' }} />
      </div>

      {/* Content with avatar overlapping banner */}
      <div className="flex flex-col gap-4 px-5 pb-5" style={{ marginTop: '-24px' }}>
        {/* Avatar + Match */}
        <div className="flex items-end justify-between">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0 overflow-hidden relative z-10"
            style={{ background: gradient, border: '2px solid #000', boxShadow: '0 4px 12px rgba(0,0,0,0.5)' }}
          >
          {photoUrl ? (
            <img
              src={photoUrl}
              alt={buddy.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                e.currentTarget.parentElement.setAttribute('data-fallback', 'true')
              }}
            />
          ) : (
            getInitials(buddy.name)
          )}
          </div>

          {buddy.match != null && (
            <div
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)' }}
            >
              <span style={{ color: '#d1d5db' }}>%{buddy.match}</span>
              <span style={{ color: '#3d3d47' }}>match</span>
            </div>
          )}
        </div>

      {/* Name + Role + Bio */}
        <div>
          <p className="font-semibold text-sm" style={{ color: '#f0f0f2' }}>
            {buddy.name}
          </p>
          <p className="text-xs mt-0.5" style={{ color: '#6b7280' }}>
            {buddy.role}
          </p>
          {buddy.bio && (
            <p
              className="text-xs mt-2 leading-relaxed"
              style={{ color: '#6b7280', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
            >
              {buddy.bio}
            </p>
          )}
        </div>

        {/* Interest tags */}
        <div className="flex flex-wrap gap-1.5">
          {(buddy.interests || []).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium"
              style={{
                backgroundColor: TAG_STYLE.bg,
                color: TAG_STYLE.text,
                border: `1px solid ${TAG_STYLE.border}`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action */}
        <div className="mt-auto">
          {isConnected ? (
            <div
              className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-sm font-medium"
              style={{
                backgroundColor: 'rgba(145,155,221,0.08)',
                border: '1px solid rgba(145,155,221,0.18)',
                color: '#919bdd',
              }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Connected
            </div>
          ) : isPending ? (
            <div
              className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-sm font-medium"
              style={{
                backgroundColor: 'rgba(145,155,221,0.08)',
                border: '1px solid rgba(145,155,221,0.2)',
                color: '#919bdd',
              }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
                />
              </svg>
              Pending
            </div>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => onConnect(buddy.id)}
                className="flex-1 py-2 px-4 rounded-xl text-sm font-semibold outline-none"
                style={{ backgroundColor: '#919bdd', color: '#fff', transition: 'background-color 0.15s, transform 0.1s' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#7a84c6')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#919bdd')}
                onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.97)')}
                onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                Connect
              </button>
              <button
                className="py-2 px-3 rounded-xl text-sm font-medium outline-none transition-all"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.09)',
                  color: '#9ca3af',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.09)'
                  e.currentTarget.style.color = '#f0f0f2'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'
                  e.currentTarget.style.color = '#9ca3af'
                }}
              >
                View Profile
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
