#!/bin/bash
sudo chmod 755 /home/ec2-user
cd /home/ec2-user/BookStore
sudo systemctl reload nginx
sudo systemctl restart nginx
#sudo systemctl start nginx
