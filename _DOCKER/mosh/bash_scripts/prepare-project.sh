#!/bin/bash
#v0
echo Enter folder name to store this poject: 
read rootFolder
echo
echo "Step 0 - Installing 7z"
sudo apt install p7zip-full -y
echo
echo "Step 1 - Create a new folder $(pwd)/$rootFolder"
sleep 1
 if [ -d $(pwd)"/"$rootFolder ]
        then
            echo "   Folder $rootFolder$ exists in $(pwd) - I am going to delete it!"
            sleep 0.5
            echo $(rm -r $rootFolder)
            sleep 0.5
      if [ -d $(pwd)"/$rootFolder" ]
        then
            echo "  CAN'T DELETE $rootFolder in $(pwd)!"
            sleep 0.5
      exit
        else
            echo "   Folder $rootFolder was deleted from $(pwd)!"
            sleep 0.5
      fi
        else
            echo "   Folder $rootFolder doesn't exist in ${green}$(pwd)!"
            sleep 0.5
    fi
echo "   Creating a new folder"
sleep 0.5
sudo mkdir $rootFolder
if [ -d $(pwd)"/"$rootFolder ]
        then
            echo "   Folder $rootFolder was created!"
            sleep 0.5
        else
            echo "   Can't create $rootFolder in $pwd!"
            sleep 0.5
    fi
    sleep 1
clear -x
echo "1. Folder $rootFolder was created!"
echo
echo
echo
echo
echo
echo "Step 2 - Move files"
sleep 0.5
echo "Moving scripts to $(pwd)/$rootFolder"
sudo mkdir $rootFolder/scripts
sudo mv *.sh $rootFolder/scripts
sleep 0.5
echo "Extracting test project into $(pwd)/$rootFolder/vidly"
sudo 7z x vidly.7z -o./$rootFolder
sudo rm vidly.7z
sleep 0.5
echo "   Scripts were moved to $(pwd)/$rootFolder/scripts and project was extracter into $(pwd)/$rootFolder/vidly "
sleep 1
clear -x
echo "1. Folder $rootFolder was created!"
echo "2. Files were moved!"
echo
echo
echo
echo
echo "Step 3 - Installing Node.js"
sudo curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash - && sudo apt install -y nodejs
echo "   Node.js was installed!"
sleep 1
clear -x
echo "1. Folder $rootFolder was created!"
echo "2. Files were moved!"
echo "3. Node.js was installed!"
echo
echo
echo
echo "Step 4 - Installing Docker"
sudo apt-get install ca-certificates curl gnupg lsb-release
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-compose-plugin
echo "   Docker was installed!"
sleep 1
clear -x
echo "1. Folder $rootFolder was created!"
echo "2. Files were moved!"
echo "3. Node.js was installed!"
echo "4. Docker was installed!"
echo
echo
echo "Step 5 - Installing Docker Compose"
sudo apt install docker-compose -y
echo "   Docker Compose was installed!"
sleep 1
clear -x
echo "1. Folder $rootFolder was created!"
echo "2. Files were moved!"
echo "3. Node.js was installed!"
echo "4. Docker was installed!"
echo "5. Docker Compose was installed!"
echo
echo "Everything is ready!"
echo  "cd $(pwd)/$rootFolder/vidly"