export const calculateBMI = (height, weight, unit = 'metric') => {
  if (!height || !weight || height <= 0 || weight <= 0) return null;

  let heightInMeters = height;
  let weightInKg = weight;

  if (unit === 'imperial') {
    // Convert feet to meters (1 foot = 0.3048 meters)
    heightInMeters = height * 0.3048;
    // Convert pounds to kg (1 pound = 0.453592 kg)
    weightInKg = weight * 0.453592;
  }

  const bmi = weightInKg / (heightInMeters * heightInMeters);
  return Math.round(bmi * 10) / 10;
};

export const getBMICategory = (bmi) => {
  if (bmi < 18.5) return 'UNDERWEIGHT';
  if (bmi < 25) return 'NORMAL';
  if (bmi < 30) return 'OVERWEIGHT';
  return 'OBESE';
};

export const calculateIdealWeight = (height, unit = 'metric') => {
  if (!height || height <= 0) return null;

  let heightInMeters = height;
  if (unit === 'imperial') {
    heightInMeters = height * 0.3048;
  }

  const minWeight = 18.5 * (heightInMeters * heightInMeters);
  const maxWeight = 24.9 * (heightInMeters * heightInMeters);

  if (unit === 'metric') {
    return {
      min: Math.round(minWeight),
      max: Math.round(maxWeight),
      display: `${Math.round(minWeight)} - ${Math.round(maxWeight)} kg`
    };
  } else {
    const minLbs = Math.round(minWeight * 2.20462);
    const maxLbs = Math.round(maxWeight * 2.20462);
    return {
      min: minLbs,
      max: maxLbs,
      display: `${minLbs} - ${maxLbs} lbs`
    };
  }
};

export const getHealthRecommendation = (category, age, gender) => {
  const baseRecommendations = {
    UNDERWEIGHT: {
      title: 'Weight Gain Tips',
      tips: [
        'Eat more frequent, nutrient-dense meals',
        'Include healthy fats like nuts and avocados',
        'Strength training to build muscle mass',
        'Consider protein supplements if needed'
      ]
    },
    NORMAL: {
      title: 'Maintenance Tips',
      tips: [
        'Continue balanced diet and exercise',
        'Monitor weight monthly',
        'Stay active with variety of exercises',
        'Maintain healthy sleep patterns'
      ]
    },
    OVERWEIGHT: {
      title: 'Weight Loss Tips',
      tips: [
        'Create calorie deficit through diet',
        'Increase cardiovascular exercise',
        'Reduce sugar and processed foods',
        'Track food intake and progress'
      ]
    },
    OBESE: {
      title: 'Health Improvement Tips',
      tips: [
        'Consult healthcare professional',
        'Start with low-impact exercises',
        'Focus on sustainable lifestyle changes',
        'Join support groups if helpful'
      ]
    }
  };

  return baseRecommendations[category] || baseRecommendations.NORMAL;
};
