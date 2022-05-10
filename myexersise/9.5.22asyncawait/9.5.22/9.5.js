
const randomPic = () => {
    fetch('https://dog.ceo/api/breeds/image/random     ')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const container = document.querySelector('.container');
            const image = document.createElement('img');
            image.src = data.message;
            image.height = 150;
            container.appendChild(image);
        })
        .catch((err) => {
            console.log(err);
        });
};
const button = document
    .querySelector('button')
    .addEventListener('click', randomPic)