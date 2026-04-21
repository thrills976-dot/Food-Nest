async function checkRes(url) {
    const res = await fetch(url.replace('250px', '600px'));
    console.log(url, res.status);
}

async function main() {
    await checkRes('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/EGUSI.JPG/250px-EGUSI.JPG');
    await checkRes('https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Jollof_Rice_with_Stew.jpg/250px-Jollof_Rice_with_Stew.jpg');
    await checkRes('https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Beef_fillet_steak_with_mushrooms.jpg/250px-Beef_fillet_steak_with_mushrooms.jpg');
    await checkRes('https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Balinese_Roasted_Pork_Ribs_-_Iga_Babi_Panggang_Bali.JPG/250px-Balinese_Roasted_Pork_Ribs_-_Iga_Babi_Panggang_Bali.JPG');
}
main();
