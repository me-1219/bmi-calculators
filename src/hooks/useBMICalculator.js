import { useState, useCallback } from 'react';
import { calculateBMI, getBMICategory, calculateIdealWeight, getHealthRecommendation } from '../utils/bmiCalculations';

export const useBMICalculator = () => {
  const [inputs, setInputs] = useState({
    height: '',
    weight: '',
    age: '',
    gender: 'male'
  });
  const [unit, setUnit] = useState('metric');
  const [result, setResult] = useState(null);

  const calculate = useCallback(() => {
    const { height, weight, age, gender } = inputs;
    
    if (!height || !weight || !age) {
      setResult(null);
      return;
    }

    const bmi = calculateBMI(parseFloat(height), parseFloat(weight), unit);
    if (!bmi) {
      setResult(null);
      return;
    }

    const category = getBMICategory(bmi);
    const idealWeight = calculateIdealWeight(parseFloat(height), unit);
    const recommendation = getHealthRecommendation(category, parseInt(age), gender);

    setResult({
      bmi,
      category,
      idealWeight,
      recommendation,
      timestamp: new Date().toISOString()
    });
  }, [inputs, unit]);

  const updateInput = useCallback((field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  const resetCalculator = useCallback(() => {
    setInputs({
      height: '',
      weight: '',
      age: '',
      gender: 'male'
    });
    setResult(null);
  }, []);

  return {
    inputs,
    unit,
    result,
    updateInput,
    setUnit,
    calculate,
    resetCalculator
  };
};