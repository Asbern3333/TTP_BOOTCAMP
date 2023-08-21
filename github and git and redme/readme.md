# How To Work With Multiple Github Accounts on a single Machine

- 5 steps to setup:
- you should use git bash
## Steps
- [Step 1](#step-1) : Create SSH keys for all accounts
- [Step 2](#setp-2) : Add SSH keys to SSH Agent
- [Step 3](#step-3) :Add SSH public key to the Github
- [Step 4](#step-4) :Create a config File and Make Host Entries
- [Step 5](#step-5) :Cloning Github repositories using different accounts

## Step 1:
### Create SSH keys for all accounts
First make sure your current directory is your **.ssh** folder.
```sh
     $ cd ~/.ssh
```
### Syntax for generating unique ssh key for ann account is:
 `ssh-keygen -t rsa -C "your-email-address" -f "github-username" `
- Then enter a password for it (it can be empty)

## Adding or changing a passphrase
- You can change the passphrase for an existing private key without regenerating the keypair by typing the following command:

`ssh-keygen -p -f ~/.ssh`
OR
`ssh-keygen -p -f C:\Users\asbbe\.ssh\githubusername`
- you can type `ls` to see what you have the one have next to it `.pub` is and ssh key

- Tip: If you want `ssh-agent` to forget your key after some time, you can configure it to do so by running `ssh-add -t <seconds>`.
` cd ~/.ssh `
## Step 2:  this one it doesnot work so I skip it
### Add SSH keys to SSH Agent
Now we have the keys but it cannot be used until we add them to the SSH Agent.
```sh
     ssh-add -K ~/.ssh/githubusername
```

## Step 3:
Type `cd ~/.ssh` the `ls`
go to the file `.pub` and copy what is there and add it to the SSH key on the github.

## Step 4:
Lastly connect VS with github
I think after that it will work

cloning `git clone`+ `ssh`

example 
`git clone git@github.com:asbernoma/TTP_Boot_Camp.git`

after cloning 
to push to github

```…or create a new repository on the command line
echo "# TTP_Boot_Camp" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:asbernoma/TTP_Boot_Camp.git
git push -u origin main
…or push an existing repository from the command line
git remote add origin git@github.com:asbernoma/TTP_Boot_Camp.git
git branch -M main
git push -u origin main 
```
Git pull
`git pull`, `git fetch && git merege`, `git stash`


```
I donto need it
Rename your local master branch into main with the following command:
$ git branch --move master main.
$ git push --set-upstream origin main.
$ git branch --all * main remotes/origin/HEAD -> origin/master remotes/origin/main remotes/origin/master.
$ git push origin --delete master.```