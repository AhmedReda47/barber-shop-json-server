# 🚀 خطوات نشر JSON Server على Render.com

## 📋 المتطلبات:

- ✅ حساب على Render.com (مجاني)
- ✅ حساب على GitHub (لربط المشروع)
- ✅ Git مثبت على جهازك

---

## 🔧 الخطوة 1: إعداد المشروع للـ Git

### 1.1 تأكد من وجود جميع الملفات:

```
Barber-Shop-JSON-Server/
├── db.json          ✅ (يجب أن يكون موجود)
├── server.js        ✅
├── package.json     ✅
├── .gitignore       ✅
└── README.md        ✅
```

### 1.2 تهيئة Git (إذا لم يكن موجود):

```bash
cd Barber-Shop-JSON-Server
git init
git add .
git commit -m "Initial commit - JSON Server for Barber Shop"
```

---

## 📤 الخطوة 2: رفع المشروع على GitHub

### 2.1 إنشاء Repository جديد:

1. اذهب إلى [GitHub.com](https://github.com)
2. اضغط على **"New"** لإنشاء repository جديد
3. اسم الـ repository: `barber-shop-json-server` (أو أي اسم تريده)
4. **لا** تضع علامة على "Initialize with README"
5. اضغط **"Create repository"**

### 2.2 ربط المشروع مع GitHub:

```bash
# في مجلد Barber-Shop-JSON-Server
git remote add origin https://github.com/YOUR_USERNAME/barber-shop-json-server.git
git branch -M main
git push -u origin main
```

**استبدل `YOUR_USERNAME` باسم المستخدم الخاص بك على GitHub**

---

## 🌐 الخطوة 3: إنشاء Service على Render.com

### 3.1 تسجيل الدخول:

1. اذهب إلى [Render.com](https://render.com)
2. سجل الدخول أو أنشئ حساب جديد (مجاني)

### 3.2 إنشاء Web Service:

1. اضغط على **"New +"** في Dashboard
2. اختر **"Web Service"**
3. اضغط **"Connect GitHub"** (أو GitLab إذا كنت تستخدمه)
4. امنح Render.com صلاحية الوصول إلى GitHub
5. اختر الـ repository: `barber-shop-json-server`

---

## ⚙️ الخطوة 4: إعدادات Render.com

### 4.1 معلومات أساسية:

- **Name**: `barber-shop-api` (أو أي اسم تريده)
- **Region**: اختر الأقرب إليك (مثلاً: Frankfurt, Germany)
- **Branch**: `main` (أو `master`)

### 4.2 إعدادات Build & Deploy:

#### Build Command:

```bash
npm install
```

#### Start Command:

```bash
npm start
```

#### Root Directory:

```
Barber-Shop-JSON-Server
```

**⚠️ مهم جداً**: إذا كان المشروع في مجلد فرعي، يجب إضافة اسم المجلد هنا!

### 4.3 Environment Variables:

**لا حاجة لإضافة متغيرات** - Render.com يضيف `PORT` تلقائياً

(اختياري) إذا أردت إضافة:

- `NODE_ENV` = `production`

### 4.4 Plan:

- اختر **"Free"** (مجاني)

### 4.5 Auto-Deploy:

- ✅ **Enabled** (يحدث تلقائياً عند push جديد)

---

## 🚀 الخطوة 5: النشر

1. اضغط **"Create Web Service"**
2. انتظر البناء (Build) - سيأخذ 2-5 دقائق
3. بعد الانتهاء، ستحصل على URL مثل:
   ```
   https://barber-shop-api.onrender.com
   ```

---

## ✅ الخطوة 6: التحقق من النشر

### 6.1 اختبار API:

افتح المتصفح واذهب إلى:

```
https://YOUR-SERVICE-NAME.onrender.com/services
```

يجب أن ترى JSON array (قد يكون فارغ `[]`)

### 6.2 اختبار Endpoints أخرى:

```
https://YOUR-SERVICE-NAME.onrender.com/invoices
https://YOUR-SERVICE-NAME.onrender.com/settings
https://YOUR-SERVICE-NAME.onrender.com/materials
```

---

## 🔄 الخطوة 7: تحديث Frontend

### 7.1 تحديث ملف `.env` في المشروع الرئيسي:

```env
VITE_API_BASE_URL=https://YOUR-SERVICE-NAME.onrender.com
```

### 7.2 أو تحديث `src/config/api.ts`:

```typescript
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'https://YOUR-SERVICE-NAME.onrender.com'
```

---

## ⚠️ ملاحظات مهمة:

### 1. Free Tier Limitations:

- **Spin Down**: بعد 15 دقيقة من عدم الاستخدام، ينام السيرفر
- **First Request Delay**: الطلب الأول بعد النوم قد يأخذ 30-50 ثانية
- **Data Persistence**: البيانات قد تُفقد عند إعادة تشغيل السيرفر

### 2. حل مشكلة Spin Down:

- استخدم **UptimeRobot** (مجاني) لمراقبة السيرفر كل 5 دقائق
- أو ارفع إلى **Paid Plan** ($7/شهر)

### 3. Health Check:

يمكنك إضافة health check في Render.com:

- **Health Check Path**: `/services` (أو أي endpoint)

---

## 🔧 استكشاف الأخطاء:

### المشكلة: Build فشل

**الحل**:

- تأكد من أن `package.json` موجود
- تأكد من أن `db.json` موجود
- تأكد من أن `server.js` موجود

### المشكلة: Service لا يعمل

**الحل**:

1. اذهب إلى **Logs** في Render.com
2. ابحث عن الأخطاء
3. تأكد من أن `PORT` يستخدم `process.env.PORT`

### المشكلة: CORS Error

**الحل**:
الكود موجود في `server.js` - يجب أن يعمل تلقائياً

### المشكلة: البيانات تُفقد

**الحل**:

- هذا طبيعي في Free Tier
- استخدم Paid Plan أو Database حقيقي للإنتاج

---

## 📝 ملخص سريع:

1. ✅ ارفع المشروع على GitHub
2. ✅ اربط GitHub مع Render.com
3. ✅ أنشئ Web Service جديد
4. ✅ **Root Directory**: `Barber-Shop-JSON-Server`
5. ✅ **Build Command**: `npm install`
6. ✅ **Start Command**: `npm start`
7. ✅ اضغط "Create Web Service"
8. ✅ انسخ URL واستخدمه في Frontend

---

## 🎉 بعد النشر:

ستحصل على URL مثل:

```
https://barber-shop-api-xxxx.onrender.com
```

استخدم هذا الـ URL في:

- ملف `.env` في Frontend
- أو في `src/config/api.ts`

---

**💡 نصيحة**: احفظ الـ URL في مكان آمن لأنه سيتم استخدامه في Frontend!
