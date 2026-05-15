function check() {

    let input = document.getElementById("input").value.trim();
    let numList;
    let primes = [];
    let isPrime;

    if (input.includes(",") || input.includes(" ")) {
        input = input.replaceAll(",", " ")
        numList = input.split(/\s+/);
    } else {
        numList = [input.toString()];
    }

    console.log(numList);

    for (let i = 0; i < numList.length; i++) {
        numList[i] = Number(numList[i]);
        isPrime = true;

        console.log(numList[i]);

        if (numList[i].toString() === "NaN") {
            document.getElementById("output").innerHTML = "Your input was not a number.";
            return;
        }

        for (let j = 2; j < 94906256; j++) {
            if (numList[i] === j) continue;

            if (numList[i]%j === 0){
                isPrime = false;
                break;
            }
        }

        if (isPrime) primes.push(numList[i]);
        console.log("primes: ",primes)
    }

    if (primes.length > 0){
        if (primes.length > 1){
            document.getElementById("output").innerHTML = `${primes.slice(0, -1).join(", ")}, and ${primes[-1]} are primes.`;
        } else document.getElementById("output").innerHTML = `${primes[0]} is prime.`;
    } else document.getElementById("output").innerHTML = "None of your numbers are prime."
}