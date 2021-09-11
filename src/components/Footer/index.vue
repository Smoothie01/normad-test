<template>
    <footer>
        <div class="footer-top">
            <div class="container footer__inner">
                <logo title="LOGOXLOGO"/>
                <navbar :nav-links="navLinks"/>
            </div>
        </div>
        <div class="footer-bottom ">
            <div class="container footer__inner">
                <p>Лучший магазин (с) 2019 Все права защищены. Интернет-магазин</p>
                <p>Политика конфиденциальности</p>
            </div>
        </div>
    </footer>
</template>

<script>
import Logo from "@/components/Header/Logo";
import Navbar from "@/components/Header/Navbar";

export default {
    name: 'Footer',
    components: {Navbar, Logo},
    data: () => ({
        navLinks: [
            {name: 'Главная', to: '/'},
            {name: 'О компании', to: '#'},
            {name: 'Поддержка', to: '#'},
            {name: 'Контакты', to: '#'},
        ]
    })
}
</script>

<style lang="scss" scoped>
@import "src/assets/style/variabless";

footer {
  margin-top: auto;
  .footer-top {
    background-color: $lightGray;
    .footer__inner{
      padding: 30px 0;
    }

  }
  .footer-bottom{
    background-color:$black;
    color: $white;
    .footer__inner{
      padding: 10px 0;
    }
  }
  .footer__inner{
    display: flex;
    justify-content: space-between;
    gap: 30px;
  }
}
</style>
