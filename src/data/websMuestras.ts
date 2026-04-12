import fs from 'node:fs';
import path from 'node:path';

const WEB_SAMPLES_BASE = '/muestras/webs-muestras';
const WEB_SAMPLES_DIR = path.join(process.cwd(), 'public', 'muestras', 'webs-muestras');

let cachedEntries: Set<string> | null = null;

function getEntries() {
	if (cachedEntries) return cachedEntries;
	if (!fs.existsSync(WEB_SAMPLES_DIR)) {
		cachedEntries = new Set();
		return cachedEntries;
	}

	const entries = fs.readdirSync(WEB_SAMPLES_DIR, { withFileTypes: true });
	cachedEntries = new Set(entries.map((entry) => entry.name.toLowerCase()));
	return cachedEntries;
}

export function getRubroLiveUrl(slug: string): string | null {
	const entries = getEntries();
	const fileCandidates = [
		`${slug}.html`,
		`${slug.replace(/-/g, '_')}.html`,
	];

	for (const file of fileCandidates) {
		if (entries.has(file.toLowerCase())) {
			return `${WEB_SAMPLES_BASE}/${file}`;
		}
	}

	const dirCandidates = [
		slug,
		slug.replace(/-/g, '_'),
	];

	for (const dir of dirCandidates) {
		if (entries.has(dir.toLowerCase())) {
			return `${WEB_SAMPLES_BASE}/${dir}/index.html`;
		}
	}

	return null;
}
