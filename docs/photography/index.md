<!--
 * @Author: yuhao 1334890761@qq.com
 * @Date: 2025-01-04 14:11:26
 * @LastEditors: yuhao 1334890761@qq.com
 * @LastEditTime: 2025-01-06 09:46:47
 * @FilePath: /MyBlog/docs/photography/index.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# 摄影作品

<script setup>
import { ref } from 'vue'

// 图片元数据配置
const photoMetadata = {
  'IMG_7943': {
    description: '上海中心大厦',
    location: '上海陆家嘴',
    date: '2024-01-04',
    camera: '富士 X-T30 II',
    lens: '适马 56mm F1.4'
  },
  'IMG_7944': {
    description: '东方明珠夜景',
    location: '上海陆家嘴',
    date: '2024-01-04',
    camera: '富士 X-T30 II',
    lens: '适马 56mm F1.4'
  }
}

// 图片列表
const photos = ref([
  {
    name: 'IMG_7943',
    path: '/images/photography/IMG_7943.JPG',
    ...photoMetadata['IMG_7943']
  },
  {
    name: 'IMG_7944',
    path: '/images/photography/IMG_7944.JPG',
    ...photoMetadata['IMG_7944']
  }
])
</script>

<div class="photo-grid">
  <div v-for="photo in photos" :key="photo.path" class="photo-card">
    <div class="photo-image">
      <img :src="photo.path" :alt="photo.description">
    </div>
    <div class="photo-info">
      <h3>{{ photo.description }}</h3>
      <div class="meta">
        <span class="location">{{ photo.location }}</span>
        <span class="date">{{ photo.date }}</span>
      </div>
      <div class="camera-info">
        <span class="camera">{{ photo.camera }}</span>
        <span class="lens">{{ photo.lens }}</span>
      </div>
    </div>
  </div>
</div>

<style scoped>
.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  padding: 24px 0;
}

.photo-card {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.photo-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.photo-image {
  width: 100%;
  height: 240px;
  overflow: hidden;
}

.photo-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.photo-card:hover .photo-image img {
  transform: scale(1.05);
}

.photo-info {
  padding: 16px;
}

.photo-info h3 {
  margin: 0;
  font-size: 1.2rem;
  color: var(--vp-c-text-1);
}

.meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin-top: 8px;
}

.camera-info {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid var(--vp-c-divider);
}
</style> 