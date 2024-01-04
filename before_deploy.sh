#!/bin/bash
REPOSITORY=/home/ubuntu
cd $REPOSITORY

echo '========================================'
echo 'delete pm2 all'
echo '========================================'
pm2 delete all

echo '========================================'
echo 'delete src directory'
echo '========================================'
rm -rf kisuj