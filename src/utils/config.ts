import type { TemplateConfig } from "./configType";

const templateConfig: TemplateConfig = {
  name: "Green Card Trips",
  seo: {
    title: "Green Card Trips - Track Your Path to U.S. Citizenship",
    description: "Simple, beautiful app for green card holders to track physical presence in the USA and manage their journey to citizenship with confidence.",
  },
  // Draws grid behind main container
  backgroundGrid: false,
  logo: "/green-card-trips-logo.svg",
  theme: "green-card-trips",
  // Forces theme to be chosen above, no matter what user prefers
  forceTheme: false,
  // Shows switch to toggle between dark and light modes
  showThemeSwitch: true,
  appStoreLink: "#",
  googlePlayLink: undefined,
  footer: {
    legalLinks: {
      termsAndConditions: true,
      cookiesPolicy: true,
      privacyPolicy: true,
    },
    socials: {
      instagram: undefined,
      facebook: undefined,
      twitter: undefined,
    },
    links: [
      { href: "/#features", title: "Features" },
      { href: "/#how-it-works", title: "How it works" },
      { href: "/#pricing", title: "Pricing" },
      { href: "/#faq", title: "FAQ" },
    ],
  },
  topNavbar: {
    cta: "Get the app",
    disableWidthAnimation: false,
    hideAppStore: false,
    hideGooglePlay: false,
    links: [
      { href: "/#features", title: "Features" },
      { href: "/#how-it-works", title: "How it works" },
      { href: "/#pricing", title: "Pricing" },
      { href: "/#faq", title: "FAQ" },
    ],
  },
  appBanner: {
    id: "app-banner",
    title: "Ready to Take Control of Your Citizenship Journey?",
    subtitle:
      "Join green card holders who trust Green Card Trips to stay compliant and achieve their citizenship goals.",
    screenshots: [
      "dashboard",
      "trips",
      "modify-trip",
    ],
  },
  home: {
    seo: {
      title: "Green Card Trips - Track Your Path to U.S. Citizenship",
      description: "Simple, beautiful app for green card holders to track physical presence in the USA and manage their journey to citizenship with confidence.",
    },
    howItWorks: {
      id: "how-it-works",
      title: "How It Works",
      subtitle:
        "Get started in minutes and take control of your citizenship journey",
      steps: [
        {
          title: "Download the App",
          subtitle:
            "Install Green Card Trips on your iOS device.",
          image: "/stock/01.webp",
        },
        {
          title: "Enter Green Card Details",
          subtitle:
            "Add your green card date and select your eligibility path (3-year or 5-year).",
          image: "/stock/02.webp",
        },
        {
          title: "Log Your Trips",
          subtitle:
            "Manually enter past and upcoming trips with departure and return dates.",
          image: "/stock/03.webp",
        },
        {
          title: "Plan Travel Safely",
          subtitle:
            "Use the simulator to check how future trips affect your eligibility before booking.",
          image: "/stock/04.webp",
        },
        {
          title: "Stay Compliant",
          subtitle:
            "Monitor your dashboard for warnings, track renewal dates, and maintain your status.",
          image: "/stock/05.webp",
        },
      ],
    },
    features: {
      id: "features",
      title: "Everything You Need to Stay Compliant",
      subtitle:
        "Simple tools to track your presence, plan travel, and achieve your citizenship goals",
      cards: [
        {
          title: "Smart Trip Tracking",
          subtitle:
            "Easily log all your international trips with dates and destinations. See your days in the USA at a glance.",
          icon: "/3D/icons-mobile-front-color.webp",
        },
        {
          title: "Travel Simulator",
          subtitle:
            "Plan future trips with confidence. See exactly how travel affects your citizenship eligibility before you book.",
          icon: "/3D/clock-front-color.webp",
        },
        {
          title: "Dashboard Insights",
          subtitle:
            "Real-time presence statistics with 180-day and 365-day warnings. Know your status instantly.",
          icon: "/3D/icons-chart-front-color.webp",
        },
        {
          title: "Privacy & Security",
          subtitle:
            "Offline-first design with field-level encryption. Your data never leaves your device unless you choose cloud sync.",
          icon: "/3D/sheild-front-color.webp",
        },
      ],
    },
    faq: {
      id: "faq",
      title: "Frequently Asked Questions",
      qa: [
        {
          question: "What is Green Card Trips?",
          answer:
            "Green Card Trips is a mobile app that helps U.S. green card holders track their physical presence in the United States to meet citizenship eligibility requirements. It prevents costly mistakes by monitoring critical travel thresholds.",
        },
        {
          question: "How accurate are the calculations?",
          answer:
            "Our calculations follow official USCIS rules precisely. Departure and return days count as physical presence. And we monitor thresholds that affect continuous residence and physical presence for green card status.",
        },
        {
          question: "Is my data private and secure?",
          answer:
            "Absolutely. All data is stored locally on your device. Your information never leaves your phone. We don't have access to your data.",
        },
        {
          question: "Can I use it offline?",
          answer:
            "Yes! The entire app works offline. Log trips, use the simulator, and check your dashboard anywhere without internet.",
        },
        {
          question: "Is the app available on Android?",
          answer:
            "Not yet, but we're working on bringing Green Card Trips to Android soon! Currently, the app is only available for iOS devices. We'll announce the Android launch as soon as it's ready.",
        },
      ],
    },
    header: {
      headline: "Your Peace of Mind Partner on the Path to U.S. Citizenship",
      subtitle:
        "Track your trips, plan your travel, and stay compliant with USCIS requirements. Green Card Trips makes citizenship eligibility simple and stress-free.",
      screenshots: [
        "dashboard",
        "modify-trip",
        "trips",
      ],
      rewards: undefined,
      usersDescription: "Trusted by green card holders",
      headlineMark: [0, 4],
    },
    pricing: {
      id: "pricing",
      title: "Simple, Transparent Pricing",
      subtitle: "One-time purchase.",
      actionText: "Download Now",
      plans: [
        {
          title: "Green Card Trips",
          price: "$4.99",
          featured: true,
          rows: [
            "Unlimited trip tracking",
            "Travel simulator",
            "Dashboard insights",
            "Compliance reminders",
            "Offline mode",
          ],
        },
      ],
    },
  },
  privacyPolicy: {
    en: {
      seo: {
        title: "Privacy Policy - Green Card Trips",
        description: "Privacy Policy for Green Card Trips mobile app and website",
      },
      content: `# Privacy Policy

**Effective Date:** January 15, 2025
**Last Updated:** January 15, 2025

## Introduction

Green Card Trips ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy applies to our mobile application (the "App") available on iOS devices and our website at greencardtrips.com (the "Website").

We built Green Card Trips with privacy as a core principle. This policy explains our privacy-first approach and how we handle your information.

## Our Privacy-First Philosophy

**Your data belongs to you.** Green Card Trips is designed to keep your sensitive immigration information completely private and secure on your device. We do not collect, store, transmit, or have access to your personal data.

## Information Storage

### Mobile Application

The Green Card Trips mobile app stores all your information **exclusively on your device**. This includes:

- Your name and profile information
- Green Card issue date and residency status
- Trip history (departure dates, return dates, destinations, purposes)
- Travel calculations and eligibility estimates
- App preferences and settings

**Important:** This data is stored locally on your device. Your information never leaves your phone unless you explicitly choose to export it. We have no servers collecting your data, and no way to access your information.

### Website

Our website (greencardtrips.com) is a marketing and informational site. The only data stored by our website is:

- **Theme Preference:** We use browser localStorage to remember whether you prefer light or dark mode. This preference stays in your browser and is never transmitted to us.

## Website Analytics

### Google Analytics 4

We use Google Analytics 4 on our website to understand how visitors use our site and to improve your experience. This helps us see which pages are most helpful, what devices people use, and how we can make the site better for green card holders like you.

**What We Collect**

Google Analytics collects basic information about your website visit, including:
- Pages you view on our site
- How long you spend on each page
- Your device type (mobile, desktop, tablet)
- Your browser and operating system
- General geographic location (city/region level, not your exact location)
- How you arrived at our site (search engine, direct visit, etc.)

**Important:** This data is aggregated and anonymous. We do NOT collect personally identifiable information like your name, email, or green card details. We cannot identify individual visitors.

**Cookies Used**

Google Analytics uses the following cookies to collect this anonymous data:

- **_ga**: Distinguishes unique visitors (expires after 2 years)
- **_ga_<container-id>**: Stores and counts pageviews (expires after 2 years)
- **_gid**: Distinguishes unique visitors (expires after 24 hours)

These cookies contain random identifiers and do not store any personal information.

**Your Privacy Choices**

You can opt out of Google Analytics tracking in several ways:
- Use the [Google Analytics Opt-out Browser Add-on](https://tools.google.com/dlpage/gaoptout)
- Enable "Do Not Track" in your browser settings
- Use browser extensions that block analytics cookies
- Clear your cookies to reset your anonymous identifier

**Google's Privacy Practices**

For more information about how Google handles data:
- [Google Privacy Policy](https://policies.google.com/privacy)
- [How Google uses data when you use our partners' sites or apps](https://www.google.com/policies/privacy/partners/)

### Google Search Console

We use Google Search Console to understand how people find our website through search engines like Google. This tool helps us improve our search presence so green card holders can more easily find information about citizenship requirements.

**Important:** Google Search Console does NOT use cookies and does NOT track individual visitors. It only provides us with aggregated search data, such as:
- Which search terms led people to our site
- How often our site appears in search results
- Which pages get the most clicks from search

This data is completely anonymous and cannot be linked to any individual user.

## Information We Do NOT Collect

We want to be crystal clear about what we don't collect:

- ❌ No personal identifiable information (PII)
- ❌ No email addresses or account credentials
- ❌ No location tracking or GPS data
- ❌ No usage analytics or behavior tracking
- ❌ No advertising identifiers
- ❌ No device fingerprinting
- ❌ No IP addresses or browsing data
- ❌ No crash reports containing personal data
- ❌ No social media connections
- ❌ No third-party tracking pixels or cookies

## Third-Party Services

The Green Card Trips app does **not** integrate with any third-party services, analytics platforms, advertising networks, or social media platforms. Your data stays with you.

In the future, if we add optional features (such as cloud backup), we will update this policy and request your explicit consent before enabling any data transmission.

## Data Security

Your trip data and immigration information is sensitive, and we take its security seriously:

- **Biometric Protection:** You can optionally enable Face ID, Touch ID, or PIN protection to secure app access
- **No Transmission:** Since your data never leaves your device, it cannot be intercepted in transit
- **No Servers:** We don't operate servers that store user data, eliminating the risk of server breaches

## Your Rights and Control

Since all your data is stored locally on your device, you have complete control:

- **Access:** You can view all your data anytime within the app
- **Modification:** You can edit or update any information at any time
- **Deletion:** You can delete individual trips or clear all your data from the app's settings
- **Complete Removal:** Uninstalling the app permanently deletes all data from your device

## Children's Privacy

Green Card Trips is intended for use by Lawful Permanent Residents (green card holders) who are working toward U.S. citizenship. The app is not directed at children under 13, and we do not knowingly collect information from children.

## Changes to This Privacy Policy

We may update this Privacy Policy to reflect changes in our practices or for legal, operational, or regulatory reasons. If we make material changes, we will notify you through the app or our website. The "Last Updated" date at the top of this policy indicates when it was most recently revised.

Your continued use of Green Card Trips after changes are posted constitutes your acceptance of the updated Privacy Policy.

## International Users

Green Card Trips is designed for U.S. Permanent Residents. While the app can be used internationally, all data remains on your device regardless of your location. If you are located in the European Economic Area (EEA), United Kingdom, or other regions with data protection laws (such as GDPR), please note that we do not transfer your data to any servers, so international data transfer regulations do not apply.

## California Privacy Rights (CCPA)

If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA). However, since we do not collect, sell, or share your personal information, these rights are satisfied by design:

- **Right to Know:** We don't collect your personal information
- **Right to Delete:** All data is stored locally on your device and can be deleted by you
- **Right to Opt-Out of Sale:** We don't sell personal information
- **Right to Non-Discrimination:** Not applicable as we don't collect data

## Contact Us

If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:

**Email:** support@greencardtrips.com
**Website:** https://greencardtrips.com

We will respond to your inquiry within a reasonable timeframe.

## Legal Disclaimer

This app is an informational tool and does not provide legal advice. While we protect your privacy, you are responsible for ensuring the accuracy of the information you enter and for verifying your immigration eligibility with official USCIS sources or a qualified immigration attorney.

---

**Summary:** Green Card Trips is built with your privacy as the top priority. Your immigration data stays on your device, encrypted and secure. We don't collect, access, or share your information. You have complete control.

`,
    },
    es: {
      seo: {
        title: "Política de Privacidad - Green Card Trips",
        description: "Política de Privacidad de la aplicación móvil y sitio web de Green Card Trips",
      },
      content: `# Política de Privacidad

**Fecha de Vigencia:** 15 de enero de 2025
**Última Actualización:** 15 de enero de 2025

## Introducción

Green Card Trips ("nosotros", "nuestro" o "nos") está comprometido con la protección de su privacidad. Esta Política de Privacidad se aplica a nuestra aplicación móvil (la "Aplicación") disponible en dispositivos iOS y a nuestro sitio web en greencardtrips.com (el "Sitio Web").

Construimos Green Card Trips con la privacidad como principio fundamental. Esta política explica nuestro enfoque de privacidad prioritaria y cómo manejamos su información.

## Nuestra Filosofía de Privacidad Prioritaria

**Sus datos le pertenecen a usted.** Green Card Trips está diseñado para mantener su información de inmigración sensible completamente privada y segura en su dispositivo. No recopilamos, almacenamos, transmitimos ni tenemos acceso a sus datos personales.

## Almacenamiento de Información

### Aplicación Móvil

La aplicación móvil Green Card Trips almacena toda su información **exclusivamente en su dispositivo**. Esto incluye:

- Su nombre e información de perfil
- Fecha de emisión de su Green Card y estado de residencia
- Historial de viajes (fechas de salida, fechas de regreso, destinos, propósitos)
- Cálculos de viaje y estimaciones de elegibilidad
- Preferencias y configuraciones de la aplicación

**Importante:** Estos datos se almacenan localmente en su dispositivo. Su información nunca sale de su teléfono a menos que usted elija exportarla explícitamente. No tenemos servidores que recopilen sus datos, y no tenemos forma de acceder a su información.

### Sitio Web

Nuestro sitio web (greencardtrips.com) es un sitio de marketing e información. Los únicos datos almacenados por nuestro sitio web son:

- **Preferencia de Tema:** Usamos localStorage del navegador para recordar si prefiere el modo claro u oscuro. Esta preferencia permanece en su navegador y nunca se nos transmite.

## Análisis del Sitio Web

### Google Analytics 4

Utilizamos Google Analytics 4 en nuestro sitio web para comprender cómo los visitantes usan nuestro sitio y mejorar su experiencia. Esto nos ayuda a ver qué páginas son más útiles, qué dispositivos utilizan las personas y cómo podemos mejorar el sitio para titulares de tarjeta verde como usted.

**Lo Que Recopilamos**

Google Analytics recopila información básica sobre su visita al sitio web, incluyendo:
- Páginas que visualiza en nuestro sitio
- Cuánto tiempo pasa en cada página
- Su tipo de dispositivo (móvil, escritorio, tableta)
- Su navegador y sistema operativo
- Ubicación geográfica general (nivel de ciudad/región, no su ubicación exacta)
- Cómo llegó a nuestro sitio (motor de búsqueda, visita directa, etc.)

**Importante:** Estos datos son agregados y anónimos. NO recopilamos información de identificación personal como su nombre, correo electrónico o detalles de su tarjeta verde. No podemos identificar a visitantes individuales.

**Cookies Utilizadas**

Google Analytics utiliza las siguientes cookies para recopilar estos datos anónimos:

- **_ga**: Distingue visitantes únicos (expira después de 2 años)
- **_ga_<container-id>**: Almacena y cuenta las vistas de página (expira después de 2 años)
- **_gid**: Distingue visitantes únicos (expira después de 24 horas)

Estas cookies contienen identificadores aleatorios y no almacenan ninguna información personal.

**Sus Opciones de Privacidad**

Puede optar por no participar en el seguimiento de Google Analytics de varias maneras:
- Use el [Complemento de Navegador para la Desactivación de Google Analytics](https://tools.google.com/dlpage/gaoptout)
- Active "No Rastrear" en la configuración de su navegador
- Use extensiones de navegador que bloqueen las cookies de análisis
- Borre sus cookies para restablecer su identificador anónimo

**Prácticas de Privacidad de Google**

Para más información sobre cómo Google maneja los datos:
- [Política de Privacidad de Google](https://policies.google.com/privacy)
- [Cómo usa Google los datos cuando utiliza sitios o aplicaciones de nuestros socios](https://www.google.com/policies/privacy/partners/)

### Google Search Console

Utilizamos Google Search Console para comprender cómo las personas encuentran nuestro sitio web a través de motores de búsqueda como Google. Esta herramienta nos ayuda a mejorar nuestra presencia en las búsquedas para que los titulares de tarjeta verde puedan encontrar más fácilmente información sobre los requisitos de ciudadanía.

**Importante:** Google Search Console NO utiliza cookies y NO rastrea a visitantes individuales. Solo nos proporciona datos de búsqueda agregados, tales como:
- Qué términos de búsqueda llevaron a las personas a nuestro sitio
- Con qué frecuencia aparece nuestro sitio en los resultados de búsqueda
- Qué páginas obtienen más clics desde las búsquedas

Estos datos son completamente anónimos y no pueden vincularse a ningún usuario individual.

## Información que NO Recopilamos

Queremos ser completamente claros sobre lo que no recopilamos:

- ❌ No recopilamos información de identificación personal (PII)
- ❌ No recopilamos direcciones de correo electrónico ni credenciales de cuenta
- ❌ No realizamos seguimiento de ubicación ni datos de GPS
- ❌ No recopilamos análisis de uso ni seguimiento de comportamiento
- ❌ No recopilamos identificadores de publicidad
- ❌ No realizamos huella digital de dispositivos
- ❌ No recopilamos direcciones IP ni datos de navegación
- ❌ No recopilamos informes de fallos que contengan datos personales
- ❌ No recopilamos conexiones de redes sociales
- ❌ No usamos píxeles de seguimiento ni cookies de terceros

## Servicios de Terceros

La aplicación Green Card Trips **no** se integra con ningún servicio de terceros, plataformas de análisis, redes de publicidad ni plataformas de redes sociales. Sus datos permanecen con usted.

En el futuro, si agregamos características opcionales (como copia de seguridad en la nube), actualizaremos esta política y solicitaremos su consentimiento explícito antes de habilitar cualquier transmisión de datos.

## Seguridad de Datos

Sus datos de viaje e información de inmigración son sensibles, y tomamos su seguridad en serio:

- **Protección Biométrica:** Puede habilitar opcionalmente Face ID, Touch ID o protección con PIN para asegurar el acceso a la aplicación
- **Sin Transmisión:** Dado que sus datos nunca salen de su dispositivo, no pueden ser interceptados en tránsito
- **Sin Servidores:** No operamos servidores que almacenen datos de usuarios, eliminando el riesgo de violaciones de servidor

## Sus Derechos y Control

Dado que todos sus datos se almacenan localmente en su dispositivo, usted tiene control completo:

- **Acceso:** Puede ver todos sus datos en cualquier momento dentro de la aplicación
- **Modificación:** Puede editar o actualizar cualquier información en cualquier momento
- **Eliminación:** Puede eliminar viajes individuales o borrar todos sus datos desde la configuración de la aplicación
- **Eliminación Completa:** Desinstalar la aplicación elimina permanentemente todos los datos de su dispositivo

## Privacidad de Menores

Green Card Trips está destinado para uso por Residentes Permanentes Legales (titulares de green card) que trabajan hacia la ciudadanía estadounidense. La aplicación no está dirigida a menores de 13 años, y no recopilamos información de menores conscientemente.

## Cambios a Esta Política de Privacidad

Podemos actualizar esta Política de Privacidad para reflejar cambios en nuestras prácticas o por razones legales, operacionales o regulatorias. Si realizamos cambios materiales, le notificaremos a través de la aplicación o nuestro sitio web. La fecha "Última Actualización" en la parte superior de esta política indica cuándo fue revisada más recientemente.

Su uso continuado de Green Card Trips después de que se publiquen cambios constituye su aceptación de la Política de Privacidad actualizada.

## Usuarios Internacionales

Green Card Trips está diseñado para Residentes Permanentes de EE.UU. Aunque la aplicación se puede usar internacionalmente, todos los datos permanecen en su dispositivo independientemente de su ubicación. Si se encuentra en el Espacio Económico Europeo (EEE), Reino Unido u otras regiones con leyes de protección de datos (como GDPR), tenga en cuenta que no transferimos sus datos a ningún servidor, por lo que las regulaciones de transferencia internacional de datos no aplican.

## Derechos de Privacidad de California (CCPA)

Si usted es residente de California, tiene derechos específicos bajo la Ley de Privacidad del Consumidor de California (CCPA). Sin embargo, dado que no recopilamos, vendemos ni compartimos su información personal, estos derechos se satisfacen por diseño:

- **Derecho a Saber:** No recopilamos su información personal
- **Derecho a Eliminar:** Todos los datos se almacenan localmente en su dispositivo y pueden ser eliminados por usted
- **Derecho a Optar por No Vender:** No vendemos información personal
- **Derecho a No Discriminación:** No aplica ya que no recopilamos datos

## Contáctenos

Si tiene alguna pregunta, inquietud o solicitud sobre esta Política de Privacidad o nuestras prácticas de privacidad, por favor contáctenos:

**Correo Electrónico:** support@greencardtrips.com
**Sitio Web:** https://greencardtrips.com

Responderemos a su consulta dentro de un plazo razonable.

## Descargo de Responsabilidad Legal

Esta aplicación es una herramienta informativa y no proporciona asesoría legal. Aunque protegemos su privacidad, usted es responsable de asegurar la exactitud de la información que ingresa y de verificar su elegibilidad de inmigración con fuentes oficiales de USCIS o un abogado de inmigración calificado.

---

**Resumen:** Green Card Trips está construido con su privacidad como máxima prioridad. Sus datos de inmigración permanecen en su dispositivo, encriptados y seguros. No recopilamos, accedemos ni compartimos su información. Usted tiene control completo.

`,
    },
    tl: {
      seo: {
        title: "Patakaran sa Pagkapribado - Green Card Trips",
        description: "Patakaran sa Pagkapribado para sa mobile app at website ng Green Card Trips",
      },
      content: `# Patakaran sa Pagkapribado

**Petsa ng Pagkakabisa:** Enero 15, 2025
**Huling Na-update:** Enero 15, 2025

## Panimula

Ang Green Card Trips ("kami," "aming," o "sa amin") ay nakatuon sa pagprotekta ng inyong pagkapribado. Ang Patakarang ito sa Pagkapribado ay naaangkop sa aming mobile application (ang "App") na available sa mga iOS device at sa aming website sa greencardtrips.com (ang "Website").

Binuo namin ang Green Card Trips na may pagkapribado bilang pangunahing prinsipyo. Ipinaliliwanag ng patakarang ito ang aming privacy-first approach at kung paano namin hinahawakan ang inyong impormasyon.

## Ang Aming Privacy-First Philosophy

**Ang inyong data ay pag-aari ninyo.** Ang Green Card Trips ay dinisenyo upang panatilihing ganap na pribado at secure sa inyong device ang inyong sensitibong impormasyon sa immigration. Hindi namin kinokolekta, ini-store, ipinapadala, o may access sa inyong personal na data.

## Pag-iimbak ng Impormasyon

### Mobile Application

Ang Green Card Trips mobile app ay nag-iimbak ng lahat ng inyong impormasyon **eksklusibo sa inyong device**. Kasama dito ang:

- Ang inyong pangalan at profile information
- Petsa ng pagbibigay ng Green Card at residency status
- Kasaysayan ng paglalakbay (departure dates, return dates, destinations, purposes)
- Mga kalkulasyon ng paglalakbay at pagtatantya ng eligibility
- Mga preference at settings ng app

**Mahalaga:** Ang data na ito ay naka-store locally sa inyong device. Ang inyong impormasyon ay hindi kailanman umaalis sa inyong telepono maliban kung piliin ninyong explicitly na i-export ito. Wala kaming mga server na kumukuha ng inyong data, at walang paraan upang ma-access ang inyong impormasyon.

### Website

Ang aming website (greencardtrips.com) ay isang marketing at informational site. Ang tanging data na ini-store ng aming website ay:

- **Kagustuhan sa Theme:** Ginagamit namin ang browser localStorage upang tandaan kung mas gusto ninyo ang light o dark mode. Ang kagustuhang ito ay nananatili sa inyong browser at hindi kailanman ipinapadala sa amin.

## Analytics ng Website

### Google Analytics 4

Ginagamit namin ang Google Analytics 4 sa aming website upang maintindihan kung paano ginagamit ng mga bisita ang aming site at mapabuti ang inyong karanasan. Tinutulungan kami nitong makita kung aling mga pahina ang pinaka-nakakatulong, anong mga device ang ginagamit ng mga tao, at paano namin mapapabuti ang site para sa mga may green card tulad ninyo.

**Ano ang Aming Kinokolekta**

Nangongolekta ang Google Analytics ng pangunahing impormasyon tungkol sa inyong pagbisita sa website, kabilang ang:
- Mga pahinang tiningnan ninyo sa aming site
- Gaano katagal kayo nananatili sa bawat pahina
- Uri ng inyong device (mobile, desktop, tablet)
- Inyong browser at operating system
- Pangkalahatang lokasyon sa heograpiya (antas ng lungsod/rehiyon, hindi ang inyong eksaktong lokasyon)
- Paano kayo nakarating sa aming site (search engine, direktang pagbisita, atbp.)

**Mahalaga:** Ang datos na ito ay pinagsama at anonymous. HINDI kami nangongolekta ng personal na impormasyon tulad ng inyong pangalan, email, o mga detalye ng green card. Hindi namin makikilala ang mga indibidwal na bisita.

**Mga Cookies na Ginagamit**

Gumagamit ang Google Analytics ng mga sumusunod na cookies upang kolektahin ang anonymous na datos na ito:

- **_ga**: Nakikilala ang mga natatanging bisita (mag-e-expire pagkatapos ng 2 taon)
- **_ga_<container-id>**: Nag-iimbak at nagbibilang ng mga pageview (mag-e-expire pagkatapos ng 2 taon)
- **_gid**: Nakikilala ang mga natatanging bisita (mag-e-expire pagkatapos ng 24 na oras)

Ang mga cookies na ito ay naglalaman ng random identifiers at hindi nag-iimbak ng anumang personal na impormasyon.

**Ang Inyong mga Pagpipilian sa Privacy**

Maaari kayong mag-opt out sa Google Analytics tracking sa ilang paraan:
- Gamitin ang [Google Analytics Opt-out Browser Add-on](https://tools.google.com/dlpage/gaoptout)
- I-enable ang "Do Not Track" sa mga setting ng inyong browser
- Gumamit ng mga browser extension na humaharang sa analytics cookies
- I-clear ang inyong mga cookies upang i-reset ang inyong anonymous identifier

**Mga Privacy Practices ng Google**

Para sa karagdagang impormasyon tungkol sa kung paano hinahawakan ng Google ang data:
- [Google Privacy Policy](https://policies.google.com/privacy)
- [Paano ginagamit ng Google ang data kapag ginagamit ninyo ang mga site o app ng aming mga partner](https://www.google.com/policies/privacy/partners/)

### Google Search Console

Ginagamit namin ang Google Search Console upang maintindihan kung paano nakakahanap ng aming website ang mga tao sa pamamagitan ng mga search engine tulad ng Google. Tinutulungan kami ng tool na ito na mapabuti ang aming presensya sa paghahanap upang mas madaling makahanap ng impormasyon ang mga may green card tungkol sa mga kinakailangan para sa citizenship.

**Mahalaga:** Ang Google Search Console ay HINDI gumagamit ng cookies at HINDI sumusubaybay sa mga indibidwal na bisita. Nagbibigay lamang ito sa amin ng pinagsama-samang search data, tulad ng:
- Aling mga search term ang nag-udyok sa mga tao na pumunta sa aming site
- Gaano kadalas lumalabas ang aming site sa mga search result
- Aling mga pahina ang nakakakuha ng pinakamaraming clicks mula sa search

Ang datos na ito ay lubos na anonymous at hindi maaaring ikonekta sa sinumang indibidwal na user.

## Impormasyon na HINDI Namin Kinokolekta

Nais naming maging malinaw tungkol sa kung ano ang hindi namin kinokolekta:

- ❌ Walang personal identifiable information (PII)
- ❌ Walang mga email address o account credentials
- ❌ Walang location tracking o GPS data
- ❌ Walang usage analytics o behavior tracking
- ❌ Walang advertising identifiers
- ❌ Walang device fingerprinting
- ❌ Walang mga IP address o browsing data
- ❌ Walang crash reports na naglalaman ng personal data
- ❌ Walang mga koneksyon sa social media
- ❌ Walang third-party tracking pixels o cookies

## Mga Serbisyo ng Third-Party

Ang Green Card Trips app ay **hindi** nakikipag-integrate sa anumang third-party services, analytics platforms, advertising networks, o social media platforms. Ang inyong data ay nananatili sa inyo.

Sa hinaharap, kung magdagdag kami ng optional features (tulad ng cloud backup), ia-update namin ang patakarang ito at hihingin ang inyong tahasang pahintulot bago paganahin ang anumang data transmission.

## Seguridad ng Data

Ang inyong trip data at impormasyon sa immigration ay sensitibo, at seryoso kaming tinatrato ang seguridad nito:

- **Biometric Protection:** Maaari ninyong paganahin ang Face ID, Touch ID, o PIN protection upang i-secure ang app access
- **Walang Transmission:** Dahil ang inyong data ay hindi umaalis sa inyong device, hindi ito maaaring ma-intercept sa transit
- **Walang Servers:** Hindi kami nag-ooperate ng mga server na nag-iimbak ng user data, na nag-aalis ng panganib ng server breaches

## Ang Inyong mga Karapatan at Kontrol

Dahil ang lahat ng inyong data ay naka-store locally sa inyong device, mayroon kayong kumpletong kontrol:

- **Access:** Maaari ninyong tingnan ang lahat ng inyong data anumang oras sa loob ng app
- **Modification:** Maaari ninyong i-edit o i-update ang anumang impormasyon anumang oras
- **Deletion:** Maaari ninyong tanggalin ang mga indibidwal na trip o burahin ang lahat ng inyong data mula sa settings ng app
- **Kumpletong Pag-alis:** Ang pag-uninstall ng app ay permanenteng nagtatanggal ng lahat ng data mula sa inyong device

## Pagkapribado ng mga Bata

Ang Green Card Trips ay inilaan para sa paggamit ng mga Lawful Permanent Residents (green card holders) na nagtratrabaho tungo sa U.S. citizenship. Ang app ay hindi nakatuon sa mga batang wala pang 13 taong gulang, at hindi namin sinasadyang kumukuha ng impormasyon mula sa mga bata.

## Mga Pagbabago sa Patakarang ito sa Pagkapribado

Maaari naming i-update ang Patakarang ito sa Pagkapribado upang salamin ang mga pagbabago sa aming mga gawain o para sa legal, operational, o regulatory na mga kadahilanan. Kung gumawa kami ng material na mga pagbabago, aabisuhan namin kayo sa pamamagitan ng app o aming website. Ang "Huling Na-update" na petsa sa itaas ng patakarang ito ay nagsasaad kung kailan ito pinaka-kamakailang rebisado.

Ang inyong patuloy na paggamit ng Green Card Trips pagkatapos na ma-post ang mga pagbabago ay bumubuo ng inyong pagtanggap sa na-update na Patakaran sa Pagkapribado.

## Mga International Users

Ang Green Card Trips ay dinisenyo para sa mga U.S. Permanent Residents. Bagaman ang app ay maaaring gamitin sa buong mundo, ang lahat ng data ay nananatili sa inyong device anuman ang inyong lokasyon. Kung kayo ay matatagpuan sa European Economic Area (EEA), United Kingdom, o iba pang mga rehiyon na may mga batas sa proteksyon ng data (tulad ng GDPR), pakitandaan na hindi namin inililipat ang inyong data sa anumang mga server, kaya ang mga regulasyon sa international data transfer ay hindi naaangkop.

## Mga Karapatan sa Pagkapribado ng California (CCPA)

Kung kayo ay residente ng California, mayroon kayong mga tukoy na karapatan sa ilalim ng California Consumer Privacy Act (CCPA). Gayunpaman, dahil hindi namin kinokolekta, ibinebenta, o ibinabahagi ang inyong personal na impormasyon, ang mga karapatang ito ay natutugunan sa pamamagitan ng disenyo:

- **Karapatang Malaman:** Hindi namin kinokolekta ang inyong personal na impormasyon
- **Karapatang Tanggalin:** Ang lahat ng data ay naka-store locally sa inyong device at maaaring tanggalin ninyo
- **Karapatang Umalis sa Pagbebenta:** Hindi namin ibinebenta ang personal na impormasyon
- **Karapatang Hindi Diskriminahin:** Hindi naaangkop dahil hindi kami kumukuha ng data

## Makipag-ugnayan sa Amin

Kung mayroon kayong anumang mga tanong, alalahanin, o kahilingan tungkol sa Patakarang ito sa Pagkapribado o sa aming mga gawain sa pagkapribado, mangyaring makipag-ugnayan sa amin:

**Email:** support@greencardtrips.com
**Website:** https://greencardtrips.com

Tutugon kami sa inyong katanungan sa loob ng makatwirang panahon.

## Legal na Disclaimer

Ang app na ito ay isang informational tool at hindi nagbibigay ng legal advice. Bagaman pinoprotektahan namin ang inyong pagkapribado, kayo ay responsable sa pagsisiguro ng katumpakan ng impormasyong inilalagay ninyo at sa pag-verify ng inyong immigration eligibility sa mga opisyal na mapagkukunan ng USCIS o isang kwalipikadong immigration attorney.

---

**Buod:** Ang Green Card Trips ay binuo na may inyong pagkapribado bilang nangungunang priyoridad. Ang inyong immigration data ay nananatili sa inyong device, naka-encrypt at secure. Hindi kami kumukuha, nag-a-access, o nagbabahagi ng inyong impormasyon. Mayroon kayong kumpletong kontrol.

`,
    },
    vi: {
      seo: {
        title: "Chính Sách Bảo Mật - Green Card Trips",
        description: "Chính Sách Bảo Mật cho ứng dụng di động và trang web Green Card Trips",
      },
      content: `# Chính Sách Bảo Mật

**Ngày Có Hiệu Lực:** 15 tháng 1, 2025
**Cập Nhật Lần Cuối:** 15 tháng 1, 2025

## Giới Thiệu

Green Card Trips ("chúng tôi," "của chúng tôi," hoặc "chúng ta") cam kết bảo vệ quyền riêng tư của bạn. Chính Sách Bảo Mật này áp dụng cho ứng dụng di động của chúng tôi (gọi là "Ứng dụng") có sẵn trên các thiết bị iOS và trang web của chúng tôi tại greencardtrips.com (gọi là "Trang Web").

Chúng tôi xây dựng Green Card Trips với quyền riêng tư là nguyên tắc cốt lõi. Chính sách này giải thích cách tiếp cận ưu tiên quyền riêng tư của chúng tôi và cách chúng tôi xử lý thông tin của bạn.

## Triết Lý Ưu Tiên Quyền Riêng Tư Của Chúng Tôi

**Dữ liệu của bạn thuộc về bạn.** Green Card Trips được thiết kế để giữ thông tin nhập cư nhạy cảm của bạn hoàn toàn riêng tư và an toàn trên thiết bị của bạn. Chúng tôi không thu thập, lưu trữ, truyền tải hoặc có quyền truy cập vào dữ liệu cá nhân của bạn.

## Lưu Trữ Thông Tin

### Ứng Dụng Di Động

Ứng dụng di động Green Card Trips lưu trữ tất cả thông tin của bạn **độc quyền trên thiết bị của bạn**. Điều này bao gồm:

- Tên và thông tin hồ sơ của bạn
- Ngày cấp Green Card và tình trạng cư trú
- Lịch sử chuyến đi (ngày khởi hành, ngày trở về, điểm đến, mục đích)
- Tính toán chuyến đi và ước tính điều kiện
- Tùy chọn và cài đặt ứng dụng

**Quan trọng:** Dữ liệu này được lưu trữ cục bộ trên thiết bị của bạn. Thông tin của bạn không bao giờ rời khỏi điện thoại của bạn trừ khi bạn chọn xuất nó một cách rõ ràng. Chúng tôi không có máy chủ thu thập dữ liệu của bạn và không có cách nào để truy cập thông tin của bạn.

### Trang Web

Trang web của chúng tôi (greencardtrips.com) là một trang tiếp thị và thông tin. Dữ liệu duy nhất được lưu trữ bởi trang web của chúng tôi là:

- **Tùy Chọn Giao Diện:** Chúng tôi sử dụng localStorage của trình duyệt để ghi nhớ liệu bạn thích chế độ sáng hay tối. Tùy chọn này vẫn ở trong trình duyệt của bạn và không bao giờ được truyền cho chúng tôi.

## Phân Tích Website

### Google Analytics 4

Chúng tôi sử dụng Google Analytics 4 trên website của mình để hiểu cách khách truy cập sử dụng trang web và cải thiện trải nghiệm của quý vị. Điều này giúp chúng tôi biết trang nào hữu ích nhất, mọi người sử dụng thiết bị gì và làm thế nào để cải thiện trang web cho những người có thẻ xanh như quý vị.

**Những Gì Chúng Tôi Thu Thập**

Google Analytics thu thập thông tin cơ bản về lượt truy cập website của quý vị, bao gồm:
- Các trang quý vị xem trên trang web của chúng tôi
- Thời gian quý vị dành cho mỗi trang
- Loại thiết bị của quý vị (di động, máy tính để bàn, máy tính bảng)
- Trình duyệt và hệ điều hành của quý vị
- Vị trí địa lý chung (cấp thành phố/khu vực, không phải vị trí chính xác của quý vị)
- Cách quý vị đến trang web của chúng tôi (công cụ tìm kiếm, truy cập trực tiếp, v.v.)

**Quan Trọng:** Dữ liệu này được tổng hợp và ẩn danh. Chúng tôi KHÔNG thu thập thông tin nhận dạng cá nhân như tên, email hoặc chi tiết thẻ xanh của quý vị. Chúng tôi không thể xác định từng khách truy cập riêng lẻ.

**Cookies Được Sử Dụng**

Google Analytics sử dụng các cookies sau để thu thập dữ liệu ẩn danh này:

- **_ga**: Phân biệt khách truy cập duy nhất (hết hạn sau 2 năm)
- **_ga_<container-id>**: Lưu trữ và đếm lượt xem trang (hết hạn sau 2 năm)
- **_gid**: Phân biệt khách truy cập duy nhất (hết hạn sau 24 giờ)

Những cookies này chứa các định danh ngẫu nhiên và không lưu trữ bất kỳ thông tin cá nhân nào.

**Lựa Chọn Quyền Riêng Tư Của Quý Vị**

Quý vị có thể từ chối theo dõi của Google Analytics theo nhiều cách:
- Sử dụng [Tiện ích Bổ sung Trình duyệt Từ chối Google Analytics](https://tools.google.com/dlpage/gaoptout)
- Bật "Không Theo Dõi" trong cài đặt trình duyệt của quý vị
- Sử dụng các tiện ích mở rộng trình duyệt chặn cookies phân tích
- Xóa cookies của quý vị để đặt lại định danh ẩn danh của quý vị

**Thực Hành Bảo Mật của Google**

Để biết thêm thông tin về cách Google xử lý dữ liệu:
- [Chính Sách Bảo Mật của Google](https://policies.google.com/privacy)
- [Cách Google sử dụng dữ liệu khi quý vị sử dụng các trang web hoặc ứng dụng của đối tác](https://www.google.com/policies/privacy/partners/)

### Google Search Console

Chúng tôi sử dụng Google Search Console để hiểu cách mọi người tìm thấy website của chúng tôi thông qua các công cụ tìm kiếm như Google. Công cụ này giúp chúng tôi cải thiện sự hiện diện trên tìm kiếm để những người có thẻ xanh có thể dễ dàng tìm thấy thông tin về các yêu cầu công dân hơn.

**Quan Trọng:** Google Search Console KHÔNG sử dụng cookies và KHÔNG theo dõi từng khách truy cập riêng lẻ. Nó chỉ cung cấp cho chúng tôi dữ liệu tìm kiếm tổng hợp, chẳng hạn như:
- Những từ khóa tìm kiếm nào dẫn mọi người đến trang web của chúng tôi
- Trang web của chúng tôi xuất hiện trong kết quả tìm kiếm thường xuyên như thế nào
- Những trang nào nhận được nhiều nhấp chuột nhất từ tìm kiếm

Dữ liệu này hoàn toàn ẩn danh và không thể liên kết với bất kỳ người dùng cá nhân nào.

## Thông Tin Chúng Tôi KHÔNG Thu Thập

Chúng tôi muốn làm rõ ràng về những gì chúng tôi không thu thập:

- ❌ Không có thông tin nhận dạng cá nhân (PII)
- ❌ Không có địa chỉ email hoặc thông tin đăng nhập tài khoản
- ❌ Không có theo dõi vị trí hoặc dữ liệu GPS
- ❌ Không có phân tích sử dụng hoặc theo dõi hành vi
- ❌ Không có mã định danh quảng cáo
- ❌ Không có dấu vân tay thiết bị
- ❌ Không có địa chỉ IP hoặc dữ liệu duyệt web
- ❌ Không có báo cáo sự cố chứa dữ liệu cá nhân
- ❌ Không có kết nối mạng xã hội
- ❌ Không có pixel theo dõi hoặc cookie của bên thứ ba

## Dịch Vụ Bên Thứ Ba

Ứng dụng Green Card Trips **không** tích hợp với bất kỳ dịch vụ bên thứ ba, nền tảng phân tích, mạng quảng cáo hoặc nền tảng mạng xã hội nào. Dữ liệu của bạn ở lại với bạn.

Trong tương lai, nếu chúng tôi thêm các tính năng tùy chọn (chẳng hạn như sao lưu đám mây), chúng tôi sẽ cập nhật chính sách này và yêu cầu sự đồng ý rõ ràng của bạn trước khi kích hoạt bất kỳ truyền dữ liệu nào.

## Bảo Mật Dữ Liệu

Dữ liệu chuyến đi và thông tin nhập cư của bạn là nhạy cảm, và chúng tôi coi trọng bảo mật của nó:

- **Bảo Vệ Sinh Trắc Học:** Bạn có thể tùy chọn kích hoạt Face ID, Touch ID hoặc bảo vệ bằng mã PIN để bảo mật quyền truy cập ứng dụng
- **Không Truyền Tải:** Vì dữ liệu của bạn không bao giờ rời khỏi thiết bị của bạn, nó không thể bị chặn trong quá trình truyền
- **Không Máy Chủ:** Chúng tôi không vận hành các máy chủ lưu trữ dữ liệu người dùng, loại bỏ rủi ro vi phạm máy chủ

## Quyền Và Kiểm Soát Của Bạn

Vì tất cả dữ liệu của bạn được lưu trữ cục bộ trên thiết bị của bạn, bạn có toàn quyền kiểm soát:

- **Truy Cập:** Bạn có thể xem tất cả dữ liệu của mình bất cứ lúc nào trong ứng dụng
- **Sửa Đổi:** Bạn có thể chỉnh sửa hoặc cập nhật bất kỳ thông tin nào bất cứ lúc nào
- **Xóa:** Bạn có thể xóa các chuyến đi riêng lẻ hoặc xóa tất cả dữ liệu của bạn từ cài đặt ứng dụng
- **Gỡ Bỏ Hoàn Toàn:** Gỡ cài đặt ứng dụng sẽ xóa vĩnh viễn tất cả dữ liệu khỏi thiết bị của bạn

## Quyền Riêng Tư Của Trẻ Em

Green Card Trips được thiết kế để sử dụng bởi các Cư Dân Thường Trú Hợp Pháp (người nắm giữ thẻ xanh) đang hướng tới quốc tịch Hoa Kỳ. Ứng dụng không nhắm đến trẻ em dưới 13 tuổi và chúng tôi không cố ý thu thập thông tin từ trẻ em.

## Thay Đổi Chính Sách Bảo Mật Này

Chúng tôi có thể cập nhật Chính Sách Bảo Mật này để phản ánh các thay đổi trong thực tiễn của chúng tôi hoặc vì lý do pháp lý, hoạt động hoặc quy định. Nếu chúng tôi thực hiện các thay đổi quan trọng, chúng tôi sẽ thông báo cho bạn thông qua ứng dụng hoặc trang web của chúng tôi. Ngày "Cập Nhật Lần Cuối" ở đầu chính sách này cho biết khi nào nó được sửa đổi gần đây nhất.

Việc bạn tiếp tục sử dụng Green Card Trips sau khi các thay đổi được đăng lên sẽ được coi là chấp nhận Chính Sách Bảo Mật đã cập nhật.

## Người Dùng Quốc Tế

Green Card Trips được thiết kế cho Cư Dân Thường Trú Hoa Kỳ. Mặc dù ứng dụng có thể được sử dụng trên toàn cầu, tất cả dữ liệu vẫn ở trên thiết bị của bạn bất kể vị trí của bạn. Nếu bạn ở Khu Vực Kinh Tế Châu Âu (EEA), Vương Quốc Anh hoặc các khu vực khác có luật bảo vệ dữ liệu (chẳng hạn như GDPR), xin lưu ý rằng chúng tôi không chuyển dữ liệu của bạn đến bất kỳ máy chủ nào, do đó các quy định chuyển dữ liệu quốc tế không áp dụng.

## Quyền Riêng Tư California (CCPA)

Nếu bạn là cư dân California, bạn có các quyền cụ thể theo Đạo Luật Bảo Mật Người Tiêu Dùng California (CCPA). Tuy nhiên, vì chúng tôi không thu thập, bán hoặc chia sẻ thông tin cá nhân của bạn, các quyền này được đáp ứng theo thiết kế:

- **Quyền Biết:** Chúng tôi không thu thập thông tin cá nhân của bạn
- **Quyền Xóa:** Tất cả dữ liệu được lưu trữ cục bộ trên thiết bị của bạn và có thể được bạn xóa
- **Quyền Chọn Không Bán:** Chúng tôi không bán thông tin cá nhân
- **Quyền Không Phân Biệt Đối Xử:** Không áp dụng vì chúng tôi không thu thập dữ liệu

## Liên Hệ Với Chúng Tôi

Nếu bạn có bất kỳ câu hỏi, thắc mắc hoặc yêu cầu nào liên quan đến Chính Sách Bảo Mật này hoặc thực tiễn quyền riêng tư của chúng tôi, vui lòng liên hệ với chúng tôi:

**Email:** support@greencardtrips.com
**Trang Web:** https://greencardtrips.com

Chúng tôi sẽ trả lời yêu cầu của bạn trong một khung thời gian hợp lý.

## Tuyên Bố Từ Chối Trách Nhiệm Pháp Lý

Ứng dụng này là một công cụ thông tin và không cung cấp tư vấn pháp lý. Mặc dù chúng tôi bảo vệ quyền riêng tư của bạn, bạn có trách nhiệm đảm bảo tính chính xác của thông tin bạn nhập và xác minh điều kiện nhập cư của bạn với các nguồn USCIS chính thức hoặc một luật sư nhập cư có trình độ.

---

**Tóm Tắt:** Green Card Trips được xây dựng với quyền riêng tư của bạn là ưu tiên hàng đầu. Dữ liệu nhập cư của bạn được lưu trên thiết bị của bạn, được mã hóa và an toàn. Chúng tôi không thu thập, truy cập hoặc chia sẻ thông tin của bạn. Bạn có toàn quyền kiểm soát.

`,
    },
    "zh-CN": {
      seo: {
        title: "隐私政策 - Green Card Trips",
        description: "Green Card Trips 移动应用程序和网站的隐私政策",
      },
      content: `# 隐私政策

**生效日期:** 2025年1月15日
**最后更新:** 2025年1月15日

## 简介

Green Card Trips("我们"、"我方"或"本公司")致力于保护您的隐私。本隐私政策适用于我们在iOS设备上提供的移动应用程序("应用")以及我们位于greencardtrips.com的网站("网站")。

我们在构建Green Card Trips时将隐私作为核心原则。本政策阐明了我们优先保护隐私的方式以及我们如何处理您的信息。

## 我们的隐私优先理念

**您的数据归您所有。** Green Card Trips的设计旨在将您的敏感移民信息完全私密且安全地保存在您的设备上。我们不收集、存储、传输或访问您的个人数据。

## 信息存储

### 移动应用程序

Green Card Trips移动应用程序**专门在您的设备上**存储您的所有信息。包括:

- 您的姓名和个人资料信息
- 绿卡签发日期和居留身份
- 旅行记录(出发日期、返回日期、目的地、目的)
- 旅行计算和资格估算
- 应用偏好设置和配置

**重要提示:** 这些数据本地存储在您的设备上。除非您明确选择导出,否则您的信息永远不会离开您的手机。我们没有收集您数据的服务器,也无法访问您的信息。

### 网站

我们的网站(greencardtrips.com)是一个营销和信息网站。我们网站存储的唯一数据是:

- **主题偏好:** 我们使用浏览器localStorage来记住您是偏好浅色模式还是深色模式。此偏好保留在您的浏览器中,绝不会传输给我们。

## 网站分析

### Google Analytics 4

我们在网站上使用 Google Analytics 4 来了解访问者如何使用我们的网站并改善您的体验。这帮助我们了解哪些页面最有帮助,人们使用什么设备,以及我们如何为像您这样的绿卡持有者改进网站。

**我们收集的内容**

Google Analytics 收集有关您网站访问的基本信息,包括:
- 您在我们网站上查看的页面
- 您在每个页面上花费的时间
- 您的设备类型(手机、台式电脑、平板电脑)
- 您的浏览器和操作系统
- 大致地理位置(城市/地区级别,而非您的确切位置)
- 您如何访问我们的网站(搜索引擎、直接访问等)

**重要提示:** 此数据是聚合的且匿名的。我们不会收集个人身份信息,如您的姓名、电子邮件或绿卡详细信息。我们无法识别个别访问者。

**使用的 Cookies**

Google Analytics 使用以下 cookies 来收集这些匿名数据:

- **_ga**:区分唯一访问者(2年后过期)
- **_ga_<container-id>**:存储和计算页面浏览量(2年后过期)
- **_gid**:区分唯一访问者(24小时后过期)

这些 cookies 包含随机标识符,不存储任何个人信息。

**您的隐私选择**

您可以通过多种方式选择退出 Google Analytics 跟踪:
- 使用 [Google Analytics 停用浏览器插件](https://tools.google.com/dlpage/gaoptout)
- 在浏览器设置中启用"请勿跟踪"
- 使用阻止分析 cookies 的浏览器扩展程序
- 清除您的 cookies 以重置您的匿名标识符

**Google 的隐私做法**

有关 Google 如何处理数据的更多信息:
- [Google 隐私政策](https://policies.google.com/privacy)
- [当您使用我们合作伙伴的网站或应用时 Google 如何使用数据](https://www.google.com/policies/privacy/partners/)

### Google Search Console

我们使用 Google Search Console 来了解人们如何通过 Google 等搜索引擎找到我们的网站。此工具帮助我们改善搜索展示,以便绿卡持有者可以更轻松地找到有关公民身份要求的信息。

**重要提示:** Google Search Console 不使用 cookies,也不跟踪个别访问者。它只向我们提供聚合的搜索数据,例如:
- 哪些搜索词将人们引导至我们的网站
- 我们的网站在搜索结果中出现的频率
- 哪些页面从搜索中获得最多点击

此数据完全匿名,无法与任何个人用户关联。

## 我们不收集的信息

我们希望明确说明我们不收集什么:

- ❌ 不收集个人身份信息(PII)
- ❌ 不收集电子邮件地址或账户凭证
- ❌ 不进行位置跟踪或GPS数据收集
- ❌ 不收集使用分析或行为跟踪数据
- ❌ 不收集广告标识符
- ❌ 不进行设备指纹识别
- ❌ 不收集IP地址或浏览数据
- ❌ 不收集包含个人数据的崩溃报告
- ❌ 不收集社交媒体连接
- ❌ 不使用第三方跟踪像素或Cookie

## 第三方服务

Green Card Trips应用程序**不与**任何第三方服务、分析平台、广告网络或社交媒体平台集成。您的数据只属于您。

将来,如果我们添加可选功能(例如云备份),我们将更新本政策,并在启用任何数据传输之前征求您的明确同意。

## 数据安全

您的旅行数据和移民信息非常敏感,我们认真对待其安全性:

- **生物识别保护:** 您可以选择启用Face ID、Touch ID或PIN码保护以确保应用访问安全
- **无传输:** 由于您的数据从不离开您的设备,因此无法在传输过程中被拦截
- **无服务器:** 我们不运营存储用户数据的服务器,从而消除了服务器泄露的风险

## 您的权利和控制权

由于您的所有数据都本地存储在您的设备上,您拥有完全的控制权:

- **访问:** 您可以随时在应用内查看所有数据
- **修改:** 您可以随时编辑或更新任何信息
- **删除:** 您可以从应用设置中删除单个旅行记录或清除所有数据
- **完全移除:** 卸载应用将永久删除设备上的所有数据

## 儿童隐私

Green Card Trips旨在供正在申请美国公民身份的合法永久居民(绿卡持有人)使用。本应用不面向13岁以下儿童,我们不会故意收集儿童的信息。

## 本隐私政策的变更

我们可能会更新本隐私政策以反映我们实践的变化或出于法律、运营或监管原因。如果我们进行重大变更,我们将通过应用或网站通知您。本政策顶部的"最后更新"日期表示最近一次修订的时间。

您在变更发布后继续使用Green Card Trips即表示您接受更新后的隐私政策。

## 国际用户

Green Card Trips是为美国永久居民设计的。虽然该应用可以在国际上使用,但无论您身在何处,所有数据都保留在您的设备上。如果您位于欧洲经济区(EEA)、英国或其他具有数据保护法(如GDPR)的地区,请注意我们不会将您的数据传输到任何服务器,因此国际数据传输法规不适用。

## 加州隐私权(CCPA)

如果您是加州居民,您根据《加州消费者隐私法》(CCPA)享有特定权利。但是,由于我们不收集、出售或共享您的个人信息,这些权利在设计上就已得到满足:

- **知情权:** 我们不收集您的个人信息
- **删除权:** 所有数据本地存储在您的设备上,您可以自行删除
- **选择退出销售的权利:** 我们不出售个人信息
- **不受歧视的权利:** 由于我们不收集数据,此项不适用

## 联系我们

如果您对本隐私政策或我们的隐私实践有任何疑问、顾虑或请求,请联系我们:

**电子邮件:** support@greencardtrips.com
**网站:** https://greencardtrips.com

我们将在合理的时间内回复您的询问。

## 法律免责声明

本应用是一款信息工具,不提供法律建议。虽然我们保护您的隐私,但您有责任确保输入信息的准确性,并通过USCIS官方来源或合格的移民律师验证您的移民资格。

---

**摘要:** Green Card Trips在构建时将您的隐私作为首要任务。您的移民数据保留在您的设备上,经过加密且安全。我们不收集、访问或共享您的信息。您拥有完全的控制权。

`,
    },
  },
  cookiesPolicy: {
    en: {
      seo: {
        title: "Cookie Policy - Green Card Trips",
        description: "Cookie Policy for Green Card Trips website",
      },
      content: `# Cookie Policy

**Last Updated: January 15, 2025**
**Effective Date: January 15, 2025**

## Introduction

This Cookie Policy explains how Green Card Trips ("we," "us," or "our") uses cookies and similar technologies on our website at https://greencardtrips.com (the "Website").

We believe in transparency and your right to privacy. This policy will help you understand what cookies are, which ones we use (spoiler: very few), and how you can control them.

This Cookie Policy should be read together with our Privacy Policy, which explains how we handle your personal information.

## What Are Cookies?

Cookies are small text files that websites place on your device (computer, smartphone, or tablet) when you visit them. They help websites remember information about your visit, like your preferences or which pages you viewed.

Think of cookies like a bookmark - they help the website remember where you've been and what you've done, so your next visit can be more personalized and efficient.

### Types of Cookies

**First-party cookies** are set by the website you're visiting (in this case, greencardtrips.com).

**Third-party cookies** are set by someone other than the website owner - usually services that the website uses, like analytics tools.

Cookies can be **session cookies** (deleted when you close your browser) or **persistent cookies** (stay on your device for a set period or until you delete them).

## Cookies We Use

**We only use Google Analytics cookies to understand how visitors use our website.**

We do NOT use:
- Advertising cookies
- Social media tracking cookies
- Marketing cookies
- Profiling cookies
- Cookies that sell your data to third parties

Here are the specific cookies we use:

| Cookie Name | Provider | Purpose | Duration | Type |
|------------|----------|---------|----------|------|
| _ga | Google Analytics | Distinguishes unique visitors and calculates visitor, session, and campaign data | 2 years | Analytics |
| _ga_<container-id> | Google Analytics | Stores and counts pageviews | 2 years | Analytics |
| _gid | Google Analytics | Distinguishes unique visitors | 24 hours | Analytics |

That's it. These three cookies are the only ones we use.

## Why We Use Cookies

We use Google Analytics cookies to:

- **Understand website traffic**: See how many people visit our site and which pages they view
- **Improve user experience**: Identify which content is most helpful so we can create more of it
- **Support our community**: Learn what information green card holders need most on their path to citizenship
- **Fix problems**: Detect technical issues and broken links

We do NOT use cookies to:
- Track you across the internet
- Show you targeted advertisements
- Sell your information to third parties
- Build detailed profiles about you
- Follow you to other websites

Your privacy matters to us. Our mobile app stores all your trip data locally on your device, and we apply the same privacy-first approach to our website.

## Cookie Categories

### Strictly Necessary Cookies
**None.** Our website works perfectly fine without any cookies. We don't use cookies for essential website functionality.

### Analytics Cookies
**Google Analytics only.** These cookies help us understand how visitors use our website. They are optional - you can opt out and still use our website normally.

### Marketing/Advertising Cookies
**None.** We don't use any advertising or marketing cookies.

### Social Media Cookies
**None.** We don't embed social media tracking on our website.

## Your Cookie Choices

You are always in control of cookies. Here are your options:

### 1. Use Our Cookie Consent Banner

Depending on where you're located, you'll see a cookie consent banner when you first visit our website. You can:
- Accept all cookies
- Reject non-essential cookies (which means no Google Analytics)
- Customize your preferences

### 2. Browser Settings

You can control cookies through your web browser. Most browsers let you:
- Block all cookies
- Block third-party cookies only
- Delete existing cookies
- Be notified when websites set cookies

See the "How to Manage Cookies" section below for browser-specific instructions.

### 3. Google Analytics Opt-Out

You can opt out of Google Analytics specifically by:
- Installing the [Google Analytics Opt-out Browser Add-on](https://tools.google.com/dlpage/gaoptout)
- Using the settings in our cookie consent banner

**Important:** Blocking or deleting cookies won't affect your ability to use our website. All core functionality works without cookies.

## Geolocation-Based Consent

We respect privacy laws around the world and adjust our cookie consent process based on where you're located:

### European Union (EU) and European Economic Area (EEA)
If you're visiting from the EU/EEA, you'll see an opt-in consent banner. We won't set analytics cookies until you explicitly agree. This complies with the General Data Protection Regulation (GDPR) and ePrivacy Directive.

### California, USA
If you're visiting from California, you'll see a notice that includes information about your rights under the California Consumer Privacy Act (CCPA), including the right to opt out of data "sales" (though we don't sell your data).

### Other Locations
Visitors from other locations may see different notices based on their local privacy laws. We may use a less intrusive notice or an opt-out approach rather than opt-in.

### How Geolocation Works
We determine your approximate location based on your IP address. This detection happens on your device and is not stored or tracked. It's only used to show you the appropriate cookie consent banner.

## How to Manage Cookies

You can control and delete cookies through your browser settings. Here's how:

### Google Chrome
1. Click the three dots menu (top right) > Settings
2. Click "Privacy and security" > "Cookies and other site data"
3. Choose your preferred settings or click "See all cookies and site data" to manage individual cookies
4. [Learn more about Chrome cookie settings](https://support.google.com/chrome/answer/95647)

### Mozilla Firefox
1. Click the menu button (top right) > Settings
2. Select "Privacy & Security"
3. Under "Cookies and Site Data," click "Manage Data" or adjust settings
4. [Learn more about Firefox cookie settings](https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer)

### Apple Safari
1. Go to Settings > Safari (iOS) or Safari menu > Preferences (Mac)
2. Click "Privacy"
3. Adjust cookie settings or click "Manage Website Data"
4. [Learn more about Safari cookie settings](https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac)

### Microsoft Edge
1. Click the three dots menu (top right) > Settings
2. Click "Cookies and site permissions" > "Cookies and site data"
3. Choose your preferred settings or click "Manage and delete cookies and site data"
4. [Learn more about Edge cookie settings](https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09)

### Google Analytics Opt-Out
Install the official [Google Analytics Opt-out Browser Add-on](https://tools.google.com/dlpage/gaoptout) to prevent Google Analytics from tracking you across all websites.

### Impact of Blocking Cookies
If you block or delete cookies:
- Our website will continue to work normally
- We won't be able to see aggregated analytics about how our website is used
- You may need to adjust your cookie preferences again if you clear all browser data

## Third-Party Cookies

Google Analytics is the only third-party service that sets cookies on our website.

**Google Analytics** helps us understand how visitors use our site by collecting anonymous usage statistics. Google processes this information according to their privacy policy.

You can learn more about how Google uses data from sites that use their services:
- [Google Privacy Policy](https://policies.google.com/privacy)
- [How Google uses information from sites or apps that use our services](https://policies.google.com/technologies/partner-sites)

We have configured Google Analytics to:
- Anonymize IP addresses
- Not share data with other Google services
- Not use data for Google's own advertising purposes

**No other third parties** have access to information collected through our website cookies.

## Changes to This Cookie Policy

We may update this Cookie Policy from time to time to reflect changes in our practices, technology, legal requirements, or for other reasons.

When we make significant changes, we will:
- Update the "Last Updated" date at the top of this policy
- Notify you through a prominent notice on our website
- In some cases, send you an email notification (if you're a registered user)

We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies.

Changes to this Cookie Policy are effective when posted. Your continued use of our website after changes are posted means you accept the updated policy.

## Contact Us

If you have questions about this Cookie Policy, cookies we use, or your privacy choices, please contact us:

**Email:** support@greencardtrips.com
**Website:** https://greencardtrips.com

We're here to help and committed to protecting your privacy as you pursue your journey to U.S. citizenship.

---

**About Green Card Trips**

Green Card Trips is a mobile app that helps U.S. green card holders track their physical presence in the United States to qualify for citizenship. We store all your trip data locally on your device - we never collect, store, or share your personal information with anyone. Your privacy and security are our top priorities as you work toward achieving your American dream.
`,
    },
    es: {
      seo: {
        title: "Política de Cookies - Green Card Trips",
        description: "Política de Cookies del sitio web de Green Card Trips",
      },
      content: `# Política de Cookies

**Última Actualización: 15 de enero de 2025**
**Fecha de Entrada en Vigor: 15 de enero de 2025**

## Introducción

Esta Política de Cookies explica cómo Green Card Trips ("nosotros", "nuestro" o "nuestra empresa") utiliza cookies y tecnologías similares en nuestro sitio web https://greencardtrips.com (el "Sitio Web").

Creemos en la transparencia y en su derecho a la privacidad. Esta política le ayudará a entender qué son las cookies, cuáles utilizamos (adelanto: muy pocas), y cómo puede controlarlas.

Esta Política de Cookies debe leerse junto con nuestra Política de Privacidad, que explica cómo manejamos su información personal.

## ¿Qué Son las Cookies?

Las cookies son pequeños archivos de texto que los sitios web colocan en su dispositivo (computadora, teléfono inteligente o tableta) cuando los visita. Ayudan a los sitios web a recordar información sobre su visita, como sus preferencias o qué páginas vio.

Piense en las cookies como un marcador: ayudan al sitio web a recordar dónde ha estado y qué ha hecho, para que su próxima visita pueda ser más personalizada y eficiente.

### Tipos de Cookies

**Las cookies de origen** son establecidas por el sitio web que está visitando (en este caso, greencardtrips.com).

**Las cookies de terceros** son establecidas por alguien que no es el propietario del sitio web, generalmente servicios que el sitio web utiliza, como herramientas de análisis.

Las cookies pueden ser **cookies de sesión** (se eliminan cuando cierra su navegador) o **cookies persistentes** (permanecen en su dispositivo durante un período establecido o hasta que las elimine).

## Cookies que Utilizamos

**Solo utilizamos cookies de Google Analytics para comprender cómo los visitantes usan nuestro sitio web.**

NO utilizamos:
- Cookies publicitarias
- Cookies de seguimiento de redes sociales
- Cookies de marketing
- Cookies de elaboración de perfiles
- Cookies que vendan sus datos a terceros

Estas son las cookies específicas que utilizamos:

| Nombre de la Cookie | Proveedor | Propósito | Duración | Tipo |
|---------------------|-----------|-----------|----------|------|
| _ga | Google Analytics | Distingue visitantes únicos y calcula datos de visitantes, sesiones y campañas | 2 años | Análisis |
| _ga_<container-id> | Google Analytics | Almacena y cuenta vistas de página | 2 años | Análisis |
| _gid | Google Analytics | Distingue visitantes únicos | 24 horas | Análisis |

Eso es todo. Estas tres cookies son las únicas que utilizamos.

## Por Qué Utilizamos Cookies

Utilizamos cookies de Google Analytics para:

- **Entender el tráfico del sitio web**: Ver cuántas personas visitan nuestro sitio y qué páginas ven
- **Mejorar la experiencia del usuario**: Identificar qué contenido es más útil para poder crear más de él
- **Apoyar a nuestra comunidad**: Aprender qué información necesitan más los titulares de tarjetas verdes en su camino hacia la ciudadanía
- **Solucionar problemas**: Detectar problemas técnicos y enlaces rotos

NO utilizamos cookies para:
- Rastrearlo por internet
- Mostrarle publicidad dirigida
- Vender su información a terceros
- Crear perfiles detallados sobre usted
- Seguirlo a otros sitios web

Su privacidad nos importa. Nuestra aplicación móvil almacena todos sus datos de viajes localmente en su dispositivo, y aplicamos el mismo enfoque de privacidad primero a nuestro sitio web.

## Categorías de Cookies

### Cookies Estrictamente Necesarias
**Ninguna.** Nuestro sitio web funciona perfectamente sin ninguna cookie. No usamos cookies para la funcionalidad esencial del sitio web.

### Cookies de Análisis
**Solo Google Analytics.** Estas cookies nos ayudan a entender cómo los visitantes usan nuestro sitio web. Son opcionales: puede optar por no usarlas y aún así usar nuestro sitio web normalmente.

### Cookies de Marketing/Publicidad
**Ninguna.** No usamos ninguna cookie de publicidad o marketing.

### Cookies de Redes Sociales
**Ninguna.** No incorporamos seguimiento de redes sociales en nuestro sitio web.

## Sus Opciones de Cookies

Usted siempre tiene el control de las cookies. Estas son sus opciones:

### 1. Use Nuestro Banner de Consentimiento de Cookies

Dependiendo de dónde se encuentre, verá un banner de consentimiento de cookies cuando visite nuestro sitio web por primera vez. Puede:
- Aceptar todas las cookies
- Rechazar cookies no esenciales (lo que significa sin Google Analytics)
- Personalizar sus preferencias

### 2. Configuración del Navegador

Puede controlar las cookies a través de su navegador web. La mayoría de los navegadores le permiten:
- Bloquear todas las cookies
- Bloquear solo cookies de terceros
- Eliminar cookies existentes
- Recibir notificaciones cuando los sitios web establecen cookies

Consulte la sección "Cómo Gestionar las Cookies" a continuación para obtener instrucciones específicas del navegador.

### 3. Exclusión de Google Analytics

Puede optar por no participar específicamente en Google Analytics:
- Instalando el [Complemento de Navegador para la Desactivación de Google Analytics](https://tools.google.com/dlpage/gaoptout)
- Usando la configuración en nuestro banner de consentimiento de cookies

**Importante:** Bloquear o eliminar cookies no afectará su capacidad de usar nuestro sitio web. Toda la funcionalidad principal funciona sin cookies.

## Consentimiento Basado en Geolocalización

Respetamos las leyes de privacidad de todo el mundo y ajustamos nuestro proceso de consentimiento de cookies según su ubicación:

### Unión Europea (UE) y Espacio Económico Europeo (EEE)
Si visita desde la UE/EEE, verá un banner de consentimiento de participación. No estableceremos cookies de análisis hasta que acepte explícitamente. Esto cumple con el Reglamento General de Protección de Datos (GDPR) y la Directiva de Privacidad Electrónica.

### California, EE.UU.
Si visita desde California, verá un aviso que incluye información sobre sus derechos bajo la Ley de Privacidad del Consumidor de California (CCPA), incluido el derecho a optar por no participar en "ventas" de datos (aunque no vendemos sus datos).

### Otras Ubicaciones
Los visitantes de otras ubicaciones pueden ver diferentes avisos según sus leyes locales de privacidad. Podemos usar un aviso menos intrusivo o un enfoque de exclusión en lugar de inclusión.

### Cómo Funciona la Geolocalización
Determinamos su ubicación aproximada en función de su dirección IP. Esta detección ocurre en su dispositivo y no se almacena ni se rastrea. Solo se usa para mostrarle el banner de consentimiento de cookies apropiado.

## Cómo Gestionar las Cookies

Puede controlar y eliminar cookies a través de la configuración de su navegador. Así es como:

### Google Chrome
1. Haga clic en el menú de tres puntos (arriba a la derecha) > Configuración
2. Haga clic en "Privacidad y seguridad" > "Cookies y otros datos del sitio"
3. Elija su configuración preferida o haga clic en "Ver todas las cookies y datos del sitio" para gestionar cookies individuales
4. [Más información sobre la configuración de cookies de Chrome](https://support.google.com/chrome/answer/95647)

### Mozilla Firefox
1. Haga clic en el botón de menú (arriba a la derecha) > Configuración
2. Seleccione "Privacidad y Seguridad"
3. En "Cookies y Datos del Sitio", haga clic en "Gestionar Datos" o ajuste la configuración
4. [Más información sobre la configuración de cookies de Firefox](https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer)

### Apple Safari
1. Vaya a Configuración > Safari (iOS) o menú Safari > Preferencias (Mac)
2. Haga clic en "Privacidad"
3. Ajuste la configuración de cookies o haga clic en "Gestionar Datos del Sitio Web"
4. [Más información sobre la configuración de cookies de Safari](https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac)

### Microsoft Edge
1. Haga clic en el menú de tres puntos (arriba a la derecha) > Configuración
2. Haga clic en "Permisos y cookies del sitio" > "Cookies y datos del sitio"
3. Elija su configuración preferida o haga clic en "Gestionar y eliminar cookies y datos del sitio"
4. [Más información sobre la configuración de cookies de Edge](https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09)

### Exclusión de Google Analytics
Instale el [Complemento de Navegador para la Desactivación de Google Analytics](https://tools.google.com/dlpage/gaoptout) oficial para evitar que Google Analytics lo rastree en todos los sitios web.

### Impacto de Bloquear Cookies
Si bloquea o elimina cookies:
- Nuestro sitio web continuará funcionando normalmente
- No podremos ver análisis agregados sobre cómo se usa nuestro sitio web
- Es posible que deba ajustar sus preferencias de cookies nuevamente si borra todos los datos del navegador

## Cookies de Terceros

Google Analytics es el único servicio de terceros que establece cookies en nuestro sitio web.

**Google Analytics** nos ayuda a entender cómo los visitantes usan nuestro sitio al recopilar estadísticas de uso anónimas. Google procesa esta información de acuerdo con su política de privacidad.

Puede obtener más información sobre cómo Google utiliza los datos de sitios que usan sus servicios:
- [Política de Privacidad de Google](https://policies.google.com/privacy)
- [Cómo Google utiliza la información de sitios o aplicaciones que usan nuestros servicios](https://policies.google.com/technologies/partner-sites)

Hemos configurado Google Analytics para:
- Anonimizar direcciones IP
- No compartir datos con otros servicios de Google
- No usar datos para los propios fines publicitarios de Google

**Ningún otro tercero** tiene acceso a la información recopilada a través de las cookies de nuestro sitio web.

## Cambios a Esta Política de Cookies

Podemos actualizar esta Política de Cookies de vez en cuando para reflejar cambios en nuestras prácticas, tecnología, requisitos legales u otras razones.

Cuando hagamos cambios significativos:
- Actualizaremos la fecha de "Última Actualización" en la parte superior de esta política
- Le notificaremos a través de un aviso destacado en nuestro sitio web
- En algunos casos, le enviaremos una notificación por correo electrónico (si es un usuario registrado)

Le recomendamos que revise esta Política de Cookies periódicamente para mantenerse informado sobre cómo usamos las cookies.

Los cambios a esta Política de Cookies entran en vigor cuando se publican. Su uso continuo de nuestro sitio web después de que se publiquen los cambios significa que acepta la política actualizada.

## Contáctenos

Si tiene preguntas sobre esta Política de Cookies, las cookies que usamos o sus opciones de privacidad, contáctenos:

**Correo electrónico:** support@greencardtrips.com
**Sitio web:** https://greencardtrips.com

Estamos aquí para ayudar y comprometidos a proteger su privacidad mientras persigue su camino hacia la ciudadanía estadounidense.

---

**Acerca de Green Card Trips**

Green Card Trips es una aplicación móvil que ayuda a los titulares de tarjetas verdes de EE.UU. a rastrear su presencia física en los Estados Unidos para calificar para la ciudadanía. Almacenamos todos sus datos de viajes localmente en su dispositivo: nunca recopilamos, almacenamos ni compartimos su información personal con nadie. Su privacidad y seguridad son nuestras principales prioridades mientras trabaja para lograr su sueño americano.
`,
    },
    tl: {
      seo: {
        title: "Patakaran sa Cookies - Green Card Trips",
        description: "Patakaran sa Cookies para sa website ng Green Card Trips",
      },
      content: `# Patakaran sa Cookies

**Huling Na-update: Enero 15, 2025**
**Petsa ng Pagpapatupad: Enero 15, 2025**

## Panimula

Ang Patakaran sa Cookies na ito ay nagpapaliwanag kung paano ginagamit ng Green Card Trips ("kami," "amin," o "aming kumpanya") ang mga cookies at katulad na teknolohiya sa aming website sa https://greencardtrips.com (ang "Website").

Naniniwala kami sa transparency at sa inyong karapatan sa privacy. Tutulungan kayo ng patakarang ito na maintindihan kung ano ang mga cookies, alin ang ginagamit namin (spoiler: napakakaunti lamang), at paano ninyo ito makokontrol.

Ang Patakaran sa Cookies na ito ay dapat basahin kasama ng aming Patakaran sa Privacy, na nagpapaliwanag kung paano namin hinahawakan ang inyong personal na impormasyon.

## Ano ang mga Cookies?

Ang mga cookies ay maliliit na text files na inilalagay ng mga website sa inyong device (computer, smartphone, o tablet) kapag binibisita ninyo ang mga ito. Tumutulong ang mga ito sa mga website na matandaan ang impormasyon tungkol sa inyong pagbisita, tulad ng inyong mga kagustuhan o aling mga pahina ang inyong tiningnan.

Isipin ang cookies na parang bookmark - tumutulong ang mga ito sa website na matandaan kung saan kayo nakapunta at ano ang inyong ginawa, upang ang inyong susunod na pagbisita ay mas personalized at mahusay.

### Mga Uri ng Cookies

**Ang mga first-party cookies** ay itinakda ng website na inyong binibisita (sa kasong ito, greencardtrips.com).

**Ang mga third-party cookies** ay itinakda ng iba bukod sa may-ari ng website - karaniwang mga serbisyong ginagamit ng website, tulad ng analytics tools.

Ang mga cookies ay maaaring **session cookies** (tinatanggal kapag nagsara kayo ng inyong browser) o **persistent cookies** (nananatili sa inyong device para sa itinakdang panahon o hanggang sa tanggalin ninyo ang mga ito).

## Mga Cookies na Ginagamit Namin

**Gumagamit lang kami ng Google Analytics cookies upang maintindihan kung paano ginagamit ng mga bisita ang aming website.**

HINDI kami gumagamit ng:
- Advertising cookies
- Social media tracking cookies
- Marketing cookies
- Profiling cookies
- Mga cookies na nagbebenta ng inyong data sa third parties

Narito ang mga partikular na cookies na ginagamit namin:

| Pangalan ng Cookie | Provider | Layunin | Tagal | Uri |
|-------------------|----------|---------|-------|-----|
| _ga | Google Analytics | Nakikilala ang mga natatanging bisita at kinakalkula ang data ng bisita, session, at kampanya | 2 taon | Analytics |
| _ga_<container-id> | Google Analytics | Nag-iimbak at nagbibilang ng pageviews | 2 taon | Analytics |
| _gid | Google Analytics | Nakikilala ang mga natatanging bisita | 24 na oras | Analytics |

Iyan lang. Ang tatlong cookies na ito lang ang ginagamit namin.

## Bakit Kami Gumagamit ng Cookies

Ginagamit namin ang Google Analytics cookies upang:

- **Maintindihan ang website traffic**: Tingnan kung ilang tao ang bumibisita sa aming site at aling mga pahina ang kanilang tinitingnan
- **Mapahusay ang user experience**: Kilalanin kung aling content ang pinaka-nakakatulong upang makagawa kami ng higit pa
- **Suportahan ang aming komunidad**: Matutunan kung anong impormasyon ang pinaka-kailangan ng mga may-ari ng green card sa kanilang landas tungo sa pagkamamamayan
- **Ayusin ang mga problema**: Detectahin ang mga teknikal na isyu at mga sirang links

HINDI namin ginagamit ang cookies upang:
- Subaybayan kayo sa buong internet
- Ipakita sa inyo ang targeted advertisements
- Ibenta ang inyong impormasyon sa third parties
- Gumawa ng detalyadong mga profile tungkol sa inyo
- Sundan kayo sa ibang mga website

Mahalaga sa amin ang inyong privacy. Ang aming mobile app ay nag-iimbak ng lahat ng inyong trip data nang lokal sa inyong device, at ginagamit namin ang parehong privacy-first na approach sa aming website.

## Mga Kategorya ng Cookies

### Strictly Necessary Cookies
**Wala.** Ang aming website ay gumagana nang perpekto nang walang anumang cookies. Hindi kami gumagamit ng cookies para sa mahalagang functionality ng website.

### Analytics Cookies
**Google Analytics lang.** Ang mga cookies na ito ay tumutulong sa amin na maintindihan kung paano ginagamit ng mga bisita ang aming website. Opsyonal ang mga ito - maaari kayong mag-opt out at gumamit pa rin ng aming website nang normal.

### Marketing/Advertising Cookies
**Wala.** Hindi kami gumagamit ng anumang advertising o marketing cookies.

### Social Media Cookies
**Wala.** Hindi kami nag-embed ng social media tracking sa aming website.

## Ang Inyong mga Pagpipilian sa Cookies

Lagi kayong may kontrol sa mga cookies. Narito ang inyong mga pagpipilian:

### 1. Gamitin ang Aming Cookie Consent Banner

Depende sa kung saan kayo naroroon, makikita ninyo ang cookie consent banner kapag unang binisita ninyo ang aming website. Maaari ninyong:
- Tanggapin ang lahat ng cookies
- Tanggihan ang hindi-mahalagang cookies (na nangangahulugang walang Google Analytics)
- I-customize ang inyong mga kagustuhan

### 2. Mga Setting ng Browser

Maaari ninyong kontrolin ang mga cookies sa pamamagitan ng inyong web browser. Karamihan sa mga browser ay nagpapahintulot sa inyo na:
- I-block ang lahat ng cookies
- I-block lang ang third-party cookies
- Tanggalin ang mga umiiral na cookies
- Makatanggap ng notification kapag ang mga website ay nag-set ng cookies

Tingnan ang seksyon na "Paano Pamahalaan ang mga Cookies" sa ibaba para sa mga partikular na instruksyon ng browser.

### 3. Google Analytics Opt-Out

Maaari kayong mag-opt out ng Google Analytics partikular sa pamamagitan ng:
- Pag-install ng [Google Analytics Opt-out Browser Add-on](https://tools.google.com/dlpage/gaoptout)
- Paggamit ng mga setting sa aming cookie consent banner

**Mahalaga:** Ang pagharang o pagtanggal ng mga cookies ay hindi makakaapekto sa inyong kakayahang gamitin ang aming website. Ang lahat ng pangunahing functionality ay gumagana nang walang cookies.

## Geolocation-Based Consent

Nirerespeto namin ang mga batas sa privacy sa buong mundo at inaadjust ang aming proseso ng cookie consent batay sa kung saan kayo naroroon:

### European Union (EU) at European Economic Area (EEA)
Kung bumibisita kayo mula sa EU/EEA, makikita ninyo ang opt-in consent banner. Hindi kami mag-set ng analytics cookies hanggang sa hayagan ninyong sumang-ayon. Sumusunod ito sa General Data Protection Regulation (GDPR) at ePrivacy Directive.

### California, USA
Kung bumibisita kayo mula sa California, makikita ninyo ang paunawa na may kasamang impormasyon tungkol sa inyong mga karapatan sa ilalim ng California Consumer Privacy Act (CCPA), kasama ang karapatang mag-opt out ng data "sales" (kahit na hindi namin ibinebenta ang inyong data).

### Ibang mga Lokasyon
Ang mga bisita mula sa ibang mga lokasyon ay maaaring makakita ng iba't ibang mga paunawa batay sa kanilang lokal na mga batas sa privacy. Maaari kaming gumamit ng hindi gaanong nakakasagabal na paunawa o ng opt-out approach sa halip na opt-in.

### Paano Gumagana ang Geolocation
Tinutukoy namin ang inyong tinatantyang lokasyon batay sa inyong IP address. Ang detection na ito ay nangyayari sa inyong device at hindi naka-store o sinusubaybayan. Ginagamit lang ito upang ipakita sa inyo ang naaangkop na cookie consent banner.

## Paano Pamahalaan ang mga Cookies

Maaari ninyong kontrolin at tanggalin ang mga cookies sa pamamagitan ng inyong browser settings. Narito kung paano:

### Google Chrome
1. I-click ang three dots menu (taas na kanan) > Settings
2. I-click ang "Privacy and security" > "Cookies and other site data"
3. Piliin ang inyong piniling mga setting o i-click ang "See all cookies and site data" upang pamahalaan ang mga indibidwal na cookies
4. [Matuto ng higit pa tungkol sa Chrome cookie settings](https://support.google.com/chrome/answer/95647)

### Mozilla Firefox
1. I-click ang menu button (taas na kanan) > Settings
2. Piliin ang "Privacy & Security"
3. Sa ilalim ng "Cookies and Site Data," i-click ang "Manage Data" o i-adjust ang settings
4. [Matuto ng higit pa tungkol sa Firefox cookie settings](https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer)

### Apple Safari
1. Pumunta sa Settings > Safari (iOS) o Safari menu > Preferences (Mac)
2. I-click ang "Privacy"
3. I-adjust ang mga cookie settings o i-click ang "Manage Website Data"
4. [Matuto ng higit pa tungkol sa Safari cookie settings](https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac)

### Microsoft Edge
1. I-click ang three dots menu (taas na kanan) > Settings
2. I-click ang "Cookies and site permissions" > "Cookies and site data"
3. Piliin ang inyong piniling mga setting o i-click ang "Manage and delete cookies and site data"
4. [Matuto ng higit pa tungkol sa Edge cookie settings](https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09)

### Google Analytics Opt-Out
I-install ang opisyal na [Google Analytics Opt-out Browser Add-on](https://tools.google.com/dlpage/gaoptout) upang pigilan ang Google Analytics na sumubaybay sa inyo sa lahat ng mga website.

### Epekto ng Pagharang sa Cookies
Kung haharangan o tatanggalin ninyo ang mga cookies:
- Patuloy na gagana nang normal ang aming website
- Hindi namin makikita ang aggregated analytics tungkol sa kung paano ginagamit ang aming website
- Maaaring kailanganin ninyong i-adjust muli ang inyong mga kagustuhan sa cookies kung buburahin ninyo ang lahat ng browser data

## Third-Party Cookies

Ang Google Analytics ang tanging third-party service na nag-set ng cookies sa aming website.

**Ang Google Analytics** ay tumutulong sa amin na maintindihan kung paano ginagamit ng mga bisita ang aming site sa pamamagitan ng pagkolekta ng mga anonymous na statistics ng paggamit. Pinoproseso ng Google ang impormasyong ito ayon sa kanilang patakaran sa privacy.

Maaari ninyong matutunan ang higit pa tungkol sa kung paano ginagamit ng Google ang data mula sa mga site na gumagamit ng kanilang mga serbisyo:
- [Google Privacy Policy](https://policies.google.com/privacy)
- [Paano ginagamit ng Google ang impormasyon mula sa mga site o apps na gumagamit ng aming mga serbisyo](https://policies.google.com/technologies/partner-sites)

Na-configure namin ang Google Analytics upang:
- I-anonymize ang mga IP addresses
- Huwag ibahagi ang data sa ibang mga serbisyo ng Google
- Huwag gamitin ang data para sa sariling mga layuning pang-advertise ng Google

**Walang ibang third parties** na may access sa impormasyong nakolekta sa pamamagitan ng aming website cookies.

## Mga Pagbabago sa Patakarang ito sa Cookies

Maaari naming i-update ang Patakarang ito sa Cookies paminsan-minsan upang ipakita ang mga pagbabago sa aming mga kasanayan, teknolohiya, legal na mga kinakailangan, o para sa ibang mga dahilan.

Kapag gumawa kami ng mga makabuluhang pagbabago:
- I-update namin ang "Huling Na-update" na petsa sa itaas ng patakarang ito
- Aabisuhan namin kayo sa pamamagitan ng isang kapansin-pansing paunawa sa aming website
- Sa ilang mga kaso, magpapadala kami sa inyo ng email notification (kung kayo ay isang registered user)

Hinihikayat namin kayong regular na suriin ang Patakarang ito sa Cookies upang manatiling informed tungkol sa kung paano namin ginagamit ang mga cookies.

Ang mga pagbabago sa Patakarang ito sa Cookies ay nagiging epektibo kapag na-post. Ang inyong patuloy na paggamit ng aming website pagkatapos mai-post ang mga pagbabago ay nangangahulugang tinatanggap ninyo ang na-update na patakaran.

## Makipag-ugnayan sa Amin

Kung mayroon kayong mga tanong tungkol sa Patakarang ito sa Cookies, sa mga cookies na ginagamit namin, o sa inyong mga pagpipilian sa privacy, mangyaring makipag-ugnayan sa amin:

**Email:** support@greencardtrips.com
**Website:** https://greencardtrips.com

Nandito kami upang tumulong at nakatuon sa pagprotekta sa inyong privacy habang hinahabol ninyo ang inyong paglalakbay tungo sa pagkamamamayan ng U.S.

---

**Tungkol sa Green Card Trips**

Ang Green Card Trips ay isang mobile app na tumutulong sa mga may-ari ng U.S. green card na subaybayan ang kanilang pisikal na presensya sa Estados Unidos upang maging karapat-dapat para sa pagkamamamayan. Iniimbak namin ang lahat ng inyong trip data nang lokal sa inyong device - hindi kami kailanman nangongolekta, nag-iimbak, o nagbabahagi ng inyong personal na impormasyon sa kahit sino. Ang inyong privacy at seguridad ay aming mga pangunahing priyoridad habang nagsusumikap kayo tungo sa pagkakamit ng inyong American dream.
`,
    },
    vi: {
      seo: {
        title: "Chính Sách Cookie - Green Card Trips",
        description: "Chính Sách Cookie cho trang web Green Card Trips",
      },
      content: `# Chính Sách Cookie

**Cập Nhật Lần Cuối: 15 tháng 1, 2025**
**Ngày Có Hiệu Lực: 15 tháng 1, 2025**

## Giới Thiệu

Chính Sách Cookie này giải thích cách Green Card Trips ("chúng tôi," "của chúng tôi" hoặc "công ty chúng tôi") sử dụng cookies và các công nghệ tương tự trên trang web của chúng tôi tại https://greencardtrips.com ("Trang Web").

Chúng tôi tin tưởng vào tính minh bạch và quyền riêng tư của bạn. Chính sách này sẽ giúp bạn hiểu cookies là gì, chúng tôi sử dụng những loại nào (spoiler: rất ít), và cách bạn có thể kiểm soát chúng.

Chính Sách Cookie này nên được đọc cùng với Chính Sách Quyền Riêng Tư của chúng tôi, giải thích cách chúng tôi xử lý thông tin cá nhân của bạn.

## Cookie Là Gì?

Cookies là các tệp văn bản nhỏ mà các trang web đặt trên thiết bị của bạn (máy tính, điện thoại thông minh hoặc máy tính bảng) khi bạn truy cập chúng. Chúng giúp các trang web ghi nhớ thông tin về lần truy cập của bạn, như sở thích của bạn hoặc những trang bạn đã xem.

Hãy nghĩ về cookies như một dấu trang - chúng giúp trang web nhớ nơi bạn đã đến và những gì bạn đã làm, để lần truy cập tiếp theo của bạn có thể được cá nhân hóa và hiệu quả hơn.

### Các Loại Cookie

**Cookies bên thứ nhất** được đặt bởi trang web bạn đang truy cập (trong trường hợp này là greencardtrips.com).

**Cookies bên thứ ba** được đặt bởi ai đó khác ngoài chủ sở hữu trang web - thường là các dịch vụ mà trang web sử dụng, như công cụ phân tích.

Cookies có thể là **session cookies** (bị xóa khi bạn đóng trình duyệt) hoặc **persistent cookies** (lưu trên thiết bị của bạn trong một khoảng thời gian nhất định hoặc cho đến khi bạn xóa chúng).

## Cookies Chúng Tôi Sử Dụng

**Chúng tôi chỉ sử dụng cookies của Google Analytics để hiểu cách khách truy cập sử dụng trang web của chúng tôi.**

Chúng tôi KHÔNG sử dụng:
- Cookies quảng cáo
- Cookies theo dõi mạng xã hội
- Cookies marketing
- Cookies lập hồ sơ
- Cookies bán dữ liệu của bạn cho bên thứ ba

Đây là các cookies cụ thể chúng tôi sử dụng:

| Tên Cookie | Nhà Cung Cấp | Mục Đích | Thời Gian | Loại |
|-----------|--------------|----------|-----------|------|
| _ga | Google Analytics | Phân biệt khách truy cập duy nhất và tính toán dữ liệu khách truy cập, phiên và chiến dịch | 2 năm | Phân tích |
| _ga_<container-id> | Google Analytics | Lưu trữ và đếm lượt xem trang | 2 năm | Phân tích |
| _gid | Google Analytics | Phân biệt khách truy cập duy nhất | 24 giờ | Phân tích |

Chỉ vậy thôi. Ba cookies này là những cookies duy nhất chúng tôi sử dụng.

## Tại Sao Chúng Tôi Sử Dụng Cookies

Chúng tôi sử dụng cookies của Google Analytics để:

- **Hiểu lưu lượng truy cập trang web**: Xem có bao nhiêu người truy cập trang web của chúng tôi và họ xem những trang nào
- **Cải thiện trải nghiệm người dùng**: Xác định nội dung nào hữu ích nhất để chúng tôi có thể tạo thêm
- **Hỗ trợ cộng đồng của chúng tôi**: Tìm hiểu thông tin nào người có thẻ xanh cần nhất trên con đường đến quyền công dân
- **Khắc phục sự cố**: Phát hiện các vấn đề kỹ thuật và liên kết bị hỏng

Chúng tôi KHÔNG sử dụng cookies để:
- Theo dõi bạn trên internet
- Hiển thị quảng cáo được nhắm mục tiêu cho bạn
- Bán thông tin của bạn cho bên thứ ba
- Xây dựng hồ sơ chi tiết về bạn
- Theo dõi bạn đến các trang web khác

Quyền riêng tư của bạn quan trọng với chúng tôi. Ứng dụng di động của chúng tôi lưu trữ tất cả dữ liệu chuyến đi của bạn cục bộ trên thiết bị của bạn, và chúng tôi áp dụng cùng một cách tiếp cận ưu tiên quyền riêng tư cho trang web của chúng tôi.

## Các Danh Mục Cookie

### Cookies Hoàn Toàn Cần Thiết
**Không có.** Trang web của chúng tôi hoạt động hoàn hảo mà không cần bất kỳ cookie nào. Chúng tôi không sử dụng cookies cho chức năng thiết yếu của trang web.

### Cookies Phân Tích
**Chỉ Google Analytics.** Những cookies này giúp chúng tôi hiểu cách khách truy cập sử dụng trang web của chúng tôi. Chúng là tùy chọn - bạn có thể từ chối và vẫn sử dụng trang web của chúng tôi bình thường.

### Cookies Marketing/Quảng Cáo
**Không có.** Chúng tôi không sử dụng bất kỳ cookies quảng cáo hoặc marketing nào.

### Cookies Mạng Xã Hội
**Không có.** Chúng tôi không nhúng theo dõi mạng xã hội trên trang web của chúng tôi.

## Lựa Chọn Cookie của Bạn

Bạn luôn kiểm soát cookies. Đây là các lựa chọn của bạn:

### 1. Sử Dụng Banner Đồng Ý Cookie của Chúng Tôi

Tùy thuộc vào vị trí của bạn, bạn sẽ thấy một banner đồng ý cookie khi bạn truy cập trang web của chúng tôi lần đầu tiên. Bạn có thể:
- Chấp nhận tất cả cookies
- Từ chối cookies không thiết yếu (có nghĩa là không có Google Analytics)
- Tùy chỉnh sở thích của bạn

### 2. Cài Đặt Trình Duyệt

Bạn có thể kiểm soát cookies thông qua trình duyệt web của mình. Hầu hết các trình duyệt cho phép bạn:
- Chặn tất cả cookies
- Chỉ chặn cookies bên thứ ba
- Xóa cookies hiện có
- Được thông báo khi các trang web đặt cookies

Xem phần "Cách Quản Lý Cookies" bên dưới để biết hướng dẫn cụ thể cho từng trình duyệt.

### 3. Từ Chối Google Analytics

Bạn có thể từ chối Google Analytics cụ thể bằng cách:
- Cài đặt [Tiện Ích Bổ Sung Trình Duyệt Từ Chối Google Analytics](https://tools.google.com/dlpage/gaoptout)
- Sử dụng cài đặt trong banner đồng ý cookie của chúng tôi

**Quan trọng:** Chặn hoặc xóa cookies sẽ không ảnh hưởng đến khả năng sử dụng trang web của chúng tôi. Tất cả chức năng cốt lõi hoạt động mà không cần cookies.

## Đồng Ý Dựa Trên Vị Trí Địa Lý

Chúng tôi tôn trọng luật bảo mật trên toàn thế giới và điều chỉnh quy trình đồng ý cookie của chúng tôi dựa trên vị trí của bạn:

### Liên Minh Châu Âu (EU) và Khu Vực Kinh Tế Châu Âu (EEA)
Nếu bạn truy cập từ EU/EEA, bạn sẽ thấy banner đồng ý tham gia. Chúng tôi sẽ không đặt cookies phân tích cho đến khi bạn đồng ý rõ ràng. Điều này tuân thủ Quy Định Bảo Vệ Dữ Liệu Chung (GDPR) và Chỉ Thị Quyền Riêng Tư Điện Tử.

### California, Hoa Kỳ
Nếu bạn truy cập từ California, bạn sẽ thấy thông báo bao gồm thông tin về quyền của bạn theo Đạo Luật Quyền Riêng Tư Người Tiêu Dùng California (CCPA), bao gồm quyền từ chối "bán" dữ liệu (mặc dù chúng tôi không bán dữ liệu của bạn).

### Các Vị Trí Khác
Khách truy cập từ các vị trí khác có thể thấy các thông báo khác nhau dựa trên luật bảo mật địa phương của họ. Chúng tôi có thể sử dụng thông báo ít xâm phạm hơn hoặc cách tiếp cận từ chối thay vì tham gia.

### Cách Vị Trí Địa Lý Hoạt Động
Chúng tôi xác định vị trí gần đúng của bạn dựa trên địa chỉ IP của bạn. Phát hiện này xảy ra trên thiết bị của bạn và không được lưu trữ hoặc theo dõi. Nó chỉ được sử dụng để hiển thị cho bạn banner đồng ý cookie phù hợp.

## Cách Quản Lý Cookies

Bạn có thể kiểm soát và xóa cookies thông qua cài đặt trình duyệt của mình. Đây là cách thực hiện:

### Google Chrome
1. Nhấp vào menu ba chấm (góc trên bên phải) > Cài đặt
2. Nhấp vào "Quyền riêng tư và bảo mật" > "Cookie và dữ liệu trang web khác"
3. Chọn cài đặt ưa thích của bạn hoặc nhấp vào "Xem tất cả cookie và dữ liệu trang web" để quản lý từng cookie
4. [Tìm hiểu thêm về cài đặt cookie của Chrome](https://support.google.com/chrome/answer/95647)

### Mozilla Firefox
1. Nhấp vào nút menu (góc trên bên phải) > Cài đặt
2. Chọn "Quyền riêng tư & Bảo mật"
3. Trong "Cookie và Dữ liệu Trang web," nhấp vào "Quản lý Dữ liệu" hoặc điều chỉnh cài đặt
4. [Tìm hiểu thêm về cài đặt cookie của Firefox](https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer)

### Apple Safari
1. Vào Cài đặt > Safari (iOS) hoặc menu Safari > Tùy chọn (Mac)
2. Nhấp vào "Quyền riêng tư"
3. Điều chỉnh cài đặt cookie hoặc nhấp vào "Quản lý Dữ liệu Trang web"
4. [Tìm hiểu thêm về cài đặt cookie của Safari](https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac)

### Microsoft Edge
1. Nhấp vào menu ba chấm (góc trên bên phải) > Cài đặt
2. Nhấp vào "Cookie và quyền trang web" > "Cookie và dữ liệu trang web"
3. Chọn cài đặt ưa thích của bạn hoặc nhấp vào "Quản lý và xóa cookie và dữ liệu trang web"
4. [Tìm hiểu thêm về cài đặt cookie của Edge](https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09)

### Từ Chối Google Analytics
Cài đặt [Tiện Ích Bổ Sung Trình Duyệt Từ Chối Google Analytics](https://tools.google.com/dlpage/gaoptout) chính thức để ngăn Google Analytics theo dõi bạn trên tất cả các trang web.

### Tác Động của Việc Chặn Cookies
Nếu bạn chặn hoặc xóa cookies:
- Trang web của chúng tôi sẽ tiếp tục hoạt động bình thường
- Chúng tôi sẽ không thể xem phân tích tổng hợp về cách trang web của chúng tôi được sử dụng
- Bạn có thể cần điều chỉnh lại sở thích cookie của mình nếu bạn xóa tất cả dữ liệu trình duyệt

## Cookies Bên Thứ Ba

Google Analytics là dịch vụ bên thứ ba duy nhất đặt cookies trên trang web của chúng tôi.

**Google Analytics** giúp chúng tôi hiểu cách khách truy cập sử dụng trang web của chúng tôi bằng cách thu thập thống kê sử dụng ẩn danh. Google xử lý thông tin này theo chính sách quyền riêng tư của họ.

Bạn có thể tìm hiểu thêm về cách Google sử dụng dữ liệu từ các trang web sử dụng dịch vụ của họ:
- [Chính Sách Quyền Riêng Tư của Google](https://policies.google.com/privacy)
- [Cách Google sử dụng thông tin từ các trang web hoặc ứng dụng sử dụng dịch vụ của chúng tôi](https://policies.google.com/technologies/partner-sites)

Chúng tôi đã cấu hình Google Analytics để:
- Ẩn danh địa chỉ IP
- Không chia sẻ dữ liệu với các dịch vụ khác của Google
- Không sử dụng dữ liệu cho mục đích quảng cáo của chính Google

**Không có bên thứ ba nào khác** có quyền truy cập vào thông tin được thu thập thông qua cookies trang web của chúng tôi.

## Thay Đổi Chính Sách Cookie Này

Chúng tôi có thể cập nhật Chính Sách Cookie này theo thời gian để phản ánh những thay đổi trong thực tiễn, công nghệ, yêu cầu pháp lý hoặc vì những lý do khác.

Khi chúng tôi thực hiện những thay đổi quan trọng, chúng tôi sẽ:
- Cập nhật ngày "Cập Nhật Lần Cuối" ở đầu chính sách này
- Thông báo cho bạn thông qua thông báo nổi bật trên trang web của chúng tôi
- Trong một số trường hợp, gửi thông báo email cho bạn (nếu bạn là người dùng đã đăng ký)

Chúng tôi khuyến khích bạn xem lại Chính Sách Cookie này định kỳ để được thông báo về cách chúng tôi sử dụng cookies.

Các thay đổi đối với Chính Sách Cookie này có hiệu lực khi được đăng. Việc bạn tiếp tục sử dụng trang web của chúng tôi sau khi các thay đổi được đăng có nghĩa là bạn chấp nhận chính sách đã cập nhật.

## Liên Hệ Với Chúng Tôi

Nếu bạn có câu hỏi về Chính Sách Cookie này, các cookies chúng tôi sử dụng hoặc các lựa chọn quyền riêng tư của bạn, vui lòng liên hệ với chúng tôi:

**Email:** support@greencardtrips.com
**Trang web:** https://greencardtrips.com

Chúng tôi ở đây để giúp đỡ và cam kết bảo vệ quyền riêng tư của bạn khi bạn theo đuổi hành trình đến quyền công dân Hoa Kỳ.

---

**Về Green Card Trips**

Green Card Trips là một ứng dụng di động giúp người có thẻ xanh Hoa Kỳ theo dõi sự hiện diện thực tế của họ tại Hoa Kỳ để đủ điều kiện cho quyền công dân. Chúng tôi lưu trữ tất cả dữ liệu chuyến đi của bạn cục bộ trên thiết bị của bạn - chúng tôi không bao giờ thu thập, lưu trữ hoặc chia sẻ thông tin cá nhân của bạn với bất kỳ ai. Quyền riêng tư và bảo mật của bạn là ưu tiên hàng đầu của chúng tôi khi bạn hướng tới việc đạt được giấc mơ Mỹ của mình.
`,
    },
    "zh-CN": {
      seo: {
        title: "Cookie政策 - Green Card Trips",
        description: "Green Card Trips网站的Cookie政策",
      },
      content: `# Cookie政策

**最后更新：2025年1月15日**
**生效日期：2025年1月15日**

## 简介

本Cookie政策解释了Green Card Trips（"我们"、"我们的"或"我们公司"）如何在我们的网站https://greencardtrips.com（"网站"）上使用cookie和类似技术。

我们相信透明度和您的隐私权。本政策将帮助您了解什么是cookie，我们使用哪些cookie（剧透：非常少），以及您如何控制它们。

本Cookie政策应与我们的隐私政策一起阅读，隐私政策解释了我们如何处理您的个人信息。

## 什么是Cookie？

Cookie是网站在您访问时放置在您的设备（计算机、智能手机或平板电脑）上的小型文本文件。它们帮助网站记住有关您访问的信息，例如您的偏好设置或您查看过的页面。

将cookie想象成书签 - 它们帮助网站记住您去过哪里以及您做了什么，这样您的下次访问可以更加个性化和高效。

### Cookie类型

**第一方cookie**由您访问的网站设置（在本例中为greencardtrips.com）。

**第三方cookie**由网站所有者以外的其他人设置 - 通常是网站使用的服务，如分析工具。

Cookie可以是**会话cookie**（关闭浏览器时删除）或**持久性cookie**（在您的设备上保留设定的时间或直到您删除它们）。

## 我们使用的Cookie

**我们仅使用Google Analytics cookie来了解访问者如何使用我们的网站。**

我们不使用：
- 广告cookie
- 社交媒体跟踪cookie
- 营销cookie
- 分析cookie
- 向第三方出售您数据的cookie

以下是我们使用的具体cookie：

| Cookie名称 | 提供商 | 用途 | 持续时间 | 类型 |
|-----------|--------|------|---------|------|
| _ga | Google Analytics | 区分唯一访问者并计算访问者、会话和广告系列数据 | 2年 | 分析 |
| _ga_<container-id> | Google Analytics | 存储和计算页面浏览量 | 2年 | 分析 |
| _gid | Google Analytics | 区分唯一访问者 | 24小时 | 分析 |

就这些。这三个cookie是我们使用的唯一cookie。

## 我们为什么使用Cookie

我们使用Google Analytics cookie来：

- **了解网站流量**：查看有多少人访问我们的网站以及他们查看了哪些页面
- **改善用户体验**：确定哪些内容最有帮助，以便我们创建更多此类内容
- **支持我们的社区**：了解绿卡持有者在获得公民身份的道路上最需要什么信息
- **修复问题**：检测技术问题和损坏的链接

我们不使用cookie来：
- 在互联网上跟踪您
- 向您显示定向广告
- 将您的信息出售给第三方
- 建立关于您的详细档案
- 跟踪您到其他网站

您的隐私对我们很重要。我们的移动应用程序将您的所有旅行数据本地存储在您的设备上，我们对我们的网站采用同样的隐私优先方法。

## Cookie类别

### 严格必要的Cookie
**无。**我们的网站在没有任何cookie的情况下也能完美运行。我们不使用cookie来实现网站的基本功能。

### 分析Cookie
**仅Google Analytics。**这些cookie帮助我们了解访问者如何使用我们的网站。它们是可选的 - 您可以选择退出，仍然可以正常使用我们的网站。

### 营销/广告Cookie
**无。**我们不使用任何广告或营销cookie。

### 社交媒体Cookie
**无。**我们不在网站上嵌入社交媒体跟踪。

## 您的Cookie选择

您始终可以控制cookie。以下是您的选择：

### 1. 使用我们的Cookie同意横幅

根据您所在的位置，当您首次访问我们的网站时，您会看到一个cookie同意横幅。您可以：
- 接受所有cookie
- 拒绝非必要cookie（这意味着没有Google Analytics）
- 自定义您的偏好设置

### 2. 浏览器设置

您可以通过Web浏览器控制cookie。大多数浏览器允许您：
- 阻止所有cookie
- 仅阻止第三方cookie
- 删除现有cookie
- 在网站设置cookie时收到通知

请参阅下面的"如何管理Cookie"部分，了解特定于浏览器的说明。

### 3. Google Analytics选择退出

您可以通过以下方式专门选择退出Google Analytics：
- 安装[Google Analytics选择退出浏览器插件](https://tools.google.com/dlpage/gaoptout)
- 使用我们cookie同意横幅中的设置

**重要提示：**阻止或删除cookie不会影响您使用我们网站的能力。所有核心功能都可以在没有cookie的情况下运行。

## 基于地理位置的同意

我们尊重世界各地的隐私法，并根据您所在的位置调整我们的cookie同意流程：

### 欧盟（EU）和欧洲经济区（EEA）
如果您从欧盟/欧洲经济区访问，您将看到选择加入同意横幅。在您明确同意之前，我们不会设置分析cookie。这符合《通用数据保护条例》（GDPR）和电子隐私指令。

### 美国加利福尼亚州
如果您从加利福尼亚州访问，您将看到一条通知，其中包括有关您根据《加利福尼亚消费者隐私法》（CCPA）享有的权利的信息，包括选择退出数据"销售"的权利（尽管我们不出售您的数据）。

### 其他位置
来自其他位置的访问者可能会根据其当地隐私法看到不同的通知。我们可能使用不太具侵入性的通知或选择退出方法而不是选择加入。

### 地理位置如何工作
我们根据您的IP地址确定您的大致位置。此检测发生在您的设备上，不会被存储或跟踪。它仅用于向您显示适当的cookie同意横幅。

## 如何管理Cookie

您可以通过浏览器设置控制和删除cookie。方法如下：

### Google Chrome
1. 点击三点菜单（右上角）> 设置
2. 点击"隐私和安全">"Cookie和其他网站数据"
3. 选择您的首选设置或点击"查看所有Cookie和网站数据"以管理单个cookie
4. [了解有关Chrome cookie设置的更多信息](https://support.google.com/chrome/answer/95647)

### Mozilla Firefox
1. 点击菜单按钮（右上角）> 设置
2. 选择"隐私与安全"
3. 在"Cookie和网站数据"下，点击"管理数据"或调整设置
4. [了解有关Firefox cookie设置的更多信息](https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer)

### Apple Safari
1. 转到设置 > Safari（iOS）或Safari菜单 > 偏好设置（Mac）
2. 点击"隐私"
3. 调整cookie设置或点击"管理网站数据"
4. [了解有关Safari cookie设置的更多信息](https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac)

### Microsoft Edge
1. 点击三点菜单（右上角）> 设置
2. 点击"Cookie和网站权限">"Cookie和网站数据"
3. 选择您的首选设置或点击"管理和删除Cookie和网站数据"
4. [了解有关Edge cookie设置的更多信息](https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09)

### Google Analytics选择退出
安装官方[Google Analytics选择退出浏览器插件](https://tools.google.com/dlpage/gaoptout)以防止Google Analytics在所有网站上跟踪您。

### 阻止Cookie的影响
如果您阻止或删除cookie：
- 我们的网站将继续正常运行
- 我们将无法看到有关如何使用我们网站的汇总分析
- 如果您清除所有浏览器数据，您可能需要再次调整您的cookie偏好设置

## 第三方Cookie

Google Analytics是唯一在我们网站上设置cookie的第三方服务。

**Google Analytics**通过收集匿名使用统计信息帮助我们了解访问者如何使用我们的网站。Google根据其隐私政策处理此信息。

您可以了解有关Google如何使用来自使用其服务的网站的数据的更多信息：
- [Google隐私政策](https://policies.google.com/privacy)
- [Google如何使用来自使用我们服务的网站或应用的信息](https://policies.google.com/technologies/partner-sites)

我们已配置Google Analytics以：
- 匿名化IP地址
- 不与其他Google服务共享数据
- 不将数据用于Google自己的广告目的

**没有其他第三方**可以访问通过我们网站cookie收集的信息。

## 本Cookie政策的变更

我们可能会不时更新本Cookie政策，以反映我们的做法、技术、法律要求的变化或出于其他原因。

当我们做出重大变更时，我们将：
- 更新本政策顶部的"最后更新"日期
- 通过我们网站上的醒目通知通知您
- 在某些情况下，向您发送电子邮件通知（如果您是注册用户）

我们鼓励您定期查看本Cookie政策，以了解我们如何使用cookie。

本Cookie政策的变更在发布时生效。在发布变更后您继续使用我们的网站意味着您接受更新后的政策。

## 联系我们

如果您对本Cookie政策、我们使用的cookie或您的隐私选择有任何疑问，请联系我们：

**电子邮件：** support@greencardtrips.com
**网站：** https://greencardtrips.com

我们随时为您提供帮助，并致力于在您追求美国公民身份的过程中保护您的隐私。

---

**关于Green Card Trips**

Green Card Trips是一款移动应用程序，可帮助美国绿卡持有者跟踪他们在美国的实际存在时间，以获得公民身份资格。我们将您的所有旅行数据本地存储在您的设备上 - 我们从不收集、存储或与任何人共享您的个人信息。在您努力实现美国梦的过程中，您的隐私和安全是我们的首要任务。
`,
    },
  },
  termsAndConditions: {
    en: {
      seo: {
        title: "Terms and Conditions - Green Card Trips",
        description: "Terms and Conditions for Green Card Trips mobile app and website",
      },
      content: `# Terms and Conditions

**Effective Date:** January 15, 2025
**Last Updated:** January 15, 2025

## Introduction

Welcome to Green Card Trips. These Terms and Conditions ("Terms") govern your use of the Green Card Trips mobile application (the "App") and our website at greencardtrips.com (the "Website"), collectively referred to as the "Service."

By downloading, installing, accessing, or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Service.

## About Green Card Trips

Green Card Trips is an informational tool designed to help U.S. Lawful Permanent Residents (green card holders) track their physical presence in the United States for naturalization eligibility purposes. The Service provides calculations and estimates based on publicly available USCIS rules and requirements.

## Important Legal Disclaimers

### Not Legal Advice

**THE SERVICE DOES NOT PROVIDE LEGAL ADVICE.** Green Card Trips is an informational tool only. The content, features, calculations, and information provided through the Service are for general informational and educational purposes only and do not constitute legal advice.

Immigration law is complex, subject to change, and varies based on individual circumstances. This tool cannot and does not replace the advice of a qualified immigration attorney who can evaluate your specific situation.

### No Attorney-Client Relationship

Your use of Green Card Trips does not create an attorney-client relationship between you and the creators of this Service. We are not a law firm and do not practice law.

### Not Affiliated with USCIS

Green Card Trips is an independent, third-party application and is **not affiliated with, endorsed by, or connected to** the U.S. Citizenship and Immigration Services (USCIS), the Department of Homeland Security (DHS), or any other government agency.

## Your Responsibilities

### Accuracy of Information

**YOU ARE SOLELY RESPONSIBLE** for the accuracy and completeness of all information you enter into the Service, including but not limited to:

- Your green card issue date ("Resident Since" date)
- Trip departure and return dates
- Eligibility path (3-year or 5-year rule)
- All other profile and travel information

**Inaccurate data will produce inaccurate results.** Always verify that your input data is correct.

### Verification with Official Sources

You must verify all eligibility calculations, dates, and recommendations with:

1. **Official USCIS sources** - Including the USCIS website, official forms, and guidance documents
2. **A qualified immigration attorney** - Who can provide personalized legal advice based on your specific circumstances
3. **Your actual immigration records** - Including your green card, passport stamps, and travel documents

The calculations provided by Green Card Trips are estimates based on the data you provide and publicly available rules. They may not account for all nuances of your individual situation.

### Proper Use

You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:

- Use the Service for any illegal or fraudulent purpose
- Enter false or misleading information
- Attempt to reverse engineer, decompile, or hack the Service
- Copy, modify, distribute, or create derivative works of the Service
- Use the Service in any way that could damage, disable, or impair the Service
- Remove or alter any copyright, trademark, or other proprietary notices

## Intellectual Property

### Ownership

The Service, including all content, features, functionality, software, design, text, graphics, logos, and trademarks, is owned by Green Card Trips and is protected by United States and international copyright, trademark, and other intellectual property laws.

### License

We grant you a limited, non-exclusive, non-transferable, revocable license to:

- Download and use the mobile App on your personal device(s) for your personal, non-commercial use
- Access and use the Website for your personal, non-commercial use

This license does not include any right to:

- Resell or make commercial use of the Service
- Modify or make derivative works based on the Service
- Download or copy any content for the benefit of any third party
- Use any data mining, robots, or similar automated data gathering tools

## Disclaimers and Limitations of Liability

### As-Is Basis

THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.

TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:

- Warranties of merchantability, fitness for a particular purpose, and non-infringement
- Warranties regarding the accuracy, reliability, or completeness of any information
- Warranties that the Service will be uninterrupted, timely, secure, or error-free
- Warranties regarding results obtained from using the Service

### Immigration Law Changes

Immigration laws, policies, and USCIS interpretations change frequently. Green Card Trips may not reflect the most current legal requirements or policy updates. You must verify current requirements with USCIS or an immigration attorney.

### Calculation Limitations

While we strive for accuracy, the Service's calculations and estimates:

- Are based on general USCIS rules and may not account for exceptions or special circumstances
- Depend entirely on the accuracy of the data you provide
- May not reflect recent changes in immigration law or policy
- Cannot predict how USCIS will interpret or apply rules to your specific case
- Do not guarantee approval of your naturalization application

### Limitation of Liability

TO THE FULLEST EXTENT PERMITTED BY LAW, GREEN CARD TRIPS AND ITS DEVELOPERS, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR:

1. **Any indirect, incidental, special, consequential, or punitive damages**, including but not limited to:
   - Loss of profits, revenue, data, or business opportunities
   - Denial of naturalization application
   - Immigration status issues
   - Missed deadlines or filing windows
   - Any other intangible losses

2. **Any damages resulting from:**
   - Your use of or inability to use the Service
   - Errors, inaccuracies, or omissions in calculations or information
   - Data loss or corruption
   - Unauthorized access to or alteration of your data on your device
   - Any other matter relating to the Service

**EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.**

IN JURISDICTIONS THAT DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, OUR LIABILITY IS LIMITED TO THE GREATEST EXTENT PERMITTED BY LAW.

Because Green Card Trips is a free or low-cost tool provided as-is, in no event shall our total liability to you for all damages, losses, and causes of action exceed the amount you paid to use the Service (if any), or $10.00 USD, whichever is greater.

## User Conduct and Eligibility

### Age Requirement

You must be at least 18 years old to use the Service. By using the Service, you represent that you are at least 18 years old.

### Lawful Permanent Resident Status

This Service is designed for individuals who currently hold Lawful Permanent Resident (green card) status in the United States. While others may download the App, the calculations and features are specifically designed for green card holders pursuing naturalization.

## No Accounts or Registration

Green Card Trips does not require you to create an account or provide registration information. All your data is stored locally on your device. We do not maintain user accounts on any servers.

## Data and Privacy

Your use of the Service is also governed by our Privacy Policy. Please review our Privacy Policy to understand how we handle information.

In summary:
- All your data is stored locally on your device
- We do not collect, access, or transmit your personal information
- You have complete control over your data

## Website Analytics and Cookies

### Analytics Usage

We use Google Analytics on our website to understand how visitors use the Service and to improve the user experience. This helps us identify which features are most helpful, optimize content for green card holders, and improve our website's effectiveness.

The use of analytics is limited to our website only. The Green Card Trips mobile app does not use any analytics or tracking—all your immigration data stays private on your device as described in our Privacy Policy.

### Cookies and Tracking

Our website uses cookies solely for analytics purposes through Google Analytics. These cookies help us understand website usage patterns and improve the site for green card holders.

**Important:**
- The mobile App does not use cookies or any tracking technologies
- All cookies used on the website are optional and subject to your consent
- You can opt out of analytics cookies at any time through your browser settings or our cookie consent banner

For detailed information about:
- What cookies we use
- Why we use them
- How to manage cookie preferences
- Your rights regarding cookies

Please refer to our Cookie Policy and Privacy Policy.

Your use of the website with cookies enabled constitutes acceptance of our use of analytics cookies as described in our Cookie Policy. If you do not consent to cookies, you may disable them in your browser settings, though this may affect some website functionality (note: the core information remains accessible without cookies).

## App Store Terms

If you downloaded the App from the Apple App Store, you acknowledge and agree that:

- These Terms are between you and Green Card Trips, not Apple
- Apple has no obligation to provide maintenance or support for the App
- Apple is not responsible for any claims related to the App
- You must comply with all applicable third-party terms when using the App

## Updates and Modifications

### Service Updates

We may update, modify, or discontinue the Service (or any part of it) at any time, with or without notice. We are not liable if any part of the Service is unavailable at any time.

### Changes to Terms

We reserve the right to modify these Terms at any time. If we make material changes, we will notify you by updating the "Last Updated" date and, where appropriate, through the App or Website.

Your continued use of the Service after changes are posted constitutes your acceptance of the revised Terms. If you do not agree to the new Terms, you must stop using the Service.

## Indemnification

You agree to indemnify, defend, and hold harmless Green Card Trips and its developers, officers, employees, and agents from any claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising from:

1. Your use or misuse of the Service
2. Your violation of these Terms
3. Your violation of any rights of another person or entity
4. Any inaccurate or false information you provide
5. Any decisions you make based on information from the Service

## Governing Law and Dispute Resolution

### Governing Law

These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law principles.

### Jurisdiction

You agree that any legal action or proceeding arising out of or relating to these Terms or the Service shall be brought exclusively in the federal or state courts located in California, and you consent to the personal jurisdiction of such courts.

### Dispute Resolution

Before filing any formal legal action, you agree to first contact us at support@greencardtrips.com to attempt to resolve any dispute informally.

## Severability

If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect.

## Entire Agreement

These Terms, together with our Privacy Policy, constitute the entire agreement between you and Green Card Trips regarding the Service and supersede any prior agreements.

## No Waiver

Our failure to enforce any right or provision of these Terms will not be deemed a waiver of such right or provision.

## Contact Us

If you have any questions, concerns, or feedback about these Terms, please contact us:

**Email:** support@greencardtrips.com
**Website:** https://greencardtrips.com

We will respond to your inquiry within a reasonable timeframe.

---

## Summary

By using Green Card Trips, you acknowledge that:

✓ This is an informational tool, not legal advice
✓ You are responsible for verifying all calculations with USCIS or an attorney
✓ You must enter accurate information for accurate results
✓ We are not liable for any immigration-related decisions or outcomes
✓ You have read, understood, and agree to these Terms

**When in doubt, consult an immigration attorney. Your citizenship application is too important to rely solely on any automated tool.**

`,
    },
    es: {
      seo: {
        title: "Términos y Condiciones - Green Card Trips",
        description: "Términos y Condiciones para la aplicación móvil y sitio web de Green Card Trips",
      },
      content: `# Términos y Condiciones

**Fecha de Vigencia:** 15 de enero de 2025
**Última Actualización:** 15 de enero de 2025

## Introducción

Bienvenido a Green Card Trips. Estos Términos y Condiciones ("Términos") rigen su uso de la aplicación móvil Green Card Trips (la "Aplicación") y nuestro sitio web en greencardtrips.com (el "Sitio Web"), colectivamente denominados como el "Servicio".

Al descargar, instalar, acceder o utilizar el Servicio, usted acepta estar sujeto a estos Términos. Si no está de acuerdo con estos Términos, por favor no utilice el Servicio.

## Acerca de Green Card Trips

Green Card Trips es una herramienta informativa diseñada para ayudar a los Residentes Permanentes Legales de EE.UU. (titulares de green card) a rastrear su presencia física en los Estados Unidos para propósitos de elegibilidad de naturalización. El Servicio proporciona cálculos y estimaciones basados en reglas y requisitos de USCIS públicamente disponibles.

## Descargos de Responsabilidad Legal Importantes

### No es Asesoría Legal

**EL SERVICIO NO PROPORCIONA ASESORÍA LEGAL.** Green Card Trips es solo una herramienta informativa. El contenido, características, cálculos e información proporcionados a través del Servicio son únicamente para propósitos informativos y educativos generales y no constituyen asesoría legal.

La ley de inmigración es compleja, sujeta a cambios, y varía según las circunstancias individuales. Esta herramienta no puede y no reemplaza el consejo de un abogado de inmigración calificado que pueda evaluar su situación específica.

### No Existe Relación Abogado-Cliente

Su uso de Green Card Trips no crea una relación abogado-cliente entre usted y los creadores de este Servicio. No somos un bufete de abogados y no practicamos derecho.

### No Afiliado con USCIS

Green Card Trips es una aplicación independiente de terceros y **no está afiliada, respaldada ni conectada** con el Servicio de Ciudadanía e Inmigración de los Estados Unidos (USCIS), el Departamento de Seguridad Nacional (DHS) ni ninguna otra agencia gubernamental.

## Sus Responsabilidades

### Exactitud de la Información

**USTED ES EL ÚNICO RESPONSABLE** por la exactitud e integridad de toda la información que ingresa en el Servicio, incluyendo pero no limitado a:

- La fecha de emisión de su green card (fecha "Residente Desde")
- Fechas de salida y regreso de viajes
- Ruta de elegibilidad (regla de 3 años o 5 años)
- Toda otra información de perfil y viaje

**Datos inexactos producirán resultados inexactos.** Siempre verifique que sus datos de entrada sean correctos.

### Verificación con Fuentes Oficiales

Debe verificar todos los cálculos de elegibilidad, fechas y recomendaciones con:

1. **Fuentes oficiales de USCIS** - Incluyendo el sitio web de USCIS, formularios oficiales y documentos de orientación
2. **Un abogado de inmigración calificado** - Quien pueda proporcionar asesoría legal personalizada basada en sus circunstancias específicas
3. **Sus registros de inmigración reales** - Incluyendo su green card, sellos de pasaporte y documentos de viaje

Los cálculos proporcionados por Green Card Trips son estimaciones basadas en los datos que usted proporciona y reglas públicamente disponibles. Pueden no tener en cuenta todos los matices de su situación individual.

### Uso Apropiado

Usted acepta usar el Servicio solo para propósitos legales y de acuerdo con estos Términos. Usted acepta no:

- Usar el Servicio para ningún propósito ilegal o fraudulento
- Ingresar información falsa o engañosa
- Intentar realizar ingeniería inversa, descompilar o hackear el Servicio
- Copiar, modificar, distribuir o crear obras derivadas del Servicio
- Usar el Servicio de cualquier manera que pueda dañar, deshabilitar o deteriorar el Servicio
- Eliminar o alterar cualquier aviso de derechos de autor, marca registrada u otros avisos de propiedad

## Propiedad Intelectual

### Titularidad

El Servicio, incluyendo todo el contenido, características, funcionalidad, software, diseño, texto, gráficos, logotipos y marcas registradas, es propiedad de Green Card Trips y está protegido por las leyes de derechos de autor, marcas registradas y otras leyes de propiedad intelectual de Estados Unidos e internacionales.

### Licencia

Le otorgamos una licencia limitada, no exclusiva, intransferible y revocable para:

- Descargar y usar la Aplicación móvil en su(s) dispositivo(s) personal(es) para su uso personal y no comercial
- Acceder y usar el Sitio Web para su uso personal y no comercial

Esta licencia no incluye ningún derecho a:

- Revender o hacer uso comercial del Servicio
- Modificar o crear obras derivadas basadas en el Servicio
- Descargar o copiar cualquier contenido para beneficio de terceros
- Usar minería de datos, robots o herramientas similares de recopilación automática de datos

## Descargos de Responsabilidad y Limitaciones de Responsabilidad

### Base "Tal Como Está"

EL SERVICIO SE PROPORCIONA EN UNA BASE "TAL COMO ESTÁ" Y "SEGÚN DISPONIBILIDAD" SIN GARANTÍAS DE NINGÚN TIPO, YA SEAN EXPRESAS O IMPLÍCITAS.

EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY, RENUNCIAMOS A TODAS LAS GARANTÍAS, EXPRESAS O IMPLÍCITAS, INCLUYENDO PERO NO LIMITADO A:

- Garantías de comerciabilidad, idoneidad para un propósito particular y no infracción
- Garantías con respecto a la exactitud, confiabilidad o integridad de cualquier información
- Garantías de que el Servicio será ininterrumpido, oportuno, seguro o libre de errores
- Garantías con respecto a los resultados obtenidos del uso del Servicio

### Cambios en la Ley de Inmigración

Las leyes de inmigración, políticas e interpretaciones de USCIS cambian frecuentemente. Green Card Trips puede no reflejar los requisitos legales más actuales o actualizaciones de políticas. Debe verificar los requisitos actuales con USCIS o un abogado de inmigración.

### Limitaciones de Cálculo

Si bien nos esforzamos por la exactitud, los cálculos y estimaciones del Servicio:

- Se basan en reglas generales de USCIS y pueden no tener en cuenta excepciones o circunstancias especiales
- Dependen enteramente de la exactitud de los datos que usted proporciona
- Pueden no reflejar cambios recientes en la ley o política de inmigración
- No pueden predecir cómo USCIS interpretará o aplicará las reglas a su caso específico
- No garantizan la aprobación de su solicitud de naturalización

### Limitación de Responsabilidad

EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY, GREEN CARD TRIPS Y SUS DESARROLLADORES, FUNCIONARIOS, DIRECTORES, EMPLEADOS Y AGENTES NO SERÁN RESPONSABLES DE:

1. **Ningún daño indirecto, incidental, especial, consecuente o punitivo**, incluyendo pero no limitado a:
   - Pérdida de ganancias, ingresos, datos u oportunidades comerciales
   - Denegación de solicitud de naturalización
   - Problemas de estado migratorio
   - Fechas límite o ventanas de presentación perdidas
   - Cualquier otra pérdida intangible

2. **Cualquier daño resultante de:**
   - Su uso o incapacidad de usar el Servicio
   - Errores, inexactitudes u omisiones en cálculos o información
   - Pérdida o corrupción de datos
   - Acceso no autorizado o alteración de sus datos en su dispositivo
   - Cualquier otro asunto relacionado con el Servicio

**INCLUSO SI SE NOS HA INFORMADO DE LA POSIBILIDAD DE TALES DAÑOS.**

EN JURISDICCIONES QUE NO PERMITEN LA EXCLUSIÓN O LIMITACIÓN DE RESPONSABILIDAD POR DAÑOS CONSECUENTES O INCIDENTALES, NUESTRA RESPONSABILIDAD ESTÁ LIMITADA EN LA MAYOR MEDIDA PERMITIDA POR LA LEY.

Debido a que Green Card Trips es una herramienta gratuita o de bajo costo proporcionada tal como está, en ningún caso nuestra responsabilidad total hacia usted por todos los daños, pérdidas y causas de acción excederá el monto que usted pagó por usar el Servicio (si corresponde), o $10.00 USD, lo que sea mayor.

## Conducta del Usuario y Elegibilidad

### Requisito de Edad

Debe tener al menos 18 años de edad para usar el Servicio. Al usar el Servicio, usted declara que tiene al menos 18 años de edad.

### Estado de Residente Permanente Legal

Este Servicio está diseñado para individuos que actualmente tienen el estado de Residente Permanente Legal (green card) en los Estados Unidos. Aunque otros pueden descargar la Aplicación, los cálculos y características están específicamente diseñados para titulares de green card que buscan la naturalización.

## Sin Cuentas o Registro

Green Card Trips no requiere que cree una cuenta o proporcione información de registro. Todos sus datos se almacenan localmente en su dispositivo. No mantenemos cuentas de usuario en ningún servidor.

## Datos y Privacidad

Su uso del Servicio también está regido por nuestra Política de Privacidad. Por favor revise nuestra Política de Privacidad para entender cómo manejamos la información.

En resumen:
- Todos sus datos se almacenan localmente en su dispositivo
- No recopilamos, accedemos ni transmitimos su información personal
- Usted tiene control completo sobre sus datos

## Análisis Web y Cookies

### Uso de Análisis

Utilizamos Google Analytics en nuestro sitio web para comprender cómo los visitantes usan el Servicio y para mejorar la experiencia del usuario. Esto nos ayuda a identificar qué funciones son más útiles, optimizar el contenido para los titulares de tarjetas verdes y mejorar la efectividad de nuestro sitio web.

El uso de análisis está limitado únicamente a nuestro sitio web. La aplicación móvil Green Card Trips no utiliza ningún tipo de análisis o seguimiento—todos sus datos de inmigración permanecen privados en su dispositivo según se describe en nuestra Política de Privacidad.

### Cookies y Seguimiento

Nuestro sitio web utiliza cookies únicamente con fines de análisis a través de Google Analytics. Estas cookies nos ayudan a comprender los patrones de uso del sitio web y mejorar el sitio para los titulares de tarjetas verdes.

**Importante:**
- La aplicación móvil no utiliza cookies ni ninguna tecnología de seguimiento
- Todas las cookies utilizadas en el sitio web son opcionales y están sujetas a su consentimiento
- Puede optar por no recibir cookies de análisis en cualquier momento a través de la configuración de su navegador o nuestro banner de consentimiento de cookies

Para obtener información detallada sobre:
- Qué cookies utilizamos
- Por qué las utilizamos
- Cómo gestionar las preferencias de cookies
- Sus derechos con respecto a las cookies

Consulte nuestra Política de Cookies y Política de Privacidad.

Su uso del sitio web con las cookies habilitadas constituye la aceptación de nuestro uso de cookies de análisis según se describe en nuestra Política de Cookies. Si no consiente el uso de cookies, puede deshabilitarlas en la configuración de su navegador, aunque esto puede afectar algunas funcionalidades del sitio web (nota: la información principal permanece accesible sin cookies).

## Términos de la App Store

Si descargó la Aplicación desde el Apple App Store, usted reconoce y acepta que:

- Estos Términos son entre usted y Green Card Trips, no Apple
- Apple no tiene obligación de proporcionar mantenimiento o soporte para la Aplicación
- Apple no es responsable de ningún reclamo relacionado con la Aplicación
- Debe cumplir con todos los términos de terceros aplicables al usar la Aplicación

## Actualizaciones y Modificaciones

### Actualizaciones del Servicio

Podemos actualizar, modificar o discontinuar el Servicio (o cualquier parte de él) en cualquier momento, con o sin previo aviso. No somos responsables si alguna parte del Servicio no está disponible en cualquier momento.

### Cambios a los Términos

Nos reservamos el derecho de modificar estos Términos en cualquier momento. Si realizamos cambios materiales, le notificaremos actualizando la fecha "Última Actualización" y, cuando sea apropiado, a través de la Aplicación o el Sitio Web.

Su uso continuado del Servicio después de que se publiquen los cambios constituye su aceptación de los Términos revisados. Si no está de acuerdo con los nuevos Términos, debe dejar de usar el Servicio.

## Indemnización

Usted acepta indemnizar, defender y eximir de responsabilidad a Green Card Trips y sus desarrolladores, funcionarios, empleados y agentes de cualquier reclamo, responsabilidad, daño, pérdida, costo y gasto (incluyendo honorarios razonables de abogados) que surjan de:

1. Su uso o mal uso del Servicio
2. Su violación de estos Términos
3. Su violación de cualquier derecho de otra persona o entidad
4. Cualquier información inexacta o falsa que proporcione
5. Cualquier decisión que tome basada en información del Servicio

## Ley Aplicable y Resolución de Disputas

### Ley Aplicable

Estos Términos se regirán e interpretarán de acuerdo con las leyes del Estado de California, Estados Unidos, sin tener en cuenta sus principios de conflicto de leyes.

### Jurisdicción

Usted acepta que cualquier acción legal o procedimiento que surja de o esté relacionado con estos Términos o el Servicio se presentará exclusivamente en los tribunales federales o estatales ubicados en California, y usted consiente la jurisdicción personal de dichos tribunales.

### Resolución de Disputas

Antes de presentar cualquier acción legal formal, usted acepta primero contactarnos en support@greencardtrips.com para intentar resolver cualquier disputa de manera informal.

## Divisibilidad

Si alguna disposición de estos Términos se considera inválida, ilegal o inaplicable, las disposiciones restantes continuarán en pleno vigor y efecto.

## Acuerdo Completo

Estos Términos, junto con nuestra Política de Privacidad, constituyen el acuerdo completo entre usted y Green Card Trips con respecto al Servicio y reemplazan cualquier acuerdo anterior.

## No Renuncia

Nuestra falta de hacer cumplir cualquier derecho o disposición de estos Términos no se considerará una renuncia a dicho derecho o disposición.

## Contáctenos

Si tiene alguna pregunta, inquietud o comentario sobre estos Términos, por favor contáctenos:

**Correo Electrónico:** support@greencardtrips.com
**Sitio Web:** https://greencardtrips.com

Responderemos a su consulta dentro de un plazo razonable.

---

## Resumen

Al usar Green Card Trips, usted reconoce que:

✓ Esta es una herramienta informativa, no asesoría legal
✓ Usted es responsable de verificar todos los cálculos con USCIS o un abogado
✓ Debe ingresar información precisa para obtener resultados precisos
✓ No somos responsables de ninguna decisión o resultado relacionado con inmigración
✓ Ha leído, entendido y acepta estos Términos

**En caso de duda, consulte a un abogado de inmigración. Su solicitud de ciudadanía es demasiado importante para depender únicamente de cualquier herramienta automatizada.**

`,
    },
    tl: {
      seo: {
        title: "Mga Tuntunin at Kondisyon - Green Card Trips",
        description: "Mga Tuntunin at Kondisyon para sa mobile app at website ng Green Card Trips",
      },
      content: `# Mga Tuntunin at Kondisyon

**Petsa ng Pagkakabisa:** Enero 15, 2025
**Huling Na-update:** Enero 15, 2025

## Panimula

Maligayang pagdating sa Green Card Trips. Ang Mga Tuntunin at Kondisyong ito ("Mga Tuntunin") ay namamahala sa inyong paggamit ng Green Card Trips mobile application (ang "App") at ng aming website sa greencardtrips.com (ang "Website"), na sama-samang tinutukoy bilang ang "Serbisyo".

Sa pag-download, pag-install, pag-access, o paggamit ng Serbisyo, sumasang-ayon kayo na sumunod sa Mga Tuntuning ito. Kung hindi kayo sumasang-ayon sa Mga Tuntuning ito, mangyaring huwag gamitin ang Serbisyo.

## Tungkol sa Green Card Trips

Ang Green Card Trips ay isang informational tool na dinisenyo upang tulungan ang mga U.S. Lawful Permanent Residents (mga green card holders) na subaybayan ang kanilang pisikal na presensya sa Estados Unidos para sa mga layunin ng eligibility sa naturalization. Ang Serbisyo ay nagbibigay ng mga kalkulasyon at pagtatantya batay sa mga pampublikong available na mga tuntunin at kinakailangan ng USCIS.

## Mahalagang Legal na Mga Disclaimer

### Hindi Legal Advice

**ANG SERBISYO AY HINDI NAGBIBIGAY NG LEGAL ADVICE.** Ang Green Card Trips ay isang informational tool lamang. Ang content, features, mga kalkulasyon, at impormasyong ibinibigay sa pamamagitan ng Serbisyo ay para lamang sa pangkalahatang impormatibo at pang-edukasyon na mga layunin at hindi bumubuo ng legal advice.

Ang batas sa immigration ay kumplikado, napapailalim sa pagbabago, at nag-iiba batay sa indibidwal na mga sitwasyon. Ang tool na ito ay hindi maaaring at hindi pumapalit sa payo ng isang kwalipikadong immigration attorney na maaaring suriin ang inyong partikular na sitwasyon.

### Walang Relasyon na Attorney-Client

Ang inyong paggamit ng Green Card Trips ay hindi lumilikha ng relasyon na attorney-client sa pagitan ninyo at ng mga lumikha ng Serbisyong ito. Kami ay hindi isang law firm at hindi kami nagsasagawa ng law.

### Hindi Kaanib ng USCIS

Ang Green Card Trips ay isang independiyente, third-party application at **hindi kaanib, indorso, o konektado sa** U.S. Citizenship and Immigration Services (USCIS), ang Department of Homeland Security (DHS), o anumang iba pang ahensya ng gobyerno.

## Ang Inyong mga Responsibilidad

### Katumpakan ng Impormasyon

**KAYO AY NATATANGING RESPONSABLE** para sa katumpakan at kabuuan ng lahat ng impormasyong inilalagay ninyo sa Serbisyo, kasama ngunit hindi limitado sa:

- Ang petsa ng pagbibigay ng inyong green card ("Residente Mula Noong" petsa)
- Mga petsa ng pag-alis at pagbabalik ng biyahe
- Landas ng eligibility (3-taon o 5-taon na tuntunin)
- Lahat ng iba pang impormasyon ng profile at paglalakbay

**Ang hindi tumpak na data ay maglalabas ng hindi tumpak na mga resulta.** Palaging i-verify na tama ang inyong input data.

### Pag-verify sa Opisyal na Mga Mapagkukunan

Dapat ninyong i-verify ang lahat ng mga kalkulasyon ng eligibility, mga petsa, at mga rekomendasyon sa:

1. **Opisyal na mga mapagkukunan ng USCIS** - Kasama ang website ng USCIS, mga opisyal na form, at mga dokumentong gabay
2. **Isang kwalipikadong immigration attorney** - Na maaaring magbigay ng personalized na legal advice batay sa inyong mga partikular na sitwasyon
3. **Ang inyong aktwal na mga rekord sa immigration** - Kasama ang inyong green card, mga tatak ng passport, at mga dokumentong pang-biyahe

Ang mga kalkulasyong ibinibigay ng Green Card Trips ay mga pagtatantya batay sa data na ibinibigay ninyo at mga pampublikong available na tuntunin. Hindi nila maaaring isaalang-alang ang lahat ng nuances ng inyong indibidwal na sitwasyon.

### Tamang Paggamit

Sumasang-ayon kayong gamitin ang Serbisyo lamang para sa mga lehitimong layunin at alinsunod sa Mga Tuntuning ito. Sumasang-ayon kayong hindi:

- Gamitin ang Serbisyo para sa anumang iligal o mapanlinlang na layunin
- Maglagay ng maling o nakakalinlang na impormasyon
- Subukang gawing reverse engineer, decompile, o hack ang Serbisyo
- Kopyahin, baguhin, ipamahagi, o lumikha ng derivative works ng Serbisyo
- Gamitin ang Serbisyo sa anumang paraan na maaaring makapinsala, mag-disable, o makasira sa Serbisyo
- Alisin o baguhin ang anumang copyright, trademark, o iba pang proprietary notices

## Intellectual Property

### Pagmamay-ari

Ang Serbisyo, kasama ang lahat ng content, features, functionality, software, design, text, graphics, logos, at trademarks, ay pag-aari ng Green Card Trips at protektado ng Estados Unidos at internasyonal na mga batas sa copyright, trademark, at iba pang intellectual property.

### Lisensya

Binibigyan namin kayo ng limitado, non-exclusive, non-transferable, revocable na lisensya upang:

- I-download at gamitin ang mobile App sa inyong personal na device(s) para sa inyong personal, non-commercial na paggamit
- Mag-access at gamitin ang Website para sa inyong personal, non-commercial na paggamit

Ang lisensyang ito ay hindi kasama ang anumang karapatan na:

- Muling ibenta o gumawa ng commercial na paggamit ng Serbisyo
- Baguhin o gumawa ng derivative works batay sa Serbisyo
- Mag-download o kumopya ng anumang content para sa kapakinabangan ng anumang third party
- Gumamit ng data mining, robots, o katulad na automated data gathering tools

## Mga Disclaimer at Limitasyon ng Liability

### Base na "As-Is"

ANG SERBISYO AY IBINIBIGAY SA ISANG "AS IS" AT "AS AVAILABLE" NA BASE NA WALANG MGA WARRANTY NG ANUMANG URI, MAGING EXPRESS O IMPLIED.

SA PINAKAMATAAS NA LAWAK NA PINAHIHINTULUTAN NG BATAS, TINATANGGIHAN NAMIN ANG LAHAT NG MGA WARRANTY, EXPRESS O IMPLIED, KASAMA NGUNIT HINDI LIMITADO SA:

- Mga warranty ng merchantability, fitness para sa isang partikular na layunin, at non-infringement
- Mga warranty tungkol sa katumpakan, reliability, o kabuuan ng anumang impormasyon
- Mga warranty na ang Serbisyo ay magiging walang sagabal, napapanahon, secure, o walang error
- Mga warranty tungkol sa mga resultang nakuha mula sa paggamit ng Serbisyo

### Mga Pagbabago sa Batas ng Immigration

Ang mga batas sa immigration, mga patakaran, at mga interpretasyon ng USCIS ay madalas na nagbabago. Ang Green Card Trips ay maaaring hindi magreflect ng pinaka-kasalukuyan na mga legal na kinakailangan o mga update sa patakaran. Dapat ninyong i-verify ang kasalukuyang mga kinakailangan sa USCIS o isang immigration attorney.

### Mga Limitasyon sa Kalkulasyon

Bagaman nagsusumikap kami para sa katumpakan, ang mga kalkulasyon at pagtatantya ng Serbisyo:

- Batay sa pangkalahatang mga tuntunin ng USCIS at maaaring hindi isaalang-alang ang mga eksepsyon o espesyal na sitwasyon
- Lubos na nakasalalay sa katumpakan ng data na ibinibigay ninyo
- Maaaring hindi magreflect ng mga kamakailang pagbabago sa batas o patakaran sa immigration
- Hindi makakapag-predict kung paano iinterpretin o ilalapat ng USCIS ang mga tuntunin sa inyong partikular na kaso
- Hindi ginagarantiya ang pag-apruba ng inyong naturalization application

### Limitasyon ng Liability

SA PINAKAMATAAS NA LAWAK NA PINAHIHINTULUTAN NG BATAS, ANG GREEN CARD TRIPS AT ANG MGA DEVELOPERS, OFFICERS, DIRECTORS, EMPLOYEES, AT AGENTS NITO AY HINDI MANANAGOT PARA SA:

1. **Anumang indirect, incidental, special, consequential, o punitive damages**, kasama ngunit hindi limitado sa:
   - Pagkawala ng kita, revenue, data, o mga oportunidad sa negosyo
   - Pagtanggi ng naturalization application
   - Mga isyu sa immigration status
   - Napalampas na mga deadline o filing windows
   - Anumang iba pang intangible na mga pagkawala

2. **Anumang damages na nagreresulta mula sa:**
   - Ang inyong paggamit o kawalan ng kakayahang gamitin ang Serbisyo
   - Mga error, hindi katumpakan, o pagkakaltas sa mga kalkulasyon o impormasyon
   - Pagkawala o pagkasira ng data
   - Hindi awtorisadong access o alterasyon ng inyong data sa inyong device
   - Anumang iba pang bagay na nauugnay sa Serbisyo

**KAHIT NA NAIPAALAM SA AMIN ANG POSIBILIDAD NG GAYONG MGA PINSALA.**

SA MGA HURISDIKSYON NA HINDI PINAPAYAGAN ANG EXCLUSION O LIMITASYON NG LIABILITY PARA SA CONSEQUENTIAL O INCIDENTAL DAMAGES, ANG AMING LIABILITY AY LIMITADO SA PINAKAMATAAS NA LAWAK NA PINAHIHINTULUTAN NG BATAS.

Dahil ang Green Card Trips ay isang libreng o murang tool na ibinibigay as-is, sa anumang kaganapan ang aming kabuuang liability sa inyo para sa lahat ng damages, losses, at causes of action ay hindi lalampas sa halagang binayaran ninyo upang gamitin ang Serbisyo (kung mayroon), o $10.00 USD, alinman ang mas mataas.

## Asal ng User at Eligibility

### Kinakailangan sa Edad

Dapat kayong hindi bababa sa 18 taong gulang upang gamitin ang Serbisyo. Sa paggamit ng Serbisyo, kayo ay kumakatawan na hindi kayo bababa sa 18 taong gulang.

### Status na Lawful Permanent Resident

Ang Serbisyong ito ay dinisenyo para sa mga indibidwal na kasalukuyang may Lawful Permanent Resident (green card) status sa Estados Unidos. Bagaman ang iba ay maaaring mag-download ng App, ang mga kalkulasyon at features ay partikular na dinisenyo para sa mga green card holders na naghahangad ng naturalization.

## Walang Mga Account o Registration

Ang Green Card Trips ay hindi nangangailangan na lumikha kayo ng account o magbigay ng impormasyon sa registration. Ang lahat ng inyong data ay naka-store locally sa inyong device. Hindi kami nag-maintain ng mga user accounts sa anumang servers.

## Data at Privacy

Ang inyong paggamit ng Serbisyo ay pinamamahalaan din ng aming Privacy Policy. Mangyaring suriin ang aming Privacy Policy upang maunawaan kung paano namin hinahawakan ang impormasyon.

Sa buod:
- Ang lahat ng inyong data ay naka-store locally sa inyong device
- Hindi kami kumukuha, nag-a-access, o nagpapadala ng inyong personal na impormasyon
- Mayroon kayong kumpletong kontrol sa inyong data

## Website Analytics at Cookies

### Paggamit ng Analytics

Gumagamit kami ng Google Analytics sa aming website upang maintindihan kung paano ginagamit ng mga bisita ang Serbisyo at upang mapabuti ang karanasan ng user. Tumutulong ito sa amin na matukoy kung aling mga feature ang pinaka-kapaki-pakinabang, ma-optimize ang content para sa mga may green card, at mapabuti ang pagiging epektibo ng aming website.

Ang paggamit ng analytics ay limitado lamang sa aming website. Ang Green Card Trips mobile app ay hindi gumagamit ng anumang analytics o tracking—ang lahat ng inyong immigration data ay nananatiling pribado sa inyong device gaya ng inilarawan sa aming Privacy Policy.

### Cookies at Tracking

Ang aming website ay gumagamit ng cookies para lamang sa layunin ng analytics sa pamamagitan ng Google Analytics. Ang mga cookies na ito ay tumutulong sa amin na maintindihan ang mga pattern ng paggamit ng website at mapabuti ang site para sa mga may green card.

**Mahalaga:**
- Ang mobile App ay hindi gumagamit ng cookies o anumang tracking technologies
- Ang lahat ng cookies na ginagamit sa website ay optional at nakasalalay sa inyong pahintulot
- Maaari kayong mag-opt out sa analytics cookies anumang oras sa pamamagitan ng inyong browser settings o ng aming cookie consent banner

Para sa detalyadong impormasyon tungkol sa:
- Anong cookies ang ginagamit namin
- Bakit namin ginagamit ang mga ito
- Paano pamahalaan ang mga kagustuhan sa cookies
- Ang inyong mga karapatan tungkol sa cookies

Mangyaring tingnan ang aming Cookie Policy at Privacy Policy.

Ang inyong paggamit ng website na may enabled na cookies ay bumubuo ng pagtanggap sa aming paggamit ng analytics cookies gaya ng inilarawan sa aming Cookie Policy. Kung hindi kayo pumapayag sa cookies, maaari ninyong i-disable ang mga ito sa inyong browser settings, kahit na maaaring makaapekto ito sa ilang functionality ng website (tandaan: ang pangunahing impormasyon ay nananatiling accessible kahit walang cookies).

## Mga Tuntunin ng App Store

Kung na-download ninyo ang App mula sa Apple App Store, kinikilala at sumasang-ayon kayo na:

- Ang Mga Tuntuning ito ay sa pagitan ninyo at ng Green Card Trips, hindi Apple
- Ang Apple ay walang obligasyon na magbigay ng maintenance o support para sa App
- Ang Apple ay hindi responsable para sa anumang mga claim na nauugnay sa App
- Dapat ninyong sumunod sa lahat ng naaangkop na third-party terms kapag gumagamit ng App

## Mga Update at Modipikasyon

### Mga Update sa Serbisyo

Maaari naming i-update, baguhin, o ihinto ang Serbisyo (o anumang bahagi nito) anumang oras, na may o walang paunawa. Hindi kami liable kung ang anumang bahagi ng Serbisyo ay hindi available anumang oras.

### Mga Pagbabago sa Mga Tuntunin

Nakalaan ang aming karapatan na baguhin ang Mga Tuntuning ito anumang oras. Kung gumawa kami ng material na mga pagbabago, aabisuhan namin kayo sa pamamagitan ng pag-update ng "Huling Na-update" na petsa at, kung naaangkop, sa pamamagitan ng App o Website.

Ang inyong patuloy na paggamit ng Serbisyo pagkatapos na ma-post ang mga pagbabago ay bumubuo ng inyong pagtanggap sa mga rebisadong Tuntunin. Kung hindi kayo sumasang-ayon sa mga bagong Tuntunin, dapat ninyong ihinto ang paggamit ng Serbisyo.

## Indemnification

Sumasang-ayon kayong indemnify, ipagtanggol, at palayain mula sa pananagutan ang Green Card Trips at ang mga developers, officers, employees, at agents nito mula sa anumang mga claim, liabilities, damages, losses, costs, at expenses (kasama ang makatwirang attorney's fees) na nagmumula sa:

1. Ang inyong paggamit o maling paggamit ng Serbisyo
2. Ang inyong paglabag sa Mga Tuntuning ito
3. Ang inyong paglabag sa anumang mga karapatan ng ibang tao o entity
4. Anumang hindi tumpak o maling impormasyong ibinibigay ninyo
5. Anumang mga desisyon na ginawa ninyo batay sa impormasyon mula sa Serbisyo

## Governing Law at Dispute Resolution

### Governing Law

Ang Mga Tuntuning ito ay pamumunuan at interpretehin alinsunod sa mga batas ng State of California, Estados Unidos, nang hindi isinasaalang-alang ang mga prinsipyo ng conflict of law nito.

### Jurisdiction

Sumasang-ayon kayong ang anumang legal action o proceeding na nagmumula sa o nauugnay sa Mga Tuntuning ito o ang Serbisyo ay dadalhin eksklusibo sa mga federal o state courts na matatagpuan sa California, at pumapayag kayo sa personal jurisdiction ng gayong mga courts.

### Dispute Resolution

Bago mag-file ng anumang formal na legal action, sumasang-ayon kayong makipag-ugnayan muna sa amin sa support@greencardtrips.com upang subukang resolbahin ang anumang dispute nang informal.

## Severability

Kung ang anumang probisyon ng Mga Tuntuning ito ay natagpuang invalid, ilegal, o hindi maipapatupad, ang natitirang mga probisyon ay magpapatuloy sa buong lakas at epekto.

## Buong Kasunduan

Ang Mga Tuntuning ito, kasama ang aming Privacy Policy, ay bumubuo ng buong kasunduan sa pagitan ninyo at ng Green Card Trips tungkol sa Serbisyo at pumapantay sa anumang naunang mga kasunduan.

## Walang Waiver

Ang aming kabiguan na ipatupad ang anumang karapatan o probisyon ng Mga Tuntuning ito ay hindi ituturing na waiver ng gayong karapatan o probisyon.

## Makipag-ugnayan sa Amin

Kung mayroon kayong anumang mga tanong, alalahanin, o feedback tungkol sa Mga Tuntuning ito, mangyaring makipag-ugnayan sa amin:

**Email:** support@greencardtrips.com
**Website:** https://greencardtrips.com

Tutugon kami sa inyong katanungan sa loob ng makatwirang panahon.

---

## Buod

Sa paggamit ng Green Card Trips, kinikilala ninyo na:

✓ Ito ay isang informational tool, hindi legal advice
✓ Kayo ay responsable sa pag-verify ng lahat ng mga kalkulasyon sa USCIS o isang attorney
✓ Dapat kayong maglagay ng tumpak na impormasyon para sa tumpak na mga resulta
✓ Hindi kami liable para sa anumang mga desisyon o resulta na nauugnay sa immigration
✓ Nabasa, naintindihan, at sumasang-ayon kayo sa Mga Tuntuning ito

**Kapag may pagdududa, kumunsulta sa isang immigration attorney. Ang inyong citizenship application ay napakahalaga upang umasa lamang sa anumang automated tool.**

`,
    },
    vi: {
      seo: {
        title: "Điều Khoản và Điều Kiện - Green Card Trips",
        description: "Điều Khoản và Điều Kiện cho ứng dụng di động và trang web Green Card Trips",
      },
      content: `# Điều Khoản và Điều Kiện

**Ngày Có Hiệu Lực:** 15 tháng 1, 2025
**Cập Nhật Lần Cuối:** 15 tháng 1, 2025

## Giới Thiệu

Chào mừng bạn đến với Green Card Trips. Các Điều Khoản và Điều Kiện này ("Điều Khoản") điều chỉnh việc bạn sử dụng ứng dụng di động Green Card Trips (gọi là "Ứng dụng") và trang web của chúng tôi tại greencardtrips.com (gọi là "Trang Web"), gọi chung là "Dịch Vụ".

Bằng việc tải xuống, cài đặt, truy cập hoặc sử dụng Dịch Vụ, bạn đồng ý bị ràng buộc bởi các Điều Khoản này. Nếu bạn không đồng ý với các Điều Khoản này, vui lòng không sử dụng Dịch Vụ.

## Về Green Card Trips

Green Card Trips là một công cụ thông tin được thiết kế để giúp Cư Dân Thường Trú Hợp Pháp Hoa Kỳ (người nắm giữ thẻ xanh) theo dõi sự hiện diện vật lý của họ tại Hoa Kỳ cho mục đích đủ điều kiện nhập quốc tịch. Dịch Vụ cung cấp các tính toán và ước tính dựa trên các quy tắc và yêu cầu của USCIS có sẵn công khai.

## Tuyên Bố Từ Chối Trách Nhiệm Pháp Lý Quan Trọng

### Không Phải Tư Vấn Pháp Lý

**DỊCH VỤ KHÔNG CUNG CẤP TƯ VẤN PHÁP LÝ.** Green Card Trips chỉ là một công cụ thông tin. Nội dung, tính năng, tính toán và thông tin được cung cấp thông qua Dịch Vụ chỉ nhằm mục đích thông tin và giáo dục chung và không cấu thành tư vấn pháp lý.

Luật nhập cư phức tạp, có thể thay đổi và thay đổi tùy thuộc vào hoàn cảnh cá nhân. Công cụ này không thể và không thay thế lời khuyên của một luật sư nhập cư có trình độ, người có thể đánh giá tình huống cụ thể của bạn.

### Không Có Quan Hệ Luật Sư-Khách Hàng

Việc bạn sử dụng Green Card Trips không tạo ra quan hệ luật sư-khách hàng giữa bạn và những người tạo ra Dịch Vụ này. Chúng tôi không phải là một công ty luật và không hành nghề luật.

### Không Liên Kết Với USCIS

Green Card Trips là một ứng dụng độc lập của bên thứ ba và **không liên kết, được chứng thực hoặc kết nối với** Cơ Quan Dịch Vụ Công Dân và Nhập Cư Hoa Kỳ (USCIS), Bộ An Ninh Nội Địa (DHS) hoặc bất kỳ cơ quan chính phủ nào khác.

## Trách Nhiệm Của Bạn

### Độ Chính Xác Của Thông Tin

**BẠN HOÀN TOÀN CHỊU TRÁCH NHIỆM** về độ chính xác và đầy đủ của tất cả thông tin bạn nhập vào Dịch Vụ, bao gồm nhưng không giới hạn ở:

- Ngày cấp thẻ xanh của bạn (ngày "Cư Trú Từ")
- Ngày khởi hành và trở về của chuyến đi
- Lộ trình đủ điều kiện (quy tắc 3 năm hoặc 5 năm)
- Tất cả thông tin hồ sơ và du lịch khác

**Dữ liệu không chính xác sẽ tạo ra kết quả không chính xác.** Luôn xác minh rằng dữ liệu đầu vào của bạn là chính xác.

### Xác Minh Với Các Nguồn Chính Thức

Bạn phải xác minh tất cả các tính toán đủ điều kiện, ngày tháng và khuyến nghị với:

1. **Các nguồn USCIS chính thức** - Bao gồm trang web USCIS, các biểu mẫu chính thức và tài liệu hướng dẫn
2. **Một luật sư nhập cư có trình độ** - Người có thể cung cấp tư vấn pháp lý cá nhân hóa dựa trên hoàn cảnh cụ thể của bạn
3. **Hồ sơ nhập cư thực tế của bạn** - Bao gồm thẻ xanh, tem hộ chiếu và tài liệu du lịch của bạn

Các tính toán được cung cấp bởi Green Card Trips là ước tính dựa trên dữ liệu bạn cung cấp và các quy tắc có sẵn công khai. Chúng có thể không tính đến tất cả các sắc thái của tình huống cá nhân của bạn.

### Sử Dụng Đúng Đắn

Bạn đồng ý chỉ sử dụng Dịch Vụ cho các mục đích hợp pháp và phù hợp với các Điều Khoản này. Bạn đồng ý không:

- Sử dụng Dịch Vụ cho bất kỳ mục đích bất hợp pháp hoặc gian lận nào
- Nhập thông tin sai hoặc gây hiểu nhầm
- Cố gắng kỹ nghệ ngược, giải mã hoặc hack Dịch Vụ
- Sao chép, sửa đổi, phân phối hoặc tạo các tác phẩm phái sinh của Dịch Vụ
- Sử dụng Dịch Vụ theo bất kỳ cách nào có thể làm hỏng, vô hiệu hóa hoặc làm suy giảm Dịch Vụ
- Xóa hoặc thay đổi bất kỳ thông báo bản quyền, nhãn hiệu hoặc các thông báo sở hữu khác

## Sở Hữu Trí Tuệ

### Quyền Sở Hữu

Dịch Vụ, bao gồm tất cả nội dung, tính năng, chức năng, phần mềm, thiết kế, văn bản, đồ họa, logo và nhãn hiệu, thuộc sở hữu của Green Card Trips và được bảo vệ bởi luật bản quyền, nhãn hiệu và các luật sở hữu trí tuệ khác của Hoa Kỳ và quốc tế.

### Giấy Phép

Chúng tôi cấp cho bạn giấy phép hạn chế, không độc quyền, không thể chuyển nhượng, có thể thu hồi để:

- Tải xuống và sử dụng Ứng dụng di động trên (các) thiết bị cá nhân của bạn cho mục đích sử dụng cá nhân, phi thương mại của bạn
- Truy cập và sử dụng Trang Web cho mục đích sử dụng cá nhân, phi thương mại của bạn

Giấy phép này không bao gồm bất kỳ quyền nào để:

- Bán lại hoặc sử dụng thương mại Dịch Vụ
- Sửa đổi hoặc tạo các tác phẩm phái sinh dựa trên Dịch Vụ
- Tải xuống hoặc sao chép bất kỳ nội dung nào vì lợi ích của bất kỳ bên thứ ba nào
- Sử dụng khai thác dữ liệu, robot hoặc các công cụ thu thập dữ liệu tự động tương tự

## Tuyên Bố Từ Chối và Giới Hạn Trách Nhiệm

### Cơ Sở "Nguyên Trạng"

DỊCH VỤ ĐƯỢC CUNG CẤP TRÊN CƠ SỞ "NGUYÊN TRẠNG" VÀ "NHƯ CÓ SẴN" MÀ KHÔNG CÓ BẢO ĐẢM DƯỚI BẤT KỲ HÌNH THỨC NÀO, DÙ RÕ RÀNG HAY NGỤ Ý.

TRONG PHẠM VI TỐI ĐA ĐƯỢC PHÉP BỞI PHÁP LUẬT, CHÚNG TÔI TỪ CHỐI TẤT CẢ CÁC BẢO ĐẢM, RÕ RÀNG HAY NGỤ Ý, BAO GỒM NHƯNG KHÔNG GIỚI HẠN Ở:

- Bảo đảm về khả năng bán được, phù hợp cho một mục đích cụ thể và không vi phạm
- Bảo đảm về độ chính xác, độ tin cậy hoặc đầy đủ của bất kỳ thông tin nào
- Bảo đảm rằng Dịch Vụ sẽ không bị gián đoạn, kịp thời, an toàn hoặc không có lỗi
- Bảo đảm về kết quả thu được từ việc sử dụng Dịch Vụ

### Thay Đổi Luật Nhập Cư

Luật nhập cư, chính sách và cách giải thích của USCIS thường xuyên thay đổi. Green Card Trips có thể không phản ánh các yêu cầu pháp lý hiện tại nhất hoặc các cập nhật chính sách. Bạn phải xác minh các yêu cầu hiện tại với USCIS hoặc một luật sư nhập cư.

### Giới Hạn Tính Toán

Mặc dù chúng tôi cố gắng đạt độ chính xác, các tính toán và ước tính của Dịch Vụ:

- Dựa trên các quy tắc chung của USCIS và có thể không tính đến các ngoại lệ hoặc trường hợp đặc biệt
- Phụ thuộc hoàn toàn vào độ chính xác của dữ liệu bạn cung cấp
- Có thể không phản ánh các thay đổi gần đây trong luật hoặc chính sách nhập cư
- Không thể dự đoán cách USCIS sẽ giải thích hoặc áp dụng các quy tắc cho trường hợp cụ thể của bạn
- Không đảm bảo sự chấp thuận đơn xin nhập quốc tịch của bạn

### Giới Hạn Trách Nhiệm

TRONG PHẠM VI TỐI ĐA ĐƯỢC PHÉP BỞI PHÁP LUẬT, GREEN CARD TRIPS VÀ CÁC NHÀ PHÁT TRIỂN, GIÁM ĐỐC, GIÁM ĐỐC ĐIỀU HÀNH, NHÂN VIÊN VÀ ĐẠI DIỆN CỦA CÔNG TY SẼ KHÔNG CHỊU TRÁCH NHIỆM VỀ:

1. **Bất kỳ thiệt hại gián tiếp, ngẫu nhiên, đặc biệt, hậu quả hoặc trừng phạt nào**, bao gồm nhưng không giới hạn ở:
   - Mất lợi nhuận, doanh thu, dữ liệu hoặc cơ hội kinh doanh
   - Từ chối đơn xin nhập quốc tịch
   - Vấn đề về tình trạng nhập cư
   - Hạn chót hoặc thời hạn nộp đơn bị bỏ lỡ
   - Bất kỳ tổn thất vô hình nào khác

2. **Bất kỳ thiệt hại nào phát sinh từ:**
   - Việc bạn sử dụng hoặc không thể sử dụng Dịch Vụ
   - Lỗi, sự không chính xác hoặc thiếu sót trong tính toán hoặc thông tin
   - Mất hoặc hỏng dữ liệu
   - Truy cập trái phép hoặc thay đổi dữ liệu của bạn trên thiết bị của bạn
   - Bất kỳ vấn đề nào khác liên quan đến Dịch Vụ

**NGAY CẢ KHI CHÚNG TÔI ĐÃ ĐƯỢC THÔNG BÁO VỀ KHẢ NĂNG XẢY RA THIỆT HẠI NHƯ VẬY.**

TRONG CÁC KHU VỰC PHÁP LÝ KHÔNG CHO PHÉP LOẠI TRỪ HOẶC GIỚI HẠN TRÁCH NHIỆM ĐỐI VỚI THIỆT HẠI HẬU QUẢ HOẶC NGẪU NHIÊN, TRÁCH NHIỆM CỦA CHÚNG TÔI BỊ GIỚI HẠN TRONG PHẠM VI LỚN NHẤT ĐƯỢC PHÉP BỞI PHÁP LUẬT.

Vì Green Card Trips là một công cụ miễn phí hoặc chi phí thấp được cung cấp nguyên trạng, trong mọi trường hợp, tổng trách nhiệm của chúng tôi đối với bạn về tất cả các thiệt hại, tổn thất và nguyên nhân hành động sẽ không vượt quá số tiền bạn đã trả để sử dụng Dịch Vụ (nếu có) hoặc $10.00 USD, tùy theo số nào lớn hơn.

## Hành Vi Người Dùng và Tư Cách

### Yêu Cầu Về Độ Tuổi

Bạn phải ít nhất 18 tuổi để sử dụng Dịch Vụ. Bằng việc sử dụng Dịch Vụ, bạn tuyên bố rằng bạn ít nhất 18 tuổi.

### Tình Trạng Cư Dân Thường Trú Hợp Pháp

Dịch Vụ này được thiết kế cho các cá nhân hiện đang có tình trạng Cư Dân Thường Trú Hợp Pháp (thẻ xanh) ở Hoa Kỳ. Mặc dù những người khác có thể tải xuống Ứng dụng, các tính toán và tính năng được thiết kế đặc biệt cho người nắm giữ thẻ xanh theo đuổi nhập quốc tịch.

## Không Có Tài Khoản Hoặc Đăng Ký

Green Card Trips không yêu cầu bạn tạo tài khoản hoặc cung cấp thông tin đăng ký. Tất cả dữ liệu của bạn được lưu trữ cục bộ trên thiết bị của bạn. Chúng tôi không duy trì tài khoản người dùng trên bất kỳ máy chủ nào.

## Dữ Liệu và Quyền Riêng Tư

Việc bạn sử dụng Dịch Vụ cũng được điều chỉnh bởi Chính Sách Bảo Mật của chúng tôi. Vui lòng xem Chính Sách Bảo Mật của chúng tôi để hiểu cách chúng tôi xử lý thông tin.

Tóm tắt:
- Tất cả dữ liệu của bạn được lưu trữ cục bộ trên thiết bị của bạn
- Chúng tôi không thu thập, truy cập hoặc truyền thông tin cá nhân của bạn
- Bạn có toàn quyền kiểm soát dữ liệu của mình

## Phân Tích Website và Cookies

### Sử Dụng Phân Tích

Chúng tôi sử dụng Google Analytics trên website của mình để hiểu cách khách truy cập sử dụng Dịch vụ và để cải thiện trải nghiệm người dùng. Điều này giúp chúng tôi xác định những tính năng nào hữu ích nhất, tối ưu hóa nội dung cho người có thẻ xanh, và cải thiện hiệu quả của website.

Việc sử dụng phân tích chỉ giới hạn ở website của chúng tôi. Ứng dụng di động Green Card Trips không sử dụng bất kỳ phân tích hoặc theo dõi nào—tất cả dữ liệu nhập cư của bạn vẫn được giữ riêng tư trên thiết bị của bạn như được mô tả trong Chính Sách Bảo Mật của chúng tôi.

### Cookies và Theo Dõi

Website của chúng tôi chỉ sử dụng cookies cho mục đích phân tích thông qua Google Analytics. Những cookies này giúp chúng tôi hiểu các mô hình sử dụng website và cải thiện trang web cho người có thẻ xanh.

**Quan trọng:**
- Ứng dụng di động không sử dụng cookies hoặc bất kỳ công nghệ theo dõi nào
- Tất cả cookies được sử dụng trên website đều là tùy chọn và phụ thuộc vào sự đồng ý của bạn
- Bạn có thể từ chối cookies phân tích bất cứ lúc nào thông qua cài đặt trình duyệt hoặc biểu ngữ đồng ý cookie của chúng tôi

Để biết thông tin chi tiết về:
- Chúng tôi sử dụng cookies nào
- Tại sao chúng tôi sử dụng chúng
- Cách quản lý tùy chọn cookies
- Quyền của bạn liên quan đến cookies

Vui lòng tham khảo Chính Sách Cookie và Chính Sách Bảo Mật của chúng tôi.

Việc bạn sử dụng website với cookies được bật cấu thành sự chấp nhận việc chúng tôi sử dụng cookies phân tích như được mô tả trong Chính Sách Cookie của chúng tôi. Nếu bạn không đồng ý với cookies, bạn có thể vô hiệu hóa chúng trong cài đặt trình duyệt của mình, mặc dù điều này có thể ảnh hưởng đến một số chức năng của website (lưu ý: thông tin cốt lõi vẫn có thể truy cập được mà không cần cookies).

## Điều Khoản App Store

Nếu bạn đã tải xuống Ứng dụng từ Apple App Store, bạn xác nhận và đồng ý rằng:

- Các Điều Khoản này là giữa bạn và Green Card Trips, không phải Apple
- Apple không có nghĩa vụ cung cấp bảo trì hoặc hỗ trợ cho Ứng dụng
- Apple không chịu trách nhiệm về bất kỳ khiếu nại nào liên quan đến Ứng dụng
- Bạn phải tuân thủ tất cả các điều khoản của bên thứ ba có thể áp dụng khi sử dụng Ứng dụng

## Cập Nhật và Sửa Đổi

### Cập Nhật Dịch Vụ

Chúng tôi có thể cập nhật, sửa đổi hoặc ngừng cung cấp Dịch Vụ (hoặc bất kỳ phần nào của nó) bất cứ lúc nào, có hoặc không có thông báo. Chúng tôi không chịu trách nhiệm nếu bất kỳ phần nào của Dịch Vụ không khả dụng vào bất kỳ lúc nào.

### Thay Đổi Điều Khoản

Chúng tôi bảo lưu quyền sửa đổi các Điều Khoản này bất cứ lúc nào. Nếu chúng tôi thực hiện các thay đổi quan trọng, chúng tôi sẽ thông báo cho bạn bằng cách cập nhật ngày "Cập Nhật Lần Cuối" và, khi thích hợp, thông qua Ứng dụng hoặc Trang Web.

Việc bạn tiếp tục sử dụng Dịch Vụ sau khi các thay đổi được đăng lên sẽ được coi là chấp nhận các Điều Khoản đã sửa đổi. Nếu bạn không đồng ý với các Điều Khoản mới, bạn phải ngừng sử dụng Dịch Vụ.

## Bồi Thường

Bạn đồng ý bồi thường, bảo vệ và giữ cho Green Card Trips và các nhà phát triển, giám đốc, nhân viên và đại diện của công ty không bị tổn hại từ bất kỳ khiếu nại, trách nhiệm, thiệt hại, tổn thất, chi phí và phí tổn (bao gồm phí luật sư hợp lý) phát sinh từ:

1. Việc bạn sử dụng hoặc sử dụng sai Dịch Vụ
2. Việc bạn vi phạm các Điều Khoản này
3. Việc bạn vi phạm bất kỳ quyền nào của người hoặc tổ chức khác
4. Bất kỳ thông tin không chính xác hoặc sai lệch nào bạn cung cấp
5. Bất kỳ quyết định nào bạn đưa ra dựa trên thông tin từ Dịch Vụ

## Luật Điều Chỉnh và Giải Quyết Tranh Chấp

### Luật Điều Chỉnh

Các Điều Khoản này sẽ được điều chỉnh và giải thích theo luật của Tiểu Bang California, Hoa Kỳ, không tính đến các nguyên tắc xung đột pháp luật của nó.

### Quyền Tài Phán

Bạn đồng ý rằng bất kỳ hành động pháp lý hoặc thủ tục nào phát sinh từ hoặc liên quan đến các Điều Khoản này hoặc Dịch Vụ sẽ được đưa ra độc quyền tại các tòa án liên bang hoặc tiểu bang tọa lạc tại California, và bạn đồng ý với quyền tài phán cá nhân của các tòa án đó.

### Giải Quyết Tranh Chấp

Trước khi nộp bất kỳ hành động pháp lý chính thức nào, bạn đồng ý liên hệ với chúng tôi tại support@greencardtrips.com để cố gắng giải quyết bất kỳ tranh chấp nào một cách thân thiện.

## Tính Phân Tách

Nếu bất kỳ điều khoản nào của các Điều Khoản này được xác định là không hợp lệ, bất hợp pháp hoặc không thể thi hành, các điều khoản còn lại sẽ tiếp tục có hiệu lực và hiệu quả đầy đủ.

## Toàn Bộ Thỏa Thuận

Các Điều Khoản này, cùng với Chính Sách Bảo Mật của chúng tôi, cấu thành toàn bộ thỏa thuận giữa bạn và Green Card Trips liên quan đến Dịch Vụ và thay thế bất kỳ thỏa thuận trước đó nào.

## Không Từ Bỏ Quyền

Việc chúng tôi không thực thi bất kỳ quyền hoặc điều khoản nào của các Điều Khoản này sẽ không được coi là từ bỏ quyền hoặc điều khoản đó.

## Liên Hệ Với Chúng Tôi

Nếu bạn có bất kỳ câu hỏi, thắc mắc hoặc phản hồi nào về các Điều Khoản này, vui lòng liên hệ với chúng tôi:

**Email:** support@greencardtrips.com
**Trang Web:** https://greencardtrips.com

Chúng tôi sẽ trả lời yêu cầu của bạn trong một khung thời gian hợp lý.

---

## Tóm Tắt

Bằng việc sử dụng Green Card Trips, bạn xác nhận rằng:

✓ Đây là một công cụ thông tin, không phải tư vấn pháp lý
✓ Bạn có trách nhiệm xác minh tất cả các tính toán với USCIS hoặc một luật sư
✓ Bạn phải nhập thông tin chính xác để có kết quả chính xác
✓ Chúng tôi không chịu trách nhiệm về bất kỳ quyết định hoặc kết quả liên quan đến nhập cư nào
✓ Bạn đã đọc, hiểu và đồng ý với các Điều Khoản này

**Khi có nghi ngờ, hãy tham khảo ý kiến luật sư nhập cư. Đơn xin quốc tịch của bạn quá quan trọng để chỉ dựa vào bất kỳ công cụ tự động nào.**

`,
    },
    "zh-CN": {
      seo: {
        title: "条款与条件 - Green Card Trips",
        description: "Green Card Trips 移动应用程序和网站的条款与条件",
      },
      content: `# 条款与条件

**生效日期:** 2025年1月15日
**最后更新:** 2025年1月15日

## 简介

欢迎使用Green Card Trips。这些条款与条件("条款")管理您对Green Card Trips移动应用程序("应用")和我们位于greencardtrips.com的网站("网站")的使用,统称为"服务"。

通过下载、安装、访问或使用本服务,您同意受这些条款的约束。如果您不同意这些条款,请不要使用本服务。

## 关于Green Card Trips

Green Card Trips是一款信息工具,旨在帮助美国合法永久居民(绿卡持有人)跟踪他们在美国的实际居留情况以符合入籍资格要求。本服务基于公开可用的USCIS规则和要求提供计算和估算。

## 重要的法律免责声明

### 非法律建议

**本服务不提供法律建议。** Green Card Trips仅是一款信息工具。通过本服务提供的内容、功能、计算和信息仅用于一般信息和教育目的,不构成法律建议。

移民法复杂、易变,并因个人情况而异。本工具不能且无法替代能够评估您具体情况的合格移民律师的建议。

### 不存在律师-客户关系

您使用Green Card Trips不会在您与本服务的创建者之间建立律师-客户关系。我们不是律师事务所,也不从事法律业务。

### 不隶属于USCIS

Green Card Trips是一个独立的第三方应用程序,**不隶属于、不被认可或不连接**美国公民及移民服务局(USCIS)、国土安全部(DHS)或任何其他政府机构。

## 您的责任

### 信息准确性

**您对**您输入到服务中的所有信息的准确性和完整性**负全部责任**,包括但不限于:

- 您的绿卡签发日期("居民身份起始"日期)
- 旅行的出发和返回日期
- 资格途径(3年或5年规则)
- 所有其他个人资料和旅行信息

**不准确的数据将产生不准确的结果。** 始终验证您的输入数据是否正确。

### 与官方来源核实

您必须通过以下方式验证所有资格计算、日期和建议:

1. **USCIS官方来源** - 包括USCIS网站、官方表格和指导文件
2. **合格的移民律师** - 可以根据您的具体情况提供个性化法律建议
3. **您的实际移民记录** - 包括您的绿卡、护照印章和旅行文件

Green Card Trips提供的计算是基于您提供的数据和公开可用规则的估算。它们可能无法考虑您个人情况的所有细微差别。

### 适当使用

您同意仅出于合法目的并按照这些条款使用本服务。您同意不:

- 将本服务用于任何非法或欺诈目的
- 输入虚假或误导性信息
- 尝试对本服务进行逆向工程、反编译或黑客攻击
- 复制、修改、分发或创建本服务的衍生作品
- 以任何可能损坏、禁用或损害本服务的方式使用本服务
- 删除或更改任何版权、商标或其他专有通知

## 知识产权

### 所有权

本服务,包括所有内容、功能、功能性、软件、设计、文本、图形、标志和商标,由Green Card Trips所有,并受美国和国际版权、商标以及其他知识产权法律的保护。

### 许可

我们授予您有限的、非独占的、不可转让的、可撤销的许可以:

- 在您的个人设备上下载和使用移动应用程序,用于您的个人、非商业用途
- 访问和使用网站,用于您的个人、非商业用途

此许可不包括以下任何权利:

- 转售或商业使用本服务
- 基于本服务修改或创建衍生作品
- 为任何第三方的利益下载或复制任何内容
- 使用数据挖掘、机器人或类似的自动化数据收集工具

## 免责声明和责任限制

### "按现状"基础

本服务按"按现状"和"可用"基础提供,不提供任何明示或暗示的保证。

在法律允许的最大范围内,我们否认所有明示或暗示的保证,包括但不限于:

- 适销性、特定用途适用性和非侵权的保证
- 关于任何信息的准确性、可靠性或完整性的保证
- 关于服务将不间断、及时、安全或无错误的保证
- 关于使用服务获得的结果的保证

### 移民法变更

移民法、政策和USCIS的解释经常变化。Green Card Trips可能无法反映最新的法律要求或政策更新。您必须通过USCIS或移民律师验证当前要求。

### 计算限制

虽然我们力求准确,但服务的计算和估算:

- 基于USCIS的一般规则,可能无法考虑例外情况或特殊情况
- 完全依赖于您提供的数据的准确性
- 可能无法反映移民法或政策的最新变化
- 无法预测USCIS将如何解释或应用规则到您的具体案例
- 不保证您的入籍申请获得批准

### 责任限制

在法律允许的最大范围内,GREEN CARD TRIPS及其开发人员、高级职员、董事、员工和代理人不对以下事项承担责任:

1. **任何间接、附带、特殊、后果性或惩罚性损害**,包括但不限于:
   - 利润、收入、数据或商业机会的损失
   - 入籍申请被拒
   - 移民身份问题
   - 错过的截止日期或提交窗口
   - 任何其他无形损失

2. **由以下原因导致的任何损害:**
   - 您使用或无法使用本服务
   - 计算或信息中的错误、不准确或遗漏
   - 数据丢失或损坏
   - 未经授权访问或更改您设备上的数据
   - 与服务有关的任何其他事项

**即使我们已被告知可能发生此类损害。**

在不允许排除或限制后果性或附带损害责任的司法管辖区,我们的责任在法律允许的最大范围内受到限制。

由于Green Card Trips是按现状提供的免费或低成本工具,在任何情况下,我们对您承担的所有损害、损失和诉讼原因的总责任不超过您为使用本服务支付的金额(如有),或10.00美元,以较高者为准。

## 用户行为和资格

### 年龄要求

您必须年满18岁才能使用本服务。使用本服务即表示您声明您年满18岁。

### 合法永久居民身份

本服务专为目前在美国拥有合法永久居民(绿卡)身份的个人设计。虽然其他人可以下载应用程序,但计算和功能专门为寻求入籍的绿卡持有人设计。

## 无账户或注册

Green Card Trips不要求您创建账户或提供注册信息。您的所有数据都本地存储在您的设备上。我们不在任何服务器上维护用户账户。

## 数据和隐私

您对服务的使用也受我们的隐私政策管辖。请查看我们的隐私政策以了解我们如何处理信息。

总结:
- 您的所有数据都本地存储在您的设备上
- 我们不收集、访问或传输您的个人信息
- 您对您的数据拥有完全控制权

## 网站分析和 Cookies

### 分析使用

我们在网站上使用 Google Analytics 来了解访问者如何使用服务并改善用户体验。这有助于我们识别哪些功能最有帮助,为绿卡持有者优化内容,并提高我们网站的有效性。

分析的使用仅限于我们的网站。Green Card Trips 移动应用程序不使用任何分析或跟踪——您的所有移民数据都按照我们的隐私政策中所述保留在您的设备上。

### Cookies 和跟踪

我们的网站仅通过 Google Analytics 将 cookies 用于分析目的。这些 cookies 帮助我们了解网站使用模式并为绿卡持有者改进网站。

**重要:**
- 移动应用程序不使用 cookies 或任何跟踪技术
- 网站上使用的所有 cookies 都是可选的,需要您的同意
- 您可以随时通过浏览器设置或我们的 cookie 同意横幅选择退出分析 cookies

有关以下详细信息:
- 我们使用哪些 cookies
- 我们为什么使用它们
- 如何管理 cookie 偏好设置
- 您关于 cookies 的权利

请参阅我们的 Cookie 政策和隐私政策。

您在启用 cookies 的情况下使用网站即表示接受我们按照 Cookie 政策中所述使用分析 cookies。如果您不同意使用 cookies,您可以在浏览器设置中禁用它们,尽管这可能会影响某些网站功能(注意:即使没有 cookies,核心信息仍然可以访问)。

## App Store条款

如果您从Apple App Store下载了应用程序,您承认并同意:

- 这些条款是您与Green Card Trips之间的条款,而非Apple
- Apple没有义务为应用程序提供维护或支持
- Apple不对与应用程序相关的任何索赔负责
- 您必须遵守使用应用程序时适用的所有第三方条款

## 更新和修改

### 服务更新

我们可能随时更新、修改或停止服务(或其任何部分),有或没有通知。如果服务的任何部分在任何时候不可用,我们不承担责任。

### 条款变更

我们保留随时修改这些条款的权利。如果我们进行重大变更,我们将通过更新"最后更新"日期来通知您,并在适当时通过应用程序或网站通知您。

您在变更发布后继续使用服务即表示您接受修订后的条款。如果您不同意新条款,您必须停止使用服务。

## 赔偿

您同意赔偿、辩护并使Green Card Trips及其开发人员、高级职员、员工和代理人免受因以下原因引起的任何索赔、责任、损害、损失、成本和费用(包括合理的律师费):

1. 您使用或滥用服务
2. 您违反这些条款
3. 您侵犯任何其他人或实体的权利
4. 您提供的任何不准确或虚假信息
5. 您基于服务信息做出的任何决定

## 管辖法律和争议解决

### 管辖法律

这些条款应受美国加利福尼亚州法律管辖和解释,不考虑其法律冲突原则。

### 管辖权

您同意因这些条款或服务引起或与之相关的任何法律诉讼或程序应专门在位于加利福尼亚州的联邦或州法院提起,并且您同意这些法院的属人管辖权。

### 争议解决

在提起任何正式法律诉讼之前,您同意首先通过support@greencardtrips.com与我们联系,尝试非正式地解决任何争议。

## 可分割性

如果这些条款的任何条款被认定无效、非法或不可执行,其余条款将继续完全有效。

## 完整协议

这些条款连同我们的隐私政策构成您与Green Card Trips之间关于服务的完整协议,并取代任何先前的协议。

## 不放弃

我们未能执行这些条款的任何权利或条款不视为放弃该权利或条款。

## 联系我们

如果您对这些条款有任何疑问、顾虑或反馈,请联系我们:

**电子邮件:** support@greencardtrips.com
**网站:** https://greencardtrips.com

我们将在合理的时间内回复您的询问。

---

## 摘要

使用Green Card Trips即表示您承认:

✓ 这是一款信息工具,而非法律建议
✓ 您有责任通过USCIS或律师验证所有计算
✓ 您必须输入准确的信息才能获得准确的结果
✓ 我们不对任何移民相关的决定或结果负责
✓ 您已阅读、理解并同意这些条款

**如有疑问,请咨询移民律师。您的公民身份申请太重要了,不能仅依赖任何自动化工具。**

`,
    },
  },
};

export default templateConfig;
