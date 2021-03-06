function createFrameWorkManager() {
    const frameworks = ['Angular', 'React', 'Vue'];

    return {
        print: function() {
           console.log(frameworks.join(', '));     
        },
        add: function(fw) {
            frameworks.push(fw);
        }
    }
}

const manager = createFrameWorkManager();
console.log(manager);
manager.print();
manager.add('jQuery');
manager.print();
// console.log(frameworks); // frameworks is not defined

// So usefulness of this is that we've made framework variable - private
// Seems like more secure.. So we can't change it in some unintentional way accidentally
