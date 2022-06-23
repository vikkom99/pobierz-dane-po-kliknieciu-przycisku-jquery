$(document).ready(function () {
    $('#getData').click(function () {
        $.get('https://akademia108.pl/api/ajax/get-post.php')
            .done(function (data) {

                let pId = $('<p></p>').text(`Id: ${data.id}`);
                let pUserId = $('<p></p>').text(`Id: ${data.userId}`);
                let pTitle = $('<p></p>').text(`Id: ${data.title}`);
                let pBody = $('<p></p>').text(`Id: ${data.body}`);
                let hr = $('<hr>');
                let jqBody = $('body');

                jqBody.append(pId);
                jqBody.append(pUserId);
                jqBody.append(pTitle);
                jqBody.append(pBody);
                jqBody.append(hr);
            })
            .fail(function (error) {
                console.error(error);
            });
    });






    // $('#getData').click(function () {
    //     $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
    //         .done(function (data) {

    //             let pId = $('<p></p>').text(`Id: ${data.id}`);
    //             let pUserId = $('<p></p>').text(`Id: ${data.userId}`);
    //             let pTitle = $('<p></p>').text(`Id: ${data.title}`);
    //             let pBody = $('<p></p>').text(`Id: ${data.body}`);
    //             let hr = $('<hr>');
    //             let jqBody = $('body');

    //             jqBody.append(pId);
    //             jqBody.append(pUserId);
    //             jqBody.append(pTitle);
    //             jqBody.append(pBody);
    //             jqBody.append(hr);
    //         })
    //         .fail(function (error) {
    //             console.error(error);
    //         });
    // });

})