<template>
  <div class="about-page">
    <section class="section hero" style="background-image: url('/banner.png')">
      <div class="container">
        <h1 class="h1 hero-title">À Propos de Sneaker Store</h1>
        <p class="hero-text">
          Votre destination premium pour les sneakers de qualité
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="about-content">
          <h2 class="h2 section-title">Notre Histoire</h2>
          <p class="about-text">
            Depuis notre création, Sneaker Store s'est imposé comme la référence 
            en matière de sneakers de qualité. Nous proposons une sélection 
            soigneusement choisie des meilleures marques du marché.
          </p>
          
          <h3 class="h3">Notre Mission</h3>
          <p class="about-text">
            Offrir à nos clients les sneakers les plus tendance et confortables, 
            avec un service client exceptionnel et une livraison rapide.
          </p>

          <h3 class="h3">Nos Valeurs</h3>
          <ul class="values-list">
            <li>Qualité premium</li>
            <li>Service client exceptionnel</li>
            <li>Innovation constante</li>
            <li>Respect de l'environnement</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Logique de la page About
</script>

<style scoped>
.about-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.about-text {
  font-size: var(--fs-6);
  line-height: 1.6;
  margin-bottom: 2rem;
  color: var(--onyx);
}

.values-list {
  text-align: left;
  max-width: 400px;
  margin: 0 auto;
}

.values-list li {
  padding: 0.5rem 0;
  font-size: var(--fs-6);
}
</style>