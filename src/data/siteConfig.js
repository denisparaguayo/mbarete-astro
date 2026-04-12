export const siteConfig = {
	name: 'Mbarete Digital',
	url: 'https://mbarete.online/',

	// CONTACTO
	email: 'mbarete.digital01@gmail.com',
	phone: '0987129446',
	whatsapp: '595987129446',

	// MENSAJES CENTRALIZADOS
	messages: {
		default:
			'Hola Mbarete Digital! Quiero consultar sobre una pagina web para mi negocio 👋',

		faq: 'Hola Mbarete Digital! Estuve viendo la pagina de preguntas frecuentes y quiero hacer una consulta 👋',

		plan: (plan) =>
			`Hola Mbarete Digital! Quiero consultar sobre el Plan ${plan} para mi negocio 👋`,

		rubro: (rubro) =>
			`Hola Mbarete Digital! Quiero una pagina web para mi negocio de ${rubro} 👋`,
	},

	// UBICACION
	address: {
		city: 'Asuncion',
		country: 'Paraguay',
	},

	// HORARIOS
	hours: {
		days: 'Lunes a Viernes',
		time: '08:00-18:00',
	},

	// REDES
	socials: {
		instagram: 'https://www.instagram.com/digitalmbarete',
		facebook: 'https://www.facebook.com/mbarete.digital/',
	},

	// SEO GLOBAL
	seo: {
		defaultTitle:
			'Diseno Web en Paraguay | Paginas Web Profesionales - Mbarete Digital',

		defaultDescription:
			'Diseno web en Paraguay para negocios en Asuncion y todo el pais. SEO, WhatsApp y entrega rapida.',

		ogImage: 'https://mbarete.online/og-image.jpg',
		localCities: [
			'Asuncion',
			'San Lorenzo',
			'Capiata',
			'Luque',
			'Fernando de la Mora',
			'Lambare',
		],
	},
};

// Generador de URL WhatsApp (global)
export function getWhatsAppUrl(message) {
	const text = message || siteConfig.messages.default;
	return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`;
}

// Helpers especificos
export function getPlanWhatsApp(plan) {
	return getWhatsAppUrl(siteConfig.messages.plan(plan));
}

export function getRubroWhatsApp(rubro) {
	return getWhatsAppUrl(siteConfig.messages.rubro(rubro));
}
