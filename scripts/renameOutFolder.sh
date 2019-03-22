#!/bin/bash
echo "Replacing old www folder"
sudo rm -r www
mv out www
echo "Replaced!"
