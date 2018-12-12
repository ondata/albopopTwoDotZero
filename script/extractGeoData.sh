#!/bin/bash

### requisiti ###
# mille https://github.com/johnkerl/miller
# yq https://github.com/kislyuk/yq
### requisiti ###


rm ./geodata.json

set -x

for i in $(ls ../content/altrepa/ | egrep -i '^[a-zA-Z].+md'); do \
tempfile="${i##*/}"
nome="${tempfile%.*}"
#yq . ./altrepa/"$i" ; 
echo "$nome";
yq '{latitude:.lat,longitude:.lng,title:.title,ipa:.ipa,nome:"'"$nome"'",tipo:"altrepa"}' ../content/altrepa/"$nome".md >>./geodata.json
done


for i in $(ls ../content/comune/ | egrep -i '^[a-zA-Z].+md'); do \
tempfile="${i##*/}"
nome="${tempfile%.*}"
#yq . ./altrepa/"$i" ; 
echo "$nome";
yq '{latitude:.lat,longitude:.lng,title:.title,ipa:.ipa,nome:"'"$nome"'",tipo:"comune"}' ../content/comune/"$nome".md >>./geodata.json
done

mlr --j2c cat ./geodata.json >./geodata.csv