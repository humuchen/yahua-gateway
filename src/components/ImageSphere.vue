<template>
  <div ref="container" class="three-container"></div>
</template>

<script setup>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';
import { onMounted, ref, watch, defineEmits } from 'vue';
import img1 from '@/assets/images/img1.jpg';
import img2 from '@/assets/images/img2.jpg';
import img3 from '@/assets/images/img3.jpg';
import img4 from '@/assets/images/img4.jpg';
import img5 from '@/assets/images/img5.jpg';
import img6 from '@/assets/images/img6.jpg';
import img7 from '@/assets/images/img7.jpg';
import img8 from '@/assets/images/img8.jpg';
import img9 from '@/assets/images/img9.jpg';
import img10 from '@/assets/images/img10.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const container = ref(null);
const emit = defineEmits(['image-click']);
const sphereGroup = new THREE.Group();

onMounted(() => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    90,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.value.appendChild(renderer.domElement);
  camera.position.z = 300;

  const light = new THREE.AmbientLight(0xffffff, 1.2);
  scene.add(light);

  // 多张图片纹理
  const textureLoader = new THREE.TextureLoader();
  const imageCount = 50;
  const radius = 100;

  for (let i = 0; i < imageCount; i++) {
    const texture = textureLoader.load(images[i % images.length]);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const geometry = new THREE.PlaneGeometry(20, 20);
    const mesh = new THREE.Mesh(geometry, material);

    const phi = Math.acos(-1 + (2 * i) / imageCount);
    const theta = Math.sqrt(imageCount * Math.PI) * phi;
    mesh.position.setFromSphericalCoords(radius, phi, theta);

    mesh.lookAt(0, 0, 0);
    sphereGroup.add(mesh);
  }

  scene.add(sphereGroup);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableZoom = false;

  // Raycaster 点击检测
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  function onClick(event) {
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(sphereGroup.children);
    if (intersects.length > 0) {
      const clicked = intersects[0].object;
      const img = clicked.material.map.image;
      emit('image-click', img.src);
    }
  }
  window.addEventListener('click', onClick);

  // 滚动放大动画
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const targetScale = Math.min(2.5, 1 + scrollY / 800);
    gsap.to(sphereGroup.scale, {
      x: targetScale,
      y: targetScale,
      z: targetScale,
      duration: 0.5
    });
  });

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();
});
</script>

<style scoped>
.three-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
