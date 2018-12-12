
var config = {
    apiKey: "your_apiKey",
    authDomain: "your_websiteproject-authDomain.firebaseapp.com",
    databaseURL: "your_https://websiteproject-databaseURL.firebaseio.com",
    projectId: "your_websiteproject-projectId",
    storageBucket: "your_websiteproject-storageBucket.appspot.com",
    messagingSenderId: "your_messagingSenderId"
  };
  firebase.initializeApp(config);
  const db = firebase.firestore();
  db.settings( { timestampsInSnapshots: true });

 console.log("before before eventListener");
  const outputHeader = document.querySelector("#reserve_table");
  const inputName = document.querySelector("#User");
  const inputGuests = document.querySelector("#Guests");
  const inputSection = document.querySelector("#Section");
  const inputDate = document.querySelector("#date");
  const inputTime = document.querySelector("#time");
  const reserveButton = document.querySelector("#Reserve");
  console.log("before eventListener");
/*
  reserveButton.addEventListener("click", function() {
    const nameToSave =inputName.value;
    const guestsToSave =inputGuests.value;
    const sectionToSave =inputSection.value;
    const dateToSave =inputDate.value;
    const timeToSave =inputTime.value;
    console.log("testing...testing...");
    docRef.set({
       UserName: nameToSave,
       NumberGuests: guestsToSave,
       Section: sectionToSave,
       Date: dateToSave,
       Time: timeToSave
    }).then(function(){
        console.log("Status saved");
    }).catch(function(error){
        console.log("ERROR...ERROR...", error);
    });
  })
*/
reserveButton.addEventListener("click", (e) => {
    //e.preventDefault();
    console.log("eventListener");
    db.collection('sample').add({
        UserName: inputName.value,
        NumberGuests: inputGuests.value,
        Section: inputSection.value,
        Date: inputDate.value,
        Time: inputTime.value
    }).then(function(){
        console.log("Status saved");}).catch(function(error){
            console.log("error...error", error);
         });
  })