            // EmailJS Configuration
            const EMAILJS_CONFIG = {
                publicKey: "961oUETjyu2aeS8UZ", // Your EmailJS Public Key
                serviceId: "service_yc54ruc", // Gmail service
                templateId: "template_0trbivj", // Task Deadline Reminder template
            };

// Initialize EmailJS
(function () {
    if (EMAILJS_CONFIG.publicKey !== "YOUR_PUBLIC_KEY") {
        emailjs.init({
            publicKey: EMAILJS_CONFIG.publicKey,
        });
    }
})();

// Initial task data
let tasks = [
    {
        id: 1,
        desc: "Verify project setup & tooling: Confirm repo structure, Gradle sync, Compose preview works, Room/OCR libs resolve; create CONTRIBUTING.md with branch naming and PR checklist.",
        deps: "—",
        assignee: "both",
        days: 1,
        hours: 2,
        deadline: "2025-10-24",
        status: "completed",
    },
    {
        id: 2,
        desc: "UserProfile + Room schema v1: Implement UserProfile, Restaurant, MenuCapture, MenuItem entities, DAOs, and type converters (lists/tags).",
        deps: "1",
        assignee: "muhammad",
        days: 2,
        hours: 4,
        deadline: "2025-10-27",
        status: "completed",
    },
    {
        id: 3,
        desc: "Onboarding UI (language + tags): Chips for allergies, dislikes, preferences; validation (language required), save to Room.",
        deps: "1",
        assignee: "malik",
        days: 2,
        hours: 4,
        deadline: "2025-10-28",
        status: "completed",
    },
    {
        id: 4,
        desc: "Bottom navigation & nav graph: Tabs for Scan, Menu, Profile; back-stack behavior and deep-links for opening a saved menu.",
        deps: "1",
        assignee: "muhammad",
        days: 2,
        hours: 3,
        deadline: "2025-10-29",
        status: "completed",
    },
    {
        id: 5,
        desc: "OCR integration (image picker): Import image, run OCR, return raw text blocks; basic error codes for quality/format/connectivity.",
        deps: "1",
        assignee: "muhammad",
        days: 3,
        hours: 3,
        deadline: "2025-11-03",
        status: "in-progress",
    },
    {
        id: 6,
        desc: "Translation integration: Translate titles/descriptions when language differs; store both original and translated copies; toggle in UI state.",
        deps: "5",
        assignee: "malik",
        days: 2,
        hours: 2,
        deadline: "2025-11-05",
        status: "pending",
    },
    {
        id: 7,
        desc: "Early OCR+Translation test pass: Use 8–10 diverse menu fixtures (photo, scan, foreign language); log failures with example images.",
        deps: "5–6",
        assignee: "both",
        days: 1,
        hours: 1,
        deadline: "2025-11-05",
        status: "pending",
    },
    {
        id: 8,
        desc: 'Parsing + normalization: Title/description/price segmentation; tokenization; synonym map ("garbanzo → chickpea", "prawn → shrimp"); family mapping (tree nut, shellfish).',
        deps: "5–6",
        assignee: "muhammad",
        days: 3,
        hours: 3,
        deadline: "2025-11-08",
        status: "pending",
    },
    {
        id: 9,
        desc: "Risk classification (pure function): Implement deterministic Red/Yellow/Green with precedence; returns reasons list; unit tests (table-driven).",
        deps: "8",
        assignee: "malik",
        days: 2,
        hours: 2,
        deadline: "2025-11-10",
        status: "pending",
    },
    {
        id: 10,
        desc: 'Detailed Menu screen: Cards with title/price/description; translated/original toggle; risk badge; "why?" sheet using evidence list.',
        deps: "8–9",
        assignee: "muhammad",
        days: 3,
        hours: 3,
        deadline: "2025-11-12",
        status: "pending",
    },
    {
        id: 11,
        desc: 'Live profile sync: When profile changes, re-evaluate open/saved menus on load; show lightweight "recomputed" toast.',
        deps: "2, 9",
        assignee: "malik",
        days: 2,
        hours: 2,
        deadline: "2025-11-13",
        status: "pending",
    },
    {
        id: 12,
        desc: "Saved Menu screen: Grid list with restaurant name, date, and quick counts (e.g., red count); click opens Detailed Menu.",
        deps: "2",
        assignee: "muhammad",
        days: 2,
        hours: 2,
        deadline: "2025-11-17",
        status: "pending",
    },
    {
        id: 13,
        desc: "Profile screen: Edit language and tags with same chip UX; prevent duplicates; persist to Room.",
        deps: "2",
        assignee: "malik",
        days: 2,
        hours: 2,
        deadline: "2025-11-18",
        status: "pending",
    },
    {
        id: 14,
        desc: "Error taxonomy & UX: Map OCR/translation/parsing outcomes to friendly messages; progress indicators; retry flows.",
        deps: "5–10",
        assignee: "muhammad",
        days: 2,
        hours: 2,
        deadline: "2025-11-20",
        status: "pending",
    },
    {
        id: 15,
        desc: "Accessibility pass: Content descriptions, focus order, touch target sizes, color+icon+text for risk, contrast check.",
        deps: "10–13",
        assignee: "malik",
        days: 1,
        hours: 1,
        deadline: "2025-11-22",
        status: "pending",
    },
    {
        id: 16,
        desc: "Internal QA round: Re-eval saved menus; offline behavior (airplane mode); open-time under 15s for 1-page menu on mid-range device.",
        deps: "All",
        assignee: "both",
        days: 3,
        hours: 3,
        deadline: "2025-11-24",
        status: "pending",
    },
    {
        id: 17,
        desc: "Performance & polish: Simple image pre-processing (rotate/auto-contrast), Room query tuning, jank fixes on long lists.",
        deps: "16",
        assignee: "muhammad",
        days: 2,
        hours: 2,
        deadline: "2025-11-26",
        status: "pending",
    },
    {
        id: 18,
        desc: "Test fixtures & demo data: Curate final menu set (EN/FR/ES, fancy vs casual); script to load/delete fixtures quickly.",
        deps: "16",
        assignee: "malik",
        days: 1,
        hours: 1,
        deadline: "2025-11-27",
        status: "pending",
    },
    {
        id: 19,
        desc: "Static analysis & CI basics: Add ktlint, Gradle tasks; GitHub Action for build + lint on PRs; status badges.",
        deps: "1",
        assignee: "muhammad",
        days: 1,
        hours: 1,
        deadline: "2025-11-27",
        status: "pending",
    },
    {
        id: 20,
        desc: "Offline-first sanity: Ensure all critical screens work with no network; graceful model-download checks if needed.",
        deps: "16",
        assignee: "malik",
        days: 1,
        hours: 1,
        deadline: "2025-11-28",
        status: "pending",
    },
    {
        id: 21,
        desc: "Final QA: Regression list from earlier bugs; run through rubric; confirm deterministic classification on repeated inputs.",
        deps: "16–20",
        assignee: "both",
        days: 2,
        hours: 2,
        deadline: "2025-12-01",
        status: "pending",
    },
    {
        id: 22,
        desc: "Docs & slides: Update README, Part A–D excerpts/screens; record short screen captures for PRs and demo.",
        deps: "21",
        assignee: "both",
        days: 2,
        hours: 2,
        deadline: "2025-12-02",
        status: "pending",
    },
    {
        id: 23,
        desc: "Release build & dry-run: Generate signed release APK, install on two physical devices; time the full demo flow.",
        deps: "22",
        assignee: "both",
        days: 1,
        hours: 1,
        deadline: "2025-12-04",
        status: "pending",
    },
    {
        id: 24,
        desc: "Presentation & final polish: Demo checklist, backup device, extra APK on USB; finalize speaking parts.",
        deps: "23",
        assignee: "both",
        days: 1,
        hours: 1,
        deadline: "2025-12-05",
        status: "pending",
    },
];

// Load from localStorage if exists
function loadFromStorage() {
    const saved = localStorage.getItem("taskingPlan");
    if (saved) {
        try {
            tasks = JSON.parse(saved);
        } catch (e) {
            console.error("Error loading from storage:", e);
        }
    }
}

// Save to localStorage
function saveToStorage() {
    localStorage.setItem("taskingPlan", JSON.stringify(tasks));
}

// Format date for display
function formatDate(dateStr) {
    const date = new Date(dateStr);
    const month = date.toLocaleString("default", {
        month: "short",
    });
    const day = date.getDate();
    return `${month} ${day}`;
}

// Check if task is overdue
function isOverdue(deadline, status) {
    if (status === "completed") return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const deadlineDate = new Date(deadline);
    deadlineDate.setHours(0, 0, 0, 0);
    return deadlineDate < today;
}

// Calculate days until deadline
function daysUntilDeadline(deadline) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const deadlineDate = new Date(deadline);
    deadlineDate.setHours(0, 0, 0, 0);
    const diffTime = deadlineDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

// Check if task is due soon (within 3 days)
function isDueSoon(deadline, status) {
    if (status === "completed") return false;
    const days = daysUntilDeadline(deadline);
    return days >= 0 && days <= 3;
}

// Update statistics
function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter((t) => t.status === "completed").length;
    const inProgress = tasks.filter((t) => t.status === "in-progress").length;
    const overdue = tasks.filter((t) => isOverdue(t.deadline, t.status)).length;
    const dueSoon = tasks.filter((t) => isDueSoon(t.deadline, t.status)).length;
    const hoursRemaining = tasks
        .filter((t) => t.status !== "completed")
        .reduce((sum, t) => sum + (t.hours || 0), 0);

    document.getElementById("total-tasks").textContent = total;
    document.getElementById("completed-tasks").textContent = completed;
    document.getElementById("in-progress-tasks").textContent = inProgress;
    document.getElementById("overdue-tasks").textContent = overdue;
    document.getElementById("due-soon-tasks").textContent = dueSoon;
    document.getElementById("hours-remaining").textContent = hoursRemaining;

    // Update current date
    const today = new Date();
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    document.getElementById("current-date").textContent =
        "Status as of " + today.toLocaleDateString("en-US", options);

    // Update upcoming tasks section
    renderUpcomingTasks();
}

// Render table
function renderTable() {
    const tbody = document.getElementById("task-table");
    tbody.innerHTML = "";

    tasks.forEach((task, index) => {
        const overdue = isOverdue(task.deadline, task.status);
        const displayStatus =
            overdue && task.status !== "completed" ? "overdue" : task.status;

        const tr = document.createElement("tr");
        if (overdue && task.status !== "completed") {
            tr.classList.add("overdue-row");
        }

        // Make row draggable
        tr.draggable = true;
        tr.dataset.taskId = task.id;
        tr.dataset.index = index;

        // Add drag event listeners
        tr.addEventListener("dragstart", handleDragStart);
        tr.addEventListener("dragover", handleDragOver);
        tr.addEventListener("drop", handleDrop);
        tr.addEventListener("dragend", handleDragEnd);
        tr.addEventListener("dragleave", handleDragLeave);

        // Display position number (index + 1) instead of task.id
        const displayNumber = index + 1;

        tr.innerHTML = `
                        <td class="drag-handle">⠿</td>
                        <td class="task-id">${displayNumber}</td>
                        <td class="task-desc" ondblclick="editDesc(${
                            task.id
                        })">${task.desc}</td>
                        <td class="dependencies">${task.deps}</td>
                        <td><span class="assignee ${
                            task.assignee
                        }" onclick="cycleAssignee(${
            task.id
        })">${capitalizeFirst(task.assignee)}</span></td>
                        <td class="loe" ondblclick="editLOE(${task.id})">
                            ${task.days}d
                            <div class="hours-estimate">${task.hours}h</div>
                        </td>
                        <td class="deadline ${
                            overdue && task.status !== "completed"
                                ? "overdue-date"
                                : ""
                        }" ondblclick="editDeadline(${task.id})">${formatDate(
            task.deadline
        )}</td>
                        <td><span class="status ${displayStatus}" onclick="cycleStatus(${
            task.id
        })">${capitalizeFirst(displayStatus)}</span></td>
                        <td class="task-actions">
                            <button class="action-btn edit-btn" onclick="editTask(${
                                task.id
                            })">✏️ Edit</button>
                            <button class="action-btn delete-btn" onclick="deleteTask(${
                                task.id
                            })">🗑️ Delete</button>
                        </td>
                    `;
        tbody.appendChild(tr);
    });

    updateStats();
}

// Drag and drop handlers
let draggedElement = null;

function handleDragStart(e) {
    draggedElement = this;
    this.classList.add("dragging");
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", this.innerHTML);
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.dataTransfer.dropEffect = "move";

    if (this !== draggedElement) {
        this.classList.add("drag-over");
    }
    return false;
}

function handleDragLeave(e) {
    this.classList.remove("drag-over");
}

function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }

    if (draggedElement !== this) {
        const draggedIndex = parseInt(draggedElement.dataset.index);
        const targetIndex = parseInt(this.dataset.index);

        // Reorder tasks array
        const draggedTask = tasks[draggedIndex];
        tasks.splice(draggedIndex, 1);
        tasks.splice(targetIndex, 0, draggedTask);

        saveToStorage();
        renderTable();
    }

    return false;
}

function handleDragEnd(e) {
    this.classList.remove("dragging");

    // Remove all drag-over classes
    document.querySelectorAll(".drag-over").forEach((el) => {
        el.classList.remove("drag-over");
    });
}

// Capitalize first letter
function capitalizeFirst(str) {
    return str
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

// Cycle status
function cycleStatus(taskId) {
    const task = tasks.find((t) => t.id === taskId);
    if (!task) return;

    const statuses = ["pending", "in-progress", "completed"];
    const currentIndex = statuses.indexOf(task.status);
    task.status = statuses[(currentIndex + 1) % statuses.length];

    saveToStorage();
    renderTable();
}

// Cycle assignee
function cycleAssignee(taskId) {
    const task = tasks.find((t) => t.id === taskId);
    if (!task) return;

    const assignees = ["malik", "muhammad", "both"];
    const currentIndex = assignees.indexOf(task.assignee);
    task.assignee = assignees[(currentIndex + 1) % assignees.length];

    saveToStorage();
    renderTable();
}

// Edit description
function editDesc(taskId) {
    const task = tasks.find((t) => t.id === taskId);
    if (!task) return;

    const newDesc = prompt("Edit task description:", task.desc);
    if (newDesc !== null && newDesc.trim() !== "") {
        task.desc = newDesc.trim();
        saveToStorage();
        renderTable();
    }
}

// Edit LOE
function editLOE(taskId) {
    const task = tasks.find((t) => t.id === taskId);
    if (!task) return;

    const newDays = prompt("Enter days:", task.days);
    const newHours = prompt("Enter hours:", task.hours);

    if (newDays !== null && !isNaN(newDays)) {
        task.days = parseInt(newDays);
    }
    if (newHours !== null && !isNaN(newHours)) {
        task.hours = parseInt(newHours);
    }

    saveToStorage();
    renderTable();
}

// Edit deadline
function editDeadline(taskId) {
    const task = tasks.find((t) => t.id === taskId);
    if (!task) return;

    const newDeadline = prompt("Enter deadline (YYYY-MM-DD):", task.deadline);
    if (newDeadline !== null && newDeadline.match(/^\d{4}-\d{2}-\d{2}$/)) {
        task.deadline = newDeadline;
        saveToStorage();
        renderTable();
    }
}

// Edit entire task
function editTask(taskId) {
    const task = tasks.find((t) => t.id === taskId);
    if (!task) return;

    const newDesc = prompt("Task description:", task.desc);
    if (newDesc !== null && newDesc.trim() !== "") {
        task.desc = newDesc.trim();
    }

    const newDeps = prompt("Dependencies:", task.deps);
    if (newDeps !== null) {
        task.deps = newDeps.trim() || "—";
    }

    const newDays = prompt("Days:", task.days);
    if (newDays !== null && !isNaN(newDays)) {
        task.days = parseInt(newDays);
    }

    const newHours = prompt("Hours:", task.hours);
    if (newHours !== null && !isNaN(newHours)) {
        task.hours = parseInt(newHours);
    }

    const newDeadline = prompt("Deadline (YYYY-MM-DD):", task.deadline);
    if (newDeadline !== null && newDeadline.match(/^\d{4}-\d{2}-\d{2}$/)) {
        task.deadline = newDeadline;
    }

    saveToStorage();
    renderTable();
}

// Delete task
function deleteTask(taskId) {
    const task = tasks.find((t) => t.id === taskId);
    if (!task) return;

    if (
        confirm(
            `Are you sure you want to delete task #${task.id}?\n\n"${task.desc}"`
        )
    ) {
        tasks = tasks.filter((t) => t.id !== taskId);
        saveToStorage();
        renderTable();
    }
}

// Export data
function exportData() {
    const dataStr = JSON.stringify(tasks, null, 2);
    const dataBlob = new Blob([dataStr], {
        type: "application/json",
    });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download =
        "tasking-plan-" + new Date().toISOString().split("T")[0] + ".json";
    link.click();
    URL.revokeObjectURL(url);
}

// Import data
function importData() {
    document.getElementById("import-modal").classList.add("active");
}

function closeImportModal() {
    document.getElementById("import-modal").classList.remove("active");
    document.getElementById("import-textarea").value = "";
}

function confirmImport() {
    const data = document.getElementById("import-textarea").value;
    try {
        const imported = JSON.parse(data);
        if (Array.isArray(imported) && imported.length > 0) {
            tasks = imported;
            saveToStorage();
            renderTable();
            closeImportModal();
            alert("Tasks imported successfully!");
        } else {
            alert("Invalid data format");
        }
    } catch (e) {
        alert("Error parsing JSON: " + e.message);
    }
}

// Add new task
function addNewTask() {
    const newId = Math.max(...tasks.map((t) => t.id)) + 1;
    const desc = prompt("Enter task description:");
    if (desc === null || desc.trim() === "") return;

    const newTask = {
        id: newId,
        desc: desc.trim(),
        deps: "—",
        assignee: "both",
        days: 1,
        hours: 8,
        deadline: new Date().toISOString().split("T")[0],
        status: "pending",
    };

    tasks.push(newTask);
    saveToStorage();
    renderTable();
}

// Render upcoming tasks
function renderUpcomingTasks() {
    const upcomingContainer = document.getElementById("upcoming-tasks");

    // Get tasks that are not completed and sort by deadline
    const upcomingTasks = tasks
        .filter((t) => t.status !== "completed")
        .map((t) => ({
            ...t,
            daysUntil: daysUntilDeadline(t.deadline),
        }))
        .filter((t) => t.daysUntil >= 0 && t.daysUntil <= 7) // Next 7 days
        .sort((a, b) => a.daysUntil - b.daysUntil);

    if (upcomingTasks.length === 0) {
        upcomingContainer.innerHTML =
            '<p style="color: #999; text-align: center; padding: 20px;">No upcoming deadlines in the next 7 days! 🎉</p>';
        return;
    }

    upcomingContainer.innerHTML = upcomingTasks
        .map((task, index) => {
            const displayNumber = tasks.indexOf(task) + 1;
            let urgencyClass = "soon";
            let daysText = "";

            if (task.daysUntil === 0) {
                urgencyClass = "critical";
                daysText = "Due Today!";
            } else if (task.daysUntil === 1) {
                urgencyClass = "critical";
                daysText = "Due Tomorrow";
            } else if (task.daysUntil <= 3) {
                urgencyClass = "warning";
                daysText = `${task.daysUntil} days`;
            } else {
                urgencyClass = "soon";
                daysText = `${task.daysUntil} days`;
            }

            return `
                        <div class="upcoming-item ${urgencyClass}">
                            <div class="upcoming-item-header">
                                <span class="upcoming-item-id">Task #${displayNumber}</span>
                                <span class="upcoming-item-days ${urgencyClass}">${daysText}</span>
                            </div>
                            <div class="upcoming-item-desc">${task.desc}</div>
                            <div class="upcoming-item-meta">
                                <span>${capitalizeFirst(task.assignee)}</span>
                                <span>${formatDate(task.deadline)}</span>
                            </div>
                        </div>
                    `;
        })
        .join("");
}

// Email notification modal and functionality
function toggleEmailNotifications() {
    const email = localStorage.getItem("notificationEmail");

    if (email) {
        if (
            confirm(
                `Email alerts are currently set for: ${email}\n\nDo you want to remove email notifications?`
            )
        ) {
            localStorage.removeItem("notificationEmail");
            alert("Email notifications disabled");
        }
    } else {
        const newEmail = prompt(
            "Enter your email to receive deadline reminders:"
        );
        if (newEmail && newEmail.includes("@")) {
            localStorage.setItem("notificationEmail", newEmail);

            // Check if EmailJS is configured
            if (EMAILJS_CONFIG.publicKey === "YOUR_PUBLIC_KEY") {
                alert(
                    `Email stored: ${newEmail}\n\n⚠️ EmailJS not configured yet!\n\nTo enable email delivery:\n1. Go to https://www.emailjs.com/\n2. Create free account\n3. Add your credentials to the code\n\nFor now, you'll get browser notifications only.`
                );
            } else {
                alert(
                    `Email notifications enabled for ${newEmail}\n\nYou'll receive emails when tasks are due soon!`
                );
            }

            // Check for upcoming deadlines and send notification
            checkAndNotify();
        } else if (newEmail) {
            alert("Please enter a valid email address");
        }
    }
}

// Send email via EmailJS
async function sendEmailNotification(email, upcomingTasks) {
    // Check if EmailJS is configured
    if (EMAILJS_CONFIG.publicKey === "YOUR_PUBLIC_KEY") {
        console.log("EmailJS not configured. Skipping email send.");
        return false;
    }

    try {
        // Format task list for email
        const taskList = upcomingTasks
            .map((t) => {
                const displayNumber = tasks.indexOf(t) + 1;
                const daysText =
                    t.daysUntil === 0
                        ? "TODAY"
                        : t.daysUntil === 1
                        ? "TOMORROW"
                        : `in ${t.daysUntil} days`;
                return `
Task #${displayNumber}: ${t.desc.substring(0, 100)}
Assigned to: ${capitalizeFirst(t.assignee)}
Deadline: ${formatDate(t.deadline)} (${daysText})
Status: ${capitalizeFirst(t.status)}
---`;
            })
            .join("\n\n");

        // Email template parameters
        const templateParams = {
            to_email: email,
            to_name: email.split("@")[0],
            task_count: upcomingTasks.length,
            task_list: taskList,
            urgent_count: upcomingTasks.filter((t) => t.daysUntil <= 1).length,
            current_date: new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            }),
        };

        // Send email
        const response = await emailjs.send(
            EMAILJS_CONFIG.serviceId,
            EMAILJS_CONFIG.templateId,
            templateParams
        );

        console.log("Email sent successfully!", response.status, response.text);
        return true;
    } catch (error) {
        console.error("Failed to send email:", error);
        return false;
    }
}

// Check and notify about upcoming deadlines
async function checkAndNotify() {
    const email = localStorage.getItem("notificationEmail");
    if (!email) return;

    const upcomingTasks = tasks
        .filter((t) => t.status !== "completed")
        .map((t) => ({
            ...t,
            daysUntil: daysUntilDeadline(t.deadline),
        }))
        .filter((t) => t.daysUntil >= 0 && t.daysUntil <= 3);

    if (upcomingTasks.length > 0) {
        const message =
            `You have ${upcomingTasks.length} task(s) due soon:\n\n` +
            upcomingTasks
                .map((t) => {
                    const displayNumber = tasks.indexOf(t) + 1;
                    const daysText =
                        t.daysUntil === 0
                            ? "TODAY"
                            : t.daysUntil === 1
                            ? "TOMORROW"
                            : `in ${t.daysUntil} days`;
                    return `• Task #${displayNumber}: Due ${daysText}\n  ${t.desc.substring(
                        0,
                        60
                    )}...`;
                })
                .join("\n\n");

        console.log("Upcoming deadline reminder:", message);

        // Browser notification (if user has granted permission)
        if ("Notification" in window && Notification.permission === "granted") {
            new Notification("Task Deadlines Approaching!", {
                body: `You have ${upcomingTasks.length} task(s) due soon. Check your task manager!`,
                icon: "📋",
            });
        }

        // Send email notification
        const emailSent = await sendEmailNotification(email, upcomingTasks);
        if (emailSent) {
            console.log(`Email notification sent to ${email}`);
        }
    }
}

// Check notifications on load
function initNotifications() {
    const email = localStorage.getItem("notificationEmail");
    if (email) {
        // Request browser notification permission
        if ("Notification" in window && Notification.permission === "default") {
            Notification.requestPermission();
        }
        // Check once on load
        checkAndNotify();
    }
}

// Reset to default data
function resetToDefault() {
    if (
        confirm(
            "This will reset all tasks to default with reduced hours. Your changes will be lost. Continue?"
        )
    ) {
        localStorage.removeItem("taskingPlan");
        location.reload();
    }
}

// Initialize
loadFromStorage();
renderTable();
initNotifications();
