import './main.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import similarNews from './components/similarNews.js';
import recentNews from './components/recentNews.js';
import makeComment, {comment} from './components/comments.js';
import {initializeCommentsBtns} from './components/commentsBtns.js';


// similar/recent news structure
const newsHolder = document.querySelector('.newsHolder');
const similarNewsTemplate = similarNews.map(elem => {return `
    <div class="news">
        <img class="newsImg" alt="_" src=${elem.picture} />
        <div class="newsTitle">${elem.title}</div>
    </div>
    `
})

const recentNewsTemplate = recentNews.map(elem => {return `
    <div class="news">
        <img class="newsImg" alt="_" src=${elem.picture} />
        <div class="newsTitle">${elem.title}</div>
    </div>
    `
})


// similar/recent news buttons
const similarNewsBtn = document.querySelector(".similar");
similarNewsBtn.addEventListener('click', () => {
    newsHolder.innerHTML = similarNewsTemplate.join("");
    similarNewsBtn.style["border-bottom"] = "solid 2px var(--healthColor)"
    recentNewsBtn.style["border-bottom"] = "none"
})

const recentNewsBtn = document.querySelector(".recent");
recentNewsBtn.addEventListener('click', () => {
    newsHolder.innerHTML = recentNewsTemplate.join("");
    recentNewsBtn.style["border-bottom"] = "solid 2px var(--healthColor)"
    similarNewsBtn.style["border-bottom"] = "none"
})

newsHolder.innerHTML = similarNewsTemplate.join("")


// text area and comments
const submitBtn = document.querySelector('.submitBtn');
let textAreaInput = "";
let nickInput = "";
const textArea = document.getElementById("textArea");

if(textAreaInput === "" || nickInput === ""){
    submitBtn.style["backgound-color"] = "red";
}


textArea.addEventListener('input', (event) => {
    textAreaInput = event.target.value;
    
})


const textInput = document.getElementById("textInput");
textInput.addEventListener('input', (event) => {
    nickInput = event.target.value;
})


// add new comment

//generate random id function
function guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}


submitBtn.addEventListener('click', () => {
    if(textAreaInput === "" || nickInput === ""){
        return;
    }
    const newComment = new Object(comment)
    newComment.username = nickInput;
    newComment.text = textAreaInput;
    newComment.id = guidGenerator();

    if(JSON.parse(localStorage.getItem('listOfComments')) === null){
        rawComments = rawComments
    }else{
        rawComments = JSON.parse(localStorage.getItem('listOfComments'))
    }
    
    rawComments.push(newComment);

    localStorage.setItem('listOfComments', JSON.stringify(rawComments))
    commentsContainer.innerHTML = makeComment(JSON.parse(localStorage.getItem('listOfComments'))).join("")

    // set new querySelectors
    initializeCommentsBtns();

    // clear inputs
    textArea.value = "";
    textInput.value = ''

    alert("Twój komentarz sotał dodany pomyślnie. Dziękujemy")
})


export const commentsContainer = document.querySelector(".commentsContainer");

// set basic comments
if(JSON.parse(localStorage.getItem('listOfComments')) === null){
    commentsContainer.innerHTML = makeComment(rawComments).join("") 
}else{
    commentsContainer.innerHTML = makeComment(JSON.parse(localStorage.getItem('listOfComments'))).join("")
}


// category box hide and show on scroll

const headerContainer = document.querySelector(".headerContainer");
window.onscroll = function() {

    if (this.oldScroll < this.scrollY) {
        headerContainer.style['transform'] = "translateY(-350px)";
        headerContainer.style['transition'] = "transform 500ms";
    } else {
        headerContainer.style['transform'] = "translateY(0px)";
        headerContainer.style['transition'] = "transform 500ms";
    }

    this.oldScroll = this.scrollY;
}


// onload comments buttons
initializeCommentsBtns();


// to clear comments from local store
// localStorage.clear();