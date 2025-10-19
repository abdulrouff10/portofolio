<template>
  <div class="max-w-7xl mx-auto flex flex-col relative">

    <SnowfallEffect class="fixed top-0 left-0 w-full h-full z-[-1]" />

    <!-- Navbar -->
    <!-- SESUDAH: lebih tinggi dan konten di tengah -->
<nav class="max-w-7xl px-5 md:fixed top-0 z-[98] w-screen bg-white bg-opacity-80 backdrop-blur-md shadow h-20 flex items-center">

      <div class="container mx-auto flex flex-wrap items-center justify-between">
        <button @click="redirectToHome" class="flex">
          <span class="self-center text-lg text-slate-800 font-semibold whitespace-nowrap fadein-bot hover:text-sky-600">
            Slamet Amin Abdul Ro'uf
          </span>
        </button>
        <div class="flex md:order-2 fadein-bot">
          <a href="https://github.com/abdulrouff10">
            <img class="w-9 rounded-full" src="https://seeklogo.com/images/G/github-logo-2E3852456C-seeklogo.com.png" alt="github">
          </a>
        </div>
        <div class="hidden md:flex justify-between items-center w-full md:w-auto md:order-1" id="mobile-menu-3">
          <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            <li>
              <router-link to="/" class="fadein-bot text-sky-900 hover:text-sky-600 md:p-0">Home</router-link>
            </li>
            <li>
              <router-link to="/about" class="fadein-bot fadein-1 text-sky-900 hover:text-sky-600 md:p-0">About</router-link>
            </li>
            <li>
              <router-link to="/portfolio" class="fadein-bot fadein-2 text-sky-900 hover:text-sky-600 md:p-0">Portfolio</router-link>
            </li>

            <li>
                <router-link to="/contact" class="text-slate-800 hover:text-blue-600 transition">Contact</router-link>
              </li>

          </ul>
        </div>
      </div>
    </nav>

    <!-- Router View -->
    <div class="md:mt-[100px] pb-20">
      <router-view />
    </div>
  </div>

  <!-- Footer -->
  <footer class="block md:hidden fixed bottom-0 left-0 right-0 rounded-t-3xl border border-slate-300 bg-white bg-opacity-80 backdrop-blur-md shadow">
    <nav class="flex justify-around py-4 text-xs">
      <router-link to="/" class="text-sky-900 hover:text-sky-600">Home</router-link>
      <router-link to="/about" class="text-sky-900 hover:text-sky-600">About</router-link>
      <router-link to="/portfolio" class="text-sky-900 hover:text-sky-600">Portfolio</router-link>
      <router-link to="/contact" class="text-sky-900 hover:text-sky-600">Contact</router-link>
    </nav>
  </footer>
</template>

<script>
import SnowfallEffect from './components/SnowfallEffect.vue';

export default {
  components: {
    SnowfallEffect

  },
  methods: {
    redirectToHome() {
      this.$router.push('/')
    }
  }
}
</script>


<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-track {
  background: #e2e8f0; /* abu terang */
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: #60a5fa; /* biru lembut */
  border-radius: 5px;
}

body {
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(to bottom, #e0f2fe, #f8fafc); /* biru muda ke putih */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

/* Navbar active link */
nav a.router-link-exact-active {
  display: inline-flex;
  flex-direction: column;
  color: #0284c7;
}

nav a.router-link-exact-active::after {
  content: "";
  margin-top: 0.08em;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: #60a5fa;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
