#!/bin/bash
REPOSITORY=/home/ubuntu/kisuj

cd $REPOSITORY

npm install
npm run start
#sudo pm2 start -- npm -- run start