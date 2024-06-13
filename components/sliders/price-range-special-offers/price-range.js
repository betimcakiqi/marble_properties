const rangevalue = document.querySelector(".slider-container .price-slider");
const rangeInputvalue = document.querySelectorAll(".range-input input");
let priceGap = 45000;

const priceInputvalue = document.querySelectorAll(".price-input input");

// Helper function to format value with Euro symbol in front and space separator
const formatValueWithEuro = value => {
    const formattedValue = value.toLocaleString().replace(/\,/g, ' ');
    return `${formattedValue} €`;
};

// Helper function to parse value from Euro format
const parseValueFromEuro = value => parseInt(value.replace(/[€\s]/g, ''));

// Restrict input to numeric values only
const restrictInputToNumeric = (e) => {
    const value = e.target.value;
    e.target.value = value.replace(/[^\d]/g, '');
};

for (let i = 0; i < priceInputvalue.length; i++) {
    priceInputvalue[i].addEventListener("input", e => {
        restrictInputToNumeric(e); // Ensure input is numeric only

        let minp = parseValueFromEuro(priceInputvalue[0].value);
        let maxp = parseValueFromEuro(priceInputvalue[1].value);
        let diff = maxp - minp;

        if (minp < 0) {
            alert("minimum price cannot be less than 0");
            priceInputvalue[0].value = formatValueWithEuro(0);
            minp = 0;
        }

        if (maxp > 980000) {
            alert("maximum price cannot be greater than 980000");
            priceInputvalue[1].value = formatValueWithEuro(980000);
            maxp = 980000;
        }

        if (minp > maxp - priceGap) {
            priceInputvalue[0].value = formatValueWithEuro(maxp - priceGap);
            minp = maxp - priceGap;

            if (minp < 0) {
                priceInputvalue[0].value = formatValueWithEuro(0);
                minp = 0;
            }
        }

        if (diff >= priceGap && maxp <= parseInt(rangeInputvalue[1].max)) {
            if (e.target.className === "min-input") {
                rangeInputvalue[0].value = minp;
                let value1 = rangeInputvalue[0].max;
                rangevalue.style.left = `${(minp / value1) * 100}%`;
            } else {
                rangeInputvalue[1].value = maxp;
                let value2 = rangeInputvalue[1].max;
                rangevalue.style.right = `${100 - (maxp / value2) * 100}%`;
            }
        }

        // Reformat the input value with Euro symbol in front and space separator
        priceInputvalue[0].value = formatValueWithEuro(minp);
        priceInputvalue[1].value = formatValueWithEuro(maxp);
    });

    // Trigger initial input event to format the value with Euro symbol and space separator
    priceInputvalue[i].dispatchEvent(new Event('input'));
}

for (let i = 0; i < rangeInputvalue.length; i++) {
    rangeInputvalue[i].addEventListener("input", e => {
        let minVal = parseInt(rangeInputvalue[0].value);
        let maxVal = parseInt(rangeInputvalue[1].value);
        let diff = maxVal - minVal;

        if (diff < priceGap) {
            if (e.target.className === "min-range") {
                rangeInputvalue[0].value = maxVal - priceGap;
            } else {
                rangeInputvalue[1].value = minVal + priceGap;
            }
        } else {
            priceInputvalue[0].value = formatValueWithEuro(minVal);
            priceInputvalue[1].value = formatValueWithEuro(maxVal);
            rangevalue.style.left = `${(minVal / rangeInputvalue[0].max) * 100}%`;
            rangevalue.style.right = `${100 - (maxVal / rangeInputvalue[1].max) * 100}%`;
        }
    });
};

// Initialize the input values with the Euro symbol in front and space separator
priceInputvalue[0].value = formatValueWithEuro(parseInt(rangeInputvalue[0].value));
priceInputvalue[1].value = formatValueWithEuro(parseInt(rangeInputvalue[1].value));
