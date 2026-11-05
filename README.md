# 🌐 Koshtu Web (`koshtu-web`)

Офіційний маркетинговий лендінг та юридичні сторінки мобільного застосунку **Koshtu** для проходження модерації в **Apple App Store Connect** та **Google Play Console**.

## 📁 Структура проєкту

- `index.html` — Головна сторінка (Landing Page + Waitlist + інтерактивний перегляд екранів + FAQ)
- `privacy.html` — Політика конфіденційності (`/privacy.html`, вимога App Store Guideline 5.1.1 та Google Play Data Safety)
- `terms.html` — Умови використання та підтримка (`/terms.html`, Support URL та фінансовий дисклеймер)
- `account-deletion.html` — Інструкція та вебформа видалення даних (`/account-deletion.html`, вимога Apple Guideline 5.1.1(v) та Google Play)
- `404.html` — Кастомна сторінка 404
- `styles.css` — Дизайн-система Sky Blue Aesthetic (`#E7FFFF`, `#CDD9D9`, `#111827`, `#4B5563`, `#FFFFFF`, `#F3F4F6`), шрифт `Manrope` + `Geist Mono`
- `app.js` — Логіка інтерактивних станів, анімацій появи секцій (`IntersectionObserver`), послівного розкриття слогана (`requestAnimationFrame`) та валідації форм
- `assets/` — Оригінальні скріншоти інтерфейсу застосунку Koshtu

---

## ⚡ Інструкція розгортання на Vercel

1. Ініціалізуйте Git у папці `koshtu-web`:
   ```bash
   cd koshtu-web
   git init
   git add .
   git commit -m "Add Koshtu web pages"
   ```
2. Відправте код у свій репозиторій на GitHub (`koshtu-web`).
3. Перейдіть у **Vercel Dashboard** ➔ натисніть **Import Project** ➔ виберіть репозиторій `koshtu-web`.
4. Натисніть **Deploy**.
5. Скопіюйте згенеровані посилання для сторів:
   - **Marketing URL**: `https://koshtu-web.vercel.app/`
   - **Privacy Policy URL**: `https://koshtu-web.vercel.app/privacy.html`
   - **Terms & Support URL**: `https://koshtu-web.vercel.app/terms.html`
   - **Account Deletion URL**: `https://koshtu-web.vercel.app/account-deletion.html`

