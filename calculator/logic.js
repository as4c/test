let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = ' ';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonsText = e.target.innerText;
        console.log('Button text is ', buttonsText);
        if (buttonsText == 'X'){
            buttonsText = ' * ';
            screenValue += buttonsText;
            screen.value =  screenValue ;
        }
        else if (buttonsText == '='){
            screen.value = eval(screenValue);
        }
        else if (buttonsText == 'AC'){
            screenValue = " ";
            screen.value = screenValue;
        }
        else if (buttonsText == 'Del'){       
            var output = reverseNumberFormat(getOutput()).toString();
            if (output){
                output = output.substr(0,output.length-1);
                screenValue = output;
            }
            
           
        }
        else {
            screenValue += buttonsText;
            screen.value =  screenValue ;
        }
    })
}