<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Materiales e insumos para marroquinería
    
    p.mb-5 Los materiales e insumos son esenciales en la fabricación de productos de marroquinería, ya que determinan su calidad, resistencia, funcionalidad y confort. Una elección adecuada influye directamente en la durabilidad, el desempeño y la estética del producto final.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Tipos de materiales
    
    p.mb-5 En marroquinería, los artículos como bolsos, carteras, cinturones y mochilas requieren materiales que no solo sean visualmente atractivos, sino que resistan el uso constante, mantengan su forma y conserven su acabado con el paso del tiempo. Los materiales pueden clasificarse según:

    .row.mb-5.justify-content-center.align-items-center
      .col-md-3.col-lg-1.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
      .col-lg-7
        ol.lista-ol--cuadro.mb-0
          li.d-flex.bg-color-1.p-1
            .lista-ol--cuadro__vineta.bg-color-9
              span 
            p.mb-0 <b>Origen</b>: natural o sintético.
          li.d-flex.bg-color-1.p-1 
            .lista-ol--cuadro__vineta.bg-color-9
              span 
            p.mb-0 <b>Aplicación</b>: estructura, forro, refuerzo o decoración.
          li.d-flex.bg-color-1.p-1 
            .lista-ol--cuadro__vineta.bg-color-9
              span 
            p.mb-0 <b>Propiedades técnicas</b>: flexibilidad, grosor, resistencia a la tracción o al desgaste.
    
    p.mb-5 La correcta combinación de estos elementos permite obtener productos innovadores, cómodos y de alta calidad.

    separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Cueros
    
    p.mb-5 El cuero es un material natural obtenido de la piel de animales como bovinos, ovinos, caprinos y porcinos. Su tratamiento mediante un proceso de curtido impide la descomposición y mejora sus propiedades físicas como la resistencia, flexibilidad y durabilidad. Gracias a su transpirabilidad y adaptabilidad, es ampliamente usado en calzado, vestimenta, tapicería y especialmente en marroquinería. Una de las clasificaciones principales del cuero se basa en el tipo de curtido:

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Cuero al cromo")
        .row.p-4.align-items-center
          .col-lg-6.mb-4.mb-lg-0.order-lg-2
            h4 Cuero al cromo
            p Flexible, resistente, con color uniforme. Se utiliza en marroquinería, calzado, tapicería y vestimenta.
        
          .col-lg-6.order-lg-1
            figure
              img(src='@/assets/curso/tema3/2.png', alt='Texto que describa la imagen')
      .py-3.py-lg-4(titulo="Cuero al cromo")
        .row.p-4.align-items-center
          .col-lg-6.mb-4.mb-lg-0.order-lg-2
            h4 Cuero vegetal
            p Más rígido, biodegradable y con tonos naturales. Se emplea principalmente en artesanía y marroquinería.
        
          .col-lg-6.order-lg-1
            figure
              img(src='@/assets/curso/tema3/3.png', alt='Texto que describa la imagen')
      .py-3.py-lg-4(titulo="Cuero al cromo")
        .row.p-4.align-items-center
          .col-lg-6.mb-4.mb-lg-0.order-lg-2
            h4 Cuero mixto
            p Combina curtido al cromo y vegetal, logrando un equilibrio entre resistencia y sostenibilidad. Se destina a calzado y marroquinería de calidad media-alta.
        
          .col-lg-6.order-lg-1
            figure
              img(src='@/assets/curso/tema3/4.png', alt='Texto que describa la imagen')
  
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Curtidos alternativos
    
    p.mb-5 Existen métodos de curtido alternativos al tradicional al cromo o vegetal. Estos emplean agentes menos contaminantes y con mejor biodegradabilidad, orientados a reducir el impacto ambiental sin sacrificar la calidad del producto. A continuación, se describen los más relevantes:

    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/5.png", data-aos="zoom-in")
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-8")
          div(titulo="Curtido con Aluminio (<em>Wet White</em>)")
            div.ms-5
              p Utiliza sales de aluminio en lugar de cromo. Produce un cuero más claro, con alta capacidad de teñido. Más ecológico, aunque menos resistente al agua. 
              p <b>Usos</b>: Guantes, ropa, marroquinería, calzado fino.
          div(titulo="Curtido con Titanio")
            div.ms-5
              p Emplea sales de titanio, evitando metales pesados. Más biodegradable, seguro para el ambiente. Cuero suave, claro, pero menos resistente que el curtido al cromo. 
              p <b>Usos</b>: Guantes, ropa, marroquinería, calzado fino.
          div(titulo="Curtido con Aldehídos (<em>Wet White</em>)")
            div.ms-5
              p Usa glutaraldehído o formaldehído. Da un cuero muy flexible y suave, aunque con menor resistencia. Algunas variantes eliminan formaldehído por razones ambientales.  
              p <b>Usos</b>: Interiores de automóviles, marroquinería, calzado.
          div(titulo="Curtido con Sílice")
            div.ms-5
              p Basado en compuestos de dióxido de silicio. Evita metales, tiene bajo impacto ambiental. El cuero resultante es ligero y flexible. 
              p <b>Usos</b>: Guantes, tapicería, marroquinería, ropa y calzado fino.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Según el acabado superficial
    
    p.mb-5 El acabado superficial del cuero determina su textura, apariencia y resistencia. Cada tipo se elige en función del producto y el estilo deseado:

    .bg-full-width.bg-fondo-1.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-3.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/6.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h4 Cuero plena flor
              p Capa más externa, sin lijar. Conserva la textura natural. Alta resistencia y envejecimiento elegante. 
              p <b>Usos</b>: Bolsos de lujo, carteras finas, maletines ejecutivos, cinturones premium.

          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/7.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h4 Cuero flor corregida
              p Lijado superficial para eliminar imperfecciones. Acabado uniforme, más económico
              p <b>Usos</b>: Bolsos comerciales, billeteras, estuches, artículos promocionales.
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/8.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h4 Gamuza o ante
              p Del reverso de la piel. Textura aterciopelada, suave, pero delicada ante el agua. 
              p <b>Usos</b>: Bolsos tipo saco, carteras de moda, accesorios femeninos, detalles decorativos.

          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/9.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h4 <em>Nobuk</em>
              p Lijado fino de la cara externa. Acabado suave, más resistente que la gamuza. 
              p <b>Usos</b>: Bolsos urbanos, mochilas elegantes, portadocumentos.

          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/10.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h4 Cuero charol
              p Acabado brillante mediante barniz o plástico. Superficie lisa y resistente a la humedad superficial. 
              p <b>Usos</b>: Carteras de fiesta, bolsos de noche, monederos, cinturones decorativos.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto  Según la procedencia animal
    
    p.mb-5 La especie animal influye en la textura, resistencia y usos del cuero. Aquí se detallan los más comunes:

    .bg-full-width.bg-color-5
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-9.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/12.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Cuero vacuno
                p.text-center Grueso, resistente, fácil de trabajar. Alta firmeza y superficie uniforme. 
                p.text-center <b>Usos</b>: Bolsos estructurados, cinturones, mochilas, maletines.

              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/13.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Cuero ovino (cordero)
                p.text-center Muy suave y flexible. Tacto fino, ideal para acabados delicados. 
                p.text-center <b>Usos</b>: Carteras de mano, bolsos femeninos, billeteras elegantes, forros de lujo.

              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/14.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Cuero caprino (cabra)
                p.text-center Textura granulada natural. Ligero, duradero y resistente. 
                p.text-center <b>Usos</b>: Carteras de lujo, bolsos pequeños, accesorios finos, guantería.

              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/15.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 porcino
                p.text-center Económico, con poros visibles. Menor durabilidad. 
                p.text-center <b>Usos</b>: Forros de bolsos, billeteras económicas, artículos promocionales.

              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/16.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Cueros exóticos (cocodrilo, serpiente, avestruz)
                p.text-center Apariencia exclusiva, patrones naturales únicos. 
                p.text-center <b>Usos</b>: Bolsos de lujo, carteras de diseñador, cinturones premium, detalles visuales de alto impacto.

    
          .col-lg-3.order-lg-1
            figure
              img(src='@/assets/curso/tema3/11.png', alt='')

    p.mb-5 El cuero es un material versátil cuya calidad depende de su curtido, acabado superficial y procedencia animal. Estas variables determinan su resistencia, flexibilidad y valor estético, siendo fundamentales para el diseño y confección en la marroquinería.

    
    separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Sintéticos
    
    p.mb-5 Los materiales sintéticos son aquellos fabricados a partir de compuestos químicos derivados del petróleo, polímeros y otros materiales artificiales. Están diseñados para imitar o mejorar las propiedades de materiales naturales como el cuero o los textiles. En la industria marroquinera, se valoran por su bajo costo, versatilidad, resistencia a la humedad y facilidad de mantenimiento. Su clasificación puede hacerse según su composición, estructura y aplicación. A continuación, se presentan los principales materiales sintéticos según su composición:


    .bg-full-width.bg-fondo-1.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-3.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/17.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h4 Poliuretano (PU)
              p Ligero, flexible, resistente al agua y al desgaste. Textura similar al cuero natural. Usado como sustituto del cuero en bolsos, carteras, cinturones, mochilas y estuches. 

          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/18.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h4 Policloruro de vinilo (PVC)
              p Económico, impermeable y resistente, aunque menos transpirable. Superficie brillante o mate. Aplicado en bolsos de uso diario, accesorios promocionales, estuches escolares y decoración.
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/19.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h4 Etilvinilacetato (EVA)
              p Espumoso, muy ligero, flexible y fácil de moldear. Se emplea en bases rígidas de bolsos, refuerzos internos y piezas acolchadas.

          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/20.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h4 <em>Nylon </em> y Poliéster
              p Alta resistencia a la tracción, secado rápido, transpirables. Disponibles en múltiples texturas y colores. Usados en forros de bolsos, mochilas técnicas, bolsos deportivos y bolsillos internos.

          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/21.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h4 Microfibra sintética
              p Textura similar al cuero natural, alta resistencia al uso y a la humedad. Ligera. Alternativa premium para bolsos de lujo, carteras ecológicas y marroquinería vegana.
    
    p.mb-5 También es posible clasificar estos materiales según su estructura y aplicación en la marroquinería:

    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/22.png", data-aos="zoom-in")
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-8")
          div(titulo="Sintéticos tipo cuero")
            div.ms-5
              p Materiales que imitan el aspecto y la textura del cuero natural, usualmente de PU o PVC. Ofrecen buena estética a menor costo. Usados como sustitutos del cuero en bolsos, carteras, cinturones, billeteras y mochilas económicas.
          div(titulo="Sintéticos textiles")
            div.ms-5
              p Tejidos o no tejidos hechos con fibras sintéticas como poliéster, nylon o lona sintética. Ligeros, resistentes y de rápido secado. Se utilizan en bolsos deportivos, mochilas, forros internos, bolsos informales, neceseres y estuches.
          div(titulo="Espumas y polímeros")
            div.ms-5
              p Materiales ligeros, flexibles y con capacidad amortiguadora como EVA o poliuretano expandido. Aplicados en refuerzos internos, bases, estructura de bolsos y correas ergonómicas.
          div(titulo="Plásticos rígidos")
            div.ms-5
              p Materiales duros como PVC rígido o termoplásticos. Usados para dar forma o protección. Comunes en herrajes plásticos, refuerzos de tapa y bases estructurales de mochilas o maletines rígidos.
    
    p.mb-5 El uso de materiales sintéticos permite diversificar los productos, reducir costos y ofrecer alternativas ecológicas o veganas. La elección del material adecuado debe considerar la funcionalidad, la estética deseada y el público objetivo.

    separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Textiles
    
    p.mb-5 Los textiles están formados por fibras entrelazadas, ya sean naturales o sintéticas, y se emplean en la confección de prendas, tapicería, marroquinería y calzado. En marroquinería, destacan por su flexibilidad, transpirabilidad, ligereza y comodidad. Su uso permite obtener productos más livianos y versátiles, además de ampliar la variedad de estilos cuando se combinan con cuero natural o sintético. Según el origen de las fibras, los textiles se dividen en dos grandes grupos: naturales y sintéticos. A continuación se detallan los textiles elaborados a partir de fibras naturales:

    TabsA.color-acento-botones.mb-5
      .tarjeta.color-acento-botones--borde.p-4(titulo="Algodón")
        .row.align-items-center
          .col-xl-2.mb-4
            figure
              img(src='@/assets/curso/tema3/24.svg', alt='Texto que describa la imagen')
          .col-xl-10
            h4 Algodón
            p De origen vegetal. Suave, transpirable, absorbente, hipoalergénico, fácil de teñir. Usado en forros interiores, bolsos ecológicos, mochilas livianas, estuches y detalles decorativos.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Lino")
        .row.align-items-center
          .col-xl-2.mb-4
            figure
              img(src='@/assets/curso/tema3/23.png', alt='Texto que describa la imagen')
          .col-xl-10
            h4 Lino
            p De origen vegetal. Resistente, fresco, ligero, biodegradable, con textura natural. Aplicado en bolsos artesanales, mochilas de verano, carteras ecológicas y revestimientos exteriores.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Lana")
        .row.align-items-center
          .col-xl-2.mb-4
            figure
              img(src='@/assets/curso/tema3/25.svg', alt='Texto que describa la imagen')
          .col-xl-10
            h4 Lana
            p De origen animal. Aislante térmico, elástica, absorbe humedad, suave. Empleada en forros de invierno, fundas acolchadas y accesorios térmicos o artesanales.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Seda")
        .row.align-items-center
          .col-xl-2.mb-4
            figure
              img(src='@/assets/curso/tema3/26.svg', alt='Texto que describa la imagen')
          .col-xl-10
            h4 Seda
            p De origen animal. Suave, brillante, delicada y lujosa. Utilizada en detalles decorativos, bolsos de lujo e interiores finos de carteras y sobres elegantes.
    
    p.mb-5 En contraste, los textiles de fibras sintéticas se obtienen por procesos químicos a partir de polímeros derivados del petróleo:

    .bg-full-width.bg-fondo-1.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-3.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/27.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h4 <em>Poliéster</em>
              p Ligero, resistente, de secado rápido, no absorbe humedad, fácil de limpiar. Presente en forros de bolsos, mochilas deportivas, tejidos exteriores, correas y maletines.

          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/28.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h4 <em>Nylon</em>
              p Muy resistente a la abrasión, flexible, duradero, repele el agua. Usado en mochilas técnicas, refuerzos estructurales, bolsos <em>outdoor</em>, cierres y correas.
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/29.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h4 Elastano (<em>Spandex</em>)
              p Alta elasticidad, se adapta al movimiento, resistente al sudor. Utilizado en bandas elásticas, bolsos expandibles y detalles ergonómicos.

          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/30.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h4 Acrílico
              p Suave, imita la lana, resistente a rayos UV y al desgaste. No se deforma fácilmente. Aplicado en forros térmicos, mochilas de invierno y bolsos tejidos de estilo artesanal o casual.
    
    p.mb-5 Los textiles sintéticos son aliados estratégicos en la fabricación de productos de marroquinería gracias a su resistencia, versatilidad y economía. La elección entre fibras naturales o sintéticas dependerá del tipo de producto, uso previsto y segmento de mercado. En general, los sintéticos dominan en bolsos funcionales, deportivos y técnicos, mientras que los naturales se asocian más a la sostenibilidad, el lujo o lo artesanal.


</template>

<script>
export default {
  name: 'Tema3',
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
