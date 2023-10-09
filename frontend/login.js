const form= document.querySelector("#login-form");


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
    const data= await res.json()
    console.log(data);
        if (res.status === 200){
            alert("login success");
            window.location.pathname = "/";
            } else if(res.status === 401) {
            alert("login failed");
            window.location.pathname = "/login.html";
            }
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