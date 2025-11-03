# 🚀 إعداد Git للمشروع

## الخطوة 1: تهيئة Git Repository

إذا رأيت هذا الخطأ:
```
fatal: not a git repository (or any of the parent directories): .git
```

**الحل:**
```bash
cd Barber-Shop-JSON-Server
git init
```

---

## الخطوة 2: إضافة الملفات

```bash
git add .
```

أو لإضافة ملف محدد:
```bash
git add railway.json
git add package.json
git add server.js
git add db.json
```

---

## الخطوة 3: Commit

```bash
git commit -m "Initial commit - JSON Server with Railway config"
```

---

## الخطوة 4: ربط مع GitHub

### أ) إنشاء Repository على GitHub:
1. اذهب إلى [github.com](https://github.com)
2. اضغط **"New"** → **"New repository"**
3. اسم: `barber-shop-json-server` (أو أي اسم)
4. **لا** تضع علامة على "Initialize with README"
5. اضغط **"Create repository"**

### ب) ربط المشروع:
```bash
git remote add origin https://github.com/YOUR_USERNAME/barber-shop-json-server.git
git branch -M main
git push -u origin main
```

**استبدل `YOUR_USERNAME` باسمك على GitHub!**

---

## الخطوة 5: رفع التحديثات لاحقاً

```bash
git add .
git commit -m "Add Railway configuration"
git push
```

---

## ⚠️ ملاحظات مهمة:

1. **تأكد من `.gitignore`**:
   - لا ترفع `node_modules/`
   - لا ترفع `.env` (إذا كان موجود)
   - لا ترفع `backups/` (إذا كان موجود)

2. **تأكد من رفع الملفات المهمة**:
   - ✅ `railway.json`
   - ✅ `package.json`
   - ✅ `server.js`
   - ✅ `db.json`
   - ✅ `.gitignore`

---

## 🔍 التحقق من الملفات:

```bash
git status
```

يجب أن ترى الملفات الجديدة تحت "Changes to be committed"

---

## 📝 ملخص سريع:

```bash
# 1. تهيئة Git
git init

# 2. إضافة الملفات
git add .

# 3. Commit
git commit -m "Initial commit"

# 4. ربط GitHub (بعد إنشاء repository)
git remote add origin https://github.com/YOUR_USERNAME/repo-name.git
git branch -M main
git push -u origin main
```

