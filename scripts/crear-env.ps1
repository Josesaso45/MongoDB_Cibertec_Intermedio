# Script para crear archivo .env
# Ejecutar: .\crear-env.ps1

$envContent = @"
MONGODB_URI=mongodb+srv://josemontero2415:Monteraso654@cluster0.1sm7nw4.mongodb.net/
DB_NAME=dbTechStore
NODE_ENV=development
"@

$envContent | Out-File -FilePath .env -Encoding utf8
Write-Host "✅ Archivo .env creado exitosamente" -ForegroundColor Green

