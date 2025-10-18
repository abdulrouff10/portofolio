<template>
  <div
     class="mt-6 bg-[#e0f2fe] space-y-6 pt-6 px-5 py-10 md:px-12 text-left rounded-3xl text-slate-800 mx-3 mb-5 shadow">

    <article data-page="about">
      <header>
        <h2 class="text-2xl md:text-4xl font-extrabold text-blue-900 mb-6">About Me</h2>

      </header>

      <section class="text-sm md:text-base text-justify flex flex-col gap-6 md:flex-row md:items-center md:gap-10">

        <div class="flex justify-center">
         <img
  class="w-36 sm:w-40 md:w-64 rounded-full border-4 border-sky-300 shadow-lg shadow-sky-100/50 transition duration-300 hover:shadow-sky-300/80 hover:scale-105"
  src="img/dingin.jpg"
  alt="Foto Profil"
/>

        </div>
        <div class="md:w-8/12">
          <p class="mb-4 fadein-left fadeins-1">
            Hello! I’m <strong>Slamet Amin Abdul Ro'uf</strong>, a passionate
            web developer from Kudus, Central Java, Indonesia. I enjoy transforming
            ideas into real-world websites that are elegant, efficient, and
            user-friendly. For me, programming is both logic and art.
          </p>
          <p class="fadein-left fadeins-2">
            I focus on building fast, responsive, and scalable web applications using Laravel, Vue, and Tailwind CSS. Clean architecture and smooth user experiences are at the core of my work.
          </p>
        </div>
      </section>
    </article>
  </div>

  <div class="bg-[#e0f2fe] px-5 py-6 md:px-12 text-left rounded-3xl text-slate-800 mx-3 mb-6 shadow">
  <article data-page="skills">
    <header>
      <!-- Judul Skills -->
      <h2 class="text-xl md:text-3xl font-bold text-blue-900 mb-4 tracking-tight">
        Skills
      </h2>

      <!-- Tombol Tab -->
      <div class="mb-6 flex flex-wrap gap-2">
        <button
          class="px-3 py-1.5 text-sm rounded-full text-white bg-blue-500 hover:bg-blue-600 transition duration-200"
          :class="{ 'bg-blue-700': activeTab === 1 }"
          @click="activeTab = 1"
        >
          Tech Stack
        </button>

        <button
          class="px-3 py-1.5 text-sm rounded-full text-white bg-blue-500 hover:bg-blue-600 transition duration-200"
          :class="{ 'bg-blue-700': activeTab === 2 }"
          @click="activeTab = 2"
        >
          Tools
        </button>
      </div>
    </header>


      <section v-show="activeTab === 1">
       <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">

          <div
            v-for="item in tech"
            :key="item.id"
            class="group flex items-center p-3 border rounded-lg bg-white shadow hover:shadow-lg transition"
          >
            <img :src="item.imageUrl" alt="icon" class="w-10 h-10 mr-3" />
            <div>
              <div class="font-semibold">{{ item.name }}</div>
              <div
                class="text-sm text-gray-500 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300"
              >
                {{ item.status }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section v-show="activeTab === 2">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">

          <div
            v-for="item in tools"
            :key="item.id"
            class="group flex items-center p-3 border rounded-lg bg-white shadow hover:shadow-lg transition"
          >
            <img :src="item.imageUrl" alt="icon" class="w-10 h-10 mr-3" />
            <div>
              <div class="font-semibold">{{ item.name }}</div>
              <div
                class="text-sm text-gray-500 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300"
              >
                {{ item.status }}
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 1,
      tech: [
        {
          id: 1,
          name: "HTML",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
          status: "Advanced",
        },
        {
          id: 2,
          name: "CSS",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
          status: "Advanced",
        },
        {
          id: 3,
          name: "PHP",
          imageUrl:
            "https://cdn.iconscout.com/icon/free/png-256/free-php-2038871-1720084.png",
          status: "Advanced",
        },
        {
          id: 4,
          name: "Javascript",
          imageUrl:
            "https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png",
          status: "Advanced",
        },
        {
          id: 13,
          name: "Python",
          imageUrl: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
          status: "intermediate",
        },
        {
          id: 5,
          name: "Laravel",
          imageUrl: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg",
          status: "Advanced",
        },
        // {
        //   id: 6,
        //   name: "Codeigniter",
        //   imageUrl: "https://cdn.worldvectorlogo.com/logos/codeigniter.svg",
        //   status: "Intermediate",
        // },
        {
          id: 7,
          name: "Vue",
          imageUrl:
            "https://cdn.iconscout.com/icon/free/png-256/free-vue-282497.png?f=webp",
          status: "Intermediate",
        },
        // {
        //   id: 8,
        //   name: "ReactJS",
        //   imageUrl:
        //     "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
        //   status: "Intermediate",
        // },
        // {
        //   id: 9,
        //   name: "AlpineJS",
        //   imageUrl:
        //     "https://avatars.githubusercontent.com/u/59030169?s=200&v=4",
        //   status: "Beginner",
        // },
        // {
        //   id: 10,
        //   name: "NodeJS",
        //   imageUrl:
        //     "https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png",
        //   status: "Beginner",
        // },
        {
          id: 11,
          name: "Tailwind",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
          status: "Advanced",
        },
        {
          id: 12,
          name: "Bootstrap",
          imageUrl:
            "https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png",
          status: "Intermediate",
        },
      ],
      tools: [
        // {
        //   id: 1,
        //   name: "Git",
        //   imageUrl:
        //     "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
        //   status: "Version Control",
        // },
        {
          id: 2,
          name: "GitHub",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
          status: "Git Hosting",
        },
        // {
        //   id: 3,
        //   name: "NPM",
        //   imageUrl:
        //     "https://cdn.iconscout.com/icon/free/png-256/free-npm-3-1175132.png",
        //   status: "Package Manager",
        // },
        {
          id: 4,
          name: "MySQL",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png",
          status: "Database",
        },
        {
          id: 5,
          name: "Laragon",
          imageUrl: "img/laragon.svg",
          status: "Local Server",
        },
        // {
        //   id: 6,
        //   name: "Xampp",
        //   imageUrl: "img/xampp.svg",
        //   status: "Local Server",
        // },
        //  {
        //   id: 7,
        //   name: "Git Bash",
        //   imageUrl: "img/gitbash.svg",
        //   status: "Terminal",
        // },
      ],
    };
  },
};
</script>

<style scoped>
.fadein-left {
  opacity: 0;
  animation: fadeInLeft 0.5s ease-out forwards;
}
.fadeins-1 {
  animation-delay: 0.4s;
}
.fadeins-2 {
  animation-delay: 0.8s;
}
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
