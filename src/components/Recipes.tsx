import React, { useState, ReactNode } from 'react';

const elvenShieldRecipe: {
  leatherStrips: number;
  ironIngot: number;
  refinedMoonstone: number;
  leather?: number;
} = {
  leatherStrips: 3,
  ironIngot: 1,
  refinedMoonstone: 4,
};

const elvenGauntletsRecipe: {
  leatherStrips: number;
  ironIngot: number;
  refinedMoonstone: number;
  leather?: number;
} = {
  ...elvenShieldRecipe,
  leather: 1,
  refinedMoonstone: 4,
};

console.log(elvenShieldRecipe);
console.log(elvenGauntletsRecipe);

const Recipes = (): ReactNode => {
  const [recipe, setRecipe] = useState({});
  return (
    <div>
      <h3>Current Recipe:</h3>
      <button type="button" onClick={() => setRecipe(elvenShieldRecipe)}>Elven Shield Recipe</button>
      <button type="button" onClick={() => setRecipe(elvenGauntletsRecipe)}>Elven Gauntlet Recipe</button>
      <ul>
        {Object.keys(recipe).map((material) => (
          <li key={material}>
            {material}
            :
            {' '}
            {recipe[material]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
