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
