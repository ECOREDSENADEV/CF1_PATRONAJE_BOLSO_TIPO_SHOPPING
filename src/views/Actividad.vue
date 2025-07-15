<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Conceptos clave en la fabricación de bolsos de marroquinería',
      titulo: 'Cuestionario',
      introduccion:
        'Identificar materiales, diseño, procesos productivos y tipos de bolsos utilizados en la marroquinería.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la principal función del patronaje en la marroquinería?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar herrajes y cierres.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Controlar la calidad del bolso terminado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Definir formas, proporciones y estructuras del bolso.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Clasificar los materiales de forro.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: 'El cuero curtido al cromo se caracteriza por ser:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Rígido y biodegradable.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Flexible, resistente y con color uniforme.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Suave pero poco durable.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Brillante y delicado ante el agua.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué pieza del bolso aporta volumen y estabilidad estructural?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Chapeta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Base o fondo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Fuelle, falso o costado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Asas o correas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de los siguientes materiales sintéticos imita mejor el cuero natural?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'EVA.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Poliéster.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Poliuretano (PU).',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Acrílico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué tipo de bolso tiene forma cilíndrica y se usa frecuentemente en actividades deportivas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Clutch/em>.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>Messenger Bag/em>.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '<em>Barrel Bag/em>.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '<em>Satchel/em>.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: 'El cuero vegetal es más apropiado para productos:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Con alta exposición a humedad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Biodegradables y artesanales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Con estructura metálica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Que requieren gran elasticidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Cuál es la función principal del desbaste en marroquinería?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aplicar acabados brillantes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir espesor y mejorar la adherencia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Unir piezas de cuero.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Dibujar el patrón del bolso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué máquina de coser es ideal para trabajar materiales pesados como el cuero?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Máquina plana de triple transporte.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Máquina de poste con pie rodante.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Máquina plana de transporte sencillo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Máquina cerradora de codo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Cuál es una característica del bolso tipo Baguette?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Estructura metálica rígida.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Gran capacidad para viajes largos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Tira corta y forma alargada.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Se lleva cruzado con correa larga.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué acabado consiste en doblar el canto del material hacia adentro antes de coser?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cosido y vuelto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Doblado (embonado).',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Al corte.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Con ribete.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: 'El nylon y el poliéster son textiles naturales.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Los bolsos tipo Tote y Shopping suelen construirse con pinzas a 90 grados.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'El cuero caprino se caracteriza por ser pesado y poco flexible.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'El corte láser permite cortes precisos y limpios en cuero y materiales sintéticos.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'La ficha técnica de diseño se utiliza únicamente durante el proceso de ventas del bolso.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
