<template>
  <div class="product-details">
    <h1>Product Details Page</h1>
    <p>This is the product details page for product ID: {{ id }}</p>
    <div v-if="product">
      <v-card>
        <v-img :src="product.thumbnail" height="300px"></v-img>
        <v-card-title>{{ product.title }}</v-card-title>
        <v-card-subtitle>\${{ product.price }}</v-card-subtitle>
        <v-card-text>{{ product.description }}</v-card-text>
        <v-card-actions>
          <v-btn color="primary">Buy Now</v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <div v-else>
      <p>Loading product details...</p>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const id = route.params.id;
// https://fakestoreapi.com/products
const { data, error } =  await useFetch(`https://dummyjson.com/products/${id}`);
const product=data.value;
if(error.value){
  throw createError({
    statusCode: 404,
    statusMessage: "Product Not Found",
  });
}
console.log(data.value);
console.log(error.value);
</script>
