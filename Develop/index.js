// TODO: Include packages needed for this application

const inquirer = require('inquirer'); 

const fs = require('fs');

inquirer 
.prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'projectname',
    },
    {
        type: 'input',
        message: 'Describe the project',
        name: 'projdesc',
    },
    {
        type: 'input',
        message: 'Describe how to install',
        name: 'installguide',
    },
    {
        type: 'input',
        message: 'Describe the usage information',
        name: 'usageinfo',
    },
    {
        type: 'input',
        message: 'Describe contribution guidelines',
        name: 'contrguidelines',
    },
    {
        type: 'input',
        message: 'Describe testing instructions',
        name: 'testinst',
    },
    {
        type: 'checkbox',
        message: 'What license is used?',
        choices: ['License1','License2','license3'],
        name: 'licensechoice',
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'githubname',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
])
.then((data) => {
        const filename = `${data.projectname.toLowerCase().split(' ').join('')}.md`;
       
        var newdata = JSON.stringify(
        `# SchoolChallenge: ${data.projectname}
## License Number: ${data.licensechoice}

Got questions? Look at the code [here](https://github.com/gregali9311)
Not enough? Email me at: ${data.email}
        
## Project Description
        
        ${data.projdesc}
        
        
## Installation Guide
        
        ${data.installguide}
        
        
## Usage Info
        
        ${data.usageinfo}
        
## Contribution Guidelines
        
        ${data.contrguidelines}
        
## Testing Instructions
        
        ${data.testinst}`)

        var newdata2 = JSON.parse(newdata);
        

        fs.writeFile(filename, newdata2, (err)=> 
        err ? console.log(err) : console.log('Success')
        )
    });
 

 
// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(filename, data) {
//    let filename = `${data.projectname.toLowerCase()}.json`
//    fs.writefile(filename, JSON.stringify(data,null, '\t'), (err)=>
//    err ? console.log(err) : console.log('Success')
//    )
// }

