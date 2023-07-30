const form= document.getElementById("form");

async function handleSubmitForm(event){
    event.preventDefault();
    await fetch("/itmes", {
        method: "POST", 
        body: new FormData(form),
    });
    console.log("complete")
};


form.addEventListener("submit", handleSubmitForm);
