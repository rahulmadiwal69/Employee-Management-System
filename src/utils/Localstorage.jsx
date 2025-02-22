
const employees = [
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "employee1@example.com",
    "password": "123",
    "taskNumber": {
      "active": 2,
      "new_task": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "title": "Complete Project Report",
        "description": "Finalize and submit the monthly project report.",
        "date": "2025-02-16",
        "category": "Documentation",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Code Review",
        "description": "Review the newly committed code changes.",
        "date": "2025-02-17",
        "category": "Development",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Bug Fixing",
        "description": "Fix the reported UI bugs on the dashboard.",
        "date": "2025-02-18",
        "category": "Development",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Vivaan",
    "email": "employee2@example.com",
    "password": "123",
    "taskNumber": {
      "active": 1,
      "new_task": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "title": "Client Meeting",
        "description": "Discuss project progress with the client.",
        "date": "2025-02-19",
        "category": "Meetings",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Database Backup",
        "description": "Ensure daily backup of database is completed.",
        "date": "2025-02-16",
        "category": "Maintenance",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Aditya",
    "email": "employee3@example.com",
    "password": "123",
    "taskNumber": {
      "active": 2,
      "new_task": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Security Audit",
        "description": "Perform a security audit for internal systems.",
        "date": "2025-02-20",
        "category": "Security",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Feature Testing",
        "description": "Test the newly developed feature before release.",
        "date": "2025-02-21",
        "category": "Quality Assurance",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Fix API Issues",
        "description": "Resolve API response time issues.",
        "date": "2025-02-22",
        "category": "Development",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Ishaan",
    "email": "employee4@example.com",
    "password": "123",
    "taskNumber": {
      "active": 1,
      "new_task": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Update Documentation",
        "description": "Revise and update user manuals.",
        "date": "2025-02-23",
        "category": "Documentation",
        "active": false,
        "new_task": true,
        "completed": false,
        "failed": true
      },
      {
        "title": "System Upgrade",
        "description": "Upgrade production servers to the latest version.",
        "date": "2025-02-24",
        "category": "Maintenance",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Performance Testing",
        "description": "Conduct performance tests on the new application.",
        "date": "2025-02-25",
        "category": "Quality Assurance",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Aryan",
    "email": "employee5@example.com",
    "password": "123",
    "taskNumber": {
      "active": 2,
      "new_task": 1,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "title": "Presentation Preparation",
        "description": "Prepare slides for the upcoming company meeting.",
        "date": "2025-02-26",
        "category": "Meetings",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Code Deployment",
        "description": "Deploy the latest software update.",
        "date": "2025-02-27",
        "category": "Development",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    ]
  }
];

const admin = [{
  "id": 1,
  "email": "admin@example.com",
  "password": "123"
}];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
}
