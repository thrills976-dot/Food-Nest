async function checkImg(url) {
    try {
        const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        console.log(url, res.status);
    } catch (e) {
        console.log(url, 'error', e.message);
    }
}

async function main() {
    await checkImg('https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=800');
    // Or we find a valid rice dish
    await checkImg('https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=800'); // random food
}
main();
