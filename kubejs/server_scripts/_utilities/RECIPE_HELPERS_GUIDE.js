/**
 * GUIA DE USO - Recipe Helpers
 * 
 * Este arquivo explica como usar as funções helper do recipeHelpers.js
 * para padronizar a criação de receitas no seu modpack
 */

// ============================================================================
// EXEMPLO 1: Usar createMixerRecipe()
// ============================================================================

// Antes:
/*
ServerEvents.recipes(event => {
  event.custom({
    type: "create:mixing",
    heatRequirement: "none",
    ingredients: [
      { item: 'minecraft:iron_ingot' },
      { item: 'minecraft:andesite' }
    ],
    results: [{ count: 1, item: 'create:andesite_alloy' }]
  });
});
*/

// Depois (usando helper):
/*
ServerEvents.recipes(event => {
  createMixerRecipe(event, {
    heat: "none",
    ingredients: [
      { item: 'minecraft:iron_ingot' },
      { item: 'minecraft:andesite' }
    ],
    results: [{ count: 1, item: 'create:andesite_alloy' }]
  });
});
*/

// ============================================================================
// EXEMPLO 2: Usar createAlloyKilnRecipe()
// ============================================================================

// Antes:
/*
ServerEvents.recipes(event => {
  event.remove({ output: 'immersiveengineering:ingot_electrum' });
  event.custom({
    type: "immersiveengineering:alloy",
    input0: {
      base_ingredient: { tag: 'forge:ingots/gold' },
      count: 2
    },
    input1: {
      base_ingredient: { tag: 'forge:ingots/silver' },
      count: 2
    },
    result: {
      base_ingredient: { tag: 'forge:ingots/electrum' },
      count: 1
    },
    time: 200
  });
});
*/

// Depois (usando helper):
/*
ServerEvents.recipes(event => {
  createAlloyKilnRecipe(event, {
    primaryTag: 'forge:ingots/gold',
    secondaryTag: 'forge:ingots/silver',
    resultTag: 'forge:ingots/electrum',
    primaryCount: 2,
    secondaryCount: 2,
    resultCount: 1,
    time: 200,
    outputToRemove: 'immersiveengineering:ingot_electrum'
  });
});
*/

// ============================================================================
// EXEMPLO 3: Usar createArcFurnaceRecipe()
// ============================================================================

// Antes:
/*
ServerEvents.recipes(event => {
  event.remove({ output: 'create:brass_ingot' });
  event.custom({
    type: "immersiveengineering:arc_furnace",
    additives: [
      {
        base_ingredient: { tag: 'forge:ingots/zinc' },
        count: 1
      }
    ],
    energy: 16400,
    input: {
      base_ingredient: { tag: 'forge:ingots/copper' },
      count: 1
    },
    results: [
      {
        base_ingredient: { tag: 'forge:ingots/brass' },
        count: 1
      }
    ],
    slag: { tag: "forge:slag" },
    time: 100
  });
});
*/

// Depois (usando helper):
/*
ServerEvents.recipes(event => {
  createArcFurnaceRecipe(event, {
    primaryTag: 'forge:ingots/copper',
    additiveTag: 'forge:ingots/zinc',
    resultTag: 'forge:ingots/brass',
    primaryCount: 1,
    additiveCount: 1,
    resultCount: 1,
    energy: 16400,
    outputToRemove: 'create:brass_ingot'
  });
});
*/

// ============================================================================
// EXEMPLO 4: Usar createMechanicalCraftingRecipe()
// ============================================================================

// Antes:
/*
ServerEvents.recipes(event => {
  event.remove({ output: 'nuclearcraft:actuator' });
  event.custom({
    type: "create:mechanical_crafting",
    acceptMirrored: false,
    key: {
      A: { item: 'immersiveengineering:stick_steel' },
      B: { item: 'immersiveengineering:plate_duroplast' },
      C: { item: 'create:mechanical_piston' },
      D: { item: 'immersiveengineering:wirecoil_steel' },
      E: { item: 'createbigcannons:recoil_spring' }
    },
    pattern: ['  A', 'BC ', 'DBE'],
    result: { item: 'nuclearcraft:actuator' }
  });
});
*/

// Depois (usando helper):
/*
ServerEvents.recipes(event => {
  createMechanicalCraftingRecipe(event, {
    acceptMirrored: false,
    key: {
      A: { item: 'immersiveengineering:stick_steel' },
      B: { item: 'immersiveengineering:plate_duroplast' },
      C: { item: 'create:mechanical_piston' },
      D: { item: 'immersiveengineering:wirecoil_steel' },
      E: { item: 'createbigcannons:recoil_spring' }
    },
    pattern: ['  A', 'BC ', 'DBE'],
    result: 'nuclearcraft:actuator',
    outputToRemove: 'nuclearcraft:actuator'
  });
});
*/

// ============================================================================
// DICAS IMPORTANTES
// ============================================================================

/*
1. IMPORTAR O ARQUIVO:
   - O arquivo recipeHelpers.js é carregado automaticamente pelo KubeJS
   - Você pode usá-lo em qualquer arquivo de receitas

2. PADRÃO DE NOMEAÇÃO:
   - primaryTag / primaryItem / primaryCount
   - secondaryTag / secondaryItem / secondaryCount
   - resultTag / resultItem / resultCount
   - Sempre usa nomes descritivos!

3. OPTIONAL PARAMETERS:
   - outputToRemove: Opcional, remova apenas se necessário

4. BOAS PRÁTICAS:
   - Sempre adicione comentários explicando a receita
   - Use nomes de variáveis descritivos
   - Siga o padrão de indentação (2 espaços)
   - Documente parâmetros com comentários

5. EXEMPLO COMPLETO COM COMENTÁRIO:
*/

/*
ServerEvents.recipes(event => {
  // Receita para produção de electrum com ouro e prata
  // Combina metais preciosos em proporção 2:2 para 1 electrum
  createAlloyKilnRecipe(event, {
    primaryTag: 'forge:ingots/gold',
    secondaryTag: 'forge:ingots/silver',
    resultTag: 'forge:ingots/electrum',
    primaryCount: 2,
    secondaryCount: 2,
    resultCount: 1,
    time: 200,
    outputToRemove: 'immersiveengineering:ingot_electrum'
  });
});
*/
