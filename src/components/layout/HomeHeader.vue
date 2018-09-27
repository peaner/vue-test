<template>
    <div>
      <Menu class="header" mode="horizontal" theme="dark" active-name="1">
        <a class="layout-logo">Helper</a>

        <div class="layout-nav">
          <MenuItem name="1">
            {{username}}
          </MenuItem>
          <MenuItem name="1">
            <Button type="primary" shape="circle">{{loginStatus}}</Button>
          </MenuItem>
        </div>
      </Menu>
    </div>
</template>

<script>
  export default {
    name:'Header',
    data () {
      return {
        username: 'peaner',
        loginStatus: '退出'
      }
    },
  }

</script>

<style scoped>
  .header{
    min-height: 100px;
    line-height: 100px;
  }
  .layout-logo{
    width: 119px;
    height: 42px;
    /*background: #2e4570;*/
    border-radius: 3px;
    float: left;
    position: relative;
    top: 7px;
    left: 250px;
    font-size: 35px;
    font-weight: bold;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 1px;
  }
  .ivu-menu-dark {
    background: rgb(8, 14, 27);
  }
  .ivu-btn-primary {
    color: #fff;
    background-color: #080E1B;
    border-color: #2d8cf0;
    border-width: 2px;
  }
</style>
