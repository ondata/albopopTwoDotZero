#!/bin/bash

### requisiti ###
# mille https://github.com/johnkerl/miller
# yq https://github.com/kislyuk/yq
### requisiti ###

cartella="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

rm "$cartella"/geodata.json
rm "$cartella"/geodata.csv

set -x

for i in $(ls "$cartella"/../content/altrepa/ | egrep -i '^[a-zA-Z].+md'); do \
tempfile="${i##*/}"
nome="${tempfile%.*}"
#yq . ./altrepa/"$i" ; 
echo "$nome";
yq '{latitude:.lat,longitude:.lng,title:.title,ipa:.ipa,nome:"'"$nome"'",tipo:"altrepa"}' "$cartella"/../content/altrepa/"$nome".md >>"$cartella"/geodata.json
done


for i in $(ls "$cartella"/../content/comune/ | egrep -i '^[a-zA-Z].+md'); do \
tempfile="${i##*/}"
nome="${tempfile%.*}"
#yq . ./altrepa/"$i" ; 
echo "$nome";
yq '{latitude:.lat,longitude:.lng,title:.title,ipa:.ipa,nome:"'"$nome"'",tipo:"comune"}' "$cartella"/../content/comune/"$nome".md >>"$cartella"/geodata.json
done

mlr --j2c cat "$cartella"/geodata.json >"$cartella"/data.csv
mlr --csv filter '$latitude > 1' "$cartella"/data.csv >"$cartella"/geodata.csv