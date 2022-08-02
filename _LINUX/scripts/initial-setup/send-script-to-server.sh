#!/bin/bash
#v0
echo "Sending script ubuntu-server-setup.sh to 192.168.0.$1:/home/test"
sudo scp ubuntu-server-setup.sh  test@192.168.0.$1:/home/test/
echo
echo "Now you need to do next steps:"
echo "1. Connect to the remote server"
echo -e "sudo ssh test@192.168.0.$1"
echo
echo "2. Run the main script"
echo -e "sudo bash ./ubuntu-server-setup.sh"
