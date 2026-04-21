async function getImageUrl(wikiPage) {
    try {
        const res = await fetch(`https://en.wikipedia.org/wiki/${wikiPage}`);
        const data = await res.text();
        const match = data.match(/src="(\/\/upload\.wikimedia\.org\/wikipedia\/commons\/thumb\/[^"]+)"/);
        return match ? 'https:' + match[1] : 'Not found';
    } catch (e) {
        return 'Error: ' + e.message;
    }
}

async function main() {
    console.log('Egusi:', await getImageUrl('Egusi_soup'));
    console.log('Jollof:', await getImageUrl('Jollof_rice'));
    console.log('Steak:', await getImageUrl('Steak'));
    console.log('Ribs:', await getImageUrl('Pork_ribs'));
}
main();
