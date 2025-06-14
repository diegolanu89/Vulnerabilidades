#!/bin/bash

SERVICE="mongodb-community@7.0"

STATUS=$(brew services list | grep "$SERVICE" | awk '{print $2}')

if [ "$STATUS" == "started" ]; then
  echo "🔁 Reiniciando MongoDB..."
  brew services restart "$SERVICE"
else
  echo "▶️ Iniciando MongoDB..."
  brew services start "$SERVICE"
fi
