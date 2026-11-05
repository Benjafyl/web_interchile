# SEO, descubrimiento en IA y medición de InterChile Clima

Implementación: 5 de noviembre de 2026. Prioridad comercial: industria, retail,
centros comerciales y empresas. El servicio domiciliario sigue disponible, con
menor protagonismo. Se conservan identidad visual y fotografías reales.

## Arquitectura e intención de búsqueda

Las siguientes expresiones describen servicios reales; no implican volúmenes de
búsqueda medidos ni promesas de posicionamiento.

| Página | Necesidad que responde |
| --- | --- |
| `/` | Climatización industrial y comercial en Chile; presentación y orientación |
| `/servicios` | Comparar soluciones HVAC y elegir el servicio |
| `/servicios/ingenieria-proyectos-climatizacion` | Ingeniería, dimensionamiento y proyectos HVAC |
| `/servicios/instalacion-aire-acondicionado` | Instalación y montaje de sistemas de climatización |
| `/servicios/mantencion-hvac` | Mantención preventiva y correctiva de climatización |
| `/servicios/reparacion-climatizacion` | Diagnóstico y reparación de sistemas HVAC |
| `/servicios/repuestos-climatizacion` | Identificación y suministro de repuestos |
| `/arriendo-equipos` | Climatización temporal y arriendo de equipos compactos |
| `/proyectos` y detalle Temuco | Evidencia de trabajo real, imágenes y video |
| `/empresa` y `/equipo` | Identidad, experiencia y responsables |
| `/contacto` | Evaluar y cotizar un requerimiento |
| `/privacidad` | Uso de datos y preferencias de medición |

Cada servicio tiene contenido propio, alcance condicionado a evaluación,
aplicaciones, preguntas frecuentes y antecedentes para cotizar. Los botones
seleccionan el servicio en el formulario mediante `?servicio=...`; esa variante
mantiene la URL canónica de contacto. No crear páginas casi idénticas para cada
ciudad, ni inventar instalaciones, resultados, certificaciones o testimonios.

## SEO y rastreo

- HTML renderizado en servidor, un H1 por página y jerarquía H2/H3.
- Títulos y descripciones únicos, enlaces internos, fotografías descritas y
  dimensiones explícitas. Las fotos de detalle mantienen encuadre completo.
- Dominio canónico HTTPS sin `www`; redirección permanente desde `www`.
- Sitemap con 14 páginas públicas. No se simula una fecha de actualización nueva
  en cada compilación. Actualizar fechas solo si se conoce el cambio real.
- `robots.txt` permite páginas y recursos de renderizado; excluye la API.
- JSON-LD de Organization, WebSite, Service, BreadcrumbList, ItemList y un
  VideoObject del registro real de la ampliación de Mall Portal Temuco.
- No se declara un local físico ni un marcado LocalBusiness con dirección
  inventada: la empresa informa oficina virtual y visitas coordinadas.
- API y archivos técnicos reciben `noindex`; no bloquear CSS/JS necesarios para
  que los buscadores entiendan la página.

Después de publicar, comprobar sitemap, canónicas, estados HTTP, enlaces y
redirección `www`. En Search Console enviar `https://interchileclima.cl/sitemap.xml`.
Para notificar a motores participantes de IndexNow ejecutar
`npm run submit:indexnow`; valida primero la clave pública y el sitemap publicados.
Una respuesta 200/202 confirma recepción o validación, no indexación ni ranking.

Google indica que sus funciones de IA no requieren un marcado especial. El
trabajo útil es permitir el rastreo, explicar los servicios claramente y aportar
evidencia propia. OAI-SearchBot puede acceder a las páginas públicas. Ninguna
configuración asegura que un buscador o asistente recomiende a la empresa.

## Medición y conversiones

Configuración pública en `src/data/measurement.ts`; propiedad exclusiva para
InterChile. Google Analytics solo se carga con consentimiento. El visitante puede
rechazarlo o cambiarlo en el pie. Google Signals y personalización publicitaria
están desactivados en la etiqueta. La medición mejorada automática se mantiene
desactivada para evitar duplicar páginas, formularios y clics.

Cloudflare Web Analytics quedó en instalación manual, sin instalar un segundo
beacon. Esto evita que el proveedor inyecte automáticamente otro script de
medición fuera del consentimiento. Mantener esa elección al revisar Cloudflare;
no ampliar la CSP para cargar rastreadores adicionales solo para ocultar un aviso.

| Evento | Qué significa |
| --- | --- |
| `page_view` | Una vista inicial o cambio de página |
| `service_view` | Lectura de una página de servicio o arriendo |
| `project_view` | Visita a portafolio o caso Temuco |
| `quote_click` | Clic hacia el formulario; aún no es una consulta enviada |
| `contact_click` | Clic a WhatsApp, correo o teléfono; no confirma conversación |
| `form_start` | Primera interacción con el formulario |
| `form_error` | Error de validación, verificación, servidor o conexión |
| `generate_lead` | El servidor aceptó el envío a SMTP; evento clave |
| `scroll` | Se alcanza el 90 % del recorrido de una página |
| `video_start` | Comienza la reproducción del video, también si es automática |

`generate_lead` no significa correo leído, cliente calificado ni venta. No se asigna
un valor monetario ficticio. Una misma solicitud puede generar varios clics;
analizarlos por usuarios y sesiones, no sumarlos como ventas.

Parámetros permitidos: categorías de servicio, cliente, método de contacto y zona
del enlace; nunca nombre, correo, teléfono, empresa, ubicación ni mensaje. Se
descartan parámetros arbitrarios de URL; solo se conservan UTM con formato
restringido. No usar datos personales en enlaces de campaña. Ejemplo permitido:
`?utm_source=linkedin&utm_medium=social&utm_campaign=mantencion_hvac`.

Dimensiones de evento registradas: `service`, `client_type`, `contact_method` y
`link_location`. `?debug_mode=1` activa depuración para pruebas; no compartir esa
URL como enlace de campaña. El tráfico sin consentimiento no aparecerá completo
en Analytics; bloqueadores y privacidad también limitan la atribución.

## Formulario y seguridad

reCAPTCHA v3 se comprueba obligatoriamente en servidor: acción `contact`, dominio,
puntaje y antigüedad. Si falta la configuración o falla Google, no se envía correo
y se ofrece WhatsApp. La clave privada y las credenciales SMTP son exclusivamente
variables del servidor, nunca archivos públicos ni analítica.

Se comprueban origen, formato y tamaño de petición; campos, tipos, longitudes,
listas de servicios y correo; honeypot; escape HTML y prevención de inyección de
cabeceras. Hay límites por IP y globales, tiempos máximos de espera y SMTP con
TLS. Los errores conservan los datos en pantalla y no registran información
personal ni credenciales en los logs.

Los límites se mantienen en memoria de un proceso: se reinician al desplegar y
no se comparten entre réplicas. Para escalar o soportar abuso sostenido, añadir
un límite compartido o reglas específicas en el proxy/WAF, validando primero cómo
se transmite la IP real. CSP limita orígenes, objetos e iframes; conserva scripts
inline necesarios para el HTML estático de Next.js. No es una política con nonces
ni una garantía frente a toda inyección. Cabeceras HSTS, nosniff, antienmarcado,
referencia y permisos completan la protección del navegador.

Variables: `RECAPTCHA_SECRET_KEY`, `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` (o
`RECAPTCHA_SITE_KEY` en servidor), `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS` y puerto
del proveedor. Revisar claves autorizadas para el dominio, y mantener SPF/DKIM/DMARC
con el administrador del correo. No debilitar TLS para corregir una entrega.

## Seguimiento recomendado

1. Tras publicar: validar 14 rutas, sitemap enviado, recepción de eventos y errores
   de formulario. No enviar correos reales como prueba sin autorización.
2. Cada mes: comparar consultas/páginas de Search Console y visitas por servicio
   con solicitudes confirmadas; separar tráfico de marca y de servicios. Revisar
   conversiones por origen, dispositivo y página de entrada.
3. Exploración guardada: **InterChile · De servicio a consulta enviada**. Embudo
   abierto `service_view` → `quote_click` → `form_start` → `generate_lead`, con
   desglose por dispositivo y tiempo transcurrido. Permite entradas directas en
   pasos posteriores. Los datos procesados pueden tardar en aparecer y el periodo
   inicial de últimos 28 días excluye hoy. WhatsApp se analiza aparte hasta
   disponer de confirmación comercial. El informe panorámico usa la plantilla de
   rendimiento de marketing y Search Console está vinculado a la propiedad.
4. Medir Core Web Vitals con datos de campo cuando haya suficiente tráfico. No
   presentar un test de laboratorio ni una ausencia de datos como rendimiento
   real garantizado. Vigilar LCP, INP y CLS en móvil.
5. Añadir casos reales nuevos con ubicación, alcance, fotos, fechas y resultados
   comprobables. Conseguir reseñas auténticas y enlaces de clientes/proveedores
   solo con autorización; evitar paquetes de enlaces o textos masivos.
6. Perfil de Empresa de Google: confirmar primero elegibilidad y dirección real
   de la empresa de área de servicio. Una oficina virtual no justifica inventar
   una ubicación pública. Esta implementación no crea ese perfil.
7. Mantener dependencias y revisar `npm audit`. Validaciones: `npm test`,
   `npx eslint src next.config.ts --quiet`, `npm run build` y `git diff --check`.

## Fuentes de las decisiones

- [Google: guía inicial de SEO](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Google: funciones de IA y el sitio web](https://developers.google.com/search/docs/appearance/ai-features)
- [Google: optimización para IA](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Google: políticas de spam y páginas puerta](https://developers.google.com/search/docs/essentials/spam-policies)
- [Google: datos de negocios locales](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Google: datos de video](https://developers.google.com/search/docs/appearance/structured-data/video)
- [OpenAI: sitios públicos y búsqueda](https://help.openai.com/en/articles/12627856)
- [IndexNow: protocolo](https://www.indexnow.org/documentation)
- [Google Analytics: generate_lead](https://developers.google.com/analytics/devguides/collection/ga4/reference/events#generate_lead)
- [Google Analytics: evitar datos personales](https://support.google.com/analytics/answer/6366371)
- [Google: instalar la etiqueta](https://developers.google.com/tag-platform/gtagjs)
- [Google: reCAPTCHA v3](https://developers.google.com/recaptcha/docs/v3)
- [OWASP: validación de entradas](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)
- [OWASP: prevención de CSRF](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)
- [OWASP: cabeceras HTTP](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html)
- [Nielsen Norman Group: formularios](https://www.nngroup.com/articles/web-form-design/)
- [web.dev: Core Web Vitals](https://web.dev/articles/vitals)
