<template>
    <div class="profile">
        <img src="@/assets/img/svg/smile.svg" alt="smile">
        <p>Мой профиль</p>
        <img src="@/assets/img/svg/arrow-down.svg" alt="arrow-down">
    </div>
</template>

<script>
export default {

}
</script>

<style  lang="scss" scoped>
    @import "src/assets/style/variabless";
    .profile{
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 14px;
      font-weight: 500;
      padding: 5px;
      border-radius: 1rem;
      background-color: $blue;
    }
</style>
