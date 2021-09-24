#!/bin/bash
(($# < 1)) && echo "please specify commit comments" && exit

git add . && git commit -m "${@}" && git push
