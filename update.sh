#!/bin/bash

ruby generate.rb
git add .
git commit -m 'v0.01'
git push -u origin gh-pages 