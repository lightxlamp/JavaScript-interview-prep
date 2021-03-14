console.log('start request...');

let p = new Promise((resolve, reject) => {
    setTimeout(function() {
        console.log('fetching user photos');
        let photosArray = ['url1', 'url2', 'url3'];
        console.log('Original photos: ', photosArray);
        resolve(photosArray)
    }, 2000)
}).then(data => {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            data = data.map(i => i + '_resized')
            console.log('Resizing photos: ', data);
            resolve(data)
        }, 2000);
    })
}).then(data => {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Sending back: ', data);
            resolve(data)
        }, 2000);
    })
}) 