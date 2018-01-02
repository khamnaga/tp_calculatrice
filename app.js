const calculatrice = (function calculatrice(){

    "use strict";

    var display, nombres, nbrEtOpr, operateurs, btn, suppr,
        point, result;

    const screenDisplay = function screenDisplay() {
        for (var i = 0; i < nbrEtOpr.length; i += 1) {
            console.log(nbrEtOpr[i]);
            nbrEtOpr[i].onclick = function() {
                btn = this.value;
                console.log(btn);
                display.value += btn;
            };
        }
    }

    const clearDisplay = function clearDisplay() {
        btn = document.getElementById('clear');
        console.log(btn);
        btn.onclick = function() {
            return display.value = "";
        };
    }

    const suppression = function suppression() {
        suppr = document.getElementById('suppr');
        let newDisplay;
        console.log(suppr);
        suppr.onclick = function() {
            console.log("test");
            console.log(display.length);
            // newDisplay = display.textContent.split("").slice(0, display.textContent.length -1).join("");
            newDisplay = display.value.substring(0, display.value.length -1);
            if (display.isempty === "true") {
                return display.value = "";
            }
            display.value = newDisplay;
        }
    }

    const afficherResultat = function afficherResultat() {
        result = document.getElementById('result');
        console.log(result);
        console.log(typeof result);
        result.onclick = function() {
            let screen = display.value;
            console.log(screen);
            let finalScreen = eval(screen);
            console.log(finalScreen);
            display.value = finalScreen;
        }
    }

    window.onload = function init() {
        display = document.getElementById('display');
        console.log(display);

        nbrEtOpr = document.querySelectorAll('.number, .operateur, .decimal');
        console.log(nbrEtOpr);
        console.log(screenDisplay());
        console.log(clearDisplay());
        console.log(suppression());
        console.log(afficherResultat());
    }
}());
