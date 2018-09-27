<template>
    <Layout>
       <div slot="content">
         <div class="content-wrap">
           <TitleLine @titleChange="titleChange"></TitleLine>
           <ShowStudentRoom ref="showStudentRoom"></ShowStudentRoom>
         </div>
       </div>
    </Layout>
</template>
<script>
    import Layout from '@/components/Layout'
    import TitleLine from "../components/common/TitleLine";
    import ShowStudentRoom from "../components/room/ShowStudentRoom";
    export default {
      name:'Index',
      components: {
        ShowStudentRoom,
        TitleLine,
        Layout
      },
      methods: {
        titleChange (status) {
          if (status === true) {
            this.$refs.showStudentRoom.getShowStudentRoom();
          }
        }
      }
    }
</script>


<style scoped>
  .content-wrap{
    width: 1200px;
    /*height: 70vh;*/
    margin: 0 auto;
    background-color: #051548;
    /*#efecff;*/
  }
</style>
