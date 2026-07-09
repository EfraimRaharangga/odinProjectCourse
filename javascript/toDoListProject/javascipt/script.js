import StorageManager from "./storageClass.js";
import Task from "./taskClass.js";
import TaskManager from "./taskManager.js";
import renderTasks from "./renderTaskFunc.js";
import LabelManagerClass from "./labelManagerClass.js";

// Initialize data layer
const Storage = new StorageManager();
const taskManager = new TaskManager(Storage);
const labelManager = new LabelManagerClass();
labelManager.addLabel('Default');

// State
let currentActiveLabel = 'All';

// DOM Elements
const addTaskBtn = document.getElementById('addTask');
const modalOverlay = document.getElementById('modalOverlay');
const closeModalBtn = document.getElementById('closeModal');
const cancelBtn = document.getElementById('cancelBtn');
const taskForm = document.getElementById('taskForm');
const taskContainer = document.getElementById('taskContainer');

const addNewLabelBtn = document.getElementById('addNewLabel');
const labelModalOverlay = document.getElementById('labelModalOverlay');
const closeLabelModalBtn = document.getElementById('closeLabelModal');
const cancelLabelBtn = document.getElementById('cancelLabelBtn');
const labelForm = document.getElementById('labelForm');
const labelList = document.getElementById('label-list');
const allTasksNav = document.getElementById('allTasksNav');
const allTaskCount = document.getElementById('allTaskCount');
const taskLabelSelect = document.getElementById('taskLabelSelect');

// Update UI Wrapper
function updateUI() {
    renderTasks(taskManager, taskContainer, currentActiveLabel, updateUI);
    renderLabels();
    updateLabelDropdown();
    updateAllCount();
}

// Populate Task Label Dropdown
function updateLabelDropdown() {
    taskLabelSelect.innerHTML = '';
    const labels = labelManager.showClass();
    
    labels.forEach(labelItem => {
        const option = document.createElement('option');
        option.value = labelItem.name;
        option.textContent = labelItem.name;
        
        // Auto-select the current label in the dropdown if it's not 'All'
        if (currentActiveLabel !== 'All' && currentActiveLabel === labelItem.name) {
            option.selected = true;
        }
        
        taskLabelSelect.appendChild(option);
    });
}

// Update "All" tasks count
function updateAllCount() {
    const totalTasks = taskManager.showTask().length;
    allTaskCount.textContent = totalTasks;
    
    if (currentActiveLabel === 'All') {
        allTasksNav.classList.add('active');
    } else {
        allTasksNav.classList.remove('active');
    }
}

allTasksNav.addEventListener('click', () => {
    currentActiveLabel = 'All';
    updateUI();
});

// Render Labels in Sidebar
function renderLabels() {
    labelList.innerHTML = '';
    const labels = labelManager.showClass();
    
    labels.forEach(labelItem => {
        const li = document.createElement('li');
        li.textContent = labelItem.name;
        
        // Active state styling
        if (currentActiveLabel === labelItem.name) {
            li.classList.add('active');
        }
        
        li.addEventListener('click', () => {
            currentActiveLabel = labelItem.name;
            updateUI();
        });
        
        labelList.appendChild(li);
    });
}


// Task Modal Logic
function openModal() {
    updateLabelDropdown(); // ensure dropdown defaults correctly right before opening
    modalOverlay.classList.add('active');
}

function closeModal() {
    modalOverlay.classList.remove('active');
    taskForm.reset(); 
}

addTaskBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
cancelBtn.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});

// Task Form Submit
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const desc = document.getElementById('desc').value;
    const done = document.getElementById('done').checked;
    
    // Assign to selected label from dropdown
    const labelToAssign = taskLabelSelect.value;

    taskManager.addTask(title, desc, date, done, labelToAssign);
    updateUI();
    closeModal();
});


// Label Modal Logic
function openLabelModal() {
    labelModalOverlay.classList.add('active');
}

function closeLabelModal() {
    labelModalOverlay.classList.remove('active');
    labelForm.reset();
}

addNewLabelBtn.addEventListener('click', openLabelModal);
closeLabelModalBtn.addEventListener('click', closeLabelModal);
cancelLabelBtn.addEventListener('click', closeLabelModal);

labelModalOverlay.addEventListener('click', (e) => {
    if (e.target === labelModalOverlay) closeLabelModal();
});

// Label Form Submit
labelForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const labelName = document.getElementById('labelName').value.trim();

    if (labelName) {
        labelManager.addLabel(labelName);
        currentActiveLabel = labelName; // Switch to the new label
        updateUI();
        closeLabelModal();
    }
});

// Initial render
updateUI();