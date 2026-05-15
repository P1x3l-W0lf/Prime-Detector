function check() {

    let input = document.getElementById("input").value.trim();
    let numList;
    let primes = [];
    let isPrime;

    if (input.includes(",") || input.includes(" ")) {
        input = input.replaceAll(",", " ")
        numList = input.split(/\s+/);
    }

    for (let i = 0; i < numList.length; i++) {
        numList[i] = Number(numList[i]);
        isPrime = true;

        if (numList[i].isNaN) return;

        for (let j = 2; j < 1000000; j++) {
            if (numList[i]%j === 0){
                isPrime = false;
                break;
            }
        }

        if (isPrime) primes.push(numList[i]);
    }

    if (primes.length){
        if (primes.length > 1){
            document.getElementById("output").innerHTML = `From your original list, these are the primes: ${primes.slice(0, -1).join(", ")}, and ${primes[-1]}.`;
        } else document.getElementById("output").innerHTML = `From your original list, ${primes[0]} is the prime.`;
    } else document.getElementById("output").innerHTML = "None of your numbers are prime."
}