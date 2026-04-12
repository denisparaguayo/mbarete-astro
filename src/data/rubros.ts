import rubrosRaw from './rubros-astro.json';
import type { RubroItem, RubrosDataset } from '../types/rubros';

const rubrosDataset = rubrosRaw as RubrosDataset;

export function getRubrosDataset(): RubrosDataset {
	return rubrosDataset;
}

export function getRubrosItems(): RubroItem[] {
	return rubrosDataset.items;
}

export function getRubroBySlug(slug: string): RubroItem | undefined {
	return rubrosDataset.items.find((item) => item.slug === slug);
}
