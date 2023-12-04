#!/bin/bash
cd /home/ec2-user/BookStore
chown -R "ec2-user:ec2-user" *
sudo yum install -y npm
cd book-tables
ng build
cd ~
cp -r BookStore/book-tables/dist ~/


