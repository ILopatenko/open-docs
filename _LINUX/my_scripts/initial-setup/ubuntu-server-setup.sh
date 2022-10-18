#!/bin/bash
#e approach
#v0.1 08/02/2022 - update, tools, NFS, node, docker, docker-compose
RED="31"
GREEN="32"
YELLOW="33"
BLUE="34"
MAGENTA="35"
CYAN="36"
WHITE="37"
DROPCOLOR="m"


#CSS
FRAME="\e[1;${MAGENTA}m"
INFO="\e[1;${CYAN}m"
li='\e[1;37m'
ACTIVE="\e[1;${YELLOW}m"
DONE="\e[1;${GREEN}m"
SKIP="\e[1;${RED}m"

style1=$li
style2=$li
style3=$li
style4=$li
style5=$li
style6=$li

#EXAMPLES
#echo -e "\e[1;${RED}mTHIS IS RED"
#echo -e "\e[1;${GREEN}mTHIS IS GREEN"
#echo -e "\e[1;${YELLOW}mTHIS IS YELLOW"
#echo -e "\e[1;${BLUE}mTHIS IS BLUE"
#echo -e "\e[1;${MAGENTA}mTHIS IS MAGENTA"
#echo -e "\e[1;${CYAN}mTHIS IS CYAN"

#============ FUNCTIONS BLOCK STARTS ===============#

# ===> 0 UPDATIN THE SYSTEM
updateSystem(){
    sudo apt update && sudo apt upgrade -y
}

updateSystemSilent(){
    (sudo apt update && sudo apt upgrade -y) > /dev/null 2>&1
}

mainAppsInstall(){
    sudo apt install openssh-server git nano wget tar htop nfs-common p7zip-full -y 
}

nfs(){
    if [ -d "/media/ryzen4ter" ]
    then
    echo
    else 
    sudo mkdir /media/ryzen4ter
    fi
    if [ -d "/media/ryzen2ter" ]
    then
    echo
    else 
    sudo mkdir /media/ryzen2ter
    fi
sudo echo "#AUTOMOUNT NFS SHARE trueNAS ryzen server" >> /etc/fstab
sudo echo "192.168.0.201:/mnt/ryzen2ter/dataSetRyzen2ter /media/ryzen2ter nfs defaults 0 0" >> /etc/fstab
sudo echo "192.168.0.201:/mnt/ryzen4ter/dataSetRyzen4ter /media/ryzen4ter nfs defaults 0 0" >> /etc/fstab
}


nodejsInstall(){
    sudo curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash - && sudo apt install -y nodejs
}

dockerInstall(){
sudo apt-get install ca-certificates curl gnupg lsb-release
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-compose-plugin -y
}
dockerComposeInstall(){
   sudo apt install docker-compose -y 
}

askQuestion(){
while true; do
    read -p "$1" yn
    case $yn in
        [Yy]* ) return 0;;
        [Nn]* ) return 1;;
        * ) echo "Please answer yes or no.";;
    esac
done
}

# ===> 1 PRINT OUT THE MAIN MENU
printMainMenu(){
clear -x
echo
echo -e "${FRAME}
######################################################
######################################################
###                                                ###
###                    ${INFO}PROGRESS:${FRAME}                   ###
###                                                ###
###         ${style1}1. Updating system${FRAME}                     ###
###         ${style2}2. Installing common tools${FRAME}             ###
###         ${style3}3. Connect NFS${FRAME}                         ###
###         ${style4}4. Installing Node.js${FRAME}                  ###
###         ${style5}5. Installing Docker${FRAME}                   ###
###         ${style6}6. Installing Docker Compose${FRAME}           ###
###                                                ###
###                                                ###
######################################################
######################################################
"
echo
echo -e "${li}"
}

#============ FUNCTIONS BLOCK ENDS ===============#


#MENU + UJPDATE
style1=$ACTIVE
printMainMenu
if askQuestion "Would you like to update/upgrade all the tools on this server? [y/n] "; then
    updateSystem
    style1=$DONE
else
style1=$SKIP
fi
style2=$ACTIVE
sleep 2

#MENU + common tools
printMainMenu
if askQuestion "Would you like to install common tools (openssh-server, git, nano, wget, tar, htop, nfs-common, p7zip-full)? [y/n] "; then
    mainAppsInstall
    style2=$DONE
else
style2=$SKIP
fi
style3=$ACTIVE
sleep 2

#MENU + NFS
printMainMenu
if askQuestion "Would you like to setup automount for NFS share? (!PRIVATE SETTINGS!) [y/n] "; then
    nfs
    style3=$DONE
else
style3=$SKIP
fi
style4=$ACTIVE

#MENU + Node.js
printMainMenu
if askQuestion "Would you like to install Node.js? [y/n] "; then
    nodejsInstall
    style4=$DONE
else
style4=$SKIP
fi
style5=$ACTIVE

#MENU + Docker
printMainMenu
if askQuestion "Would you like to install Docker? [y/n] "; then
    dockerInstall
    style5=$DONE
else
style5=$SKIP
fi
style6=$ACTIVE

#MENU + Docker Compose
printMainMenu
if askQuestion "Would you like to install Docker Compose? [y/n] "; then
    dockerComposeInstall
    style6=$DONE
else
style6=$SKIP
fi
updateSystemSilent

printMainMenu
echo -e "${INFO}             YOUR "
sleep 1
echo
echo

printMainMenu
echo -e "${INFO}             YOUR SERVER "
sleep 1
echo
echo

printMainMenu
echo -e "${INFO}             YOUR SERVER IS"
sleep 1
echo
echo

printMainMenu
echo -e "${INFO}             YOUR SERVER IS READY"
sleep 1   

printMainMenu
echo -e "${INFO}             YOUR SERVER IS READY TO"
sleep 1
echo
echo

printMainMenu
echo -e "${INFO}             YOUR SERVER IS READY TO WORK"
sleep 1
echo
echo