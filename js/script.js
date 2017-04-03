/** Created by ianarsenault on 11/9/16. */

/***+++++++++++++++  WIP ++++++++++++++++++++**/
/**
 * @param str
 * @returns {Array|{index: number, input: string}|*}
 */
function isAlpha(str) {
    var regex = /[A-Za-z]/;
    return str.match(regex);
}


/**
 * Method that returns the alphabet position of character
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
 * Method to rotate the character
 * @param char
 * @param rot
 * @returns {string}
 */
function rotateCharacter(char, rot, encrypt) {

    // Alphabet position based on 0-25 (26 characters)
    var c = alphabetPosition(char);

    if (char == char.toUpperCase()) {
        // if encrypt than add rotation
        if (encrypt == true) {
            return String.fromCharCode(((c + rot) % 26) + 65);
        } else {
            if (rot == rot && c <= (rot - 1)) {
                return String.fromCharCode(((c - rot) % 26) + 65 + 26);
            }
            else {
                return String.fromCharCode(((c - rot) % 26) + 65);
            }

        }

    }
    else if (char == char.toLowerCase()) {
        if (encrypt == true) {
            return String.fromCharCode(((c + rot) % 26) + 97);
        } else {
            if (rot == rot && c <= (rot - 1)) {
                return String.fromCharCode(((c - rot) % 26) + 97 + 26);
            }
            // if (rot == 1 && c == 0) {
            //     return String.fromCharCode(((c - rot) % 26) + 97 + 26);
            // }
            // else if (rot == 2 && c <= 1) {
            //     return String.fromCharCode(((c - rot) % 26) + 97 + 26);
            // }

            else {
                return String.fromCharCode(((c - rot) % 26) + 97);
            }

        }

    }
    else {
        return String.fromCharCode(c);
    }

}



/**
 * Method to encrypt/decrypt substitution cipher
 * @param text
 * @param rot
 * @returns {string}
 */
function encryptCeasar(text, rot, encryptordecrypt) {
    var encryptedMessage = [];
    for (var i = 0; i < text.length; i++) {
        if (isAlpha(text[i])) {
            encryptedMessage.push(rotateCharacter(text[i], rot, encryptordecrypt));
        }
        else {
            encryptedMessage.push(text[i]);
        }
    }
    return encryptedMessage.join('');
}



/**
 * @param text
 * @param key
 * @returns {string}
 */
function encryptVigenere(text, key) {
    var encryptedMessage = [];
    var idx = 0;
    var i = 0;
    // var keyString = text.replace(/[a-z]/gi, c => key[i++ % key.length]);  ES6
    var keyString = text.replace(/[a-z]/gi, function (c) {
        return c == ' ' ? c : key[i++ % key.length]
    }); // ES5
    // var keyString = text.replace(/[a-z]/gi, (a, b) => a == ' ' ? a : key[i++ % key.length]);

    while (idx < text.length) {
        if (isAlpha(text[idx])) {
            encryptedMessage.push(rotateCharacter(text[idx], alphabetPosition(keyString[idx])))
        }
        else {
            encryptedMessage.push(text[idx])
        }
        idx++;
    }

    return encryptedMessage.join('');
}


/* TODO : Add vigenere cipher decryption function */
/**
 * Method to decrypt Vigenere Cipher
 * @param text
 * @param key
 * @returns {string}
 */
function decryptVigenere(text, key) {
    var decryptedMessage = [];
    return decryptedMessage.join('');
}

/** end WIP **/


/**
 * Method for modal windows
 */
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


/**
 * Method to alert users with notifications
 */
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


/**
 * Method to mimic typing
 */
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

/**
 * Method to mimic cursor blink
 */
function cursorBlink() {

    // Set the timeout to a 1.2s
    setTimeout(function () {

        // Fade cursor out and back in
        $('#cursor').fadeOut('fast').fadeIn('fast');

    }, 1200);

}

/**
 * Method to scroll-to-point on page
 */
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

/**
 * Method to check if screen size has changed
 */
function screenChange() {
    if ($(window).width() < 769) {

    }
    else {

    }
}


/**
 * TODO Validate key string
 *
 * Method to check if key string entered has spaces - if so remove space
 */
function vigenereValidation(str) {
    return (/\s/.test(str));
}

console.log(vigenereValidation("Hel lo"));

/**
 * TODO: Vigenere key block - rotation (string and rotation key)
 */

/**
 * Method for displaying text = key
 */
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

        // $('#enText').val(''); // PLaintext textarea
        $('#msgdisplay').val(''); // Cipher textarea
        var value = $(this).val();

        $('.abc-cipher').text(''); // clear current text in cipher key block


        var subArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        var randSub = subArray[Math.floor(Math.random() * subArray.length)];

        if (value == "caesar") {
            $('#vigenere-input').hide('fast');

            $('#subSelect').val('3').prop('selected', true);

            plainkey.append('Plaintext');
            cipherkey.append('Caesar Cipher / Key-' + $('#subSelect').val());

            c = keyChange(abcplain, $('#subSelect').val());
            $('.abc-cipher').append(c);

        }
        else if (value === "rot13") {
            $('#vigenere-input').hide('fast');

            $('#subSelect').val('13').prop('selected', true);

            plainkey.append('Plaintext');
            cipherkey.append('ROT' + $('#subSelect').val());

            c = keyChange(abcplain, $('#subSelect').val());
            $('.abc-cipher').append(c);

        }
        else if (value === "substitution") {
            $('#vigenere-input').hide('fast');

            $('#subSelect').val(randSub).prop('selected', true)

            plainkey.append('Plaintext');
            cipherkey.append('Key-' + randSub);

            c = keyChange(abcplain, randSub);
            $('.abc-cipher').append(c);

        }
        else if (value === "vigenere") {
            $('#key-col').hide('fast');
            $('#vigenere-input').show('slow');
            document.getElementById('vigenereKey').value = "";
            $('#vigenereKey').removeClass('is-danger');
            // vigenere text warning
            $('.v-text').css('visibility', 'hidden');
            // icon warning
            $('.v-warn').css('visibility', 'hidden');

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

/**
 * Method for progress bar animation
 */
function loader() {

    var progress = document.getElementById("progbar");

    progress.style.display = "block";

    var width = 10;
    var id = setInterval(frame, 1);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
            progress.style.width = 0;
        } else {
            width++;
            progress.style.width = width + '%';
        }
    }

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
        $('#notify').addClass('flash');
    });

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


    // in text area - on change validate whether anything has been entered by the user
    $('#enText').keyup(function () {
        // alert("keyup");
        if ($(this) > '0') {
            $(this).removeClass('is-danger');
            // Text Warning
            $('.h-text').css('visibility', 'hidden');
            // Text icon warning
            $('.t-warn').css('visibility', 'hidden');
        }
    });

    $('#vigenereKey').keyup(function () {
       if ($(this) > '0') {
           $(this).removeClass('is-danger');
           // vigenere text warning
           $('.v-text').css('visibility', 'hidden');
           // icon warning
           $('.v-warn').css('visibility', 'hidden');
       }
    });

    // Text
    var s = document.getElementById('enText');

    // Display for encrypted/decrypted text
    // var displayMessage = document.getElementById('response');

    // Textarea to display encrypted/decrypted message
    var textDisplayMsg = document.getElementById('msgdisplay');


    $('#encryptMessage').on('click', function () {
        var encrypt = true;

        // Checks to make sure cipher dd is selected
        if (document.getElementById('cipherSelect').value === "none") {
            var cipherDDL = $('#cipherSelect');
            // Add red border class
            cipherDDL.addClass('is-danger');
            // Select DD text warning
            $('.h-select').css("visibility", "visible");
            // Select DD icon warning
            $('.s-warn').css('visibility', 'visible');
        }
        else if (document.getElementById('cipherSelect').value === 'vigenere' && document.getElementById('vigenereKey').value.length <= 0) {
            // vigenere input warning
            $('.v-text').css('visibility', 'visible');
            // icon warning
            $('.v-warn').css('visibility', 'visible');
            // Add danger class to input field
            $('#vigenereKey').addClass('is-danger');

        }
        // Checks to make sure textarea has text
        else if (document.getElementById('enText').value < '0') {
            // alert("Text area is empty!");
            var txtArea = $('#enText');
            // Add red border class
            txtArea.addClass('is-danger');
            // Text Warning
            $('.h-text').css('visibility', 'visible');
            // Text icon warning
            $('.t-warn').css('visibility', 'visible');

        }
        // If textarea has text do....
        else if (document.getElementById('enText') >= '1') {
            var cipherSelected = document.getElementById('cipherSelect').value;

            if (cipherSelected == 'caesar' || cipherSelected == 'substitution' || cipherSelected == 'rot13') {
                loader();
                // Display plain message text
                // displayMessage.innerHTML = encryptCeasar(document.getElementById('enText').value, parseInt(document.getElementById('subSelect').value), encrypt);
                textDisplayMsg.value = encryptCeasar(document.getElementById('enText').value, parseInt(document.getElementById('subSelect').value), encrypt);

            } else if (cipherSelected == 'vigenere') {
                // TODO : Pass vigenere dd value + string key (add input in index)
                textDisplayMsg.innerHTML = encryptVigenere();
            }

            //Test the text
            console.log(document.getElementById('enText').value);

            // TODO: Check value of cipher to determine which function it goes to

            // Test the substitution key value
            console.log(document.getElementById('subSelect').value);


            // Test to make sure function works
            console.log(encryptCeasar(document.getElementById('enText').value, parseInt(document.getElementById('subSelect').value)));

        }

        // if (document.getElementById('cipherSelect').value === 'vigenere' && document.getElementById('vigenereKey').value.length <= 0) {
        //     // vigenere input warning
        //     $('.v-text').css('visibility', 'visible');
        //     // icon warning
        //     $('.v-warn').css('visibility', 'visible');
        //     // Add danger class to input field
        //     $('#vigenereKey').addClass('is-danger');
        //
        // }

        // TODO: If user enters text before selecting a cipher, keep text in textarea rather than clear
        // TODO: Use counter to stop clearing of substitution rotation and cipher drop downs if user has not run program


    });




    $('#decryptMessage').on('click', function () {
        var encrypt = false;

        // Checks to make sure cipher dd is selected
        if (document.getElementById('cipherSelect').value === "none") {
            var cipherDDL = $('#cipherSelect');
            // Add red border class
            cipherDDL.addClass('is-danger');
            // Select DD text warning
            $('.h-select').css("visibility", "visible");
            // Select DD icon warning
            $('.s-warn').css('visibility', 'visible');
        }
        // Checks to make sure textarea has text
        else if (document.getElementById('enText').value < '0') {
            // alert("Text area is empty!");
            var txtArea = $('#enText');
            // Add red border class
            txtArea.addClass('is-danger');
            // Text Warning
            $('.h-text').css('visibility', 'visible');
            // Text icon warning
            $('.t-warn').css('visibility', 'visible');

        }
        // If textarea has text do....
        else if (document.getElementById('enText') >= '1') {
            var cipherSelected = document.getElementById('cipherSelect').value;

            if (cipherSelected == 'caesar' || cipherSelected == 'substitution' || cipherSelected == 'rot13') {
                loader();
                // Display plain message text
                // displayMessage.innerHTML = encryptCeasar(document.getElementById('enText').value, parseInt(document.getElementById('subSelect').value), encrypt);
                textDisplayMsg.value = encryptCeasar(document.getElementById('enText').value, parseInt(document.getElementById('subSelect').value), encrypt);

            } else if (cipherSelected == 'vigenere') {
                // TODO : Pass vigenere dd value + string key (add input in index)
                displayMessage.innerHTML = encryptVigenere();
            }

            //Test the text
            console.log(document.getElementById('enText').value);

            // TODO: Check value of cipher to determine which function it goes to

            // Test the substitution key value
            console.log(document.getElementById('subSelect').value);


            // Test to make sure function works
            console.log(encryptCeasar(document.getElementById('enText').value, parseInt(document.getElementById('subSelect').value)));

        }

        // TODO: If user enters text before selecting a cipher, keep text in textarea rather than clear
        // TODO: Use counter to stop clearing of substitution rotation and cipher drop downs if user has not run program


    });




    // On cancel click - clear all selected elements + textarea
    $('#clearCancel').on('click', function () {
        $('#subSelect').val('none');
        $('#cipherSelect').val('none');
        $('#enText').val(''); // clear current text in cipher key block
        $('#msgdisplay').val(''); // clear the encrypted/decrypt message display field
        $('#vigenereKey').val('');
    });

    console.log("PVCURERQ!!!!!!!");
    console.log("    ______ _     _ _______ _     _ ______  _______ ______ _______");
    console.log("    (_____ (_)   (_|_______|_)   (_|_____ \\(_______|_____ (_______)");
    console.log("    _____) )     _ _       _     _ _____) )_____   _____) )     _");
    console.log("    |  ____/ |   | | |     | |   | |  __  /|  ___) |  __  / |   | |");
    console.log("    | |     \\ \\ / /| |_____| |___| | |  |\\ \\| |_____| |  \\ \\ |__| |");
    console.log("    |_|      \\___/  \\______)\\_____/|_|   |_|_______)_|   |_\\______)");


    console.log(rot13("abcdefghijklkmnopqrstuvwxyz"));
    /*
     $.getJSON('http://my-api.com/json/', data => {
     $.each(data, (key, value) => {
     console.log(key + ' => ' + value); });
     });
     */

});