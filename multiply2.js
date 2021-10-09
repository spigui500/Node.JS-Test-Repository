let sum = 1;
for (i = 2; i < process.argv.length; ++i) {
    sum *= Number(process.argv[i]);
}
console.log(`Multiplied total is: ${sum}`);