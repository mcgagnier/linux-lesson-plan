//What is Linux?

//It is an operating system that is extremely prevalent in society. It runs in phones, cars, supercomputers and stock exchanges. The reason its so popular is because it's one of the most reliable, secure and open source operating systems available.

//Why use Linux?

//Linux is completely free first off. It's open source so you'll never have to pay to use it. It's also very secure. Linux very rarely has issues with malware, viruses or slow downs.

//How does that relate to us?

//Many web servers run Linux for one so you may use Linux at jobs in the future, but the main thing I want to focus on is the terminal for the Mac and Ubuntu for windows. We're familiar with using the command line for basic commands like ls or cd but there are many other extremely useful commands out there that are very helpful to understand how to use.

//Commands

//ls - list files in current directory

//alterations
//ls -a - lists hidden files
//ls -X - lists files in order based on file extensions
//ls -l - list detailed information about files and directories (show permissions)
//Permissions are broken into 4 sections
//- in the first position indicated a file while d indicates a directory
//rwx then comes next, indicating read write and execute permissions for the owner of the file
//rwx comes after with read, write and execute permissions for members of the group owning the file
//Lastly, rwx read write and execute permissions for other users
//read permission refers to users capability to read the contents of a file
//write refers to a users capability to write or modify a file or directory
//execute refers to a users capability to execute a file or view the contents of a directory
//after the permissions you see zs zs
//this referes to the owner:group
//zs is the owner and group
//I could change the owner or the group using chmod

//cd - change directories

//alterations
//cd ~ - takes user to home directory
//cd /usr/local/lib - takes user to absolute path specified
//cd .. -takes a user back one directory

//mv - moves or renames files

//alterations
//mv -T source destination - rename source to destination
//mv source destination - move source file to destination folder


//man -- gives you details about a specific command

//mkdir --creates a directory

//alterations
//mkdir -m a=rwx -sets permissions on newly created file

//rmdir - removes empty directory. Does not work on non empty directory

//rm - used to delete files. by default does not delete directories. use wisely, once a file is deleted it's gone forever.

//alterations
//rm -r - used to delete files recursively, in a directory
//rm -f - do not prompt for permission before removing files
//rm -rf - remove all files recursively in a directory without asking for permission

//touch - creates a file

//locate - finds files by name

//clear - clears the termial of input commands

//tail - outputs the last part of a file. by default tail prints the last 10 lines of a file

//alterations
//tail -f - causes tail to loop forever constantly checking for new inputs to the file
//tail -n 40 - outputs the last 40 lines of a file

//grep - processes text line by line and prints any lines which match a specified pattern

//syntax for grep
//grep 'word' filename
//grep 'word' filename filename2
//grep -c 'word' filename (count number of occurences)
//grep -r 'here' ./* or directory name (search recursively for all examples of string in directory)

//cat - simplest way to view text files contents on linux cli

//Example cat
//cat demoLinux.js | grep 'I'

//ps - shows running processes

//break down of ps output
//PID - Process id which identifies the running process
//TTY - Terminal type
//Time - amount of time to run
//Command - command that kicked it off

//Combine ps -A with grep to find a certain command running

//top - very similar to ps but a little more detailed

//pid - process id
//user - user who initiaed process
//pr/ni - "nice" value of process. basically, this is how prioritized this is
//virt/res/shr - all related to memory
//s - current state of process
//cpu/mem - total load on cpu and memory
//time - total cpu time used by the process since it started
//command - name of the process

//kill - used to kill a running process on your system using the pid

//passing arguments via command line to a file
//Show running index.js passing write to demo linux and have it write to the file using fs
