async function checkImg(url) {
    try {
        const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        console.log(url, res.status);
    } catch (e) {
        console.log(url, 'error', e.message);
    }
}

async function main() {
    await checkImg('https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=800');
    await checkImg('https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=800');
    await checkImg('https://images.pexels.com/photos/1633503/pexels-photo-1633503.jpeg?auto=compress&cs=tinysrgb&w=800');
    await checkImg('https://images.pexels.com/photos/1618913/pexels-photo-1618913.jpeg?auto=compress&cs=tinysrgb&w=800');
}
main();
