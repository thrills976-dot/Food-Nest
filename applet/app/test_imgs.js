const https = require('https');

async function getImageUrl(wikiPage) {
    return new Promise((resolve) => {
        https.get(`https://en.wikipedia.org/wiki/${wikiPage}`, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                const match = data.match(/src="(\/\/upload\.wikimedia\.org\/wikipedia\/commons\/thumb\/[^"]+)"/);
                if (match) {
                    resolve('https:' + match[1]);
                } else {
                    resolve('Not found for ' + wikiPage);
                }
            });
        }).on('error', () => resolve('Error'));
    });
}

async function main() {
    console.log('Egusi:', await getImageUrl('Egusi_soup'));
    console.log('Jollof:', await getImageUrl('Jollof_rice'));
    console.log('Steak:', await getImageUrl('Steak'));
    console.log('Ribs:', await getImageUrl('Pork_ribs'));
}

main();
