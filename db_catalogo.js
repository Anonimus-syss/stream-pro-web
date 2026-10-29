const DB_STREAM_PRO = {
  "configuracion": {
    "tasa_dolar": 19.4,
    "ultima_actualizacion": "2026-10-28"
  },
  "categorias": [
    {
      "id": "streaming",
      "nombre": "1. Plataformas de Streaming"
    },
    {
      "id": "tramites",
      "nombre": "Trámites e Identidad"
    },
    {
      "id": "vpn",
      "nombre": "Herramientas y VPN"
    }
  ],
  "servicios": [
    {
      "id": "netflix-completa-1m",
      "nombre": "Netflix Cuenta Completa (5 Perfiles)",
      "categoria": "streaming",
      "precio_mxn": 300.0,
      "duracion": "1 mes",
      "stock_disponible": true,
      "icono_letra": "N",
      "color_fondo": "#e50914"
    },
    {
      "id": "max-platino-1m",
      "nombre": "Max Platino",
      "categoria": "streaming",
      "precio_mxn": 92,
      "duracion": "1 mes",
      "stock_disponible": true,
      "icono_letra": "M",
      "color_fondo": "#6d28d9"
    },
    {
      "id": "acta-nacimiento",
      "nombre": "Acta de Nacimiento",
      "categoria": "tramites",
      "precio_mxn": 150,
      "duracion": "Entrega inmediata",
      "stock_disponible": true,
      "icono_letra": "📄",
      "color_fondo": "#15803d"
    }
  ]
};

// Puente automático: Convierte la DB al formato exacto que usa la página web
const fullData1 = DB_STREAM_PRO.categorias.map(cat => {
  return {
    c: cat.nombre,
    i: DB_STREAM_PRO.servicios
      .filter(s => s.categoria === cat.id && s.stock_disponible)
      .map(s => `${s.nombre}|$${s.precio_mxn}|${s.duracion}|GARANTÍA 28 DÍAS|RENOVABLE`)
  };
});
