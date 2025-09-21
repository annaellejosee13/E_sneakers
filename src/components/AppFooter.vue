<template>
  <footer id="footer" class="footer">
    <div class="footer-top section">
      <div class="container">
        <div class="footer-brand"></div>

        <div class="footer-link-box">
          <ul class="footer-list">
            <li>
              <p class="footer-list-title">Contactez-nous</p>
            </li>
            <li>
              <address class="footer-link">
                <ion-icon name="location"></ion-icon>
                <span class="footer-link-text">94200 Paris, France</span>
              </address>
            </li>
            <li>
              <a href="tel:+557343673257" class="footer-link">
                <ion-icon name="call"></ion-icon>
                <span class="footer-link-text">+33 7343673257</span>
              </a>
            </li>
            <li>
              <a href="mailto:sneakerstore@gmail.com" class="footer-link">
                <ion-icon name="mail"></ion-icon>
                <span class="footer-link-text">sneakerstore@gmail.com</span>
              </a>
            </li>
          </ul>

          <ul class="footer-list">
            <li>
              <p class="footer-list-title">Mon compte</p>
            </li>
            <li>
              <router-link to="/compte" class="footer-link">
                <ion-icon name="chevron-forward-outline"></ion-icon>
                <span class="footer-link-text">Mon compte</span>
              </router-link>
            </li>
            <li>
              <router-link to="/panier" class="footer-link">
                <ion-icon name="chevron-forward-outline"></ion-icon>
                <span class="footer-link-text">Voir le panier</span>
              </router-link>
            </li>
            <li>
              <router-link to="/favoris" class="footer-link">
                <ion-icon name="chevron-forward-outline"></ion-icon>
                <span class="footer-link-text">Liste de favoris</span>
              </router-link>
            </li>
            <li>
              <a href="#" class="footer-link">
                <ion-icon name="chevron-forward-outline"></ion-icon>
                <span class="footer-link-text">Comparer</span>
              </a>
            </li>
            <li>
              <a href="#" class="footer-link">
                <ion-icon name="chevron-forward-outline"></ion-icon>
                <span class="footer-link-text">Nouveaux produits</span>
              </a>
            </li>
          </ul>

          <div class="footer-list">
            <p class="footer-list-title">Horaires d'ouverture</p>
            <table class="footer-table">
              <tbody>
                <tr class="table-row">
                  <th class="table-head" scope="row">Lun - Mar:</th>
                  <td class="table-data">8:00 - 18:00</td>
                </tr>
                <tr class="table-row">
                  <th class="table-head" scope="row">Mer:</th>
                  <td class="table-data">8:00 - 16:00</td>
                </tr>
                <tr class="table-row">
                  <th class="table-head" scope="row">Ven:</th>
                  <td class="table-data">7:00 - 17:00</td>
                </tr>
                <tr class="table-row">
                  <th class="table-head" scope="row">Sam:</th>
                  <td class="table-data">8:00 - 17:00</td>
                </tr>
                <tr class="table-row">
                  <th class="table-head" scope="row">Dim:</th>
                  <td class="table-data">Fermer</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="footer-list">
            <p class="footer-list-title">Newsletter</p>
            <p class="newsletter-text">
              Avec Sneakers – Marchez avec style, chaque pas devient une déclaration de mode
            </p>
            <form @submit.prevent="subscribeNewsletter" class="newsletter-form">
              <input 
                v-model="email" 
                type="email" 
                required 
                placeholder="Adresse email" 
                class="newsletter-input"
              >
              <button type="submit" class="btn btn-primary">S'inscrire</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <p class="copyright">
          &copy; 2025 <router-link to="/" class="copyright-link">Sneaker Store</router-link>. Tous droits réservés
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')

const subscribeNewsletter = () => {
  // Logique d'inscription à la newsletter
  console.log('Email inscrit:', email.value)
  email.value = ''
}
</script>