 //add time meta info
const calcTime = (timestamp) =>{
    const curTime= new Date().getTime() -9*60*60*1000;
    const time= new Date(curTime - timestamp);
    const hour= time.getHours();
    const min= time.getMinutes();
    const sec= time.getSeconds();

    if (hour>0) return `${hour}시간 전`
    else if (min>0) return `${min}분 전`
    else if (sec>=0) return `${sec}초 전`
    else return "방금 전";

}

//with the data, send it to frontend HTML to show
const renderData= (data) =>{
    //html에서 main안에 div만들어 가져온 정보 추가할거임
    const main = document.querySelector("main");
    
    //배열 내부의 값을 하나씩 돌면서 다음 명령을 수행 => for each
    // 가장 처음 올린 것이 밑으로, 마지막에 올린 것이 위로 => reverse
    data.reverse().forEach(async(obj) => {
        //add div to HTML >> get title from server using for each >> append div to main
        const mainBoxList= document.createElement("div");
        mainBoxList.className = "main-box-list";
        //create image box
        const boxImg= document.createElement("div");
        boxImg.className= "box-img";
        const img= document.createElement("img");
        //change blob image to image we wwant to show
        const res= await fetch(`/images/${obj.id}`)
        const blob= await res.blob();
        const url= URL.createObjectURL(blob);
        img.src= url;

        //create description box
        const boxDesc= document.createElement("div");
        boxDesc.className = "box-desc";

        const descTitle= document.createElement("div");
        descTitle.className = "desc-title";
        descTitle.innerText= obj.title;

        const descMeta= document.createElement("div");
        descMeta.className = "desc-meta";
        //add time info 
        descMeta.innerText= obj.place + " " + calcTime(obj.insertat);

        

        const descPrice= document.createElement("div");
        descPrice.className = "decs-price";
        descPrice.innerText= obj.price;

        //append img
        mainBoxList.appendChild(boxImg);
        boxImg.appendChild(img);
        //append decsription
        mainBoxList.appendChild(boxDesc);
        boxDesc.appendChild(descTitle);
        boxDesc.appendChild(descMeta);
        boxDesc.appendChild(descPrice);
        //append everything to main
        main.appendChild(mainBoxList);
        });


}

//GET data from server
const fetchList= async () => {
    //access token
    const accessToken = window.localStorage.getItem("token");
    const res= await fetch("/items", {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });


    if (res.status === 401){
        alert("need to log in");
        window.location.pathname = "/login.html";
        return;
        } 

    const data= await res.json();
    renderData(data);
}

fetchList();