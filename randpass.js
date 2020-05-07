$(document).on("click", ".btn", function(e) {
    Swal.fire({
        html: "<span style = 'font-size:22px; letter-spacing:0.5px;'>These passwords are generated locally within the browser and will <b>NOT</b>" + 
            " be stored anywhere.<br><br>This random password generator was created using JavaScript. The code can be viewed" +
            " <a href = 'https://github.com/QuinChapman/passwordgen' title = 'Password Generator GitHub' style = 'color:#336600'>here</a>.</span>",
    });
}),

$(document).ready(function() {
    var passLength = $(".lengthInput");
    var upperPassValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerPassValues = "abcdefghijklmnopqrstuvwxyz";
    var numPassValues = "0123456789";
    var specialCharValues = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

    // generate password after clicking on button
    $(".genbtn").click(function() {
        $(".result").val(generatePassword(passLength.val(), $(".uppercaseCheckbox").is(":checked"), $(".lowercaseCheckbox").is(":checked"),
        $(".numCheckbox").is(":checked"),$(".symbCheckbox").is(":checked")));
    })

    function generatePassword(length, isUpper, isLower, isNumber, isSpecial) {
        var passStr = "";

        // add values to an empty string
        if(isUpper != false) {
            passStr += upperPassValues;
        }
        if (isLower != false) {
            passStr += lowerPassValues;
        }
        if (isNumber != false) {
            passStr += numPassValues;
        }
        if (isSpecial != false) {
            passStr += specialCharValues;
        }

        // default password length
        if (!length) {
            length = 7
        } 

        // password length less than 99
        if ($(".lengthInput").val() > 99) {
            new jBox("Notice", {
                content: "Please enter a length between 1 and 99!",
                color: "red",
                autoClose: 1000,
                animation: "tada"
            });
            $(".result").val() = "";

        }

        var chars = "";
        amountOfCharacters = passStr.length;
        if (amountOfCharacters == 0) {
            return " ";
        }
        for (var i = 0; i < length; i++) {
            chars += passStr[Math.floor(Math.random() * Math.floor(amountOfCharacters))];
        }
        return chars;
    }

    // copy password to clipboard
    $(".result").click(function(){
        $(".result").select();

        // non-empty textarea validation
        if ($(".result").val().length > 0) {
            document.execCommand("copy");
                
            new jBox("Notice", {
                content: "Copied",
                color: "green",
                autoClose: 1000,
                animation: "tada"
            });
        }
    }),

    // tooltips
    new jBox("Tooltip", {
        attach: ".result",
        content: "Copy to Clipboard",
        delayOpen: 600,
        closeOnClick: true
    }),

    new jBox("Tooltip", {
        attach: ".genbtn",
        content: "Generate",
        delayOpen: 600,
        closeOnClick: true
    });
});
