const chalk = require("chalk");

const warning = chalk.red("WARNING!");
const sucess = chalk.green("CONGRATS!");
const log = console.log;


log(chalk.magentaBright("Hi There!" + "\n -> I'm " + chalk.inverse("15 years old")));
log(warning);
log(sucess)