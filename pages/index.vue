<template>
  <div class="about absolute h-full-screen w-full-screen">
    <div class="landing absolute t-[50%] l-[40%] color-white dark:color-white text-center">
      <StoryCard>
        <div class="">
          <h1>CAVE OF TIME </h1>
          <p class="text-left">You are hiking in Snake Canyon when you find yourself lost in the strange, dimly lit Cave of Time. Gradually you can make out two passageways. One curves downward to the right; the other leads upward to the left.</p>
          <p class="text-left">What happens next in the story? It all depends on the choices you make.</p>
        </div>
        <div class="mt-10">
          <StoryCardButton :link="`/story/page-1`">
            Start
          </StoryCardButton>
        </div>
      </StoryCard>
    </div>
    <canvas class="t-0 l-0" id="shader">
    </canvas>
  </div>
</template>

<script>
import StoryCard from '@/components/StoryCard'
import StoryCardButton from '../components/StoryCardButton.vue'

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
            float d = length(p) * cos(p.x) * cos(p.x + 0.01) * i -0.95 * sin(t / 4.);
            // float d = length(p) * sin(p.y) * cos(p.y + 0.01) * i -0.95 * cos(t / 5.);
            d = smoothstep(d + 0.02, 0.4, d - 0.01);    
            c += vec3(d/5., d/5., d/5.);
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
  },
  components: {
    StoryCard,
    StoryCardButton
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 70px;
}
.about {
  left: 0
}
.landing {
  top: 40px;
}
</style>