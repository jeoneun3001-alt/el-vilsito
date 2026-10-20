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

// ELEMENTOS DE LA PAGINA

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const filters = document.getElementById("filters");
const resultsCount = document.getElementById("resultsCount");
const noResults = document.getElementById("noResults");
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

let categoriaActual = "Todos";

// MOSTRAR PRODUCTOS

function mostrarProductos() {
    const busqueda = searchInput.value
        .trim()
        .toLocaleLowerCase("es-MX");

    const productosFiltrados = productos.filter(producto => {
        const coincideCategoria =
            categoriaActual === "Todos" ||
            producto.categoria === categoriaActual;

        const textoProducto =
            `${producto.nombre} ${producto.descripcion} ${producto.categoria}`
                .toLocaleLowerCase("es-MX");

        const coincideBusqueda = textoProducto.includes(busqueda);

        return coincideCategoria && coincideBusqueda;
    });

    productGrid.replaceChildren();

    productosFiltrados.forEach(producto => {
        const tarjeta = document.createElement("article");
        tarjeta.className = "product-card";

        const imagen = document.createElement("img");
        imagen.className = "product-image";
        imagen.src = producto.imagen;
        imagen.alt = producto.nombre;
        imagen.loading = "lazy";

        // Si una imagen no carga, se oculta para conservar
        // el espacio y el diseño de la tarjeta.
        imagen.addEventListener("error", () => {
            imagen.style.display = "none";
        });

        const informacion = document.createElement("div");
        informacion.className = "product-info";

        const categoria = document.createElement("span");
        categoria.className = "category-label";
        categoria.textContent = producto.categoria;

        const nombre = document.createElement("h3");
        nombre.textContent = producto.nombre;

        const descripcion = document.createElement("p");
        descripcion.textContent = producto.descripcion;

        const parteInferior = document.createElement("div");
        parteInferior.className = "product-bottom";

        const precio = document.createElement("span");
        precio.className = "product-price";
        precio.textContent = `$${producto.precio.toFixed(2)}`;

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

    resultsCount.textContent =
        `${productosFiltrados.length} PRODUCTOS EN EL MENÚ`;

    noResults.hidden = productosFiltrados.length !== 0;
}

// FILTRAR POR CATEGORIA

filters.addEventListener("click", evento => {
    const boton = evento.target.closest("button[data-category]");

    if (!boton) return;

    categoriaActual = boton.dataset.category;

    document.querySelectorAll(".filter").forEach(filtro => {
        filtro.classList.toggle("active", filtro === boton);
    });

    mostrarProductos();
});

// BUSCAR PRODUCTOS

searchInput.addEventListener("input", mostrarProductos);

// MENU DE NAVEGACION PARA CELULARES

menuToggle.addEventListener("click", () => {
    const estaAbierto = navigation.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(estaAbierto));
    menuToggle.setAttribute(
        "aria-label",
        estaAbierto ? "Cerrar menú de navegación" : "Abrir menú de navegación"
    );

    menuToggle.textContent = estaAbierto ? "✕" : "☰";
});

// CERRAR EL MENU AL SELECCIONAR UNA SECCION

navigation.querySelectorAll("a").forEach(enlace => {
    enlace.addEventListener("click", () => {
        navigation.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menú de navegación");
        menuToggle.textContent = "☰";
    });
});

// DATOS DEL PIE DE PAGINA

document.getElementById("year").textContent =
    new Date().getFullYear();

// CONFIGURAR LA UBICACION.

const direccion = "El Vilsito, Ciudad de México";

document.getElementById("addressText").textContent =
    "UNICA SURCURSAL";

document.getElementById("mapsButton").href =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(direccion);

// INICIAR PAGINA

mostrarProductos();
