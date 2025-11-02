import usePageScrolled from '@/hooks/usePageScrolled';
import { computed, ref, type Ref } from 'vue';
import { useRoute } from 'vue-router';

export function useVisible() {
  const isVisible = ref(false);
  let timer: NodeJS.Timeout;

  function handleVisibleChange(visible = true) {
    if (visible) {
      clearTimeout(timer);
      isVisible.value = true;
    } else {
      timer = setTimeout(() => {
        isVisible.value = false;
      }, 100);
    }
  }

  return [isVisible, handleVisibleChange] as const;
}

export function useDarkTheme(isVisible: Ref<boolean>) {
  const isScrolled = usePageScrolled();
  const route = useRoute();

  return computed(() => {
    return isVisible.value || (['/'].includes(route.path) && isScrolled.value);
  });
}
