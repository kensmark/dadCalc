// dropdownOptions.ts

const dropdownOptions = [
    'Strength',
    'Health',
    'Physical power',
    
    'Agility',
    'Action speed',
    'Attack speed',
    'Item equip speed',
    'Interaction speed',
    'Movement speed',
    
    'Willpower',
    'Spell Power',
    'Magical interaction speed',
    'Buff duration',
    'Curse duration',
    'Base magic resistance',
    
    'Resourcefulness',
    'Additional Weapon Damage',
    
    'Knowledge',
    'Spell casting speed',
    'Spells',
    // The previously mentioned options
    'Magical Reduction',
    'Additional magic damage',
    'True magical damage',
    'Additional physical damage',
    'True physical damage',
    'Magic penetration',
    'Physical damage reduction',
    'Magic resistance',
    'Physical power bonus',
    'Headshot reduction',
    'Projectile damage reduction',
    'Magical healing',
    'Physical healing',
    'Weapon damage',
    //... add more options if needed
  ];
  
  const sortedDropdownOptions = dropdownOptions.sort((a, b) => a.localeCompare(b));

  export default sortedDropdownOptions;
  