function importAll(r) {
    return r.keys().map(r);
}
const icons = importAll(require.context('../icons', false, /\.(png|jpe?g|svg)$/));

// w liście są już trzy komentarze, żeby nie przedstawiac pustego miejsca na stronie, ale można dodawać - są trzymane w local store
export const comment = {
    "id"          : "",
    "username"    : "",
    "date"        : `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}`,
    "text"        : "",
    "likes"       : 0,
    "downvotes"   : 0,
    "answers"     : []
}

export const answer = {
    "id"          : "",
    "username"    : "",
    "date"        : `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}`,
    "text"        : "",
    "likes"       : 0,
    "downvotes"   : 0,
}

top.rawComments = [
    {
        "id"          : "d7d6ef13-912f-ba94-4aca-9183ccab9baa",
        "username"    : "Andrzej",
        "date"        : `15.3.2021 15:23`,
        "text"        : "Straszne rzeczy z tym wirusem teraz.",
        "likes"       : 0,
        "downvotes"   : 0,
        "answers"     : [
            {
                "id"          : "bc387c3c-3229-72df-8cee-2f557a0ab002",
                "username"    : "Daria",
                "date"        : `15.3.2021 19:03`,
                "text"        : "Racja, racja.",
                "likes"       : 1,
                "downvotes"   : 2,
            },
            {
                "id"          : "d0e28ade-4f6f-8d3f-cc81-1298617cc166",
                "username"    : "Józef",
                "date"        : `15.3.2021 19:05`,
                "text"        : "W ogóle się nie zgadzam. Wirus nie istnieje",
                "likes"       : 1,
                "downvotes"   : 1,
            }
        ]
    },
    {
        "id"          : "2a660121-ae7e-3e45-e50d-b90cd707dee8",
        "username"    : "Monicccka",
        "date"        : `16.3.2021 17:47`,
        "text"        : "Jak to na majówke nie wolno?",
        "likes"       : 0,
        "downvotes"   : 0,
        "answers"     : []
    },
    {
        "id"          : "24340ab7-92dd-bf7b-954a-2b74a83c0336",
        "username"    : "Darek",
        "date"        : `16.3.2021 17:57`,
        "text"        : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "likes"       : 0,
        "downvotes"   : 0,
        "answers"     : []
    }
];

const makeComment = (arr) => {return arr.map(elem =>
    ` 
    <div class="particularComment border-bottom border-primary mb-3" id=${elem.id}>
        <div class="d-flex align-items-center">
            <div class="w-25 d-flex justify-content-center font-weight-bold">${elem.username}</div>
            <date>${elem.date}</date>
        </div>
        <div class="p-3 d-flex align-items-center contentDiv">${elem.text}</div>
        <div class="mb-1 d-flex align-items-center btnsContainer">
            <div class="d-flex align-items-center ml-3">
                <img  class="mr-3 likeBtn" alt="upvote_icon" id=${elem.id} src=${icons.filter(e => e.includes("like"))}  />
                <div class="mr-3 text-success">${elem.likes}</div>
            </div>
            <div class="d-flex align-items-center">
                <img class="mr-3 downvoteBtn" alt="downvote" id=${elem.id} src=${icons.filter(e => e.includes("thumb-down"))} />
                <div class="mr-3 text-danger">${elem.downvotes}</div>
            </div class="d-flex align-items-center">
            <button class="mr-3 font-weight-bold answerBtn" id=${elem.id}>Odpowiedz</button>
            <div class="d-flex align-items-center font-weight-bold">
                <button class="font-weight-bold showAnswersBtn" id=${elem.id}>Wyświetl odpowiedzi</button>
                <div>(${elem.answers.length})</div>
            </div>    
        </div>
    </div>
    `
)}
export default makeComment;

export const makeAnswer = (arr) => {return arr.map(elem =>
    `
    <div class="particularAnswer border-top border-primary mb-3 ml-5 mt-4">
        <div class="d-flex align-items-center mt-1">
            <div class="w-25 d-flex justify-content-center font-weight-bold">${elem.username}</div>
            <date>${elem.date}</date>
        </div>
        <div class="p-3 d-flex align-items-center contentDiv">${elem.text}</div>
        <div class="mb-1 d-flex align-items-center btnsContainer">
            <div class="d-flex align-items-center ml-3">
                <img  class="mr-3 answerLikeBtn" alt="upvote_icon" id=${elem.id} src="./icons/like.png" />
                <div class="mr-3 text-success">${elem.likes}</div>
            </div>
            <div class="d-flex align-items-center">
                <img class="mr-3 answerDownvoteBtn" alt="downvote" id=${elem.id} src="./icons/thumb-down.png" />
                <div class="mr-3 text-danger">${elem.downvotes}</div>   
        </div>
    </div>
    `
)}