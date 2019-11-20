$(document).ready(function () {

    // JS RESULT TOP INTEGRATION //
    for (let i = 0; i < 3; i++) {

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
        $(".container-top-img").append(containerPictures);

        var cardPictures = $("<div class='card' style='width: 18rem'></div>");
        containerPictures.append(cardPictures);

        var pics = $("<img src='' class='card-img-top' alt='...'>");
        pics.attr("src", picturesImg);
        cardPictures.append(pics);

        var cardBody = $("<div class='card-body'>");
        cardPictures.append(cardBody);

        var titles = $("<h5 class='Picture title'>" + picturesTitles + "</h5>");
        cardBody.append(titles);

        var subtitles = $("<p class='card-text'>" + picturesSubs + "</p>");
        cardBody.append(subtitles);

        var trophyBtn = $("<i class='fas fa-trophy'>");
        cardBody.append(trophyBtn);

        var voteCase = $("<p>" + "Score : " + picturesVotes + "</p>");
        cardBody.append(voteCase);
    }
    // END JS RESULT TOP INTEGRATION //





      // JS RESULT TOP INTEGRATION //
      for (let i = 3; i < pictures.length; i++) {

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

        var cardPictures = $("<div class='card'></div>");
        containerPictures.append(cardPictures);

        var pics = $("<img src='' class='card-img-top' alt='...'>");
        pics.attr("src", picturesImg);
        cardPictures.append(pics);

        var cardBody = $("<div class='card-body'>");
        cardPictures.append(cardBody);

        var titles = $("<h5 class='Picture title'>" + picturesTitles + "</h5>");
        cardBody.append(titles);

        var subtitles = $("<p class='card-text'>" + picturesSubs + "</p>");
        cardBody.append(subtitles);

        var cpt = i + 4;
        $(cardBody).append("<p>" + cpt + "</p>");
        $(cardBody).append("<p>" + picturesVotes + "</p>");

        var voteCase = $("<p>" + "Score : " + picturesVotes + "</p>");
        cardBody.append(voteCase);


        // END JS RESULT TOP INTEGRATION //

    }

});

//     <!-- <div class="col-12 col-md-6 col-lg-4 ">
//     <div class="card">
//         <img src="https://picsum.photos/200/300" class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 class="Picture title">Card title</h5>
//             <p class="card-text">Best photo EVER ???</p>
//             <i class="fas fa-trophy"></i>
//             <p>Score</p>
//         </div>
//     </div>
// </div>
// <div class="col-12 col-md-6 col-lg-4 ">
//     <div class="card">
//         <img src="https://picsum.photos/200/300" class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 class="Picture title">Card title</h5>
//             <p class="card-text">Best photo EVER ???</p>
//             <i class="fas fa-trophy"></i>
//             <p>Score</p>
//         </div>
//     </div>
// </div>
// <div class="col-12 col-md-6 col-lg-4 ">
//     <div class="card">
//         <img src="https://picsum.photos/200/300" class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 class="Picture title">Card title</h5>
//             <p class="card-text">Best photo EVER ???</p>
//             <i class="fas fa-trophy"></i>
//             <p>Score</p>
//         </div>
//     </div>
// </div> -->
