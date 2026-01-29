# Email Service Setup Guide

## Overview
The contact form now uses **EmailJS** to send emails directly from the browser without requiring a backend server.

## Setup Steps

### 1. Create an EmailJS Account
1. Visit [emailjs.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

### 2. Set Up Email Service

#### Option A: Using Gmail (Recommended)
1. In EmailJS Dashboard, go to **Email Services**
2. Click **Create New Service**
3. Select **Gmail**
4. Click **Connect Gmail Account**
5. Follow the prompts to authorize
6. Copy the **Service ID** (looks like `service_xxxxxxx`)

#### Option B: Using Your Own Email Server
1. In EmailJS Dashboard, go to **Email Services**
2. Click **Create New Service**
3. Select your email provider (Gmail, Outlook, SendGrid, etc.)
4. Fill in the required credentials
5. Copy the **Service ID**

### 3. Create an Email Template

1. Go to **Email Templates** in the EmailJS Dashboard
2. Click **Create New Template**
3. Name it (e.g., "contact-form")
4. Copy the following template:

```html
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

5. Configure these template variables in your template:
   - `from_name` - Visitor's name
   - `from_email` - Visitor's email
   - `message` - Message content
   - `to_email` - Your email (where to send)

6. Copy the **Template ID** (looks like `template_xxxxxxx`)

### 4. Get Your Public Key

1. Go to **Account** → **API Keys**
2. Copy your **Public Key**

### 5. Update Environment Variables

Update `.env.local` with your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxxxxxx
```

## Testing

1. Start the development server: `npm run dev`
2. Navigate to the Contact section
3. Fill in the form and click "Send Message"
4. Check your email for the message

## Troubleshooting

### "Email service not configured" error
- Ensure all three environment variables are set in `.env.local`
- Restart your dev server after updating `.env.local`

### "Failed to send email" error
- Verify your EmailJS Service ID and Template ID are correct
- Check that your email service is active in EmailJS Dashboard
- If using Gmail, ensure you've authorized the connection

### Email not received
- Check spam/junk folder
- Verify the recipient email in the template configuration
- Check EmailJS Dashboard → Activity for error logs

## File Changes

- **New file**: `src/services/emailService.ts` - Email sending logic
- **Updated**: `src/sections/Contact.tsx` - Integrated email service
- **New file**: `.env.local` - Environment variables (add to `.gitignore`)

## Deployment Notes

When deploying to production:

1. Add environment variables to your hosting platform:
   - Vercel: Settings → Environment Variables
   - Netlify: Site Settings → Build & Deploy → Environment
   - GitHub Pages: Use GitHub Secrets (requires Actions workflow)

2. Ensure `.env.local` is in `.gitignore` to prevent exposing secrets

## Security Considerations

- Your **Public Key** from EmailJS can be safely used in the browser
- Never expose your **Private Key** or email account credentials in the frontend
- EmailJS uses security tokens to prevent unauthorized use
- Consider rate limiting if you expect high volume
