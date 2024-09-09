'use client';

import { Button } from '@/components/atoms/IconButton/styles';
import {
  armorEnchantments,
  armors,
  armorsModifications,
  enchantedArmors,
  enchantedWeapons,
  itemsRewards,
  majorAccessories,
  mediumAccessories,
  minorAccessories,
  miscellaneousItems,
  potions,
  weapons,
  weaponsEnchantments,
  weaponsModifications,
} from '@/data/items';
import { majorRych, mediumRych, minorRych, moneyRewards } from '@/data/money';
import type { ItemMod } from '@/interfaces/Rewards';
import {
  ITEM_TYPE,
  type ItemReward,
  LEVELS,
  MONEY_TYPE,
  type MoneyReward,
  type Rych,
} from '@/interfaces/Rewards';
import React, { useState } from 'react';

interface RewardGenerated {
  moneyRoll: number;
  itemRoll: number;
  money?: MoneyReward;
  item?: ItemReward;
  moneyApplied?: string;
  itemApplied?: string;
}

function getRandomItemFromArray<ElementType>(
  array: ElementType[]
): ElementType {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomArbitrary(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function rollDice(
  qty: number,
  dice: number,
  discardLowestDiceQty = 0
): number {
  const results: number[] = [];
  for (let i = 0; i < qty; i += 1) {
    results.push(getRandomArbitrary(1, dice));
  }

  results.sort((a, b) => a - b);
  let sum = 0;
  for (let i = discardLowestDiceQty; i < qty; i += 1) {
    sum += results[i];
  }

  return sum;
}

export function rewardGenerator(nd: LEVELS, isHalf: boolean): RewardGenerated {
  const moneyValue = rollDice(1, 100);
  const itemValue = rollDice(1, 100);

  const moneyReward = moneyRewards[nd];
  const itemsReward = itemsRewards[nd];
  const halfRoll = rollDice(1, 2);

  const money = moneyReward.find(
    (r: { min: number; max: number }) =>
      moneyValue >= r.min && moneyValue <= r.max
  );

  const item = itemsReward.find(
    (r: { min: number; max: number }) =>
      itemValue >= r.min && itemValue <= r.max
  );

  return {
    itemRoll: itemValue,
    moneyRoll: moneyValue,
    money: isHalf && halfRoll === 2 ? undefined : money,
    item: isHalf && halfRoll === 1 ? undefined : item,
  };
}

export function applyMoneyReward(
  money: MoneyReward,
  isDouble?: boolean
): string {
  if (money.reward) {
    const rewardType = money.reward.money;
    const diceRoll = rollDice(money.reward.qty, money.reward.dice);

    let value = money.reward.som
      ? diceRoll + money.reward.som
      : diceRoll * money.reward.mult;

    if (isDouble) value *= 2;

    let wealth: Rych | undefined;
    const wealthRoll = rollDice(1, 100);

    if (rewardType === MONEY_TYPE.RIQUEZA_MENOR) {
      wealth = minorRych.find(
        (mr) => wealthRoll >= mr.min && wealthRoll <= mr.max
      );
    } else if (rewardType === MONEY_TYPE.RIQUEZA_MEDIA) {
      wealth = mediumRych.find(
        (mr) => wealthRoll >= mr.min && wealthRoll <= mr.max
      );
    } else if (rewardType === MONEY_TYPE.RIQUEZA_MAIOR) {
      wealth = majorRych.find(
        (mr) => wealthRoll >= mr.min && wealthRoll <= mr.max
      );
    }

    if (wealth) {
      let str = '';

      for (let i = 0; i < value; i += 1) {
        let wealthInnerRoll = rollDice(wealth.value.qtd, wealth.value.dice);
        let wealthValue = wealthInnerRoll * wealth.value.mult;

        if (isDouble) wealthValue *= 2;

        const wealthItem = getRandomItemFromArray(wealth.items);
        str = str.concat(
          `[${wealth.value.qtd}d${wealth.value.dice}(${wealthInnerRoll})x${
            wealth.value.mult
          }] ${wealthItem} no valor de T$${wealthValue}${
            i === value - 1 ? '.' : '; '
          }`
        );
      }

      return `(${diceRoll}) ${str}`;
    }

    return `(${diceRoll}) ${value} ${rewardType}`;
  }

  return '--';
}

const getMiscellaneousItem = (diceRoll: number) => {
  const rolledItem = miscellaneousItems.find(
    (i) => diceRoll >= i.min && diceRoll <= i.max
  );

  if (rolledItem) {
    if (rolledItem.effect) {
      const itemRoll = rollDice(rolledItem.effect.qtd, rolledItem.effect.dice);
      return `${itemRoll} ${rolledItem.item}`;
    }

    return `(${diceRoll}) ${rolledItem.item}`;
  }

  return '';
};

const getSpecialMaterial = () => {
  const materialRoll = rollDice(1, 6);

  switch (materialRoll) {
    case 1:
      return 'aço rubi';
    case 2:
      return 'adamante';
    case 3:
      return 'gelo eterno';
    case 4:
      return 'madeira Tollon';
    case 5:
      return 'matéria vermelha';
    case 6:
      return 'mitral';
    default:
      break;
  }

  return '';
};

const getWeaponModification = (mods: number): string => {
  let realQtd = mods;
  let str = '(';
  let remainingMods = mods;
  const takenMods: ItemMod[] = [];

  for (let index = 0; index < realQtd; index += 1) {
    const modRoll = rollDice(1, 100);
    const modification = weaponsModifications.find(
      (wm) => modRoll >= wm.min && modRoll <= wm.max
    );

    if (modification) {
      if (takenMods.includes(modification)) {
        realQtd += 1;
      } else if (modification.double && mods === 1) {
        realQtd += 1;
      } else if (modification.double && remainingMods < 2) {
        realQtd += 1;
      } else {
        if (modification.double) realQtd -= 1;

        remainingMods -= 1;
        takenMods.push(modification);
        if (modification.mod === 'Material especial')
          str = str.concat(`Material ${getSpecialMaterial()}; `);
        else
          str = str.concat(
            `${modification.mod}${index === realQtd - 1 ? '' : '; '}`
          );
      }
    }
  }

  return `${str})`;
};

const getArmorModification = (mods: number): string => {
  let realQtd = mods;
  let str = '(';
  let remainingMods = mods;
  const takenMods: ItemMod[] = [];

  for (let index = 0; index < realQtd; index += 1) {
    const modRoll = rollDice(1, 100);

    const modification = armorsModifications.find(
      (wm) => modRoll >= wm.min && modRoll <= wm.max
    );

    if (modification) {
      if (takenMods.includes(modification)) {
        realQtd += 1;
      } else if (modification.double && mods === 1) {
        realQtd += 1;
      } else if (modification.double && remainingMods < 2) {
        realQtd += 1;
      } else {
        if (modification.double) realQtd -= 1;

        remainingMods -= 1;
        takenMods.push(modification);
        if (modification.mod === 'Material especial')
          str = str.concat(`Material ${getSpecialMaterial()}; `);
        else
          str = str.concat(
            `${modification.mod}${index === realQtd - 1 ? '' : '; '}`
          );
      }
    }
  }

  return `${str})`;
};

const getWeaponOrArmor = (diceRoll: number, mods: number) => {
  const typeRoll = rollDice(1, 6);

  if (typeRoll >= 1 && typeRoll <= 4) {
    // É uma arma
    const rolledItem = weapons.find(
      (i) => typeRoll >= i.min && typeRoll <= i.max
    );

    if (rolledItem) {
      if (mods > 0) {
        const modsStr = getWeaponModification(mods);
        return `(${typeRoll},${diceRoll}) ${rolledItem.item.nome} ${modsStr}`;
      }

      return `(${typeRoll},${diceRoll}) ${rolledItem.item.nome}`;
    }
  } else if (typeRoll >= 5 && typeRoll <= 6) {
    // É uma armadura ou escudo
    const rolledItem = armors.find(
      (i) => typeRoll >= i.min && typeRoll <= i.max
    );

    if (rolledItem) {
      if (mods > 0) {
        const modsStr = getArmorModification(mods);
        return `(${typeRoll},${diceRoll}) ${rolledItem.item.nome} ${modsStr}`;
      }

      return `(${typeRoll},${diceRoll}) ${rolledItem.item.nome}`;
    }
  }

  return '';
};

const getPotionItem = (qty: number, dice: number, som: number) => {
  const qtd = rollDice(qty, dice) + som;
  let rst = '';

  for (let i = 0; i < qtd; i += 1) {
    const potionRoll = rollDice(1, 100);
    const rolledPotion = potions.find(
      (p) => potionRoll >= p.min && potionRoll <= p.max
    );

    if (rolledPotion)
      rst = rst.concat(`${rolledPotion.item}${i === qtd - 1 ? '.' : '; '}`);
  }

  if (som > 0) return `(${qtd - som}) ${rst}`;
  return `(${qtd}) ${rst}`;
};

const getMagicalItem = (qtd: number) => {
  const itemTypeRoll = rollDice(1, 6);

  if (itemTypeRoll >= 1 && itemTypeRoll <= 2) {
    // É uma arma
    const weaponRoll = rollDice(1, 100);
    const weapon = weapons.find(
      (w) => weaponRoll >= w.min && weaponRoll <= w.max
    );

    let str = `${weapon?.item.nome} mágico (`;
    let realQtd = qtd;

    for (let i = 0; i < realQtd; i += 1) {
      const enchantmentType = rollDice(1, 100);
      if (enchantmentType < 91) {
        const enchantment = weaponsEnchantments.find(
          (e) => enchantmentType >= e.min && enchantmentType <= e.max
        );

        if (enchantment) {
          /* Se o encantamento conta como dois e a arma só deveria ter
          um efeito mágico, vamos rolar mais uma vez */
          // eslint-disable-next-line max-depth
          if (enchantment.double && qtd === 1) {
            realQtd += 1;
          } else {
            // Se o encantando conta como dois, tira um encantamento.
            // eslint-disable-next-line max-depth
            if (enchantment.double) realQtd -= 1;
            str = str.concat(
              `${enchantment.enchantment}${i === qtd - 1 ? '' : '; '}`
            );
          }
        }
      } else {
        const sRoll = rollDice(1, 100);
        const w = enchantedWeapons.find(
          (nw) => sRoll >= nw.min && sRoll <= nw.max
        );

        if (w) return `(${itemTypeRoll},${sRoll}) ${w.item})`;
      }
    }

    return `(${itemTypeRoll},${weaponRoll}) ${str})`;
  }

  if (itemTypeRoll === 3) {
    const armorRoll = rollDice(1, 100);
    const armor = armors.find((a) => armorRoll >= a.min && armorRoll <= a.max);

    let str = `${armor?.item.nome} mágico (`;
    let realQtd = qtd;

    for (let i = 0; i < realQtd; i += 1) {
      const enchantmentType = rollDice(1, 100);
      if (enchantmentType < 91) {
        const enchantment = armorEnchantments.find(
          (e) => enchantmentType >= e.min && enchantmentType <= e.max
        );

        if (enchantment) {
          /* Se o encantamento conta como dois e a arma só deveria ter
          um efeito mágico, vamos rolar mais uma vez */
          // eslint-disable-next-line max-depth
          if (enchantment.double && qtd === 1) {
            realQtd += 1;
          } else if (armor?.item.group !== 'Escudo' && enchantment.onlyShield) {
            realQtd += 1;
          } else {
            // eslint-disable-next-line max-depth
            if (enchantment.double) realQtd -= 1;
            str = str.concat(
              `${enchantment.enchantment}${i === qtd - 1 ? '' : '; '}`
            );
          }
        }
      } else {
        const aRoll = rollDice(1, 100);
        const w = enchantedArmors.find(
          (na) => aRoll >= na.min && aRoll <= na.max
        );

        if (w) return `(${itemTypeRoll},${aRoll}) ${w.item})`;
      }
    }

    return `(${itemTypeRoll},${armorRoll}) ${str})`;
  }
  if (itemTypeRoll >= 4 && itemTypeRoll <= 6) {
    const acessoryRoll = rollDice(1, 100);
    if (qtd === 1) {
      const item = minorAccessories.find(
        (ma) => acessoryRoll >= ma.min && acessoryRoll <= ma.max
      );
      return `(${itemTypeRoll},${acessoryRoll}) ${item?.item}`;
    }
    if (qtd === 3) {
      const item = mediumAccessories.find(
        (ma) => acessoryRoll >= ma.min && acessoryRoll <= ma.max
      );
      return `(${itemTypeRoll},${acessoryRoll}) ${item?.item}`;
    }
    if (qtd === 4) {
      const item = majorAccessories.find(
        (ma) => acessoryRoll >= ma.min && acessoryRoll <= ma.max
      );
      return `(${itemTypeRoll},${acessoryRoll}) ${item?.item}`;
    }
  }

  return '';
};

export function applyItemReward(item: ItemReward, isDouble?: boolean): string {
  const diceRoll = rollDice(1, 100);
  let rtn = '';
  const l = isDouble ? 2 : 1;

  for (let index = 0; index < l; index += 1) {
    if (item.reward?.type === ITEM_TYPE.DIVERSO) {
      // Item diverso, rola 1d100 para determinar qual item é encontrado.
      rtn += getMiscellaneousItem(diceRoll);
    }
    if (
      item.reward?.type === ITEM_TYPE.ARMA_ARMADURA_ESOTERICO ||
      item.reward?.type === ITEM_TYPE.SUPERIOR
    ) {
      /* Armas e armaduras. Rola 1d6. Um resultado 1 a 4 é uma arma. Um resultado 5 ou 6, uma armadura ou escudo.
      Então, rola 1d100 para determinar o item encontrado. */
      rtn += getWeaponOrArmor(diceRoll, item.reward.mods || 0);
    }
    if (item.reward?.type === ITEM_TYPE.POCAO) {
      /* É uma poção. Determinar primeira quantas poções foram encontradas
      depois rolar 1d100 para determinar quais foram encontradas. */
      if (item.reward.som)
        rtn += getPotionItem(
          item.reward.qty,
          item.reward.dice,
          item.reward.som
        );
      rtn += getPotionItem(item.reward.qty, item.reward.dice, 0);
    }
    if (item.reward?.type === ITEM_TYPE.MAGICO_MENOR) {
      /* Para itens mágicos, role 1d6. Em um resultado 1 ou 2, é encontrado uma arma.
      Em um resultado 3, uma armadura. Um resultado 4, 5 ou 6 é encontrado um acessório. */
      rtn += getMagicalItem(1);
    }
    if (item.reward?.type === ITEM_TYPE.MAGICO_MEDIO) {
      rtn += getMagicalItem(3);
    }
    if (item.reward?.type === ITEM_TYPE.MAGICO_MAIOR) {
      rtn += getMagicalItem(4);
    }

    rtn += '\n';
  }

  return rtn;
}

type SelectedOption = { value: string; label: string };

const nds = Object.keys(LEVELS).map((nd) => ({
  value: nd,
  label: `ND ${nd.replace('F', '').replace('S', '1/')}`,
}));

const Tesouros = () => {
  const [items, setItems] = useState<RewardGenerated[]>();
  const [nd, setNd] = useState<LEVELS>(LEVELS.S4);
  const [rewardMult, setSrewardMult] = useState<'Padrão' | 'Metade' | 'Dobro'>(
    'Padrão'
  );

  const handleRewardMultChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const val = event.target.value;
    if (val === 'Padrão' || val === 'Metade' || val === 'Dobro')
      setSrewardMult(val);
  };

  const onChangeNd = (newNd: { target: { value: LEVELS } }) => {
    if (newNd) setNd(newNd.target.value as LEVELS);
  };

  const onClickGenerate = () => {
    const newItems: RewardGenerated[] = [];
    const isDouble = rewardMult === 'Dobro';
    const isHalf = rewardMult === 'Metade';

    const newItem = rewardGenerator(nd, isHalf);
    if (newItem.money)
      newItem.moneyApplied = applyMoneyReward(newItem.money, isDouble);
    if (newItem.item)
      newItem.itemApplied = applyItemReward(newItem.item, isDouble);
    newItems.push(newItem);
    setItems(newItems);
  };

  const resultDiv = items?.map((item) => {
    const moneyStr = item.money?.reward
      ? `  ${item.money.reward.qty}${
          item.money.reward.dice > 1 ? `d${item.money.reward.dice}` : ''
        }${item.money.reward.mult > 1 ? `x${item.money.reward.mult} ` : ' '}${
          item.money.reward.som ? `+${item.money.reward.som} ` : ' '
        }${item.money.reward.money}`
      : '--';

    const itemStr = item.item?.reward
      ? `${
          item.item.reward.type === ITEM_TYPE.POCAO
            ? `${item.item.reward.qty}d${item.item.reward.dice}${
                item.item.reward.som ? `+${item.item.reward.som} ` : ' '
              }`
            : ''
        }${item.item.reward.type}${
          item.item.reward.type === ITEM_TYPE.SUPERIOR
            ? ` (${item.item.reward.mods} modificações) `
            : ''
        }`
      : '--';

    return (
      <div
        style={{
          marginBottom: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          padding: '10px',
        }}
      >
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0' }}>
              <th
                style={{
                  width: '10%',
                  padding: '8px',
                  border: '1px solid #ddd',
                }}
              >
                ND
              </th>
              <th
                style={{
                  width: '45%',
                  padding: '8px',
                  border: '1px solid #ddd',
                }}
                colSpan={2}
              >
                Dinheiro
              </th>
              <th
                style={{
                  width: '45%',
                  padding: '8px',
                  border: '1px solid #ddd',
                }}
                colSpan={2}
              >
                Itens
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                {nd.replace('S', '1/').replace('F', '')}
              </td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                D% = {item.moneyRoll}
              </td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                {moneyStr}
              </td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                D% = {item.itemRoll}
              </td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                {itemStr}
              </td>
            </tr>
            {(item.itemApplied || item.moneyApplied) && (
              <tr>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}></td>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}></td>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                  {item.moneyApplied}
                </td>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}></td>
                <td
                  style={{
                    padding: '8px',
                    border: '1px solid #ddd',
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {item.itemApplied}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  });

  return (
    <div id='main-screen' style={{ margin: '30px 30px 30px 25px' }}>
      <div className='rewardsFilter'>
        <label>
          ND
          <select value={nd} onChange={onChangeNd}>
            {nds.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>

        <Button onClick={onClickGenerate} type='button'>
          Gerar Recompensa
        </Button>
      </div>
      {items && resultDiv}
    </div>
  );
};

export default Tesouros;
