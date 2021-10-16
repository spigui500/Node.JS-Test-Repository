let sum = process.argv;

if (process.argv.includes("*")) {
    solution = process.argv[2] * process.argv[4];
    console.log(`Result is ${solution}`);

  } else if (process.argv.includes("/")) {
    solution = process.argv[2] / process.argv[4];
    console.log(`Result is ${solution}`);

  } else if (process.argv.includes("-")) {
    solution = process.argv[2] - process.argv[4];
    console.log(`Result is ${solution}`);

  } else if (process.argv.includes("+")) {
    solution = process.argv[2] + process.argv[4];
    console.log(`Result is ${solution}`);
    
  } else {
      console.log("Failed to comply");
  }