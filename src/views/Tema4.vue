<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Fases del proceso productivo de marroquinería
    
    p.mb-5 La fabricación de productos de marroquinería es un proceso complejo que abarca desde el diseño inicial hasta el acabado final. Cada fase es crucial para asegurar que el resultado sea de alta calidad, funcional y estéticamente atractivo. A continuación, se describen las principales etapas del proceso productivo, con énfasis en los materiales, técnicas y maquinaria utilizadas.

    separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Diseño y desarrollo del producto
    
    p.mb-5 Esta etapa define la estética, funcionalidad y estructura del producto. Requiere creatividad y precisión técnica.

    SlyderF(columnas="col-12 col-lg-4")
      .bg-color-10.tarjeta.p-4.h-100.shadow-app
        img(src='@/assets/curso/tema4/1.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
        h4.text-center.mb-4 Investigación de tendencias
        p.text-center Análisis de modas, colores, materiales y necesidades del mercado.

      .bg-color-10.tarjeta.p-4.h-100.shadow-app
        img(src='@/assets/curso/tema4/2.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
        h4.text-center.mb-4 Bocetos
        p.text-center Creación de dibujos técnicos que guían el desarrollo.

      .bg-color-10.tarjeta.p-4.h-100.shadow-app
        img(src='@/assets/curso/tema4/3.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
        h4.text-center.mb-4 Elaboración de patrones
        p.text-center Generación de moldes en papel o <em>software</em> especializado para el corte.

      .bg-color-10.tarjeta.p-4.h-100.shadow-app
        img(src='@/assets/curso/tema4/4.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
        h4.text-center.mb-4 Desarrollo de prototipos
        p.text-center Fabricación de muestras para verificar dimensiones y técnicas.

      .bg-color-10.tarjeta.p-4.h-100.shadow-app
        img(src='@/assets/curso/tema4/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
        h4.text-center.mb-4 Pruebas de ajuste y ergonomía
        p.text-center Validación del confort y ajuste antes de la producción en serie.

    separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Corte de materiales
    
    p.mb-5 Esta fase marca el inicio de la fabricación concreta del producto. Consiste en obtener las piezas individuales a partir de los materiales seleccionados.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Materiales más utilizados en el corte
    
    p.mb-5 Los siguientes materiales son los más comunes en esta etapa, cada uno seleccionado según la función y el diseño del producto:

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Cuero al cromo")
        .row.p-4.align-items-center
          .col-lg-6.mb-4.mb-lg-0.order-lg-2
            h4 Cuero natural
            p Flexible, resistente, transpirable. Ideal para productos duraderos y de alta calidad. 
        
          .col-lg-6.order-lg-1
            figure
              img(src='@/assets/curso/tema4/6.png', alt='Texto que describa la imagen')
      .py-3.py-lg-4(titulo="Cuero al cromo")
        .row.p-4.align-items-center
          .col-lg-6.mb-4.mb-lg-0.order-lg-2
            h4 Materiales sintéticos (PU, PVC)
            p Alternativas económicas y ecológicas. Resisten la humedad y permiten variedad estética. 
        
          .col-lg-6.order-lg-1
            figure
              img(src='@/assets/curso/tema4/7.png', alt='Texto que describa la imagen')
      .py-3.py-lg-4(titulo="Cuero al cromo")
        .row.p-4.align-items-center
          .col-lg-6.mb-4.mb-lg-0.order-lg-2
            h4 Textiles (lona, microfibra)
            p Ligeros, duraderos, de secado rápido. Aptos para interiores y componentes decorativos. 
        
          .col-lg-6.order-lg-1
            figure
              img(src='@/assets/curso/tema4/8.png', alt='Texto que describa la imagen')
      .py-3.py-lg-4(titulo="Cuero al cromo")
        .row.p-4.align-items-center
          .col-lg-6.mb-4.mb-lg-0.order-lg-2
            h4 Salpas, espumas, EVAS
            p Materiales de refuerzo que aportan estructura y comodidad. 
        
          .col-lg-6.order-lg-1
            figure
              img(src='@/assets/curso/tema4/9.png', alt='Texto que describa la imagen')


    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Métodos de corte
    
    p.mb-5 El corte de materiales puede realizarse mediante diferentes técnicas, elegidas en función del volumen de producción y el tipo de material.

    TabsA.color-acento-botones.mb-5
      .tarjeta.color-acento-botones--borde.p-4(titulo="Algodón")
        .row.align-items-center
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/tema4/10.png', alt='Texto que describa la imagen')
          .col-xl-8
            h4 Manual
            p Uso de tijeras o cuchillas con plantillas físicas. Apto para producción artesanal o bajo volumen.  
      .tarjeta.color-acento-botones--borde.p-4(titulo="Lino")
        .row.align-items-center
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/tema4/11.png', alt='Texto que describa la imagen')
          .col-xl-8
            h4 Troquelado
            p Se usan moldes de acero afilados (troqueles) que, mediante presión, cortan con precisión. Ideal para producción en serie. 
      .tarjeta.color-acento-botones--borde.p-4(titulo="Lana")
        .row.align-items-center
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/tema4/12.png', alt='Texto que describa la imagen')
          .col-xl-8
            h4 Corte láser
            p Tecnología precisa para cortes limpios en cuero, sintéticos y textiles. 
      .tarjeta.color-acento-botones--borde.p-4(titulo="Seda")
        .row.align-items-center
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/tema4/13.png', alt='Texto que describa la imagen')
          .col-xl-8
            h4 Corte automatizado
            p Corte programado por computadora con cuchilla oscilante. Proporciona rapidez y alta exactitud.

    separador

    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Desbaste
    
    p.mb-5 El desbaste es una etapa esencial para la preparación de las piezas antes del ensamblaje y pegado. Permite mejorar la adhesión del pegamento, facilitar el montaje y garantizar una apariencia más profesional en el producto final.

    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/14.png", data-aos="zoom-in")
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-8")
          div(titulo="Objetivos principales")
            div.ms-5.pst
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-11
                  p.mb-0 Eliminar impurezas en los bordes
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-11
                  p.mb-0 Reducir el espesor en zonas clave
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-11
                  p.mb-0 Optimizar la adherencia de adhesivos
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-11
                  p.mb-0 Mejorar el acabado final
          div(titulo="Procedimiento")
            div.ms-5
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-11
                  p.mb-0 Selección de zonas a desbastar (suela, cortes, uniones)
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-11
                  p.mb-0 Control de presión y espesor para evitar daños
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-11
                  p.mb-0 Limpieza de residuos generados
          div(titulo="Herramientas y maquinaria")
            div.ms-5
              p Desbastadoras y cuchillas especiales que permiten precisión en el trabajo
    
    separador

    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Prearmado
    
    p.mb-5 El prearmado es una etapa preparatoria donde se ensamblan parcialmente las piezas para facilitar el armado final. Esta verificación previa permite detectar errores y corregirlos a tiempo.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema4/15.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .row.mb-2
          .col-lg-5
            div.bg-color-6.text-white.p-3.pst-1
              p.text-bold.mb-0 Selección y revisión de piezas
          .col-lg-7
            div.bg-color-12.p-3
              p.mb-0 Organización de piezas cortadas, verificación de defectos.
        .row.mb-2
          .col-lg-5
            div.bg-color-6.text-white.p-3.pst-1
              p.text-bold.mb-0 Adhesivos temporales
          .col-lg-7
            div.bg-color-12.p-3
              p.mb-0 Aplicación de pegamento o cintas para fijación provisional.
        .row.mb-2
          .col-lg-5
            div.bg-color-6.text-white.p-3.pst-1
              p.text-bold.mb-0 Unión provisional de piezas
          .col-lg-7
            div.bg-color-12.p-3
              p.mb-0 Costuras o fijaciones parciales que mantienen la forma.
        .row.mb-2
          .col-lg-5
            div.bg-color-6.text-white.p-3.pst-1
              p.text-bold.mb-0 Verificación del ajuste
          .col-lg-7
            div.bg-color-12.p-3
              p.mb-0 Revisión de encajes, formas y dimensiones correctas.
        .row.mb-2
          .col-lg-5
            div.bg-color-6.text-white.p-3.pst-1
              p.text-bold.mb-0 Ajustes y correcciones
          .col-lg-7
            div.bg-color-12.p-3
              p.mb-0 Modificaciones necesarias antes del armado final.
        .row.mb-2
          .col-lg-5
            div.bg-color-6.text-white.p-3.pst-1
              p.text-bold.mb-0 Preparación para el armado
          .col-lg-7
            div.bg-color-12.p-3
              p.mb-0 Piezas listas para el pegado definitivo y costura.

    separador

    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.5 Armado
    
    p.mb-5 En esta etapa se unen de forma definitiva todas las piezas del producto. Se consolida la estructura, aportando la forma, resistencia y funcionalidad final del artículo.

    .row.justify-content-center
      .col-lg-8 
        .bg-color-13.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema4/16.png', alt='')
            .col-lg
              .p-3
                ul.lista-ul--color.mb-0
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-11
                    p.mb-0 <b>Preparación de piezas</b>. Revisión y disposición de piezas listas para ensamblaje.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-11
                    p.mb-0 <b>Aplicación de adhesivos</b>. Uso de pegamento definitivo en las zonas de unión.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-11
                    p.mb-0 <b>Posicionamiento y ensamblaje</b>. Ensamble cuidadoso con presión para una adhesión óptima.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-11
                    p.mb-0 <b>Incorporación de refuerzos</b>. Añadido de elementos estructurales como forros y entretelas.

    separador

    #t_4_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.6 Costura en marroquinería
    
    p.mb-5 La costura es una fase fundamental del proceso de fabricación, ya que une de forma permanente las piezas cortadas y prearmadas, aportando estructura, forma y resistencia al producto. Además de cumplir una función estructural, también tiene un papel estético clave en la marroquinería.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Tipos de costura en marroquinería
    
    p.mb-5 A continuación, se presenta un video que explica los principales tipos de costura utilizados en marroquinería, detallando sus características, aplicaciones y ventajas técnicas.

     figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Máquinas de coser utilizadas
    
    p.mb-5 En marroquinería, las máquinas de triple arrastre son las más utilizadas debido a la naturaleza robusta de los materiales.

    .bg-full-width-2.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-9.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/18.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Tracción eficiente
                p.text-center Evita deslizamientos en materiales gruesos como cuero o lona. Las capas se mantienen alineadas.

              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/19.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Puntadas precisas
                p.text-center Permite mantener una longitud de puntada constante, incluso en zonas curvas o con cambios de espesor.

              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/20.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Costura más resistente
                p.text-center Asegura una tensión uniforme, lo que mejora la durabilidad y la estética del producto.

              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema4/21.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Adaptabilidad a distintos grosores
                p.text-center Permite coser desde textiles finos hasta múltiples capas de cuero sin perder tracción.

    
          .col-lg-3.order-lg-1
            figure
              img(src='@/assets/curso/tema4/17.png', alt='')
      
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Máquinas de coser en marroquinería
    
        p El proceso de costura en marroquinería requiere diferentes tipos de máquinas, según el material trabajado (forros o estructuras) y el tipo de operación. A continuación, se presentan las principales máquinas utilizadas y sus características funcionales:

    .bg-full-width.bg-fondo-1.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-3.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/22.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h4 Máquina plana de transporte sencillo
              p Utilizada para forros de materiales livianos como tafetán, poliéster o algodón. Ofrece costuras rectas y uniformes, con tracción suave y baja tensión de hilo para evitar arrugas o daños.

          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/23.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h4 Máquina plana de triple transporte
              p Ideal para materiales pesados como cuero, lona o vinilo. Combina arrastre por dientes, pie y aguja para lograr costuras resistentes, precisas y limpias.
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/24.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h4 Máquina cerradora de codo
              p Permite coser zonas curvas o costados de bolsos y mochilas. Versátil, puede adaptarse a distintas costuras mediante accesorios. Su diseño de brazo facilita el acceso a áreas profundas.

          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/25.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h4 Máquina ribeteadora de codo
              p Diseñada para aplicar ribetes o sesgos decorativos y funcionales. Equipada con guías y pies especiales para insertar ribetes con precisión y reforzar bordes.
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/26.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h4 Máquina de poste con pie rodante
              p Proporciona gran maniobrabilidad para costuras curvas en artículos pequeños como billeteras, monederos o fundas. Ideal para trabajos detallados.
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/27.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h4 Máquina de poste con pie transportador y prénsatelas
              p Ofrece tracción robusta en materiales rígidos y permite coser en espacios reducidos. Adaptable a diferentes grosores gracias a su configuración de arrastre.

          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/28.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h4 Máquina de doble aguja
              p Realiza dos costuras paralelas simultáneamente. Muy útil para refuerzos visibles, asas, bordes y acabados decorativos.
    
    separador

    #t_4_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.7 Acabado y control de calidad
    
    p.mb-5 Esta fase final del proceso productivo en marroquinería tiene como objetivo perfeccionar la apariencia del producto y asegurar que cumple con los estándares de calidad establecidos. Se realiza una inspección minuciosa del artículo terminado, corrigiendo imperfecciones y garantizando su funcionalidad, resistencia y presentación.

    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/29.png", data-aos="zoom-in")
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-8")
          div(titulo="Limpieza y detallado final")
            p.mb-0 Se eliminan restos de adhesivos, hilos, manchas o marcas. Se aplica pulimento o cera para mejorar el aspecto del cuero o materiales sintéticos.
          div(titulo="Verificación de costuras y uniones")
            p.mb-0 Se inspeccionan todas las costuras, remates y refuerzos para detectar fallas, puntadas incompletas o desprendimientos en piezas estructurales o decorativas.
          div(titulo="Control de funcionalidad")
            p.mb-0 Se prueba el funcionamiento de cremalleras, broches, hebillas y cierres magnéticos, asegurando su correcto desempeño.
          div(titulo="Revisión de medidas y forma")
            p.mb-0 Se verifica que las dimensiones coincidan con el diseño original y que el producto mantenga su forma estructural sin deformaciones.
          div(titulo="Empaque y etiquetado")
            p.mb-0 Se colocan etiquetas de marca, composición o instrucciones de uso, y se realiza el empaque con materiales protectores adecuados para su distribución.





</template>

<script>
export default {
  name: 'Tema4',
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
