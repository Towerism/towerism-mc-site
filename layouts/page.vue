<template>
  <div>
    <section class="hero page-bg">
      <div class="hero-head">
        <div class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <div class="navbar-item">
                <router-link to="/">
                  <img src="../assets/images/logo.png" />
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <nuxt />
  </div>
</template>

<style>
body {
  background: linear-gradient(rgba(20, 26, 35, 0.35), rgba(20, 26, 35, 0.35)),
    url('../assets/images/image12.jpg') no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
}

.page-bg {
  background: linear-gradient(rgb(157, 170, 177), rgb(158, 161, 192));
}

.page-container {
  margin-top: 1rem;
}
</style>
