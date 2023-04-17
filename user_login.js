const firebaseConfig = {
    apiKey: "AIzaSyDiroSo8ssUYhbuMNb8-WN9M9Ysx6i6kU4",
    authDomain: "library-management-syste-88962.firebaseapp.com",
    projectId: "library-management-syste-88962",
    storageBucket: "library-management-syste-88962.appspot.com",
    messagingSenderId: "694495006577",
    appId: "1:694495006577:web:d4bcd461e22189b907f0d0",
    measurementId: "G-0JK3RZP7LL",
    databaseURL: "https://library-management-syste-88962-default-rtdb.firebaseio.com"
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