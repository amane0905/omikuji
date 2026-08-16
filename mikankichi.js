const button = document.querySelector("button");
function omikujiHover(){
    button.style.backgroundColor = '#FFD3A8'; 
}
function omikujiReset(){
    button.style.backgroundColor = '';
}

button.addEventListener('mouseenter',omikujiHover);
button.addEventListener('mouseleave', omikujiReset);

function omikujishow(){
    const results = ["大吉","みかん吉","中吉","小吉","末吉","凶","大凶"];

    const random = Math.floor(Math.random() * results.length);
    const result = results[random];

    const omikujiDiv = document.getElementById("omikuji");
    const button = document.querySelector("button");
    
    omikujiDiv.innerText = result;

    let textColor = "black";
    let bgColor = "#f0f0f0";

    if (result == "大吉"){
        textColor = "red";
        bgColor = "rgba(255, 0, 0, 0.1)";
    } else if (result == "みかん吉"){
        textColor = "#e67e22";
        bgColor = "rgba(230, 126, 34, 0.2)";
        omikujiDiv.innerText = "みかん吉🍊✨";
    } else if(result == "大凶"){
        textColor ="darkblue";
        bgColor = "rgba(0, 0, 139, 0.1)";
    } else if (result == "凶"){
        textColor = "blue";
        bgColor = "rgba(0, 0, 255, 0.1)";
    }
    omikujiDiv.style.color = textColor;
    omikujiDiv.style.backgroundColor = bgColor;


    omikujiDiv.style.fontFamily = "'Comic Sans MS', 'cursive', sans-serif";
    omikujiDiv.style.fontSize = "3em"; 
    omikujiDiv.style.fontWeight = "bold";
    omikujiDiv.style.padding = "20px";
    omikujiDiv.style.borderRadius = "10px";
  
        button.innerText = "もう一度引く！"
    }

