#!/bin/sh -l

npm --prefix /gen install /gen
node /gen/index.js
