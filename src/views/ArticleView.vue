<template>
  <div class="bg-[#e0f2fe] min-h-screen pt-10 pb-20 px-4 md:px-12">
    <div class="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6 md:p-10">
      <h1 class="text-2xl md:text-4xl font-bold text-blue-900 leading-snug">{{ title }}</h1>
      <div class="mt-2 text-sm text-blue-700 italic">Published at <span>{{ date }}</span></div>
      <div class="h-[2px] w-20 my-6 bg-blue-300"></div>

      <div class="relative w-full mb-6 rounded-lg overflow-hidden" style="padding-top: 56.25%;">
        <img :src="image" alt="Thumbnail" class="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow" />
      </div>

      <div class="text-slate-800 leading-relaxed prose prose-blue max-w-none" v-html="content"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { useRoute } from 'vue-router';

export default {
  data() {
    return {
      route: useRoute(),
      title: '',
      image: '',
      date: '',
      content: '',
    }
  },
  mounted() {
    this.getDetails();
  },
  methods: {
    async getDetails() {
      const id = this.route.params.id;
      try {
        const response = await axios.get(`https://64a38c9cc3b509573b564183.mockapi.io/api/blog/all/${id}`);
        const data = response.data;
        this.title = data.title;
        this.image = data.image;
        this.date = data.date;
        this.content = data.content;
      } catch (error) {
        console.error('Error loading article:', error);
      }
    }
  }
}
</script>

<style scoped>
/* Tambahan untuk styling markdown atau konten html */
.prose h1, .prose h2, .prose h3 {
  color: #1e40af;
}
.prose a {
  color: #0284c7;
  text-decoration: underline;
}
</style>
