<template>
  <div
    class="mt-6 px-5 py-10 md:px-12 text-left text-slate-800 mx-3 bg-[#e0f2fe] rounded-3xl shadow"
  >
    <article data-page="projects">
     <header class="text-center mb-8">
  <h2 class="text-2xl md:text-4xl font-bold text-blue-900">
    Project Showcase
  </h2>
  <p class="text-sm md:text-xl text-blue-800 mt-2">
    Take a look at what I've built
  </p>
</header>


      <section>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div
            v-for="item in items"
            :key="item.id"
            class="bg-white rounded-xl border border-blue-100 shadow-md hover:shadow-lg transition p-5 flex flex-col justify-between"
          >
            <img
              :src="'img/portfolio-' + item.imageUrl"
              :alt="item.name"
              class="rounded-lg mb-4 w-full h-full "
            />

            <div class="flex flex-col gap-2">
              <h3 class="text-lg font-bold text-blue-900">{{ item.name }}</h3>
              <p class="text-sm text-gray-700">{{ item.status }}</p>
              <p class="text-sm font-medium text-blue-800 mt-2">
                {{ item.tech }}
              </p>
            </div>

            <div class="flex justify-end gap-2 mt-4">
              <a
                v-if="item.github !== 'null'"
                :href="item.github"
                target="_blank"
                class="text-blue-600 hover:text-blue-800 transition"
                title="View GitHub repository"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 
                    5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 
                    13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 
                    5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 
                    3.78c0 5.42 3.3 6.61 6.44 
                    7A3.37 3.37 0 0 0 9 18.13V22"
                  ></path>
                </svg>
              </a>
              <a
                v-if="item.demo !== 'null'"
                :href="item.demo"
                target="_blank"
                class="text-green-600 hover:text-green-800 transition"
                title="View live demo"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 
                          2 0 0 1 2-2h6"
                  ></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
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
      items: [
        {
          id: 1,
          name: "Personal Website",
          imageUrl: "home.png",
          status:
            "Situs web pribadi saya ini saya buat untuk menampilkan profil pribadi, mengekspresikan ide dan mencoba teknologi baru.",
          tech: "Vue.JS, Tailwind",
          github: "null",
          demo: "null",
        },
        {
          id: 2,
          name: "POS (Point Of Sale) Kasir",
          imageUrl: "poskasir.png",
          status:
            "POS Kasir adalah sistem komputer untuk toko atau UMKM agar membantu kasir dalam mencatat penjualan lebih efisien.",
          tech: "Laravel, Livewire, Bootsrap, Tailwind, Mysql",
          github: "null",
          demo: "null",
        },
        {
          id: 3,
          name: "Web Cash Flow",
          imageUrl: "cashflow.png",
          status:
            "Aplikasi ini saya buat untuk mengelola keuangan sebagai bahan pembelajaran dan pengembangan pribadi.",
          tech: "Laravel, Filament, Tailwind, Mysql",
          github: "null",
          demo: "null",
        },
        {
          id: 4,
          name: "Web Inventory",
          imageUrl: "inventory.png",
          status:
            "Aplikasi ini ditujukan untuk membantu proses manajemen inventaris secara efisien, mencakup pencatatan produk masuk dan keluar, serta pengelolaan data master dan user.",
          tech: "Laravel, AdminLTE, Bootstrap, Mysql",
          github: "null",
          demo: "null",
        },
        {
          id: 5,
          name: "Sistem Informasi Manajemen Catering (Multirole)",
          imageUrl: "catering.png",
          status:
            "Proyek ini adalah sistem berbasis web yang saya kembangkan sebagai tugas akhir skripsi. Tujuannya untuk membantu manajemen operasional bisnis catering.",
          tech: "PHP Native, Javascript, Bootstrap, Mysql",
          github: "null",
          demo: "null",
        },
        {
          id: 7,
          name: "Sistem Konfirmasi PRO (Order Number) Perusahaan",
          imageUrl: "konfirmasi.jpg",
          status:
            "Proyek ini adalah sistem berbasis web yang dibuat untuk membantu proses bisnis perusahaan agar lebih efisien.",
          tech: "Laravel, Tailwind, Python (Flask), Mysql, SAP (Function)",
          github: "https://github.com/abdulrouff10/konfirmasi_pro",
          demo: "https://confirmation-pro.kmifilebox.com/",
        },
        // {
        //   id: 6,
        //   name: "Sistem Informasi Manajemen Pengguna",
        //   imageUrl: "userlist",
        //   status:
        //     "Aplikasi ini dibuat sebagai bagian dari ujian praktik Fullstack Developer. Tujuannya adalah untuk mengelola data pengguna melalui antarmuka yang responsif dan sederhana.",
        //   tech: "Laravel, React.Js, Tailwind, Mysql",
        //   github: "null",
        //   demo: "null",
        // },
      ],
    };
  },
};
</script>

<style scoped>
/* Animasi sederhana */
div:hover svg {
  stroke-width: 2.5;
}
</style>
