<template>
  <div class="checkout-page">
    

    <div class="container">
      <!-- Étape 1: Livraison -->
      <div v-if="currentStep === 1" class="step-content">
        <div class="grid-layout">
          <div class="form-section">
            <h1 class="section-title">Informations de livraison</h1>
            <form @submit.prevent="nextStep" class="form">
              <div class="form-group">
                <label class="form-label">E-mail*</label>
                <input 
                  v-model="deliveryInfo.email" 
                  type="email" 
                  class="form-input" 
                  required
                />
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Prénom*</label>
                  <input 
                    v-model="deliveryInfo.firstName" 
                    type="text" 
                    class="form-input" 
                    required
                  />
                </div>
                <div class="form-group">
                  <label class="form-label">Nom*</label>
                  <input 
                    v-model="deliveryInfo.lastName" 
                    type="text" 
                    class="form-input" 
                    required
                  />
                </div>
              </div>
              
              <div class="form-group">
                <label class="form-label">Adresse*</label>
                <input 
                  v-model="deliveryInfo.address" 
                  type="text" 
                  class="form-input" 
                  required
                />
              </div>
              
              <div class="form-row-3">
                <div class="form-group">
                  <label class="form-label">Code postal*</label>
                  <input 
                    v-model="deliveryInfo.postalCode" 
                    type="text" 
                    class="form-input" 
                    required
                  />
                </div>
                <div class="form-group">
                  <label class="form-label">Ville*</label>
                  <input 
                    v-model="deliveryInfo.city" 
                    type="text" 
                    class="form-input" 
                    required
                  />
                </div>
                <div class="form-group">
                  <label class="form-label">Pays</label>
                  <input 
                    v-model="deliveryInfo.country" 
                    type="text" 
                    class="form-input readonly" 
                    readonly
                  />
                </div>
              </div>
              
              <div class="form-group">
                <label class="form-label">Téléphone*</label>
                <input 
                  v-model="deliveryInfo.phone" 
                  type="tel" 
                  class="form-input" 
                  required
                />
              </div>
              
              <button type="submit" class="btn-main">
                Enregistrer et continuer
              </button>
            </form>
          </div>
          
          <div class="summary-section">
            <h3 class="summary-title">Résumé de commande</h3>
            <div class="summary-details">
              <div class="summary-row">
                <span>Sous-total</span>
                <span>{{ orderSummary.subtotal }} €</span>
              </div>
              <div class="summary-row">
                <span>Livraison</span>
                <span>{{ orderSummary.shipping }} €</span>
              </div>
              <div class="summary-row total">
                <span>Total</span>
                <span>{{ orderSummary.total }} €</span>
              </div>
            </div>
            
            <div class="product-info">
              <div class="product-image">
                <i class="fa-solid fa-shoe-prints"></i>
              </div>
              <div class="product-details">
                <div class="product-name">Nike Air Max Plus</div>
                <div class="product-desc">Chaussure pour homme</div>
                <div class="product-specs">Quantité : 1 | Taille : 40.5</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Étape 2: Paiement -->
      <div v-if="currentStep === 2" class="step-content">
        <div class="payment-section">
          <h1 class="section-title">Paiement</h1>
          
          <div class="payment-methods">
            <h3 class="subsection-title">Sélectionner un mode de paiement</h3>
            <div class="payment-options">
              <label 
                class="payment-option" 
                :class="{ selected: paymentMethod === 'card' }"
              >
                <input 
                  v-model="paymentMethod" 
                  type="radio" 
                  value="card" 
                  class="payment-radio"
                />
                <i class="fa-solid fa-credit-card payment-icon"></i>
                <span>Carte bancaire</span>
              </label>
              
              <label 
                class="payment-option" 
                :class="{ selected: paymentMethod === 'paypal' }"
              >
                <input 
                  v-model="paymentMethod" 
                  type="radio" 
                  value="paypal" 
                  class="payment-radio"
                />
                <i class="fa-brands fa-paypal payment-icon paypal"></i>
                <span>PayPal</span>
              </label>
            </div>
          </div>
          
          <div v-if="paymentMethod === 'card'" class="card-form">
            <h4 class="card-form-title">Ajouter une carte</h4>
            <div class="card-inputs">
              <input 
                v-model="cardInfo.number" 
                type="text" 
                placeholder="Numéro de carte" 
                class="form-input"
              />
              <div class="card-row">
                <input 
                  v-model="cardInfo.expiry" 
                  type="text" 
                  placeholder="MM/AA" 
                  class="form-input"
                />
                <input 
                  v-model="cardInfo.cvv" 
                  type="text" 
                  placeholder="CVV" 
                  class="form-input"
                />
              </div>
            </div>
          </div>
          
          <button @click="processPayment" class="btn-main">
            Payer
          </button>
        </div>
      </div>

      <!-- Étape 3: Confirmation -->
      <div v-if="currentStep === 3" class="step-content">
        <div class="confirmation-section">
          <div class="success-icon">
            <i class="fa-solid fa-check"></i>
          </div>
          <h1 class="success-title">Merci pour votre paiement</h1>
          <p class="success-message">Un reçu de confirmation a été envoyé par mail.</p>
          <p class="redirect-message">Vous allez être redirigé sur le site.</p>
          <button @click="resetProcess" class="link-btn">
            Retour à l'accueil
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

// État de l'étape courante
const currentStep = ref(1)

// Informations de livraison
const deliveryInfo = reactive({
  email: '',
  firstName: '',
  lastName: '',
  address: '',
  postalCode: '',
  city: '',
  country: 'France',
  phone: ''
})

// Résumé de commande
const orderSummary = reactive({
  subtotal: '199,99',
  shipping: '0,00',
  total: '199,99'
})

// Méthode de paiement
const paymentMethod = ref('card')

// Informations de carte
const cardInfo = reactive({
  number: '',
  expiry: '',
  cvv: ''
})

// Fonctions
const nextStep = () => {
  if (currentStep.value < 3) {
    currentStep.value++
  }
}

const processPayment = () => {
  // Ici vous pouvez ajouter la logique de traitement du paiement
  nextStep()
}

const resetProcess = () => {
  currentStep.value = 1
  // Réinitialiser les données si nécessaire
}
</script>

<style scoped>
.checkout-page {
  background: #fff;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.header {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  padding: 1rem 1.5rem;
  margin-bottom: 2rem;
  border-radius: 0 0 1rem 1rem;
  background: linear-gradient(to right, #3b82f6, #10b981);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-placeholder {
  width: 3rem;
  height: 3rem;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3b82f6;
  font-size: 1.25rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.header-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-shadow: 0 1px 2px rgba(0,0,0,0.1);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.icon-btn {
  padding: 0.5rem;
  color: white;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.2s;
  font-size: 1.125rem;
}

.icon-btn:hover {
  color: #fbbf24;
}

.profile-btn {
  width: 2.5rem;
  height: 2.5rem;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3b82f6;
  font-size: 1.125rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.step-content {
  margin-bottom: 2rem;
}

.grid-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}

@media (max-width: 1024px) {
  .grid-layout {
    grid-template-columns: 1fr;
  }
}

.form-section, .summary-section, .payment-section, .confirmation-section {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.payment-section, .confirmation-section {
  max-width: 32rem;
  margin: 0 auto;
}

.section-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #1a1a2e;
  margin-bottom: 1.5rem;
}

.subsection-title {
  font-weight: 500;
  margin-bottom: 1rem;
  color: #1a1a2e;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-label {
  font-size: 0.875rem;
  color: #1a1a2e;
  margin-bottom: 0.25rem;
}

.form-input {
  width: 100%;
  border: 1px solid #eee;
  border-radius: 0.5rem;
  padding: 0.75rem;
  font-size: 1rem;
  transition: all 0.2s;
  background: white;
}

.form-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-input.readonly {
  background: #f3f4f6;
  color: #6b7280;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-row-3 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
}

@media (max-width: 640px) {
  .form-row, .form-row-3 {
    grid-template-columns: 1fr;
  }
}

.btn-main {
  background: #ff6b6b;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  font-size: 1rem;
}

.btn-main:hover {
  background: #ee5a6f;
}

.summary-section {
  height: fit-content;
}

.summary-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a1a2e;
  margin-bottom: 1rem;
}

.summary-details {
  margin-bottom: 1.5rem;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  color: #1a1a2e;
}

.summary-row.total {
  font-weight: 600;
  border-top: 1px solid #eee;
  padding-top: 0.5rem;
  margin-top: 0.5rem;
}

.product-info {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.product-image {
  width: 4rem;
  height: 4rem;
  background: #e5e7eb;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  font-size: 1.5rem;
}

.product-details {
  flex: 1;
}

.product-name {
  font-weight: 500;
  color: #1a1a2e;
}

.product-desc, .product-specs {
  font-size: 0.875rem;
  color: #6b7280;
}

.payment-options {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.payment-option {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border: 2px solid #eee;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  background: white;
}

.payment-option.selected {
  border-color: #ff6b6b;
  background: white;
  color: #ff6b6b;
}

.payment-radio {
  width: 1rem;
  height: 1rem;
}

.payment-icon {
  font-size: 1.25rem;
  color: #3b82f6;
}

.payment-icon.paypal {
  color: #1565c0;
}

.card-form {
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  background: white;
}

.card-form-title {
  font-weight: 500;
  margin-bottom: 1rem;
  color: #1a1a2e;
}

.card-inputs {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.card-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.confirmation-section {
  text-align: center;
}

.success-icon {
  width: 4rem;
  height: 4rem;
  background: #10b981;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 1.875rem;
}

.success-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #10b981;
  margin-bottom: 1.5rem;
}

.success-message, .redirect-message {
  color: #1a1a2e;
  margin-bottom: 1rem;
}

.redirect-message {
  margin-bottom: 2rem;
}

.link-btn {
  color: #3b82f6;
  text-decoration: underline;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.link-btn:hover {
  color: #1d4ed8;
}
</style>