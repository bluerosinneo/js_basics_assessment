/**
 * Given the HTML below, please make the following changes with javascript – don't change any HTML!:
 *
 * 1. Any time someone clicks on the title at the top "feed template,"
 *    make the color of the "feed template" text change from black to red
 *    and then from red to black when clicked again.
 *
 * 2. The links on the side of the page – "your name," "section 1," "section 2," etc. –
 *    hide every odd-numbered link in the menu.
 *
 * 3. Change every instance of the word "bacon" on the page to be "LASER VISION"
 *
 * 4. Delete the last two posts in the middle section (they have a CSS class "post")
 *
 * 5. Remove the images in the right column
 *
 * BONUS: add a special surprise inside!
 *    
 */

(function () {

    // get some DOM Stuff

    // 1
    let feedTemp = document.querySelector(".panel h1");
    let blackBool = true; // false would mean red

    // console.log(feedTemp);
    // feedTemp.style.color = "pink";

    feedTemp.addEventListener("click", function(){
        console.log("hey");
        if(blackBool == true){
            feedTemp.style.color = "red";
            blackBool = false;
        }
        else{
            feedTemp.style.color = "black";
            blackBool = true;
        }
    });

    


    // 2 hide links
    // "your name," "section 1," "section 2,"
    // where "your name," would be the 1st, "section 1" the second, and "section 2" would be the third ...
    // so hid "your name," "section 2," ...

    let links = document.querySelectorAll(".section-container section:nth-child(2n)");
    let name = document.querySelector(".panel h5")
    // console.log(links);
    // console.log(name);
    for(let i = 0; i < links.length; i++){
        links[i].style.display = "none";
    }
    name.style.display = "none";

    // replace "Bacon" with "LASER VISION"

    // let baconThing = document.querySelectorAll(".large-6 .row");
    // for(let i = 0; i < baconThing.length; i++){
    //     // console.log(baconThing[i].innerHTML);
    //     baconThing[i] = baconThing[i].innerHTML.replace(/Bacon/g, "LASER VISION");
    // }
    // console.log(baconThing);
    // bodyThing.innerHTML = bodyThing.innerHTML.replace(/Bacon/g, "LASER VISION");

    let baconThing = document.querySelectorAll(".row .post");

    // console.log(baconThing);
    for(let i = 0; i < baconThing.length; i++){
        baconThing[i].innerHTML = baconThing[i].innerHTML.replace(/Bacon/g, "LASER VISION");
    }

    // remvoe last two posts

    let posts = document.querySelectorAll(".large-6 > .row")



    // console.log(posts);
    // console.log(posts[posts.length-1]);
    // console.log(posts[posts.length-2]);

    posts[posts.length-1].style.display = "none";
    posts[posts.length-2].style.display = "none";


    let imagesToNotShow = document.querySelectorAll(".hide-for-small > p");

    for(let i = 0 ; i < imagesToNotShow.length; i++){
        imagesToNotShow[i].style.display = "none";
    }


})();
