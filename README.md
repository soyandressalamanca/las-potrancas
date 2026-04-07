# Las Potrancas Mexican Restaurant

Sitio web oficial de **Las Potrancas Mexican Restaurant**, ofreciendo el sabor más auténtico de México en Colorado. Este proyecto es una aplicación web moderna construida con React, Vite y Tailwind CSS, diseñada para mostrar el menú, la historia del restaurante y facilitar el contacto con los clientes.

## 🌮 Descripción del Proyecto

Las Potrancas es un legado familiar cocinado con corazón y pasión. Este sitio web permite a los usuarios:
- Explorar el menú tradicional (Tacos, Enchiladas, etc.).
- Conocer la historia del legendario **Green Chile** de la casa.
- Realizar pedidos online y consultar servicios de catering.
- Ubicar el restaurante y contactar directamente.

## 🚀 Desarrollo Local

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

### Requisitos Previos
- [Node.js](https://nodejs.org/) (versión 20 o superior recomendada)

### Instalación
1. Clona el repositorio.
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## ☁️ Despliegue en Google Cloud

Este proyecto está configurado para desplegarse automáticamente en **Google Cloud Run** utilizando **Google Cloud Build** y un repositorio de **GitHub**.

### Configuración Automática (CI/CD)

1. **Subir al Repositorio**: Sube el código a tu repositorio de GitHub.
2. **Conectar con Cloud Build**:
   - Ve a la consola de [Google Cloud Build](https://console.cloud.google.com/cloud-build/triggers).
   - Crea un **Trigger** (activador) y conéctalo a tu repositorio de GitHub.
   - Selecciona la rama principal (ej. `main`) para que los despliegues sean automáticos tras cada `git push`.
   - El activador detectará automáticamente el archivo `cloudbuild.yaml` en la raíz del proyecto.
3. **Despliegue**:
   - Cloud Build usará el `Dockerfile` para construir la imagen.
   - La imagen se subirá a **Container Registry / Artifact Registry**.
   - Finalmente, se desplegará en **Cloud Run** como un servicio llamado `las-potrancas`.

### Archivos de Configuración Relevantes
- `cloudbuild.yaml`: Define los pasos del pipeline de despliegue.
- `Dockerfile`: Configura el entorno de producción (Nginx) para servir la aplicación.
- `nginx.conf`: Configuración personalizada para el servidor web.

---
© 2026 Las Potrancas Mexican Restaurant. Todos los derechos reservados.
