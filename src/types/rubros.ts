export interface RubroSeo {
	title: string;
	description: string;
	keywords?: string[];
	canonicalPath: string;
}

export interface RubroCta {
	label: string;
	href: string;
	whatsapp?: string;
}

export interface RubroBusiness {
	nombre: string;
	rubro: string;
	slogan?: string;
	descripcion: string;
	ciudad: string;
	direccion?: string;
	telefono?: string;
	whatsapp?: string;
	email?: string;
	instagram?: string;
	facebook?: string;
	web?: string;
	logoEmoji?: string;
}

export interface RubroStat {
	numero: string;
	label: string;
}

export interface RubroHorarios {
	lunesViernes: string;
	sabado: string;
	domingo: string;
}

export interface RubroServicio {
	emoji?: string;
	nombre: string;
	desc: string;
	precio?: string;
}

export interface RubroGaleriaItem {
	emoji?: string;
	label: string;
	color?: string;
}

export interface RubroColores {
	oscuro?: string;
	medio?: string;
	claro?: string;
	suave?: string;
	crema?: string;
}

export interface RubroItem {
	key: string;
	slug: string;
	schemaType: string;
	seo: RubroSeo;
	cta: RubroCta;
	business: RubroBusiness;
	stats: RubroStat[];
	horarios: RubroHorarios;
	servicios: RubroServicio[];
	galeria: RubroGaleriaItem[];
	colores?: RubroColores;
}

export interface RubrosDataset {
	generatedAt: string;
	source: string;
	total: number;
	items: RubroItem[];
}
