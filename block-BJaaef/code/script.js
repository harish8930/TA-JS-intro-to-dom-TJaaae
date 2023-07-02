let allpeople = got.houses.reduce((acc,cv)=>{

acc = acc.concat(cv.people);
return acc
},[])


let rootElement = document.querySelector("ul")
allpeople.forEach((person)=>{
    let li = document.createElement("li");
    let image = document.createElement("img")
    image.src = person.image;
    image.alt = person.title;
    let span = document.createElement("span")
    span.innerText = person.name;
    let para = document.createElement("p")
    para.innerText = person.description;

    li.append(image,span,para);
    rootElement.append(li);
})
