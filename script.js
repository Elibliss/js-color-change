let colours = [
"#F08080","#FA8072", "#E9967A",	"#FFA07A",	"#DC143C",	"#FF0000", "#B22222",	"#8B0000",	"#FFC0CB",
	"#FFB6C1",	"#FF69B4",	"#FF1493",	"#C71585",	"#DB7093","#FFA07A"," #FF7F50",	"#FF6347",	"#FF4500",
    	"#FF8C00","#FFA500"	,"#FFD700","#FFFF00"	,"#FFFFE0"	,"#FFFACD","#FAFAD2	","#FFEFD5","#FFE4B5","#FFDAB9"	,"#EEE8AA"	,"#F0E68C"	,"#BDB76B"
    ];
    const colourBtn = document.getElementById("Btn");
    const colourCode = document.getElementById("color-code")
    //const body = document.getElementById("body");


   colourBtn.addEventListener("click", () => {

    const randColour = colours[Math.floor(Math.random()*colours.length)];
    console.log(randColour);    

    colourCode.innerText = randColour;
    document.body.style.background= `${randColour}`;

   })

    