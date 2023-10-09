const form= document.querySelector("#signup-form");

const handleSubmit= async (event) =>{
    event.preventDefault();
    const body= new FormData(form);
    const res= await fetch("/signup",{
        method: "post",
        body: body,
    });
}

form.addEventListener("submit", handleSubmit);