
books.forEach((book)=> {
let li = document.createElement("li");
let title = document.createElement("title");
title.innerText = book.title;
let subtitle = document.createElement("subtitle")
subtitle.innertext = book.subtitle;
let author = document.createElement("author");
author.innertext = book.author
let published = document.createElement("published");
published.inneretext = book.published
let pages = document.createElement("pages");
pages.inneretext = book.pages;
let img = document.createElement("img");
img.src = book.image_url;
let description = document.createElement("description");
description.inneretext = book.description;

li.append(title,subtitle,author,published,pages,img,description);
ul.append(li);
}); 
