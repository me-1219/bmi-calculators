import React from 'react';
import { BMI_CATEGORIES } from '../../utils/constants';
import Card from '../UI/Card';
import { Scale, Target, Heart, TrendingUp } from 'lucide-react';

const CalculatorResult = ({ result, unit }) => {
  if (!result) return null;

  const category = BMI_CATEGORIES[result.category];
  const progress = Math.min((result.bmi / 40) * 100, 100);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* BMI Score */}
      <Card variant="glass" className="text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Scale className="text-blue-500" size={24} />
          <h3 className="text-xl font-semibold dark:text-gray-50">Your BMI Result</h3>
        </div>
        
        <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {result.bmi}
        </div>
        
        <div className={`text-lg font-semibold mb-4 ${category.textColor}`}>
          {category.label}
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-4">
          <div 
            className={`h-3 rounded-full transition-all duration-1000 ease-out ${category.color}`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="text-sm text-gray-600 dark:text-gray-100 ">
          Healthy range: 18.5 - 24.9
        </div>
      </Card>

      {/* Ideal Weight */}
      <Card variant="elevated">
        <div className="flex items-center gap-3 mb-3">
          <Target className="text-green-500" size={20} />
          <h4 className="dark:text-gray-100 text-lg font-semibold">Healthy Weight Range</h4>
        </div>
        <div className="text-2xl font-bold text-green-600">
          {result.idealWeight.display}
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-200 mt-2">
          Maintain this weight range for optimal health
        </p>
      </Card>

      {/* Recommendations */}
      <Card variant="elevated">
        <div className="flex items-center gap-3 mb-4">
          <Heart className="text-red-500" size={20} />
          <h4 className="dark:text-gray-100 text-lg font-semibold">Health Recommendations</h4>
        </div>
        
        <div className="space-y-3">
          <div>
            <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
              {result.recommendation.title}
            </h5>
            <ul className="space-y-2">
              {result.recommendation.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <TrendingUp size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>

      {/* Category Info */}
      <Card variant="glass">
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {category.description}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default CalculatorResult;