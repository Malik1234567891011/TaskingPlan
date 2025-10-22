# 📧 EmailJS Setup Guide

Follow these steps to enable email notifications for task deadlines:

## Step 1: Create EmailJS Account (FREE)

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (top right)
3. Create a free account (200 emails/month free forever)
4. Verify your email address

## Step 2: Add Email Service

1. In EmailJS Dashboard, click **"Add New Service"**
2. Choose your email provider:
   - **Gmail** (easiest if you have Gmail)
   - Outlook
   - Yahoo
   - Or any other provider
3. Follow the connection instructions
4. **Copy your Service ID** (looks like: `service_abc123`)

## Step 3: Create Email Template

1. Click **"Email Templates"** in the sidebar
2. Click **"Create New Template"**
3. Use this template:

### Template Name: 
`Task Deadline Reminder`

### Subject:
```
⚠️ {{task_count}} Task(s) Due Soon - {{current_date}}
```

### Email Body:
```
Hello {{to_name}},

You have {{task_count}} task(s) with upcoming deadlines:

{{task_list}}

🔴 {{urgent_count}} task(s) are due within 1 day!

Please check your task manager to stay on track.

Best regards,
Task Management System
```

4. **Save the template**
5. **Copy your Template ID** (looks like: `template_xyz789`)

## Step 4: Get Your Public Key

1. Click **"Account"** in the sidebar
2. Find **"General"** tab
3. Copy your **Public Key** (looks like: `abc123xyz789`)

## Step 5: Add Credentials to Code

Open `taskingPlan.html` (or `index.html`) and find this section near the top of the `<script>` tag:

```javascript
const EMAILJS_CONFIG = {
    publicKey: 'YOUR_PUBLIC_KEY',  // Replace with your Public Key
    serviceId: 'YOUR_SERVICE_ID',   // Replace with your Service ID
    templateId: 'YOUR_TEMPLATE_ID'  // Replace with your Template ID
};
```

Replace the values:

```javascript
const EMAILJS_CONFIG = {
    publicKey: 'abc123xyz789',      // Your actual Public Key
    serviceId: 'service_abc123',    // Your actual Service ID
    templateId: 'template_xyz789'   // Your actual Template ID
};
```

## Step 6: Save and Deploy

1. Save the file
2. Commit and push to GitHub:
   ```bash
   git add taskingPlan.html index.html
   git commit -m "Configure EmailJS for email notifications"
   git push
   ```
3. Your site will auto-update on Vercel/GitHub Pages

## Step 7: Test It!

1. Open your deployed website
2. Click **🔔 Email Alerts** button
3. Enter your email address
4. You should receive a test email with any upcoming deadlines!

## 📊 Free Tier Limits

- **200 emails per month** (free forever)
- **50 emails per day**
- Perfect for team task management!

## 🔧 Troubleshooting

### Email not sending?
- Check browser console for errors (F12)
- Verify all 3 IDs are correct (Public Key, Service ID, Template ID)
- Make sure Gmail/email service is connected in EmailJS dashboard
- Check EmailJS dashboard for email logs

### Still not working?
- Try disconnecting and reconnecting your email service in EmailJS
- Make sure your email template variable names match exactly: `{{task_count}}`, `{{task_list}}`, etc.
- Check that you've verified your EmailJS account email

## 🎉 Done!

Once configured, the system will:
- ✅ Send email reminders when tasks are due within 3 days
- ✅ Show browser notifications
- ✅ Log all notifications in the console

## 💡 Tips

- You can customize the email template design in EmailJS dashboard
- Add multiple team members' emails by clicking 🔔 Email Alerts on their devices
- Free tier is more than enough for small teams

Need help? Check [EmailJS Documentation](https://www.emailjs.com/docs/)

