module.exports = function toReadable(number) {
    var result = "";

    if (number === 0) result += "zero";

    var h = parseInt(number / 100);

    if (h > 0) {
        switch (h) {
            case 1:
                result += "one hundred";
                number -= 100;
                break;
            case 2:
                result += "two hundred";
                number -= 200;
                break;
            case 3:
                result += "three hundred";
                number -= 300;
                break;
            case 4:
                result += "four hundred";
                number -= 400;
                break;
            case 5:
                result += "five hundred";
                number -= 500;
                break;
            case 6:
                result += "six hundred";
                number -= 600;
                break;
            case 7:
                result += "seven hundred";
                number -= 700;
                break;
            case 8:
                result += "eight hundred";
                number -= 800;
                break;
            case 9:
                result += "nine hundred";
                number -= 900;
                break;
        }
    }

    if (number >= 10 && number < 20) {
        if (h > 0) result += " ";
        switch (number) {
            case 10:
                result += "ten";

                break;
            case 11:
                result += "eleven";

                break;
            case 12:
                result += "twelve";

                break;
            case 13:
                result += "thirteen";

                break;
            case 14:
                result += "fourteen";

                break;
            case 15:
                result += "fifteen";

                break;
            case 16:
                result += "sixteen";

                break;
            case 17:
                result += "seventeen";

                break;
            case 18:
                result += "eighteen";

                break;
            case 19:
                result += "nineteen";

            default:
                break;
        }
        return result;
    } else if (number >= 20) {
        var d = parseInt(number / 10);
        if (h > 0) result += " ";
        switch (d) {
            case 2:
                result += "twenty";
                number -= 20;
                break;
            case 3:
                result += "thirty";
                number -= 30;
                break;
            case 4:
                result += "forty";
                number -= 40;
                break;
            case 5:
                result += "fifty";
                number -= 50;
                break;
            case 6:
                result += "sixty";
                number -= 60;
                break;
            case 7:
                result += "seventy";
                number -= 70;
                break;
            case 8:
                result += "eighty";
                number -= 80;
                break;
            case 9:
                result += "ninety";
                number -= 90;
                break;

            default:
                break;
        }
    }

    if (number > 0) {
        if (d > 0 || h > 0) result += " ";
        switch (number) {
            case 1:
                result += "one";
                break;
            case 2:
                result += "two";
                break;
            case 3:
                result += "three";
                break;
            case 4:
                result += "four";
                break;
            case 5:
                result += "five";
                break;
            case 6:
                result += "six";
                break;
            case 7:
                result += "seven";
                break;
            case 8:
                result += "eight";
                break;
            case 9:
                result += "nine";
                break;

            default:
                break;
        }
    }
    return result;
};