const {calculateTip} = require('../src/math')

test('should calculate total with tip', ()=>{
    const total = calculateTip(10 , .3)

    expect(total).toBe(13)

    // if(total !==13){
    //     throw new Error('Total tip should be 13. But got '+ total)
    // }
})