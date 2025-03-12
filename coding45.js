const theDate = new Date();

console.log(Math.floor(theDate.getTime() / (60 * 60 * 24 * 365 * 1000)) + 1970);
