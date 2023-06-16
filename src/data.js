const pageOneData = {
    fields: [
        {
            name: 'make',
            label: 'MAKE',
            type: 'select',
            options: ['AUDI', 'BMW', 'VAUXHAL', 'MERCEDES', 'PEUGEOT', 'RENAULT'],
        },
    ],
    buttonText: 'NEXT'
}

const pageTwoData = {
    fields: [
        {
            name: 'colour',
            label: 'COLOUR',
            type: 'select',
            options: ['BLUE', 'RED', 'BLACK', 'ORANGE'],
        },
    ],
    buttonText: 'NEXT'
}

const pageThreeData = {
    fields: [
        {
            name: 'code',
            label: 'CODE',
            type: 'number',
        },
    ],
    buttonText: 'SUBMIT'
}

export const pageList = [
    { 'id': 'pageOne', 'next': 'pageTwo', 'pageData': pageOneData },
    { 'id': 'pageTwo', 'next': 'pageThree', 'pageData': pageTwoData },
    { 'id': 'pageThree', 'next': 'done', 'pageData': pageThreeData }
]