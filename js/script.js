document.querySelector('#push').onclick = function() {
    let name = document.querySelector('#name').value;
    let cost = document.querySelector('#cost').value;
    let country = document.querySelector('#country').value;
    let town = document.querySelector('#town').value;
    let availability = document.querySelector('#availability').value;

    if (name == '' || cost == '' || country == '' || town == '') {
        alert('Вы не заполнили какое либо поле');
    } else {
        let goods = {
            "100" : {
            "name" : name,
            "cost" : cost,
            "country" : country,
            "town" : town,
            "sklad" : availability
            }
        };

        console.log(goods);
        let out = '';

        out += '<div class="pricing-table row">'
        for (let key in goods) {
            out += '<div class="col col-md-6 col-lg-4">'
            out += '<div class="package featured">'
            out += '<p class="package-name">' + goods[key].name + '<p>';
            out += '<hr>'
            out += '<p class="price">' + goods[key].cost + '₽' + '<p>';
            out += '<p class="disclaimer">' + 'за штуку' + '</p>'
            out += '<hr>'
            out += '<ul class="features">'
            out += '<li>' + 'Страна: ' + goods[key].country + '<br>';
            out += '<li>' + 'Город: ' + goods[key].town + '<br>';
            out += '<li>' + 'Наличие: ' + goods[key].sklad + '<br>';
            out += '</ul>'
            out += '<hr>'
            out += '<button class="button-primary">Купить</button>'
            out += '</div>';
            out += '</div>';
        };
        out += '</div>';
        document.querySelector('#out').innerHTML = out;
    };
};