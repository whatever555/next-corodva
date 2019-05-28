#!/bin/bash
SPRITE_NAME=$1
echo "It's sprite time! Generating ${SPRITE_NAME} sprite"
componentPath="components/${SPRITE_NAME}/${SPRITE_NAME}.js"
rm "${componentPath}"
SPRITE_TEMPLATE=$(<templates/components/spriteTemplate.js)
newSprite="${SPRITE_TEMPLATE//---SPRITE_NAME---/$SPRITE_NAME}" 
GENERATED_SPRITE_NAME="static/sprites/generated/$SPRITE_NAME.svg"

svg2sprite static/sprites/sources/${SPRITE_NAME} ${GENERATED_SPRITE_NAME}

spriteData=$(<$GENERATED_SPRITE_NAME)
newSprite="${newSprite//---SPRITE_DATA---/$spriteData}" 
out="${newSprite//<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>/}" 

touch componentPath
echo "${out}" >> "${componentPath}" 

# fix up svg for jsx
#sed -i 's/xmlns:\([a-z]\)/xmlns\U\1/g' ${componentPath} 
perl -pi.bak -e 's/([a-z]):([a-z])/\1\U\2/g' ${componentPath} 
perl -pi.bak  -e's/style=\".*?\"//g' ${componentPath} 
#clean up tmp file created by perl
rm ${componentPath}.bak

echo "${SPRITE_NAME} SPRITE Updated!"
