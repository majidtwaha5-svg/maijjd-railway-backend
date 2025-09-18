# Railway Deployment Instructions

## 🚀 **Quick Fix for Railway Deployment**

The issue was that the `backend-for-railway` folder wasn't in your GitHub repository. I've created a clean repository with just the backend files.

### **Step 1: Create New GitHub Repository**
1. Go to https://github.com/new
2. Repository name: `maijjd-railway-backend`
3. Make it **Public**
4. Don't initialize with README (we already have files)
5. Click **Create repository**

### **Step 2: Push This Code to GitHub**
```bash
git remote add origin https://github.com/YOUR_USERNAME/maijjd-railway-backend.git
git branch -M main
git push -u origin main
```

### **Step 3: Deploy to Railway**
1. Go to https://railway.app
2. Click **"New Project"**
3. Select **"Deploy from GitHub repo"**
4. Choose `maijjd-railway-backend` repository
5. **Root Directory**: Leave empty (it will use the root)
6. Add environment variables
7. Deploy

### **Step 4: Add Environment Variables**
```
MONGODB_URI=mongodb+srv://maijjd_admin:YOUR_PASSWORD@cluster.mongodb.net/maijjd_production
JWT_SECRET=maijjd-super-secure-jwt-secret-2025-with-face-recognition
CORS_ORIGIN=https://maijjd.com,https://www.maijjd.com,http://localhost:3000
MJND_AGENT_ENABLED=true
NODE_ENV=production
PORT=5003
REDIS_URI=redis://username:password@redis-host:port
BACKEND_URL=https://api.maijjd.com
FRONTEND_URL=https://maijjd.com
FACE_RECOGNITION_ENABLED=true
```

### **Step 5: Test Deployment**
```bash
curl https://YOUR_RAILWAY_URL/api/mjnd/info
```

## 📋 **Expected Result**
- ✅ MJND routes found!
- ✅ MJND info endpoint: WORKING
- ✅ MJND chat endpoint: WORKING

## 🔍 **Why This Works**
This clean repository contains only the backend files needed for Railway, without any large files or git history issues.
