// fetchProducts.js
import fs from "fs";
import fetch from "node-fetch";

const API_KEY = "KICKS-79F8-73E6-BB51-A94CA6B45C85"; // ta clé API
const BRANDS = ["Nike", "Adidas", "Jordan", "Asics"];
const LIMIT = 50; // max 100 par requête

// Fonction pour récupérer les produits d'une marque
async function fetchBrand(brand) {
    const url = `https://api.kicks.dev/v3/stockx/products?query=${encodeURIComponent(
    brand
  )}&limit=${LIMIT}&display[variants]`; // 👈 important: demander variants

    const res = await fetch(url, {
        headers: { Authorization: API_KEY },
    });

    if (!res.ok) {
        throw new Error(`Erreur API ${res.status} pour ${brand}`);
    }

    const json = await res.json();
    return json.data || [];
}

async function saveProductsToCSV() {
    try {
        let allProducts = [];

        for (const brand of BRANDS) {
            console.log(`⏳ Récupération des produits ${brand}...`);
            const products = await fetchBrand(brand);

            // Filtrer uniquement sneakers
            const sneakers = products.filter(
                (item) =>
                item.categories &&
                item.categories.some((c) => c.toLowerCase() === "sneakers")
            );

            allProducts = allProducts.concat(sneakers);
        }

        // Colonnes du CSV (ajout sizes)
        const headers = ["id", "name", "brand", "category", "price", "image", "sizes"];
        const rows = allProducts.map((item, i) => {
            // Extraire toutes les tailles si dispo
            const sizes = (item.variants || [])
                .map((v) => v.size)
                .filter(Boolean)
                .join("|"); // ex: 38|39|40

            return [
                i + 1,
                `"${item.name || item.brand}"`,
                `"${item.brand}"`,
                `"${(item.categories || []).join("/")}"`,
                item.avg_price || 0,
                item.image || "https://via.placeholder.com/300x300",
                `"${sizes}"`,
            ];
        });

        const csv = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");

        fs.writeFileSync("./public/products.csv", csv, "utf8");
        console.log(
            `✅ ${allProducts.length} sneakers sauvegardées avec tailles dans public/products.csv`
        );
    } catch (error) {
        console.error("❌ Erreur:", error.message);
    }
}

saveProductsToCSV();