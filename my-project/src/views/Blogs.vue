<template>
  <div>
    <h1>Blogs</h1>
    <v-row>
      <v-col cols="4">
      <form>
        <v-text-field
          v-model="blog.title"
          label="Title"
        ></v-text-field>
        <v-textarea
          v-model="blog.body"
          label="Body"
        ></v-textarea>

        <v-btn class="mr-4" @click="onSubmit">Create</v-btn>
      </form>
      </v-col>
      <v-col cols="8">
        <table>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
          <tr v-for="blog in blogs" :key="blog.id">  <!-- 変更 ③-->
            <td>{{ blog.title }}</td> <!-- 変更 ④-->
            <td>{{ blog.body }}</td> <!-- 変更 ④-->
            <td>show</td>
            <td>Edit</td>
            <td>Destroy</td>
          </tr>
        </table>
      </v-col>
    </v-row>
  </div>
</template>

<script><img width="940" alt="スクリーンショット 2020-04-17 17.29.33.png" src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/416999/7ce646f0-1161-06fe-4200-db60b9b4991f.png">

import { mapState } from 'vuex' //変更 ①

export default {
  computed: { //変更 ②
    ...mapState(['blogs'])
  },
  data() {
    return {
      blog: {}
    }
  },
  methods: {
    onSubmit() {
    }
  }
}
</script>