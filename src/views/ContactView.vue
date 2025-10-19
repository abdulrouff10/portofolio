<template>
  <div class="bg-[#e0f2fe] min-h-screen pt-8 px-4 md:px-12">
    <div class="max-w-3xl mx-auto bg-white border border-blue-100 rounded-xl shadow p-5">
      <h1 class="text-2xl font-bold text-blue-900 mb-4 text-center">Contact Us</h1>
      <p class="text-slate-700 mb-6 text-center text-sm">
        Feel free to reach out via email or WhatsApp, or simply fill out the form below. We’d love to hear from you!
      </p>

      <div class="flex flex-col md:flex-row justify-center gap-4 mb-6 text-center md:text-left text-sm">
        <div class="flex items-center justify-center md:justify-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <a href="mailto:abdulrouf010203@gmail.com" class="text-blue-600 underline hover:underline break-all">abdulrouf010203@gmail.com</a>
        </div>
        <div class="flex items-center justify-center md:justify-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
            class="h-5 w-5 text-green-600 fill-current">
            <path
              d="M380.9 97.1C339.4 55.6 283.8 32 223.5 32c-122.9 0-222 99.1-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.9 0 222-99.1 222-222 0-60.3-23.6-116.3-65.1-157.7zm-94.6 304.8c-1.6 0-3.3.6-4.6 1.9l-2.9 2.9c-23.2 23.2-56 26.6-92.4 10.2-28.7-12.7-50.6-34.5-63.1-63-16.1-36.4-12.7-69.1 10.2-92.4l2.9-2.9c1.3-1.3 1.9-2.9 1.9-4.6v-2c-.1-1.3-.4-2.6-.9-3.7l-7.7-18.7c-1.3-3.2-4.1-5.4-7.4-5.9l-26.6-4.7c-3.7-.6-7.4.3-10.4 2.4-17.7 12.1-26.2 31.7-26.2 52.8 0 26.1 10.6 51.5 29.5 70.4l5.3 5.3c23.2 23.2 56 26.6 92.4 10.2 28.7-12.7 50.6-34.5 63.1-63 16.1-36.4 12.7-69.1-10.2-92.4l-2.9-2.9c-1.3-1.3-1.9-2.9-1.9-4.6v-2c.1-1.3.4-2.6.9-3.7l7.7-18.7c1.3-3.2 4.1-5.4 7.4-5.9l26.6-4.7c3.7-.6 7.4.3 10.4 2.4 17.7 12.1 26.2 31.7 26.2 52.8 0 26.1-10.6 51.5-29.5 70.4l-5.3 5.3c-23.2 23.2-56 26.6-92.4 10.2z" />
          </svg>
          <a href="https://wa.me/6287739855939" target="_blank" class="text-green-600 underline hover:underline">087739855939</a>
        </div>
   

      </div>
      <form @submit.prevent="submitForm">
        <div class="mb-5">
          <label for="name" class="block text-slate-800 text-sm font-medium mb-2">Nama Lengkap</label>
          <input
            type="text"
            id="name"
            v-model="form.name"
            class="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div class="mb-5">
          <label for="email" class="block text-slate-800 text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            class="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div class="mb-5">
          <label for="subject" class="block text-slate-800 text-sm font-medium mb-2">Subjek</label>
          <input
            type="text"
            id="subject"
            v-model="form.subject"
            class="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-500"
            required
          />
        </div>

        <div class="mb-6">
          <label for="message" class="block text-slate-800 text-sm font-medium mb-2">Pesan</label>
          <textarea
            id="message"
            v-model="form.message"
            rows="6"
            class="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        <div class="text-center">
          <button
            type="submit"
            class="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Kirim
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// ... (script Anda tetap sama, tidak ada perubahan di sini)
export default {
  name: 'ContactView',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      console.log('Formulir Kontak Dikirim:', this.form);
      alert('Pesan Anda telah terkirim! (Lihat konsol untuk data)');
      this.resetForm();
    },
    resetForm() {
      this.form.name = '';
      this.form.email = '';
      this.form.subject = '';
      this.form.message = '';
    }
  }
};
</script>

<style scoped>
/* Anda bisa menambahkan gaya khusus di sini jika diperlukan */
</style>