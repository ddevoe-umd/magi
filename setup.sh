#! /bin/bash

# Make script executable:
#     chmod +x setup.sh
# Run as sudo: 
#     sudo ./setup.sh

echo "==========================================="
echo "Synchronizing system time"
echo "==========================================="
sudo timedatectl

echo "==========================================="
echo "Setting up 25 MB RAM disk"
echo "==========================================="
FSTAB_LINE="tmpfs /path/to/ramdisk tmpfs defaults,size=25M 0 0"
if grep -Fxq "$FSTAB_LINE" /etc/fstab; then
    echo "RAM disk already set up in /etc/fstab"
else
    echo "Backing up /etc/fstab to /etc/fstab.bak"
    sudo cp /etc/fstab /etc/fstab.bak
    echo "Adding the line to /etc/fstab"
    echo "$FSTAB_LINE" | sudo tee -a /etc/fstab > /dev/null
    echo "Line added successfully. Verify /etc/fstab before rebooting."
fi

echo before comment
: <<'END'
echo "==========================================="
echo "Editing rc.local to run MAGI server at boot"
echo "==========================================="
LINE="python3 /home/pi/magi/magi_server.py > /home/pi/magi/magi_server.log 2>&1 &"
RC_LOCAL="/etc/rc.local"
# Check if the file exists
if [ ! -f "$RC_LOCAL" ]; then
    echo "Error: $RC_LOCAL does not exist."
    exit 1
fi
# Check if the line already exists in the file
if grep -Fxq "$LINE" "$RC_LOCAL"; then
    echo "The line is already present in $RC_LOCAL."
else
    # Add the line before the `exit 0` line
    sed -i "/exit 0/i $LINE" "$RC_LOCAL"
    if [ $? -eq 0 ]; then
        echo "$RC_LOCAL modified"
    else
        echo "Error: Failed to modify $RC_LOCAL."
        exit 1
    fi
fi
END
echo after comment


echo "==========================================="
echo "apt-get update"
echo "==========================================="
sudo apt-get update

echo "==========================================="
echo "apt-get upgrade (may take >30 min)"
echo "==========================================="
sudo apt-get upgrade

echo "==========================================="
echo "pip"
echo "==========================================="
sudo apt install python3-pip

echo "==========================================="
echo "picamera2"
echo "==========================================="
sudo apt-get --yes install python3-picamera2

echo "==========================================="
echo "numpy"
echo "==========================================="
sudo apt-get --yes install python3-numpy

echo "==========================================="
echo "sudo scipy"
echo "==========================================="
sudo apt-get --yes install python3-scipy

echo "==========================================="
echo "pandas"
echo "(may break on sympy setup, continue"
echo " installation manually if necessary)"
echo "==========================================="
sudo apt-get --yes install python3-pandas

echo "==========================================="
echo "simple-pid"
echo "==========================================="
sudo python3 -m pip install --break-system-packages simple-pid

echo "==========================================="
echo "              SETUP COMPLETE"
echo "          REBOOT SYSTEM BEFORE USE"
echo "==========================================="