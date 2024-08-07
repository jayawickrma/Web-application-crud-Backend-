$('#savepost').click(function () {
    let postid =$('#postID').val()
    let posttitle=$('#postTitle').val()
    let posttext=$('#postText').val()
    let postcntnt=$('#postCintent').val()

    console.log(postid,posttitle,posttext,postcntnt);

    $.ajax({
        url:"http://localhost:8080/student/savestudent",
        method:"POST",
        contentType:"application/json",
            "data":JSON.stringify({
                "id":postid,
                "title":posttitle,
                "text":posttext,
                "category":postcntnt
            }),
        success:function (result){
            console.log(result);
            alert("Niceee");
        },
        error:function (error){
            console.log(error);
            alert("asfd");
        }

    })
})
$('#updatePost').click(function () {
    let postid = $('#postID').val()
    let posttitle = $('#postTitle').val()
    let posttext = $('#postText').val()
    let postcntnt = $('#postCintent').val()

    console.log(postid, posttitle, posttext, postcntnt);

    $.ajax({
        url: "http://localhost:8080/student/updatestudent",
        method: "PUT",
        contentType: "application/json",
        "data": JSON.stringify({
            "id": postid,
            "title": posttitle,
            "text": posttext,
            "category": postcntnt
        }),
        success: function (result) {
            console.log(result);
            alert("Niceee");
        },
        error: function (error) {
            console.log(error);
            alert("OS");
        }

    })
})
$('#deletePost').click(function () {
    let postid = $('#postID').val()
    let posttitle = $('#postTitle').val()
    let posttext = $('#postText').val()
    let postcntnt = $('#postCintent').val()

    console.log(postid, posttitle, posttext, postcntnt);

    $.ajax({
        url: "http://localhost:8080/student/deletestudent",
        method: "DELETE",
        contentType: "application/json",
        "data": JSON.stringify({
            "id": postid,
            "title": posttitle,
            "text": posttext,
            "category": postcntnt
        }),
        success: function (result) {
            console.log(result);
            alert("Niceee");
        },
        error: function (error) {
            console.log(error);
            alert("OS");
        }

    })
})