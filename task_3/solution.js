function renderCartItem(item) {
    const product = item;

    // Задание №3.1. Формирование строки корзины

    //let item = {   // product - объект вида {id: id, title: title, count: count, price: price}
    //    id: 12,
    //    title: 'Суши',
    //    count: 6,
    //    price: '450.00'
    };
    // например, {id: 1, title: 'Пицца', count: 5, price: '500.00'}, где
    // id - идентификатор
    // title - наименование
    // price - цена
    // count - количество

    // сформируйте строку itemCountText вида:
    // количество × цена ₽ = стоимость ₽
    // например,
    // 5 × 500.00 ₽ = 2500 ₽
    
    let itemCountText = "" // 1. Создайте переменную itemCountText, равную пустой строке
    
    itemCountText = `${ item.count} × ${item.price} ₽ = ${item.count * item.price} ₽`;

   
    // Конец решения задания №3.1.

    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}
