const form= document.querySelector("#login-form");

let accessToken = null;

const handleSubmit= async (event) =>{
    event.preventDefault();
    const formData= new FormData(form);
    //change form data password using sha256
    //formdata의 get써서 password가져온 다음에, sha256 사용해서 암호화
    const sha256Password= sha256(formData.get("password"));
    formData.set("password", sha256Password);


    const res= await fetch("/login",{
        method: "post",
        body: formData,
    });

    //access token
    const data= await res.json()
    accessToken= data.acces_token;
    console.log(accessToken);

    const infoDiv= document.querySelector("#info");
    infoDiv.innerText = "login succeed"

    window.location.pathname= "/";

    // const btn= document.createElement("button");
    // btn.innerText= "get item";
    // btn.addEventListener("click", async ()=>{
    //     const res= await fetch ("/items", {
    //         //add access token to header
    //         headers:{
    //             Authorization: `Bearer ${accessToken}`,
    //         },
    //     });
    //     const data= await res.json();
    //     console.log(data);
    // });
    // infoDiv.appendChild(btn);

    //server에 id, password 보냈을 때 맞으면 200, 틀리면 401받아서 그에 따른 반응
        //if (res.status === 200){
            //alert("login success");
            //window.location.pathname = "/";
            //} else if(res.status === 401) {
            //alert("login failed");
            //window.location.pathname = "/login.html";
            //}
    //또는 이 방법도 가능
        //if (data === "200"){
            //alert("login success");
            //window.location.pathname = "/";
            //} else {
            //alert("login failed");
            //window.location.pathname = "/login.html";
            //}


    };
form.addEventListener("submit", handleSubmit);