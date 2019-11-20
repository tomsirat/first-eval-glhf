$(document).ready(function () {

    for (let i = 0; i < pictures.length; i++) {

        // BDD VAR //
        var picturesId = pictures[i].id;
        var picturesTitles = pictures[i].title;
        var picturesSubs = pictures[i].subtile;
        var picturesImg = pictures[i].url;
        var picturesVotes = pictures[i].votes;
        // END BDD VAR //


        // JS VOTEPAGE INTEGRATION //
        var containerPictures = $("<div class='col-12 col-md-6 col-lg-3'></div>");
        containerPictures.attr("id", picturesId);
        $(".container-img").append(containerPictures);

        var cardPictures = $("<div class='card' style='width: 18rem'></div>");
        containerPictures.append(cardPictures);

        var pics = $("<img src=''>");
        pics.attr("src", picturesImg);
        cardPictures.append(pics);

        var cardBody = $("<div class='card-body'>");
        cardPictures.append(cardBody);

        var titles = $("<h5 class='Picture title'>" + picturesTitles + "</h5>");
        cardBody.append(titles);

        var subtitles = $("<p class='card-text'>" + picturesSubs + "</p>");
        cardBody.append(subtitles);

        var containerBtn = $("<div class='d-flex'>");
        cardBody.append(containerBtn);

        var poopBtn = $("<a href='#' class='btn btn-danger'><i class='fas fa-poo'>");
        containerBtn.append(poopBtn);

        var voteCase = $("<p class='mr-4 ml-4'>" + "Votes : " + picturesVotes + "</p>");
        containerBtn.append(voteCase);

        var heartBtn = $("<a href='#' class='btn btn-success'><i class='fas fa-heart'>");
        containerBtn.append(heartBtn);



        
        // END JS VOTEPAGE INTEGRATION //

        
    }

});


