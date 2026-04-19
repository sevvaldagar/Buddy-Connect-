from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from data import buddies

app = FastAPI(title="Buddy Connect API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)


@app.get("/api/buddies")
def get_buddies():
    return buddies


@app.post("/api/connect/{buddy_id}")
def connect_buddy(buddy_id: int):
    for buddy in buddies:
        if buddy["id"] == buddy_id:
            buddy["status"] = "Pending"
            return {"message": f"Connection request sent to {buddy['name']}!", "buddy": buddy}
    raise HTTPException(status_code=404, detail="Buddy not found")
