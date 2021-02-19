const { app } = require('../app.js');
const supertest = require('supertest');
const request = supertest(app);
const { clothesInventory } = require('../data.js');


it('should respond with clothing inventory', async (done) => {
    const expectation = {
        inventory: clothesInventory
    };

    const response = await request.get('/inventory');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectation);
    done();
});

// it('should respond with clothing inventory', async done => {
//     const myData = [
//         {
//             id: 1,
//             name: 'Floral Silk Top',
//             image: '../assets/blue-silk-top.jpg',
//             description: 'blue silk top with a pan collar',
//             category: 'vintage-tops',
//             size: 'Large',
//             price: 60
//         },
//         {
//             id: 2,
//             name: 'Denim Vest',
//             image: '../assets/denim-vest-velvet-collar.jpg',
//             description: 'denim vest with a black suede collar',
//             category: 'vintage-tops',
//             size: 'medium',
//             price: 45
//         }
//     ];
//     const response = await request.get('/inventory');

//     expect(response.status).toBe(200);
//     expect(response.body).toEqual(myData);
//     done();
// });