function reset() {
    document.querySelector(".date").value=" ";
    document.querySelector(".desc").value=" ";
}
var arr1 = [];
function addTask() {
    event.preventDefault();
    let date = document.querySelector(".date").value;
    let desc = document.querySelector(".desc").value;

    let obj1 = {
        d1 : date,
        d2 : desc
    }

    arr1.push(obj1);

    let tr = document.createElement("tr");
        
    let c1 = document.createElement("td");
    c1.innerText = date;

    let c2 = document.createElement("td");
    c2.innerText = desc;

    let c3 = document.createElement("td");
    let b1 = document.createElement("button");
    b1.style.cssText = "background-color: red;color:white; border-radius:5px;padding:5px;border:0;font-weight:bolder;cursor:pointer;";
    b1.innerText = "Delete";
    c3.append(b1);

    let c4 = document.createElement("td");
    let b2 = document.createElement("button");
    b2.style.cssText = "background-color: rgb(212, 175, 11) ;color:white; border-radius:5px;padding:5px;border:0;font-weight:bolder;cursor:pointer;";
    b2.innerText = "Update";
    c4.append(b2);

    tr.append(c1,c2,c3,c4);

    document.querySelector(".task").append(tr);


}