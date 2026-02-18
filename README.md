# אתר הנצחה – דוד אהרוני
## מבנה הקבצים

```
memorial-site/
│
├── index.html              ← דף הבית הראשי
├── style.css               ← עיצוב משותף לכל הדפים
├── shared.js               ← קוד משותף (lightbox, ניווט)
│
├── gallery-childhood.html  ← גלריה: ילדות ומשפחה
├── gallery-army.html       ← גלריה: שירות צבאי
├── gallery-friends.html    ← גלריה: חברים ובילויים
├── gallery-events.html     ← גלריה: אירועים מיוחדים
│
├── images/
│   ├── david-main.jpg      ← תמונה ראשית (לגיבור)
│   ├── childhood/          ← תמונות ילדות
│   ├── army/               ← תמונות שירות
│   ├── friends/            ← תמונות חברים
│   └── events/             ← תמונות אירועים
│
├── audio/
│   └── YOUR_FILE.mp3       ← קובץ אודיו
│
└── video/
    └── YOUR_FILE.mp4       ← קובץ וידאו
```

---

## שלבי הכנת האתר

### 1. תמונות
- צור תיקיות `images/childhood`, `images/army`, `images/friends`, `images/events`
- שים כל תמונה בתיקייה המתאימה
- בכל קובץ גלריה, הוסף שורות כאלה במקום ה-placeholder:
  ```html
  <div class="masonry-item">
    <img src="images/childhood/photo01.jpg" alt="תיאור" loading="lazy" />
  </div>
  ```

### 2. תמונה ראשית בדף הבית
בקובץ `index.html`, חפש את השורה:
```html
<div class="hero-photo-placeholder">✦</div>
```
והחלף ב:
```html
<img src="images/david-main.jpg" alt="דוד אהרוני" />
```

### 3. אודיו
- שים את הקובץ בתיקיית `audio/`
- בקובץ `index.html` חפש `YOUR_AUDIO_FILE.mp3` והחלף בשם הקובץ שלך

### 4. וידאו
- שים את הקובץ בתיקיית `video/`
- בקובץ `index.html` חפש `YOUR_VIDEO_FILE.mp4` והחלף בשם הקובץ שלך

### 5. טופס נר זיכרון (Formspree)
1. כנס ל-https://formspree.io והירשם (חינמי)
2. צור טופס חדש
3. קבל את ה-ID (נראה כך: `xabcdefg`)
4. בקובץ `index.html` חפש `YOUR_FORM_ID` והחלף

### 6. תוכן טקסטואלי
בקובץ `index.html` עדכן:
- תאריכי לידה ופטירה
- ציטוט
- טקסט סיפור החיים
- כתובת מייל (`YOUR_EMAIL@gmail.com`)

### 7. תמונות שער לאלבומים (אופציונלי)
בקובץ `index.html`, לכל כרטיס אלבום, החלף את ה-placeholder בתמונה:
```html
<!-- מחק את השורה הזו: -->
<div class="album-thumb-placeholder">🏠</div>
<!-- והוסף: -->
<img class="album-thumb" src="images/childhood/cover.jpg" alt="ילדות" />
```

---

## העלאה לאינטרנט (GitHub Pages – חינם)

1. צור חשבון ב-https://github.com
2. לחץ "New repository" → תן שם (למשל: `david-memorial`)
3. העלה את כל הקבצים (drag & drop)
4. לך ל-Settings → Pages → Source: "main" branch
5. האתר יהיה חי בכתובת: `https://YOUR_USERNAME.github.io/david-memorial`

---

## הוספת אלבום חדש

1. העתק את הקובץ `gallery-childhood.html`
2. שנה את שם הקובץ (למשל `gallery-trips.html`)
3. עדכן כותרת, תיאור ותמונות בתוכו
4. ב-`index.html`, בסקשן `#albums`, הוסף כרטיס חדש:
```html
<a class="album-card" href="gallery-trips.html">
  <div class="album-thumb-placeholder">✈️</div>
  <div class="album-info">
    <div class="album-title">טיולים</div>
    <div class="album-count">תמונות מטיולים ברחבי הארץ והעולם</div>
  </div>
  <div class="album-arrow">←</div>
</a>
```
