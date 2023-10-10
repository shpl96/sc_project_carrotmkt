from fastapi import FastAPI, UploadFile, Form, Response, Depends
from fastapi.staticfiles import StaticFiles
from typing import Annotated
import sqlite3
#for GET, need to import JSONresponse
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
#login
from fastapi_login import LoginManager
#error
from fastapi_login.exceptions import InvalidCredentialsException

#sqlite settings
con = sqlite3.connect("db.db", check_same_thread=False)
cur= con.cursor()

app = FastAPI()

#login manager
SECRET= "soheetheprogrammer"
manager= LoginManager(SECRET, "/login")

@manager.user_loader()
def query_user(data):
    WHERE_STATEMENT = f'id="{data}"' 
    if type (data) == dict:
        WHERE_STATEMENT = f'name="{data["name"]}"'

    con.row_factory= sqlite3.Row
    cur= con.cursor()
    user= cur.execute(f"""
                    SELECT * from users WHERE {WHERE_STATEMENT}
                    """).fetchone()
    return user

@app.post("/login")
def login(id: Annotated[str, Form()],
            password: Annotated[str, Form()]
            ):
    user= query_user(id)
    print(user)
    #유저가 없으면 error메세지 보내라 = raise
    #elif password 틀리면 error raise
    if not user:
        raise InvalidCredentialsException
    elif password != user["password"]:
        raise InvalidCredentialsException
    
    #return access token so server can remember the user
    access_token= manager.create_access_token(data={
        "sub":{
            "id": user["id"],
        "name": user["name"],
        "email": user["email"]
        }
    })
    return {"access_token": access_token}

#signup page
@app.post("/signup")
def signup(id: Annotated[str, Form()],
            password: Annotated[str, Form()],
            name: Annotated[str, Form()],
            email: Annotated[str,Form()]
            ):
    cur.execute(f"""
                    INSERT INTO users(id, name, email, password)
                    VALUES('{id}', '{name}', '{email}', '{password}')
                    """)
    con.commit()
    return "200"

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
#access token 추가, 인증되어야지만 아래 명령 보내줄거야
async def get_items(user= Depends(manager)):
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

