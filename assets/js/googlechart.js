google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(drawMaterial);

function drawMaterial() {
    //grafica para datos en latinoamerica
    var data_latam = new google.visualization.DataTable();
    data_latam.addColumn('timeofday', 'Incremento de venta');
    data_latam.addColumn('number', '2021');
    data_latam.addColumn('number', '2025');

    data_latam.addRows([
        [{ v: [6, 0, 0], f: 'Miiles de millones de dolares' }, 21.4, 27.9],

    ]);

    var options_latam = {
        title: 'Mercado de E-commerce Latinoamerica y El Caribe ',
        hAxis: {
            title: '2021-2025',
            format: 'h:mm a',
            viewWindow: {
                min: [1, 30, 0],
                max: [17, 30, 0]
            }
        },
        vAxis: {

            title: 'Incremento en miles de millones de dolares'

        }
    };

    var graphic_latam = new google.charts.Bar(document.getElementById('latam_graphic'));
    graphic_latam.draw(data_latam, options_latam);

    //grafica para datos en Peru
    var data_peru = new google.visualization.DataTable();
    data_peru.addColumn('timeofday', 'Incremento de venta');
    data_peru.addColumn('number', '2021');
    data_peru.addColumn('number', '2025');

    data_peru.addRows([
        [{ v: [6, 0, 0], f: 'Miles de millones de dolares' }, 2.9, 3.7],

    ]);

    var options_peru = {
        title: 'Mercado de E-commerce Peru ',
        hAxis: {
            title: '2021-2025',
            format: 'h:mm a',
            viewWindow: {
                min: [1, 30, 0],
                max: [17, 30, 0]
            }
        },
        vAxis: {

            title: 'Incremento en miles de millones de dolares'

        }
    };

    var graphic_peru = new google.charts.Bar(document.getElementById('peru_graphic'));
    graphic_peru.draw(data_peru, options_peru);

    //grafica para datos en Colombia
    var data_colombia = new google.visualization.DataTable();
    data_colombia.addColumn('timeofday', 'Incremento de venta');
    data_colombia.addColumn('number', '2021');
    data_colombia.addColumn('number', '2025');

    data_colombia.addRows([
        [{ v: [6, 0, 0], f: 'Miles de millones de dolares' }, 5.6, 7.1],

    ]);

    var options_colombia = {
        title: 'Mercado de E-commerce Colombia ',
        hAxis: {
            title: '2021-2025',
            format: 'h:mm a',
            viewWindow: {
                min: [1, 30, 0],
                max: [17, 30, 0]
            }
        },
        vAxis: {

            title: 'Incremento en miles de millones de dolares'

        }
    };

    var graphic_colombia = new google.charts.Bar(document.getElementById('colombia_graphic'));
    graphic_colombia.draw(data_colombia, options_colombia);

    //grafica para datos en Argentina
    var data_argentina = new google.visualization.DataTable();
    data_argentina.addColumn('timeofday', 'Incremento de venta');
    data_argentina.addColumn('number', '2021');
    data_argentina.addColumn('number', '2025');

    data_argentina.addRows([
        [{ v: [6, 0, 0], f: 'Miles de millones de dolares' }, 6.1, 9.7],

    ]);

    var options_argentina = {
        title: 'Mercado de E-commerce Argentina ',
        hAxis: {
            title: '2021-2025',
            format: 'h:mm a',
            viewWindow: {
                min: [1, 30, 0],
                max: [17, 30, 0]
            }
        },
        vAxis: {

            title: 'Incremento en miles de millones de dolares'

        }
    };

    var graphic_argentina = new google.charts.Bar(document.getElementById('argentina_graphic'));
    graphic_argentina.draw(data_argentina, options_argentina);

    //grafica para datos en México
    var data_mexico = new google.visualization.DataTable();
    data_mexico.addColumn('timeofday', 'Incremento de venta');
    data_mexico.addColumn('number', '2021');
    data_mexico.addColumn('number', '2025');

    data_mexico.addRows([
        [{ v: [6, 0, 0], f: 'Miles de millones de dolares' }, 17.3, 19.3],

    ]);

    var options_mexico = {
        title: 'Mercado de E-commerce México ',
        hAxis: {
            title: '2021-2025',
            format: 'h:mm a',
            viewWindow: {
                min: [1, 30, 0],
                max: [17, 30, 0]
            }
        },
        vAxis: {

            title: 'Incremento en miles de millones de dolares'

        }
    };

    var graphic_mexico = new google.charts.Bar(document.getElementById('mexico_graphic'));
    graphic_mexico.draw(data_mexico, options_mexico);

    //grafica para datos en Brasil
    var data_brasil = new google.visualization.DataTable();
    data_brasil.addColumn('timeofday', 'Incremento de venta');
    data_brasil.addColumn('number', '2021');
    data_brasil.addColumn('number', '2025');

    data_brasil.addRows([
        [{ v: [6, 0, 0], f: 'Miles de millones de dolares' }, 21.4, 27.8],

    ]);

    var options_brasil = {
        title: 'Mercado de E-commerce Brasil ',
        hAxis: {
            title: '2021-2025',
            format: 'h:mm a',
            viewWindow: {
                min: [1, 30, 0],
                max: [17, 30, 0]
            }
        },
        vAxis: {

            title: 'Incremento en miles de millones de dolares'

        }
    };

    var graphic_brasil = new google.charts.Bar(document.getElementById('brasil_graphic'));
    graphic_brasil.draw(data_brasil, options_brasil);
}