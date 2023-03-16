const bucketBox = document.getElementById("bucketBox"); //전체 div박스
const bucketForm = document.getElementById("bucketForm"); // 제출폼
const bucketInput = bucketForm.querySelector("input"); 
const bucketList = document.getElementById("bucketList"); //버킷 리스트
const bucketVisible = document.querySelector(".bucketVisible"); // onoff버튼

const BUCKET_KEY = "bucket" //로컬스토리지 키

let arrBucket = []; // 버킷리스트 저장


// bucketBox
function saveBucket(){
    localStorage.setItem(BUCKET_KEY,JSON.stringify(arrBucket));
}

function deleteBucket(event){
    const li = event.target.parentElement.parentElement;
    li.remove();
    arrBucket = arrBucket.filter(obj=>{return obj.id != parseInt(li.id)});
    saveBucket();    
}

function makeBucket(newBucket){
    const li = document.createElement("li");
    li.id = newBucket.id;
    li.classList.add("bucket");
    const bucketContent = document.createElement("label");
    bucketContent.innerText = newBucket.text;
    const bucketButton = document.createElement("span");
    bucketButton.classList.add("button");
    bucketButton.innerHTML = "<img src='./images/cross.png'>"
    bucketButton.addEventListener("click",deleteBucket);
    li.appendChild(bucketContent);
    li.appendChild(bucketButton);
    bucketList.appendChild(li);
}

function handleBucketSubmit(event){
    event.preventDefault();
    const newBucket = {
        text: bucketInput.value,
        id: Date.now(),
    };
    bucketInput.value = "";
    arrBucket.push(newBucket);
    makeBucket(newBucket);
    saveBucket();
}
bucketForm.addEventListener("submit",handleBucketSubmit);

const localBucket = localStorage.getItem(BUCKET_KEY);

if(localBucket !== null){
    const parsedBucket = JSON.parse(localBucket);
    arrBucket = parsedBucket;
    parsedBucket.forEach(makeBucket);
}