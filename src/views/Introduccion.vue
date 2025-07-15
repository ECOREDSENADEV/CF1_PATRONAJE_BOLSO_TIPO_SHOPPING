<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5 La marroquinería, como expresión técnica y estética, demanda un conocimiento detallado de los procesos de diseño, materiales y métodos de fabricación que garantizan productos funcionales, duraderos y visualmente atractivos. En este contexto, el patronaje cumple un papel esencial, pues define las formas, proporciones y estructuras necesarias para la producción eficiente de bolsos, particularmente el modelo shopping, reconocido por su capacidad, versatilidad y uso cotidiano.

    .row.mb-5
      .col-lg-3.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          p.mb-0 El componente formativo "Materiales, diseño y procesos productivos en la fabricación de bolsos" ofrece al aprendiz una aproximación completa a los fundamentos del patronaje, partiendo del análisis de las partes que componen un bolso, las tipologías más comunes y los materiales adecuados según sus propiedades técnicas y estéticas. Asimismo, se profundiza en las fases clave del proceso productivo —diseño, corte, desbaste, armado, costura y acabados—, proporcionando herramientas que permiten integrar teoría y práctica con un enfoque técnico riguroso.
        .row.align-items-center
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/intro/2.svg", style="max-width: 90px").mx-auto
          .col-lg
            p(data-aos="fade-left") Este conocimiento no solo fortalece las competencias en modelado y confección, sino que también promueve una comprensión crítica de los estándares de calidad, la funcionalidad del producto final y la sostenibilidad en la elección de insumos. Con ello, se prepara al aprendiz para enfrentar retos reales del sector manufacturero de marroquinería, con capacidad de crear patrones precisos, interpretar fichas técnicas y participar activamente en procesos de mejora continua.
    
 
      
    
        

</template>

<script>
export default {
  name: 'Introduccion',
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
