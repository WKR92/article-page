function importAll(r) {
    return r.keys().map(r);
}
const photos = importAll(require.context('../photos', false, /\.(png|jpe?g|svg)$/));

const similarNews = [
    {
        "title"   : "Koronawirus w Polsce. Najnowszy raport MZ o respiratorach",
        "picture" : photos.filter(e => e.includes("szpital"))
    },
    {
        "title"   : "Elastyczni i sprytni obrońcy chronią dzieci przed COVID-19. Z dorosłymi jest inaczej",
        "picture" : photos.filter(e => e.includes("dziecko"))
    },
    {
        "title"   : "Dyskusja lekarzy o lockdownie. 'Należy natychmiast go zakończyć'",
        "picture" : photos.filter(e => e.includes("karetka"))
    },
    {
        "title"   : "Koronawirus. Niemcy w lockdownie. Przedsiębiorcy są wściekli",
        "picture" : photos.filter(e => e.includes("niemcy"))
    },
    {
        "title"   : "Niedzielski o lockdownie. 'Obostrzenia należy przedłużyć'",
        "picture" : photos.filter(e => e.includes("polityk0"))
    },
]

export default similarNews;






