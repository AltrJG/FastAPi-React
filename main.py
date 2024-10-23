from fastapi import FastAPI
from typing import List
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class User(BaseModel):
    id: int
    name: str

@app.get("/users", response_model=List[User])
async def get_users():
    return [
        {"id": 1, "name": "Juan"},
        {"id": 2, "name": "María"},
        {"id": 3, "name": "Pedro"}
    ]

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, port=8000)
