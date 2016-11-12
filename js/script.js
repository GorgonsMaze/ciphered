/**
 * Created by ianarsenault on 11/9/16.
 */


function rot13(str) {
    // Create empty array
    var newArr = [];
    // Split the string up into an array
    var arr = str.split('');

    // Loop through the array length
    for (var i = 0; i < arr.length; i++) {
        // Assign each char code of i to x
        var x = arr[i].charCodeAt(0);

        // If x >= 78 && <=90
        if (x >= 78 && x <= 90) {
            // We subtract 13 from its unicode number
            x = x - 13;
            // Return string character
            // and push into new array
            newArr.push(String.fromCharCode(x));

        } else if (x < 78 && x > 64) {
            // We add 13 from its unicode number
            x = x + 13;
            // Return string character
            // and push into new array
            newArr.push(String.fromCharCode(x));

        } else {
            // Return string character
            // and push into new array
            newArr.push(String.fromCharCode(x));
        }

    }

    // Join elements in array as a string
    return newArr.join('');

}


rot13("SERR PBQR PNZC");


function modals() {
    // Set display to none -- allowing for fade-in and on click events
    $('.modal').css('display', 'none');
    // On 'About' nav click
    $('#about').on('click', function () {
        $('#aboutModal').addClass('is-active').fadeIn(500);
    });
    // On background click remove is-active class + set display
    $('.modal-background').on('click', function () {
        $('#aboutModal').removeClass('is-active');
        $('.modal').css('display', 'none');
    });
    // On modal close click remove is-active class + set display
    $('.mod-close').on('click', function () {
        $('#aboutModal').removeClass('is-active');
        $('.modal').css('display', 'none');
    });
}

function alerts() {
    // Alert Warning
    $('.del-warn').on('click', function () {
        $('#notify').css('visibility', 'hidden');
    });
}

function typeOut() {
    var text = "Send hidden messages...";
    // Array of speed
    var speedArr = [170, 180 ,195, 200 ,215];
    // Choose a speed at random
    var rand = speedArr[Math.floor(Math.random() * speedArr.length)];
    //text is split up to letters
    $.each(text.split(''), function(i, letter){

        //we add rand*i ms delay to each letter
        setTimeout(function(){

            //we add the letter to the text div
            $('#texttype').html($('#texttype').html() + letter);

        }, rand*i);
    });

}

function cursorBlink() {
    $('#cursor').fadeOut('fast').fadeIn('fast');
    setTimeout(function () {
        $('#cursor').fadeIn('fast');
    }, 800);
}

function scroll() {
    $('.nav-encrypt-btn').on('click', function () {
        $("html,body").animate({
            scrollTop: 200
        }, 600)
    });
}


$(document).ready(function () {
    setTimeout(function () {
        typeOut();
    }, 1000);

    setTimeout(function () {
        setInterval(cursorBlink, 1500);
    }, 2500);


    // On Choose Cipher drop down change
    $('#cipherSelect').on('change', function () {
        var value =  $(this).val();
        var subArray = [1,2,3,4,5,6,7,8,9,10,11,12];
        var randSub = subArray[Math.floor(Math.random()*subArray.length)];
        if (value == "caesar") {
            // $('select.subselect>option:eq(13)').prop('selected', true);
            $('#subSelect').val('13').prop('selected', true)
        }
        else if (value === "substitution") {
            $('#subSelect').val(randSub).prop('selected', true)
        }
    });

    // On substitution cipher select drop down change
    $('#subSelect').on('change', function () {
       var value = $(this).val();

        if (value ===  '13') {
            // $('select.ciphselect>option:eq(1)').prop('selected', true);
            $('#cipherSelect').val('caesar').prop('selected', true);
        }
        else if (value >= '1' || value <= '12') {
            $('#cipherSelect').val('substitution').prop('selected', true);
        }
    });

    scroll();
    alerts();
    modals();
    rot13("SERR PBQR PNZC");


});