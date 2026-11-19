import { SafetySection } from '../types';

export const MANDATORY_SAFETY_NOTICE =
  "Always read the manufacturer's instructions before operating an appliance. Never attempt electrical repairs without qualified assistance.";

export const SAFETY_SECTIONS: SafetySection[] = [
  {
    id: 'general-electrical',
    title: 'General Electrical Safety',
    severity: 'Critical',
    summary:
      'Core electrical habits every household member should follow before plugging in or cleaning any appliance.',
    rules: [
      'Always inspect power cords and plugs for fraying, discoloration, or loose prongs before use.',
      'Plug high-wattage kitchen and laundry appliances directly into properly grounded wall sockets rather than thin extension boards.',
      'Never touch switches, plugs, or control panels with wet hands or while standing on a wet floor.',
      'Unplug appliances before wiping internal components, clearing filters, or removing stuck food.',
      'Never open outer appliance casings or attempt internal wiring repairs—always contact an authorised service technician.',
    ],
  },
  {
    id: 'kitchen-appliance',
    title: 'Kitchen Appliance Safety',
    severity: 'Essential',
    summary:
      'Everyday workspace habits that prevent burns, steam injuries, and countertop clutter in busy family kitchens.',
    rules: [
      'Keep appliances on stable, flat, dry countertops away from sink splashes and gas stove flames.',
      'Leave clear ventilation space around exhaust vents and cooling fans.',
      'Keep power cords tucked neatly away from hot surfaces, sharp knives, and counter edges where children might tug them.',
      'Keep dry oven mitts and tongs nearby when lifting hot baskets, glass bowls, or simmering cookware.',
    ],
  },
  {
    id: 'microwave-safety',
    title: 'Microwave Oven Precautions',
    applianceId: 'microwave-oven',
    severity: 'Critical',
    summary:
      'Important rules for avoiding sparks, container bursts, and hidden heat injuries when using a microwave.',
    rules: [
      'Never place metal utensils, aluminum foil, steel containers, or plates with metallic rims inside during microwave mode.',
      'Never run an empty microwave oven—always keep food or a microwave-safe cup of water inside.',
      'Avoid heating whole eggs in shells or tightly sealed jars, which can build steam pressure and burst.',
      'Stir heated liquids carefully and allow brief standing time to avoid sudden superheated splashes.',
      'Stop using the microwave immediately if door latches or hinges appear damaged.',
    ],
  },
  {
    id: 'air-fryer-safety',
    title: 'Air Fryer Precautions',
    applianceId: 'air-fryer',
    severity: 'Caution',
    summary:
      'Airflow, oil, and steam precautions for compact hot-air cooking appliances.',
    rules: [
      'Never pour deep frying oil into an air fryer drawer or basket.',
      'Keep clear space behind the rear exhaust vent and never cover the top air intake.',
      'Weight down parchment liners with food so airflow cannot lift paper onto the upper heating element.',
      'Wait until the drawer and heating chamber cool fully before washing or wiping inside.',
    ],
  },
  {
    id: 'washing-machine-safety',
    title: 'Washing Machine Safety',
    applianceId: 'washing-machine',
    severity: 'Caution',
    summary:
      'Water, electrical grounding, and moving-drum safety in laundry areas.',
    rules: [
      'Check every pocket for coins, pins, or sharp items before starting a wash cycle.',
      'Never force open a front-load door while water remains inside or the door-lock light is active.',
      'Do not wash waterproof items or cloths soaked in flammable solvents or fuels.',
      'Turn off power and water supply immediately if unusual leaks or electrical tripping occur.',
    ],
  },
  {
    id: 'refrigerator-safety',
    title: 'Refrigerator Safety',
    applianceId: 'refrigerator',
    severity: 'Essential',
    summary:
      'Safe cooling placement, defrosting discipline, and food hygiene practices.',
    rules: [
      'Never use knives, screwdrivers, or sharp tools to chip ice inside a freezer—puncturing cooling lines causes permanent damage.',
      'Ensure the refrigerator plug is grounded and never pinched tightly behind the cabinet.',
      'Keep raw meats separated in sealed trays on lower shelves away from cooked or ready-to-eat dishes.',
      'Maintain recommended side and rear clearance for heat dissipation.',
    ],
  },
  {
    id: 'induction-stove-safety',
    title: 'Induction Stove Safety',
    applianceId: 'induction-stove',
    severity: 'Critical',
    summary:
      'Precautions for magnetic cookware zones, ceramic glass tops, and cooling fans.',
    rules: [
      'Never heat empty pots on high power and never rest metal spoons, knives, or lids on active zones.',
      'Stop using the stove immediately if the ceramic glass surface develops any crack or chip.',
      'Allow the post-cooking cooling fan to complete its cycle before switching off or unplugging at the wall.',
      'Users with pacemakers or active implants should follow medical and manufacturer distance advice.',
    ],
  },
  {
    id: 'dishwasher-safety',
    title: 'Dishwasher Safety',
    applianceId: 'dishwasher',
    severity: 'Caution',
    summary:
      'Detergent selection, sharp-utensil placement, and hot-steam unloading rules.',
    rules: [
      'Use only automatic dishwasher detergent—regular liquid hand soap creates heavy foam and overflow leaks.',
      'Load sharp knives blade-down in cutlery baskets or flat on dedicated upper trays.',
      'Allow hot steam to vent briefly after a cycle finishes before unloading lower racks.',
      'Verify the bottom filter sits locked cleanly in place before running any wash.',
    ],
  },
];
