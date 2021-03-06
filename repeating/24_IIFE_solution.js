
const result = []

for(var i = 0; i < 5; i++) {
    (function(j) {
        result.push(function() {
            console.log(j);
        })
    }
    )(i)
}

result[0]()
result[3]()

// Self written. Based on lesson 22
// Worked for me
// Author's version - without passing (i)

const resultVlad = []

for(var i = 0; i < 5; i++) {
    (function() {
        var j = i;
        resultVlad.push(function() {
            console.log(j);
        })
    }
    )()
}

resultVlad[0]()
resultVlad[3]()