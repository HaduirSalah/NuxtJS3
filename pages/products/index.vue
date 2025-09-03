<template>
  <div class="products">
    <h1>Products Page</h1>
    <p>This is the products page.</p>
    <v-container v-if="data">
      <v-row>
        <v-col
          v-for="product in data.products"
          :key="product.id"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card
            :to="{ name: 'products-id', params: { id: product.id } }"
            class="ma-4"
            hover
          >
            <v-img :src="product.thumbnail" height="200px"></v-img>
            <v-card-title>{{ product.title }}</v-card-title>
            <v-card-subtitle>\${{ product.price }}</v-card-subtitle>
            <v-card-text>{{ product.description }}</v-card-text>
            <v-card-actions>
              <v-btn color="primary">View Details</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
// https://fakestoreapi.com/products
// const response = await fetch("https://dummyjson.com/products").then((res) =>
//   res.json()
// );
// Destructuring for data and error
const { data, error } = useFetch("https://dummyjson.com/products");
console.log(data.value);
console.log(error.value);
</script>
