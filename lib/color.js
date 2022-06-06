const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const hinataLog = (text, color) => {
	return !color ? chalk.cyan('[RIY] ') + chalk.yellow(text) : chalk.cyan('[RIY] ') + chalk.keyword(color)(text)
}

module.exports = {
  color,
  hinataLog
}