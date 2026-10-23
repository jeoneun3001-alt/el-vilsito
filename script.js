const productos = [
    {
        nombre: "Pastor",
        categoria: "Tacos",
        descripcion: "40g carne, piña, cebolla y cilantro.",
        precio: 35,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Bistec",
        categoria: "Tacos",
        descripcion: "70g carne. Piña, cebolla y cilantro (opcional)",
        precio: 70,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Costilla",
        categoria: "Tacos",
        descripcion: "70g carne. Piña, cebolla y cilantro (opcional)",
        precio: 70,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Chuleta",
        categoria: "Tacos",
        descripcion: "70g carne. Piña, cebolla y cilantro (opcional)",
        precio: 70,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Pollo",
        categoria: "Tacos",
        descripcion: "70g carne. Piña, cebolla y cilantro (opcional)",
        precio: 70,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Chorizo",
        categoria: "Tacos",
        descripcion: "70g carne. Piña, cebolla y cilantro (opcional)",
        precio: 70,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Con queso",
        categoria: "Tacos",
        descripcion: "70g carne, 70g queso. La orden incluye dos piezas de la carne de su preferencia (Pastor, Bistec, Costilla, Chuleta, Pollo o Chorizo)",
        precio: 145,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Con hongo o nopal",
        categoria: "Tacos",
        descripcion: "70g carne, 80g hongo o nopal. La orden incluye dos piezas de la carne de su preferencia (Pastor, Bistec, Costilla, Chuleta, Pollo o Chorizo)",
        precio: 120,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Con queso y hongo o nopal",
        categoria: "Tacos",
        descripcion: "70g carne, 70g queso, 60g hongo o nopal. La orden incluye tres piezas de la carne de su preferencia (Pastor, Bistec, Costilla, Chuleta, Pollo o Chorizo)",
        precio: 235,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Arrachera",
        categoria: "Tacos",
        descripcion: "70g carne, piña, cebolla y cilantro (opcional)",
        precio: 130,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Arrachera con queso",
        categoria: "Tacos",
        descripcion: "70g carne, 70g queso. La orden incluye dos piezas",
        precio: 230,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Arrachera con hongo o nopal",
        categoria: "Tacos",
        descripcion: "70g carne, 70g hongo o nopal. La orden incluye dos piezas",
        precio: 190,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Arrachera con queso y hongo o nopal",
        categoria: "Tacos",
        descripcion: "70g carne, 90g queso, 70g hongo o nopal. La orden incluye tres piezas",
        precio: 290,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Gringa de pastor",
        categoria: "Especialidades",
        descripcion: "60g pastor, 40g queso, piña, cliantro, cebolla.",
        precio: 120,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Gringa con carne",
        categoria: "Especialidades",
        descripcion: "70g carne, 40g queso. La carne es de su preferencia (Bistec, Costilla, Chuleta, Pollo o Chorizo).",
        precio: 145,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Gringa de Arrachera",
        categoria: "Especialidades",
        descripcion: "70g carne, 40g queso.",
        precio: 230,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Volcán",
        categoria: "Especialidades",
        descripcion: "70g carne, 60g queso. La orden incluye dos piezas de la carne es de su preferencia (Pastor, Bistec, Costilla, Chuleta, Pollo o Chorizo).",
        precio: 145,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Volcán de Arrachera",
        categoria: "Especialidades",
        descripcion: "90g carne, 90g queso. La orden incluye dos piezas.",
        precio: 230,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Volcán Charro",
        categoria: "Especialidades",
        descripcion: "30g queso. La orden incluye una pieza.",
        precio: 70,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Bistocino y Cebolla",
        categoria: "Especialidades",
        descripcion: "80g carne, 30g tocino, 30g cebolla. La orden incluye dos pieza.",
        precio: 120,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Queso Hongo",
        categoria: "Especialidades",
        descripcion: "60g queso, 60g hongo. La orden incluye dos pieza.",
        precio: 120,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Campechano",
        categoria: "Especialidades",
        descripcion: "70g carne, 70g chorizo. La orden incluye dos piezas",
        precio: 145,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Campechano con queso",
        categoria: "Especialidades",
        descripcion: "70g carne, 70g chorizo, 100g queso. La orden incluye cuatro piezas",
        precio: 260,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Choriqueso",
        categoria: "Especialidades",
        descripcion: "80g chorizo, 60g queso. La orden incluye dos piezas",
        precio: 145,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Quesadilla",
        categoria: "Especialidades",
        descripcion: "50g queso",
        precio: 80,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Burrita",
        categoria: "Especialidades",
        descripcion: "80g queso, 20g jamón, 30g aguacate",
        precio: 120,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Sincronizada",
        categoria: "Especialidades",
        descripcion: "50g queso, 20g jamón",
        precio: 120,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Alambre",
        categoria: "Especialidades",
        descripcion: "140g carne, 40g tocino, pimiento morrón y cebolla. La carne es de su preferencia (Pastor, Bistec, Costilla, Chuleta, Pollo o Chorizo)",
        precio: 210,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Alambre con queso",
        categoria: "Especialidades",
        descripcion: "140g carne, 80g queso, 40g tocino, pimiento morrón y cebolla. La carne es de su preferencia (Pastor, Bistec, Costilla, Chuleta, Pollo o Chorizo)",
        precio: 325,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Alambre de Arrachera",
        categoria: "Especialidades",
        descripcion: "140g carne, 50g tocino, pimiento morrón y cebolla.",
        precio: 260,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Alambre de Arrachera con queso",
        categoria: "Especialidades",
        descripcion: "140g carne, 140g queso, 50g tocino, pimiento morrón y cebolla.",
        precio: 365,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Nopal Queso",
        categoria: "Especialidades",
        descripcion: "60g queso, 60g nopal. La orden incluye dos piezas.",
        precio: 120,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Queso Cazuela",
        categoria: "Especialidades",
        descripcion: "60g queso.",
        precio: 120,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Chile Suizo",
        categoria: "Especialidades",
        descripcion: "60g queso, 60g pimiento morrón. La orden incluye dos piezas.",
        precio: 120,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },

    {
        nombre: "Chile Suizo",
        categoria: "Especialidades",
        descripcion: "60g queso, 60g pimiento morrón. La orden incluye dos piezas.",
        precio: 120,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Orden de Cebollitas",
        categoria: "Complementos",
        descripcion: "250g de cebollas cambray. Pueden ser preparadas con salsa maggi.",
        precio: 70,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Nopal Asado",
        categoria: "Complementos",
        descripcion: "1 pzas.",
        precio: 35,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Taco de Hongo",
        categoria: "Complementos",
        descripcion: "40g.",
        precio: 35,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Orden de Aguacate",
        categoria: "Complementos",
        descripcion: "200g.",
        precio: 70,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Orden de Nopal",
        categoria: "Complementos",
        descripcion: "2 pzas. Pueden ser preparados con salsa maggi.",
        precio: 70,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Aguacate Extra",
        categoria: "Complementos",
        descripcion: "50g.",
        precio: 25,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Chicharrón de queso",
        categoria: "Complementos",
        descripcion: "100g.",
        precio: 160,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Huevo",
        categoria: "Tortas",
        descripcion: "2 pzas de huevo. Preparada con jitomate, cebolla, aguacate, frijoles, mayonesa y rajas.",
        precio: 90,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Jamón",
        categoria: "Tortas",
        descripcion: "60g jamón. Preparada con jitomate, cebolla, aguacate, frijoles, mayonesa y rajas.",
        precio: 90,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Con Queso",
        categoria: "Tortas",
        descripcion: "60g queso. Ya sea Huevo o Jamón. Preparada con jitomate, cebolla, aguacate, frijoles, mayonesa y rajas.",
        precio: 175,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Queso",
        categoria: "Tortas",
        descripcion: "80g queso. Preparada con jitomate, cebolla, aguacate, frijoles, mayonesa y rajas.",
        precio: 120,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Pastor",
        categoria: "Tortas",
        descripcion: "80g carne. Preparada con jitomate, cebolla, aguacate, frijoles, mayonesa y rajas.",
        precio: 120,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Pierna",
        categoria: "Tortas",
        descripcion: "80g carne. Preparada con jitomate, cebolla, aguacate, frijoles, mayonesa y rajas.",
        precio: 120,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Milanesa",
        categoria: "Tortas",
        descripcion: "80g carne. Preparada con jitomate, cebolla, aguacate, frijoles, mayonesa y rajas.",
        precio: 120,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Pollo",
        categoria: "Tortas",
        descripcion: "80g carne. Preparada con jitomate, cebolla, aguacate, frijoles, mayonesa y rajas.",
        precio: 120,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Bistec",
        categoria: "Tortas",
        descripcion: "80g carne. Preparada con jitomate, cebolla, aguacate, frijoles, mayonesa y rajas.",
        precio: 120,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Costilla",
        categoria: "Tortas",
        descripcion: "80g carne. Preparada con jitomate, cebolla, aguacate, frijoles, mayonesa y rajas.",
        precio: 120,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Chuleta",
        categoria: "Tortas",
        descripcion: "80g carne. Preparada con jitomate, cebolla, aguacate, frijoles, mayonesa y rajas.",
        precio: 120,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Chorizo",
        categoria: "Tortas",
        descripcion: "80g carne. Preparada con jitomate, cebolla, aguacate, frijoles, mayonesa y rajas.",
        precio: 120,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Con Queso",
        categoria: "Tortas",
        descripcion: "60g queso. De la carne de su preferencia (Pastor, Milanesa, Pierna, Pollo, Bisctec, Costilla, Chuleta, Chorizo). Preparada con jitomate, cebolla, aguacate, frijoles, mayonesa y rajas.",
        precio: 175,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Hawaiana",
        categoria: "Tortas",
        descripcion: "70g carne, 30g jamón, 60g queso. Preparada con jitomate, cebolla, aguacate, frijoles, mayonesa, rajas y piña.",
        precio: 205,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Cubana",
        categoria: "Tortas",
        descripcion: "60g carne, 40g chorizo, 30g jamón, 60g queso. Preparada con jitomate, cebolla, aguacate, frijoles, mayonesa y rajas.",
        precio: 205,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Arrachera",
        categoria: "Tortas",
        descripcion: "70g carne. Preparada con jitomate, cebolla, aguacate, frijoles, mayonesa y rajas.",
        precio: 170,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Arrachera con queso",
        categoria: "Tortas",
        descripcion: "70g carne, 60g queso. Preparada con jitomate, cebolla, aguacate, frijoles, mayonesa y rajas.",
        precio: 235,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Agua de horchata",
        categoria: "Bebidas",
        descripcion: "340ml. La bebida es natural.",
        precio: 50,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Agua de jamaica",
        categoria: "Bebidas",
        descripcion: "340ml. La bebida es natural.",
        precio: 50,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Agua embotellada",
        categoria: "Bebidas",
        descripcion: "600ml.",
        precio: 50,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Coca Cola",
        categoria: "Refrescos",
        descripcion: "Lata de 355ml.",
        precio: 60,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Coca-Light",
        categoria: "Refrescos",
        descripcion: "Lata de 355ml.",
        precio: 60,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Coca Zero",
        categoria: "Refrescos",
        descripcion: "Lata de 355ml.",
        precio: 60,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Sidral",
        categoria: "Refrescos",
        descripcion: "Lata de 355ml.",
        precio: 60,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Sprite",
        categoria: "Refrescos",
        descripcion: "Lata de 355ml.",
        precio: 60,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Fanta",
        categoria: "Refrescos",
        descripcion: "Lata de 355ml.",
        precio: 60,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Agua Mineral",
        categoria: "Refrescos",
        descripcion: "Lata de 355ml.",
        precio: 60,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Suero",
        categoria: "Refrescos",
        descripcion: "355ml agua mineral, 30ml limón.",
        precio: 80,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Clamato",
        categoria: "Refrescos",
        descripcion: "340ml.",
        precio: 60,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Corona",
        categoria: "Cervezas",
        descripcion: "355ml.",
        precio: 80,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Victoria",
        categoria: "Cervezas",
        descripcion: "355ml.",
        precio: 80,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Negra Modelo",
        categoria: "Cervezas",
        descripcion: "355ml.",
        precio: 90,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Modelo Especial",
        categoria: "Cervezas",
        descripcion: "355ml.",
        precio: 90,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Con Clamato",
        categoria: "Cervezas",
        descripcion: "355ml cerveza, 240ml clamato, 20ml limón.",
        precio: 120,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Con Clamato y Salsas",
        categoria: "Cervezas",
        descripcion: "355ml cerveza, 240ml clamato, 20ml limón, 10ml salsas.",
        precio: 120,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Michelada",
        categoria: "Cervezas",
        descripcion: "355ml cerveza, 20ml limón. Se puede preparar con tajín o sal.",
        precio: 130,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Cubana",
        categoria: "Cervezas",
        descripcion: "355ml.",
        precio: 120,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Jericaya",
        categoria: "Postres",
        descripcion: "120g.",
        precio: 70,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Flan de cajeta",
        categoria: "Postres",
        descripcion: "175g.",
        precio: 70,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Flan de caramelo",
        categoria: "Postres",
        descripcion: "175g.",
        precio: 70,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Flan napolitano",
        categoria: "Postres",
        descripcion: "175g.",
        precio: 70,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Carlota",
        categoria: "Postres",
        descripcion: "175g.",
        precio: 70,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Arroz con leche",
        categoria: "Postres",
        descripcion: "180g.",
        precio: 70,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Duraznos con crema",
        categoria: "Postres",
        descripcion: "170g.",
        precio: 70,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Mazapán",
        categoria: "Paletas",
        descripcion: "170g.",
        precio: 68,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Nutella",
        categoria: "Paletas",
        descripcion: "170g.",
        precio: 68,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Limón con panditas",
        categoria: "Paletas",
        descripcion: "107g.",
        precio: 68,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    },
    {
        nombre: "Piña rellena de coco",
        categoria: "Paletas",
        descripcion: "170g.",
        precio: 68,
        imagen: "https://prod-pics.guide.michelin.com/api/public/content/2c46ce84c9314071952e30d794219b52.jpeg?format=webp&w=500&h=500"
    }

];

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const filters = document.getElementById("filters");
const resultsCount = document.getElementById("resultsCount");
const noResults = document.getElementById("noResults");
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");
const yearElement = document.getElementById("year");

let categoriaActual = "Todos";
let idiomaActual = localStorage.getItem("vilsitoLanguage") || "es";

// TRADUCCIONES DE LA PAGINA

const traducciones = {
    es: {
        metaDescription: "Conoce el menú de El Vilsito Taquería.",
        navHome: "Inicio",
        navMenu: "Menú",
        navLocation: "Ubicación",
        navContact: "Contacto",
        navBilling: "Facturación",
        heroEyebrow: "EL MEJOR PASTOR DE MÉXICO.",
        brandSubtitle: "TAQUERÍA",
        heroDescription: "Tacos, gringas, quesadillas y mucho más.",
        heroSlogan: "¡El antojo se respeta!",
        heroButton: "EXPLORA NUESTRO MENÚ ↓",
        heroImageAlt: "Imagen de El Vilsito",
        stampMade: "HECHO",
        stampFlavor: "CON SABOR",
        menuEyebrow: "DIRECTO AL ANTOJO",
        menuHeadingFirst: "ELIGE TU",
        menuHeadingSecond: "ANTOJO",
        menuDescription: "Encuentra tu favorito y disfruta el sabor de El Vilsito.",
        categoryAll: "Todos",
        categoryTacos: "Tacos",
        categorySpecialties: "Especialidades",
        categoryTortas: "Tortas",
        categorySides: "Complementos",
        categoryDrinks: "Bebidas",
        categorySodas: "Refrescos",
        categoryBeer: "Cervezas",
        categoryDesserts: "Postres",
        categoryPopsicles: "Paletas",
        searchPlaceholder: "Buscar en el menú...",
        searchLabel: "Buscar productos",
        loadingMenu: "CARGANDO MENÚ...",
        menuBrandLabel: "EL VILSITO · TAQUERÍA",
        noResults: "No encontramos productos con esa búsqueda. Intenta con otro nombre o categoría.",
        drinksEyebrow: "PARA ACOMPAÑAR",
        drinksHeading: "REFRESCA TU ANTOJO.",
        drinksDescription: "Algo rico para completar tu comida.",
        drinksImageAlt: "Bebidas para acompañar tus tacos",
        locationEyebrow: "VEN A VISITARNOS",
        locationHeading: "EL SABOR ESTÁ AQUÍ.",
        addressDescription: "Petén 248, esquina con Avenida Universidad, colonia Narvarte Poniente, alcaldía Benito Juárez, C.P. 03020, Ciudad de México.",
        locationLabel: "UBICACIÓN",
        locationFullAddress: "Petén 248, esquina con Av. Universidad, colonia Narvarte Poniente, alcaldía Benito Juárez, C.P. 03020, Ciudad de México, CDMX.",
        hoursHeading: "HORARIOS",
        hoursMonday: "Lunes 1:00 p. m. a 3:00 a. m.",
        hoursTuesday: "Martes 1:00 p. m. a 3:00 a. m.",
        hoursWednesday: "Miércoles 1:00 p. m. a 3:00 a. m.",
        hoursThursday: "Jueves 1:00 p. m. a 3:00 a. m.",
        hoursFriday: "Viernes 1:00 p. m. a 5:00 a. m.",
        hoursSaturday: "Sábado 1:00 p. m. a 5:00 a. m.",
        hoursSunday: "Domingo 1:00 p. m. a 1:00 a. m.",
        directionsButton: "CÓMO LLEGAR ↗",
        billingHeadingFirst: "¿NECESITAS TU",
        billingHeadingSecond: "FACTURA?",
        billingDescription: "¿Necesitas facturar tu consumo? Consulta los requisitos y comunícate con nosotros a través de nuestros medios de contacto.",
        billingRequirementsHeading: "REQUISITOS DE FACTURACIÓN",
        billingRequirementsDescription: "Para solicitar tu factura, ten preparados los siguientes datos:",
        billingTicket: "Ticket de compra.",
        billingRFC: "RFC.",
        billingName: "Nombre o razón social.",
        billingPostal: "Código postal y régimen fiscal.",
        billingCFDI: "Uso del CFDI.",
        billingPayment: "Método o forma de pago.",
        billingEmail: "Correo electrónico para recibir tu factura.",
        billingContactHeading: "¿DÓNDE PUEDES SOLICITARLA?",
        billingContactDescription: "Comunícate con nosotros para recibir información sobre el proceso de facturación.",
        phoneLabel: "TELÉFONO",
        emailLabel: "CORREO ELECTRÓNICO",
        billingNoticeHeading: "IMPORTANTE: ANTES DE SOLICITAR TU FACTURA",
        billingNoticeDescription: "No olvides confirmar el uso de tu CFDI, enviar una foto del ticket de consumo e indicar la forma de pago. En caso de haber pagado con tarjeta, también deberás enviar una foto del voucher.",
        billingDeadline: "Solicita tu factura dentro del mismo mes en que realizaste tu consumo. Después de este plazo, no podremos emitirla.",
        footerSlogan: "EL MEJOR PASTOR DE MÉXICO.",
        footerBackToTop: "VOLVER AL INICIO ↑",
        copyright: "El Vilsito. Todos los derechos reservados.",
        productCount: count => `${count} PRODUCTOS EN EL MENÚ`,
        menuButtonOpen: "Abrir menú de navegación",
        menuButtonClose: "Cerrar menú de navegación"
    },

    en: {
        metaDescription: "Explore the menu at El Vilsito Taquería.",
        navHome: "Home",
        navMenu: "Menu",
        navLocation: "Location",
        navContact: "Contact",
        navBilling: "Invoicing",
        heroEyebrow: "MEXICO'S BEST AL PASTOR.",
        brandSubtitle: "TAQUERÍA",
        heroDescription: "Tacos, gringas, quesadillas, and much more.",
        heroSlogan: "Every craving deserves respect!",
        heroButton: "EXPLORE OUR MENU ↓",
        heroImageAlt: "Image of El Vilsito",
        stampMade: "MADE",
        stampFlavor: "WITH FLAVOR",
        menuEyebrow: "STRAIGHT TO YOUR CRAVINGS",
        menuHeadingFirst: "CHOOSE YOUR",
        menuHeadingSecond: "FAVORITE",
        menuDescription: "Find your favorite and enjoy the flavor of El Vilsito.",
        categoryAll: "All",
        categoryTacos: "Tacos",
        categorySpecialties: "Specialties",
        categoryTortas: "Mexican Sandwiches",
        categorySides: "Sides",
        categoryDrinks: "Drinks",
        categorySodas: "Soft Drinks",
        categoryBeer: "Beer",
        categoryDesserts: "Desserts",
        categoryPopsicles: "Ice Pops",
        searchPlaceholder: "Search the menu...",
        searchLabel: "Search products",
        loadingMenu: "LOADING MENU...",
        menuBrandLabel: "EL VILSITO · TAQUERÍA",
        noResults: "We couldn't find any items matching your search. Try another name or category.",
        drinksEyebrow: "THE PERFECT PAIRING",
        drinksHeading: "REFRESH YOUR CRAVINGS.",
        drinksDescription: "Something delicious to complete your meal.",
        drinksImageAlt: "Drinks to enjoy with your tacos",
        locationEyebrow: "COME VISIT US",
        locationHeading: "THE FLAVOR IS HERE.",
        addressDescription: "Petén 248, corner of Avenida Universidad, Narvarte Poniente, Benito Juárez, ZIP code 03020, Mexico City.",
        locationLabel: "LOCATION",
        locationFullAddress: "Petén 248, corner of Av. Universidad, Narvarte Poniente, Benito Juárez, ZIP code 03020, Mexico City, Mexico.",
        hoursHeading: "HOURS",
        hoursMonday: "Monday: 1:00 PM–3:00 AM",
        hoursTuesday: "Tuesday: 1:00 PM–3:00 AM",
        hoursWednesday: "Wednesday: 1:00 PM–3:00 AM",
        hoursThursday: "Thursday: 1:00 PM–3:00 AM",
        hoursFriday: "Friday: 1:00 PM–5:00 AM",
        hoursSaturday: "Saturday: 1:00 PM–5:00 AM",
        hoursSunday: "Sunday: 1:00 PM–1:00 AM",
        directionsButton: "GET DIRECTIONS ↗",
        billingHeadingFirst: "NEED AN",
        billingHeadingSecond: "INVOICE?",
        billingDescription: "Need an invoice for your purchase? Review the requirements and contact us through our available contact methods.",
        billingRequirementsHeading: "INVOICE REQUIREMENTS",
        billingRequirementsDescription: "Have the following information ready when requesting your invoice:",
        billingTicket: "Purchase receipt.",
        billingRFC: "Mexican tax ID (RFC).",
        billingName: "Full name or registered business name.",
        billingPostal: "ZIP code and tax status.",
        billingCFDI: "CFDI usage code.",
        billingPayment: "Payment method or type.",
        billingEmail: "Email address to receive your invoice.",
        billingContactHeading: "HOW CAN YOU REQUEST AN INVOICE?",
        billingContactDescription: "Contact us for information about the invoicing process.",
        phoneLabel: "PHONE",
        emailLabel: "EMAIL ADDRESS",
        billingNoticeHeading: "IMPORTANT: BEFORE REQUESTING YOUR INVOICE",
        billingNoticeDescription: "Remember to confirm the CFDI usage code, send a photo of your receipt, and specify the payment method. If you paid by card, you must also send a photo of the payment slip.",
        billingDeadline: "Request your invoice within the same month as your purchase. We will not be able to issue it after that period.",
        footerSlogan: "MEXICO'S BEST AL PASTOR.",
        footerBackToTop: "BACK TO TOP ↑",
        copyright: "El Vilsito. All rights reserved.",
        productCount: count => `${count} MENU ITEMS`,
        menuButtonOpen: "Open navigation menu",
        menuButtonClose: "Close navigation menu"
    }
};


// TRADUCCION DE NOMBRES DE PRODUCTOS

const nombresIngles = {
    "Con queso": "With Cheese",
    "Con hongo o nopal": "With Mushrooms or Cactus",
    "Con queso y hongo o nopal": "With Cheese and Mushrooms or Cactus",
    "Arrachera": "Skirt Steak",
    "Arrachera con queso": "Skirt Steak with Cheese",
    "Arrachera con hongo o nopal": "Skirt Steak with Mushrooms or Cactus",
    "Arrachera con queso y hongo o nopal": "Skirt Steak with Cheese and Mushrooms or Cactus",
    "Gringa de pastor": "Al Pastor Gringa",
    "Gringa con carne": "Gringa with Meat",
    "Gringa de Arrachera": "Skirt Steak Gringa",
    "Volcán de Arrachera": "Skirt Steak Volcán",
    "Volcán Charro": "Charro Volcán",
    "Bistocino y Cebolla": "Steak, Bacon and Onion",
    "Queso Hongo": "Mushrooms with Cheese",
    "Campechano": "Mixed Meat",
    "Campechano con queso": "Mixed Meat with Cheese",
    "Choriqueso": "Chorizo with Cheese",
    "Quesadilla": "Quesadilla",
    "Burrita": "Small Burrito",
    "Sincronizada": "Ham and Cheese Quesadilla",
    "Alambre": "Mexican Meat Skillet",
    "Alambre con queso": "Mexican Meat Skillet with Cheese",
    "Alambre de Arrachera": "Skirt Steak Skillet",
    "Alambre de Arrachera con queso": "Skirt Steak Skillet with Cheese",
    "Nopal Queso": "Cactus with Cheese",
    "Queso Cazuela": "Melted Cheese",
    "Chile Suizo": "Swiss-Style Pepper with Cheese",
    "Orden de Cebollitas": "Grilled Spring Onions",
    "Nopal Asado": "Grilled Cactus",
    "Taco de Hongo": "Mushroom Taco",
    "Orden de Aguacate": "Avocado Portion",
    "Orden de Nopal": "Cactus Portion",
    "Aguacate Extra": "Extra Avocado",
    "Chicharrón de queso": "Crispy Cheese",
    "Huevo": "Egg",
    "Jamón": "Ham",
    "Con Queso": "With Cheese",
    "Queso": "Cheese",
    "Pastor": "Al Pastor",
    "Pierna": "Pork Leg",
    "Milanesa": "Breaded Meat",
    "Pollo": "Chicken",
    "Bistec": "Steak",
    "Costilla": "Ribs",
    "Chuleta": "Pork Chop",
    "Chorizo": "Mexican Sausage",
    "Hawaiana": "Hawaiian",
    "Cubana": "Cuban",
    "Agua de horchata": "Horchata",
    "Agua de jamaica": "Hibiscus Water",
    "Agua embotellada": "Bottled Water",
    "Coca Cola": "Coca-Cola",
    "Coca-Light": "Diet Coke",
    "Coca Zero": "Coke Zero",
    "Sidral": "Apple Soda",
    "Agua Mineral": "Sparkling Water",
    "Suero": "Lime Mineral Water",
    "Clamato": "Clamato",
    "Con Clamato": "With Clamato",
    "Con Clamato y Salsas": "With Clamato and Sauces",
    "Michelada": "Michelada",
    "Jericaya": "Jericalla Custard",
    "Flan de cajeta": "Caramelized Goat's Milk Flan",
    "Flan de caramelo": "Caramel Flan",
    "Flan napolitano": "Neapolitan Flan",
    "Carlota": "Mexican Icebox Cake",
    "Arroz con leche": "Rice Pudding",
    "Duraznos con crema": "Peaches and Cream",
    "Mazapán": "Mazapan Candy",
    "Limón con panditas": "Lime with Gummy Bears",
    "Piña rellena de coco": "Pineapple Filled with Coconut"
};


// TRADUCCION DE CATEGORIAS

const categoriasIngles = {
    "Todos": "All",
    "Tacos": "Tacos",
    "Especialidades": "Specialties",
    "Tortas": "Mexican Sandwiches",
    "Complementos": "Sides",
    "Bebidas": "Drinks",
    "Refrescos": "Soft Drinks",
    "Cervezas": "Beer",
    "Postres": "Desserts",
    "Paletas": "Ice Pops"
};


// TRADUCCION DE DESCRIPCIONES

function traducirDescripcion(texto) {
    if (idiomaActual === "es") return texto;

    const frases = [
        [/La orden incluye tres piezas/gi, "The order includes three pieces"],
        [/La orden incluye cuatro piezas/gi, "The order includes four pieces"],
        [/La orden incluye dos piezas/gi, "The order includes two pieces"],
        [/La orden incluye dos pieza/gi, "The order includes two pieces"],
        [/La orden incluye una pieza/gi, "The order includes one piece"],
        [/La orden incluye tres piezas/gi, "The order includes three pieces"],
        [/de la carne de su preferencia/gi, "with your choice of meat"],
        [/La carne es de su preferencia/gi, "Choose your preferred meat"],
        [/Preparada con/gi, "Prepared with"],
        [/Pueden ser preparadas con/gi, "Can be prepared with"],
        [/Pueden ser preparados con/gi, "Can be prepared with"],
        [/Pueden ser preparados/gi, "Can be prepared"],
        [/La bebida es natural/gi, "Natural drink"],
        [/Se puede preparar con/gi, "Can be prepared with"],
        [/piña/gi, "pineapple"],
        [/cebolla/gi, "onion"],
        [/cebollas cambray/gi, "spring onions"],
        [/cilantro/gi, "cilantro"],
        [/jitomate/gi, "tomato"],
        [/aguacate/gi, "avocado"],
        [/frijoles/gi, "beans"],
        [/mayonesa/gi, "mayonnaise"],
        [/rajas/gi, "pepper strips"],
        [/pimiento morrón/gi, "bell pepper"],
        [/hongo/gi, "mushroom"],
        [/hongos/gi, "mushrooms"],
        [/nopal/gi, "cactus"],
        [/queso/gi, "cheese"],
        [/jamón/gi, "ham"],
        [/tocino/gi, "bacon"],
        [/chorizo/gi, "Mexican sausage"],
        [/carne/gi, "meat"],
        [/pastor/gi, "al pastor"],
        [/limón/gi, "lime"],
        [/salsa maggi/gi, "Maggi sauce"],
        [/salsas/gi, "sauces"],
        [/tajín/gi, "Tajín seasoning"],
        [/sal/gi, "salt"],
        [/La bebida es natural\./gi, "Naturally prepared drink."],
        [/opcional/gi, "optional"],
        [/La orden incluye/gi, "The order includes"],
        [/La bebida/gi, "The drink"],
        [/pzas?\./gi, "pieces."],
        [/ml\./gi, "ml."],
        [/g\./gi, "g."]
    ];

    return frases.reduce(
        (resultado, [patron, reemplazo]) => resultado.replace(patron, reemplazo),
        texto
    );
}


// OBTENER EL TEXTO SEGUN EL IDIOMA

function textoProducto(producto) {
    return idiomaActual === "en"
        ? (nombresIngles[producto.nombre] || producto.nombre)
        : producto.nombre;
}

function categoriaProducto(categoria) {
    return idiomaActual === "en"
        ? (categoriasIngles[categoria] || categoria)
        : categoria;
}


// CAMBIAR IDIOMA DE LA PAGINA

function cambiarIdioma(idioma) {
    if (!traducciones[idioma]) return;

    idiomaActual = idioma;
    document.documentElement.lang = idioma;

    const textos = traducciones[idioma];

    document.querySelectorAll("[data-i18n]").forEach(elemento => {
        const clave = elemento.dataset.i18n;
        const traduccion = textos[clave];

        if (typeof traduccion === "string") {
            elemento.textContent = traduccion;
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(elemento => {
        const clave = elemento.dataset.i18nPlaceholder;

        if (textos[clave]) {
            elemento.placeholder = textos[clave];
        }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(elemento => {
        const clave = elemento.dataset.i18nAria;

        if (textos[clave]) {
            elemento.setAttribute("aria-label", textos[clave]);
        }
    });

    document.querySelectorAll(".language-btn").forEach(boton => {
        const activo = boton.dataset.lang === idioma;

        boton.classList.toggle("active", activo);
        boton.setAttribute("aria-pressed", String(activo));
    });

    document.title = idioma === "en"
        ? "El Vilsito | Taquería"
        : "El Vilsito | Taquería";

    const menuAbierto = navigation.classList.contains("open");

    menuToggle.setAttribute(
        "aria-label",
        menuAbierto ? textos.menuButtonClose : textos.menuButtonOpen
    );

    localStorage.setItem("vilsitoLanguage", idioma);

    mostrarProductos();
}


// BOTONES DEL SELECTOR DE IDIOMA

document.querySelectorAll(".language-btn").forEach(boton => {
    boton.addEventListener("click", () => {
        cambiarIdioma(boton.dataset.lang);
    });
});


// MOSTRAR PRODUCTOS

function mostrarProductos() {
    if (!productGrid || !searchInput || !resultsCount || !noResults) return;

    const busqueda = searchInput.value
        .trim()
        .toLocaleLowerCase(idiomaActual === "en" ? "en-US" : "es-MX");

    const productosFiltrados = productos.filter(producto => {
        const coincideCategoria =
            categoriaActual === "Todos" ||
            producto.categoria === categoriaActual;

        const nombre = textoProducto(producto);
        const categoria = categoriaProducto(producto.categoria);
        const descripcion = traducirDescripcion(producto.descripcion);

        const textoProductoBusqueda =
            `${nombre} ${descripcion} ${categoria} ${producto.nombre} ${producto.descripcion}`
                .toLocaleLowerCase(idiomaActual === "en" ? "en-US" : "es-MX");

        const coincideBusqueda = textoProductoBusqueda.includes(busqueda);

        return coincideCategoria && coincideBusqueda;
    });

    productGrid.replaceChildren();

    productosFiltrados.forEach(producto => {
        const tarjeta = document.createElement("article");
        tarjeta.className = "product-card";

        const imagen = document.createElement("img");
        imagen.className = "product-image";
        imagen.src = producto.imagen;
        imagen.alt = textoProducto(producto);
        imagen.loading = "lazy";

        imagen.addEventListener("error", () => {
            imagen.style.display = "none";
        });

        const informacion = document.createElement("div");
        informacion.className = "product-info";

        const categoria = document.createElement("span");
        categoria.className = "category-label";
        categoria.textContent = categoriaProducto(producto.categoria);

        const nombre = document.createElement("h3");
        nombre.textContent = textoProducto(producto);

        const descripcion = document.createElement("p");
        descripcion.textContent = traducirDescripcion(producto.descripcion);

        const parteInferior = document.createElement("div");
        parteInferior.className = "product-bottom";

        const precio = document.createElement("span");
        precio.className = "product-price";
        precio.textContent = `$${producto.precio.toFixed(2)} MXN`;

        parteInferior.appendChild(precio);

        informacion.append(
            categoria,
            nombre,
            descripcion,
            parteInferior
        );

        tarjeta.append(imagen, informacion);
        productGrid.appendChild(tarjeta);
    });

    const textos = traducciones[idiomaActual];

    resultsCount.textContent = textos.productCount(productosFiltrados.length);

    noResults.hidden = productosFiltrados.length !== 0;
}


// FILTRAR POR CATEGORIA

filters.addEventListener("click", evento => {
    const boton = evento.target.closest("button[data-category]");

    if (!boton) return;

    categoriaActual = boton.dataset.category;

    document.querySelectorAll(".filter").forEach(filtro => {
        const activo = filtro === boton;

        filtro.classList.toggle("active", activo);
        filtro.setAttribute("aria-pressed", String(activo));
    });

    mostrarProductos();
});


// BUSCAR PRODUCTOS

searchInput.addEventListener("input", mostrarProductos);


// MENU DE NAVEGACION PARA CELULARES

menuToggle.addEventListener("click", () => {
    const estaAbierto = navigation.classList.toggle("open");
    const textos = traducciones[idiomaActual];

    menuToggle.setAttribute("aria-expanded", String(estaAbierto));
    menuToggle.setAttribute(
        "aria-label",
        estaAbierto ? textos.menuButtonClose : textos.menuButtonOpen
    );

    menuToggle.textContent = estaAbierto ? "✕" : "☰";
});


// CERRAR EL MENU AL SELECCIONAR UNA SECCION

navigation.querySelectorAll("a").forEach(enlace => {
    enlace.addEventListener("click", () => {
        navigation.classList.remove("open");

        const textos = traducciones[idiomaActual];

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", textos.menuButtonOpen);
        menuToggle.textContent = "☰";
    });
});


// DATOS DEL PIE DE PAGINA

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// INICIAR PAGINA

cambiarIdioma(idiomaActual);
