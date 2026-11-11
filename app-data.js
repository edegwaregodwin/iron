/* Iron & Icebox — plan data. Edit here; index.html renders it. */
const PLAN=[
 {key:"upperA",n:1,name:"Upper A",day:"Monday",focus:"Horizontal push, vertical pull",warmup:{general:"5 min on the rower, easy pace \u2014 just enough to raise your temperature.",drills:["20 band pull-aparts","10 scapular push-ups","10 arm circles each way"]},
  blurb:"",
  ex:[
   {id:"bench",tag:"1",n:"Barbell bench press",s:4,r:"6–8",rest:"2–3 min",rs:150,note:"Main strength lift. Add weight before reps."},
   {id:"csrow",tag:"2",n:"Chest-supported row",s:4,r:"8–10",rest:"2 min",rs:120,note:"Chest on the pad kills momentum — pull to the lower ribs."},
   {id:"inclinedb",tag:"3",n:"Incline dumbbell press",s:3,r:"10–12",rest:"60 s",rs:60,note:"30° bench. Stretch at the bottom, don't bounce."},
   {id:"latraise",tag:"4",n:"Cable lateral raise",s:3,r:"12–15",rest:"75 s",rs:75,note:"One arm at a time, cable behind you."},
   {id:"machinecurl",tag:"5",n:"Machine arm curl",s:3,r:"10–12",rest:"75 s",rs:75,note:"Upper arms flat on the pad the whole set. Three seconds lowering."},
   {id:"ohtri",tag:"6",n:"Overhead cable triceps extension",s:3,r:"12–15",rest:"75 s",rs:75,note:"Rope, full stretch overhead."},
   {id:"pulldown",tag:"7",n:"Lat pulldown, wide grip",s:3,r:"10–12",rest:"60 s",rs:60,note:"Lean back about 15°, drive the elbows down rather than back."}]},
 {key:"lower",n:2,name:"Lower",day:"Tuesday",focus:"Quads, hamstrings, calves",warmup:{general:"5 min on the bike, easy pace.",drills:["10 bodyweight squats, slow and deep","10 leg swings each side","20 glute bridges","10 ankle rocks each side"]},
  blurb:"",
  ex:[
   {id:"squat",tag:"1",n:"Back squat",s:4,r:"5–8",rest:"3 min",rs:180,note:"Below parallel if your hips allow. Belt optional on the top set."},
   {id:"legpress",tag:"2",n:"Leg press",s:3,r:"10–12",rest:"2 min",rs:120,note:"Feet mid-platform, knees track over toes."},
   {id:"legext",tag:"3",n:"Leg extension",s:3,r:"12–15",rest:"75 s",rs:75,note:"Last set as a drop set once a fortnight."},
   {id:"seatedcurl",tag:"4",n:"Seated leg curl",s:3,r:"12–15",rest:"75 s",rs:75,note:"More stretch than lying."},
   {id:"backext",tag:"5",n:"45° back extension, weighted",s:3,r:"10–12",rest:"2 min",rs:120,note:"Plate at the chest. Squeeze the glutes at the top, don't hyperextend."},
   {id:"standcalf",tag:"6",n:"Standing calf raise",s:4,r:"10–15",rest:"60 s",rs:60,note:"2-second pause at the bottom of every rep."}]},
 {key:"upperB",n:3,name:"Upper B",day:"Thursday",focus:"Vertical push, horizontal pull",warmup:{general:"5 min on the rower, easy pace.",drills:["20 band pull-aparts","10 wall slides","10 shoulder dislocates with a band or broomstick"]},
  blurb:"",
  ex:[
   {id:"ohp",tag:"1",n:"Seated shoulder press",s:4,r:"6–8",rest:"2–3 min",rs:150,note:"Backrest at 80–85°. More reclined turns it into a chest press."},
   {id:"pullup",tag:"2",n:"Pull-up, weighted if you can",s:3,r:"6–10",rest:"2 min",rs:120,note:"Neutral-grip pulldowns if 6 clean reps is a stretch."},
   {id:"cablerow",tag:"3",n:"Seated cable row",s:3,r:"10–12",rest:"60 s",rs:60,note:"Neutral grip on the V-handle, palms facing each other. Elbows tight to your sides, pull to the lower stomach, pause a second there."},
   {id:"dbraise",tag:"4",n:"Dumbbell lateral raise",s:3,r:"15–20",rest:"75 s",rs:75,note:"Light. Lead with the elbow, stop at shoulder height."},
   {id:"inclinecurl",tag:"5",n:"Incline dumbbell curl",s:3,r:"10–12",rest:"75 s",rs:75,note:"Bench at 45°, arms hanging behind you."},
   {id:"pushdown",tag:"6",n:"Rope pushdown or dips",s:3,r:"10–12",rest:"75 s",rs:75,note:"Dips if your shoulders are happy, pushdowns if not."},
   {id:"facepull",tag:"7",n:"Face pull",s:3,r:"15–20",rest:"75 s",rs:75,note:"Light and controlled."}]},
 {key:"cardio",n:4,name:"Cardio",day:"Friday",focus:"Steady state and core",cardio:true,warmup:{general:"3 min on the Renegade bike, easy \u2014 just turning the pedals.",drills:["10 leg swings each side","10 arm circles each way"]},
  blurb:"",
  ex:[
   {id:"airbike",tag:"1",n:"Renegade air bike",s:1,r:"10 min",rest:"2 min",rs:120,cols:["min","cal"],note:"60\u201365 rpm, able to hold a conversation. Arms and legs together, not legs alone."},
   {id:"rower",tag:"2",n:"Rower",s:1,r:"8 min",rest:"2 min",rs:120,cols:["min","metres"],note:"22\u201324 strokes a minute. Legs, then back, then arms."},
   {id:"inclinewalk",tag:"3",n:"Incline treadmill walk",s:1,r:"10 min",rest:"2 min",rs:120,cols:["min","km"],note:"10\u201312% incline, 5\u20136 km/h. No holding the rails."},
   {id:"bikeintervals",tag:"4",n:"Air bike intervals \u2014 optional",s:6,r:"20 s hard / 40 s easy",rest:"40 s",rs:40,cols:["round","cal"],note:"Only if your legs feel fresh. Skip it the day before Lower A."},
   {id:"abwheel",tag:"5",n:"Core — ab wheel or long-lever plank",s:3,r:"8–12 or 30 s",rest:"60 s",rs:60,note:"Ribs down, no sagging."},
   {id:"crunch",tag:"6",n:"Core — cable crunch",s:2,r:"12–15",rest:"45 s",rs:45,note:"Round the spine, ribs to hips."},
   {id:"cooldown",tag:"7",n:"Cool-down walk",s:1,r:"4 min",rest:"\u2014",rs:60,cols:["min","km"],note:"Flat, easy, until your breathing settles."}]}
];

/* Ten meals. Each makes 5 portions, protein-heavy and light on carbs.
   Pick the ones you're cooking; their ingredients gather on the Shop tab. */

const TARGETS={kcal:"2,058",protein:"214",deficit:"689",rate:"0.63"};

const MEALS=[
{id:"suya",name:"Suya beef and pepper stew",time:"45 min",portions:"5 portions",
 macros:"503 kcal · 51 g protein · 20 g carbs",
 ing:["1 kg beef mince, 5% fat","3 red peppers","2 onions","2 × 400 g tins chopped tomatoes",
  "2 tbsp tomato purée","80 g roasted peanuts","200 g spinach","1 tbsp oil",
  "Suya spice: 2 tsp smoked paprika, 1–2 tsp cayenne, 1 tsp ground ginger, 1 tsp garlic powder, 1 tsp onion powder, 1 beef stock cube"],
 steps:["Pulse the peanuts to a coarse powder. Mix with the paprika, cayenne, ginger, garlic powder, onion powder and crumbled stock cube.",
  "Large pan, high heat, 1 tbsp oil.",
  "Half the beef in. 3 minutes untouched, then break it up, 2 minutes more. Out with a slotted spoon. Repeat with the rest.",
  "Heat to medium. Onions and peppers in with a pinch of salt, 6 minutes.",
  "Tomato purée in, 2 minutes. Then two thirds of the suya mix, 1 minute.",
  "Tomatoes and the beef back in with 100 ml water. Bring to a bubble, heat to low, uncovered, 12 minutes.",
  "Spinach in a handful at a time. Off the heat, stir in the last third of the suya mix. Season, divide into five."],
 reheat:"Splash of water, 3 min in the microwave."},

{id:"shawarma",name:"Chicken shawarma traybake",time:"40 min",portions:"5 portions",
 macros:"538 kcal · 63 g protein · 15 g carbs",
 ing:["1.1 kg chicken thigh fillets","3 red peppers","2 onions","2 courgettes","2 tbsp oil",
  "300 g 0% Greek yoghurt","2 garlic cloves","Juice of 1 lemon",
  "Spice mix: 2 tsp cumin, 2 tsp coriander, 1 tsp paprika, 1 tsp turmeric, ½ tsp cinnamon, 1 tsp salt"],
 steps:["Oven to 220°C fan.",
  "Chicken in a bowl with 1 tbsp oil and the whole spice mix. Rub in by hand.",
  "Peppers, onions and courgettes cut into thick wedges, tossed with the remaining oil and a pinch of salt. Spread over two baking trays.",
  "Chicken on top of the veg, spaced out, not touching.",
  "25 minutes. Turn the chicken, 8 minutes more.",
  "Mix the yoghurt with the crushed garlic and lemon juice. Divide the tray into five, with the sauce on the side."],
 reheat:"Air fryer 6 min at 180°C, or 3 min in the microwave. Sauce cold from the fridge."},

{id:"tacos",name:"Turkey taco filling",time:"30 min",portions:"5 portions",
 macros:"460 kcal · 54 g protein · 13 g carbs",
 ing:["1 kg turkey mince, 5% fat","2 red peppers","2 onions","1 × 400 g tin chopped tomatoes",
  "2 tbsp tomato purée","150 g mature cheddar, grated","2 baby gem lettuces, for cups",
  "1 tbsp oil","2 garlic cloves",
  "Spice mix: 1 tbsp cumin, 2 tsp paprika, 1 tsp oregano, ½–1 tsp cayenne, 1 tsp salt"],
 steps:["Large pan, high heat, 1 tbsp oil.",
  "Turkey in, broken up with a wooden spoon. 6 minutes, until no pink is left.",
  "Heat to medium. Onions and peppers in with a pinch of salt, 6 minutes.",
  "Garlic, the spice mix and the tomato purée in. Stir constantly, 2 minutes.",
  "Tomatoes and 100 ml water in. Bring to a bubble, heat to low, uncovered, 10 minutes.",
  "Season and divide into five. Keep the lettuce and cheese separate; build the cups when you eat."],
 reheat:"3 min in the microwave. Spoon into cold lettuce cups, cheese on top."},

{id:"jollofcauli",name:"Jollof chicken with cauliflower rice",time:"50 min",portions:"5 portions",
 macros:"566 kcal · 60 g protein · 23 g carbs",
 ing:["1.1 kg chicken thigh fillets","800 g cauliflower rice (or 2 heads, blitzed)","3 red peppers",
  "2 onions","1 × 400 g tin chopped tomatoes","1 scotch bonnet","3 tbsp tomato purée",
  "2 tsp curry powder, 1 tsp dried thyme, 2 bay leaves","1 chicken stock cube","2½ tbsp oil"],
 steps:["Blend 2 peppers, the tomatoes, 1 onion and the scotch bonnet smooth. Slice the last pepper and onion.",
  "Large pan, medium-high, 1 tbsp oil. Chicken in two batches, 4 minutes a side. Out.",
  "Heat to medium, 1 tbsp oil. Sliced onion and pepper in with a pinch of salt, 5 minutes. Tomato purée, 3 minutes, stirring.",
  "Blended base in. High heat, boil hard and uncovered 12 minutes, stirring now and then.",
  "Curry powder, thyme, bay and crumbled stock cube. Chicken back in. Lid on, low, 15 minutes.",
  "Separate pan, ½ tbsp oil, medium-high. Cauliflower rice in, 5 minutes, stirring. Salt.",
  "Cauliflower rice into five containers, chicken and sauce over the top."],
 reheat:"3 min in the microwave. Cauliflower rice goes soft if you reheat twice."},

{id:"beefbean",name:"Beef and green bean stir-fry",time:"25 min",portions:"5 portions",
 macros:"495 kcal · 50 g protein · 24 g carbs",
 ing:["1 kg beef mince, 5% fat","600 g green beans, trimmed","2 red peppers","1 onion",
  "80 ml soy sauce","1 thumb ginger, grated","4 garlic cloves","80 g cashews","1 tbsp oil",
  "1 tsp chilli flakes"],
 steps:["Large pan or wok, high heat, 1 tbsp oil.",
  "Half the beef in. 3 minutes untouched, break it up, 2 minutes more. Out. Repeat with the rest.",
  "Green beans in, still on high. 4 minutes, tossing, until they blister in places.",
  "Peppers and onion in, 3 minutes.",
  "Heat to medium. Garlic, ginger and chilli flakes, 1 minute.",
  "Beef back in with the soy sauce and cashews. Toss 2 minutes. Divide into five."],
 reheat:"2 min in the microwave. The beans lose their bite but hold up."},

{id:"harissa",name:"Harissa chicken and chickpeas",time:"45 min",portions:"5 portions",
 macros:"542 kcal · 62 g protein · 20 g carbs",
 ing:["1.1 kg chicken thigh fillets","1 × 400 g tin chickpeas, drained",
  "1 × 400 g tin chopped tomatoes","3 tbsp rose harissa","2 onions","3 garlic cloves",
  "1 thumb ginger, grated","400 ml chicken stock","200 g spinach","Juice of half a lemon","1 tbsp oil"],
 steps:["Pat the chicken dry and salt it. Casserole on medium-high, 1 tbsp oil.",
  "Half the chicken in, one layer. 4 minutes a side, untouched. Out. Repeat with the rest.",
  "Heat to medium. Onions in with a pinch of salt, 6 minutes. Garlic, ginger and harissa, 2 minutes.",
  "Chicken back in with its juices, then the tomatoes, drained chickpeas and stock. Bubble, lid on, low, 25 minutes.",
  "Lid off, 10 minutes.",
  "Off the heat. Spinach a handful at a time. Lemon, salt. Divide into five."],
 reheat:"Splash of water, 3 min in the microwave."},

{id:"currychicken",name:"Chicken and spinach curry",time:"40 min",portions:"5 portions",
 macros:"566 kcal · 59 g protein · 13 g carbs",
 ing:["1.1 kg chicken thigh fillets, diced","400 ml light coconut milk",
  "1 × 400 g tin chopped tomatoes","2 onions","1 thumb ginger, grated","4 garlic cloves",
  "400 g spinach","2 tbsp oil",
  "Spices: 2 tsp cumin, 2 tsp coriander, 1 tsp turmeric, 1 tsp garam masala, ½–1 tsp chilli powder"],
 steps:["Large pan, medium-high, 1 tbsp oil. Chicken in two batches, 4 minutes each. Out.",
  "Heat to medium, 1 tbsp oil. Onions in with a pinch of salt, 8 minutes.",
  "Garlic, ginger and all the spices in. Stir constantly, 90 seconds.",
  "Tomatoes in, 5 minutes, stirring, until it thickens and darkens.",
  "Coconut milk and the chicken back in. Bubble, then low, uncovered, 15 minutes.",
  "Spinach in a few handfuls at a time until it collapses. Season, divide into five."],
 reheat:"3 min in the microwave, stirred at halfway."},

{id:"frittata",name:"Turkey and courgette frittata",time:"35 min",portions:"5 portions",
 macros:"569 kcal · 58 g protein · 10 g carbs",
 ing:["14 eggs","700 g turkey mince, 5% fat","2 courgettes, grated","2 red peppers, diced",
  "1 onion, diced","150 g mature cheddar, grated","1 tbsp oil","1 tsp paprika, 1 tsp oregano"],
 steps:["Oven to 180°C fan.",
  "Squeeze the grated courgette in a clean tea towel until no more water comes out. Wet courgette makes it soggy.",
  "Large ovenproof pan, medium-high, 1 tbsp oil. Turkey in, broken up, 6 minutes with the paprika and oregano.",
  "Onion and peppers in, 5 minutes. Courgette in, 2 minutes. Spread flat and take off the heat.",
  "Beat the eggs with 1 tsp salt and plenty of pepper. Pour over. Cheese on top.",
  "20 minutes in the oven, until the middle is set and does not wobble. Cool 10 minutes, cut into five."],
 reheat:"2 min in the microwave, or eat it cold — it is good cold."},

{id:"porkcabbage",name:"Pork and cabbage stir-fry",time:"25 min",portions:"5 portions",
 macros:"478 kcal · 53 g protein · 22 g carbs",
 ing:["1.1 kg pork loin, cut into strips","1 small white cabbage, shredded","2 red peppers",
  "1 onion","80 ml soy sauce","1 thumb ginger, grated","4 garlic cloves","60 g cashews",
  "1 tbsp oil","1 tsp sesame oil","1 tsp chilli flakes"],
 steps:["Large pan or wok, high heat, 1 tbsp oil.",
  "Half the pork in, one layer. 3 minutes untouched, then 2 minutes tossing. Out. Repeat with the rest.",
  "Cabbage, peppers and onion in, still on high. 5 minutes, tossing, until the cabbage wilts but keeps some bite.",
  "Heat to medium. Garlic, ginger and chilli flakes, 1 minute.",
  "Pork back in with the soy sauce and cashews. Toss 2 minutes.",
  "Off the heat, sesame oil through. Divide into five."],
 reheat:"2 min in the microwave."},

{id:"codchorizo",name:"Cod, chorizo and butter beans",time:"35 min",portions:"5 portions",
 macros:"519 kcal · 56 g protein · 26 g carbs",
 ing:["1.1 kg cod fillets (frozen is fine, defrosted)","150 g cooking chorizo, sliced",
  "2 × 400 g tins butter beans, drained","1 × 400 g tin chopped tomatoes","2 red peppers",
  "1 onion","200 g spinach","3 garlic cloves","1 tsp smoked paprika","1 tbsp oil"],
 steps:["Deep pan, medium heat. Chorizo in, no oil. 4 minutes, until the fat runs orange.",
  "Onion and peppers in with a pinch of salt, 6 minutes. Garlic and paprika, 1 minute.",
  "Tomatoes and drained butter beans in with 100 ml water. Bubble, then low, 8 minutes.",
  "Pat the cod dry, salt it, and lay the fillets on top of the sauce. Lid on, 8 minutes — do not stir.",
  "Spinach tucked around the fish, lid back on, 2 minutes.",
  "Break the fish into large flakes and fold through gently. Divide into five."],
 reheat:"3 min in the microwave. Fish goes firm on reheating — that is normal."}
];

const FIXED=[
 {name:"Breakfast",macros:"382 kcal · 34 g protein",what:"300 g 0% Greek yoghurt, 40 g granola, 80 g frozen berries."},
 {name:"Afternoon",macros:"234 kcal · 24 g protein",what:"200 g Greek yoghurt, 20 g nuts."}
];

const SNACK_SETS=[
 {label:"Set A",a:"2 boiled eggs",b:"Tin of tuna in spring water",macros:"263 kcal · 39 g protein",
  buy:"14 eggs, 7 tins of tuna"},
 {label:"Set B",a:"100 g roast chicken slices",b:"200 g Greek yoghurt",macros:"224 kcal · 44 g protein",
  buy:"700 g chicken slices, 1.4 kg extra yoghurt"},
 {label:"Set C",a:"150 g edamame, from frozen",b:"Tin of tuna in spring water",macros:"300 kcal · 43 g protein",
  buy:"1 kg frozen edamame, 7 tins of tuna"}
];
const SNACK_NOTE="One set a week, rotated. Add a banana to the mid-morning one on training days.";
const SNACK_SWAPS="For a change in either slot: 50 g biltong (145 kcal, 26 g), 150 g king prawns (110, 30), 80 g smoked salmon (145, 20).";

const STAPLES=[
 ["0% Greek yoghurt","3.5 kg"],["Granola","500 g"],["Mixed nuts","200 g"],
 ["Frozen berries","500 g"],["Bananas","7"],["Olive oil","as needed"],
 ["Stock cubes","chicken + beef"],["Tomato purée","1 tube"],
 ["Ground cumin, coriander, paprika, turmeric, cayenne, oregano","if you're out"]
];

const STORAGE=[
 "Cool uncovered within an hour, then lid and fridge.",
 "Portion into individual containers straight away.",
 "Fridge at 4°C or below, eaten within four days.",
 "Two meals a day means five portions covers two and a half days. Pick two meals a week and freeze the spare portions.",
 "Reheat piping hot through, stirring halfway, once only."
];

const TROUBLE=[
 ["Losing more than 0.7 kg a week","Add 150 g of cooked rice or potato to one meal a day."],
 ["Top sets down two sessions running","Same fix, plus two extra eggs at breakfast."],
 ["Bored of a meal by day three","Pick two meals a week and alternate them day to day instead of eating one through."],
 ["Frittata came out soggy","The courgette wasn't squeezed dry enough."]
];
const RAMP=[
 {pct:0,reps:"8\u201310",label:"Empty bar, or the lightest setting"},
 {pct:0.5,reps:"5",label:"Half your top weight"},
 {pct:0.7,reps:"3",label:"Seventy per cent"},
 {pct:0.85,reps:"1\u20132",label:"Eighty-five per cent"}
];
const RAMP_NOTE="Not working sets \u2014 rest only as long as the plate change takes.";
const RAMP_NOHIST="No history yet \u2014 work up in three or four jumps, 5, 3 and 1 reps. Numbers appear here once you log a session.";

/* Exercises that have been replaced. Past sessions still carry their ids,
   so History keeps showing a readable name instead of the raw key. */
const RETIRED={ezcurl:"EZ-bar curl",lunge:"Walking lunge",bulgarian:"Bulgarian split squat",lyingcurl:"Lying leg curl",seatedcalf:"Seated calf raise"};
