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
  //const outputHeader = document.querySelector("#reserve_table");
  const firstName = document.querySelector("#firstname");
  const lastName = document.querySelector("#lastname");
  const areaCode = document.querySelector("#areacode");
  const telNum = document.querySelector("#telnum");
  const emailId = document.querySelector("#emailid");
  const feedBack = document.querySelector("#feedback");
  const feedBack_Button = document.querySelector("#feedback_button");
  console.log("before eventListener");

  feedBack_Button.addEventListener("click", (e) => {
    //e.preventDefault();
    console.log("eventListener");
    db.collection('feedback').add({
        FirstName: firstName.value,
        LastName: lastName.value,
        AreaCode: areaCode.value,
        TelNum: telNum.value,
        EmailId: emailId.value,
        FeedBack: feedBack.value
    }).then(function(){
   console.log("Status saved");}).catch(function(error){
       console.log("error...error", error);
    });
  })