<template>
  <div class="layout">
    <Layout style="min-height: 100vh">
      <Header>
        <header></header>
      </Header>
      <Content class="helper-common-content">
        <slot name="content">
        </slot>
      </Content>
      <Footer class="layout-footer-center">
        <footer></footer>
      </Footer>
    </Layout>
  </div>
</template>

<script>
  import Header from "./layout/HomeHeader";
  import Footer from "./layout/HomeFooter";
  export default {
    components: {Header, Footer}
  }
</script>


<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: auto;
  }
  .layout-footer-center{
    text-align: center;
  }
  .helper-common-content {
    position: relative;
    min-height: 100vh;
    background: #051548;
  }
</style>
