# Stara Piekarnia — strona wizytówka

Jednostronicowa strona apartamentu Stara Piekarnia w Tyliczu (Rynek 23), zbudowana w [Astro](https://astro.build) i publikowana na GitHub Pages. Ta sama budowa co strona Apartamentu za Rynkiem.

## Gdzie co zmieniać

```
src/lib/contact.ts            telefon, e-mail, Facebook, adres, współrzędne
src/translations/pl.json      wszystkie teksty po polsku
src/translations/en.json      wszystkie teksty po angielsku
src/data/reviews.json         oceny i opinie gości
src/data/gallery.json         kolejność i opisy zdjęć w galerii
src/assets/photos/            zdjęcia (Astro sam je zmniejsza i konwertuje do WebP)
src/assets/logo-*.png         logo: białe (na zdjęciu) i ciemne (na białym tle)
tailwind.config.mjs           kolor akcentu: ACCENT = 'sage' | 'burgundy' | 'fjord'
```

## Praca lokalnie

Wymagany Node.js 20+.

```
npm install
npm run dev      # podgląd na http://localhost:4321
npm run build    # wersja produkcyjna w dist/
```

## Wdrożenie

Każdy push na gałąź `main` buduje stronę i publikuje ją na GitHub Pages
(Settings → Pages → Source: **GitHub Actions**).
Ręcznie: zakładka Actions → „Deploy to GitHub Pages” → Run workflow.
