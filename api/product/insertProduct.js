{/* <script src="https://www.gstatic.com/firebasejs/8.2.8/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.2.8/firebase-storage.js"></script> */}

const firebaseConfig = {
    apiKey: "AIzaSyCU2vmtD0wMJPKo13PGx5L49vU_rAjSR9A",
    authDomain: "websneaker-2b62e.firebaseapp.com",
    projectId: "websneaker-2b62e",
    storageBucket: "websneaker-2b62e.appspot.com",
    messagingSenderId: "281295105750",
    appId: "1:281295105750:web:9aac7d81dd3885d8f56377",
    measurementId: "G-DLRMLERXMZ"
  };
firebase.initializeApp(firebaseConfig);

const ref = firebase.storage().ref();
const file = document.querySelector('#image').files[0];
const metadata = {
    contentType: file.type
};
const name = file.name;
const uploadImage = ref.child(name).put(file, metadata);
uploadIMG.then(snapshort => snapshort.ref.getDownloadURL())
        .then(url => {
        console.log(url);
        data["image"] = url;
        console.log(data);
        var id = $('#id').val();
        if (id == "") {
        addProduct(data);
        $('#formproduct')[0].reset();
        } else {
        updateProduct(data);
        }
        })
        .catch(console.error);
