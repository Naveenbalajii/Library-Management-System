
var firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};



firebase.initializeApp(firebaseConfig);
firebase.analytics();

const database = firebase.database();
const auth = firebase.auth();


document.getElementById("signup").addEventListener("click", function () {
    
    var username = document.getElementById("Name").value;
    var email = document.getElementById("Email_id").value;
    var password = document.getElementById("password").value;
    

    console.log(email);
    console.log(password);

    auth.createUserWithEmailAndPassword(email, password)
        .then(function () {
            var user = auth.currentUser
            var database_ref = database.ref()

            console.log(user);

            var user_data = {
                
                username: username,
                
            }

            database_ref.child('User/' + user.uid)
                .set(user_data)
                .then(() => {
                    alert("Signed up Successfully...")
                    window.location.assign("user_mainpage.html");
                })
                .catch((err) => {
                    alert("Data add failed")
                })
        })

        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error);
            alert(error);




        });



});
