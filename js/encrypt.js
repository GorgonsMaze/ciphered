/**
 * Test Page for encrypt decrypt
 */



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
function caesarCipher(text, rot, encrypt) {
    var encryptedMessage = [];
    for (var i = 0; i < text.length; i++) {
        if (isAlpha(text[i])) {
            encryptedMessage.push(rotateCharacter(text[i], rot, encrypt));
        }
        else {
            encryptedMessage.push(text[i]);
        }
    }
    return encryptedMessage.join('');
}


/**
 * Method to encrypt / decrypt vigenere cipher text
 *
 * @param text
 * @param key
 * @returns {string}
 */
function vigenereCipher(text, key, encrypt) {
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
            encryptedMessage.push(rotateCharacter(text[idx], alphabetPosition(keyString[idx]), encrypt));
        }
        else {
            encryptedMessage.push(text[idx])
        }
        idx++;
    }

    return encryptedMessage.join('');
}

console.log("key 1");
console.log(encryptCeasar("abcdefghijklmnopqrstuvwxyz", 1, true));
console.log("Decrypting....");
console.log(encryptCeasar("bcdefghijklmnopqrstuvwxyza", 1, false));

console.log("");

console.log("key 2");
console.log(encryptCeasar("abcdefghijklmnopqrstuvwxyz", 2, true));
console.log("Decrypting....");
console.log(encryptCeasar("cdefghijklmnopqrstuvwxyzab", 2, false));

console.log("");

console.log("key 3");
console.log(encryptCeasar("abcdefghijklmnopqrstuvwxyz", 3, true));
console.log("Decrypting....");
console.log(encryptCeasar("defghijklmnopqrstuvwxyzabc", 3, false));

console.log("");

console.log("key 4");
console.log(encryptCeasar("abcdefghijklmnopqrstuvwxyz", 4, true));
console.log("Decrypting....");
console.log(encryptCeasar("efghijklmnopqrstuvwxyzabcd", 4, false));

console.log("");

console.log("key 5");
console.log(encryptCeasar("abcdefghijklmnopqrstuvwxyz", 5, true));
console.log("Decrypting....");
console.log(encryptCeasar("fghijklmnopqrstuvwxyzabcde", 5, false));

console.log("");

console.log("key 6");
console.log(encryptCeasar("abcdefghijklmnopqrstuvwxyz", 6, true));
console.log("Decrypting....");
console.log(encryptCeasar("ghijklmnopqrstuvwxyzabcdef", 6, false));


console.log("");

console.log("key 7");
console.log(encryptCeasar("abcdefghijklmnopqrstuvwxyz", 7, true));
console.log("Decrypting....");
console.log(encryptCeasar("hijklmnopqrstuvwxyzabcdefg", 7, false));

console.log("");

console.log("key 8");
console.log(encryptCeasar("abcdefghijklmnopqrstuvwxyz", 8, true));
console.log("Decrypting....");
console.log(encryptCeasar("ijklmnopqrstuvwxyzabcdefgh", 8, false));

console.log("");

console.log("key 9");
console.log(encryptCeasar("abcdefghijklmnopqrstuvwxyz", 9, true));
console.log("Decrypting....");
console.log(encryptCeasar("jklmnopqrstuvwxyzabcdefghi", 9, false));

console.log("");

console.log("key 10");
console.log(encryptCeasar("abcdefghijklmnopqrstuvwxyz", 10, true));
console.log("Decrypting....");
console.log(encryptCeasar("klmnopqrstuvwxyzabcdefghij", 10, false));

console.log("");

console.log("key 11");
console.log(encryptCeasar("abcdefghijklmnopqrstuvwxyz", 11, true));
console.log("Decrypting....");
console.log(encryptCeasar("lmnopqrstuvwxyzabcdefghijk", 11, false));

console.log("");

console.log("key 12");
console.log(encryptCeasar("abcdefghijklmnopqrstuvwxyz", 12, true));
console.log("Decrypting....");
console.log(encryptCeasar("mnopqrstuvwxyzabcdefghijkl", 12, false));

console.log("");

console.log("key 13");
console.log(encryptCeasar("abcdefghijklmnopqrstuvwxyz", 13, true));
console.log("Decrypting....");
console.log(encryptCeasar("nopqrstuvwxyzabcdefghijklm", 13, false));

console.log("");console.log("");console.log("");console.log("");console.log("");console.log("");

console.log("key 1");
console.log(encryptCeasar("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 1, true));
console.log("Decrypting....");
console.log(encryptCeasar("BCDEFGHIJKLMNOPQRSTUVWXYZA", 1, false));

console.log("");

console.log("key 2");
console.log(encryptCeasar("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 2, true));
console.log("Decrypting....");
console.log(encryptCeasar("CDEFGHIJKLMNOPQRSTUVWXYZAB", 2, false));

console.log("");

console.log("key 3");
console.log(encryptCeasar("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 3, true));
console.log("Decrypting....");
console.log(encryptCeasar("DEFGHIJKLMNOPQRSTUVWXYZABC", 3, false));

console.log("");

console.log("key 4");
console.log(encryptCeasar("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 4, true));
console.log("Decrypting....");
console.log(encryptCeasar("EFGHIJKLMNOPQRSTUVWXYZABCD", 4, false));

console.log("");

console.log("key 5");
console.log(encryptCeasar("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 5, true));
console.log("Decrypting....");
console.log(encryptCeasar("FGHIJKLMNOPQRSTUVWXYZABCDE", 5, false));

console.log("");

console.log("key 6");
console.log(encryptCeasar("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 6, true));
console.log("Decrypting....");
console.log(encryptCeasar("GHIJKLMNOPQRSTUVWXYZABCDEF", 6, false));


console.log("");

console.log("key 7");
console.log(encryptCeasar("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 7, true));
console.log("Decrypting....");
console.log(encryptCeasar("HIJKLMNOPQRSTUVWXYZABCDEFG", 7, false));

console.log("");

console.log("key 8");
console.log(encryptCeasar("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 8, true));
console.log("Decrypting....");
console.log(encryptCeasar("IJKLMNOPQRSTUVWXYZABCDEFGH", 8, false));

console.log("");

console.log("key 9");
console.log(encryptCeasar("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 9, true));
console.log("Decrypting....");
console.log(encryptCeasar("JKLMNOPQRSTUVWXYZABCDEFGHI", 9, false));

console.log("");

console.log("key 10");
console.log(encryptCeasar("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 10, true));
console.log("Decrypting....");
console.log(encryptCeasar("KLMNOPQRSTUVWXYZABCDEFGHIJ", 10, false));

console.log("");

console.log("key 11");
console.log(encryptCeasar("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 11, true));
console.log("Decrypting....");
console.log(encryptCeasar("LMNOPQRSTUVWXYZABCDEFGHIJK", 11, false));

console.log("");

console.log("key 12");
console.log(encryptCeasar("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 12, true));
console.log("Decrypting....");
console.log(encryptCeasar("MNOPQRSTUVWXYZABCDEFGHIJKL", 12, false));

console.log("");

console.log("key 13");
console.log(encryptCeasar("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 13, true));
console.log("Decrypting....");
console.log(encryptCeasar("NOPQRSTUVWXYZABCDEFGHIJKLM", 13, false));