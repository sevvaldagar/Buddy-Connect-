# Buddy Connect

A mini full-stack dashboard where users can discover and connect with peers based on shared interests.

**Stack:** React + Vite + Tailwind CSS (frontend) · Python + FastAPI (backend)

---

## Prerequisites

| Tool | Version |
|------|---------|
| Node.js | 18+ |
| npm | 9+ |
| Python | 3.10+ |
| pip | latest |

---

## Running Locally

### 1 — Clone / open the project

```bash
cd "BuddyConnect"
```

### 2 — Start the Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

The API will be available at `http://localhost:8000`.

**Endpoints:**
- `GET  /api/buddies`         – Returns the full list of buddies
- `POST /api/connect/{id}`    – Sends a connection request; updates buddy status to `"Pending"`

Interactive API docs (Swagger UI): `http://localhost:8000/docs`

### 3 — Start the Frontend

Open a **second terminal**, then:

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

> All `/api` requests are proxied to `localhost:8000` via Vite — no extra CORS setup needed.

---

## Project Structure

```
BuddyConnect/
├── backend/
│   ├── main.py           # FastAPI app — CORS middleware + API endpoints
│   ├── data.py           # In-memory buddy dataset (20 entries)
│   └── requirements.txt
├── frontend/
│   ├── public/
│   │   ├── logo.png      # Navbar logo
│   │   └── bck.jpg       # Background image
│   ├── index.html
│   ├── vite.config.js    # Dev proxy: /api → localhost:8000
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── package.json
│   └── src/
│       ├── main.jsx
│       ├── App.jsx           # Root: fetch, filter, connect logic + navbar
│       ├── index.css         # Tailwind directives + scrollbar-gutter
│       └── components/
│           ├── Header.jsx    # Page title + available/pending filter badges
│           ├── SearchBar.jsx # Search input + filter chips
│           ├── BuddyGrid.jsx # Responsive card grid
│           └── BuddyCard.jsx # Individual buddy card with connect action
└── README.md
```

---

## Features

- **Live search** — Filter buddies by name (including no-space input like `"alicejohnson"`) or interest
- **Filter chips** — All / Recommended / Available / Pending / Connected
- **Header badges** — Click "available" or "pending" counts to toggle that filter
- **Connect** — Calls `POST /api/connect/{id}`; card instantly shows a "Pending" badge
- **Responsive** — 1 column mobile / 2 tablet / 3 desktop; pill navbar shows icons-only on small screens
- **Loading & error states** — Spinner while fetching; error message if backend is unreachable

---

## Notes

- Buddy data is stored **in memory**. Restarting the backend resets all statuses to `"Available"` — expected for a prototype.
- No database or authentication required.
