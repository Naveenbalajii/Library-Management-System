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
const auth = firebase.auth();
firebase.analytics();
const database = firebase.database();


document.getElementById("signin").addEventListener("click", function () {
    var email = document.getElementById("Email_id").value;
    var password = document.getElementById("password").value;


    console.log(email);
    console.log(password);

    auth.signInWithEmailAndPassword(email, password)
        .then(function () {
            var user = auth.currentUser
            var database_ref = database.ref()
            var user_data = {
                last_login: Date.now()
            }

            database_ref.child('User/' + user.id).update(user_data)
                .then(() => {
                    alert("Logged in Successfully...")
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
