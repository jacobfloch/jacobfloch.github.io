let min = 77;
let max = 345;

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
        console.log(i)
    }
    }           
}