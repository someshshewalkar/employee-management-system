// create a json data of 5 employees, each employee contains id and email and password make sure to give them password 123, do one more thing create another json data of 1 admin with same properties
// do one thing ,give each employee a task array with 3-10 task with properites like ActiveXObject(true of false),new task(true or false),complete(true or false),failed(true or false), and task title , task discripation, task date,category

const employees = [
    {
      id: 1,
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          complete: false,
          failed: false,
          title: "Task 1",
          description: "Description for Task 1",
          date: "2024-10-01",
          category: "Development"
        },
        {
          active: false,
          newTask: false,
          complete: true,
          failed: false,
          title: "Task 2",
          description: "Description for Task 2",
          date: "2024-10-05",
          category: "Testing"
        },
        {
          active: true,
          newTask: true,
          complete: false,
          failed: true,
          title: "Task 3",
          description: "Description for Task 3",
          date: "2024-10-10",
          category: "Deployment"
        }
      ]
    },
    {
      id: 2,
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          active: false,
          newTask: true,
          complete: false,
          failed: false,
          title: "Task A",
          description: "Description for Task A",
          date: "2024-10-02",
          category: "Research"
        },
        {
          active: true,
          newTask: false,
          complete: false,
          failed: false,
          title: "Task B",
          description: "Description for Task B",
          date: "2024-10-07",
          category: "Design"
        },
        {
          active: true,
          newTask: true,
          complete: true,
          failed: false,
          title: "Task C",
          description: "Description for Task C",
          date: "2024-10-12",
          category: "Analysis"
        }
      ]
    },
    {
      id: 3,
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          active: false,
          newTask: false,
          complete: false,
          failed: true,
          title: "Task X",
          description: "Description for Task X",
          date: "2024-10-03",
          category: "Documentation"
        },
        {
          active: true,
          newTask: true,
          complete: true,
          failed: false,
          title: "Task Y",
          description: "Description for Task Y",
          date: "2024-10-08",
          category: "Implementation"
        },
        {
          active: false,
          newTask: false,
          complete: false,
          failed: false,
          title: "Task Z",
          description: "Description for Task Z",
          date: "2024-10-14",
          category: "Review"
        }
      ]
    },
    {
      id: 4,
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          complete: false,
          failed: false,
          title: "Task 4",
          description: "Description for Task 4",
          date: "2024-10-04",
          category: "Planning"
        },
        {
          active: false,
          newTask: false,
          complete: true,
          failed: false,
          title: "Task 5",
          description: "Description for Task 5",
          date: "2024-10-09",
          category: "Execution"
        },
        {
          active: true,
          newTask: true,
          complete: false,
          failed: false,
          title: "Task 6",
          description: "Description for Task 6",
          date: "2024-10-13",
          category: "Monitoring"
        }
      ]
    },
    {
      id: 5,
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          active: false,
          newTask: true,
          complete: false,
          failed: false,
          title: "Task M",
          description: "Description for Task M",
          date: "2024-10-06",
          category: "Training"
        },
        {
          active: true,
          newTask: false,
          complete: false,
          failed: false,
          title: "Task N",
          description: "Description for Task N",
          date: "2024-10-11",
          category: "Support"
        },
        {
          active: true,
          newTask: true,
          complete: false,
          failed: true,
          title: "Task O",
          description: "Description for Task O",
          date: "2024-10-15",
          category: "Feedback"
        }
      ]
    }
  ];
  
  const admin = {
    id: 1,
    email: "admin@example.com",
    password: "123"
  };

  
  export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));

    
  };
  

  export const getLocalStorage=()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return {employees,admin}

    
  }