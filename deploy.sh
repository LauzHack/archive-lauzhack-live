#!/usr/bin/env bash

npm run build
aws s3 rm s3://bucket-name --recursive
aws s3 sync build/ s3://lauzhack --exclude .DS_Store
