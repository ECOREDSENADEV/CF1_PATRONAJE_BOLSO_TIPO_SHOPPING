<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Tipos de acabados para los bolsos
    
    p.mb-5 El acabado es una etapa clave en la confección de bolsos, ya que define tanto la estética como la durabilidad del producto. Existen diferentes técnicas según el material, el diseño y el nivel de detalle deseado.

    .bg-full-width.bg-fondo-1.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-3.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema6/1.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h4 Al corte
              p.mb-0 Las piezas se unen por el borde, sin dobleces. En cueros naturales o sintéticos se puede dejar al natural o aplicar tinta para sellar. Uso común en materiales que no se deshilachan. Ventaja: rápido. Desventaja: si se entinta, el proceso se vuelve más laborioso.
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema6/2.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h4 Con ribete
              p.mb-0 Se añade una tira decorativa y protectora en los bordes. Usado en mochilas y bolsos deportivos. Ventaja: refuerza y embellece. Desventaja: requiere doble costura y precisión.
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema6/3.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h4 Doblado (embonado)
              p.mb-0 El canto del material se dobla hacia adentro antes de coser. Ideal para asas, bolsillos y bocas de bolsos. Ventaja: acabado limpio y reforzado. Desventaja: más tiempo y técnica.
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema6/4.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h4 Con vivo
              p.mb-0 Se inserta un cordón cubierto entre dos piezas como adorno estructural. Aplicado en bolsos elegantes o de viaje. Ventaja: da forma y diseño. Desventaja: técnica más compleja.
          .row.align-items-center.p-4.p-md-5.justify-content-center
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema6/5.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h4 Cosido y vuelto
              p.mb-0 Se unen piezas por el revés y se voltean al derecho para ocultar la costura. Común en bolsos con forro, estuches y carteras. Ventaja: acabado prolijo. Desventaja: armado y volteo más complicados.

</template>

<script>
export default {
  name: 'Tema6',
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
