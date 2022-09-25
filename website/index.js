const canvas = document.getElementById('display_screen');
const context = canvas.getContext('2d');

class Canvas  {
    constructor() {}
    
    drawPixel(x, y, color) {
        // https://docs.google.com/document/d/1pFlevjsf_PRcOb0QLJp9IGihgYsVtUIxEW5ZZqtu0z0/edit?fbclid=IwAR0Z3XguUl5Od3PyDj-o_j335c_lPgXesB8VPaIVTI4lQud8VVQDpg7peuk#
        context.fillStyle = color;
        context.fillRect(x, y, 1, 1);
    }

    drawText(text, x, y, color='white', fontSize=16) {
        context.fillStyle = color;
        context.font = `${fontSize}px Arial`;
        context.fillText(text, x, y);
    }
}