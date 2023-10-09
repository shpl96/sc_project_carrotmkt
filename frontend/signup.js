const form= document.querySelector("#signup-form");


//double check password
const checkPassword= () =>{
    const formData= new FormData(form);
    const password1= formData.get("password");
    const password2= formData.get("password2");
    if (password1 === password2) {
        return true;
    } else return false;

}

const handleSubmit= async (event) =>{
    event.preventDefault();
    const formData= new FormData(form);
    //change form data password using sha256
    //formdata의 get써서 password가져온 다음에, sha256 사용해서 암호화
    const sha256Password= sha256(formData.get("password"));
    formData.set("password", sha256Password);

    //password 일치하지 않았을 때 보여지는 div
    const div= document.querySelector("#passwordCheck");

    //check password
    if (checkPassword()){

    //POST on server
    const res= await fetch("/signup",{
        method: "post",
        body: formData,
    });
    const data= await res.json()
        if (data === "200"){
            //hide message
            div.innerText= "회원가입에 성공했습니다.";
            div.style.color = "blue";
        }
    } else{
        div.innerText= "비밀번호가 일치하지 않습니다. "
    }


};

form.addEventListener("submit", handleSubmit);