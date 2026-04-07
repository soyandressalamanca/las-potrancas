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

## 🛠️ Guía Paso a Paso para Nuevos Usuarios

Si es tu primera vez usando Google Cloud, sigue estos pasos para configurar todo desde cero.

### 1. Configuración de Cuenta en Google Cloud
1. **Crear Cuenta**: Ve a [console.cloud.google.com](https://console.cloud.google.com/) e inicia sesión con tu cuenta de Google.
2. **Prueba Gratuita**: Google suele ofrecer **$300 en créditos gratuitos** para nuevos usuarios. Asegúrate de activarlos si están disponibles para que el despliegue no tenga costo inicial.
3. **Activar Facturación (Billing)**: Aunque uses la prueba gratuita, Google requiere vincular una forma de pago para verificar tu identidad. No se te cobrará nada mientras tengas crédito de la prueba gratuita.
4. **Crear un Proyecto**: Haz clic en el selector de proyectos (arriba a la izquierda) y crea uno nuevo, por ejemplo: `las-potrancas-proyect`.

### 2. Conexión de un Dominio Personalizado
Una vez que tu sitio esté desplegado en Cloud Run, puedes conectarlo a tu propio dominio (ej. `www.laspotrancas.com`):

1. **Ir a Cloud Run**: En la consola de Google Cloud, busca "Cloud Run" y selecciona tu servicio `las-potrancas`.
2. **Asignaciones de Dominio**:
   - Haz clic en **"Gestionar dominios personalizados"** (Manage Custom Domains) en la barra superior.
   - Haz clic en **"Añadir asignación"** (Add Mapping).
3. **Verificar Propiedad**:
   - Si es un dominio nuevo, Google te pedirá verificar que eres el dueño a través de **Google Search Console**.
   - Deberás añadir un registro **TXT** en la configuración DNS de tu proveedor de dominios (GoDaddy, Namecheap, etc.).
4. **Configurar Registros DNS**:
   - Una vez verificado, Google te dará una lista de registros (Tipo A, AAAA o CNAME).
   - Copia estos valores y pégalos en la zona DNS de tu proveedor de dominios.
5. **SSL automático**: ¡Listo! Google generará y renovará el certificado de seguridad (HTTPS) automáticamente por ti. La propagación puede tardar hasta 24 horas.

---
© 2026 Las Potrancas Mexican Restaurant. Todos los derechos reservados.
