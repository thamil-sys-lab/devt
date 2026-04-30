# Devverse Website v2 — Setup Guide

## What's in This Build

| Page | Description |
|------|-------------|
| `index.html` | Homepage — dynamic courses, stats, reviews (no names) |
| `courses.html` | Courses with search, filter, price, **in-page enrolment form** |
| `internships.html` | Internships with duration, **in-page application form** |
| `services.html` | IT Services with **service request modal** |
| `verify.html` | Certificate verification — no sample ID shown |
| `about.html` | About — founder section without personal/college details |
| `admin.html` | Full admin dashboard |
| `privacy.html` / `terms.html` | Legal pages |

---

## STEP 1 — Firebase Setup

Project: **devverse-fcb17** (already configured in `js/firebase-config.js`)

### Enable Authentication
1. Firebase Console → **devverse-fcb17** → **Authentication** → **Sign-in method**
2. Enable **Email/Password** → Save
3. Enable **Google** → Set support email: `vjysupermacy@gmail.com` → Save

### Create Admin Account (for email/password login)
1. Authentication → **Users** → **Add user**
2. Email: `vjysupermacy@gmail.com`
3. Set a strong password → **Add user**

### Create Firestore Database
1. Firestore Database → **Create database** → Production mode
2. Region: `asia-south1` → Done

---

## STEP 2 — Deploy Firestore Rules

```bash
npm install -g firebase-tools
firebase login
firebase use devverse-fcb17
firebase deploy --only firestore:rules
```

---

## STEP 3 — Local Testing

Open with a local server (required for Firebase ES module imports):

```bash
# Using Python
python3 -m http.server 3000

# Or using VS Code Live Server extension
# Right-click index.html → Open with Live Server
```

Then open: `http://localhost:3000`

> ⚠️ Do NOT open HTML files directly with `file://` — Firebase modules won't work.

---

## STEP 4 — Deploy to Firebase Hosting

```bash
firebase deploy --only hosting
```

Live at: `https://devverse-fcb17.web.app`

### Custom Domain (devverse1.in)
Firebase Console → Hosting → Add custom domain → Enter `devverse1.in` → Follow DNS steps in GoDaddy

---

## Admin Panel (`/admin.html`)

Login with:
- **Google** — click "Continue with Google" using `vjysupermacy@gmail.com`
- **Email/Password** — use the credentials you set in Firebase Auth

| Section | Features |
|---------|----------|
| Certificates | Add / Edit / Delete / Search |
| Courses | Add / Edit / Delete — with **Price field**, Duration, Featured toggle |
| Internships | Add / Edit / Delete — with Duration, Mode, Skills |
| IT Services | Add / Edit / Delete — with tags, badge, deliverable |
| Course Applications | View all submissions, update status, delete |
| Internship Applications | View all submissions, update status, delete |
| Service Requests | View, filter by status, update, delete |

---

## Firestore Collections

| Collection | Created By |
|-----------|-----------|
| `certificates` | Admin panel |
| `courses` | Admin panel |
| `internship_programs` | Admin panel |
| `it_services` | Admin panel |
| `course_applications` | Course enrolment form |
| `internship_applications` | Internship application form |
| `service_requests` | IT Service request form |

---

## Email Notifications (Optional Setup)

When someone submits a form, data is saved to Firestore instantly. To get email alerts:

**Option A — Zapier (No-code)**
1. Create a Zap: Firestore → Gmail
2. Trigger: New document in `course_applications` / `internship_applications` / `service_requests`
3. Action: Send email to `vjysupermacy@gmail.com`

**Option B — Firebase Cloud Functions**
```js
exports.onNewApplication = functions.firestore
  .document('course_applications/{id}')
  .onCreate(async (snap) => {
    // Send email via SendGrid or Nodemailer
  });
```

---

## Changes from v1

1. ✅ Google Sign-In on admin login (email-restricted to vjysupermacy@gmail.com)
2. ✅ Courses page fully complete with all 6 courses + price field
3. ✅ Duration shown on internship cards (not tools section)
4. ✅ All forms submit in-site (no Google Forms redirect)
5. ✅ Admin gets course + internship applications in the panel
6. ✅ Founder section — no college name or personal details
7. ✅ Certificate verify — sample ID removed
8. ✅ Reviews — no student names shown
9. ✅ Admin can add/edit/delete courses, internships, services
10. ✅ Price field added to courses (admin sets it)
11. ✅ Consistent purple/dark purple + white design throughout

---

## Support

Vijey Prasanna | vjysupermacy@gmail.com | +91 9150059199
Devverse | devverse1.in | UDYAM-TN-24-0155140
