#!/bin/bash

# Ce script est à exécuter localement pour optimiser les images
# Nécessite l'installation de sharp-cli: npm install -g sharp-cli

# Créer le dossier optimisé s'il n'existe pas
mkdir -p public/assets/team/optimized

# Optimiser chaque image
sharp -i public/assets/team/joseph-gonzalez.jpg -o public/assets/team/optimized/joseph-gonzalez.webp -f webp -q 80 -w 600
sharp -i public/assets/team/jonas-kakaroto.jpg -o public/assets/team/optimized/jonas-kakaroto.webp -f webp -q 80 -w 600
sharp -i public/assets/team/christian-buehner.jpg -o public/assets/team/optimized/christian-buehner.webp -f webp -q 75 -w 400
sharp -i public/assets/team/charlie-green.jpg -o public/assets/team/optimized/charlie-green.webp -f webp -q 75 -w 400
sharp -i public/assets/team/jeffrey-keenan.jpg -o public/assets/team/optimized/jeffrey-keenan.webp -f webp -q 75 -w 400
sharp -i public/assets/team/mitchell-luo.jpg -o public/assets/team/optimized/mitchell-luo.webp -f webp -q 75 -w 400

echo "Images optimisées avec succès!"

