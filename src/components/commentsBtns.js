import {commentsContainer} from '../index.js'
import makeComment, {makeAnswer} from './comments.js'

let isDisplayAnswerBtnActive = false;
let isAnswerBtnActive = false;


export const initializeCommentsBtns = () => {
    runLikeAndDownvoteBtns(".likeBtn", "likes");
    runLikeAndDownvoteBtns(".downvoteBtn", "downvotes");
    runShowAnswersBtn();
    runAnswersBtn();
    isDisplayAnswerBtnActive = false;
    isAnswerBtnActive = false;
}

export const runLikeAndDownvoteBtns = (container, category) => {
    const likeBtn = document.querySelectorAll(container); 
    Object.values(likeBtn).map(elem => elem.addEventListener('click', (event) => {
        event.preventDefault();
    
        // check if there is more than base comments
        if(JSON.parse(localStorage.getItem('listOfComments')) === null){
            rawComments = rawComments
        }else{
            rawComments = JSON.parse(localStorage.getItem('listOfComments'))
        }
        
        // find comment witch is targeted by event
        let commentToChange = Object.values(rawComments).filter(elem =>
            elem.id === event.target.id
        )
        // increment likes
        commentToChange[0][category]++
        
        // find index of changed element and replace it with new one 
        const index = rawComments.indexOf(commentToChange[0])
        rawComments[index] = commentToChange[0]
        
        // save changed comment in localStore and refresh displayed comments
        localStorage.setItem('listOfComments', JSON.stringify(rawComments))
        commentsContainer.innerHTML = makeComment(rawComments).join("")
        
        // refresh query selectors
        initializeCommentsBtns();

        })
    )
}


export const runShowAnswersBtn = () => {
    const showAnswersBtn = document.querySelectorAll(".showAnswersBtn")
    const particularComment = document.querySelectorAll('.particularComment')
    
    Object.values(showAnswersBtn).map(elem => elem.addEventListener('click', (event) => {
        event.preventDefault();

        // check if there is more than base comments
        if(JSON.parse(localStorage.getItem('listOfComments')) === null){
            rawComments = rawComments
        }else{
            rawComments = JSON.parse(localStorage.getItem('listOfComments'))
        }
        
        // find comment witch is targeted by event
        const commentToChange = Object.values(rawComments).filter(elem =>
            elem.id === event.target.id
        )        
        
        // make answer
        const answerList = makeAnswer(commentToChange[0].answers).join("")

        // show or hide comments
        if(!isDisplayAnswerBtnActive){
            // prepare answer to append to parent
            const answersDiv = document.createElement("div");
            answersDiv.classList.add("answersContainer")
            answersDiv.innerHTML = answerList;        
            
            // find comment to witch answer should be appended
            const commentToAppendAnswers = Object.values(particularComment).filter(elem =>
                elem.id === event.target.id
            )

            commentToAppendAnswers[0].appendChild(answersDiv)
            isDisplayAnswerBtnActive = true;
            return;
        } else {
            const answersContainer = document.querySelectorAll('.answersContainer');
            answersContainer[0].remove();
            isDisplayAnswerBtnActive = false;
            return;
        }
    }))
}

export const runAnswersBtn = () => {
    const answerBtn = document.querySelectorAll(".answerBtn")
    const particularComment = document.querySelectorAll('.particularComment')
    
    Object.values(answerBtn).map(elem => elem.addEventListener('click', (event) => {
        event.preventDefault();

        // check if there is more than base comments
        if(JSON.parse(localStorage.getItem('listOfComments')) === null){
            rawComments = rawComments
        }else{
            rawComments = JSON.parse(localStorage.getItem('listOfComments'))
        }
        
        // find comment witch is targeted by event
        const commentToChange = Object.values(rawComments).filter(elem =>
            elem.id === event.target.id
        )

        // show or hide textarea
        if(!isAnswerBtnActive){
            // prepare textarea to append to parent
            const answerTextArea = document.createElement("form");
            answerTextArea.classList.add("answerTextArea")

            const textAreaTemplate = `
                <div class="was-validated mt-3 mb-3">
                    <textarea class="form-control is-invalid" id="textArea" 
                    placeholder="Ta sekcja nie działa, bo nie ma bazy danych" required rows="4"></textarea>
                    <div class="d-flex">
                        <div class="was-validated w-75">
                            <input minlength="3" id="textInput" required class="form-control is-invalid" type="text" placeholder="Twój nick">
                        </div>
                        <button class="h-auto bg-info w-25 rounded answerSubmitBtn" type="submit">Zatwierdź</button>
                    </div>
                </div>
            `
            answerTextArea.innerHTML = textAreaTemplate;       
            
            // find comment to witch textarea should be appended
            const commentToAppendAnswers = Object.values(particularComment).filter(elem =>
                elem.id === event.target.id
            )

            commentToAppendAnswers[0].appendChild(answerTextArea)
            isAnswerBtnActive = true;
            // initializeCommentsBtns();
            return;
        } else {
            const answerTextArea = document.querySelector('.answerTextArea');
            answerTextArea.remove();
            isAnswerBtnActive = false;
            // initializeCommentsBtns();
            return;
        }
    }))
}
