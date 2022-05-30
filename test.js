

$(function () {
  $.ajax({
    type: "GET",
    url: "http://localhost:8080/api/v1/users",
    success: function (data) {
      $.each(data, function (i, item) {
        console.log(item.email);
      });
    },
  });
});
