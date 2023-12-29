#!/bin/bash
REPOSITORY=/home/ubuntu/kisuj

cd $REPOSITORY
npm install
pm2 start npm -- start