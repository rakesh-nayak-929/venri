import { Appliance } from '../types';

export const HERO_KITCHEN_IMAGE =
  '/src/assets/images/hero_modern_kitchen_1795050732617.jpg';

export const INITIAL_APPLIANCES: Appliance[] = [
  {
    id: 'air-fryer',
    name: 'Air Fryer',
    shortDesc:
      'Circulates hot air around food for crisp cooking with minimal oil.',
    image: '/src/assets/images/appliance_air_fryer_1795050733114.jpg',
    introduction:
      'An air fryer is a compact countertop convection appliance that uses a heating element and a high-speed fan to circulate hot air around food. Households commonly use it for roasting vegetables, reheating leftovers without sogginess, crisping snacks, and preparing quick everyday meals using very little oil.',
    commonUses: [
      'Roasting chopped vegetables and paneer or tofu cubes evenly',
      'Reheating baked snacks so they stay crisp instead of turning chewy',
      'Cooking marinated snacks or fries with a light brush of oil',
      'Toasting bread, nuts, or small baked portions quickly',
    ],
    parts: [
      {
        name: 'Outer Housing & Air Intake Vents',
        functionDesc:
          'Insulated body that keeps heat inside and draws cool air in for circulation.',
      },
      {
        name: 'Removable Drawer / Outer Pan',
        functionDesc:
          'Catches drips and holds the perforated inner basket safely in place.',
      },
      {
        name: 'Perforated Cooking Basket / Crisper Plate',
        functionDesc:
          'Allows hot air to flow beneath and around food for even browning.',
      },
      {
        name: 'Control Panel (Dial or Touch Display)',
        functionDesc:
          'Lets you choose preset cooking modes, adjust time, and set general heat levels.',
      },
      {
        name: 'Rear Exhaust Vent',
        functionDesc:
          'Releases hot steam and air safely away from the heating chamber.',
      },
    ],
    howToUseSteps: [
      'Place the air fryer on a flat, dry, heat-resistant countertop with clear space behind the exhaust vent.',
      'Confirm the basket and crisper plate are clean, dry, and properly seated inside the drawer.',
      'Arrange food in a single, uncrowded layer so air can circulate freely around every piece.',
      'Slide the drawer firmly until it locks into place, then plug the cord directly into a suitable wall outlet.',
      'Select your desired cooking mode and timer according to your model manual and food quantity.',
      'Halfway through cooking, pull out the drawer by its handle to shake or turn food evenly, then slide it back in.',
      'Once the timer ends, use tongs or heat-safe mitts to remove food carefully without tilting hot oil.',
    ],
    recommendedSettings: [
      {
        name: 'Air Fry Mode',
        purpose: 'Crisping snacks, potatoes, and lightly oiled vegetables',
        guidance:
          'Use medium-to-high settings listed in your manual and shake the basket midway for uniform browning.',
      },
      {
        name: 'Roast Mode',
        purpose: 'Cooking denser root vegetables or marinated proteins',
        guidance:
          'Cut ingredients into even bite-sized pieces so everything finishes at the same time.',
      },
      {
        name: 'Reheat Mode',
        purpose: 'Warming previously cooked pastries, samosas, or flatbreads',
        guidance:
          'Use shorter cycles at gentler heat levels so the outside warms without drying out the inside.',
      },
      {
        name: 'Bake Mode',
        purpose: 'Small oven-safe ramekins, muffins, or breads',
        guidance:
          'Only use heat-resistant metal, silicone, or ceramic bakeware that fits comfortably with airflow clearance.',
      },
    ],
    safetyPrecautions: [
      'Leave clear ventilation space around the back and top exhaust vents; never push it tightly against walls or curtains.',
      'Never pour deep frying oil into the basket or drawer—air fryers are not deep fryers.',
      'Do not place loose parchment paper inside without food weighing it down, or it may lift toward the heating element.',
      'Always pull out by the insulated handle and keep hands away from escaping steam when opening.',
      'Unplug and allow the unit to cool completely before wiping the interior or washing the basket.',
    ],
    cleaningSteps: [
      'Unplug the air fryer and wait until the drawer and interior cavity have cooled down completely.',
      'Remove the drawer and crisper tray; wash them gently with warm water, mild dish soap, and a soft sponge.',
      'Avoid metal scrubbers or harsh abrasives that can scratch non-stick coatings.',
      'Wipe the exterior body and interior chamber (avoiding wet drips on electrical parts) using a lightly dampened soft cloth.',
      'Dry all removable parts thoroughly before sliding them back into the unit.',
    ],
    troubleshooting: [
      {
        problem: 'Food cooks unevenly or stays soft on one side',
        possibleCause: 'Basket is overcrowded, blocking hot air circulation.',
        solution:
          'Cook in smaller batches in a single layer and shake or flip items halfway through the cycle.',
      },
      {
        problem: 'White smoke appears during cooking',
        possibleCause: 'Excess oil or grease residue remaining in the bottom pan.',
        solution:
          'Pause safely, drain excess oil from the drawer, and clean grease buildup before your next batch.',
      },
      {
        problem: 'Unit does not start when timer is set',
        possibleCause: 'Drawer safety switch is not fully engaged or outlet has no power.',
        solution:
          'Push the basket drawer firmly until it clicks flush, and verify the wall socket switch.',
      },
    ],
    energySavingTips: [
      'Only preheat when your recipe or manufacturer manual specifically recommends it.',
      'Use an air fryer for small-to-medium portions instead of heating a full-size wall oven.',
      'Keep the basket vents clean so air circulates quickly and finishes food on time.',
    ],
    defaultMaintenanceTask: 'Clean air fryer basket',
  },
  {
    id: 'microwave-oven',
    name: 'Microwave Oven',
    shortDesc:
      'Heats, defrosts, and warms everyday meals quickly using microwave energy.',
    image: '/src/assets/images/appliance_microwave_1795050733925.jpg',
    introduction:
      'A microwave oven uses electromagnetic waves to agitate water molecules inside food, warming meals rapidly from within. Solo, grill, and convection models are widely used in homes for reheating cooked dishes, defrosting frozen ingredients, steaming vegetables, and boiling water safely.',
    commonUses: [
      'Reheating cooked rice, curries, milk, and leftovers evenly',
      'Defrosting frozen vegetables, bread, or refrigerated portions',
      'Steaming quick vegetables in covered microwave-safe bowls',
      'Warming beverages or melting butter gently at reduced power',
    ],
    parts: [
      {
        name: 'Glass Turntable & Roller Ring',
        functionDesc:
          'Rotates food steadily so energy distributes evenly across the dish.',
      },
      {
        name: 'Waveguide Cover (Mica Sheet)',
        functionDesc:
          'Protects the internal emitter opening from food splatters; must stay clean and intact.',
      },
      {
        name: 'Door Seal & Safety Interlock Latches',
        functionDesc:
          'Prevents operation whenever the door is open or improperly closed.',
      },
      {
        name: 'Control Keypad / Rotary Dial',
        functionDesc:
          'Sets heating duration, power percentage levels, and auto-defrost programs.',
      },
      {
        name: 'Side & Rear Cooling Vents',
        functionDesc:
          'Allows internal electronics to stay cool during operation.',
      },
    ],
    howToUseSteps: [
      'Confirm the microwave sits on a stable, level counter with unobstructed air vents.',
      'Transfer food into a clean microwave-safe glass or ceramic container—never use metal, foil, or metallic-rimmed plates.',
      'Cover food loosely with a vented microwave-safe lid or damp paper towel to prevent splatters and trap moisture.',
      'Place the dish on the glass turntable and close the door securely until it latches.',
      'Choose an appropriate power level and short starting duration; stir or rotate halfway for thick foods.',
      'Wait a few seconds after the beep before opening, then lift out the container with dry oven mitts.',
    ],
    recommendedSettings: [
      {
        name: 'High Power Level',
        purpose: 'Boiling water, steaming vegetables, or quick heating of liquids',
        guidance:
          'Heat liquids in short intervals and stir carefully to prevent sudden superheating splashes.',
      },
      {
        name: 'Medium Power Level',
        purpose: 'Reheating cooked curries, pasta, or mixed leftovers evenly',
        guidance:
          'Slower energy pulses let heat travel to the center without overheating the edges.',
      },
      {
        name: 'Defrost Mode',
        purpose: 'Thawing frozen food safely without cooking the outer edges',
        guidance:
          'Separate food pieces midway and cook promptly after defrosting.',
      },
      {
        name: 'Low / Soften Level',
        purpose: 'Softening refrigerated butter or warming delicate sauces',
        guidance:
          'Check every few seconds so delicate dairy does not separate.',
      },
    ],
    safetyPrecautions: [
      'Never place metal bowls, spoons, aluminum foil, twist ties, or steel tiffins inside during microwave mode.',
      'Do not run the microwave empty—always ensure food or a cup of water is inside when testing.',
      'Never heat whole eggs in shells or tightly sealed jars/bottles, as steam pressure can cause bursting.',
      'Stop using the appliance immediately if the door hinges, glass, or safety latches look damaged, and contact an authorised technician.',
      'Never remove the outer casing; high-voltage components remain dangerous even when unplugged.',
    ],
    cleaningSteps: [
      'Place a microwave-safe bowl of water with a slice of lemon or a splash of vinegar inside and heat briefly to loosen dried splatters with steam.',
      'Unplug the unit before wiping the interior cavity, ceiling, and waveguide cover gently with a soft damp cloth.',
      'Lift out the glass turntable and roller ring to wash with mild dish soap and dry completely.',
      'Wipe the door gasket and touch panel gently using a wrung microfiber cloth—avoid spraying cleaner directly into vents.',
    ],
    troubleshooting: [
      {
        problem: 'Food stays cold in the center while edges are hot',
        possibleCause: 'Dish is too dense or heated at maximum power without stirring.',
        solution:
          'Spread food into a ring shape with a shallow center, lower the power level, and stir midway.',
      },
      {
        problem: 'Turntable wobbles or makes scraping sounds',
        possibleCause: 'Roller ring is misaligned or crumbs are trapped underneath.',
        solution:
          'Lift out the glass plate, wipe the cavity floor clean, and seat the roller ring flat on its track.',
      },
      {
        problem: 'Sparks appear inside the cavity',
        possibleCause: 'Hidden metal trim on dishware, foil fragment, or burnt grease on waveguide cover.',
        solution:
          'Stop immediately, unplug, inspect dishware for metallic accents, and gently clean the interior.',
      },
    ],
    energySavingTips: [
      'Use a microwave instead of a large oven when warming single or two-person meal portions.',
      'Cover containers loosely with a vented lid so steam heats food faster.',
      'Keep the interior walls clean; dried food residue absorbs energy that should heat your meal.',
    ],
    defaultMaintenanceTask: 'Clean microwave interior',
  },
  {
    id: 'washing-machine',
    name: 'Washing Machine',
    shortDesc:
      'Automates washing, rinsing, and spinning laundry while protecting fabric care.',
    image: '/src/assets/images/appliance_washing_machine_1795050734803.jpg',
    introduction:
      'A washing machine automates soaking, agitating, rinsing, and spinning clothes to remove dirt with consistent water and detergent efficiency. Front-load and top-load models offer specialized wash programs tailored for cottons, synthetics, delicates, and heavy bedding.',
    commonUses: [
      'Daily mixed household laundry (shirts, trousers, everyday cottons)',
      'Gentle washing for delicate knits, woollens, or lightly soiled clothes',
      'Sanitizing towels and bedsheets using appropriate wash cycles',
      'Quick refresh cycles for lightly worn garments',
    ],
    parts: [
      {
        name: 'Wash Drum & Agitator / Paddles',
        functionDesc:
          'Holds laundry and tumbles or rotates clothes gently through soapy water.',
      },
      {
        name: 'Detergent & Softener Dispenser Drawer',
        functionDesc:
          'Releases detergent and fabric conditioner at the right moment in the wash cycle.',
      },
      {
        name: 'Lint / Drain Pump Filter',
        functionDesc:
          'Traps coins, buttons, hair, and lint before water drains out.',
      },
      {
        name: 'Door Rubber Gasket (Front-Load)',
        functionDesc:
          'Forms a watertight seal around the door during washing and spinning.',
      },
      {
        name: 'Water Inlet Hose & Mesh Screen',
        functionDesc:
          'Supplies clean water and catches sediment from household plumbing.',
      },
    ],
    howToUseSteps: [
      'Sort clothes by colour, fabric weight, and care label; empty every pocket and zip up zippers.',
      'Load garments loosely into the drum without packing them tightly—leave hand-width space at the top.',
      'Add the recommended amount of machine-compatible detergent into the main dispenser compartment.',
      'Close the door or lid firmly, turn on the water tap, and switch on power with dry hands.',
      'Select the wash program matching your fabric type and soil level, then press Start.',
      'Remove washed clothes promptly when the cycle finishes and leave the door slightly ajar to air dry the drum.',
    ],
    recommendedSettings: [
      {
        name: 'Cotton / Normal Cycle',
        purpose: 'Everyday durable cottons, uniforms, towels, and bedsheets',
        guidance:
          'Balances thorough tumbling and full rinse cycles for heavily worn daily items.',
      },
      {
        name: 'Quick / Express Wash',
        purpose: 'Small loads of lightly worn clothes needing a fast refresh',
        guidance:
          'Keep the drum under half full and use less detergent so rinsing completes cleanly.',
      },
      {
        name: 'Delicates / Gentle Cycle',
        purpose: 'Silks, lace, fine knits, and delicate synthetic garments',
        guidance:
          'Uses gentle drum motion and lower spin speed to prevent stretching or snagging.',
      },
      {
        name: 'Tub Clean / Drum Clean',
        purpose: 'Periodic internal maintenance without laundry inside',
        guidance:
          'Run monthly according to your manual to flush out detergent buildup and odors.',
      },
    ],
    safetyPrecautions: [
      'Never open a front-load door forcefully while water is inside or the door-lock indicator is lit.',
      'Do not wash waterproof raincoats, rubber-backed mats, or fuel-soaked rags in the machine.',
      'Keep power cords, plugs, and wall switches dry; avoid touching the outlet with wet hands.',
      'Check pockets carefully for coins, pins, or keys that can damage the drum or drain pump.',
      'For persistent leaks, electrical tripping, or drum motor noises, turn off water/power and call an authorised technician.',
    ],
    cleaningSteps: [
      'Pull out the detergent drawer (check the release tab in your manual) and rinse away sticky residue under warm running water.',
      'Wipe inside the rubber door gasket folds of front-load machines after washes to remove trapped lint and moisture.',
      'Place a shallow tray beneath the lower drain pump filter flap, open carefully, clear trapped lint or coins, and secure the cap tightly.',
      'Run a periodic empty drum-clean cycle as advised by your manufacturer to keep the tub fresh.',
    ],
    troubleshooting: [
      {
        problem: 'Machine vibrates heavily or walks during spin',
        possibleCause: 'Unevenly distributed single heavy item or unlevelled feet.',
        solution:
          'Pause the cycle, redistribute towels or blankets evenly around the drum, and check that all four feet sit firmly on the floor.',
      },
      {
        problem: 'Musty odor inside the drum',
        possibleCause: 'Moisture trapped from keeping the door closed and detergent residue.',
        solution:
          'Wipe the gasket dry after washing, clean the dispenser drawer, and leave the door slightly ajar between washes.',
      },
      {
        problem: 'Water drains slowly or remains in the drum',
        possibleCause: 'Blocked drain pump filter or kinked drain hose.',
        solution:
          'Unplug the machine, inspect the rear drain hose for bends, and clean the accessible lint/pump filter.',
      },
    ],
    energySavingTips: [
      'Wash full—not overloaded—batches rather than running repeated tiny loads.',
      'Use cold or cool water washes for everyday lightly soiled clothes whenever fabric care allows.',
      'Avoid using excess detergent; extra foam forces extra rinse cycles and wastes water.',
    ],
    defaultMaintenanceTask: 'Clean washing machine filter',
  },
  {
    id: 'refrigerator',
    name: 'Refrigerator',
    shortDesc:
      'Preserves fresh produce, dairy, cooked food, and frozen items around the clock.',
    image: '/src/assets/images/appliance_refrigerator_1795050734754.jpg',
    introduction:
      'A refrigerator removes heat from its insulated interior compartments to keep perishable food fresh and slow bacterial growth. Organizing items by temperature zone and maintaining clean door seals ensures food stays safe longer while reducing electricity consumption.',
    commonUses: [
      'Chilling milk, yogurt, fresh fruits, vegetables, and cooked leftovers',
      'Freezing ice, frozen peas, breads, and long-term meal prep',
      'Keeping herbs and leafy greens crisp inside humidity-controlled crisper drawers',
      'Safely thawing frozen items overnight on lower shelves',
    ],
    parts: [
      {
        name: 'Fresh Food Compartment & Adjustable Shelves',
        functionDesc:
          'Main chilled zone for dairy, cooked foods, and daily beverages.',
      },
      {
        name: 'Crisper / Vegetable Drawers',
        functionDesc:
          'Maintains higher humidity to prevent leafy greens and produce from wilting.',
      },
      {
        name: 'Freezer Compartment & Air Vents',
        functionDesc:
          'Keeps frozen items solid and circulates cold air; vents must remain unblocked.',
      },
      {
        name: 'Magnetic Door Gasket (Rubber Seal)',
        functionDesc:
          'Seals warm kitchen air out so internal cooling stays steady.',
      },
      {
        name: 'Control Dial / Digital Display',
        functionDesc:
          'Adjusts general cooling intensity for seasonal ambient room changes.',
      },
    ],
    howToUseSteps: [
      'Position the refrigerator away from direct sunlight, ovens, or stoves, leaving clearance around the back and sides for heat release.',
      'Wait for the cooling system to stabilize as instructed in your manual before loading a newly installed fridge.',
      'Allow hot cooked dishes to cool to room temperature before placing them inside in covered containers.',
      'Arrange items with small gaps between containers so cold air circulates smoothly across shelves.',
      'Keep raw meats or unwashed produce separated on lower shelves or sealed trays to prevent drips.',
      'Close doors promptly after picking items to avoid warm humid air entering.',
    ],
    recommendedSettings: [
      {
        name: 'Normal / Daily Cooling Setting',
        purpose: 'Balanced everyday cooling for mixed groceries and leftovers',
        guidance:
          'Check your manufacturer dial guide for medium seasonal settings rather than maximum cold year-round.',
      },
      {
        name: 'Crisper High-Humidity Setting',
        purpose: 'Leafy greens, herbs, and thin-skinned vegetables',
        guidance:
          'Closing the crisper vent keeps moisture inside so greens stay crisp.',
      },
      {
        name: 'Vacation / Eco Mode (If Equipped)',
        purpose: 'Extended travel when the fresh compartment is mostly emptied',
        guidance:
          'Follow your manual to ensure perishable food is removed before switching modes.',
      },
    ],
    safetyPrecautions: [
      'Never use sharp knives or metal picks to chip ice off freezer walls—you can puncture cooling lines.',
      'Ensure the power cord is not pinched behind the refrigerator and connects to a properly grounded outlet.',
      'Never store flammable sprays or volatile solvents inside a refrigerator.',
      'If cooling stops completely or unusual electrical burning smells occur, unplug safely and call an authorised service centre.',
    ],
    cleaningSteps: [
      'Empty shelves section by section and wipe spills promptly using mild baking soda solution or gentle dish soap.',
      'Wipe the magnetic rubber door gaskets with warm soapy water and dry thoroughly so they seal tightly.',
      'Check the door seal using a sheet of paper: close the door on a paper strip—if it slides out effortlessly, clean or inspect the gasket.',
      'Gently vacuum dust from rear or bottom condenser grilles (after unplugging) as guided by your manual.',
    ],
    troubleshooting: [
      {
        problem: 'Fresh vegetables freeze in the back of the fridge',
        possibleCause: 'Items placed directly against cold air vents or dial set too cold.',
        solution:
          'Move delicate produce forward away from rear air outlets and adjust the cooling setting slightly warmer.',
      },
      {
        problem: 'Condensation or water droplets form inside',
        possibleCause: 'Door left slightly ajar, worn gasket, or uncovered warm food placed inside.',
        solution:
          'Cover liquids and leftovers, check that tall bottles are not blocking the door, and wipe the door gasket clean.',
      },
      {
        problem: 'Exterior side panels feel warm',
        possibleCause: 'Normal heat-dissipation tubing built into side walls on many modern models.',
        solution:
          'Ensure adequate side ventilation space as specified in your installation guide.',
      },
    ],
    energySavingTips: [
      'Cool hot food to room temperature before refrigerating so the compressor works less.',
      'Check door seals quarterly so cold air never leaks into the kitchen.',
      'Avoid leaving doors open while deciding what to cook—organize items by category.',
    ],
    defaultMaintenanceTask: 'Check refrigerator door seals',
  },
  {
    id: 'induction-stove',
    name: 'Induction Stove',
    shortDesc:
      'Heats magnetic cookware directly using electromagnetic coils for fast, cool-touch cooking.',
    image: '/src/assets/images/appliance_induction_stove_1795050735223.jpg',
    introduction:
      'An induction stove uses a copper coil beneath a smooth ceramic glass top to create an alternating magnetic field that heats magnetic cookware directly. Because heat forms inside the pan base rather than an exposed flame or coil, cooking is rapid, responsive, and easy to wipe clean.',
    commonUses: [
      'Boiling water, milk, and soups quickly with precise power control',
      'Everyday sautéing, simmering curries, and pan-frying',
      'Timed slow-cooking using built-in shutoff timers',
      'Keeping cooked food warm at gentle simmer levels',
    ],
    parts: [
      {
        name: 'Ceramic Glass Cooktop Surface',
        functionDesc:
          'Smooth heat-resistant glass zone where cookware sits; stays cooler than open flames.',
      },
      {
        name: 'Marked Cooking Zone Ring',
        functionDesc:
          'Shows where the internal induction coil sits for optimal pan alignment.',
      },
      {
        name: 'Touch Control Panel & Timer',
        functionDesc:
          'Adjusts heat/wattage steps, preset cooking options, child lock, and auto-off timer.',
      },
      {
        name: 'Bottom Cooling Fan & Air Vents',
        functionDesc:
          'Cools internal electronics during and briefly after cooking.',
      },
    ],
    howToUseSteps: [
      'Place the portable induction stove on a flat, dry, non-metallic surface with clear airflow underneath and at the rear vents.',
      'Verify your pot or pan is induction-compatible—a simple fridge magnet should stick firmly to its flat base.',
      'Center the cookware cleanly on the marked circle before turning the unit on.',
      'Plug directly into a dedicated, properly rated wall socket (avoid loose multi-plug adapters).',
      'Select power or preset mode, start at moderate heat, and adjust smoothly as cooking progresses.',
      'After switching off, wait for the cooling fan to finish running before unplugging the unit.',
    ],
    recommendedSettings: [
      {
        name: 'Boil / High Power',
        purpose: 'Bringing water, pasta, or broths rapidly to a boil',
        guidance:
          'Stay nearby with milk or thin liquids since induction heats much faster than conventional gas or coil stoves.',
      },
      {
        name: 'Sauté / Fry Mode',
        purpose: 'Browning onions, spices, vegetables, and flatbreads',
        guidance:
          'Keep ingredients moving and lower heat promptly if oil begins to shimmer strongly.',
      },
      {
        name: 'Simmer / Milk Mode',
        purpose: 'Gentle simmering of dals, sauces, and warming milk',
        guidance:
          'Use lower power steps and monitor closely to prevent boil-overs onto the touch panel.',
      },
      {
        name: 'Child Lock & Timer',
        purpose: 'Preventing accidental touches and automatically ending timed cooking',
        guidance:
          'Engage the lock when wiping spills or when children are in the kitchen.',
      },
    ],
    safetyPrecautions: [
      'Never place empty pans on high induction heat—dry pans overheat within seconds.',
      'Do not place metal spoons, lids, knives, or foil wrappers directly on active cooking zones, as they can heat unexpectedly.',
      'Never use the stove if the ceramic glass surface develops cracks or chips; unplug and seek authorised service.',
      'Individuals with pacemakers or active medical implants should check with their physician and the appliance manual regarding safe operating distance.',
      'Avoid blocking underside air intake vents with tablecloths, foil, or loose paper.',
    ],
    cleaningSteps: [
      'Wait until the glass surface cools completely (check any hot-surface warning light first).',
      'Wipe food splatters immediately with a soft damp microfiber cloth and mild dish soap.',
      'For dried marks, use a gentle ceramic-glass cleaner and a soft non-scratch pad—never steel wool.',
      'Dry the glass and touch controls thoroughly, and gently brush dust off bottom/side cooling vents.',
    ],
    troubleshooting: [
      {
        problem: 'Stove beeps and shows an error without heating',
        possibleCause: 'Non-magnetic cookware (aluminum/glass/copper) or pan base is too small or warped.',
        solution:
          'Switch to flat-bottomed stainless steel or cast-iron cookware tested with a magnet.',
      },
      {
        problem: 'Fan continues humming after turning power off',
        possibleCause: 'Normal post-cooking cooling cycle protecting internal components.',
        solution:
          'Leave the unit plugged in until the fan stops automatically, then switch off at the wall.',
      },
      {
        problem: 'Faint buzzing sound while cooking',
        possibleCause: 'Vibration between layered pan bases and the magnetic field.',
        solution:
          'Check that the pan bottom is clean, dry, and centered; try slightly adjusting the power level.',
      },
    ],
    energySavingTips: [
      'Match pan base diameter closely to the marked ring on the glass top.',
      'Cover pots with lids when boiling water or simmering to retain heat and shorten cook time.',
      'Lower the power level immediately once liquid reaches a boil.',
    ],
    defaultMaintenanceTask: 'Clean induction glass & vents',
  },
  {
    id: 'dishwasher',
    name: 'Dishwasher',
    shortDesc:
      'Cleans and sanitizes dishes, cutlery, and cookware automatically using pressurized water jets.',
    image: '/src/assets/images/appliance_dishwasher_1795050737308.jpg',
    introduction:
      'A dishwasher sprays heated water mixed with specialized dishwasher detergent through rotating spray arms to clean plates, bowls, glasses, and utensils while using significantly less water than continuous handwashing under a running tap.',
    commonUses: [
      'Daily washing of dinner plates, bowls, cups, and stainless steel cutlery',
      'Sanitizing baby bottles or kitchen cutting boards labeled dishwasher-safe',
      'Heavy-soil cleaning for everyday cooking pots and casserole dishes',
      'Economical overnight washing with eco cycles',
    ],
    parts: [
      {
        name: 'Upper & Lower Dish Racks',
        functionDesc:
          'Separates delicate glassware on top from larger plates and cookware below.',
      },
      {
        name: 'Rotating Spray Arms',
        functionDesc:
          'Distribute pressurized water jets across all dishes; must spin freely without obstruction.',
      },
      {
        name: 'Bottom Mesh & Micro Filter',
        functionDesc:
          'Catches food particles so clean water recirculates during the wash.',
      },
      {
        name: 'Detergent & Rinse Aid Dispensers',
        functionDesc:
          'Releases dishwasher detergent at wash start and rinse aid to help water sheet off cleanly.',
      },
      {
        name: 'Salt Reservoir (Where Applicable)',
        functionDesc:
          'Helps built-in water softeners prevent mineral spots in hard-water regions.',
      },
    ],
    howToUseSteps: [
      'Scrape large food scraps, bones, and seeds off plates into the bin—there is no need to pre-rinse dishes completely clean.',
      'Load bowls and cups facing downward at a slight angle so water drains off cleanly.',
      'Place tall plates on the bottom rack facing inward and keep tall pot handles from blocking the spray arms.',
      'Spin both spray arms gently by hand to confirm nothing hits them before closing.',
      'Add specialized dishwasher detergent (never regular hand-dishwashing liquid) into the dry dispenser.',
      'Select your wash cycle, close the door securely, and allow dishes to cool briefly before unloading bottom-to-top.',
    ],
    recommendedSettings: [
      {
        name: 'Eco / Energy Saver Cycle',
        purpose: 'Regular daily dishes with normal soil levels',
        guidance:
          'Runs longer with gentler heating to save electricity and water efficiently.',
      },
      {
        name: 'Normal / Auto Cycle',
        purpose: 'Mixed everyday plates, glasses, and lightly soiled cookware',
        guidance:
          'Balances wash time and rinse temperature for consistent daily results.',
      },
      {
        name: 'Intensive / Heavy Cycle',
        purpose: 'Stuck-on curry stains, oily baking trays, and sturdy cookware',
        guidance:
          'Avoid placing delicate glassware or hand-painted ceramics in heavy cycles.',
      },
      {
        name: 'Quick / Light Cycle',
        purpose: 'Freshly used cups and lightly dusted tableware',
        guidance:
          'Best for light loads that have not sat with dried food.',
      },
    ],
    safetyPrecautions: [
      'Never use ordinary hand-washing dish soap inside a dishwasher—it creates excessive foam and can cause overflow leaks.',
      'Load sharp knives pointing downward inside the cutlery basket or flat on top cutlery trays.',
      'Keep non-dishwasher-safe items (cast iron, wooden spoons, aluminum, delicate crystal) out of the machine.',
      'Wait briefly after a hot cycle ends before reaching inside so hot steam dissipates safely.',
      'Disconnect power and water supply if leaks occur and call an authorised technician.',
    ],
    cleaningSteps: [
      'Twist out the cylindrical bottom filter assembly weekly, rinse food debris under running water with a soft brush, and lock it firmly back in.',
      'Inspect spray arm nozzles for trapped seeds or mineral scale and rinse clean.',
      'Wipe the rubber door gasket and lower door edge where food splash accumulates.',
      'Refill rinse aid and dishwasher salt (if your model uses salt) according to local water hardness and your manual.',
    ],
    troubleshooting: [
      {
        problem: 'Cloudy film or white spots on glassware',
        possibleCause: 'Low rinse aid, empty dishwasher salt in hard-water areas, or overloaded upper rack.',
        solution:
          'Check rinse aid and salt indicators, space glasses cleanly, and use the recommended detergent amount.',
      },
      {
        problem: 'Dishes remain dirty on one side',
        possibleCause: 'A tall plate or ladle blocked a spray arm from spinning.',
        solution:
          'Re-arrange tall utensils, test spray arm rotation by hand, and clean the bottom filter.',
      },
      {
        problem: 'Suds leaking from the door',
        possibleCause: 'Regular liquid hand soap entered the wash tub.',
        solution:
          'Stop the cycle, scoop out foam carefully, and run cold rinse cycles as advised in your manual.',
      },
    ],
    energySavingTips: [
      'Run the dishwasher only when reasonably full rather than half-empty.',
      'Choose Eco mode for everyday dishes whenever time permits.',
      'Crack the door open slightly after the cycle ends to let dishes air-dry naturally instead of using heated dry.',
    ],
    defaultMaintenanceTask: 'Clean dishwasher filter',
  },
];
