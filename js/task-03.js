// ------------------HW-7__task--03

const images = [
    {
        url:
            'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url:
            'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url:
            'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const galleryGroup = document.querySelector("#gallery");

images.forEach((el) => {
    const galleryGroupElement = document.createElement('li');
    const image = document.createElement('img');
    image.src = el.url;
    image.alt = el.alt;
    // console.log(image.alt)
    // console.log(image.url)
    galleryGroupElement.insertAdjacentElement('beforeend', image);
    galleryGroup.insertAdjacentElement('beforeend', galleryGroupElement)
    console.log(galleryGroup.insertAdjacentElement('beforeend', galleryGroupElement))

})

