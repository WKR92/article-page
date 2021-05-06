function importAll(r) {
    return r.keys().map(r);
}
const photos = importAll(require.context('../photos', false, /\.(png|jpe?g|svg)$/));

const recentNews = [
    {
        "title"   : "Nowe obostrzenia. Nieoficjalnie: wiemy co z majówką",
        "picture" : photos.filter(e => e.includes("polityk2"))
    },
    {
        "title"   : "Szczepionka Pfizer. Izrael przekazuje najnowsze doniesienia",
        "picture" : photos.filter(e => e.includes("szczepionka"))
    },
    {
        "title"   : "Kiedy klasy I-III wrócą do szkół? Minister podał datę",
        "picture" : photos.filter(e => e.includes("minister"))
    },
    {
        "title"   : "Koronawirus w Polsce. Obostrzenia przedłużone. Z jednym wyjątkiem",
        "picture" : photos.filter(e => e.includes("polityk3"))
    },
    {
        "title"   : "Brytyjski wariant koronawirusa nie powoduje cięższego przebiegu COVID-19",
        "picture" : photos.filter(e => e.includes("wirus"))
    },
]

export default recentNews;