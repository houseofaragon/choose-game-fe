<template>
  <div class="about absolute h-full-screen w-full-screen">
    <div class="absolute p-40 t-[40%] l-[40%] color-white dark:color-white">
      <p>
        Just a fun Choose your own adventure game style I wanted to quickly build out to play around with NuxtJS and Vue.
      </p>
    </div>
    <canvas class="t-0 l-0" id="shader">
    </canvas>
  </div>
</template>

<script>
  export default {
    mounted() {
      let fragment = `
        #ifdef GL_ES
        precision highp float;
        #endif

        uniform vec2 u_resolution;
        uniform vec2 u_mouse;
        uniform float u_time;

        void main() {
            float t = u_time;
            vec2 p = -1.0 + (gl_FragCoord.xy / u_resolution.xy) * 2.0;
            p *= vec2(u_resolution.x / u_resolution.y, 1.0);
            vec3 c = vec3(0.0);
            for(float i = 0.0; i < 7.0; i++) {
              float d = length(p) * cos(p.x) * cos(p.x + 0.01) * i -0.95 * sin(t / 2.);
              d = smoothstep(d + 0.02, 0.4, d - 0.01);    
              c += vec3(d/5., d/5., d);
            }
            gl_FragColor = vec4(c, 1.0);
        }
        `;
        class Shader {
          id;
          fragment;
          vertex;
          glsl;
          constructor(id, fragment, vertex = null) {
            this.id = id;
            this.fragment = fragment;
            this.vertex = vertex;
            this.init();
          }
          init() {
            let canvas = document.getElementById(this.id);
            canvas.style.width = '100%';
            canvas.style.height = '100%';
            let w = Math.ceil(window.innerWidth/2) * 2.0;
            let h = Math.ceil(window.innerHeight/2) * 2.0;
            canvas.width = w;
            canvas.height = h;
            let glsl = new GlslCanvas(canvas);
            let fragment = this.fragment;
            let vertex = this.vertex;
            if (vertex) {
              glsl.load(fragment, vertex);
            } else {
              glsl.load(fragment);
            }
            function resize() {
              let w = Math.ceil(window.innerWidth/2) * 2.0;
              let h = Math.ceil(window.innerHeight/2) * 2.0;
              canvas.width = w;
              canvas.height = h;
              glsl.load(fragment);
            }
            window.addEventListener('resize', resize);
            resize();
          }
        }
        let shader = new Shader('shader', fragment);
    }
  }
</script>

<style lang="scss" scoped>
.about {
  left: 0;
}
</style>