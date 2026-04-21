async function checkImg(url) {
    try {
        const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        console.log(url, res.status);
    } catch (e) {
        console.log(url, 'error', e.message);
    }
}

async function main() {
    await checkImg('https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80');
    await checkImg('https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=600&q=80');
    await checkImg('https://images.unsplash.com/photo-1548943487-a2e4142f4fd2?auto=format&fit=crop&w=600&q=80');
    await checkImg('https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80');
}
main();
