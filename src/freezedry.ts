import 'zone.js/dist/zone-node';
import { enableProdMode } from '@angular/core';
import { renderModuleFactory } from '@angular/platform-server';
import { AppFreezedryModuleNgFactory } from './aot/src/app/app.freezedry.module.ngfactory';
import * as fs from 'fs';

enableProdMode();

// get some constants up
const INPUT_TEMPLATE_PATH = `./index.html`; // the original 'vanilla' index.html to bootstrap into
const OUTPUT_DIR = './dry'; // where to put freezedried html files
const OUTPUT_EXTENSION = `.html`; // extension for freezedried files
const INDEX_FILENAME = `index`; // filename to give to nameless paths

if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
}

// we could take these paths from args, or from the router... or somewhere else.
const freezedryPaths = [
    '/'
];

// read the original index.html into a buffer string
const INPUT_TEMPLATE_CONTENT = fs.readFileSync(INPUT_TEMPLATE_PATH).toString(); 

for (let path of freezedryPaths) {
    renderModuleFactory(AppFreezedryModuleNgFactory, {
		document: INPUT_TEMPLATE_CONTENT,
		url: path
	}).then(freezedriedPage => {

        // first format the filename we have
        let filename = path.replace(/^[\/]*|[\/]*$/g, ''); // remove any leading and trailing slashes
        if (filename.length === 0) {
			filename = INDEX_FILENAME; // for converting "/" => "index.html"
		}
		const filepath = `${OUTPUT_DIR}/${filename}${OUTPUT_EXTENSION}`;
		
		console.log(`freezedrying ${INPUT_TEMPLATE_PATH} with url '${path}' into ${filepath}`);
		fs.writeFileSync(filepath, freezedriedPage);
    });
}


