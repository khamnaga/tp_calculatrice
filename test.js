const calculatrice = (function calculatrice(){

    "use strict";

    var display, nombres, nbrEtOpr, operateurs, btn, suppr,
        add, soust, divis, multip, point, result;

    // const screenDisplay = function screenDisplay() {
    //     nombres = document.querySelectorAll(".number");
    //     for (var i = 0; i < nombres.length; i += 1) {
    //         // console.log(nombres[i]);
    //         nombres[i].onclick = function() {
    //             btn = this.value;
    //             console.log(btn);
    //             display.innerHTML += btn;
    //         };
    //     }
    // }

    const screenDisplay = function screenDisplay() {
        for (var i = 0; i < nbrEtOpr.length; i += 1) {
            console.log(nbrEtOpr[i]);
            nbrEtOpr[i].onclick = function() {
                btn = this.value;
                console.log(btn);
                display.innerHTML += btn;
            };
        }
    }

    const clearDisplay = function clearDisplay() {
        btn = document.getElementById('clear');
        console.log(btn);
        btn.onclick = function() {
            return display.innerHTML = "";
        };
    }

    // const puissance = function puissance() {
    //
    // }

    const suppression = function suppression() {
        suppr = document.getElementById('suppr');
        let newDisplay;
        console.log(suppr);
        suppr.onclick = function() {
            console.log("test");
            console.log(display.length);
            // newDisplay = display.textContent.split("").slice(0, display.textContent.length -1).join("");
            newDisplay = display.textContent.substring(0, display.textContent.length -1);
            if (display.isempty === "true") {
                return display.innerHTML = "";
            }
            display.textContent = newDisplay;
        }
    }

    // const additionner = function additionner() {
    //     add = document.getElementById('add');
    //     console.log(add);
    //     console.log(typeof add);
    //     add.onclick = function() {
    //         console.log("test");
    //         display.innerHTML += add.value;
    //     }
    // }
    //
    // const soustraire = function soustraire() {
    //     soust = document.getElementById('soust');
    //     console.log(soust);
    //     console.log(typeof soust);
    //     soust.onclick = function() {
    //         console.log("test");
    //         display.innerHTML += soust.value;
    //     }
    // }
    //
    // const diviser = function diviser() {
    //     divis = document.getElementById('divis');
    //     console.log(divis);
    //     console.log(typeof divis);
    //     divis.onclick = function() {
    //         console.log("test");
    //         display.innerHTML += divis.value;
    //     }
    // }
    //
    // const multiplier = function multiplier() {
    //     multip = document.getElementById('multip');
    //     console.log(multip);
    //     console.log(typeof multip);
    //     multip.onclick = function() {
    //         console.log("test");
    //         display.innerHTML += multip.value;
    //     }
    // }

    // const operateursCalc = function operateursCalc() {
    //     for (var i = 0; i < operateurs.length; i += 1) {
    //         console.log(operateurs[i]);
    //         operateurs[i].onclick = function() {
    //             btn = this.value;
    //             console.log(btn);
    //             display.innerHTML += btn;
    //         };
    //     }
    // }

    const afficherResultat = function afficherResultat() {
        result = document.getElementById('result');
        console.log(result);
        console.log(typeof result);
        result.onclick = function() {
            let screen = display.textContent;
            console.log(screen);
            let finalScreen = eval(screen);
            console.log(finalScreen);
            display.textContent = finalScreen;
        }
    }

    window.onload = function init() {
        display = document.getElementById('display');
        console.log(display);
        // operateurs = document.querySelectorAll('.operateur');
        // console.log(operateurs);
        nbrEtOpr = document.querySelectorAll('.number, .operateur, .decimal');
        console.log(nbrEtOpr);
        console.log(screenDisplay());
        console.log(clearDisplay());
        console.log(suppression());
        // console.log(additionner());
        // console.log(soustraire());
        // console.log(diviser());
        // console.log(multiplier());
        // console.log(operateursCalc());
        console.log(afficherResultat());
    }

}());
