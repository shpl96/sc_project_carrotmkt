from fastapi import FastAPI, UploadFile, Form
from fastapi.staticfiles import StaticFiles
from typing import Annotated
import sqlite3

#sqlite settings
con = sqlite3.connect("db.db", check_same_thread=False)
cur= con.cursor()

app = FastAPI()

@app.post("/items")
async def create_item(image:UploadFile, 
                title: Annotated[str, Form()], #form형식으로 str으로 정보가 올 것이다.
                price: Annotated[int, Form()], 
                description: Annotated[str, Form()], 
                place: Annotated[str, Form()]):
    
    #image is very big, so time necessary to read
    image_bytes= await image.read()
    #insert in database
    #""""""is like backtick in js
    #hex는 16진법으로 바꿔주는 기능
    cur.execute(f"""
                INSERT INTO items(title, image, price, description, place)
                VALUES ("{title}", "{image_bytes.hex()}", {price}, "{description}", "{place}")
                """)
    con.commit()

    print(image, title, price, description, place)
    return "200"



app.mount("/", StaticFiles(directory="frontend", html=True), name="frontend")

