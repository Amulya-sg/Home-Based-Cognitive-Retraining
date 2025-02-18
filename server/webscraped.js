const getNews = async () => {
    const res = await fetch('https://www.spectrumnews.org/news/');
    const html = await res.text();

    console.log(html);

}
export default getNews;