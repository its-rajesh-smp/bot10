from fastapi import FastAPI

app = FastAPI()


@app.get("/health")
def healthCheck():
    return {"status":200, "message":"OK"}