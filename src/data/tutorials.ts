import { Tutorial } from '../types';

export const INITIAL_TUTORIALS: Tutorial[] = [
  // AIR FRYER (3)
  {
    id: 'air-fryer-components',
    title: 'Understanding Air Fryer Components',
    applianceId: 'air-fryer',
    applianceName: 'Air Fryer',
    category: 'Getting Started',
    shortDesc:
      'Learn what each part of your air fryer does—from the crisper plate to the rear exhaust vent.',
    difficulty: 'Beginner',
    estimatedMinutes: 6,
    image: '/src/assets/images/appliance_air_fryer_1795050733114.jpg',
    featured: true,
    videoSummary:
      'Sample walkthrough showing the outer drawer, perforated crisper tray, control icons, and rear clearance zone.',
    videoChapters: [
      {
        time: '00:00',
        title: 'Outer body & airflow vents',
        caption: 'Locating the top intake and rear hot-air exhaust vents.',
      },
      {
        time: '01:30',
        title: 'Drawer & perforated basket',
        caption: 'How hot air circulates beneath the crisper plate.',
      },
      {
        time: '03:15',
        title: 'Control panel overview',
        caption: 'Reading preset icons, timer, and pause controls.',
      },
    ],
    steps: [
      {
        heading: 'Inspect the outer body and vents',
        detail:
          'Identify the air intake on top and the exhaust vent at the back. Always leave clear space behind the exhaust so steam escapes safely.',
      },
      {
        heading: 'Pull out the removable drawer',
        detail:
          'Hold the insulated handle and slide the outer pan out smoothly onto a heat-safe mat.',
      },
      {
        heading: 'Check the perforated crisper plate or inner basket',
        detail:
          'Notice the airflow slots and silicone rubber feet. These lift food above drippings so hot air crisps both top and bottom.',
      },
      {
        heading: 'Review the safety interlock and controls',
        detail:
          'Air fryers only power the heater when the drawer sits flush inside the housing. Practice setting timer and mode before adding food.',
      },
    ],
    safetyWarnings: [
      'Never remove the silicone feet from the crisper tray—they prevent scratching the non-stick drawer.',
      'Always keep the rear exhaust clear of walls, plastic bags, and curtains.',
    ],
  },
  {
    id: 'air-fryer-how-to-use',
    title: 'How to Use an Air Fryer',
    applianceId: 'air-fryer',
    applianceName: 'Air Fryer',
    category: 'How to Operate',
    shortDesc:
      'A practical step-by-step routine for loading, shaking midway, and serving crisp everyday food.',
    difficulty: 'Beginner',
    estimatedMinutes: 8,
    image: '/src/assets/images/appliance_air_fryer_1795050733114.jpg',
    featured: true,
    videoSummary:
      'Sample demonstration of single-layer food spacing, midway basket shaking, and safe serving.',
    videoChapters: [
      {
        time: '00:00',
        title: 'Prepping & light oiling',
        caption: 'Tossing chopped vegetables evenly before placing them in the basket.',
      },
      {
        time: '02:10',
        title: 'Single-layer loading',
        caption: 'Leaving small gaps so hot air reaches every side.',
      },
      {
        time: '04:00',
        title: 'Mid-cycle shake & finish',
        caption: 'Pausing safely by sliding out the drawer and checking crispness.',
      },
    ],
    steps: [
      {
        heading: 'Prep ingredients cleanly',
        detail:
          'Cut vegetables or snacks into uniform sizes and pat off excess water before lightly tossing with a spoon of oil if desired.',
      },
      {
        heading: 'Load in an uncrowded layer',
        detail:
          'Avoid piling food to the brim. Crowded baskets trap steam and leave food soft instead of crisp.',
      },
      {
        heading: 'Set mode and timer per your manual',
        detail:
          'Slide the drawer firmly closed, select the general mode suited to your dish, and start with conservative timing so you can check progress.',
      },
      {
        heading: 'Shake or flip halfway',
        detail:
          'Slide the drawer out by the handle midway, shake gently or flip pieces with silicone tongs, and push back in to resume.',
      },
    ],
    safetyWarnings: [
      'Never tilt the drawer upside down while hot oil may sit in the bottom pan; lift food out with tongs.',
      'Follow your model manual for recommended batch sizes and preheat guidance.',
    ],
  },
  {
    id: 'air-fryer-cleaning',
    title: 'Cleaning and Maintaining an Air Fryer',
    applianceId: 'air-fryer',
    applianceName: 'Air Fryer',
    category: 'Cleaning and Maintenance',
    shortDesc:
      'Keep non-stick coatings intact and prevent smoke by cleaning the basket and cavity properly.',
    difficulty: 'Essential',
    estimatedMinutes: 7,
    image: '/src/assets/images/appliance_air_fryer_1795050733114.jpg',
    videoSummary:
      'Sample care walkthrough covering soaking the tray safely, protecting coatings, and wiping the exterior.',
    videoChapters: [
      {
        time: '00:00',
        title: 'Cooling & unplugging',
        caption: 'Waiting until the drawer and heating area cool safely.',
      },
      {
        time: '01:45',
        title: 'Gentle non-stick wash',
        caption: 'Using warm soapy water and a soft sponge without abrasive pads.',
      },
      {
        time: '03:30',
        title: 'Drying & reassembly',
        caption: 'Drying fully before storing so moisture never lingers.',
      },
    ],
    steps: [
      {
        heading: 'Unplug and cool completely',
        detail:
          'Allow the appliance at least 20–30 minutes after cooking before washing any removable trays.',
      },
      {
        heading: 'Soak away baked-on crumbs gently',
        detail:
          'Fill the cooled drawer with warm water and mild dish soap for 10 minutes so residue lifts effortlessly.',
      },
      {
        heading: 'Use only soft sponges',
        detail:
          'Wash the crisper plate and drawer using a non-abrasive sponge or soft nylon brush.',
      },
      {
        heading: 'Wipe interior and exterior housing',
        detail:
          'Use a slightly damp cloth to wipe the body and interior walls, keeping water away from the plug and vents.',
      },
    ],
    safetyWarnings: [
      'Never submerge the main motorized air fryer body in water.',
      'Do not scrape non-stick surfaces with metal knives or steel wool.',
    ],
  },

  // MICROWAVE OVEN (3)
  {
    id: 'microwave-settings',
    title: 'Understanding Microwave Oven Settings',
    applianceId: 'microwave-oven',
    applianceName: 'Microwave Oven',
    category: 'Understanding Settings',
    shortDesc:
      'Decode power levels, defrost modes, and timing controls for better everyday results.',
    difficulty: 'Beginner',
    estimatedMinutes: 7,
    image: '/src/assets/images/appliance_microwave_1795050733925.jpg',
    featured: true,
    videoSummary:
      'Sample guide explaining why medium power levels heat thick dishes more evenly than full power.',
    videoChapters: [
      {
        time: '00:00',
        title: 'Power levels vs. time',
        caption: 'How pulsed energy prevents dried-out edges.',
      },
      {
        time: '02:00',
        title: 'Auto-defrost basics',
        caption: 'Selecting weight or time defrost safely.',
      },
      {
        time: '03:45',
        title: 'Quick-start & pause keys',
        caption: 'Checking progress and stirring midway.',
      },
    ],
    steps: [
      {
        heading: 'Understand what power percentage means',
        detail:
          'Lower power levels cycle microwave energy on and off, giving heat time to spread evenly into dense curries, pasta, or rice.',
      },
      {
        heading: 'Use High power mainly for liquids and steaming',
        detail:
          'Quickly boil water or steam chopped vegetables using High power with a microwave-safe vented lid.',
      },
      {
        heading: 'Switch to Medium for mixed meals',
        detail:
          'Reheating plated meals at medium power avoids rubbery bread or overcooked edges.',
      },
      {
        heading: 'Use Defrost for frozen ingredients',
        detail:
          'Select Defrost and separate thawing pieces halfway so the exterior does not begin cooking.',
      },
    ],
    safetyWarnings: [
      'Always stir heated liquids before sipping to prevent sudden localized boiling.',
      'Check your manufacturer manual if your model includes additional Grill or Convection modes before using metal racks.',
    ],
  },
  {
    id: 'microwave-heat-safely',
    title: 'How to Heat Food Safely',
    applianceId: 'microwave-oven',
    applianceName: 'Microwave Oven',
    category: 'Safety Instructions',
    shortDesc:
      'Choose microwave-safe containers, prevent splatters, and avoid common heating hazards.',
    difficulty: 'Essential',
    estimatedMinutes: 6,
    image: '/src/assets/images/appliance_microwave_1795050733925.jpg',
    videoSummary:
      'Sample demonstration identifying safe glass and ceramic bowls versus hazardous foil or metal-trimmed plates.',
    videoChapters: [
      {
        time: '00:00',
        title: 'Safe container check',
        caption: 'Looking for microwave-safe labels and avoiding metallic rims.',
      },
      {
        time: '01:50',
        title: 'Venting covers properly',
        caption: 'Leaving steam escape gaps to stop messy pops.',
      },
      {
        time: '03:20',
        title: 'Standing time & stirring',
        caption: 'Letting heat equalize safely after the beep.',
      },
    ],
    steps: [
      {
        heading: 'Pick plain glass or microwave-safe ceramic',
        detail:
          'Inspect bowls for gold/silver decorative trim, foil wrappers, or cracked plastics before placing them inside.',
      },
      {
        heading: 'Cover loosely with a vented lid',
        detail:
          'Leave one corner slightly open or use a vented cover so steam escapes steadily without blowing the lid off.',
      },
      {
        heading: 'Arrange food in a ring',
        detail:
          'Push thicker portions toward the outer edge of the plate so microwaves warm food evenly.',
      },
      {
        heading: 'Use oven mitts and stir after heating',
        detail:
          'Hot food warms the bowl itself. Lift containers carefully and stir to check true temperature.',
      },
    ],
    safetyWarnings: [
      'Never heat metal containers, aluminum foil, or whole eggs in shells in microwave mode.',
      'Do not operate the microwave if the door does not latch completely flat.',
    ],
  },
  {
    id: 'microwave-cleaning',
    title: 'Cleaning a Microwave Oven',
    applianceId: 'microwave-oven',
    applianceName: 'Microwave Oven',
    category: 'Cleaning and Maintenance',
    shortDesc:
      'Steam-loosen stubborn food splatters and keep the turntable and door gasket spotless.',
    difficulty: 'Beginner',
    estimatedMinutes: 5,
    image: '/src/assets/images/appliance_microwave_1795050733925.jpg',
    videoSummary:
      'Sample quick steam-cleaning routine using plain water and a microfiber cloth.',
    videoChapters: [
      {
        time: '00:00',
        title: 'Steam bowl setup',
        caption: 'Heating water safely to soften dried splatters.',
      },
      {
        time: '01:40',
        title: 'Wiping walls & mica cover',
        caption: 'Gently cleaning without soaking internal vents.',
      },
      {
        time: '03:00',
        title: 'Turntable & door seal care',
        caption: 'Washing the glass plate and wiping the latch area.',
      },
    ],
    steps: [
      {
        heading: 'Generate gentle steam inside',
        detail:
          'Place a microwave-safe bowl half-filled with water (plus a lemon slice if desired) on the turntable and heat briefly until steam coats the interior.',
      },
      {
        heading: 'Unplug and wipe while steam is fresh',
        detail:
          'Remove the warm bowl carefully, unplug the cord, and wipe the ceiling, walls, and door interior with a soft damp cloth.',
      },
      {
        heading: 'Clean the glass turntable and roller ring',
        detail:
          'Wash them in the sink with mild dish soap, dry completely, and reseat them centered on the drive hub.',
      },
      {
        heading: 'Protect the waveguide cover',
        detail:
          'Wipe the small rectangular mica cover gently—never scrub hard or peel it off.',
      },
    ],
    safetyWarnings: [
      'Never spray liquid cleaners directly onto control buttons or cooling vents.',
      'Always unplug the microwave before wiping inside the cavity.',
    ],
  },

  // WASHING MACHINE (3)
  {
    id: 'washing-machine-modes',
    title: 'Understanding Washing Machine Modes',
    applianceId: 'washing-machine',
    applianceName: 'Washing Machine',
    category: 'Understanding Settings',
    shortDesc:
      'Match cotton, delicate, quick wash, and spin cycles to your everyday laundry loads.',
    difficulty: 'Beginner',
    estimatedMinutes: 8,
    image: '/src/assets/images/appliance_washing_machine_1795050734803.jpg',
    featured: true,
    videoSummary:
      'Sample overview of common dial programs, spin speed adjustments, and detergent compartment markings.',
    videoChapters: [
      {
        time: '00:00',
        title: 'Reading care labels',
        caption: 'Grouping fabrics before choosing a wash dial.',
      },
      {
        time: '02:15',
        title: 'Everyday vs. Delicate modes',
        caption: 'How drum agitation and spin speeds protect clothes.',
      },
      {
        time: '04:10',
        title: 'Detergent drawer chambers',
        caption: 'Knowing where main wash detergent and softener go.',
      },
    ],
    steps: [
      {
        heading: 'Check garment tags before loading',
        detail:
          'Separate sturdy cottons and towels from delicate knits, silks, or heavily dyed darks.',
      },
      {
        heading: 'Use Normal / Cotton for durable daily wear',
        detail:
          'This standard mode delivers full tumbling and rinsing for everyday shirts, jeans, and linens.',
      },
      {
        heading: 'Choose Delicates for fragile fabrics',
        detail:
          'Lower drum motion and reduced spin speed protect thin seams, lace, and stretch materials.',
      },
      {
        heading: 'Reserve Quick Wash for small, lightly worn loads',
        detail:
          'Keep loads small so detergent dissolves and rinses completely within the shorter cycle.',
      },
    ],
    safetyWarnings: [
      'Avoid overloading heavy towels on delicate or quick cycles—unbalanced spins strain drum bearings.',
      'Follow your manual regarding water pressure and detergent type (HE / front-load vs. top-load).',
    ],
  },
  {
    id: 'washing-machine-how-to-wash',
    title: 'How to Wash Clothes',
    applianceId: 'washing-machine',
    applianceName: 'Washing Machine',
    category: 'How to Operate',
    shortDesc:
      'Complete laundry workflow: sorting, proper drum fill levels, dosing detergent, and unloading.',
    difficulty: 'Beginner',
    estimatedMinutes: 9,
    image: '/src/assets/images/appliance_washing_machine_1795050734803.jpg',
    videoSummary:
      'Sample step-by-step laundry demo covering pocket checks, drum spacing, and post-wash care.',
    videoChapters: [
      {
        time: '00:00',
        title: 'Sorting & pocket check',
        caption: 'Checking zippers, coins, and colour fastness.',
      },
      {
        time: '02:30',
        title: 'Proper drum loading',
        caption: 'Leaving space at the top so clothes tumble freely.',
      },
      {
        time: '04:30',
        title: 'Starting & unloading',
        caption: 'Hanging clothes promptly to prevent wrinkles and odors.',
      },
    ],
    steps: [
      {
        heading: 'Sort and prep pockets',
        detail:
          'Empty pockets of coins, tissues, and keys; fasten zippers and turn printed t-shirts inside out.',
      },
      {
        heading: 'Load loosely without packing down',
        detail:
          'Leave room for your hand comfortably above the clothes so water and detergent penetrate every garment.',
      },
      {
        heading: 'Measure detergent accurately',
        detail:
          'Pour the recommended amount into the main wash compartment; too much detergent leaves residue on dark clothes.',
      },
      {
        heading: 'Start cycle and unload promptly',
        detail:
          'Once finished, remove damp laundry right away and wipe the door seal dry.',
      },
    ],
    safetyWarnings: [
      'Never reach into a spinning drum or force open a locked door.',
      'Ensure the water supply tap is open before starting a cycle.',
    ],
  },
  {
    id: 'washing-machine-cleaning',
    title: 'Cleaning the Washing Machine',
    applianceId: 'washing-machine',
    applianceName: 'Washing Machine',
    category: 'Cleaning and Maintenance',
    shortDesc:
      'Prevent bad smells and drain clogs by cleaning the filter, detergent drawer, and rubber seal.',
    difficulty: 'Essential',
    estimatedMinutes: 8,
    image: '/src/assets/images/appliance_washing_machine_1795050734803.jpg',
    videoSummary:
      'Sample monthly maintenance checklist for draining the pump filter safely and rinsing the dispenser drawer.',
    videoChapters: [
      {
        time: '00:00',
        title: 'Wiping the door gasket',
        caption: 'Clearing trapped hair and moisture inside rubber folds.',
      },
      {
        time: '02:10',
        title: 'Cleaning the detergent drawer',
        caption: 'Removing and rinsing hardened detergent residue.',
      },
      {
        time: '04:00',
        title: 'Drain pump filter check',
        caption: 'Using a shallow tray to catch water while clearing lint.',
      },
    ],
    steps: [
      {
        heading: 'Clean the detergent dispenser drawer',
        detail:
          'Slide the drawer out using the release latch shown in your manual, wash with warm water, and wipe the housing slot.',
      },
      {
        heading: 'Wipe the rubber door gasket',
        detail:
          'Gently peel back the lip of the front-load seal, remove coins or hairpins, and wipe dry with a cloth.',
      },
      {
        heading: 'Clear the lint or drain pump filter',
        detail:
          'Unplug the machine, place a towel and shallow tray under the bottom filter flap, drain any residual water slowly, rinse the filter, and screw it back tightly.',
      },
      {
        heading: 'Run a periodic drum-clean wash',
        detail:
          'Run an empty drum-clean cycle as advised in your manufacturer manual to keep internal pipes fresh.',
      },
    ],
    safetyWarnings: [
      'Always unplug the washing machine and wait for water to cool before opening the lower drain filter.',
      'Tighten the drain filter cap securely afterward to prevent floor leaks on the next wash.',
    ],
  },

  // REFRIGERATOR (3)
  {
    id: 'refrigerator-sections',
    title: 'Understanding Refrigerator Sections',
    applianceId: 'refrigerator',
    applianceName: 'Refrigerator',
    category: 'Getting Started',
    shortDesc:
      'Learn which shelf stays coldest, how crisper drawers work, and what belongs in the door.',
    difficulty: 'Beginner',
    estimatedMinutes: 6,
    image: '/src/assets/images/appliance_refrigerator_1795050734754.jpg',
    featured: true,
    videoSummary:
      'Sample tour of refrigerator temperature zones—from upper cooked-food shelves to lower crisper drawers.',
    videoChapters: [
      {
        time: '00:00',
        title: 'Upper & middle shelves',
        caption: 'Ideal zones for leftovers, yogurt, and ready-to-eat items.',
      },
      {
        time: '01:50',
        title: 'Door racks',
        caption: 'Best reserved for condiments, sauces, and juices—not milk.',
      },
      {
        time: '03:20',
        title: 'Crisper drawers & vents',
        caption: 'Keeping produce fresh without blocking rear airflow.',
      },
    ],
    steps: [
      {
        heading: 'Use upper shelves for ready-to-eat items',
        detail:
          'Cooked leftovers, cut fruits, and chilled desserts stay clean and evenly cooled on upper shelves.',
      },
      {
        heading: 'Store milk and dairy on interior middle shelves',
        detail:
          'Interior shelves keep steadier temperatures than door bins, which warm slightly every time the door opens.',
      },
      {
        heading: 'Reserve door bins for sauces and condiments',
        detail:
          'Pickles, jams, dressings, and water bottles handle mild temperature shifts comfortably.',
      },
      {
        heading: 'Organize produce in crisper drawers',
        detail:
          'Keep leafy vegetables inside the humidity-controlled drawer and leave rear air vents uncovered.',
      },
    ],
    safetyWarnings: [
      'Keep raw meats or thawing items in sealed containers on the lowest shelf so juices cannot drip onto ready-to-eat food.',
      'Check your manual before adjusting specialized chiller drawers.',
    ],
  },
  {
    id: 'refrigerator-food-storage',
    title: 'Proper Food Storage',
    applianceId: 'refrigerator',
    applianceName: 'Refrigerator',
    category: 'Energy Saving',
    shortDesc:
      'Organize containers to preserve freshness longer, avoid odors, and lower compressor load.',
    difficulty: 'Beginner',
    estimatedMinutes: 7,
    image: '/src/assets/images/appliance_refrigerator_1795050734754.jpg',
    videoSummary:
      'Sample guide on cooling cooked meals before storage, spacing containers, and reducing food waste.',
    videoChapters: [
      {
        time: '00:00',
        title: 'Cool before storing',
        caption: 'Why hot pots raise interior humidity and strain cooling.',
      },
      {
        time: '02:00',
        title: 'Airtight containers',
        caption: 'Preventing odor transfer and moisture loss.',
      },
      {
        time: '03:40',
        title: 'Airflow spacing',
        caption: 'Leaving small gaps between bowls for even circulation.',
      },
    ],
    steps: [
      {
        heading: 'Let hot dishes cool to room temperature first',
        detail:
          'Putting steaming pots inside warms neighboring items and forces the compressor to work harder.',
      },
      {
        heading: 'Use clean, shallow, lidded containers',
        detail:
          'Covering food locks in moisture, prevents mixed odors, and helps leftovers chill evenly.',
      },
      {
        heading: 'Avoid overstuffing shelves',
        detail:
          'Leave small gaps between containers and away from back vents so cold air reaches every corner.',
      },
      {
        heading: 'Practice First-In, First-Out',
        detail:
          'Keep older leftovers near the front at eye level so nothing gets forgotten in the back.',
      },
    ],
    safetyWarnings: [
      'Do not leave cooked food out at warm room temperatures for long periods before cooling; portion into shallow bowls to cool safely.',
      'Discard spoiled food promptly to prevent odor buildup.',
    ],
  },
  {
    id: 'refrigerator-cleaning',
    title: 'Refrigerator Cleaning and Maintenance',
    applianceId: 'refrigerator',
    applianceName: 'Refrigerator',
    category: 'Cleaning and Maintenance',
    shortDesc:
      'Test door gaskets, sanitize shelves gently, and keep ventilation clearances clear.',
    difficulty: 'Essential',
    estimatedMinutes: 9,
    image: '/src/assets/images/appliance_refrigerator_1795050734754.jpg',
    videoSummary:
      'Sample maintenance routine covering shelf wiping, the paper-strip gasket test, and exterior vent care.',
    videoChapters: [
      {
        time: '00:00',
        title: 'Shelf & drawer wipe-down',
        caption: 'Cleaning removable glass shelves safely at room temperature.',
      },
      {
        time: '02:20',
        title: 'Testing the door seal',
        caption: 'Checking magnetic gasket tightness all around the frame.',
      },
      {
        time: '04:00',
        title: 'Clearance & condenser dust',
        caption: 'Ensuring unobstructed airflow behind and beside the fridge.',
      },
    ],
    steps: [
      {
        heading: 'Wipe shelves one section at a time',
        detail:
          'Let removable glass shelves warm slightly to room temperature before washing with mild soapy water—avoid pouring hot water on cold glass.',
      },
      {
        heading: 'Clean and test the rubber door gasket',
        detail:
          'Wipe sticky food drips along the bottom gasket crease and check that the door closes cleanly without gaps.',
      },
      {
        heading: 'Keep rear and side clearances open',
        detail:
          'Remove boxes or clutter stored against the sides or top vents so heat escapes efficiently.',
      },
      {
        heading: 'Keep a small odor absorber if needed',
        detail:
          'A clean open container of baking soda helps keep compartments smelling neutral.',
      },
    ],
    safetyWarnings: [
      'Never use sharp blades or metal tools to scrape frost in the freezer.',
      'Unplug the refrigerator before vacuuming dust from rear/bottom grilles.',
    ],
  },

  // INDUCTION STOVE (3)
  {
    id: 'induction-understanding',
    title: 'Understanding Induction Cooking',
    applianceId: 'induction-stove',
    applianceName: 'Induction Stove',
    category: 'Getting Started',
    shortDesc:
      'See how electromagnetic heating works, how to test cookware with a magnet, and why it heats so fast.',
    difficulty: 'Beginner',
    estimatedMinutes: 6,
    image: '/src/assets/images/appliance_induction_stove_1795050735223.jpg',
    featured: true,
    videoSummary:
      'Sample visual explanation of magnetic pan testing and direct cookware heating.',
    videoChapters: [
      {
        time: '00:00',
        title: 'How induction heats the pan',
        caption: 'Why the pan warms rapidly while the surrounding glass stays cooler.',
      },
      {
        time: '02:00',
        title: 'The magnet cookware test',
        caption: 'Checking stainless steel, cast iron, and flat-bottom pans.',
      },
      {
        time: '03:30',
        title: 'Pan sizing & alignment',
        caption: 'Matching pan base to the marked glass ring.',
      },
    ],
    steps: [
      {
        heading: 'Understand direct pan heating',
        detail:
          'Unlike gas flames, induction creates magnetic energy that warms the base of the pot directly—making boiling and sautéing noticeably faster.',
      },
      {
        heading: 'Run the simple magnet test',
        detail:
          'Hold a small fridge magnet against the underside of your pan. If it clings firmly, the pan works on induction.',
      },
      {
        heading: 'Check for a flat bottom',
        detail:
          'Warped, deeply rounded, or tiny bases may fail to register properly or buzz during cooking.',
      },
      {
        heading: 'Center cookware on the marked circle',
        detail:
          'Keep the pot centered inside the printed cooking ring for steady heat transfer.',
      },
    ],
    safetyWarnings: [
      'Remember that hot pans still transfer residual heat back onto the ceramic glass surface—let it cool before touching.',
      'Pure aluminum, glass, clay, and copper pans without a magnetic base will not heat on induction.',
    ],
  },
  {
    id: 'induction-how-to-operate',
    title: 'How to Operate an Induction Stove',
    applianceId: 'induction-stove',
    applianceName: 'Induction Stove',
    category: 'How to Operate',
    shortDesc:
      'Follow safe startup, power control, boil-over prevention, and proper post-cooking cool-down.',
    difficulty: 'Beginner',
    estimatedMinutes: 7,
    image: '/src/assets/images/appliance_induction_stove_1795050735223.jpg',
    videoSummary:
      'Sample cooking walkthrough showing dry-base placement, gentle heat stepping, and cooling fan wait.',
    videoChapters: [
      {
        time: '00:00',
        title: 'Surface & pan prep',
        caption: 'Wiping water off the pan bottom before setting it on the glass.',
      },
      {
        time: '01:50',
        title: 'Adjusting power & timer',
        caption: 'Stepping heat down promptly once food begins simmering.',
      },
      {
        time: '03:40',
        title: 'Shutdown & cooling fan',
        caption: 'Letting the internal fan finish before unplugging.',
      },
    ],
    steps: [
      {
        heading: 'Place food inside the pan first',
        detail:
          'Never heat an empty pan on high induction settings; add water, oil, or ingredients before powering on.',
      },
      {
        heading: 'Keep the pan bottom dry and clean',
        detail:
          'Wipe moisture or grit from the underside of the pan so the glass stays scratch-free.',
      },
      {
        heading: 'Power on and start at moderate settings',
        detail:
          'Induction responds instantly—begin near medium levels while learning how fast your cookware heats.',
      },
      {
        heading: 'Let the cooling fan finish after turning off',
        detail:
          'Press the power button to stop heating, but wait until the internal fan stops humming before switching off the wall outlet.',
      },
    ],
    safetyWarnings: [
      'Always plug portable induction stoves directly into a wall outlet rated for the appliance—avoid loose extension cords.',
      'Keep underside cooling vents completely unobstructed.',
    ],
  },
  {
    id: 'induction-safety',
    title: 'Induction Stove Safety',
    applianceId: 'induction-stove',
    applianceName: 'Induction Stove',
    category: 'Safety Instructions',
    shortDesc:
      'Essential precautions for glass surface care, stray metal objects, electrical outlets, and spills.',
    difficulty: 'Essential',
    estimatedMinutes: 6,
    image: '/src/assets/images/appliance_induction_stove_1795050735223.jpg',
    videoSummary:
      'Sample safety briefing covering glass crack inspection, stray utensils, and touch-panel spill response.',
    videoChapters: [
      {
        time: '00:00',
        title: 'Keep metal tools off the zone',
        caption: 'Preventing stray spoons, lids, or foil from heating.',
      },
      {
        time: '01:50',
        title: 'Protecting the ceramic glass',
        caption: 'Lifting heavy pots instead of dragging them across glass.',
      },
      {
        time: '03:20',
        title: 'Handling boil-overs safely',
        caption: 'Powering off immediately before wiping hot spills.',
      },
    ],
    steps: [
      {
        heading: 'Keep the glass free of stray metal items',
        detail:
          'Never rest metal ladles, jar lids, knives, or aluminum foil on the cooking surface.',
      },
      {
        heading: 'Lift heavy cookware instead of sliding',
        detail:
          'Dragging heavy cast-iron pots with rough bottoms can scratch or weaken the ceramic glass.',
      },
      {
        heading: 'Check for cracks before every use',
        detail:
          'If the glass top ever cracks or chips, unplug immediately and do not cook on it until serviced by an authorised technician.',
      },
      {
        heading: 'Consult medical guidance for implants',
        detail:
          'Users with pacemakers or medical implants should review manufacturer safety distance notes with a doctor.',
      },
    ],
    safetyWarnings: [
      'Do not leave milk or oil unattended on high power—boil-overs happen rapidly.',
      'Never use a cracked glass cooktop due to electrical shock risk.',
    ],
  },

  // DISHWASHER (3)
  {
    id: 'dishwasher-components',
    title: 'Understanding Dishwasher Components',
    applianceId: 'dishwasher',
    applianceName: 'Dishwasher',
    category: 'Getting Started',
    shortDesc:
      'Get familiar with the upper and lower racks, spray arms, bottom filter, and dispenser compartments.',
    difficulty: 'Beginner',
    estimatedMinutes: 6,
    image: '/src/assets/images/appliance_dishwasher_1795050737308.jpg',
    featured: true,
    videoSummary:
      'Sample interior tour highlighting spray arms, filter lock arrows, and detergent vs. rinse aid compartments.',
    videoChapters: [
      {
        time: '00:00',
        title: 'Upper & lower racks',
        caption: 'Where glasses, bowls, plates, and utensils belong.',
      },
      {
        time: '01:55',
        title: 'Rotating spray arms',
        caption: 'Keeping jet nozzles unobstructed.',
      },
      {
        time: '03:25',
        title: 'Dispensers & bottom filter',
        caption: 'Checking detergent, rinse aid, and filter seating.',
      },
    ],
    steps: [
      {
        heading: 'Examine the upper and lower racks',
        detail:
          'The upper rack sits further from the heating zone and suits cups, bowls, and dishwasher-safe plastics; the lower rack holds plates and pots.',
      },
      {
        heading: 'Locate both spray arms',
        detail:
          'Water shoots out of tiny angled holes along these spinning arms. Nothing tall should ever block their rotation.',
      },
      {
        heading: 'Identify the bottom mesh filter',
        detail:
          'Situated at the tub floor, this filter catches food bits so clean water keeps circulating.',
      },
      {
        heading: 'Know the detergent vs. rinse aid doors',
        detail:
          'The larger clip compartment holds dishwasher detergent; the smaller screw-cap reservoir holds liquid rinse aid.',
      },
    ],
    safetyWarnings: [
      'Use only detergent formulated specifically for automatic dishwashers—never regular hand dish liquid.',
      'Verify the bottom filter sits locked flush before running a cycle.',
    ],
  },
  {
    id: 'dishwasher-load-operate',
    title: 'How to Load and Operate a Dishwasher',
    applianceId: 'dishwasher',
    applianceName: 'Dishwasher',
    category: 'How to Operate',
    shortDesc:
      'Load plates and bowls for spotless cleaning without blocking spray jets or wasting water.',
    difficulty: 'Beginner',
    estimatedMinutes: 8,
    image: '/src/assets/images/appliance_dishwasher_1795050737308.jpg',
    videoSummary:
      'Sample loading walkthrough showing angled bowls, downward cutlery placement, and spray-arm spin checks.',
    videoChapters: [
      {
        time: '00:00',
        title: 'Scrape, do not pre-wash',
        caption: 'Removing solid scraps while letting detergent do the work.',
      },
      {
        time: '02:05',
        title: 'Angled loading technique',
        caption: 'Facing dirty surfaces inward and downward toward water jets.',
      },
      {
        time: '04:00',
        title: 'Cycle selection & drying',
        caption: 'Choosing Eco or Normal and venting steam after completion.',
      },
    ],
    steps: [
      {
        heading: 'Scrape off solid food scraps',
        detail:
          'Clear seeds, bones, and peels into the bin. Skipping unnecessary tap pre-rinsing saves substantial water.',
      },
      {
        heading: 'Angle bowls and cups downward',
        detail:
          'Tilt mugs and bowls so water splashes inside and drains completely without pooling on bases.',
      },
      {
        heading: 'Spin the spray arms to test clearance',
        detail:
          'Give both arms a quick spin by hand to make sure tall cutting boards or spatulas do not block them.',
      },
      {
        heading: 'Add detergent, pick a cycle, and start',
        detail:
          'Select Eco for everyday loads or Intensive for cooked-on pans, and close the door firmly.',
      },
    ],
    safetyWarnings: [
      'Place sharp knives pointing blade-down in cutlery baskets or flat on upper cutlery trays.',
      'Keep wooden boards, cast iron, and non-stick cookware out unless labeled dishwasher-safe.',
    ],
  },
  {
    id: 'dishwasher-cleaning',
    title: 'Dishwasher Cleaning and Maintenance',
    applianceId: 'dishwasher',
    applianceName: 'Dishwasher',
    category: 'Cleaning and Maintenance',
    shortDesc:
      'Clean the bottom filter, inspect spray nozzles, and keep door seals fresh for spot-free dishes.',
    difficulty: 'Essential',
    estimatedMinutes: 7,
    image: '/src/assets/images/appliance_dishwasher_1795050737308.jpg',
    videoSummary:
      'Sample weekly maintenance walkthrough for unlocking, rinsing, and reseating the dishwasher filter.',
    videoChapters: [
      {
        time: '00:00',
        title: 'Unlocking the bottom filter',
        caption: 'Twisting out the fine mesh cylinder from the tub floor.',
      },
      {
        time: '01:50',
        title: 'Rinsing debris & spray nozzles',
        caption: 'Clearing food particles with a soft brush under warm water.',
      },
      {
        time: '03:30',
        title: 'Wiping the door perimeter',
        caption: 'Cleaning the lower door lip and rubber gasket.',
      },
    ],
    steps: [
      {
        heading: 'Remove and rinse the bottom filter weekly',
        detail:
          'Slide out the lower rack, unlock the cylindrical mesh filter as shown by the arrows, and rinse trapped grease and scraps under warm water.',
      },
      {
        heading: 'Check spray arm holes',
        detail:
          'Ensure tiny water jets along the spray arms are not blocked by lemon seeds or mineral buildup.',
      },
      {
        heading: 'Wipe the door gasket and bottom ledge',
        detail:
          'Water jets rarely hit the lower door hinge crease—wipe it gently with a damp cloth to stop odors.',
      },
      {
        heading: 'Top up rinse aid and dishwasher salt',
        detail:
          'Follow your manual to refill rinse aid (for drying) and salt (if your model has a water-softener unit).',
      },
    ],
    safetyWarnings: [
      'Always lock the filter assembly firmly back in place before starting the next wash so debris does not enter the pump.',
      'Wait for interior metal surfaces to cool before reaching down to the filter.',
    ],
  },
];
