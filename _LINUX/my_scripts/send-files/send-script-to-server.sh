#!/bin/bash
#v0
echo "Sending all the files that are in SEND directory to 192.168.0.$1:/home/test"
sudo scp ./SEND/*.*  test@192.168.0.$1:/home/test/
echo
echo "Now you need to do next steps:"
echo "1. Connect to the remote server"
echo -e "sudo ssh test@192.168.0.$1"
