export const BMI_CATEGORIES = {
  UNDERWEIGHT: {
    range: 'Below 18.5',
    label: 'Underweight',
    color: 'bg-blue-500',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-500',
    description: 'Consider increasing calorie intake with nutrient-dense foods'
  },
  NORMAL: {
    range: '18.5 - 24.9',
    label: 'Normal Weight',
    color: 'bg-green-500',
    textColor: 'text-green-600',
    borderColor: 'border-green-500',
    description: 'Maintain your healthy lifestyle with balanced diet'
  },
  OVERWEIGHT: {
    range: '25 - 29.9',
    label: 'Overweight',
    color: 'bg-yellow-500',
    textColor: 'text-yellow-600',
    borderColor: 'border-yellow-500',
    description: 'Focus on portion control and regular exercise'
  },
  OBESE: {
    range: '30 and above',
    label: 'Obese',
    color: 'bg-red-500',
    textColor: 'text-red-600',
    borderColor: 'border-red-500',
    description: 'Consult healthcare provider for personalized plan'
  }
};

export const HEALTH_TIPS = {
  GENERAL: [
    'Stay hydrated by drinking plenty of water',
    'Include fruits and vegetables in your diet',
    'Get regular physical activity',
    'Get adequate sleep (7-9 hours)',
    'Manage stress through meditation or hobbies'
  ],
  NUTRITION: [
    'Eat balanced meals with proper portions',
    'Limit processed foods and sugary drinks',
    'Include lean proteins in your diet',
    'Choose whole grains over refined carbs',
    'Don\'t skip breakfast'
  ]
};