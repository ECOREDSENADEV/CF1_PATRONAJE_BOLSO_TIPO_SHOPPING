<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Fichas técnicas de diseño
    
    p.mb-5 La ficha técnica de diseño es un documento fundamental en la producción de artículos de marroquinería, ya que centraliza toda la información técnica y visual necesaria para el desarrollo del producto. Sirve como guía para estandarizar procesos, garantizar calidad y facilitar la comunicación entre las áreas de diseño, producción y control de calidad.

    separador

    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Características de la ficha técnica de diseño
    
    p.mb-5 A continuación se presentan los principales elementos que debe contener una ficha técnica de productos marroquineros:

    .bg-full-width.bg-fondo-1.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-3.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/1.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h4 Información general
              p.mb-0 Nombre del producto, código o referencia interna, fecha de creación y versión del diseño.
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/2.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h4 Descripción del diseño
              p.mb-0 Boceto, <em>render</em> o imagen desde varios ángulos. Forma, estilo y dimensiones generales (alto, ancho, profundidad).
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/3.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h4 Materiales y componentes
              p.mb-0 Detalle de materiales usados (cuero, sintéticos, textiles), herrajes (cremalleras, broches, hebillas), colores y texturas.
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/4.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h4 Técnicas de fabricación
              p.mb-0 Tipos de costura (recta, paralela, decorativa, zigzag), métodos de ensamblaje (costura, pegado, remachado, termosellado), tipo de curtido si se emplea cuero natural.
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/5.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h4 Medidas y capacidades
              p.mb-0 Dimensiones específicas por pieza y capacidad estimada en litros o número de compartimentos.
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/6.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h4 Indicaciones de uso y cuidado
              p.mb-0 Recomendaciones de limpieza, almacenamiento y advertencias sobre exposición a agentes externos o productos químicos.
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/7.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h4 Observaciones y requisitos de calidad
              p.mb-0 Pruebas de resistencia (costuras, asas, cierres), normas aplicables, tolerancias aceptadas en medidas y acabados.
    
    separador

    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Usos de la ficha técnica en marroquinería

    .bg-full-width.bg-color-5
      .px-4.p-md-5
        p.mb-5 La ficha técnica en marroquinería cumple un papel fundamental como herramienta de planificación, control y comunicación a lo largo del proceso productivo. Sus múltiples funciones la convierten en un recurso clave para garantizar productos consistentes y eficientes en su elaboración.

        .row.mb-5.justify-content-center
          .col-lg-3.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema5/8.png", data-aos="zoom-in")
          .col-lg-7.order-lg-1(data-aos="fade-left")
              ol.lista-ol--cuadro.mb-0
                li.d-flex
                  .lista-ol--cuadro__vineta.bg-color-6
                    span 1
                  p.mb-0 Facilita la producción: actúa como guía operativa para las áreas de corte, ensamblaje y acabado.
                li.d-flex  
                  .lista-ol--cuadro__vineta.bg-color-6
                    span 2
                  p.mb-0 Garantiza calidad y uniformidad: establece parámetros claros que aseguran que todos los productos cumplan las mismas especificaciones.
                li.d-flex         
                  .lista-ol--cuadro__vineta.bg-color-6
                    span 3
                  p.mb-0 Optimiza costos y tiempos: minimiza errores, retrabajos y pérdidas, gracias a una planificación detallada.
                li.d-flex 
                  .lista-ol--cuadro__vineta.bg-color-6
                    span 4
                  p.mb-0 Soporte para compras y cotizaciones: informa a proveedores sobre materiales y procesos requeridos.
                li.d-flex 
                  .lista-ol--cuadro__vineta.bg-color-6
                    span 5
                  p.mb-0 Documento de control: se utiliza en auditorías y como base para aplicar sistemas de gestión de calidad.
                li.d-flex 
                  .lista-ol--cuadro__vineta.bg-color-6
                    span 6
                  p.mb-0 Comunicación integral: coordina de forma efectiva a los equipos de diseño, producción, control de calidad y logística.

        .row.justify-content-center
          .col-lg-10
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema5/9.svg' alt='AvatarTop', style="max-width: 90px")
              .tarjeta.bg-color-7
                .p-4
                  p.mb-0 En síntesis, la ficha técnica de diseño es una herramienta estratégica que asegura la coherencia, funcionalidad y estética del producto desde su concepción hasta su entrega final, y resulta clave para la trazabilidad y mejora continua en los procesos de manufactura.
        

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Tipos de construcción de los bolsos
    
    p.mb-5 En la marroquinería, la construcción de un bolso comienza con la elaboración del molde patrón, que depende directamente del sistema constructivo y la tipología del modelo. Cada tipo de construcción define la cantidad y forma de las piezas, así como el proceso de ensamblaje, influyendo en la estética, funcionalidad y eficiencia de producción.

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/10.png", data-aos="zoom-in")
      .col-lg-7
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-8")
          div(titulo="Pinza a 90 grados")
            p.ms-5 Se logra volumen en la base o costados mediante un quiebre perpendicular. El patrón parte de un rectángulo al que se eliminan cuadrados en las esquinas inferiores para formar ángulos de 90°, creando una base estructurada sin necesidad de fuelle. Usado en bolsos Tote o Shopping.
          div(titulo="Pinza")
            p.ms-5 Utiliza pliegues incorporados en el patrón frontal o posterior para generar volumen tridimensional. No requiere fuelles. Común en bolsos tipo <em>pouch</em> o <em>clutch</em>.
          div(titulo="A partir del fuelle o falso")
            p.ms-5 El fuelle actúa como pieza base. A partir de su forma se obtienen el frente y posterior. Ideal para bolsos estructurados como el <em>doctor bag</em> o <em>barrel</em>.
          div(titulo="A partir de la base")
            p.ms-5 Se parte de la forma de la base (ovalada, redonda, etc.) y se proyectan las demás piezas siguiendo su perímetro. Típico en bolsos tipo <em>bucket</em> o shopping estructurado.
          div(titulo="A partir del frontal")
            p.ms-5 El diseño se desarrolla desde el frontal, del cual se derivan las otras piezas (base, laterales, posterior). Utilizado en bolsos tipo <em>satchel, messenger o shopping</em>.
          div(titulo="A partir del frontal y el fuelle")
            p.ms-5 Se combinan las formas del frontal y del fuelle como punto de partida. Exige precisión para el correcto ensamblaje. Ideal para bolsos tipo d<em>octor bag</em> o <em>bowling</em>.
          div(titulo="Una sola pieza (monobloque)")
            p.ms-5 Todo el cuerpo del bolso se diseña en una sola pieza, que luego se dobla y ensambla con mínimas costuras. Apropiado para modelos pequeños, <em>clutch</em> o <em>pouch</em> de diseño minimalista.
    
      
                          
        



</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
