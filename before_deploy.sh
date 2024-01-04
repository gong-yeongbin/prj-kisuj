#!/bin/bash
REPOSITORY=/home/ubuntu/kisuj
cd $REPOSITORY

echo '========================================'
echo 'delete pm2 all'
echo '========================================'
pm2 delete all

echo '========================================'
echo 'delete src directory'
echo '========================================'
rm -rf `ls | find . -name logs -prune -o -print`