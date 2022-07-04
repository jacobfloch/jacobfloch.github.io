let table = document.getElementById("tablebody");

let printPrimes = () => {
    // resets error message
    
    if (document.getElementById('error').style.display = 'block') {
        document.getElementById('error').style.display = 'none';
    }
   
    // resets tables
    
    document.getElementById('tablebody').innerHTML = " ";
    
    // gets values from webpage forms

    let min = parseInt(document.getElementById("minimum").value);
    let max = parseInt(document.getElementById("maximum").value);
    
    console.log(`Min = ${min}`);
    console.log(`Max = ${max}`);
    console.log(`The type of min is ${typeof min}`);
    console.log(`The type of max is ${typeof max}`);
    
    // checks to see if values are within range, displays error message otherwise

    if (min === undefined || max === undefined) {
        document.getElementById('error').style.display = 'block';
    } else if (min < 1 || max > 1000)  {
        document.getElementById('error').style.display = 'block';
    } else if (min >= max) {
        document.getElementById('error').style.display = 'block';
    } else {   

       
    // prints 2 as first prime number   
    if (min <= 2) {
        document.getElementById('tablebody').innerHTML += "<tr><td>2</td></tr>";
    }   
    
    // starts loop
        for (let i = min; i < max; i++) {
            if (i === 1 || i % 2 === 0) {
                continue;
            } else {

                let prime = true;
                for (let j = 3; j <= (Math.floor(i / 2)); j+=2) {
                    if (i % j === 0) {
                        prime = false;
                        continue;
                    };
                }  
            if (prime === true) {
                document.getElementById('tablebody').innerHTML += "<tr><td>" + i + "</td></tr>";
            }
            }           
        }
}

}
    // resets value fields on webpage

    document.getElementById("minimum").value = '';
    document.getElementById("maximum").value = '';


document.getElementById('testbutton').onclick = printPrimes;

/* old test code, can probably be deleted

const testTable = () => {
    document.getElementById('tablebody').innerHTML += "<tr><td>help</td></tr>";
}

document.getElementById('testbutton').onclick = testTable;

*/
