from fastapi import FastAPI, UploadFile, Form, Response
from fastapi.staticfiles import StaticFiles
from typing import Annotated
import sqlite3
#for GET, need to import JSONresponse
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder

#sqlite settings
con = sqlite3.connect("db.db", check_same_thread=False)
cur= con.cursor()

app = FastAPI()

#POST ON SERVER
@app.post("/items")
async def create_item(image:UploadFile, 
                title: Annotated[str, Form()], #form형식으로 str으로 정보가 올 것이다.
                price: Annotated[int, Form()], 
                description: Annotated[str, Form()], 
                place: Annotated[str, Form()],
                insertat: Annotated[int, Form()]
                ):
    
    #image is very big, so time necessary to read
    image_bytes= await image.read()
    #insert in database
    #""""""is like backtick in js
    #hex는 16진법으로 바꿔주는 기능
    cur.execute(f"""
                INSERT INTO items(title, image, price, description, place, insertat)
                VALUES ("{title}", "{image_bytes.hex()}", {price}, "{description}", "{place}", {insertat})
                """)
    con.commit()

    print(image, title, price, description, place, insertat)
    return "200"

@app.get("/items")
async def get_items():
    #bring column name(각 값들이 무엇을 의미하는지 알기 위해)
    con.row_factory= sqlite3.Row
    #bring data, in form of array
    cur= con.cursor()
    rows= cur.execute(f"""
                    SELECT * from items;
                    """).fetchall()
    #add (dict) to make response neatly organized
    return JSONResponse(jsonable_encoder(dict(row) for row in rows))
    
@app.get("/images/{item_id}")
async def get_img(item_id):
    cur= con.cursor()
    image_bytes= cur.execute(f"""
                            SELECT image from items WHERE id= {item_id}
                            """).fetchone()[0]
    #change 16진법 to 우리가 보는 이미지
    return Response(content= bytes.fromhex(image_bytes))


app.mount("/", StaticFiles(directory="frontend", html=True), name="frontend")

