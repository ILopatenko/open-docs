#!/bin/bash
#v0
echo "Sending files to 192.168.0.102:/home/test"
sudo scp ./bash_scripts/*.*  test@192.168.0.102:/home/test/
echo
echo "Now you need to do next steps:"
echo "1. Connect to the remote server"
echo "sudo ssh test@192.168.0.102"
echo
echo "And run the main script"
echo "sudo bash ./prepare-project.sh"
