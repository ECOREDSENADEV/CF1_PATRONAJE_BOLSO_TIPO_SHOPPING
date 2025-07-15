export default {
  global: {
    Name:
      'Materiales, diseño y procesos productivos en la fabricación de bolsos',
    Description:
      'El componente formativo "Materiales, diseño y procesos productivos en la fabricación de bolsos" ofrece una formación integral que abarca desde el conocimiento de la estructura y partes del bolso, hasta la identificación y clasificación de tipos de patrones y materiales utilizados en marroquinería (cueros, sintéticos y textiles). Además, aborda las fases completas del proceso productivo, incluyendo diseño, corte, desbaste, prearmado, armado, costura, acabados y control de calidad. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Estructura del bolso',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tipologías de bolsos: características y usos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Materiales e insumos para marroquinería',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Cueros',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Sintéticos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Textiles',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Fases del proceso productivo de marroquinería',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Diseño y desarrollo del producto',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Corte de materiales',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Desbaste',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Prearmado',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Armado',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Costura en marroquinería',
            hash: 't_4_6',
          },
          {
            numero: '4.7',
            titulo: 'Acabado y control de calidad',
            hash: 't_4_7',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Fichas técnicas de diseño',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Características de la ficha técnica de diseño',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Usos de la ficha técnica en marroquinería',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Tipos de acabados para los bolsos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Tipologías de bolsos: características y usos',
      referencia:
        'Paul Imagen (2009). Tipos de bolsas para mujeres. [Vídeo]. Youtube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=fgoDA49Mgm4   ',
    },
    {
      tema: 'Materiales e insumos para Marroquinería',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2020, 17 septiembre). Maquinaria marroquinería [Vídeo]. Youtube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=9SsLJIbLc8w ',
    },
  ],
  glosario: [
    {
      termino: 'Patronaje',
      significado:
        'es el proceso de diseño y creación de patrones que sirven como base para cortar las piezas de un bolso. A través del patronaje, se definen las formas y dimensiones de los componentes que conformarán el producto.',
    },
    {
      termino: 'Cuero',
      significado:
        'material natural obtenido de la piel de animales, principalmente vacuno, que se somete a un proceso de curtido para hacerlo resistente y flexible. Se utiliza en la fabricación de marroquinería por su durabilidad, confort y capacidad de adaptarse a la forma del pie.',
    },
    {
      termino: 'Sintético',
      significado:
        'material artificial fabricado a partir de polímeros como el PVC o el poliuretano, diseñado para imitar características del cuero o de otros materiales naturales. Se usa en marroquinería por su costo accesible, variedad de diseños y facilidad de mantenimiento.',
    },
    {
      termino: 'Textil',
      significado:
        'material compuesto por fibras naturales (algodón, lino, lana) o sintéticas (poliéster, nylon) que se utiliza en la fabricación de marroquinería, especialmente en modelos deportivos y casuales, debido a su ligereza y transpirabilidad.',
    },
  ],
  referencias: [
    {
      referencia: 'Asensio, O. (2011). El gran libro del cuero. Lexus.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. Artesanías de Colombia. (2020). Técnica del oficio del cuero. Artesanías de Colombia.  ',
      link: 'https://repositorio.artesaniasdecolombia.com.co/handle/001/6336. ',
    },
    {
      referencia: 'Fogg, M. (2009). Bolsos Vintage. Parramón.',
      link: '',
    },
    {
      referencia:
        'Johnson, A. (2005). Bolsos el poder de un accesorio. Konemann.',
      link: '',
    },
    {
      referencia:
        'Marulanda, G. (2007). Cartilla de marroquinería modelaje de bolsos. Imprenta Nacional. ',
      link: '',
    },
    {
      referencia:
        'Moreno, E. (2015). Control de calidad en materias primas e insumos para el sector calzado y marroquinería. SENA CENIGRAF.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
