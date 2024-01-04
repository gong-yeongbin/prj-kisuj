#!/bin/bash
REPOSITORY=/home/ubuntu
cd $REPOSITORY

echo '========================================'
echo 'delete pm2 all'
echo '========================================'
pm2 delete all

REPOSITORY=/home/ubuntu/kisuj
cd $REPOSITORY

echo '========================================'
echo 'delete src directory'
echo '========================================'
rm -rf `ls | find . -name logs -prune -o -print`