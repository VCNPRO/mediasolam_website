
# 📤 Instrucciones para subir a GitHub desde tu computadora

## Opción 1: Subir el proyecto completo (Recomendado)

1. **Descarga el archivo** `mediasolam-website.tar.gz` usando el botón "Files" en DeepAgent

2. **Extrae el archivo** en tu computadora:
   ```bash
   tar -xzf mediasolam-website.tar.gz
   cd nextjs_space
   ```

3. **Conecta con GitHub y sube**:
   ```bash
   git remote set-url origin https://github.com/VCNPRO/mediasolam.eu-website.git
   git push -u origin main
   ```

4. ✅ **¡Listo!** Tu código estará en GitHub

---

## Opción 2: Clonar el repositorio vacío y copiar archivos

1. **Clona tu repositorio vacío**:
   ```bash
   git clone https://github.com/VCNPRO/mediasolam.eu-website.git
   cd mediasolam.eu-website
   ```

2. **Copia todos los archivos del proyecto** (desde el .tar.gz extraído):
   ```bash
   cp -r ../nextjs_space/* .
   ```

3. **Sube los cambios**:
   ```bash
   git add .
   git commit -m "Initial commit: MediaSolam website con optimizaciones"
   git push origin main
   ```

---

## 🔄 Para futuras actualizaciones

Cuando hagas cambios en DeepAgent y quieras actualizarlos en GitHub:

1. Descarga el nuevo archivo .tar.gz
2. Extrae en tu repositorio local
3. Ejecuta:
   ```bash
   git add .
   git commit -m "Descripción de los cambios"
   git push origin main
   ```

---

## ✅ Verificar que subió correctamente

Visita: https://github.com/VCNPRO/mediasolam.eu-website

Deberías ver todos tus archivos ahí.

---

## 📧 ¿Problemas con autenticación?

Si Git te pide usuario/contraseña:
- **Usuario**: VCNPRO
- **Contraseña**: Usa un Personal Access Token (no tu contraseña de GitHub)
  - Crear token: https://github.com/settings/tokens/new
  - Scope: ✓ repo
  - Guarda el token y úsalo como contraseña

