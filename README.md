# 📋 Interactive Task Management System

A beautiful, collaborative task management web app built with pure HTML, CSS, and JavaScript. Perfect for project planning and team coordination.

## ✨ Features

### 🎯 Core Functionality
- **Real-time task tracking** with automatic overdue detection
- **Hours estimation** with live remaining hours calculation
- **Interactive status management** (Pending → In Progress → Completed)
- **Team assignment** (Malik, Muhammad, or Both)
- **Dependency tracking** between tasks

### 🎨 Interactive Controls
- **Click status badges** to cycle through states
- **Click assignee badges** to change assignments
- **Double-click** to edit descriptions, deadlines, and estimates
- **Drag and drop** rows to reorder tasks (numbers auto-update!)
- **Edit button** for comprehensive task editing
- **Delete button** with confirmation

### 💾 Data Management
- **Auto-save** to browser localStorage
- **Export to JSON** for sharing with teammates
- **Import from JSON** to sync changes
- **Reset button** to restore defaults

### 📊 Smart Features
- Live statistics dashboard
- Automatic overdue task highlighting
- Current date tracking
- Hours remaining calculation
- Visual status indicators

## 🚀 Getting Started

### Quick Start
1. Open `taskingPlan.html` in any modern web browser
2. Start managing your tasks!

### Deploy Online (Free)

#### Option 1: GitHub Pages
```bash
# Already set up in this repo!
# Just enable GitHub Pages in Settings → Pages → Deploy from main branch
```
Your site will be at: `https://malik1234567891011.github.io/TaskingPlan/taskingPlan.html`

#### Option 2: Netlify
1. Drag and drop the HTML file to [netlify.com/drop](https://app.netlify.com/drop)
2. Get instant deployment!

#### Option 3: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

## 🤝 Collaboration Workflow

### For You:
1. Make changes to tasks
2. Click **Export JSON**
3. Share the downloaded JSON file with your teammate

### For Your Teammate:
1. Receive the JSON file
2. Click **Import JSON**
3. Paste the JSON content
4. Click Import
5. All synced! ✨

## 🎨 Customization

### Change Team Names
Edit the `assignees` array in the JavaScript:
```javascript
const assignees = ["malik", "muhammad", "both"];
```

### Adjust Colors
Modify the CSS color schemes for assignees:
```css
.assignee.malik {
    background: #f3e5f5;
    color: #7b1fa2;
}
```

## 📱 Mobile Friendly
- Responsive design works on all devices
- Touch-friendly controls
- Optimized for phones and tablets

## 🔧 Technical Details
- **No dependencies** - Pure vanilla JavaScript
- **No build process** - Just open and run
- **No backend** - All data stored locally
- **Privacy-first** - Your data never leaves your browser

## 📄 License
Free to use and modify for your projects!

## 🙋 Support
For issues or questions, open an issue on GitHub.

---

Made with ❤️ for efficient project management

