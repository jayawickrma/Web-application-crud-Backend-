$('#savepost').click(function () {
    let postid =$('#postID').val()
    let postname=$('#postName').val()
    let postaddress=$('#postAddress').val()
    let postmobile=$('#postMobile').val()

    console.log(postid,postname,postaddress,postmobile);

    $.ajax({
        url:"http://localhost:8080/student/savestudent",
        method:"POST",
        contentType:"application/json",
            "data":JSON.stringify({
                "id":postid,
                "name":postname,
                "address":postaddress,
                "mobile":postmobile
            }),
        success:function (result){
            console.log(result);
            alert("done");
        },
        error:function (error){
            console.log(error);
            alert("error");
        }

    })
})
$('#updatePost').click(function () {
    let postid =$('#postID').val()
    let postname=$('#postName').val()
    let postaddress=$('#postAddress').val()
    let postmobile=$('#postMobile').val()

    console.log(postid,postname,postaddress,postmobile);

    $.ajax({
        url: "http://localhost:8080/student/updatestudent",
        method: "PUT",
        contentType: "application/json",
        "data": JSON.stringify({
            "id":postid,
            "name":postname,
            "address":postaddress,
            "mobile":postmobile
        }),
        success: function (result) {
            console.log(result);
            alert("done");
        },
        error: function (error) {
            console.log(error);
            alert("error");
        }

    })
})
$('#deletePost').click(function () {
    let postid =$('#postID').val()
    let postname=$('#postName').val()
    let postaddress=$('#postAddress').val()
    let postmobile=$('#postMobile').val()

    console.log(postid,postname,postaddress,postmobile);

    $.ajax({
        url: "http://localhost:8080/student/deletestudent",
        method: "DELETE",
        contentType: "application/json",
        "data": JSON.stringify({
            "id":postid,
            "name":postname,
            "address":postaddress,
            "mobile":postmobile
        }),
        success: function (result) {
            console.log(result);
            alert("done");
        },
        error: function (error) {
            console.log(error);
            alert("error");
        }

    })
})