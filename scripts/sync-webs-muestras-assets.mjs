import { cp, mkdir, readdir, rm, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFile, writeFile } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const sourceDir = path.join(rootDir, 'src', 'pages', 'muestras', 'webs-muestras');
const targetDir = path.join(rootDir, 'public', 'muestras', 'webs-muestras');

function isRootIndexHtml(relativePath) {
	const normalized = relativePath.replaceAll('\\', '/');
	// Keeps Astro page routing ownership of each sample's main index route.
	return /^[^/]+\/index\.html$/i.test(normalized);
}

function ensureBaseHref(indexHtml, slug) {
	const baseHref = `/muestras/webs-muestras/${slug}/`;
	const baseTag = `<base href="${baseHref}"/>`;

	if (/<base\s+href=/i.test(indexHtml)) {
		return indexHtml.replace(/<base\s+href="[^"]*"\s*\/?>/i, baseTag);
	}

	return indexHtml.replace(/<head>/i, `<head>\n${baseTag}`);
}

async function collectFiles(dir, baseDir = dir) {
	const files = [];
	const entries = await readdir(dir, { withFileTypes: true });

	for (const entry of entries) {
		const absolutePath = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			files.push(...(await collectFiles(absolutePath, baseDir)));
			continue;
		}
		if (!entry.isFile()) continue;

		const relativePath = path.relative(baseDir, absolutePath);
		files.push({ absolutePath, relativePath });
	}

	return files;
}

async function main() {
	try {
		const sourceInfo = await stat(sourceDir);
		if (!sourceInfo.isDirectory()) {
			console.log(`[sync:webs-muestras-assets] Source is not a directory: ${sourceDir}`);
			return;
		}
	} catch {
		console.log(`[sync:webs-muestras-assets] Source not found, skipping: ${sourceDir}`);
		return;
	}

	await rm(targetDir, { recursive: true, force: true });
	await mkdir(targetDir, { recursive: true });

	const files = await collectFiles(sourceDir);
	let copiedCount = 0;
	let updatedIndexCount = 0;

	const sampleDirs = await readdir(sourceDir, { withFileTypes: true });
	for (const dirent of sampleDirs) {
		if (!dirent.isDirectory()) continue;
		const slug = dirent.name;
		const indexPath = path.join(sourceDir, slug, 'index.html');
		try {
			const original = await readFile(indexPath, 'utf8');
			const updated = ensureBaseHref(original, slug);
			if (updated !== original) {
				await writeFile(indexPath, updated, 'utf8');
				updatedIndexCount += 1;
			}
		} catch {
			// Ignore folders without index.html
		}
	}

	for (const file of files) {
		if (isRootIndexHtml(file.relativePath)) continue;

		const destination = path.join(targetDir, file.relativePath);
		await mkdir(path.dirname(destination), { recursive: true });
		await cp(file.absolutePath, destination, { force: true });
		copiedCount += 1;
	}

	console.log(
		`[sync:webs-muestras-assets] Updated ${updatedIndexCount} index file(s) and synced ${copiedCount} asset file(s) to ${path.relative(rootDir, targetDir)}`
	);
}

await main();
