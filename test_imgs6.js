async function checkImg(url) {
    try {
        const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        console.log(url, res.status);
    } catch (e) {
        console.log(url, 'error', e.message);
    }
}

async function main() {
    await checkImg('https://foodish-api.com/images/burger/burger87.jpg');
}
main();
