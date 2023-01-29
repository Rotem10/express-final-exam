/**
 * BMI Calculator
 */

export const BmiStatus = {
  Underweight: 0,
  HealthyWeight: 1,
  Overweight: 2,
  Obesity: 3,
};

export const WeightUnits = {
  KG: 0, // kilograms
  G: 1, // grams
  Pound: 2, // lbs
};

export const HeightUnits = {
  CM: 0, // centimeter
  M: 1, // meter
  In: 2, // inch
  Ft: 3, // feet
};

export interface BmiInput {
  weight: number;
  weightUnit: number;
  height: number;
  heightUnit: number;
}

export interface BmiOutput {
  bmi: number;
  status: number;
}

/**
 * Takes a BmiInput object and return BmiOutput response
 */
export default function bmi(input: BmiInput): BmiOutput {
  // TODO: implement me
  let { height, heightUnit, weight, weightUnit } = input;
  if (heightUnit !== 1) {
    if (heightUnit === 0) {
      height = height / 100;
    } else if (height === 2) {
      height = height / 39.37;
    } else {
      height = height / 3.281;
    }
  }

  return { status: 0, bmi: 0 };
}
