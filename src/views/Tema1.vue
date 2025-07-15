<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Estructura del bolso
    
    p.mb-5 La estructura del bolso se refiere a la organización y disposición de sus partes fundamentales, las cuales definen su funcionalidad, forma, resistencia y estética. Comprender esta estructura es esencial para el diseño y patronaje preciso, ya que cada componente cumple una función técnica y visual específica. Cada una de estas partes debe integrarse con precisión durante el patronaje para garantizar un producto funcional, ergonómico y estéticamente atractivo. Esto permite al patronista desarrollar moldes adecuados, optimizar materiales y facilitar los procesos de corte, ensamble y confección. A continuación se describen las principales partes de un bolso:

    .row.mb-5.justify-content-center
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        .titulo-sexto.color-acento-contenido
          h5 Figura 1
          span Partes del bolso.
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-4.order-lg-1
        .bg-color-2.p-5.tarjeta(data-aos="fade-left")
          ol.lista-ol--cuadro.mb-0
            li 
              .lista-ol--cuadro__vineta
                span 1
              | Cuerpo (frontal Espaldar).
            li 
              .lista-ol--cuadro__vineta
                span 2
              | Fuelle, falso o costado.
            li 
              .lista-ol--cuadro__vineta
                span 3
              | Base o Fondo.
            li 
              .lista-ol--cuadro__vineta
                span 4
              | Tapa o solapa.
            li 
              .lista-ol--cuadro__vineta
                span 5
              | Asas o correas.
            li 
              .lista-ol--cuadro__vineta
                span 6
              | Forro interno.
            li 
              .lista-ol--cuadro__vineta
                span 7
              | Chapeta.
            li 
              .lista-ol--cuadro__vineta
                span 8
              | Cremallera (bolsillo interno).
            li 
              .lista-ol--cuadro__vineta
                span 9
              | Herrajes.
            li 
              .lista-ol--cuadro__vineta
                span 10
              | Slider o cierre de cremallera.
            li 
              .lista-ol--cuadro__vineta
                span 11
              | Refuerzo o alma de base.
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
      .col-lg-7
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Cuerpo (frontal, espaldar)") Parte central del bolso que define su forma y capacidad. Puede ser una sola pieza o varias unidas entre sí.
          p.text-small(numero="2" titulo="Fuelle, falso o costado") Piezas laterales que aportan volumen y estabilidad estructural.
          p.text-small(numero="3" titulo="Base o fondo") Parte inferior del bolso que soporta el peso. Puede incluir refuerzos internos para mayor rigidez.
          p.text-small(numero="4" titulo="Tapa o solapa") Cubre la abertura superior y suele incorporar sistemas de cierre como broches, cremalleras o hebillas.
          p.text-small(numero="5" titulo="Asas o correas") Elementos para transportar el bolso. Pueden ser cortas o largas, fijas o regulables, según el diseño.
          p.text-small(numero="6" titulo="Forro interior") Cubre el interior del bolso. Puede incluir compartimientos, bolsillos y cremalleras.
          p.text-small(numero="7" titulo="Chapeta") Pieza que puede servir como base para elementos de cierre o decoración, aportando refuerzo y estética.
          p.text-small(numero="8" titulo="Cremallera (bolsillo interno)") Elemento de cierre utilizado para compartimientos interiores, aportando seguridad y organización.
          p.text-small(numero="9" titulo="Herrajes") Incluye argollas, broches, remaches y otros componentes metálicos o plásticos que complementan funcionalidad y presentación.
          p.text-small(numero="10" titulo="Slider o cierre de cremallera") Parte móvil de la cremallera que permite abrir o cerrar el bolso o sus compartimentos.
          p.text-small(numero="11" titulo="Refuerzo o alma de base") Materiales internos (como espumas, salpas, EVA) que proporcionan rigidez y estructura a la base del bolso.


       
 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
