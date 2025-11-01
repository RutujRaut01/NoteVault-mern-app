# NoteVault - Render Deployment Guide

## Fixed Issues ✅

1. **Critical Bug Fixed**: The axios baseURL was incorrectly set to the string "BASE_URL" instead of the BASE_URL variable
2. **Added Render Configuration**: Created `render.yaml` for proper deployment setup
3. **Environment Variables**: Added `.env.production` for production API URL
4. **Vite Configuration**: Updated for proper build output and routing

## Deployment Steps

### Option 1: Using render.yaml (Recommended)
1. Push the changes to your repository
2. Connect your GitHub repository to Render
3. Render will automatically detect the `render.yaml` file

### Option 2: Manual Setup

#### Frontend Deployment
1. **Service Type**: Static Site
2. **Build Command**: `cd frontend && npm install && npm run build`
3. **Publish Directory**: `frontend/dist`
4. **Add Rewrite Rule**:
   - Source: `/api/*`
   - Destination: `https://your-backend-url.onrender.com/api/*`

#### Backend Deployment
1. **Service Type**: Node.js
2. **Build Command**: `cd backend && npm install`
3. **Start Command**: `cd backend && npm start`
4. **Environment Variables**:
   - `NODE_ENV`: `production`
   - `PORT`: `5001`

## Troubleshooting Black Screen Issues

### 1. Check Browser Console
- Open DevTools (F12)
- Look for JavaScript errors
- Check if API calls are failing

### 2. Verify API Connection
- Ensure your backend is deployed and accessible
- Check that the rewrite rules are correctly configured
- Verify CORS settings on your backend

### 3. Build Issues
- Check Render build logs
- Ensure `npm run build` completes successfully
- Verify the dist folder is generated

### 4. Routing Issues
- Make sure all routes use relative paths
- Check that BrowserRouter is properly configured
- Verify rewrite rules in Render

## Common Issues & Solutions

### Issue: API Calls Failing
**Solution**: Update the backend URL in your Render dashboard rewrite rules

### Issue: Build Fails
**Solution**: Check for missing dependencies in package.json

### Issue: Static Assets Not Loading
**Solution**: Ensure all asset paths are relative, not absolute

### Issue: White Screen
**Solution**: This is typically caused by JavaScript errors - check the browser console

## Environment Variables

Make sure to set these in your Render dashboard:

### Backend
- `NODE_ENV`: `production`
- `MONGODB_URI`: Your MongoDB connection string
- `JWT_SECRET`: Your JWT secret key
- Any other required environment variables

### Frontend
- `VITE_API_URL`: `/api` (for production)

## Testing After Deployment

1. Check the frontend URL loads without errors
2. Test creating and viewing notes
3. Verify all routes work correctly
4. Check browser console for any warnings/errors

## Support

If you still encounter issues:
1. Check Render deployment logs
2. Verify all environment variables are set
3. Ensure both frontend and backend are running
4. Test API endpoints directly