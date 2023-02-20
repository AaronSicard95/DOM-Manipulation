let newli;
function findContainerNoQ(){
    let el = document.getElementById("container");
    return el.outerHTML;
}
function findConatinerWithQ(){
    let el = document.querySelector("#container");
    return el.outerHTML;
}
function selectAllSecond(){
    let el = document.querySelectorAll("li.second");
    return "got all list items with second class";
}
function selectThirdInOL(){
    let el = document.querySelector("ol li.third");
    return el.outerHTML;
}
function helloFunction(){
    document.getElementById("container").innerHTML += "Hello!";
    return "added Hello!";
}
function addMainToFooter(){
    document.querySelector("div.footer").classList.add("main");
    return "added main to footer";
}
function removeMainFromFooter(){
    document.querySelector("div.footer").classList.remove("main");
    return "removed main from footer";
}
function createLi(){
    newli = document.createElement("li");
    return "created list element";
}
function makeNewLiFour(){
    newli.innerHTML = "four";
    return "created gave list element four text";
}
function addLiToList(){
    document.querySelector("ul").append(newli);
    return "added four to list";
}
function makeLisGreen(){
    let lis = document.querySelectorAll("ol li");
    for(let i = 0; i < lis.length; i++){
        lis[i].classList.add("green");
        console.log(lis[i].classList);
    }

    return "made lis in ol green";
}
function removeFooter(){
    if(document.querySelector("div.footer" != null)){
    let footer = document.querySelector("div.footer");
    footer.remove();
    return "removed footer";
} else {
    return "footer already removed";
}
}




function OnClickButton(func){
    
    document.getElementById("info").innerHTML = func();
    return func();
}

document.getElementById("contNoQButton").onclick = function(){OnClickButton(findContainerNoQ)};
document.getElementById("contWithQButton").onclick = function(){OnClickButton(findConatinerWithQ)};
document.getElementById("secondClassButton").onclick = function(){OnClickButton(selectAllSecond)};
document.getElementById("thirdOLButton").onclick = function(){OnClickButton(selectThirdInOL)};
document.getElementById("HelloButton").onclick = function(){OnClickButton(helloFunction)};
document.getElementById("mainToFootButton").onclick = function(){OnClickButton(addMainToFooter)};
document.getElementById("mainFromFootButton").onclick = function(){OnClickButton(removeMainFromFooter)};
document.getElementById("newListItemButton").onclick = function(){OnClickButton(createLi)};
document.getElementById("makeFourButton").onclick = function(){OnClickButton(makeNewLiFour)};
document.getElementById("appendLiButton").onclick = function(){OnClickButton(addLiToList)};
document.getElementById("greenButton").onclick = function(){OnClickButton(makeLisGreen)};
document.getElementById("removeFootButton").onclick = function(){OnClickButton(removeFooter)};
