import fs from "fs"

const plans = [
    {
        BMI: {
            start: 0,
            end: 18
        },
        workoutPlan: [
            {
                name: 'Chest day',
                exercises: [
                    {
                        exercise: '626472a2f8cbde76b12e6e28',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e3b',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e4a',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e4f',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e56',
                        set: 3,
                        rep: 12
                    }
                ]
            },
            {
                name: 'Back day',
                exercises: [
                    {
                        exercise: '626472a2f8cbde76b12e6e2b',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e33',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e35',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e36',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e3e',
                        set: 3,
                        rep: 12
                    }
                ]
            },
            {
                name: 'Arms day',
                exercises: [
                    {
                        exercise: '626472a2f8cbde76b12e6e26',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e2e',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e41',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e45',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e46',
                        set: 3,
                        rep: 12
                    }
                ]
            },
            {
                name: 'Leg day',
                exercises: [
                    {
                        exercise: '626472a2f8cbde76b12e6e1b',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e20',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e24',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e29',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e2c',
                        set: 3,
                        rep: 12
                    }
                ]
            },
        ]
    },
    {
        BMI: {
            start: 18,
            end: 25
        },
        workoutPlan: [
            {
                name: 'Push day',
                exercises: [
                    {
                        exercise: '626472a2f8cbde76b12e6e56',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e4f',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e4a',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e25',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e27',
                        set: 3,
                        rep: 12
                    }
                ]
            },
            {
                name: 'Pull day',
                exercises: [
                    {
                        exercise: '626472a2f8cbde76b12e6e2b',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e3e',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e36',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e33',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e26',
                        set: 3,
                        rep: 12
                    }
                ]
            },
            {
                name: 'Leg day',
                exercises: [
                    {
                        exercise: '626472a2f8cbde76b12e6e1b',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e20',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e24',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e29',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e2c',
                        set: 3,
                        rep: 12
                    }
                ]
            },
            {
                name: 'Push day',
                exercises: [
                    {
                        exercise: '626472a2f8cbde76b12e6e56',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e4f',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e4a',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e25',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e27',
                        set: 3,
                        rep: 12
                    }
                ]
            },
            {
                name: 'Pull day',
                exercises: [
                    {
                        exercise: '626472a2f8cbde76b12e6e2b',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e3e',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e36',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e33',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e26',
                        set: 3,
                        rep: 12
                    }
                ]
            },
        ]
    },
    {
        BMI: {
            start: 25,
            end: 50
        },
        workoutPlan: [
            {
                name: 'Abs day',
                exercises: [
                    {
                        exercise: '626472a2f8cbde76b12e6e1c',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e1e',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e21',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e22',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e23',
                        set: 3,
                        rep: 12
                    }
                ]
            },
            {
                name: 'Chest day',
                exercises: [
                    {
                        exercise: '626472a2f8cbde76b12e6e28',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e3b',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e4a',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e4f',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e56',
                        set: 3,
                        rep: 12
                    }
                ]
            },
            {
                name: 'Back day',
                exercises: [
                    {
                        exercise: '626472a2f8cbde76b12e6e2b',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e33',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e35',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e36',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e3e',
                        set: 3,
                        rep: 12
                    }
                ]
            },
            {
                name: 'Arms day',
                exercises: [
                    {
                        exercise: '626472a2f8cbde76b12e6e26',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e2e',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e41',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e45',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e46',
                        set: 3,
                        rep: 12
                    }
                ]
            },
            {
                name: 'Leg day',
                exercises: [
                    {
                        exercise: '626472a2f8cbde76b12e6e1b',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e20',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e24',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e29',
                        set: 3,
                        rep: 12
                    },
                    {
                        exercise: '626472a2f8cbde76b12e6e2c',
                        set: 3,
                        rep: 12
                    }
                ]
            },
        ]
    }
]

fs.writeFile('planSuggest.json', JSON.stringify(plans), 'utf-8', () => {
    console.log("done")
})
