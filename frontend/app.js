//send form to server

async function handleSubmitForm(event){
    event.preventDefault();
    //try catch 구문 사용, try and if it doesnt work, e in catch
    try {
        
         //post item on server
    const res= await fetch("/items",{
        method: "POST", 
        body: new FormData(form), 
    });

    //to go back to root page after uploading item
    const data= await res.json();
    if (data === "200") window.location.pathname= "/";

    }catch(e){
    console.error(e);
    }


    console.log("submitted");

};


const form = document.getElementById("write-form");
form.addEventListener("submit", handleSubmitForm);