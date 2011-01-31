#!/bin/bash

function usage {
  echo "Usage: $0 <project-name>"
}

if [ -z "$1" ]; then
  usage
  exit 1
fi

if [ ! -d "$1" ]; then
  echo "$0: project '$1' does not exist"
  usage
  exit 1
fi

./requirejs/build/build.sh $1/scripts/app.build.js 
