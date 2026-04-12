import { getWhatsAppUrl } from './siteConfig';

export interface ServiceItem {
	slug: string;
	name: string;
	icon: string;
	summary: string;
	price: string;
	benefits: string[];
	deliverables: string[];
	seoTitle: string;
	seoDescription: string;
}

export interface ServicePlan {
	slug: 'basico' | 'estandar' | 'pro';
	name: string;
	price: string;
}

export const services: ServiceItem[] = [
	{
		slug: 'creacion-paginas-web',
		name: 'Creación de paginas web',
		icon: '💻',
		summary:
			'Web profesional para presentar tu negocio, captar consultas y vender mas por WhatsApp.',
		price: 'Desde Gs. 800.000',
		benefits: [
			'Entrega rápida según el plan elegido',
			'Diseño adaptable a celular, tablet y desktop',
			'SEO inicial para aparecer en Google',
		],
		deliverables: [
			'Pagina principal con propuesta comercial clara',
			'Botones de contacto directos a WhatsApp',
			'Publicación y configuracion técnica base',
		],
		seoTitle: 'Creación de paginas web en Paraguay',
		seoDescription:
			'Creación de paginas web para negocios en Paraguay con SEO y WhatsApp.',
	},
	{
		slug: 'desarrollo-web',
		name: 'Desarrollo web a medida',
		icon: '⚙️',
		summary:
			'Desarrollo web con codigo limpio y alto rendimiento para sitios que cargan rapido.',
		price: 'Cotizacion según alcance',
		benefits: [
			'Mejor rendimiento y tiempos de carga',
			'Estructura técnica lista para escalar',
			'Base optimizada para SEO tecnico',
		],
		deliverables: [
			'Arquitectura del sitio y desarrollo frontend',
			'Buenas practicas de performance y accesibilidad',
			'Soporte de puesta en produccion',
		],
		seoTitle: 'Desarrollo web en Paraguay',
		seoDescription:
			'Desarrollo web en Paraguay con foco en velocidad, SEO técnico y experiencia de usuario.',
	},
	{
		slug: 'catalogo-digital-menu',
		name: 'Catalogo digital o menu',
		icon: '📋',
		summary:
			'Listado visual de productos o platos con imagen, precio y boton para pedir por WhatsApp.',
		price: 'Desde Gs. 400.000',
		benefits: [
			'Mas claridad para el cliente al momento de elegir',
			'Mejor presentacion visual de productos',
			'Pedido directo por WhatsApp sin fricción',
		],
		deliverables: [
			'Seccion de productos o menu organizada',
			'Tarjetas con foto, descripcion y precio',
			'CTA de consulta o pedido por WhatsApp',
		],
		seoTitle: 'Catalogo digital para negocios',
		seoDescription:
			'Catalogo digital para restaurantes, tiendas y negocios con pedido por WhatsApp.',
	},
	{
		slug: 'seo-local-google-maps',
		name: 'SEO local (Google Maps)',
		icon: '📍',
		summary:
			'Servicio mensual para mejorar presencia local en búsquedas de Google y Google Maps.',
		price: 'Gs. 320.000 / mes',
		benefits: [
			'Mayor visibilidad frente a clientes de tu zona',
			'Mas oportunidades de consultas orgánicas',
			'Seguimiento mensual de avances',
		],
		deliverables: [
			'Optimizacion de presencia local y palabras clave',
			'Ajustes SEO en sitio y ficha comercial',
			'Reporte básico de progreso mensual',
		],
		seoTitle: 'SEO local en Paraguay',
		seoDescription:
			'Servicio de SEO local para mejorar posicionamiento en Google y Google Maps.',
	},
	{
		slug: 'manejo-redes-sociales',
		name: 'Manejo de redes sociales',
		icon: '📱',
		summary:
			'Gestion de contenidos y presencia en redes para mantener tu marca activa y visible.',
		price: 'Desde Gs. 450.000 / mes',
		benefits: [
			'Presencia consistente con tu marca',
			'Mejor comunicación con tu audiencia',
			'Mas trafico hacia WhatsApp y sitio web',
		],
		deliverables: [
			'Plan de contenidos mensual',
			'Piezas visuales y textos para publicaciones',
			'Calendario básico de publicaciones',
		],
		seoTitle: 'Manejo de redes sociales para negocios',
		seoDescription:
			'Servicio de manejo de redes sociales para negocios en Paraguay.',
	},
	{
		slug: 'mantenimiento-mensual-web',
		name: 'Mantenimiento mensual web',
		icon: '🛠️',
		summary:
			'Mantenimiento para mantener tu sitio actualizado, estable y funcionando correctamente.',
		price: 'Gs. 170.000 / mes',
		benefits: [
			'Menos riesgos por desactualizacion',
			'Cambios pequeños sin frenar tu operación',
			'Soporte continuo para tu sitio',
		],
		deliverables: [
			'Actualizaciones de contenido programadas',
			'Revisiones de funcionamiento general',
			'Soporte de ajustes menores',
		],
		seoTitle: 'Mantenimiento web mensual',
		seoDescription:
			'Mantenimiento web mensual para sitios de negocios en Paraguay.',
	},
	{
		slug: 'email-profesional',
		name: 'Email profesional',
		icon: '✉️',
		summary:
			'Configuracion de correo corporativo con dominio propio para reforzar imagen de marca.',
		price: 'Gs. 700.000 / año',
		benefits: [
			'Mas confianza para clientes y proveedores',
			'Imagen mas profesional en comunicaciones',
			'Orden comercial con identidad propia',
		],
		deliverables: [
			'Configuracion de correo tipo info@tunegocio.com',
			'Pruebas de envió y recepción',
			'Guía rápida de uso para tu equipo',
		],
		seoTitle: 'Email profesional con dominio propio',
		seoDescription:
			'Email profesional para negocios con dominio propio y configuracion inicial.',
	},
];

export const servicePlans: ServicePlan[] = [
	{
		slug: 'basico',
		name: 'Plan Básico',
		price: 'Gs. 800.000',
	},
	{
		slug: 'estandar',
		name: 'Plan Estándar',
		price: 'Gs. 1.400.000',
	},
	{
		slug: 'pro',
		name: 'Plan Pro',
		price: 'Gs. 3.800.000',
	},
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
	return services.find((service) => service.slug === slug);
}

export function getServiceBySlugOrThrow(slug: string): ServiceItem {
	const service = getServiceBySlug(slug);
	if (!service) {
		throw new Error(`Falta el servicio '${slug}' en data/services.ts`);
	}
	return service;
}

export function getServicePlanBySlug(
	slug: ServicePlan['slug']
): ServicePlan | undefined {
	return servicePlans.find((plan) => plan.slug === slug);
}

export function getServicePlanBySlugOrThrow(
	slug: ServicePlan['slug']
): ServicePlan {
	const plan = getServicePlanBySlug(slug);
	if (!plan) {
		throw new Error(`Falta el plan '${slug}' en data/services.ts`);
	}
	return plan;
}

export function getGsAmount(price: string): string {
	return price.match(/Gs\.\s*([\d.]+)/)?.[1] ?? '';
}

export function getServiceWhatsAppUrl(serviceName: string): string {
	return getWhatsAppUrl(
		`Hola Mbarete Digital! Quiero consultar sobre el servicio de ${serviceName}.`
	);
}
