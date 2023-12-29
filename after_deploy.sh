#!/bin/bash
REPOSITORY=/home/ubuntu/kisuj

cd $REPOSITORY

sudo pm2 start -- npm -- run start