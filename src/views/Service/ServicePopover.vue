<script setup lang="ts">
const props = defineProps<{
  storeName: string;
  pictureUrl: string;
  address: string;
  telephone: string;
  infoWindow: any;
  fax: string;
}>();
</script>

<template>
  <div class="container">
    <div class="icon-close" @click="infoWindow.close" />

    <div class="content-wrapper">
      <img alt="" :src="props.pictureUrl" class="picture" />
      <div>
        <div class="name">{{ storeName }}</div>
        <div class="info">{{ address }}</div>
        <div class="info">
          <p v-if="telephone">
            服务热线：
            <a :href="`tel:${telephone}`">
              {{ telephone }}
            </a>
          </p>
          <p v-if="fax">
            传真：
            <a>
              {{ fax }}
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 75rem;
  padding: 2rem;
  background-color: #fff;
  border-radius: 0.6rem;
  box-shadow: 0 0.2rem 0.7rem 0 rgba(0, 0, 0, 0.32);

  &::after {
    width: 1.5rem;
    height: 1.5rem;
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    border-radius: 0.2rem;
    background-color: #fff;
    box-shadow: 0.2rem 0.2rem 0.5rem -0.4rem #000;
    transform: translate(-50%, 0.6rem) rotate(55deg) skew(20deg);
  }
}

.icon-close {
  position: absolute;
  top: 19px;
  right: 13px;
  z-index: 1;
  height: 30px;
  width: 30px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAQAAACQ9RH5AAAAwElEQVR42u2Xuw2EMBBEJ6AFu07KoByntAFuhsgXXIB0EodZ70enm5d7nrQSyw5ACCGE/BYzCpLoZULBLBcXNFSBOqOiocjFCVWglr0aDlHRPg9S0z4LU9X2B6pr+0JNtPfBZtrv4abaa4G59txJq7f2LVqx+GvhP2Rq/1mbMcVoD2weX/HnkCds9mO/Wpk7GnbvTW2uvvstGql7DgEDde/po6wOOvaCztuggz6swkhLWxotbfKamsdqKiGEEBLBC56YmYHcBMx1AAAAAElFTkSuQmCC)
    50% no-repeat;
  background-size: contain;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.6;
  }
}

.content-wrapper {
  display: flex;

  .picture {
    width: 38.6rem;
    height: 29rem;
    object-fit: cover;
    margin-right: 2rem;
  }

  .name {
    color: #303030;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 3rem;
  }

  .info {
    &,
    :is(span) {
      color: #787878;
      font-size: 1.2rem;
      user-select: text;
      cursor: text;
    }

    :is(span) {
      margin-right: 0.2rem;
    }
  }
}
</style>
