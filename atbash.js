let plaintext = "cipher";
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let fixedKey = "zyxwvutsrqponmlkjihgfedcba";

function isUpperCase(letter) {
    let charCode = letter.charCodeAt(0);
    if(charCode >= 65 && charCode <= 90) {
        return true;
    } else {
        return false;
    }
}

function isLowerCase(letter) {
    let charCode = letter.charCodeAt(0);
    if(charCode >= 97 && charCode <= 122) {
        return true;
    } else {
        return false;
    }
}

function encrypt(text) {
    let encrypted = "";
    for (let i = 0; i < text.length; i++) {
        let index = 0;

        if(isUpperCase(text[i])) {
            let reversedIndex = 0;

            let lower = text[i].toLowerCase();
            index = fixedKey.indexOf(lower);

            if(index < 0 && index >= -27) {
                reversedIndex = index * (-1);
            } else {
                reversedIndex = index;
            }

            let tempIndex = reversedIndex - 1 - 24;
            if(tempIndex < 0) {
                tempIndex = tempIndex * (-1);
            } else {
                tempIndex = tempIndex;
            }

            let reversedChar = fixedKey[tempIndex];

            encrypted +=reversedChar.toUpperCase();
        } else if(isLowerCase(text[i])) {
            let reversedIndex = 0;

            let lower = text[i].toLowerCase();
            index = fixedKey.indexOf(lower);

            if(index < 0 && index >= -27) {
                reversedIndex = index * (-1);
            } else {
                reversedIndex = index;
            }

            let tempIndex = reversedIndex - 1 - 24;
            if(tempIndex < 0) {
                tempIndex = tempIndex * (-1);
            } else {
                tempIndex = tempIndex;
            }

            let reversedChar = fixedKey[tempIndex];
            encrypted += reversedChar;
        } else {
            encrypted += text[i];
        }
    }

    return encrypted;
}

let encrypted = encrypt(plaintext);
let decrypted = encrypt(encrypted);

console.log(encrypted);
console.log(decrypted);