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


var database = firebase.database();


var dataRef = database.ref('Booklist');

function displayData(snapshot) {
    var tableBody = document.getElementById('tbody1');
    var data = snapshot.val();
    var row = document.createElement('tr');
    var titleCell = document.createElement('td');
    var authorCell = document.createElement('td');
    var genreCell = document.createElement('td');
    var subgenreCell = document.createElement('td');
    titleCell.textContent = data.Title;
    authorCell.textContent = data.Author;
    genreCell.textContent = data.Genre;
    subgenreCell.textContent = data.SubGenre;
    row.appendChild(titleCell);
    row.appendChild(authorCell);
    row.appendChild(genreCell);
    row.appendChild(subgenreCell);
    tableBody.appendChild(row);
}

dataRef.on('child_added', function (snapshot) {
    displayData(snapshot);
});

function displayData2(snapshot) {
    var tableBody = document.getElementById('tbody2');
    var data = snapshot.val();
    var row = document.createElement('tr');
    var titleCell = document.createElement('td');
    var authorCell = document.createElement('td');
    var genreCell = document.createElement('td');
    var subgenreCell = document.createElement('td');
    titleCell.textContent = data.Title;
    authorCell.textContent = data.Author;
    genreCell.textContent = data.Genre;
    subgenreCell.textContent = data.SubGenre;
    row.appendChild(titleCell);
    row.appendChild(authorCell);
    row.appendChild(genreCell);
    row.appendChild(subgenreCell);
    tableBody.appendChild(row);
}

dataRef.on('child_added', function (snapshot) {
    displayData2(snapshot);
});



var dataList = document.getElementById("list");
var dataRef = database.ref("User");
dataRef.on("child_added", function (data) {
    var listItem = document.createElement("li");
    listItem.textContent = data.val().username;
    dataList.appendChild(listItem);
});


function adddata(){
    var database = firebase.database();
    var title = document.getElementById("title");
    var author = document.getElementById("author");
    var genre = document.getElementById("genre");
    var subgenre = document.getElementById("subgenre");

    database.ref('Booklist/').push({
        Title: title.value,
        Author: author.value,
        Genre: genre.value,
        SubGenre: subgenre.value
    });
    alert("Data added successfully!");
}