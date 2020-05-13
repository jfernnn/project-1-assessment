/*----- constants -----*/


/*----- app state -----*/


/*----- cached element variables -----*/


/*----- event listeners -----*/
//Javascipt way
//document.getElementById('plusButton').addEventListener('click', handleClick);

//jQuery Way
$('button').on('click', handleClick)

/*----- functions-----*/

function handleClick(e) {

    var inputNum = parseInt($(`input`).val());

    var total = parseInt(document.querySelector('h1').innerText);

    
    if(e.target.innerText === '+') {
        total +=  inputNum;
    }
    else if(e.target.innerText === '-') {
        total -= inputNum;
    }
    document.querySelector('h1').innerText = total;
    if(total < 0){
        document.querySelector('h1').style.color = 'red';
    }
    else {
        document.querySelector('h1').style.color = 'black';        
    }
}