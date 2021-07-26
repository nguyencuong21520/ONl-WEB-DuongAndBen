window.onload = init



async function init() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user && user.emailVerified){
            let email = user.email
            setUpConversationchange(email)
            loadConversations(email)
        }
        else
            console.log("bbbb");
    })
}

let loadConversations = async (email)=>{
    var currentEmail = email.trim()
    document.querySelector("#currentEmail").innerHTML = currentEmail
    let result = await firebase.firestore()
    .collection('chat')
    .where('users','array-contains',currentEmail)
    .get()

    let Conversations = getDataFromDocs(result.docs)
    console.log(Conversations)
    renderChat(Conversations[0], currentEmail)
    rederListFriends(Conversations, currentEmail)
}

let signOut = ()=>{
    firebase.auth().signOut().then(function() {
        window.open('./signin.html','_self')
      }, function(error) {
        alert('Sign Out Error', error);
      });
}



let getDataFromDoc = (doc)=>{
    let data = doc.data()
    data.id = doc.id
    return data

}

let getDataFromDocs = (docs)=>{
   let result =[]
   for(let doc of docs){
       let data = getDataFromDoc(doc)
       result.push(data)
    }
   return result
}

let renderChat = (data,email)=>{
    let dom = document.querySelector('.chat-content-container')
    let chat_name = document.querySelector('#chat_name')
    let chat_ID = document.querySelector('#currentID')

    chat_name.innerHTML = data.friendName
    chat_ID.innerHTML = data.id
    dom.innerHTML = ''

    for(let i = 0; i<data.messages.length; i++){
        let chat_class = "chat-content"
        if(data.messages[i].sentAt == email){
            chat_class = "chat-content owner"
        }
        let html = `<div class="${chat_class}">
        <span>${data.messages[i].content}</span>
      </div>`
      dom.innerHTML += html
    } 
}

let rederListFriends = (data, currentEmail)=>{
    let dom = document.querySelector("#list_friends")
    dom.innerHTML = ''
    for(let i =0; i<data.length; i++){
        let html = `<div id="${data[i].id}" class="list-group-item list-group-item-action lh-tight">
        <div>
          <img
            src="https://img.icons8.com/material-outlined/48/000000/user-male-circle.png"
          />
          <span>${data[i].friendName}</span>
        </div>

        <div class="time">
          <span>${data[i].createAt}</span>
        </div>
      </div>`

      

      dom.innerHTML += html
    }

    for(let i of data){
        let user = document.querySelector(`#${i.id}`)
        console.log(user)
        user.onclick = ()=>{
          renderChat(i, currentEmail)
        }
    }
}


let clockChat = ()=>{

    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let d = date.getDay()

    if(m < 10){
        m = "0" + m
    }
    if(h < 10){
        h = "0" + h
    }
    if(s < 10){
        s = "0" + s
    }
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var n = weekday[d]

    document.querySelector("#chat_clock").innerHTML = `${h}:${m}:${s}     ${n}`

}
clockChat()

setInterval(()=>{
    clockChat()
},1000)

let form = document.querySelector("#sent_message")
form.onsubmit = (e)=>{
    e.preventDefault()
    let message = form.m.value.trim()
    let currentID = document.querySelector("#currentID").textContent
    let currentEmail = document.querySelector("#currentEmail").textContent

    updateNewMessage(message,currentID,currentEmail)
    

    form.m.value = ""

}


let updateNewMessage = async (messageContent,currentID,email) => {
    if (currentID) {
        let conversationId = currentID
        let currentEmail = email
        let message = {
            content: messageContent,
            sentAt: currentEmail,
        }
        await firebase.firestore()
            .collection('chat')
            .doc(conversationId)
            .update({
                messages: firebase.firestore.FieldValue.arrayUnion(message)
            })
    }
}

let setUpConversationchange =  async (email) => {
    let skipRun = true
    let currentEmail = email
    console.log(currentEmail)
    firebase.firestore()
    .collection('chat')
    .where('users', 'array-contains', currentEmail)
    .onSnapshot(function (snapshot) {
        if (skipRun) {
            skipRun = false
            return
        }

        let docChanges = snapshot.docChanges()
        for (let docChange of docChanges) {
            let type = docChange.type
            let conversationDoc = docChange.doc
            let conversation = getDataFromDoc(conversationDoc)

            if (type == 'modified') {
                renderChat(conversation,currentEmail )
            }
        }
    })
}
