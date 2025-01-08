const task = {
    "patients": [
      {
        "patient_id": 1,
        "name": "John Doe",
        "age": 45,
        "gender": "Male",
        "medical_history": {
          "conditions": [
            {
              "name": "Hypertension",
              "diagnosed_date": "2017-08-01",
              "medications": [
                {
                  "name": "Lisinopril",
                  "dose": "10 mg",
                  "frequency": "Once daily",
                  "prescribed_by": "Dr. Smith",
                  "start_date": "2017-08-05",
                  "refills": [
                    {
                      "date": "2024-08-01",
                      "pharmacy": "Walgreens",
                      "quantity": 30
                    },
                    {
                      "date": "2024-08-01",
                      "pharmacy": "CVS",
                      "quantity": 30
                    }
                  ]
                }
              ]
            },
            {
              "name": "Asthma",
              "diagnosed_date": "2020-03-10",
              "medications": [
                {
                  "name": "Albuterol",
                  "dose": "90 mcg",
                  "frequency": "As needed",
                  "prescribed_by": "Dr. Emily Johnson",
                  "start_date": "2020-04-01",
                  "refills": [
                    {
                      "date": "2024-08-12",
                      "pharmacy": "Walgreens",
                      "quantity": 2
                    }
                  ]
                }
              ]
            }
          ]
        },
        "insurance": {
          "provider": "Blue Cross Blue Shield",
          "plan": "PPO",
          "policy_number": "123456789",
          "coverage": {
            "start_date": "2016-01-01",
            "end_date": "2024-01-01",
            "details": {
              "deductible": 1000,
              "out_of_pocket_max": 5000,
              "covered_services": [
                "General Physician",
                "Specialists",
                "Prescription Drugs",
                "Emergency Care"
              ]
            }
          }
        },
        "appointments": [
          {
            "appointment_id": 101,
            "date": "2024-09-15",
            "doctor": {
              "name": "Dr. Emily Johnson",
              "specialty": "Cardiology",
              "location": "St. Mary's Hospital"
            },
            "reason": "Routine checkup",
            "status": "Scheduled"
          },
          {
            "appointment_id": 102,
            "date": "2024-07-10",
            "doctor": {
              "name": "Dr. Emily Johnson",
              "specialty": "Cardiology",
              "location": "St. Mary's Hospital"
            },
            "reason": "Follow-up",
            "status": "Completed"
          }
        ]
      },
      {
        "patient_id": 2,
        "name": "Jane Smith",
        "age": 50,
        "gender": "Female",
        "medical_history": {
          "conditions": [
            {
              "name": "Diabetes",
              "diagnosed_date": "2020-05-12",
              "medications": [
                {
                  "name": "Metformin",
                  "dose": "500 mg",
                  "frequency": "Twice daily",
                  "prescribed_by": "Dr. Thomas",
                  "start_date": "2020-06-01",
                  "refills": [
                    {
                      "date": "2024-07-01",
                      "pharmacy": "Rite Aid",
                      "quantity": 60
                    },
                    {
                      "date": "2024-08-01",
                      "pharmacy": "CVS",
                      "quantity": 60
                    }
                  ]
                }
              ]
            },
            {
              "name": "Hypertension",
              "diagnosed_date": "2020-02-15",
              "medications": [
                {
                  "name": "Amlodipine",
                  "dose": "5 mg",
                  "frequency": "Once daily",
                  "prescribed_by": "Dr. Blake",
                  "start_date": "2020-03-01",
                  "refills": [
                    {
                      "date": "2024-09-10",
                      "pharmacy": "Walgreens",
                      "quantity": 30
                    }
                  ]
                }
              ]
            }
          ]
        },
        "insurance": {
          "provider": "United Healthcare",
          "plan": "HMO",
          "policy_number": "987654321",
          "coverage": {
            "start_date": "2019-03-01",
            "end_date": "2024-03-01",
            "details": {
              "deductible": 1500,
              "out_of_pocket_max": 4000,
              "covered_services": [
                "General Physician",
                "Specialists",
                "Prescription Drugs"
              ]
            }
          }
        },
        "appointments": [
          {
            "appointment_id": 201,
            "date": "2024-06-10",
            "doctor": {
              "name": "Dr. Nathan Blake",
              "specialty": "Endocrinology",
              "location": "Central Health Clinic"
            },
            "reason": "Diabetes management",
            "status": "Completed"
          },
          {
            "appointment_id": 202,
            "date": "2024-08-05",
            "doctor": {
              "name": "Dr. Blake",
              "specialty": "Endocrinology",
              "location": "Central Health Clinic"
            },
            "reason": "Hypertension checkup",
            "status": "Scheduled"
          }
        ]
      },
      {
        "patient_id": 3,
        "name": "Alice Johnson",
        "age": 37,
        "gender": "Female",
        "medical_history": {
          "conditions": [
            {
              "name": "Asthma",
              "diagnosed_date": "2010-04-22",
              "medications": [
                {
                  "name": "Albuterol",
                  "dose": "90 mcg",
                  "frequency": "As needed",
                  "prescribed_by": "Dr. Emily Johnson",
                  "start_date": "2010-05-01",
                  "refills": [
                    {
                      "date": "2024-07-05",
                      "pharmacy": "Rite Aid",
                      "quantity": 3
                    }
                  ]
                }
              ]
            }
          ]
        },
        "insurance": {
          "provider": "Cigna",
          "plan": "EPO",
          "policy_number": "111222333",
          "coverage": {
            "start_date": "2010-05-01",
            "end_date": "2025-05-01",
            "details": {
              "deductible": 1200,
              "out_of_pocket_max": 4500,
              "covered_services": [
                "General Physician",
                "Specialists",
                "Prescription Drugs",
                "Emergency Care"
              ]
            }
          }
        },
        "appointments": [
          {
            "appointment_id": 301,
            "date": "2024-07-20",
            "doctor": {
              "name": "Dr. Emily Johnson",
              "specialty": "Pulmonology",
              "location": "Northside Clinic"
            },
            "reason": "Asthma management",
            "status": "Completed"
          }
        ]
      },
      {
        "patient_id": 4,
        "name": "Michael Brown",
        "age": 65,
        "gender": "Male",
        "medical_history": {
          "conditions": [
            {
              "name": "Chronic Obstructive Pulmonary Disease (COPD)",
              "diagnosed_date": "2017-11-30",
              "medications": [
                {
                  "name": "Tiotropium",
                  "dose": "18 mcg",
                  "frequency": "Once daily",
                  "prescribed_by": "Dr. Steven Taylor",
                  "start_date": "2017-12-01",
                  "refills": [
                    {
                      "date": "2024-07-15",
                      "pharmacy": "CVS",
                      "quantity": 30
                    },
                    {
                      "date": "2024-08-15",
                      "pharmacy": "Walgreens",
                      "quantity": 30
                    }
                  ]
                }
              ]
            }
          ]
        },
        "insurance": {
          "provider": "Medicare",
          "plan": "Medicare Advantage",
          "policy_number": "999888777",
          "coverage": {
            "start_date": "2017-01-01",
            "end_date": "2025-01-01",
            "details": {
              "deductible": 500,
              "out_of_pocket_max": 2000,
              "covered_services": [
                "General Physician",
                "Specialists",
                "Prescription Drugs",
                "Emergency Care"
              ]
            }
          }
        },
        "appointments": [
          {
            "appointment_id": 401,
            "date": "2024-07-30",
            "doctor": {
              "name": "Dr. Steven Taylor",
              "specialty": "Pulmonology",
              "location": "City Health Hospital"
            },
            "reason": "COPD management",
            "status": "Scheduled"
          }
        ]
      },
      {
        "patient_id": 5,
        "name": "Sophia Green",
        "age": 29,
        "gender": "Female",
        "medical_history": {
          "conditions": [
            {
              "name": "Migraine",
              "diagnosed_date": "2021-01-15",
              "medications": [
                {
                  "name": "Sumatriptan",
                  "dose": "50 mg",
                  "frequency": "As needed",
                  "prescribed_by": "Dr. Linda Carter",
                  "start_date": "2021-02-01",
                  "refills": [
                    {
                      "date": "2024-06-01",
                      "pharmacy": "Rite Aid",
                      "quantity": 10
                    }
                  ]
                }
              ]
            }
          ]
        },
        "insurance": {
          "provider": "Aetna",
          "plan": "HMO",
          "policy_number": "555444333",
          "coverage": {
            "start_date": "2021-01-01",
            "end_date": "2025-01-01",
            "details": {
              "deductible": 1500,
              "out_of_pocket_max": 4000,
              "covered_services": [
                "General Physician",
                "Specialists",
                "Prescription Drugs",
                "Emergency Care"
              ]
            }
          }
        },
        "appointments": [
          {
            "appointment_id": 501,
            "date": "2024-07-25",
            "doctor": {
              "name": "Dr. Linda Carter",
              "specialty": "Neurology",
              "location": "Westside Clinic"
            },
            "reason": "Migraine consultation",
            "status": "Completed"
          }
        ]
      },
      {
        "patient_id": 6,
        "name": "Liam Brown",
        "age": 52,
        "gender": "Male",
        "medical_history": {
          "conditions": [
            {
              "name": "Hyperlipidemia",
              "diagnosed_date": "2019-09-10",
              "medications": [
                {
                  "name": "Atorvastatin",
                  "dose": "20 mg",
                  "frequency": "Once daily",
                  "prescribed_by": "Dr. Samuel Evans",
                  "start_date": "2019-09-15",
                  "refills": [
                    {
                      "date": "2024-08-01",
                      "pharmacy": "Walgreens",
                      "quantity": 30
                    }
                  ]
                }
              ]
            }
          ]
        },
        "insurance": {
          "provider": "Cigna",
          "plan": "PPO",
          "policy_number": "666777888",
          "coverage": {
            "start_date": "2019-09-01",
            "end_date": "2024-09-01",
            "details": {
              "deductible": 1200,
              "out_of_pocket_max": 3500,
              "covered_services": [
                "General Physician",
                "Specialists",
                "Prescription Drugs",
                "Emergency Care"
              ]
            }
          }
        },
        "appointments": [
          {
            "appointment_id": 601,
            "date": "2024-05-10",
            "doctor": {
              "name": "Dr. Samuel Evans",
              "specialty": "Internal Medicine",
              "location": "Downtown Medical Center"
            },
            "reason": "Routine checkup",
            "status": "Completed"
          }
        ]
      },
      {
        "patient_id": 7,
        "name": "Olivia Davis",
        "age": 40,
        "gender": "Female",
        "medical_history": {
          "conditions": [
            {
              "name": "Rheumatoid Arthritis",
              "diagnosed_date": "2018-06-20",
              "medications": [
                {
                  "name": "Methotrexate",
                  "dose": "15 mg",
                  "frequency": "Once weekly",
                  "prescribed_by": "Dr. Laura Kim",
                  "start_date": "2018-07-01",
                  "refills": [
                    {
                      "date": "2024-07-15",
                      "pharmacy": "CVS",
                      "quantity": 12
                    }
                  ]
                }
              ]
            }
          ]
        },
        "insurance": {
          "provider": "United Healthcare",
          "plan": "EPO",
          "policy_number": "222333444",
          "coverage": {
            "start_date": "2018-07-01",
            "end_date": "2024-07-01",
            "details": {
              "deductible": 1000,
              "out_of_pocket_max": 3000,
              "covered_services": [
                "General Physician",
                "Specialists",
                "Prescription Drugs"
              ]
            }
          }
        },
        "appointments": [
          {
            "appointment_id": 701,
            "date": "2024-06-25",
            "doctor": {
              "name": "Dr. Laura Kim",
              "specialty": "Rheumatology",
              "location": "Northgate Clinic"
            },
            "reason": "Arthritis follow-up",
            "status": "Completed"
          }
        ]
      },
      {
        "patient_id": 8,
        "name": "Ethan Wilson",
        "age": 60,
        "gender": "Male",
        "medical_history": {
          "conditions": [
            {
              "name": "Gastroesophageal Reflux Disease (GERD)",
              "diagnosed_date": "2016-11-30",
              "medications": [
                {
                  "name": "Omeprazole",
                  "dose": "20 mg",
                  "frequency": "Once daily",
                  "prescribed_by": "Dr. Karen Lee",
                  "start_date": "2016-12-01",
                  "refills": [
                    {
                      "date": "2024-08-01",
                      "pharmacy": "Rite Aid",
                      "quantity": 30
                    }
                  ]
                }
              ]
            }
          ]
        },
        "insurance": {
          "provider": "Blue Cross Blue Shield",
          "plan": "PPO",
          "policy_number": "333444555",
          "coverage": {
            "start_date": "2016-12-01",
            "end_date": "2024-12-01",
            "details": {
              "deductible": 2000,
              "out_of_pocket_max": 6000,
              "covered_services": [
                "General Physician",
                "Specialists",
                "Prescription Drugs",
                "Emergency Care"
              ]
            }
          }
        },
        "appointments": [
          {
            "appointment_id": 801,
            "date": "2024-04-15",
            "doctor": {
              "name": "Dr. Karen Lee",
              "specialty": "Gastroenterology",
              "location": "City Health Clinic"
            },
            "reason": "GERD management",
            "status": "Completed"
          }
        ]
      },
      {
        "patient_id": 9,
        "name": "Ava Martinez",
        "age": 33,
        "gender": "Female",
        "medical_history": {
          "conditions": [
            {
              "name": "Psoriasis",
              "diagnosed_date": "2020-10-05",
              "medications": [
                {
                  "name": "Topical Corticosteroid",
                  "dose": "0.05%",
                  "frequency": "Once daily",
                  "prescribed_by": "Dr. Monica Roberts",
                  "start_date": "2020-10-10",
                  "refills": [
                    {
                      "date": "2024-08-01",
                      "pharmacy": "CVS",
                      "quantity": 30
                    }
                  ]
                }
              ]
            }
          ]
        },
        "insurance": {
          "provider": "Aetna",
          "plan": "HMO",
          "policy_number": "444555666",
          "coverage": {
            "start_date": "2020-10-01",
            "end_date": "2025-10-01",
            "details": {
              "deductible": 1300,
              "out_of_pocket_max": 3500,
              "covered_services": [
                "General Physician",
                "Specialists",
                "Prescription Drugs"
              ]
            }
          }
        },
        "appointments": [
          {
            "appointment_id": 901,
            "date": "2024-08-10",
            "doctor": {
              "name": "Dr. Monica Roberts",
              "specialty": "Dermatology",
              "location": "Eastside Clinic"
            },
            "reason": "Psoriasis treatment",
            "status": "Scheduled"
          }
        ]
      }
    ]
  }

//   d. List of most prescribed medicines with their total number of times prescribed and lower order
//   first.
    const patients = task.patients;
    const medicines = new Map();
    patients.forEach(patient => {
        patient.medical_history.conditions.forEach(disease => {
            const medications = disease.medications;
            medications.forEach((medics) => {
                if (!medicines.has(medics.name)) {
                    medicines.set(medics.name, 0);
                }
                let previousValue = medicines.get(medics.name);
                medicines.set(medics.name, previousValue+1);
            });
        });
    });

    // console.log(medicines);

    //ascending order
    const lowerOrderFirst = [...medicines].sort((a,b)=> a[1]-b[1]);

    console.log(lowerOrderFirst);





