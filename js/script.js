/** Created by ianarsenault on 11/9/16. */

/***+++++++++++++++  WIP ++++++++++++++++++++**/


/**
 * @param letter
 * @returns {*}
 */
function alphabetPosition(letter) {
    if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) {
        return letter.charCodeAt(0) - 97;
    }
    else if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) {
        return letter.charCodeAt(0) - 65;
    }
    else {
        return letter.charCodeAt(0);
    }
}

/**
 * @param char
 * @param rot
 * @returns {string}
 */
function rotateCharacter(char, rot) {
    var c = alphabetPosition(char);
    if (char == char.toUpperCase()) {
        return String.fromCharCode(((c + rot) % 26) + 65);
    }
    else if (char == char.toLowerCase()) {
        return String.fromCharCode(((c + rot) % 26) + 97);
    }
    else {
        return String.fromCharCode(c);
    }

}

function encrypt() {
    
}

/** end WIP **/


/**
 * @param str
 * @returns {string}
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

        // If x >= 78 and <=90 or  x >= 110 and x <= 122
        if (x >= 78 && x <= 90 || x >= 110 && x <= 122) {
            // We subtract 13 from its unicode number
            x = x - 13;
            // Return string character
            // and push into new array
            newArr.push(String.fromCharCode(x));

            // else if x > 64 and x < 78 or x > 96 and x < 110)
        } else if (x > 64 && x < 78 || x > 96 && x < 110) {
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
    return newArr.join('').toUpperCase();

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

// Handles notification/alerts to user
function alerts() {

    // Alert Warning
    // On exit click remove alert
    $('.del-warn').on('click', function () {
        $('#notify').css('visibility', 'hidden');
    });

    // On text area focus add animation class to notification alert
    $('#enText').on('focus', function () {
        $('#notify').addClass('fadeInLeft');
    });
}


function typeOut() {

    var text = "Send hidden messages...";
    // Array of speed
    var speedArr = [170, 180, 195, 200, 215];
    // Choose a speed at random
    var rand = speedArr[Math.floor(Math.random() * speedArr.length)];
    //text is split up to letters
    $.each(text.split(''), function (i, letter) {

        //we add rand*i ms delay to each letter
        setTimeout(function () {

            //we add the letter to the text div
            $('#texttype').html($('#texttype').html() + letter);

        }, rand * i);
    });

}

// Terminal cursor blink
function cursorBlink() {

    // Set the timeout to a 1.2s
    setTimeout(function () {

        // Fade cursor out and back in
        $('#cursor').fadeOut('fast').fadeIn('fast');

    }, 1200);

}

// Scrolling
function scroll() {

    // On "Encrypt" nav button click
    $('.nav-encrypt-btn').on('click', function () {

        // Scroll animation to input section
        $("html,body").animate({
            scrollTop: 200
        }, 600);


        // Flashes the input section
        $('#encrypt-sec').fadeTo(1000, 0.25, function () {
            $(this).fadeTo(800, 1);
        });

    });
}

function screenChange() {
    // if ($(window).width() < 960) {
    //     alert('Less than 960');
    // }
    // else {
    //     alert('More than 960');
    // }

    if ($(window).width() < 769) {

    }
    else {

    }
}


function keyBlock() {

    var abcplain = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    $('.abc-plaintext').append(abcplain.split('').join(' '));
    $('.abc-cipher').append(abcplain.split('').join(' '));


    var plainkey = document.getElementById('plain-key-title');
    var cipherkey = document.getElementById('cipher-key-title');

    var c = ''; // variable to hold return cipher key


    // On Choose Cipher drop down change
    $('#cipherSelect').on('change', function () {
        // Show Key Select DD
        $(this).removeClass('is-danger');
        $('.h-select').css("visibility", "hidden");
        $('.fa-warning').css('visibility', 'hidden');

        $('#key-col').show('slow');
        $('#plain-key-title').html("Substitution Key:");
        $('#cipher-key-title').html("Ciphertext:");

        $('#enText').val('');
        var value = $(this).val();

        $('.abc-cipher').text(''); // clear current text in cipher key block


        var subArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        var randSub = subArray[Math.floor(Math.random() * subArray.length)];

        if (value == "caesar") {

            $('#subSelect').val('3').prop('selected', true);

            plainkey.append('Plaintext');
            cipherkey.append('Caesar Cipher / Key-' + $('#subSelect').val());

            c = keyChange(abcplain, $('#subSelect').val());
            $('.abc-cipher').append(c);

        }
        else if (value === "rot13") {
            $('#subSelect').val('13').prop('selected', true);

            plainkey.append('Plaintext');
            cipherkey.append('ROT' + $('#subSelect').val());

            c = keyChange(abcplain, $('#subSelect').val());
            $('.abc-cipher').append(c);

        }
        else if (value === "substitution") {

            $('#subSelect').val(randSub).prop('selected', true)

            plainkey.append('Plaintext');
            cipherkey.append('Key-' + randSub);

            c = keyChange(abcplain, randSub);
            $('.abc-cipher').append(c);

        }

    });


    // On Substitution Key Change
    $('#subSelect').on('change', function () {

        $('#plain-key-title').html("Substitution Key:");
        $('#cipher-key-title').html("Ciphertext:");

        var value = $(this).val();

        $('.abc-cipher').text(''); // clear current text in cipher key block

        if (value === '3') {

            $('#cipherSelect').val('caesar').prop('selected', true);

            plainkey.append('Plaintext');
            cipherkey.append('Caesar Cipher / Key-' + value);

            c = keyChange(abcplain, value);
            $('.abc-cipher').append(c);


        }
        else if (value === '13') {

            $('#cipherSelect').val('rot13').prop('selected', true);

            plainkey.append('Plaintext');
            cipherkey.append('ROT' + value);

            c = keyChange(abcplain, value);
            $('.abc-cipher').append(c);

        }
        else if (value >= '1' || value < '3' || value > '3' || value <= '12') {

            $('#cipherSelect').val('substitution').prop('selected', true);

            plainkey.append('Plaintext');
            cipherkey.append('Key-' + value);

            c = keyChange(abcplain, value);
            $('.abc-cipher').append(c);

        }
    });

}

// Checks which DD option is selected
function checkText(v) {

}

/**
 * @param abc
 * @param idx
 * @returns {string}
 */
function keyChange(abc, idx) {
    // var idx = abc.search(char);

    var answer = abc.slice(idx) + abc.slice(0, idx);
    return answer.split('').join(' ');

}


$(document).ready(function () {



    // Hide the Sub Key Drop Down until cipher is selected
    $('#key-col').hide();

    setTimeout(function () {
        typeOut();
    }, 1000);

    setTimeout(function () {
        setInterval(cursorBlink, 1750);
    }, 2750);


    scroll();    // Scroll animation function
    alerts();    // Alert Function
    modals();    // Modal Function
    keyBlock();  // Key Block Change function - changes keys grid
    screenChange(); // Screen size change

    // On text area focus add animation class to notifcation alert
    $('#enText').on('focus', function () {
        $('#notify').addClass('fadeInLeft');
    });

    var caesarddl = document.getElementById('cipherSelect');
    var keyddl = document.getElementById('subSelect');
    // if (document.getElementById('cipherSelect').value == 'caesar') {
    //
    //     $('#encryptMessage').on('click', function () {
    //         var txt = document.getElementById('enText');
    //         if (txt.value.length >= 1) {
    //             var plaintext = $('#enText').val();
    //             // alert(plaintext);
    //             var ciphertext = rot13(plaintext);
    //
    //             // alert(ciphertext);
    //             document.getElementById('response').innerHTML = ciphertext;
    //             // Clear input field
    //             // $('#enText').val('');
    //
    //
    //             // $('.is-loading').css('opacity', 1);
    //             // $('.progress').css('opacity', 1);
    //         }
    //
    //     });
    // } else {
    //     $('#encryptMessage').on('click', function () {
    //
    //     });
    // }

    $('#encryptMessage').on('click', function () {
        // alert("YA'LL NEVER PICKED SOMETHING!");
        if (document.getElementById('cipherSelect').value === "none") {
            var cipherDDL = $('#cipherSelect');
            // Add red border class
            cipherDDL.addClass('is-danger');
            // Select DD text warning
            $('.h-select').css("visibility", "visible");
            // Select DD icon warning
            $('.s-warn').css('visibility', 'visible');
        }
        else if (document.getElementById('enText').value === '') {
            // alert("Text area is empty!");
            var txtArea = $('#enText');
            // Add red border class
            txtArea.addClass('is-danger');
            // Text Warning
            $('.h-text').css('visibility', 'visible');
            // Text icon warning
            $('.t-warn').css('visibility', 'visible');

        }

    });


    $('#enText').on('change', function () {
        if ($(this).val() > '0') {
            $(this).removeClass('is-danger');
        }
    });

    // On cancel click - clear all selected elements + textarea
    $('#clearCancel').on('click', function () {
        $('#subSelect').val('none');
        $('#cipherSelect').val('none');
        $('#enText').val(''); // clear current text in cipher key block
    });

    console.log("PVCURERQ!!!!!!!");
    console.log("    ______ _     _ _______ _     _ ______  _______ ______ _______");
    console.log("    (_____ (_)   (_|_______|_)   (_|_____ \\(_______|_____ (_______)");
    console.log("    _____) )     _ _       _     _ _____) )_____   _____) )     _");
    console.log("    |  ____/ |   | | |     | |   | |  __  /|  ___) |  __  / |   | |");
    console.log("    | |     \\ \\ / /| |_____| |___| | |  |\\ \\| |_____| |  \\ \\ |__| |");
    console.log("    |_|      \\___/  \\______)\\_____/|_|   |_|_______)_|   |_\\______)");


});