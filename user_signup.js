
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