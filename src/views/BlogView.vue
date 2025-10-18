<template>
  <div class="bg-[#e0f2fe] min-h-screen pt-10 px-5 md:px-12">
    <div class="flex flex-col-reverse md:flex-row gap-8">
      <!-- Blog List -->
      <div class="w-full md:w-2/3">
        <div class="flex flex-col gap-6 fade-zoom-up">
          <article v-for="article in articles" :key="article.id">
            <router-link
              :to="`/read/${article.slug}/${article.id}`"
              class="flex flex-col md:flex-row w-full bg-white border border-blue-100 rounded-xl text-slate-800 shadow hover:shadow-lg transition p-5 gap-4"
            >
              <div class="flex-1">
                <div class="text-xs text-blue-600 mb-1 flex items-center italic">
                  <div class="h-[1px] w-20 bg-blue-300 mr-2"></div>
                  {{ article.date }}
                </div>
                <h2 class="text-lg font-bold text-blue-900 mb-2">{{ article.title }}</h2>
                <p class="text-sm paraf hidden md:block">{{ article.desc }}</p>
              </div>
              <div class="flex-shrink-0 w-full md:w-28 h-40 md:h-28 overflow-hidden rounded-lg">
                <img :src="article.image" class="w-full h-full object-cover rounded-md" alt="Blog Image" />
              </div>
            </router-link>
          </article>
        </div>
      </div>

      <!-- Sidebar -->
      <div class="w-full md:w-1/3 md:sticky md:top-24 bg-white border border-blue-100 rounded-xl shadow p-6">
        <div class="flex flex-col gap-4 text-slate-800">
          <h3 class="text-xl font-bold text-blue-900">Blog Sidebar</h3>
          <p class="text-sm bg-clip-text bg-gradient-to-r from-blue-900 to-blue-500 text-transparent">
            Let's share experiences, stories, and knowledge together.
          </p>
          <div class="h-[1px] mt-4 mb-4 w-20 bg-blue-300"></div>
          <div>
            <div class="text-base font-semibold text-blue-800">Topics</div>
            <div class="mt-3 flex flex-wrap gap-2">
              <span class="py-2 px-4 rounded-2xl bg-blue-100 text-blue-800 text-xs cursor-pointer hover:bg-blue-200">NodeJS</span>
              <span class="py-2 px-4 rounded-2xl bg-blue-100 text-blue-800 text-xs cursor-pointer hover:bg-blue-200">Technology</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ArticleList />
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList.vue';
import axios from "axios";

export default {
  components: { ArticleList },
  data() {
    return {
      articles: []
    }
  },
  mounted() {
    this.getArticles();
  },
  methods: {
    async getArticles() {
      try {
        const response = await axios.get('https://64a38c9cc3b509573b564183.mockapi.io/api/blog/all');
        this.articles = response.data;
      } catch (error) {
        console.error("Failed to fetch articles", error);
      }
    }
  }
}
</script>

<style scoped>
.paraf {
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
}
@media (min-width: 768px) {
  .paraf {
    display: -webkit-box;
  }
}
@keyframes fadeZoomUp {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.fade-zoom-up {
  animation: fadeZoomUp 1s ease-in-out;
}
</style>
