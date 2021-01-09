/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/
//CODE HERE
const gitDefinition = 'Git is your local repository on your computer'

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
const gitHubDefinition = 'GitHub is a repository on the cloud. You can push your local repository to your repository on GitHub'
//////////////////PROBLEMS 3 - 9////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/
const init = {
    cd: 'change your directory so that you are in the directory you want to work in',
    code: 'git init'
}
//CODE HERE

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE
const clone = {
    cd: 'change your directory so that you are in the directory you want to work in',
    code: 'git clone',
    paste: 'url for github repo then press enter',
    verify: 'enter in ls to see if added it to your directory'
}
//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE
const status = {
    pwd: 'veirfy you are in the correct directory',
    ls: 'show the list of files in directory and verifies it contains file you are working on',
    code: 'git status'
}
//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE
const add = {
    code: 'git add',
    property: 'this stages your file'
}
//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
const commit = {
    gitAdd: 'add file first',
    gitStatus: 'verify it was staged',
    code: 'git commit -m then add a comment',
    input: 'git push'
}
//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'addRemote' with 'description' and 'code' properties
    following the guidelines above to describe the command to add a remote location to your git repository.
*/

//CODE HERE
const addRemote = {
    cd: 'change into the directory you want to add',
    code: 'mkdir add a name then press enter',
    verify: 'input ls to verify it added'
}
//////////////////PROBLEM 9////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE
const push = {
    cd: 'change into the directory with the filed',
    gitAdd: 'want to stage the file',
    gitCommit: 'want to commit the file with a comment',
    gitStatus: ' want to verify status of file',
    code: 'git push'
}