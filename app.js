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

// Sprint end dates mapping
const SPRINT_END_DATES = {
    1: "2025-10-08",
    2: "2025-10-17",
    3: "2025-10-31",
    4: "2025-11-14",
    5: "2025-11-28",
    6: "2025-12-05",
};

// Calculate sprint start date (assume 2-week sprints, start = end - 13 days)
function getSprintStartDate(sprintNum) {
    if (!SPRINT_END_DATES[sprintNum]) return "";
    const endDate = new Date(SPRINT_END_DATES[sprintNum]);
    endDate.setDate(endDate.getDate() - 13); // 2 weeks = 14 days, so start is 13 days before
    return endDate.toISOString().split("T")[0];
}

// Initial task data
let tasks = [
    // Sprint 1: Setup team practices and apply repository management practices (Oct 1-8)
    {
        id: -10,
        desc: "Define team decision-making framework: Establish how team makes decisions, define team roles and role rotation plan, establish team norms and communication protocols.",
        deps: "—",
        assignee: "both",
        days: 1,
        hours: 3,
        deadline: "2025-10-02",
        sprint: 1,
        status: "completed",
        group: "",
        parentId: null,
        priority: "high",
        requirement: "must-have",
        sprintStart: getSprintStartDate(1),
        actualHours: null,
    },
    {
        id: -9,
        desc: "Set up branch management: Use branch management techniques to separate developer efforts and separate requirement tasks. Create branch naming conventions and workflow.",
        deps: "1.1",
        assignee: "both",
        days: 1,
        hours: 2,
        deadline: "2025-10-03",
        sprint: 1,
        status: "completed",
        group: "",
        parentId: null,
        priority: "high",
        requirement: "must-have",
        sprintStart: getSprintStartDate(1),
        actualHours: null,
    },
    {
        id: -8,
        desc: "Enforce pull requests to main branch: Set up pull request requirements to enforce clean, linear history. Configure branch protection rules and PR review process (continuous integration).",
        deps: "1.2",
        assignee: "both",
        days: 1,
        hours: 2,
        deadline: "2025-10-04",
        sprint: 1,
        status: "completed",
        group: "",
        parentId: null,
        priority: "high",
        requirement: "must-have",
        sprintStart: getSprintStartDate(1),
        actualHours: null,
    },
    {
        id: -7,
        desc: "Configure Android linting/building tools: Set up Android linting and building tools to enforce each release proven to meet defined build requirements (continuous deployment).",
        deps: "1.3",
        assignee: "both",
        days: 1,
        hours: 3,
        deadline: "2025-10-05",
        sprint: 1,
        status: "completed",
        group: "",
        parentId: null,
        priority: "high",
        requirement: "must-have",
        sprintStart: getSprintStartDate(1),
        actualHours: null,
    },
    {
        id: -6,
        desc: "Set up semantic versioning and releases: Create releases from passing, approved and reviewed pull requests pushes to main. Establish semantic versioning scheme and release process.",
        deps: "1.4",
        assignee: "both",
        days: 1,
        hours: 2,
        deadline: "2025-10-08",
        sprint: 1,
        status: "completed",
        group: "",
        parentId: null,
        priority: "high",
        requirement: "must-have",
        sprintStart: getSprintStartDate(1),
        actualHours: null,
    },
    // Sprint 2: Propose and scope your project (Oct 9-17)
    {
        id: -5,
        desc: "Requirements analysis: Determine what exactly your project is for and what it will be. Document project purpose, target users, and core objectives.",
        deps: "—",
        assignee: "both",
        days: 2,
        hours: 6,
        deadline: "2025-10-11",
        sprint: 2,
        status: "completed",
        group: "",
        parentId: null,
        priority: "high",
        requirement: "must-have",
        sprintStart: getSprintStartDate(2),
        actualHours: null,
    },
    {
        id: -4,
        desc: "Feature planning and roadmap: Determine what features to implement, publish a road map for implementing them. Prioritize features and create timeline.",
        deps: "2.1",
        assignee: "both",
        days: 2,
        hours: 6,
        deadline: "2025-10-13",
        sprint: 2,
        status: "completed",
        group: "",
        parentId: null,
        priority: "high",
        requirement: "must-have",
        sprintStart: getSprintStartDate(2),
        actualHours: null,
    },
    {
        id: -3,
        desc: "Design and architecture planning: Design system architecture, plan for how features interact, and create technical design documents.",
        deps: "2.2",
        assignee: "both",
        days: 2,
        hours: 6,
        deadline: "2025-10-15",
        sprint: 2,
        status: "completed",
        group: "",
        parentId: null,
        priority: "high",
        requirement: "must-have",
        sprintStart: getSprintStartDate(2),
        actualHours: null,
    },
    {
        id: -2,
        desc: "Risk analysis and contingency planning: Plan for contingencies and how they interact. Identify risks, mitigation strategies, and backup plans.",
        deps: "2.3",
        assignee: "both",
        days: 1,
        hours: 4,
        deadline: "2025-10-17",
        sprint: 2,
        status: "completed",
        group: "",
        parentId: null,
        priority: "high",
        requirement: "must-have",
        sprintStart: getSprintStartDate(2),
        actualHours: null,
    },
    // Original tasks start here
    {
        id: 1,
        desc: "Verify project setup & tooling: Confirm repo structure, Gradle sync, Hilt configuration, Supabase SDK integration.",
        deps: "—",
        assignee: "both",
        days: 1,
        hours: 5,
        deadline: "2025-10-25",
        sprint: 3,
        status: "completed",
        group: "1",
        parentId: null,
        priority: "medium",
        requirement: "must-have",
        sprintStart: getSprintStartDate(3),
        actualHours: null,
    },
    {
        id: 2,
        desc: "Configure navigation with NavGraph and Route sealed class in ui/navigation/",
        deps: "1",
        assignee: "muhammad",
        days: 1,
        hours: 4,
        deadline: "2025-10-26",
        sprint: 3,
        status: "completed",
        group: "2",
        parentId: null,
        priority: "medium",
        requirement: "must-have",
        sprintStart: getSprintStartDate(3),
        actualHours: null,
    },
    {
        id: 3,
        desc: "Landing Screen: Branding display with Continue button, navigation to Login/Register flow.",
        deps: "1",
        assignee: "malik",
        days: 1,
        hours: 5,
        deadline: "2025-10-27",
        sprint: 3,
        status: "completed",
        group: "3",
        parentId: null,
        priority: "medium",
        requirement: "must-have",
        sprintStart: getSprintStartDate(3),
        actualHours: null,
    },
    {
        id: 4,
        desc: "Setup Hilt DI modules: Create MenuPlusApplication with @HiltAndroidApp, implement NetworkModule and RepositoryModule in di/",
        deps: "1",
        assignee: "muhammad",
        days: 1,
        hours: 4,
        deadline: "2025-10-28",
        sprint: 3,
        status: "completed",
        group: "4",
        parentId: null,
        priority: "medium",
        requirement: "must-have",
        sprintStart: getSprintStartDate(3),
        actualHours: null,
    },
    {
        id: 5,
        desc: "Supabase client setup: Implement SupabaseClientProvider in data/remote/supabase/, configure auth with auto-refresh and database connections.",
        deps: "4",
        assignee: "muhammad",
        days: 1,
        hours: 6,
        deadline: "2025-10-29",
        sprint: 3,
        status: "completed",
        group: "5",
        parentId: null,
        priority: "medium",
        requirement: "must-have",
        sprintStart: getSprintStartDate(3),
        actualHours: null,
    },
    {
        id: 6,
        desc: "Auth domain models: Create User and UserProfile domain models in domain/model/ with proper serialization.",
        deps: "5",
        assignee: "malik",
        days: 1,
        hours: 4,
        deadline: "2025-10-30",
        sprint: 3,
        status: "completed",
        group: "6",
        parentId: null,
        priority: "medium",
        requirement: "must-have",
        sprintStart: getSprintStartDate(3),
        actualHours: null,
    },
    {
        id: 7,
        desc: "Auth repository layer: Implement AuthRepository interface and AuthRepositoryImpl in data/repository/auth/, integrate with Supabase Auth service with Flow-based state observation.",
        deps: "3.5, 3.6",
        assignee: "muhammad",
        days: 1,
        hours: 5,
        deadline: "2025-10-31",
        sprint: 3,
        status: "completed",
        group: "7",
        parentId: null,
        priority: "medium",
        requirement: "must-have",
        sprintStart: getSprintStartDate(3),
        actualHours: null,
    },
    {
        id: 8,
        desc: "Auth use cases: Create LoginUseCase, RegisterUseCase, LogoutUseCase, ObserveAuthStateUseCase in domain/usecase/auth/ with proper error handling and validation.",
        deps: "7",
        assignee: "malik",
        days: 1,
        hours: 5,
        deadline: "2025-11-01",
        sprint: 4,
        status: "completed",
        group: "8",
        parentId: null,
        priority: "medium",
        requirement: "must-have",
        sprintStart: getSprintStartDate(4),
        actualHours: null,
    },
    {
        id: 9,
        desc: "Login/Register screens with ViewModels: Implement LoginScreen, LoginViewModel, LoginUiState and RegisterScreen, RegisterViewModel, RegisterUiState in ui/screens/auth/",
        deps: "4.1",
        assignee: "muhammad",
        days: 2,
        hours: 10,
        deadline: "2025-11-03",
        sprint: 4,
        status: "completed",
        group: "9",
        parentId: null,
        priority: "medium",
        requirement: "must-have",
        sprintStart: getSprintStartDate(4),
        actualHours: null,
    },
    {
        id: 10,
        desc: "App-level state management: Create MenuPlusAppViewModel with auth state observation, implement state-based navigation (Loading/NotAuthenticated/NeedsOnboarding/Authenticated).",
        deps: "4.1, 4.2",
        assignee: "malik",
        days: 1,
        hours: 4,
        deadline: "2025-11-04",
        sprint: 4,
        status: "completed",
        group: "10",
        parentId: null,
        priority: "medium",
        requirement: "must-have",
        sprintStart: getSprintStartDate(4),
        actualHours: null,
    },
    {
        id: 11,
        desc: "Fix authentication flicker bug: Add Loading state as initial value in StateFlow to prevent Landing page flash on app restart.",
        deps: "4.3",
        assignee: "malik",
        days: 0,
        hours: 2,
        deadline: "2025-11-04",
        sprint: 4,
        status: "completed",
        group: "11",
        parentId: null,
        priority: "high",
        requirement: "must-have",
        sprintStart: getSprintStartDate(4),
        actualHours: null,
    },
    {
        id: 12,
        desc: "Domain models for dietary profile: Create Language model in domain/model/, define list-based structure for allergies/restrictions/dislikes/preferences in UserProfile.",
        deps: "6",
        assignee: "muhammad",
        days: 1,
        hours: 3,
        deadline: "2025-11-05",
        sprint: 4,
        status: "completed",
        group: "12",
        parentId: null,
        priority: "medium",
        requirement: "must-have",
        sprintStart: getSprintStartDate(4),
        actualHours: null,
    },
    {
        id: 13,
        desc: "User profile DTOs and Supabase integration: Create UserProfileDto, LanguageDto in data/remote/supabase/dto/, implement Supabase PostgREST queries for profile CRUD and language lookup.",
        deps: "3.5, 4.5",
        assignee: "muhammad",
        days: 1,
        hours: 5,
        deadline: "2025-11-06",
        sprint: 4,
        status: "completed",
        group: "13",
        parentId: null,
        priority: "medium",
        requirement: "must-have",
        sprintStart: getSprintStartDate(4),
        actualHours: null,
    },
    {
        id: 14,
        desc: "User profile repository: Create UserProfileRepository interface and UserProfileRepositoryImpl in data/repository/profile/ with DTO-to-domain mapping.",
        deps: "4.6",
        assignee: "malik",
        days: 1,
        hours: 4,
        deadline: "2025-11-07",
        sprint: 4,
        status: "completed",
        group: "14",
        parentId: null,
        priority: "medium",
        requirement: "must-have",
        sprintStart: getSprintStartDate(4),
        actualHours: null,
    },
    {
        id: 15,
        desc: "User profile use cases: Create SaveUserProfileUseCase, GetAllLanguagesUseCase in domain/usecase/profile/ with validation and error handling.",
        deps: "4.7",
        assignee: "muhammad",
        days: 1,
        hours: 4,
        deadline: "2025-11-08",
        sprint: 4,
        status: "completed",
        group: "15",
        parentId: null,
        priority: "medium",
        requirement: "must-have",
        sprintStart: getSprintStartDate(4),
        actualHours: null,
    },
    {
        id: 16,
        desc: "Onboarding UI with ViewModel: Create OnboardingScreen, OnboardingViewModel, OnboardingUiState in ui/screens/onboarding/, implement language dropdown and color-coded tag chips (red=allergies, orange=restrictions, yellow=dislikes, green=preferences).",
        deps: "3.2, 4.2, 4.8",
        assignee: "malik",
        days: 2,
        hours: 12,
        deadline: "2025-11-10",
        sprint: 4,
        status: "completed",
        group: "16",
        parentId: null,
        priority: "medium",
        requirement: "must-have",
        sprintStart: getSprintStartDate(4),
        actualHours: null,
    },
    {
        id: 17,
        desc: "Bottom navigation & shared components: Implement BottomNavigationBar in ui/navigation/, create TopBar with settings icon in ui/components/",
        deps: "2",
        assignee: "malik",
        days: 1,
        hours: 4,
        deadline: "2025-11-11",
        sprint: 4,
        status: "completed",
        group: "17",
        parentId: null,
        priority: "medium",
        requirement: "must-have",
        sprintStart: getSprintStartDate(4),
        actualHours: null,
    },
    {
        id: 18,
        desc: "Google Cloud Vision API setup: Create VisionApi interface, VisionClient factory, VisionDtos (request/response models) in data/remote/vision/, configure Retrofit with API key interceptor and Moshi converter.",
        deps: "4",
        assignee: "muhammad",
        days: 1,
        hours: 5,
        deadline: "2025-11-12",
        sprint: 4,
        status: "completed",
        group: "18",
        parentId: null,
        priority: "medium",
        requirement: "must-have",
        sprintStart: getSprintStartDate(4),
        actualHours: null,
    },
    {
        id: 19,
        desc: "OCR repository layer: Create OcrRepository interface and OcrRepositoryImpl in data/repository/ocr/, implement DOCUMENT_TEXT_DETECTION feature for menu extraction.",
        deps: "4.11",
        assignee: "malik",
        days: 1,
        hours: 4,
        deadline: "2025-11-13",
        sprint: 4,
        status: "completed",
        group: "19",
        parentId: null,
        priority: "medium",
        requirement: "must-have",
        sprintStart: getSprintStartDate(4),
        actualHours: null,
    },
    {
        id: 20,
        desc: "Image encoding utilities: Implement ImageEncoding.uriToBase64() in util/ with proper EXIF orientation handling and Base64.NO_WRAP encoding.",
        deps: "1",
        assignee: "muhammad",
        days: 0,
        hours: 3,
        deadline: "2025-11-13",
        sprint: 4,
        status: "completed",
        group: "20",
        parentId: null,
        priority: "medium",
        requirement: "must-have",
        sprintStart: getSprintStartDate(4),
        actualHours: null,
    },
    {
        id: 21,
        desc: "OCR screen implementation: Create OcrScreen, OcrViewModel, OcrUiState in ui/screens/ocr/, implement image picker with camera permission handling, show extracted text preview.",
        deps: "4.10, 4.12, 4.13",
        assignee: "malik",
        days: 1,
        hours: 6,
        deadline: "2025-11-14",
        sprint: 4,
        status: "completed",
        group: "21",
        parentId: null,
        priority: "medium",
        requirement: "must-have",
        sprintStart: getSprintStartDate(4),
        actualHours: null,
    },
    {
        id: 22,
        desc: "Fix OCR silent failure bug: Add try-catch error handling in OcrViewModel to show user-friendly error message when image is unclear or OCR fails.",
        deps: "4.14",
        assignee: "malik",
        days: 0,
        hours: 2,
        deadline: "2025-11-14",
        sprint: 4,
        status: "completed",
        group: "22",
        parentId: null,
        priority: "high",
        requirement: "must-have",
        sprintStart: getSprintStartDate(4),
        actualHours: null,
    },
    {
        id: 23,
        desc: "Gemini API client setup: Create GeminiClient in data/remote/gemini/ using Firebase AI SDK, configure with gemini-2.5-flash model and GoogleAI backend.",
        deps: "4",
        assignee: "muhammad",
        days: 1,
        hours: 4,
        deadline: "2025-11-15",
        sprint: 5,
        status: "completed",
        group: "23",
        parentId: null,
        priority: "medium",
        requirement: "must-have",
        sprintStart: getSprintStartDate(5),
        actualHours: null,
    },
    {
        id: 24,
        desc: "Gemini prompt engineering: Implement buildMenuAnalysisPrompt() with structured user profile (allergies/restrictions/dislikes/preferences), menu text input, RED/YELLOW/GREEN classification instructions, and === SECTION MARKERS === for parsing.",
        deps: "5.1",
        assignee: "muhammad",
        days: 1,
        hours: 6,
        deadline: "2025-11-16",
        sprint: 5,
        status: "completed",
        group: "24",
        parentId: null,
        priority: "medium",
        requirement: "must-have",
        sprintStart: getSprintStartDate(5),
        actualHours: null,
    },
    {
        id: 25,
        desc: "Menu analysis use case: Create AnalyzeMenuUseCase in domain/usecase/menu/, orchestrate user profile fetch + Gemini API call with proper error handling.",
        deps: "4.8, 5.2",
        assignee: "malik",
        days: 1,
        hours: 4,
        deadline: "2025-11-17",
        sprint: 5,
        status: "completed",
        group: "25",
        parentId: null,
        priority: "medium",
        requirement: "must-have",
        sprintStart: getSprintStartDate(5),
        actualHours: null,
    },
    {
        id: 26,
        desc: "Create test survey form: Design anonymous feedback form asking about product confirmation, specific features/issues, usability, general feedback, and form quality. Include version number and date fields. Target 10-minute completion time.",
        deps: "—",
        assignee: "both",
        days: 1,
        hours: 4,
        deadline: "2025-11-18",
        sprint: 5,
        status: "pending",
        group: "26",
        parentId: null,
        priority: "medium",
        requirement: "must-have",
        sprintStart: getSprintStartDate(5),
        actualHours: null,
    },
    {
        id: 27,
        desc: "Import Menu screen - Loading state: Create ImportMenuScreen, ImportMenuViewModel, ImportMenuUiState in ui/screens/importmenu/, implement AnimatedMagnifyingGlass with infinite transition animations (float, scale, pulse).",
        deps: "4.10, 5.3",
        assignee: "malik",
        days: 2,
        hours: 8,
        deadline: "2025-11-19",
        sprint: 5,
        status: "completed",
        group: "27",
        parentId: null,
        priority: "medium",
        requirement: "must-have",
        sprintStart: getSprintStartDate(5),
        actualHours: null,
    },
    {
        id: 28,
        desc: "Initial prototype verification: Prepare partially functional early release build for Nov 21 deadline. Ensure testers can register, complete onboarding, capture menu image, and see AI analysis results (even if limited).",
        deps: "5.5",
        assignee: "both",
        days: 1,
        hours: 6,
        deadline: "2025-11-19",
        sprint: 5,
        status: "pending",
        group: "28",
        parentId: null,
        priority: "high",
        requirement: "must-have",
        sprintStart: getSprintStartDate(5),
        actualHours: null,
    },
    {
        id: 29,
        desc: "Import Menu screen - Results display: Implement TabRow with Safe Menu / Best Menu / Full Menu tabs, create separate content composables with color-coded cards (green/brown/grey).",
        deps: "5.5",
        assignee: "malik",
        days: 1,
        hours: 6,
        deadline: "2025-11-20",
        sprint: 5,
        status: "completed",
        group: "29",
        parentId: null,
        priority: "medium",
        requirement: "must-have",
        sprintStart: getSprintStartDate(5),
        actualHours: null,
    },
    {
        id: 30,
        desc: "Conduct preliminary testing: Send survey + early build to testers, give 5-minute walkthrough, collect preliminary feedback to revise survey form before Nov 21 submission.",
        deps: "5.4, 5.6",
        assignee: "both",
        days: 1,
        hours: 3,
        deadline: "2025-11-20",
        sprint: 5,
        status: "pending",
        group: "30",
        parentId: null,
        priority: "high",
        requirement: "must-have",
        sprintStart: getSprintStartDate(5),
        actualHours: null,
    },
    {
        id: 31,
        desc: "Gemini response parsing: Implement parseAnalysisResponse() in ImportMenuViewModel to extract content between === MARKERS ===, add fallback logic to show full response if parsing fails.",
        deps: "5.7",
        assignee: "muhammad",
        days: 1,
        hours: 4,
        deadline: "2025-11-21",
        sprint: 5,
        status: "completed",
        group: "31",
        parentId: null,
        priority: "medium",
        requirement: "must-have",
        sprintStart: getSprintStartDate(5),
        actualHours: null,
    },
    {
        id: 32,
        desc: "Fix Gemini parsing bug: Add try-catch with graceful degradation - if section parsing fails, return full response in all tabs instead of crashing.",
        deps: "5.9",
        assignee: "muhammad",
        days: 0,
        hours: 2,
        deadline: "2025-11-21",
        sprint: 5,
        status: "completed",
        group: "32",
        parentId: null,
        priority: "high",
        requirement: "must-have",
        sprintStart: getSprintStartDate(5),
        actualHours: null,
    },
    {
        id: 33,
        desc: "Submit test survey (Nov 21 deadline - 2%): Submit finalized feedback form and collection of anonymous responses gathered. No analysis required at this stage.",
        deps: "5.8",
        assignee: "both",
        days: 0,
        hours: 2,
        deadline: "2025-11-21",
        sprint: 5,
        status: "pending",
        group: "33",
        parentId: null,
        priority: "high",
        requirement: "must-have",
        sprintStart: getSprintStartDate(5),
        actualHours: null,
    },
    {
        id: 34,
        desc: "Settings screen: Create SettingsScreen, SettingsViewModel in ui/screens/settings/ with logout functionality and back navigation.",
        deps: "4.10",
        assignee: "malik",
        days: 0,
        hours: 3,
        deadline: "2025-11-22",
        sprint: 5,
        status: "completed",
        group: "34",
        parentId: null,
        priority: "low",
        requirement: "nice-to-have",
        sprintStart: getSprintStartDate(5),
        actualHours: null,
    },
    {
        id: 35,
        desc: "Profile screen placeholder: Create ProfileScreen.kt in ui/screens/profile/ with basic layout (future: implement profile editing).",
        deps: "4.10",
        assignee: "malik",
        days: 0,
        hours: 2,
        deadline: "2025-11-22",
        sprint: 5,
        status: "completed",
        group: "35",
        parentId: null,
        priority: "low",
        requirement: "nice-to-have",
        sprintStart: getSprintStartDate(5),
        actualHours: null,
    },
    {
        id: 36,
        desc: "Saved Menu screen placeholder: Create SavedMenuScreen.kt in ui/screens/savedmenu/ with basic layout (future: implement menu history).",
        deps: "4.10",
        assignee: "muhammad",
        days: 0,
        hours: 2,
        deadline: "2025-11-22",
        sprint: 5,
        status: "completed",
        group: "36",
        parentId: null,
        priority: "low",
        requirement: "nice-to-have",
        sprintStart: getSprintStartDate(5),
        actualHours: null,
    },
    {
        id: 37,
        desc: "Utility classes: Create Result sealed class (Success/Error/Loading) in util/ for type-safe async operations.",
        deps: "1",
        assignee: "both",
        days: 0,
        hours: 2,
        deadline: "2025-11-23",
        sprint: 5,
        status: "completed",
        group: "37",
        parentId: null,
        priority: "medium",
        requirement: "must-have",
        sprintStart: getSprintStartDate(5),
        actualHours: null,
    },
    {
        id: 38,
        desc: "Error handling UX: Implement error dialogs in all screens (auth, onboarding, OCR, import) with dismiss actions and user-friendly messages.",
        deps: "5.15",
        assignee: "malik",
        days: 1,
        hours: 4,
        deadline: "2025-11-24",
        sprint: 5,
        status: "completed",
        group: "38",
        parentId: null,
        priority: "medium",
        requirement: "must-have",
        sprintStart: getSprintStartDate(5),
        actualHours: null,
    },
    {
        id: 39,
        desc: "Code documentation: Add comprehensive KDoc comments to all ViewModels, repositories, use cases, and API clients explaining purpose, parameters, and return types.",
        deps: "All completed tasks",
        assignee: "both",
        days: 1,
        hours: 6,
        deadline: "2025-11-25",
        sprint: 5,
        status: "completed",
        group: "39",
        parentId: null,
        priority: "low",
        requirement: "nice-to-have",
        sprintStart: getSprintStartDate(5),
        actualHours: null,
    },
    {
        id: 40,
        desc: "Manual testing & bug fixes: Test complete user flow (register → onboarding → OCR → analysis), fix discovered issues (flicker bug, parsing fallback, OCR error handling).",
        deps: "5.17",
        assignee: "both",
        days: 1,
        hours: 8,
        deadline: "2025-11-26",
        sprint: 5,
        status: "completed",
        group: "40",
        parentId: null,
        priority: "high",
        requirement: "must-have",
        sprintStart: getSprintStartDate(5),
        actualHours: null,
    },
    {
        id: 41,
        desc: "README documentation: Update README.md with app description, tech stack, build instructions, team member info, and screenshots.",
        deps: "5.18",
        assignee: "malik",
        days: 0,
        hours: 3,
        deadline: "2025-11-27",
        sprint: 5,
        status: "completed",
        group: "41",
        parentId: null,
        priority: "low",
        requirement: "nice-to-have",
        sprintStart: getSprintStartDate(5),
        actualHours: null,
    },
    {
        id: 42,
        desc: "Presentation slides preparation: Create slides covering code structure, key issues encountered, risks addressed, and new risks identified based on current codebase analysis.",
        deps: "5.19",
        assignee: "both",
        days: 1,
        hours: 6,
        deadline: "2025-11-27",
        sprint: 5,
        status: "in-progress",
        group: "42",
        parentId: null,
        priority: "medium",
        requirement: "must-have",
        sprintStart: getSprintStartDate(5),
        actualHours: null,
    },
    {
        id: 43,
        desc: "Move API keys to secure storage: Remove hardcoded API keys from NetworkModule, implement BuildConfig or secure environment variable solution.",
        deps: "4",
        assignee: "malik",
        days: 0,
        hours: 3,
        deadline: "2025-11-29",
        sprint: 6,
        status: "pending",
        group: "43",
        parentId: null,
        priority: "high",
        requirement: "must-have",
        sprintStart: getSprintStartDate(6),
        actualHours: null,
    },
    {
        id: 44,
        desc: "API rate limiting: Implement request counter for Vision API and Gemini API, add user quotas, display warning when approaching limits.",
        deps: "4.12, 5.1",
        assignee: "muhammad",
        days: 1,
        hours: 5,
        deadline: "2025-11-30",
        sprint: 6,
        status: "pending",
        group: "44",
        parentId: null,
        priority: "medium",
        requirement: "nice-to-have",
        sprintStart: getSprintStartDate(6),
        actualHours: null,
    },
    {
        id: 45,
        desc: "Add restaurant context input: Implement text field in ImportMenuScreen or OcrScreen for users to provide additional context (e.g., 'restaurant is halal-certified', 'chef's special contains shellfish').",
        deps: "5.7",
        assignee: "malik",
        days: 1,
        hours: 4,
        deadline: "2025-12-01",
        sprint: 6,
        status: "pending",
        group: "45",
        parentId: null,
        priority: "low",
        requirement: "nice-to-have",
        sprintStart: getSprintStartDate(6),
        actualHours: null,
    },
    {
        id: 46,
        desc: "Implement API timeouts: Add 30-second timeout to Gemini API calls with retry logic and user-friendly timeout error message.",
        deps: "5.1",
        assignee: "muhammad",
        days: 0,
        hours: 3,
        deadline: "2025-12-01",
        sprint: 6,
        status: "pending",
        group: "46",
        parentId: null,
        priority: "medium",
        requirement: "must-have",
        sprintStart: getSprintStartDate(6),
        actualHours: null,
    },
    {
        id: 47,
        desc: "Profile editing: Implement full profile editing in ProfileScreen (update allergies/restrictions/dislikes/preferences/language after onboarding).",
        deps: "4.8",
        assignee: "malik",
        days: 1,
        hours: 6,
        deadline: "2025-12-01",
        sprint: 6,
        status: "pending",
        group: "47",
        parentId: null,
        priority: "medium",
        requirement: "must-have",
        sprintStart: getSprintStartDate(6),
        actualHours: null,
    },
    {
        id: 48,
        desc: "Performance optimization: Implement image compression before Base64 encoding, profile memory usage, optimize LazyColumn rendering for long menus.",
        deps: "4.13, 5.7",
        assignee: "muhammad",
        days: 1,
        hours: 6,
        deadline: "2025-12-02",
        sprint: 6,
        status: "pending",
        group: "48",
        parentId: null,
        priority: "medium",
        requirement: "nice-to-have",
        sprintStart: getSprintStartDate(6),
        actualHours: null,
    },
    {
        id: 49,
        desc: "Accessibility improvements: Add content descriptions, ensure 48dp touch targets, verify color contrast ratios, test with TalkBack.",
        deps: "All UI tasks",
        assignee: "both",
        days: 1,
        hours: 5,
        deadline: "2025-12-03",
        sprint: 6,
        status: "pending",
        group: "49",
        parentId: null,
        priority: "medium",
        requirement: "must-have",
        sprintStart: getSprintStartDate(6),
        actualHours: null,
    },
    {
        id: 50,
        desc: "Final QA & demo rehearsal: Regression testing, rehearse demo flow, record screen captures for backup.",
        deps: "5.20",
        assignee: "both",
        days: 2,
        hours: 8,
        deadline: "2025-12-05",
        sprint: 6,
        status: "pending",
        group: "50",
        parentId: null,
        priority: "high",
        requirement: "must-have",
        sprintStart: getSprintStartDate(6),
        actualHours: null,
    },
];

// Migration function to add new fields to existing tasks
function migrateTasks() {
    tasks.forEach((task) => {
        if (task.group === undefined) task.group = "";
        if (task.parentId === undefined) task.parentId = null;
        if (task.priority === undefined) task.priority = "medium";
        if (task.requirement === undefined) task.requirement = "must-have";
        if (task.sprintStart === undefined) task.sprintStart = "";
        if (task.actualHours === undefined) task.actualHours = null;
        if (task.sprint === undefined) task.sprint = null;
    });
}

// Assign sprint-based group numbers: {sprint}.{task_number_within_sprint}
// Reassigns all group numbers based on sprint and deadline order
function assignSprintBasedGroups() {
    // Group tasks by sprint
    const tasksBySprint = {};
    tasks.forEach((task) => {
        const sprint = task.sprint || 0;
        if (!tasksBySprint[sprint]) {
            tasksBySprint[sprint] = [];
        }
        tasksBySprint[sprint].push(task);
    });

    // For each sprint, sort by deadline and assign group numbers
    Object.keys(tasksBySprint)
        .sort((a, b) => Number(a) - Number(b))
        .forEach((sprint) => {
            // Sort tasks within sprint by deadline (or id as fallback)
            tasksBySprint[sprint].sort((a, b) => {
                if (a.deadline && b.deadline) {
                    return new Date(a.deadline) - new Date(b.deadline);
                }
                return a.id - b.id;
            });

            // Assign group numbers: sprint.taskNumber
            tasksBySprint[sprint].forEach((task, index) => {
                const taskNumber = index + 1;
                task.group = `${sprint}.${taskNumber}`;
            });
        });
}

// Grouping state
let isGroupingEnabled = false;

// Sort state
let currentSort = "group";

// Load from localStorage if exists
function loadFromStorage() {
    const saved = localStorage.getItem("taskingPlan");
    if (saved) {
        try {
            tasks = JSON.parse(saved);
            migrateTasks(); // Migrate old tasks
            assignSprintBasedGroups(); // Assign sprint-based group numbers
        } catch (e) {
            console.error("Error loading from storage:", e);
        }
    } else {
        migrateTasks(); // Migrate initial tasks
        assignSprintBasedGroups(); // Assign sprint-based group numbers
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

// Compare group numbers (e.g., "1" vs "1.1" vs "2.3")
function compareGroupNumbers(a, b) {
    const parseGroup = (group) => {
        if (!group) return [0];
        return group.split(".").map(Number);
    };

    const aParts = parseGroup(a);
    const bParts = parseGroup(b);
    const maxLen = Math.max(aParts.length, bParts.length);

    for (let i = 0; i < maxLen; i++) {
        const aVal = aParts[i] || 0;
        const bVal = bParts[i] || 0;
        if (aVal !== bVal) {
            return aVal - bVal;
        }
    }
    return 0;
}

// Get tasks grouped by parent, sorted by group number
function getGroupedTasks() {
    if (!isGroupingEnabled) return tasks;

    const groups = {};
    const topLevel = [];

    tasks.forEach((task) => {
        if (task.parentId) {
            if (!groups[task.parentId]) groups[task.parentId] = [];
            groups[task.parentId].push(task);
        } else {
            topLevel.push(task);
        }
    });

    // Sort top level by group number
    topLevel.sort((a, b) => compareGroupNumbers(a.group || "", b.group || ""));

    // Sort subtasks within each group
    Object.keys(groups).forEach((parentId) => {
        groups[parentId].sort((a, b) =>
            compareGroupNumbers(a.group || "", b.group || "")
        );
    });

    const result = [];
    topLevel.forEach((task) => {
        result.push(task);
        if (groups[task.id]) {
            groups[task.id].forEach((subtask) => result.push(subtask));
        }
    });
    return result;
}

// Apply sorting
function applySorting() {
    const sortSelect = document.getElementById("sort-select");
    currentSort = sortSelect.value;
    renderTable();
}

// Sort tasks based on current sort
function sortTasks(taskList) {
    const sorted = [...taskList];

    // If grouping is enabled, always sort by group first, then apply other sorting within groups
    if (isGroupingEnabled) {
        // Primary sort: by group number
        sorted.sort((a, b) => {
            const groupCompare = compareGroupNumbers(
                a.group || "",
                b.group || ""
            );
            if (groupCompare !== 0) return groupCompare;

            // Within the same group, respect parent-child relationship
            if (a.parentId && !b.parentId && a.parentId === b.id) return 1;
            if (b.parentId && !a.parentId && b.parentId === a.id) return -1;
            if (a.parentId === b.parentId) {
                // Both have same parent or both are top-level
                // Apply secondary sort based on currentSort
                return applySecondarySort(a, b);
            }
            return 0;
        });
        return sorted;
    }

    // When not grouped, apply normal sorting
    switch (currentSort) {
        case "deadline":
            sorted.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
            break;
        case "priority":
            const priorityOrder = { high: 3, medium: 2, low: 1 };
            sorted.sort(
                (a, b) =>
                    (priorityOrder[b.priority] || 0) -
                    (priorityOrder[a.priority] || 0)
            );
            break;
        case "status":
            const statusOrder = {
                completed: 3,
                "in-progress": 2,
                pending: 1,
                overdue: 0,
            };
            sorted.sort((a, b) => {
                const statusA =
                    a.status === "pending" && isOverdue(a.deadline, a.status)
                        ? "overdue"
                        : a.status;
                const statusB =
                    b.status === "pending" && isOverdue(b.deadline, b.status)
                        ? "overdue"
                        : b.status;
                return (
                    (statusOrder[statusB] || 0) - (statusOrder[statusA] || 0)
                );
            });
            break;
        case "assignee":
            sorted.sort((a, b) => a.assignee.localeCompare(b.assignee));
            break;
        case "requirement":
            sorted.sort((a, b) => a.requirement.localeCompare(b.requirement));
            break;
        case "sprintStart":
            sorted.sort((a, b) => {
                if (!a.sprintStart && !b.sprintStart) return 0;
                if (!a.sprintStart) return 1;
                if (!b.sprintStart) return -1;
                return new Date(a.sprintStart) - new Date(b.sprintStart);
            });
            break;
        case "id":
            sorted.sort((a, b) => a.id - b.id);
            break;
        case "group":
            // Sort by sprint first, then by group number
            sorted.sort((a, b) => {
                const sprintA = a.sprint || 0;
                const sprintB = b.sprint || 0;
                if (sprintA !== sprintB) {
                    return sprintA - sprintB;
                }
                return compareGroupNumbers(a.group || "", b.group || "");
            });
            break;
    }

    return sorted;
}

// Apply secondary sorting within groups
function applySecondarySort(a, b) {
    switch (currentSort) {
        case "deadline":
            return new Date(a.deadline) - new Date(b.deadline);
        case "priority":
            const priorityOrder = { high: 3, medium: 2, low: 1 };
            return (
                (priorityOrder[b.priority] || 0) -
                (priorityOrder[a.priority] || 0)
            );
        case "status":
            const statusOrder = {
                completed: 3,
                "in-progress": 2,
                pending: 1,
                overdue: 0,
            };
            const statusA =
                a.status === "pending" && isOverdue(a.deadline, a.status)
                    ? "overdue"
                    : a.status;
            const statusB =
                b.status === "pending" && isOverdue(b.deadline, b.status)
                    ? "overdue"
                    : b.status;
            return (statusOrder[statusB] || 0) - (statusOrder[statusA] || 0);
        case "assignee":
            return a.assignee.localeCompare(b.assignee);
        case "requirement":
            return a.requirement.localeCompare(b.requirement);
        case "sprintStart":
            if (!a.sprintStart && !b.sprintStart) return 0;
            if (!a.sprintStart) return 1;
            if (!b.sprintStart) return -1;
            return new Date(a.sprintStart) - new Date(b.sprintStart);
        default:
            return 0;
    }
}

// Toggle grouping
function toggleGrouping() {
    isGroupingEnabled = !isGroupingEnabled;
    const btn = document.getElementById("group-toggle");
    btn.textContent = isGroupingEnabled ? "📊 Ungroup" : "📊 Toggle Grouping";

    // When enabling grouping, default to group sort
    if (isGroupingEnabled && currentSort !== "group") {
        currentSort = "group";
        const sortSelect = document.getElementById("sort-select");
        if (sortSelect) sortSelect.value = "group";
    }

    renderTable();
}

// Render table
function renderTable() {
    const tbody = document.getElementById("task-table");
    tbody.innerHTML = "";

    // Get tasks (grouped or not)
    let taskList = isGroupingEnabled ? getGroupedTasks() : tasks;

    // Sort tasks
    const sortedTasks = sortTasks(taskList);

    sortedTasks.forEach((task, index) => {
        const overdue = isOverdue(task.deadline, task.status);
        const displayStatus =
            overdue && task.status !== "completed" ? "overdue" : task.status;

        const tr = document.createElement("tr");
        if (overdue && task.status !== "completed") {
            tr.classList.add("overdue-row");
        }
        if (task.parentId) {
            tr.classList.add("subtask-row");
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

        // Display number - show group number if it exists, otherwise show sequential number
        let displayNumber = task.group || (index + 1).toString();

        // If no group number but has parent, try to generate one
        if (!task.group && task.parentId) {
            const parent = tasks.find((t) => t.id === task.parentId);
            if (parent) {
                const siblingSubtasks = tasks
                    .filter((t) => t.parentId === task.parentId)
                    .sort((a, b) => {
                        // Sort by group if both have groups, otherwise by id
                        if (a.group && b.group)
                            return compareGroupNumbers(a.group, b.group);
                        return a.id - b.id;
                    });
                const subtaskIndex =
                    siblingSubtasks.findIndex((t) => t.id === task.id) + 1;
                displayNumber = `${parent.group || parent.id}.${subtaskIndex}`;
            }
        }

        // Format LOE / Actual
        const loeDisplay =
            task.status === "completed" && task.actualHours !== null
                ? `${task.hours}h / ${task.actualHours}h`
                : `${task.hours}h`;

        // Format sprint start
        const sprintStartDisplay = task.sprintStart
            ? formatDate(task.sprintStart)
            : "—";

        tr.innerHTML = `
                        <td class="drag-handle">⠿</td>
                        <td class="task-id">${displayNumber}</td>
                        <td class="task-desc ${
                            task.parentId ? "subtask-desc" : ""
                        }" ondblclick="editDesc(${task.id})">${task.desc}</td>
                        <td class="group-cell" ondblclick="editGroup(${
                            task.id
                        })">
                            ${
                                task.group ||
                                (task.parentId
                                    ? `→ ${
                                          tasks.find(
                                              (t) => t.id === task.parentId
                                          )?.group ||
                                          tasks.find(
                                              (t) => t.id === task.parentId
                                          )?.id ||
                                          ""
                                      }`
                                    : "—")
                            }
                        </td>
                        <td class="dependencies">${task.deps}</td>
                        <td><span class="assignee ${
                            task.assignee
                        }" onclick="cycleAssignee(${
            task.id
        })">${capitalizeFirst(task.assignee)}</span></td>
                        <td><span class="priority priority-${
                            task.priority
                        }" onclick="cyclePriority(${
            task.id
        })">${capitalizeFirst(task.priority)}</span></td>
                        <td class="loe" ondblclick="editLOE(${
                            task.id
                        })" title="Double-click to edit hours">
                            ${loeDisplay}
                        </td>
                        <td class="sprint-start" ondblclick="editSprintStart(${
                            task.id
                        })">
                            ${sprintStartDisplay}
                        </td>
                        <td class="deadline ${
                            overdue && task.status !== "completed"
                                ? "overdue-date"
                                : ""
                        }" ondblclick="editDeadline(${task.id})">${formatDate(
            task.deadline
        )}</td>
                        <td><span class="requirement requirement-${
                            task.requirement
                        }" onclick="cycleRequirement(${task.id})">${
            task.requirement === "must-have" ? "Must" : "Nice"
        }</span></td>
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
    const nextStatus = statuses[(currentIndex + 1) % statuses.length];

    // If marking as completed, prompt for actual hours
    if (nextStatus === "completed" && task.actualHours === null) {
        const actuals = prompt(
            `Enter actual hours spent (estimated: ${task.hours}h):`,
            task.hours
        );
        if (actuals !== null) {
            if (!isNaN(actuals) && actuals.trim() !== "") {
                task.actualHours = parseInt(actuals);
            }
        } else {
            return; // User cancelled
        }
    }

    task.status = nextStatus;
    saveToStorage();
    renderTable();
}

// Cycle priority
function cyclePriority(taskId) {
    const task = tasks.find((t) => t.id === taskId);
    if (!task) return;

    const priorities = ["low", "medium", "high"];
    const currentIndex = priorities.indexOf(task.priority);
    task.priority = priorities[(currentIndex + 1) % priorities.length];

    saveToStorage();
    renderTable();
}

// Cycle requirement
function cycleRequirement(taskId) {
    const task = tasks.find((t) => t.id === taskId);
    if (!task) return;

    task.requirement =
        task.requirement === "must-have" ? "nice-to-have" : "must-have";
    saveToStorage();
    renderTable();
}

// Edit group
function editGroup(taskId) {
    const task = tasks.find((t) => t.id === taskId);
    if (!task) return;

    const newGroup = prompt(
        "Enter group identifier (e.g., 1.1, 2.3) or leave empty:",
        task.group || ""
    );
    if (newGroup !== null) {
        task.group = newGroup.trim();
        saveToStorage();
        renderTable();
    }
}

// Edit sprint start
function editSprintStart(taskId) {
    const task = tasks.find((t) => t.id === taskId);
    if (!task) return;

    const newSprintStart = prompt(
        "Enter sprint start date (YYYY-MM-DD) or leave empty:",
        task.sprintStart || ""
    );
    if (newSprintStart !== null) {
        if (
            newSprintStart.trim() === "" ||
            newSprintStart.match(/^\d{4}-\d{2}-\d{2}$/)
        ) {
            task.sprintStart = newSprintStart.trim();
            saveToStorage();
            renderTable();
        } else {
            alert("Please enter a valid date (YYYY-MM-DD) or leave empty");
        }
    }
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

    const newHours = prompt("Enter hours:", task.hours);

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

    const newHours = prompt("Hours:", task.hours);
    if (newHours !== null && !isNaN(newHours)) {
        task.hours = parseInt(newHours);
    }

    const newDeadline = prompt("Deadline (YYYY-MM-DD):", task.deadline);
    if (newDeadline !== null && newDeadline.match(/^\d{4}-\d{2}-\d{2}$/)) {
        task.deadline = newDeadline;
    }

    const newGroup = prompt("Group identifier (e.g., 1.1):", task.group || "");
    if (newGroup !== null) {
        task.group = newGroup.trim();
    }

    const newPriority = prompt("Priority (low/medium/high):", task.priority);
    if (
        newPriority !== null &&
        ["low", "medium", "high"].includes(newPriority.toLowerCase())
    ) {
        task.priority = newPriority.toLowerCase();
    }

    const newRequirement = prompt(
        "Requirement (must-have/nice-to-have):",
        task.requirement
    );
    if (
        newRequirement !== null &&
        ["must-have", "nice-to-have"].includes(newRequirement.toLowerCase())
    ) {
        task.requirement = newRequirement.toLowerCase();
    }

    const newSprintStart = prompt(
        "Sprint start (YYYY-MM-DD or empty):",
        task.sprintStart || ""
    );
    if (newSprintStart !== null) {
        if (
            newSprintStart.trim() === "" ||
            newSprintStart.match(/^\d{4}-\d{2}-\d{2}$/)
        ) {
            task.sprintStart = newSprintStart.trim();
        }
    }

    if (task.status === "completed" && task.actualHours === null) {
        const actuals = prompt("Enter actual hours (or leave empty):", "");
        if (actuals !== null && actuals.trim() !== "" && !isNaN(actuals)) {
            task.actualHours = parseInt(actuals);
        }
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
            migrateTasks(); // Migrate imported tasks to include new fields
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
        days: 0,
        hours: 8,
        deadline: new Date().toISOString().split("T")[0],
        status: "pending",
        group: "",
        parentId: null,
        priority: "medium",
        requirement: "must-have",
        sprintStart: "",
        actualHours: null,
        sprint: null,
    };

    tasks.push(newTask);
    saveToStorage();
    renderTable();
}

// Add subtask
function addSubtask() {
    const taskIdStr = prompt("Enter parent task ID:");
    if (!taskIdStr) return;

    const parentId = parseInt(taskIdStr);
    const parent = tasks.find((t) => t.id === parentId);

    if (!parent) {
        alert("Parent task not found!");
        return;
    }

    const newId = Math.max(...tasks.map((t) => t.id)) + 1;
    const desc = prompt("Enter subtask description:");
    if (desc === null || desc.trim() === "") return;

    const newTask = {
        id: newId,
        desc: desc.trim(),
        deps: parentId.toString(),
        assignee: "both",
        days: 0,
        hours: 4,
        deadline: parent.deadline,
        status: "pending",
        group: "",
        parentId: parentId,
        priority: "medium",
        requirement: parent.requirement,
        sprintStart: parent.sprintStart || "",
        actualHours: null,
        sprint: parent.sprint || null,
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
        .filter((t) => t.daysUntil >= 0 && t.daysUntil <= 3) // Next 3 days
        .sort((a, b) => a.daysUntil - b.daysUntil);

    if (upcomingTasks.length === 0) {
        upcomingContainer.innerHTML =
            '<p style="color: #999; text-align: center; padding: 20px;">No upcoming deadlines in the next 3 days! 🎉</p>';
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

// Check if we should send email (prevent spam)
function shouldSendEmail() {
    const lastEmailSent = localStorage.getItem("lastEmailSent");
    if (!lastEmailSent) return true;

    const lastSentDate = new Date(lastEmailSent);
    const now = new Date();
    const hoursSinceLastEmail = (now - lastSentDate) / (1000 * 60 * 60);

    // Only send email once every 24 hours
    return hoursSinceLastEmail >= 24;
}

// Mark email as sent
function markEmailSent() {
    localStorage.setItem("lastEmailSent", new Date().toISOString());
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

        // Send email notification (but only once every 24 hours)
        if (shouldSendEmail()) {
            const emailSent = await sendEmailNotification(email, upcomingTasks);
            if (emailSent) {
                markEmailSent();
                console.log(`Email notification sent to ${email}`);
                console.log("Next email can be sent in 24 hours");
            }
        } else {
            const lastSent = new Date(localStorage.getItem("lastEmailSent"));
            console.log(
                `Email already sent recently (last sent: ${lastSent.toLocaleString()})`
            );
            console.log(
                "Email notifications are limited to once every 24 hours to prevent spam"
            );
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
// Set initial sort dropdown value
const sortSelect = document.getElementById("sort-select");
if (sortSelect) {
    sortSelect.value = currentSort;
}
renderTable();
initNotifications();
