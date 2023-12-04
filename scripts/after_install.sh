#!/bin/bash
cd /home/ec2-user/BookStore
cd book-tables
npm install
ng build
cd ~
chown -R "ec2-user:ec2-user" *
sleep 120
cp -r BookStore/book-tables/dist ~



