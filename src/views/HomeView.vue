<template>
  <main
    class="mt-6 flex flex-col-reverse gap-6 items-center md:flex-row md:gap-16 md:justify-center min-h-[65vh] md:min-h-[80vh]"
  >
    <!-- Left Text -->
    <div class="space-y-2 text-center md:text-left px-4">
      <p class="text-sky-600 font-medium text-sm md:text-base tracking-tighter">
        Hello World, I'm
      </p>
      <h1
        class="text-2xl font-bold md:text-5xl text-sky-900 fadein-up tracking-tighter"
      >
        Ro'uf
      </h1>
      <div class="py-1">
        <h1
          class="typewrite text-base md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-blue-400 md:text-2xl fadein-up tracking-tighter"
          ref="typewriter"
        >
          <span class="wrap">{{ txt }}</span>
        </h1>
      </div>
      <p
        class="text-sky-800 fade-in-from-left text-sm md:text-base tracking-tighter"
      >
        Welcome to my personal website...
      </p>

      <a
        href="https://drive.google.com/file/d/1yYcLx2smNLu0GWqONQmc28RrAXULrnM2/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        class="fadein-bot fade-500 inline-flex items-center py-2 px-4 text-sm font-medium rounded-lg border transition duration-300 md:py-2.5 md:px-5 text-sky-700 border-sky-400 hover:bg-sky-100 bg-white bg-opacity-70 shadow tracking-tighter"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="mr-2 w-4 h-4"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zm5.845 17.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V12a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z"
            clip-rule="evenodd"
          />
          <path
            d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z"
          />
        </svg>
        Download Resume
      </a>

    </div>

    <!-- Right Image -->
    <div class="flex justify-center md:justify-start fadein-right">
      <img
        alt="avatar"
        class="w-40 sm:w-48 md:w-64 rounded-full border-4 border-sky-300 shadow-lg hadow-sky-100/50 transition duration-300 hover:shadow-sky-300/80 hover:scale-105"
        src="img/dingin.jpg"
      />
    </div>
  </main>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      toRotate: [
        "Junior Programmer",
        "Web Developer",
        "Web Designer",
        "Tech Enthusiast",
      ],
      period: 2000,
      txt: "",
      loopNum: 0,
      isDeleting: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.tick();
    });
  },
  methods: {
    tick() {
      let typewriter = this.$refs.typewriter;
      if (!typewriter) return;

      let i = this.loopNum % this.toRotate.length;
      let fullTxt = this.toRotate[i];
      this.txt = this.isDeleting
        ? fullTxt.substring(0, this.txt.length - 1)
        : fullTxt.substring(0, this.txt.length + 1);
      typewriter.innerHTML = `<span class="wrap">${this.txt}</span>`;

      let delta = 200 - Math.random() * 100;
      if (this.isDeleting) delta /= 2;

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(() => this.tick(), delta);
    },
  },
};
</script>

<style>
body {
  overflow-y: scroll;
  overflow-x: hidden;
}

.typewrite > .wrap {
  border-right: 0.08em solid #0284c7;
}

.wave {
  animation: wave-animation 2.5s infinite;
  transform-origin: 70% 70%;
  display: inline-block;
}

@keyframes wave-animation {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.pict {
  box-shadow: 0 0 60px -10px rgba(147, 197, 253, 0.6); /* biru salju */
}

.fadein-up {
  opacity: 0;
  animation: fadeInUp 0.5s forwards;
  animation-delay: 500ms;
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-from-left {
  opacity: 0;
  animation: fadeInLeft 0.5s forwards;
  animation-delay: 500ms;
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

.fadein-right {
  opacity: 0;
  animation: fadeInRight 0.5s forwards;
  animation-delay: 500ms;
}
@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadein-bot {
  opacity: 0;
  animation: fadeInBot 0.5s forwards;
}
@keyframes fadeInBot {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fadein-1 {
  animation-delay: 200ms;
}
.fadein-2 {
  animation-delay: 400ms;
}
.fadein-3 {
  animation-delay: 600ms;
}
.fade-500 {
  animation-delay: 500ms;
}
</style>
