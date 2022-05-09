const btn = document.querySelector('#button');
const joke = document.querySelector('#joke');

btn.addEventListener('click', (event) => {
    async function fetchingData() {
        const res = await fetch(`https://api.jokes.one/jod`);
        return res
    }

    fetchingData().then((response) => {
        return response.json();
    })
        .then((response) => {
            joke.innerHTML =
                response.contents.jokes[0].joke.text.split('."')[2] + '"';
        })
        .catch((error) => {
            console.log(error);
        });
});
