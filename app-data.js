/* Iron & Icebox — plan data. Edit here; index.html renders it. */
const PLAN=[
 {key:"upperA",n:1,name:"Upper A",day:"Monday",focus:"Horizontal push, vertical pull",
  blurb:"Heaviest pressing day. Bench is the lift to push on; everything after it is volume for chest, back and arms.",
  ex:[
   {id:"bench",tag:"1",n:"Barbell bench press",s:4,r:"6–8",rest:"2–3 min",rs:150,note:"Main strength lift. Add weight before reps."},
   {id:"csrow",tag:"2",n:"Chest-supported row",s:4,r:"8–10",rest:"2 min",rs:120,note:"Chest on the pad kills momentum — pull to the lower ribs."},
   {id:"inclinedb",tag:"3",n:"Incline dumbbell press",s:3,r:"10–12",rest:"60 s",rs:60,note:"30° bench. Stretch at the bottom, don't bounce."},
   {id:"latraise",tag:"4A",n:"Cable lateral raise",s:3,r:"12–15",rest:"45 s",rs:45,note:"One arm at a time, cable behind you."},
   {id:"ezcurl",tag:"4B",n:"EZ-bar curl",s:3,r:"10–12",rest:"45 s",rs:45,note:"Elbows pinned to your sides."},
   {id:"ohtri",tag:"4C",n:"Overhead cable triceps extension",s:3,r:"12–15",rest:"45 s",rs:45,note:"Rope, full stretch overhead."},
   {id:"crunch",tag:"5",n:"Core — cable crunch",s:2,r:"12–15",rest:"45 s",rs:45,note:"Round the spine, ribs to hips."}]},
 {key:"lowerA",n:2,name:"Lower A",day:"Tuesday",focus:"Squat",
  blurb:"Squat-led. Quads take the bulk of the work, with a machine curl and lunges covering the back of the leg, and core at the end.",
  ex:[
   {id:"squat",tag:"1",n:"Back squat",s:4,r:"5–8",rest:"3 min",rs:180,note:"Below parallel if your hips allow. Belt optional on the top set."},
   {id:"legpress",tag:"2",n:"Leg press",s:3,r:"10–12",rest:"2 min",rs:120,note:"Feet mid-platform, knees track over toes."},
   {id:"lunge",tag:"3",n:"Walking lunge",s:2,r:"10–12 / leg",rest:"60 s",rs:60,note:"Dumbbells at your sides. Long strides."},
   {id:"seatedcurl",tag:"4A",n:"Seated leg curl",s:3,r:"12–15",rest:"45 s",rs:45,note:"More stretch than lying — that's the point."},
   {id:"standcalf",tag:"4B",n:"Standing calf raise",s:3,r:"10–15",rest:"45 s",rs:45,note:"2-second pause at the bottom of every rep."},
   {id:"abwheel",tag:"5",n:"Core — ab wheel or long-lever plank",s:2,r:"8–12 or 30 s",rest:"45 s",rs:45,note:"Ribs down, no sagging through the lower back. Last thing you do — your trunk is already warm from squatting."}]},
 {key:"upperB",n:3,name:"Upper B",day:"Thursday",focus:"Vertical push, horizontal pull",
  blurb:"Shoulder-led pressing and heavier vertical pulling. Same muscles as Day 1, different angles and rep ranges. Seven exercises — the shortest of the two upper days to get through.",
  ex:[
   {id:"ohp",tag:"1",n:"Seated shoulder press",s:4,r:"6–8",rest:"2–3 min",rs:150,note:"Backrest upright, around 80–85° — more reclined turns it into a chest press. Barbell or dumbbells. Standing overhead press works too if you'd rather have the core demand."},
   {id:"pullup",tag:"2",n:"Pull-up, weighted if you can",s:3,r:"6–10",rest:"2 min",rs:120,note:"Neutral-grip pulldowns if 6 clean reps is a stretch."},
   {id:"cablerow",tag:"3",n:"Seated cable row",s:3,r:"10–12",rest:"60 s",rs:60,note:"Pause a second with the handle at your stomach."},
   {id:"dbraise",tag:"4A",n:"Dumbbell lateral raise",s:3,r:"15–20",rest:"60 s",rs:60,note:"Light. Lead with the elbow, stop at shoulder height."},
   {id:"inclinecurl",tag:"4B",n:"Incline dumbbell curl",s:3,r:"10–12",rest:"45 s",rs:45,note:"Bench at 45°, arms hanging behind you."},
   {id:"pushdown",tag:"4C",n:"Rope pushdown or dips",s:3,r:"10–12",rest:"45 s",rs:45,note:"Dips if your shoulders are happy, pushdowns if not."},
   {id:"facepull",tag:"4D",n:"Face pull",s:3,r:"15–20",rest:"45 s",rs:45,note:"The only rear-delt work in the week. Light, controlled."}]},
 {key:"lowerB",n:4,name:"Lower B",day:"Friday",focus:"Single-leg and posterior chain",
  blurb:"No barbell lift off the floor. Split squats are the hard work; weighted back extensions and two curl variations cover the hamstrings and lower back.",
  ex:[
   {id:"bulgarian",tag:"1",n:"Bulgarian split squat",s:4,r:"8–10 / leg",rest:"2–3 min",rs:150,note:"Upright for quads, leaned forward for glutes."},
   {id:"backext",tag:"2",n:"45° back extension, weighted",s:3,r:"10–12",rest:"2 min",rs:120,note:"Plate at the chest. Squeeze the glutes at the top, don't hyperextend."},
   {id:"lyingcurl",tag:"3",n:"Lying leg curl",s:4,r:"10–12",rest:"60 s",rs:60,note:"Different hip angle to Day 2's seated curl."},
   {id:"legext",tag:"4A",n:"Leg extension",s:3,r:"12–15",rest:"45 s",rs:45,note:"Last set as a drop set once a fortnight."},
   {id:"seatedcalf",tag:"4B",n:"Seated calf raise",s:3,r:"12–15",rest:"45 s",rs:45,note:"Soleus work — standing covers the other half."}]}
];

const TARGETS={kcal:"2,313",protein:"199 g",deficit:"434 kcal",rate:"0.39 kg"};

const MEALS=[
 {day:"Sunday cook",time:"75 min",covers:"Mon, Tue, Wed + Thu lunch",yields:"9 portions",
  kit:"Deep roasting tin that goes on the hob (or a large casserole), one big deep pan, scales, 9 lidded containers around 700 ml.",
  timeline:[
   ["0:00","Oven to 200°C fan. Dice 2 onions, slice 4 peppers, crush the garlic — both dishes' prep in one go."],
   ["0:10","Big pan, high heat: brown the beef in two 500 g batches, 5 min each. Lift out, leave the fat in."],
   ["0:20","Roasting tin on the hob: chorizo, one diced onion, two sliced peppers — 5 min. Garlic 30 s."],
   ["0:26","Dry rice in, hot stock over it, chicken on top, foil sealed tight. Into the oven — 35 min."],
   ["0:30","Back to the beef pan: the other onion and two peppers, 8 min in the beef fat."],
   ["0:38","Garlic, cumin, paprika, chilli flakes, purée — 2 min. Beef back in with tomatoes, beans, stock cube, splash of water."],
   ["0:42","Chilli simmers uncovered. Stir every 10 min."],
   ["1:01","Foil off the traybake, 10 min more to crisp the chicken."],
   ["1:11","Traybake out, rest 10 min. Chilli should be thick — season it now, not before."],
   ["1:21","Fork the rice through. Both cooling uncovered, then portion within the hour."]],
  dishes:[
   {name:"Chicken, chorizo and rice traybake",portions:"4 portions",
    macros:"723 kcal · 58 g protein · 29 g fat · 55 g carbs per portion",
    self:"Complete meal — the rice is in it.",
    ing:["750 g chicken thigh fillets (6–7 fillets)","100 g cooking chorizo, sliced into coins","240 g basmati rice, dry weight","560 ml hot chicken stock","2 red peppers, sliced","1 large onion, diced","4 garlic cloves, crushed","2 tsp smoked paprika, 1 tsp dried oregano","1 tbsp olive oil, salt and pepper"],
    steps:["Oven to 200°C fan. Toss the chicken with the oil, paprika, oregano, salt and pepper.","Roasting tin on the hob: fry the chorizo, onion and peppers 5 min until the chorizo bleeds its fat. Garlic 30 s.","Stir in the dry rice, pour the hot stock over, lay the chicken on top. Cover tightly with foil — the seal is what cooks the rice.","35 min covered, then 10 min uncovered. Rest 10 min, fork through."],
    reheat:"2 tbsp water in first, then 3 min in the microwave, stirred at halfway. The rice dries out without the water."},
   {name:"Beef and black bean chilli",portions:"5 portions",
    macros:"684 kcal · 56 g protein · 14 g fat · 78 g carbs per portion, with 60 g dry rice",
    self:"Cook 60 g dry rice fresh on the night — 10 minutes.",
    ing:["1 kg beef mince, 5% fat (two 500 g packs)","2 × 400 g tins chopped tomatoes","2 × 400 g tins black beans, drained","1 onion and 2 red peppers, diced","4 garlic cloves, 2 tbsp tomato purée","1 tbsp cumin, 2 tsp smoked paprika, 1–2 tsp chilli flakes","1 beef stock cube, 1 tbsp olive oil"],
    steps:["Brown the mince in two batches on high heat — one batch steams instead of colouring.","Soften the onion and peppers 8 min in the fat, then garlic, spices and purée for 2 min.","Beef back in with the tomatoes, beans and crumbled cube, plus a splash of water.","Simmer uncovered 30–40 min until a spoon leaves a trail. Season at the end."],
    reheat:"Splash of water, 3 min in the microwave. It thickens in the fridge, so it needs the water."}]},
 {day:"Wednesday cook",time:"60 min",covers:"Thu dinner, Fri, Sat, Sun",yields:"9 portions",
  kit:"A casserole with a lid and one large pan, running side by side.",
  timeline:[
   ["0:00","Dice 2 onions, 2 carrots, 2 celery sticks. Grate the ginger, crush the garlic."],
   ["0:06","Casserole: brown the chicken 4 min a side, two batches. Lift out."],
   ["0:16","Second pan: onion, carrot and celery in oil — 10 min, and don't rush it."],
   ["0:18","Casserole: soften its onion 6 min, then garlic, ginger and harissa 2 min."],
   ["0:26","Chicken back in with tomatoes, chickpeas and stock. Lid on — 25 min."],
   ["0:28","Bolognese pan: garlic and purée 2 min, then the turkey until no pink, about 6 min. Tip the rendered fat out."],
   ["0:36","Milk in, let it cook off 3 min. Then tomatoes, oregano, bay and the crumbled cube."],
   ["0:40","Bolognese simmers uncovered, 35 min."],
   ["0:51","Stew lid off, 10 min more to thicken."],
   ["1:01","Spinach and lemon through the stew, off the heat."],
   ["1:15","Bolognese done — season, fish the bay leaf out. Cool, then portion."]],
  dishes:[
   {name:"Harissa chicken and chickpea stew",portions:"4 portions",
    macros:"700 kcal · 61 g protein · 22 g fat · 58 g carbs per portion, with 50 g dry couscous",
    self:"50 g couscous on the night: boiling water over it, covered 5 min, forked through.",
    ing:["750 g chicken thigh fillets, halved","1 × 400 g tin chickpeas, drained","1 × 400 g tin chopped tomatoes","3 tbsp rose harissa (or plain harissa plus 1 tsp honey)","1 onion, 3 garlic cloves, 1 tbsp grated ginger","400 ml chicken stock","200 g spinach, juice of half a lemon","1 tbsp olive oil"],
    steps:["Brown the chicken 4 min a side in the casserole. Set aside.","Soften the onion 6 min, then garlic, ginger and harissa for 2 min.","Chicken back in with tomatoes, chickpeas and stock. 25 min covered, 10 uncovered.","Wilt the spinach through at the end, then the lemon juice."],
    reheat:"3 min in the microwave with a splash of water. Couscous made fresh alongside."},
   {name:"Turkey bolognese",portions:"5 portions",
    macros:"669 kcal · 52 g protein · 20 g fat · 66 g carbs per portion, with 75 g dry pasta",
    self:"75 g dry pasta on the night.",
    ing:["1 kg turkey mince, 8% fat (two 500 g packs)","2 × 400 g tins chopped tomatoes","2 tbsp tomato purée","1 onion, 2 carrots, 2 celery sticks, finely diced","3 garlic cloves, 1 tsp oregano, 1 bay leaf","1 chicken stock cube, 100 ml milk, 1 tbsp olive oil"],
    steps:["Soften the onion, carrot and celery 10 min — this is where the flavour is.","Garlic and purée 2 min, then the turkey until no pink remains. Drain the rendered fat off.","Milk in and cooked off, then tomatoes, oregano, bay and the crumbled cube.","Simmer uncovered 35–40 min. Season at the end."],
    reheat:"3 min in the microwave. Pasta fresh, 9–11 min."}]}
];

const BREAKFAST=[
 {name:"Yoghurt bowl",macros:"382 kcal · 34 g protein",
  what:"300 g 0% Greek yoghurt, 40 g granola, 80 g frozen berries. The berries thaw overnight in the fridge."},
 {name:"Overnight oats",macros:"481 kcal · 38 g protein",
  what:"60 g porridge oats, 30 g whey, 200 ml semi-skimmed milk, 80 g frozen berries. Make three jars on a cook day. This is what the oats on the list are for — swap it for the yoghurt bowl whenever you want something that isn't cold."},
 {name:"Post-training",macros:"227 kcal · 25 g protein",
  what:"Banana and 30 g whey in water. On lifting days have it after the session rather than mid-morning."},
 {name:"Afternoon",macros:"316 kcal · 26 g protein",
  what:"200 g cottage cheese or skyr, 20 g nuts."}
];

const SHOPPING=[
 {group:"Meat",items:[["Chicken thigh fillets","1.5 kg"],["Beef mince 5%","2 × 500 g"],["Turkey mince 8%","2 × 500 g"],["Cooking chorizo","100 g"]]},
 {group:"Tins — all 400 g",items:[["Chopped tomatoes","5 tins"],["Black beans","2 tins"],["Chickpeas","1 tin"]]},
 {group:"Dry goods",items:[["Basmati rice","1 kg bag"],["Pasta","500 g"],["Couscous","500 g"],["Porridge oats","1 kg"],["Granola","500 g"],["Mixed nuts","200 g"]]},
 {group:"Veg",items:[["Onions","4"],["Red peppers","4"],["Carrots","1 pack"],["Celery","1 pack"],["Garlic","2 bulbs"],["Fresh ginger","1 piece"],["Spinach","200 g"],["Bananas","7"],["Lemon","1"]]},
 {group:"Chilled & freezer",items:[["0% Greek yoghurt","2 × 1 kg"],["Cottage cheese or skyr","1.4 kg"],["Semi-skimmed milk","2 L"],["Frozen berries","500 g"]]},
 {group:"Cupboard",items:[["Rose harissa","1 jar"],["Tomato purée","1 tube"],["Stock cubes","chicken + beef"],["Smoked paprika, cumin, oregano","if you're out"],["Chilli flakes, bay leaves","if you're out"],["Olive oil","as needed"]]}
];

const SWAPS=[
 ["No rose harissa","Plain harissa, same 3 tbsp, plus 1 tsp honey. Or mix your own: 2 tbsp tomato purée, 2 tsp smoked paprika, 1 tsp cumin, 1 tsp chilli flakes, a crushed garlic clove, 1 tbsp oil, squeeze of lemon. Waitrose keeps Belazu rose harissa in world foods, not with the cooking sauces — worth a look there first."],
 ["Thigh to breast","Saves about 60 kcal and adds 4 g protein a portion, but breast dries out over a 40-minute cook. Add it in the last 15 minutes instead."],
 ["Beef 5% to 10%","About 90 kcal more a portion. Drain the pan properly after browning and the gap mostly closes."],
 ["Turkey 3% vs 8%","Buy the 8% in 500 g packs — it's thigh meat, so it holds up over a long simmer, and draining the fat after browning brings it close to the lean figure."],
 ["Rice pouches","One 250 g pouch is about 70 g dry. Fine, just dearer."],
 ["Meat-free chilli","Two extra tins of beans and 150 g red lentils in place of the beef. Protein falls to roughly 22 g a portion, so take an extra 30 g whey that day."]
];

const TROUBLE=[
 ["Weight hasn't moved in three weeks","Cut the carb side by 25 g dry per meal before you touch protein or portion size. That's about 170 kcal off the day."],
 ["Starving by 9pm","Move the afternoon snack later, or shift 25 g of the dry carb from lunch to dinner. Same day's total, different distribution."],
 ["Chilli came out thin","Ten more minutes uncovered. It thickens again in the fridge regardless."],
 ["Traybake rice still crunchy","The stock wasn't boiling when it went in, or the foil wasn't sealed. Add 100 ml boiling water, re-cover, 10 min."],
 ["A cook day got away from you","Don't stretch a batch to six days. Rotisserie chicken, a rice pouch and a tin of beans is a 50 g protein meal in five minutes."]
];

const STORAGE=[
 "Cool uncovered within an hour of cooking, then lid it and fridge it. Warm food in a sealed box is what shortens its life.",
 "Portion into individual containers straight away rather than one big tub — it reheats better and you won't pick at it.",
 "Fridge at 4°C or below, eaten within four days. The Sunday batch finishes at Thursday lunch, the Wednesday batch by Sunday. That's why the cook days sit where they do.",
 "Each cook makes 9 portions and you eat 7 in that stretch, so two go in the freezer. After three weeks you've banked six — enough to skip a cook entirely.",
 "Freeze a portion on day two if you can see it won't get eaten, not on day five. All four dishes keep a month.",
 "Reheat until piping hot through, stirring halfway, once only. Rice is the one to respect: cool it fast, eat within 24 hours, which is why the chilli has none stirred into it."
];
