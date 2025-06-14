#!/bin/bash

# Script para lanzar mongosh con verificación
if command -v mongosh &> /dev/null; then
    mongosh
else
    echo "mongosh no está instalado o no está en el PATH."
fi
