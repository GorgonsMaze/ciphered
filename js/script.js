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
    // console.log(newArr.join(''));
    return newArr.join('');

}

function subCipher() {

}

function decrypt() {
    $('#encryptMessage').on('click', function () {
        $('.is-loading').show();
    });
}

function modals() {
    // Set display to none -- allowing for fade-in and on click events
    $('.modal').css('display', 'none');
    // On 'About' nav click
    $('#about').on('click', function () {
        $('#aboutModal').addClass('is-active').fadeIn(500);
        $('body').addClass('stop-scroll');
    });
    // On background click remove is-active class + set display
    $('.modal-background').on('click', function () {
        $('#aboutModal').removeClass('is-active');
        $('body').removeClass('stop-scroll');
        $('.modal').css('display', 'none');
    });
    // On modal close click remove is-active class + set display
    $('.mod-close').on('click', function () {
        $('#aboutModal').removeClass('is-active');
        $('body').removeClass('stop-scroll');
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

function keyBlock() {
    var abcplain = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $('.abc-plaintext').append(abcplain.split('').join(' '));
    var abccipher = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $('.abc-cipher').append(abccipher.split('').join(' '));


    var plainkey = document.getElementById('plain-key-title');
    var cipherkey = document.getElementById('cipher-key-title');



    // On Choose Cipher drop down change
    $('#cipherSelect').on('change', function () {
        $('#plain-key-title').html("Substitution Key:");
        $('#cipher-key-title').html("Ciphertext:");

        $('#enText').val('');
        var value =  $(this).val();

        var subArray = [1,2,3,4,5,6,7,8,9,10,11,12];
        var randSub = subArray[Math.floor(Math.random()*subArray.length)];
         if (value == "caesar") {
            // $('select.subselect>option:eq(13)').prop('selected', true);
            $('#subSelect').val('13').prop('selected', true);
            plainkey.append('Plaintext');
            cipherkey.append('Caesar Cipher / ROT13');

        }
        else if (value === "substitution") {
            $('#subSelect').val(randSub).prop('selected', true)
            plainkey.append('Plaintext');
            cipherkey.append('Key-'+randSub);
        }
    });


    // On Substitution Key Change
    $('#subSelect').on('change', function () {
        $('#plain-key-title').html("Substitution Key:");
        $('#cipher-key-title').html("Ciphertext:");
        var value = $(this).val();

        if (value ===  '13') {
            plainkey.append('Plaintext');
            cipherkey.append('Caesar Cipher / ROT13');
        }
        else if (value >= '1' || value <= '12') {
            plainkey.append('Plaintext');
            cipherkey.append('Key-'+value);
        }
    });

}

$(document).ready(function () {

    setTimeout(function () {
        typeOut();
    }, 1000);

    setTimeout(function () {
        setInterval(cursorBlink, 1500);
    }, 2500);


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

    keyBlock();

    $('#encryptMessage').on('click', function () {
        var txt = document.getElementById('enText');
        if (txt.value.length >= 1) {
            var plaintext = $('#enText').val();
            // alert(plaintext);
            var ciphertext = rot13(plaintext);

            // alert(ciphertext);
            document.getElementById('response').innerHTML = ciphertext;
            // Clear input field
            // $('#enText').val('');


            // rot13("SERR PBQR PNZC");


            // $('.is-loading').css('opacity', 1);
            // $('.progress').css('opacity', 1);
        }

    });



});