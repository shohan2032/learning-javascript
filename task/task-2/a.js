const company = {
    name: 'Global Tech',
    countries: [
      {
        name: 'USA',
        regions: [
          {
            name: 'North America',
            departments: [
              {
                name: 'Engineering',
                subDepartments: [
                  {
                    name: 'Frontend',
                    employees: [
                      {
                        name: 'Alice',
                        role: 'Frontend Developer',
                        email: 'alice@globaltech.com',
                        projects: ['Project A', 'Project B', 'Project X']
                      },
                      {
                        name: 'Bob',
                        role: 'Frontend Architect',
                        email: 'bob@globaltech.com',
                        projects: ['Project C', 'Project Y']
                      },
                      {
                        name: 'Eve',
                        role: 'UX Designer',
                        email: 'eve@globaltech.com',
                        projects: ['Project A', 'Project B']
                      }
                    ]
                  },
                  {
                    name: 'Backend',
                    employees: [
                      {
                        name: 'Charlie',
                        role: 'Backend Developer',
                        email: 'charlie@globaltech.com',
                        projects: ['Project D', 'Project Z']
                      },
                      {
                        name: 'David',
                        role: 'Database Administrator',
                        email: 'david@globaltech.com',
                        projects: ['Project D', 'Project K']
                      }
                    ]
                  },
                  {
                    name: 'DevOps',
                    employees: [
                      {
                        name: 'Frank',
                        role: 'DevOps Engineer',
                        email: 'frank@globaltech.com',
                        projects: ['Project E', 'Project F']
                      }
                    ]
                  }
                ]
              },
              {
                name: 'Sales',
                employees: [
                  {
                    name: 'Grace',
                    role: 'Sales Manager',
                    email: 'grace@globaltech.com',
                    projects: ['Product Launch 2024']
                  },
                  {
                    name: 'Hank',
                    role: 'Sales Representative',
                    email: 'hank@globaltech.com',
                    projects: ['Product Expansion']
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'Germany',
        regions: [
          {
            name: 'Europe',
            departments: [
              {
                name: 'Marketing',
                employees: [
                  {
                    name: 'Diana',
                    role: 'Marketing Specialist',
                    email: 'diana@globaltech.com',
                    projects: ['Campaign X', 'Campaign Y']
                  },
                  {
                    name: 'Isaac',
                    role: 'Digital Marketer',
                    email: 'isaac@globaltech.com',
                    projects: ['SEO Optimization', 'Ad Campaign']
                  }
                ]
              },
              {
                name: 'Product Management',
                employees: [
                  {
                    name: 'Julia',
                    role: 'Product Manager',
                    email: 'julia@globaltech.com',
                    projects: ['Product Redesign', 'Feature Launch']
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'India',
        regions: [
          {
            name: 'Asia',
            departments: [
              {
                name: 'Support',
                employees: [
                  {
                    name: 'Kumar',
                    role: 'Support Engineer',
                    email: 'kumar@globaltech.com',
                    projects: ['Customer Support', 'Technical Support']
                  },
                  {
                    name: 'Lakshmi',
                    role: 'Customer Service Representative',
                    email: 'lakshmi@globaltech.com',
                    projects: ['Customer Onboarding', 'Feedback Collection']
                  }
                ]
              },
              {
                name: 'Human Resources',
                employees: [
                  {
                    name: 'Manisha',
                    role: 'HR Manager',
                    email: 'manisha@globaltech.com',
                    projects: ['Employee Engagement', 'Recruitment Drive']
                  },
                  {
                    name: 'Neeraj',
                    role: 'Recruiter',
                    email: 'neeraj@globaltech.com',
                    projects: ['Hiring Campaign', 'Internship Program']
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'Australia',
        regions: [
          {
            name: 'Oceania',
            departments: [
              {
                name: 'R&D',
                employees: [
                  {
                    name: 'Olivia',
                    role: 'Research Scientist',
                    email: 'olivia@globaltech.com',
                    projects: ['AI Research', 'Quantum Computing']
                  },
                  {
                    name: 'Peter',
                    role: 'Innovation Specialist',
                    email: 'peter@globaltech.com',
                    projects: ['New Product Research', 'Sustainability Initiative']
                  }
                ]
              },
              {
                name: 'Finance',
                employees: [
                  {
                    name: 'Quinn',
                    role: 'Financial Analyst',
                    email: 'quinn@globaltech.com',
                    projects: ['Budget Forecasting', 'Financial Planning']
                  },
                  {
                    name: 'Rachel',
                    role: 'Accountant',
                    email: 'rachel@globaltech.com',
                    projects: ['Audit', 'Tax Filing']
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'Brazil',
        regions: [
          {
            name: 'South America',
            departments: [
              {
                name: 'Operations',
                employees: [
                  {
                    name: 'Samuel',
                    role: 'Operations Manager',
                    email: 'samuel@globaltech.com',
                    projects: ['Logistics Optimization', 'Supply Chain']
                  },
                  {
                    name: 'Tania',
                    role: 'Supply Chain Analyst',
                    email: 'tania@globaltech.com',
                    projects: ['Inventory Management', 'Vendor Relations']
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  };

// Recursively traverses the company object to extract a flat array of employee details and the
// project they are working on.
function extractEmployeeDetails(company, employees = []) {
  company.countries.forEach(country => {
    country.regions.forEach(region => {
      region.departments.forEach(department => {
        if('employees' in department)
        {
            department.employees.forEach(employee => {
                employees.push({
                    name: employee.name,
                    role: employee.role,
                    email: employee.email,
                    projects: employee.projects
                });
            });
        }
      });
    });
  });
  return employees;
}

const employeeDetails = extractEmployeeDetails(company);

console.log(employeeDetails);