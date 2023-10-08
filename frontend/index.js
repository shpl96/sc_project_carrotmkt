//with the data, send it to frontend HTML to show
const renderData= (data) =>{
    //html에서 main안에 div만들어 가져온 정보 추가할거임
    const main= document.querySelector("main";)
    
    //배열 내부의 값을 하나씩 돌면서 다음 명령을 수행 => for each
    data.forEach((obj) => {
        const div= document.createElement("div");
        div.innerText= obj.title;
        main.appendChild(div);
        });
}

//GET data from server
const fetchList= async () => {
    const res= await fetch('/items');
    const data= await res.json();
    renderData(data);
}

fetchList();