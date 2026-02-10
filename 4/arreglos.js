const breakfastMenu = ['Hotcakes', 'Buevitos', 'Omelete', 'Chilaquiles'];
const mainCourseMenu = ['Arrachera', 'Espagetti', 'HAmburguesa', 'Lomo de atun'];
const dessertMenu = ['Pastel', 'Nieve', 'Gelatina', 'Ensaldada de frutas'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
        document.getElementById('lista de desayunos').innerHTML = breakfastMenuItemsHTML;


let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('Lista de platos fuertes').innerHTML = mainCourseItem;       

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('Lista de postres').innerHTML = dessertItem;