from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import uvicorn, os, json

from scripts.inference import predict

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://raincloud-app.vercel.app/"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_DIR = os.path.join(os.path.dirname(__file__), "Uploaded_images")

@app.get("/")
async def index():
    return {"none": None}

@app.post("/predict")
async def upload_file(file: UploadFile = File(...)):
    # アップロードされたファイルを指定のディレクトリに保存するパスを指定
    input_image_path = os.path.join(UPLOAD_DIR, "input_image.jpg")
    
    # アップロードされたファイルを指定したパスに保存
    with open(input_image_path, "wb") as buffer:
        buffer.write(await file.read())
 
    result = predict(input_image_path)
    
    return result


if __name__=="__main__":
    uvicorn.run("run:app",port=3001, reload=True)