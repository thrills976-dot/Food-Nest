async function checkImg(url) {
    try {
        const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        console.log(url, res.status);
    } catch (e) {
        console.log(url, 'error', e.message);
    }
}

async function main() {
    await checkImg('https://upload.wikimedia.org/wikipedia/commons/d/d0/EGUSI.JPG');
    await checkImg('https://upload.wikimedia.org/wikipedia/commons/4/4e/Jollof_rice_and_chicken.jpg');
    await checkImg('https://upload.wikimedia.org/wikipedia/commons/c/c3/Steak_medium_rare.jpg');
    await checkImg('https://upload.wikimedia.org/wikipedia/commons/9/98/Pork_ribs-001.jpg');
}
main();
