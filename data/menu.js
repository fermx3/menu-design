const menu = [
  {
    categoria: 'ENTRADAS',
    categoriaEn: 'APPETIZERS',
    platillos: [
      {
        nombre: 'guacamole',
        precio: 165,
        descripcion:
          'Aguacate, cebolla, tomate, cilantro, lechuga y queso fresco mezclado para crear una delicia mexicana.',
        descripcionEn:
          'Avocado, onion, tomato, cilantro, lettuce and cheese mixed together to create a traditional Mexican dish.',
        img: 'https://static.wixstatic.com/media/67c849_ba8029fb61d444bd8b427e315f2765a3~mv2.jpg',
      },
      {
        nombre: 'nachos',
        precio: 180,
        descripcion:
          'Totopos crujientes y calientes acompañados de queso Gouda, queso cheddar, jalapeño, pico de gallo y frijoles.',
        descripcionEn:
          'Crunchy and hot tortilla chips with Gouda cheese, cheddar cheese, jalapeños, pico de gallo and beans.',
        img: 'https://static.wixstatic.com/media/67c849_0853fd31ad894f91a333999a17ee559b~mv2.jpg',
        opciones: [
          { nombre: 'Pollo', nombreEn: 'Chicken', precio: 215 },
          { nombre: 'Arrachera', nombreEn: 'Flank steak', precio: 225 },
        ],
      },
    ],
  },
];
