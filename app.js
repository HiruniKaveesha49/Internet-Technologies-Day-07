function checkValue() {
    let inputNumber = document.getElementById("inputNumber").value
    console.log(inputNumber);

    let num = Math.random() * 10 + 1

    let randomNumber = Math.floor(num)
    console.log(randomNumber);

    if (inputNumber == randomNumber) {
        Swal.fire({
            title: "Congratulation!🤩...You are Win",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
                       
                        rgba(64, 0, 123, 0.4)
                        url("images/win.gif\")
                     `
        });

    } else {
        Swal.fire({
            title: "You are fail😪...Try again",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
                       
                        rgba(64, 0, 123, 0.4)
                        url("images/nyan-cat.gif\")
                        left center / 300px auto
                        no-repeat
                        `
        });

    }
}

function resetButton() {
    document.getElementById("inputNumber").value = ""
}
