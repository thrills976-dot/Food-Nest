async function checkImg(url) {
    try {
        const res = await fetch(url + '?auto=format&fit=crop&w=600&q=80', { headers: { 'User-Agent': 'Mozilla/5.0' } });
        console.log(url, res.status);
    } catch (e) {
        console.log(url, 'error', e.message);
    }
}

async function main() {
    await checkImg('https://images.unsplash.com/photo-1547592180-85f173990554');
    await checkImg('https://images.unsplash.com/photo-1565557623262-b51c2513a641');
    await checkImg('https://images.unsplash.com/photo-1582878826629-29b7ad1cb438');
    await checkImg('https://images.unsplash.com/photo-1621280336219-c68e1abdc6b2');
}
main();
