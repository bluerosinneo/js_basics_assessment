/**
 * The code below adds an image to the page, sorta.
 * That image doesn't look right on the page.
 *
 * Look at the code in scramble.js and use your knowledge
 * of arrays to rebuild the array before writeAscii() 
 * is called.
 */

(function() {

    //your code here

    let tempArray = [];

    for(let i = 0; i < artArray.length; i++){
        if(artArray[i].indexOf("lollollol") == -1){
            tempArray.push(artArray[i]);
        }
    }

    writeAscii(tempArray);

})();


