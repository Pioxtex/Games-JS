function random(k, n)
{
    let numbers = new Array(n);
    let a = new Array();
    for (let i=0; i<n; i++) {numbers[i] = i + 1;}
    for (let i=0; i<k; i++)
    {
       let r = Math.floor(Math.random()*n);
        a.push(numbers[r]);
       numbers[r] = numbers[n - 1];
       n--;
    }
    return a;
}

export { random };