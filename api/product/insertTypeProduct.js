var data ;
var xhr = new XMLHttpRequest();
$("#btnAddOrUpdate").click(function (e) {
    e.preventDefault();
    data = document.querySelector('.typeName').value;
  
    console.log(data);
      xhr.open("POST", "http://localhost:8080/api/v1/type/save", false);
      xhr.setRequestHeader("content-type", "application/json");
      try{
        xhr.send(data)
          alert("Add Type Success!");
          document.querySelector('.typeName').value ="";
          document.querySelector('.typeName').focus();
        
      }catch(error){
        alert("Add Type not success!");
        document.querySelector('.typeName').value ="";
        document.querySelector('.typeName').focus();
      }
      let test = JSON.parse(xhr.responseText);
      console.log(test)
  });