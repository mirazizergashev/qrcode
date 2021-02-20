// const HummusRecipe = require('hummus-recipe');
// const pdfDoc = new HummusRecipe('input.pdf', 'output.pdf');
// pdfDoc
//     // edit 1st page
//     .editPage(1)
//     .text('Qoshilgan matn shu yerda turadi...', 15, 300)
//     // .rectangle(20, 20, 40, 100)
//     // .comment('Add 1st comment annotaion', 200, 300)
//     .image('image.jpg', 400, 10, {width: 200, keepAspectRatio: true})
//     .endPage()
//     // edit 2nd page
//     // .editPage(2)
  
//     // .endPage()
//     // end and save
//     .endPDF();

//kodlash

// const HummusRecipe = require('hummus-recipe');
// const pdfDoc = new HummusRecipe('input.pdf', 'output.pdf');
 
// pdfDoc
//     .encrypt({
//         userPassword: '123',
//         ownerPassword: '12345',
//         userProtectionFlag: 4
//     })
//     .endPDF();


//
const HummusRecipe = require('hummus-recipe');
const pdfDoc = new HummusRecipe('input.pdf', 'output.pdf');
pdfDoc.
recipe
    .structure('pdf-structure.txt')
    .endPDF(done);