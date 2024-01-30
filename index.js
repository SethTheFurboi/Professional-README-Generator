const inquirer = require('inquirer');
const fs = require('fs');

const GenerateREADME = ({name, description, installation, usage, credits}) =>
`# ${name}

## Description

${description}

## Installation

${installation}

## Usage

${usage}

## Credits

${credits}

## License

Please refer to the LICENSE in the repo.`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the project name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'How would you describe this project?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Any installation methods? (if there are none, putting N/A is recommended)',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Any usage methods? (if there are none, putting N/A is recommended)',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'What are the credits to this project?',
    },
  ])
  .then((answers) => {
    const READMEContent = GenerateREADME(answers);

    fs.writeFile('README.md', READMEContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README!')
    );
  });