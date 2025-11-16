import React from 'react';
import Input from '../UI/Input';
import UnitToggle from './UnitToggle';
import Button from '../UI/Button';
import { Calculator, RotateCcw } from 'lucide-react';

const CalculatorForm = ({ inputs, unit, updateInput, setUnit, calculate, resetCalculator, result }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    calculate();
  };

  const canCalculate = inputs.height && inputs.weight && inputs.age;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:text-gray-50">
          BMI Calculator
        </h2>
        {result && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={resetCalculator}
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-50"
          >
            <RotateCcw size={16} />
          </Button>
        )}
      </div>

      <UnitToggle unit={unit} onUnitChange={setUnit} />

      <div className="grid grid-cols-2 gap-4 text-gray-900 dark:text-gray-100  placeholder-gray-400 dark:placeholder-gray-50 text-lg ">
        <Input
           size="lg"
          label="Age"
          type="number"
          value={inputs.age}
          onChange={(e) => updateInput('age', e.target.value)}
          placeholder="Enter your age"
          min="1"
          max="120"
        />
        
        <div className="space-y-2">
          <label className="block text-lg font-medium text-gray-700 dark:text-gray-50 ">
            Gender
          </label>
          <select
            value={inputs.gender}
            onChange={(e) => updateInput('gender', e.target.value)}
            className="w-full p-4 rounded-xl bg-white/80 dark:bg-gray-700/80 border border-gray-200 dark:border-gray-600 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>

      <Input
        className='text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500'
        label={`Height in ${unit === 'metric' ? 'meters' : 'feet'}`}
        type="number"
        value={inputs.height}
        onChange={(e) => updateInput('height', e.target.value)}
        placeholder={unit === 'metric' ? 'e.g., 1.75' : 'e.g., 5.8'}
        step={unit === 'metric' ? '0.01' : '0.1'}
        min="0.5"
        max="3"
      />

      <Input
        className='text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500'
        label={`Weight in ${unit === 'metric' ? 'kilograms' : 'pounds'}`}
        type="number"
        value={inputs.weight}
        onChange={(e) => updateInput('weight', e.target.value)}
        placeholder={unit === 'metric' ? 'e.g., 70' : 'e.g., 154'}
        step="0.1"
        min="1"
        max="500"
      />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={!canCalculate}
        className="w-full group"
      >
        <Calculator className="mr-2 group-hover:scale-110 transition-transform" />
        Calculate BMI
      </Button>
    </form>
  );
};

export default CalculatorForm;