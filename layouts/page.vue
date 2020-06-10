<template>
  <div>
    <section class="hero has-background-grey-darker">
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

.page-container {
  margin-top: 1rem;
}
</style>
