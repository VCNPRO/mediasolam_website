
#!/bin/bash

# 🚀 Script automatizado para subir MediaSolam a GitHub
# Ejecuta este script en tu computadora local después de extraer el .tar.gz

echo "================================================"
echo "📤 Subiendo MediaSolam a GitHub"
echo "================================================"
echo ""

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo "❌ Error: Ejecuta este script dentro de la carpeta nextjs_space/"
    exit 1
fi

# Verificar si ya existe el remote
if git remote get-url origin 2>/dev/null; then
    echo "✓ Remote 'origin' ya existe"
else
    echo "🔗 Configurando remote de GitHub..."
    git remote add origin https://github.com/VCNPRO/mediasolam.eu-website.git
fi

# Asegurar que estamos en la rama main
echo "🔄 Cambiando a rama main..."
git branch -M main

# Mostrar estado
echo ""
echo "📋 Estado del repositorio:"
git status --short | head -10

# Confirmar antes de subir
echo ""
echo "¿Deseas subir los cambios a GitHub? (y/n)"
read -r respuesta

if [ "$respuesta" = "y" ] || [ "$respuesta" = "Y" ]; then
    echo ""
    echo "⬆️  Subiendo a GitHub..."
    git push -u origin main
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "================================================"
        echo "✅ ¡Código subido exitosamente a GitHub!"
        echo "================================================"
        echo ""
        echo "🌐 Ver en: https://github.com/VCNPRO/mediasolam.eu-website"
        echo ""
    else
        echo ""
        echo "❌ Error al subir. Posibles soluciones:"
        echo "1. Verifica tu autenticación en GitHub"
        echo "2. Si pide contraseña, usa un Personal Access Token:"
        echo "   https://github.com/settings/tokens/new"
        echo "3. Scope requerido: repo"
    fi
else
    echo "❌ Operación cancelada"
fi
