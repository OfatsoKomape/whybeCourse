     
    //  academic.html
     function openTab(evt, tabName) {
           
            const tabContents = document.getElementsByClassName("tab-content");
            for (let i = 0; i < tabContents.length; i++) {
                tabContents[i].classList.remove("active");
            }
            
            
            const tabButtons = document.getElementsByClassName("tab-btn");
            for (let i = 0; i < tabButtons.length; i++) {
                tabButtons[i].classList.remove("active");
            }
            
            document.getElementById(tabName).classList.add("active");
            evt.currentTarget.classList.add("active");
        }
        
        document.addEventListener("DOMContentLoaded", function() {
            document.querySelector(".tab-btn").click();
        });


      // agriculture.html 

document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'menu-toggle';
    toggleBtn.innerHTML = '☰';
    toggleBtn.setAttribute('aria-label', 'Toggle navigation menu');
    
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');
    
    navbar.insertBefore(toggleBtn, navLinks);
    
    toggleBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    
    function handleResize() {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
        }
    }
    
    window.addEventListener('resize', handleResize);
});



      //  enquiry.html
        document.getElementById('enquiryForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const feedback = document.getElementById('formFeedback');
            
            if (!email || !message) {
                feedback.textContent = "Please fill in all required fields";
                feedback.className = 'form-feedback error';
                return;
            }
            
           
            feedback.textContent = "Thank you! We'll get back to you soon.";
            feedback.className = 'form-feedback success';
            
           
            setTimeout(() => {
                this.reset();
                feedback.textContent = "";
                feedback.className = 'form-feedback';
            }, 3000);
        });


    
        document.getElementById('current-year').textContent = new Date().getFullYear();



        // index.html
    document.addEventListener('DOMContentLoaded', function() {
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'menu-toggle';
        toggleBtn.innerHTML = '☰';
        
        const navLinks = document.querySelector('.nav-links');
        const navbar = document.querySelector('.navbar');
        
        toggleBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        navbar.insertBefore(toggleBtn, navLinks);
    });
  
   
        // interview.html
        document.querySelectorAll('.answer-toggle').forEach(toggle => {
            toggle.addEventListener('click', () => {
                const answer = toggle.nextElementSibling;
                answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
                toggle.textContent = answer.style.display === 'block' ? 'Hide Answer' : 'Show Answer Example';
            });
        });
   

            // resume-builder.html
              function toggleAdviceSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section.style.display === 'none') {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        }



        // salary-insight.html
         const salaryBarCtx = document.getElementById('salaryBarChart').getContext('2d');
        const salaryBarChart = new Chart(salaryBarCtx, {
            type: 'bar',
            data: {
                labels: ['Information Technology', 'Engineering', 'Business & Finance', 'Healthcare', 'Education', 'Agriculture'],
                datasets: [{
                    label: 'Average Annual Salary (ZAR)',
                    data: [600000, 535000, 465000, 425000, 360000, 325000],
                    backgroundColor: [
                        'rgba(76, 175, 80, 0.7)',
                        'rgba(156, 39, 176, 0.7)',
                        'rgba(33, 150, 243, 0.7)',
                        'rgba(255, 193, 7, 0.7)',
                        'rgba(244, 67, 54, 0.7)',
                        'rgba(139, 195, 74, 0.7)'
                    ],
                    borderColor: [
                        'rgba(76, 175, 80, 1)',
                        'rgba(156, 39, 176, 1)',
                        'rgba(33, 150, 243, 1)',
                        'rgba(255, 193, 7, 1)',
                        'rgba(244, 67, 54, 1)',
                        'rgba(139, 195, 74, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Annual Salary (ZAR)'
                        },
                        ticks: {
                            callback: function(value) {
                                return 'R' + value.toLocaleString();
                            }
                        }
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return 'Average: R' + context.raw.toLocaleString();
                            }
                        }
                    }
                }
            }
        });

        const growthLineCtx = document.getElementById('growthLineChart').getContext('2d');
        const growthLineChart = new Chart(growthLineCtx, {
            type: 'line',
            data: {
                labels: ['Entry-Level', 'Early Career', 'Mid-Career', 'Experienced', 'Late Career'],
                datasets: [
                    {
                        label: 'Information Technology',
                        data: [240000, 350000, 500000, 700000, 900000],
                        borderColor: 'rgba(76, 175, 80, 1)',
                        backgroundColor: 'rgba(76, 175, 80, 0.1)',
                        tension: 0.3,
                        fill: true
                    },
                    {
                        label: 'Engineering',
                        data: [220000, 320000, 450000, 600000, 750000],
                        borderColor: 'rgba(156, 39, 176, 1)',
                        backgroundColor: 'rgba(156, 39, 176, 0.1)',
                        tension: 0.3,
                        fill: true
                    },
                    {
                        label: 'Business & Finance',
                        data: [200000, 300000, 400000, 500000, 650000],
                        borderColor: 'rgba(33, 150, 243, 1)',
                        backgroundColor: 'rgba(33, 150, 243, 0.1)',
                        tension: 0.3,
                        fill: true
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Annual Salary (ZAR)'
                        },
                        ticks: {
                            callback: function(value) {
                                return 'R' + value.toLocaleString();
                            }
                        }
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.dataset.label + ': R' + context.raw.toLocaleString();
                            }
                        }
                    }
                }
            }
        });

        const comparisonCtx = document.getElementById('comparisonChart').getContext('2d');
        const comparisonChart = new Chart(comparisonCtx, {
            type: 'bar',
            data: {
                labels: ['IT', 'Engineering', 'Business', 'Healthcare', 'Education', 'Agriculture'],
                datasets: [
                    {
                        label: 'Entry-Level (0-2 yrs)',
                        data: [240000, 220000, 200000, 180000, 160000, 150000],
                        backgroundColor: 'rgba(156, 39, 176, 0.7)',
                        borderColor: 'rgba(156, 39, 176, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Experienced (6-10 yrs)',
                        data: [680000, 550000, 500000, 400000, 350000, 380000],
                        backgroundColor: 'rgba(76, 175, 80, 0.7)',
                        borderColor: 'rgba(76, 175, 80, 1)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Annual Salary (ZAR)'
                        },
                        ticks: {
                            callback: function(value) {
                                return 'R' + value.toLocaleString();
                            }
                        }
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.dataset.label + ': R' + context.raw.toLocaleString();
                            }
                        }
                    }
                }
            }
        });

        document.querySelectorAll('.salary-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.boxShadow = '0 5px 20px rgba(0,0,0,0.05)';
            });
        });


        //  skills-in-demand.html
       const skillsPieCtx = document.getElementById('skillsPieChart').getContext('2d');
        const skillsPieChart = new Chart(skillsPieCtx, {
            type: 'pie',
            data: {
                labels: ['Technical Skills', 'Soft Skills', 'Business Skills', 'Digital Literacy'],
                datasets: [{
                    data: [45, 30, 15, 10],
                    backgroundColor: [
                        '#4CAF50',
                        '#9C27B0',
                        '#2196F3',
                        '#FFC107'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ${context.raw}%`;
                            }
                        }
                    }
                }
            }
        });

        const languagesBarCtx = document.getElementById('languagesBarChart').getContext('2d');
        const languagesBarChart = new Chart(languagesBarCtx, {
            type: 'bar',
            data: {
                labels: ['Python', 'JavaScript', 'Java', 'C#', 'PHP', 'SQL'],
                datasets: [{
                    label: '% of Job Postings Requiring Skill',
                    data: [45, 38, 32, 28, 25, 40],
                    backgroundColor: [
                        'rgba(76, 175, 80, 0.7)',
                        'rgba(156, 39, 176, 0.7)',
                        'rgba(33, 150, 243, 0.7)',
                        'rgba(255, 193, 7, 0.7)',
                        'rgba(244, 67, 54, 0.7)',
                        'rgba(139, 195, 74, 0.7)'
                    ],
                    borderColor: [
                        'rgba(76, 175, 80, 1)',
                        'rgba(156, 39, 176, 1)',
                        'rgba(33, 150, 243, 1)',
                        'rgba(255, 193, 7, 1)',
                        'rgba(244, 67, 54, 1)',
                        'rgba(139, 195, 74, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 50,
                        title: {
                            display: true,
                            text: '% of Job Postings'
                        }
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.raw}% of job postings require ${context.label}`;
                            }
                        }
                    }
                }
            }
        });

        const softSkillsCtx = document.getElementById('softSkillsChart').getContext('2d');
        const softSkillsChart = new Chart(softSkillsCtx, {
            type: 'radar',
            data: {
                labels: ['Communication', 'Teamwork', 'Problem Solving', 'Adaptability', 'Leadership', 'Creativity'],
                datasets: [
                    {
                        label: 'IT Sector',
                        data: [85, 80, 90, 85, 70, 75],
                        backgroundColor: 'rgba(76, 175, 80, 0.2)',
                        borderColor: 'rgba(76, 175, 80, 1)',
                        borderWidth: 2
                    },
                    {
                        label: 'Business Sector',
                        data: [95, 90, 85, 80, 85, 70],
                        backgroundColor: 'rgba(156, 39, 176, 0.2)',
                        borderColor: 'rgba(156, 39, 176, 1)',
                        borderWidth: 2
                    },
                    {
                        label: 'Engineering',
                        data: [80, 85, 95, 75, 80, 85],
                        backgroundColor: 'rgba(33, 150, 243, 0.2)',
                        borderColor: 'rgba(33, 150, 243, 1)',
                        borderWidth: 2
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    r: {
                        angleLines: {
                            display: true
                        },
                        suggestedMin: 50,
                        suggestedMax: 100
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: ${context.raw}% importance`;
                            }
                        }
                    }
                }
            }
        });

        document.querySelectorAll('.skills-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.boxShadow = '0 5px 20px rgba(0,0,0,0.05)';
            });
        });



        // trends.html
               document.querySelectorAll('.trend-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
            });
        });



        // toggle bar
    document.querySelector('.menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav-links').classList.toggle('active');
    });


      