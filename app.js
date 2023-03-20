const getColor = () => {
    // Hex Code
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" +randomNumber.toString(16);
    document.body.style.background = randomCode;
    document.getElementById("color-code").innerText = randomCode;

    // If you want to copy hex code automatically then you will use this code
    // navigator.clipboard.writeText(randomCode)
    
}

// event call
document.getElementById("btn").addEventListener(
    "click",
    getColor
)


// init call
getColor();