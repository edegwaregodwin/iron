/* Iron & Icebox — plan data. Edit here; index.html renders it. */
const PLAN=[
 {key:"upperA",n:1,name:"Upper A",day:"Monday",focus:"Horizontal push, vertical pull",
  blurb:"Heaviest pressing day. Bench is the lift to push on; everything after it is volume for chest, back and arms. No core here — both core sessions sit on the leg days.",
  ex:[
   {id:"bench",tag:"1",n:"Barbell bench press",s:4,r:"6–8",rest:"2–3 min",rs:150,note:"Main strength lift. Add weight before reps."},
   {id:"csrow",tag:"2",n:"Chest-supported row",s:4,r:"8–10",rest:"2 min",rs:120,note:"Chest on the pad kills momentum — pull to the lower ribs."},
   {id:"inclinedb",tag:"3",n:"Incline dumbbell press",s:3,r:"10–12",rest:"60 s",rs:60,note:"30° bench. Stretch at the bottom, don't bounce."},
   {id:"latraise",tag:"4A",n:"Cable lateral raise",s:3,r:"12–15",rest:"45 s",rs:45,note:"One arm at a time, cable behind you."},
   {id:"ezcurl",tag:"4B",n:"EZ-bar curl",s:3,r:"10–12",rest:"45 s",rs:45,note:"Elbows pinned to your sides."},
   {id:"ohtri",tag:"4C",n:"Overhead cable triceps extension",s:3,r:"12–15",rest:"45 s",rs:45,note:"Rope, full stretch overhead."},
   {id:"pulldown",tag:"5",n:"Lat pulldown, wide grip",s:3,r:"10–12",rest:"60 s",rs:60,note:"Lean back about 15°, drive the elbows down rather than back. This is your second vertical pull of the week — pull-ups on Upper B are the other."}]},
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
  blurb:"Shoulder-led pressing and heavier vertical pulling. Same muscles as Day 1, different angles and rep ranges. ",
  ex:[
   {id:"ohp",tag:"1",n:"Seated shoulder press",s:4,r:"6–8",rest:"2–3 min",rs:150,note:"Backrest upright, around 80–85° — more reclined turns it into a chest press. Barbell or dumbbells. Standing overhead press works too if you'd rather have the core demand."},
   {id:"pullup",tag:"2",n:"Pull-up, weighted if you can",s:3,r:"6–10",rest:"2 min",rs:120,note:"Neutral-grip pulldowns if 6 clean reps is a stretch."},
   {id:"cablerow",tag:"3",n:"Seated cable row",s:3,r:"10–12",rest:"60 s",rs:60,note:"Pause a second with the handle at your stomach."},
   {id:"dbraise",tag:"4A",n:"Dumbbell lateral raise",s:3,r:"15–20",rest:"60 s",rs:60,note:"Light. Lead with the elbow, stop at shoulder height."},
   {id:"inclinecurl",tag:"4B",n:"Incline dumbbell curl",s:3,r:"10–12",rest:"45 s",rs:45,note:"Bench at 45°, arms hanging behind you."},
   {id:"pushdown",tag:"4C",n:"Rope pushdown or dips",s:3,r:"10–12",rest:"45 s",rs:45,note:"Dips if your shoulders are happy, pushdowns if not."},
   {id:"facepull",tag:"4D",n:"Face pull",s:3,r:"15–20",rest:"45 s",rs:45,note:"The only rear-delt work in the week. Light, controlled."}]},
 {key:"lowerB",n:4,name:"Lower B",day:"Friday",focus:"Single-leg and posterior chain",
  blurb:"No barbell lift off the floor. Split squats are the hard work; weighted back extensions and two curl variations cover the hamstrings and lower back, with core at the end.",
  ex:[
   {id:"bulgarian",tag:"1",n:"Bulgarian split squat",s:4,r:"8–10 / leg",rest:"2–3 min",rs:150,note:"Upright for quads, leaned forward for glutes."},
   {id:"backext",tag:"2",n:"45° back extension, weighted",s:3,r:"10–12",rest:"2 min",rs:120,note:"Plate at the chest. Squeeze the glutes at the top, don't hyperextend."},
   {id:"lyingcurl",tag:"3",n:"Lying leg curl",s:4,r:"10–12",rest:"60 s",rs:60,note:"Different hip angle to Day 2's seated curl."},
   {id:"legext",tag:"4A",n:"Leg extension",s:3,r:"12–15",rest:"45 s",rs:45,note:"Last set as a drop set once a fortnight."},
   {id:"seatedcalf",tag:"4B",n:"Seated calf raise",s:3,r:"12–15",rest:"45 s",rs:45,note:"Soleus work — standing covers the other half."},
   {id:"crunch",tag:"5",n:"Core — cable crunch",s:2,r:"12–15",rest:"45 s",rs:45,note:"Round the spine, ribs to hips. Flexion, where Lower A's ab wheel resists extension — the two complement each other."}]}
];

/* Portions are given as cooked weight so you can check them on scales —
   calories follow from that rather than the other way round. */

const PORTION_NOTE="Portions are spec'd by cooked weight, not by eye. Weigh one the first time and you'll know what it looks like in your containers after that.";

const TARGETS={
 week1:{kcal:"2,397",protein:"198 g",deficit:"350 kcal",rate:"0.32 kg"},
 week2:{kcal:"1,953",protein:"175 g",deficit:"795 kcal",rate:"0.72 kg"}
};

const DEFICIT_NOTE="The two weeks run at different speeds, because week 1 was already cooked at the larger portions. Week 1 is 2,397 kcal against a maintenance of about 2,750 — a 350 deficit, roughly 0.3 kg a week, which is gentle. Week 2's smaller portions take it to 1,953 and a 795 deficit, about 0.7 kg, which is brisk. Across the fortnight that averages 0.5 kg a week, a sensible rate. If you would rather they matched, even them out: add 50 g of dry lentils per portion to week 2, or cook week 1 in the smaller portions next time round. And if your top sets drop for two sessions running, or you feel flat, add food back in this order: 50 g more dry rice, pasta or lentils per meal (+170 kcal), then two more eggs at breakfast (+143), then 150 g more yoghurt (+86)."

const WEEKS=[
{id:"w1",label:"Week 1",
 note:"Four dishes, two per cook day — left exactly as you cooked it, so the portion counts here match what is in your fridge. These are the larger portions, about 694 kcal each, which makes this a gentler week than week 2. The smaller portions start with week 2.",
 cooks:[
  {day:"Sunday cook",time:"75 min",covers:"Mon, Tue, Wed + Thu lunch",yields:"9 portions",
   kit:"Deep roasting tin that goes on the hob (or a large casserole), one big deep pan, scales, containers around 700 ml.",
   timeline:[
    ["0:00","Oven to 200°C fan. Dice 2 onions, slice 4 peppers, crush the garlic — both dishes' prep in one go."],
    ["0:10","Big pan, high heat: brown the beef in two 500 g batches, 5 min each. Lift out, leave the fat."],
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
     macros:"723 kcal · 58 g protein · about 435 g cooked per portion",
     self:"Complete meal — the rice is in it. Denser than the others, so the portion looks smaller.",
     ing:["750 g chicken thigh fillets (6–7 fillets)","100 g cooking chorizo, sliced into coins","240 g basmati rice, dry weight","560 ml hot chicken stock","2 red peppers, sliced","1 large onion, diced","4 garlic cloves, crushed","2 tsp smoked paprika, 1 tsp dried oregano","1 tbsp olive oil, salt and pepper"],
     steps:["Oven to 200°C fan. Toss the chicken with the oil, paprika, oregano, salt and pepper.","Roasting tin on the hob: fry the chorizo, onion and peppers 5 min until the chorizo bleeds its fat. Garlic 30 s.","Stir in the dry rice, pour the hot stock over, lay the chicken on top. Cover tightly with foil — the seal is what cooks the rice.","35 min covered, then 10 min uncovered. Rest 10 min, fork through, then divide into four."],
     reheat:"2 tbsp water in first, then 3 min in the microwave, stirred at halfway. The rice dries out without the water."},
    {name:"Beef and black bean chilli",portions:"5 portions",
     macros:"684 kcal · 56 g protein · about 630 g cooked per portion, with 60 g dry rice",
     self:"Cook 60 g dry rice fresh on the night — ten minutes.",
     ing:["1 kg beef mince, 5% fat (two 500 g packs)","2 × 400 g tins chopped tomatoes","2 × 400 g tins black beans, drained","1 onion and 2 red peppers, diced","4 garlic cloves, 2 tbsp tomato purée","1 tbsp cumin, 2 tsp smoked paprika, 1–2 tsp chilli flakes","1 beef stock cube, 1 tbsp olive oil"],
     steps:["Brown the mince in two batches on high heat — one batch steams instead of colouring.","Soften the onion and peppers 8 min in the fat, then garlic, spices and purée for 2 min.","Beef back in with the tomatoes, beans and crumbled cube, plus a splash of water.","Simmer uncovered 30–40 min until a spoon leaves a trail. Season at the end, then divide into five."],
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
     macros:"700 kcal · 61 g protein · about 495 g cooked per portion, with 50 g dry couscous",
     self:"50 g couscous on the night: boiling water over it, covered 5 min, forked through.",
     ing:["750 g chicken thigh fillets, halved","1 × 400 g tin chickpeas, drained","1 × 400 g tin chopped tomatoes","3 tbsp rose harissa (or plain harissa plus 1 tsp honey)","1 onion, 3 garlic cloves, 1 tbsp grated ginger","400 ml chicken stock","200 g spinach, juice of half a lemon","1 tbsp olive oil"],
     steps:["Brown the chicken 4 min a side in the casserole. Set aside.","Soften the onion 6 min, then garlic, ginger and harissa for 2 min.","Chicken back in with tomatoes, chickpeas and stock. 25 min covered, 10 uncovered.","Wilt the spinach through at the end, then the lemon juice. Divide into four."],
     reheat:"3 min in the microwave with a splash of water. Couscous made fresh alongside."},
    {name:"Turkey bolognese",portions:"5 portions",
     macros:"669 kcal · 52 g protein · about 570 g cooked per portion, with 75 g dry pasta",
     self:"75 g dry pasta on the night.",
     ing:["1 kg turkey mince, 8% fat (two 500 g packs)","2 × 400 g tins chopped tomatoes","2 tbsp tomato purée","1 onion, 2 carrots, 2 celery sticks, finely diced","3 garlic cloves, 1 tsp oregano, 1 bay leaf","1 chicken stock cube, 100 ml milk, 1 tbsp olive oil"],
     steps:["Soften the onion, carrot and celery 10 min — this is where the flavour is.","Garlic and purée 2 min, then the turkey until no pink remains. Drain the rendered fat off.","Milk in and cooked off, then tomatoes, oregano, bay and the crumbled cube.","Simmer uncovered 35–40 min. Season at the end, then divide into five."],
     reheat:"3 min in the microwave. Pasta fresh, 9–11 min."}]}]},

{id:"w2",label:"Week 2",
 note:"One dish per half of the week, seven portions each — half the cooking of week 1. You eat the same thing for about seven meals running, which is the trade for only making one pot. Both dishes are high-volume and low-density, so the portions are large plates for the calories. Freeze two of the seven on cook day and pull them out for the last two meals: that keeps everything inside the four-day fridge window.",
 cooks:[
  {day:"Sunday cook",time:"50 min",covers:"Sunday dinner through Wednesday",yields:"7 portions",
   kit:"One large casserole or deep pan with a lid, and scales.",
   timeline:[
    ["0:00","Dice 2 onions, crush 4 garlic cloves, grate a thumb of ginger. Dice the chicken into 3 cm pieces."],
    ["0:06","Casserole on medium-high with the oil: brown the chicken in two batches, 4 min each. Lift out."],
    ["0:16","Onions into the fat, 7 min. Then garlic, ginger and all the dry spices — 90 seconds, until the kitchen smells of it."],
    ["0:19","Rinsed lentils in, stirred through the spices for a minute so they toast slightly."],
    ["0:21","Tomatoes and stock in, chicken back on top. Bring to a boil, then lid on and down to a simmer."],
    ["0:25","25 minutes with the lid on. Stir at the halfway point — lentils sink and catch."],
    ["0:50","Lid off, spinach through in handfuls until it collapses. Season, squeeze of lemon."],
    ["0:55","Cool uncovered, then seven portions. Two straight into the freezer."]],
   dishes:[
    {name:"Chicken and red lentil dhal",portions:"7 portions",
     macros:"466 kcal · 49 g protein · about 385 g cooked per portion",
     self:"Complete meal — the lentils are the carb. No side needed.",
     ing:["1 kg chicken thigh fillets, diced into 3 cm pieces","300 g red lentils, dry, rinsed","2 × 400 g tins chopped tomatoes","1.2 L chicken stock","2 onions, diced","4 garlic cloves, 1 tbsp grated ginger","2 tsp cumin, 2 tsp ground coriander, 1 tsp turmeric, 1 tsp garam masala","½–1 tsp chilli flakes","200 g spinach, juice of half a lemon","1 tbsp olive oil, salt"],
     steps:["Brown the diced chicken in the oil in two batches, 4 min each. Set aside — it finishes in the pot.","Onions 7 min in the same fat. Garlic, ginger and all the dry spices for 90 seconds.","Rinsed lentils in, stirred through the spices for a minute.","Tomatoes, stock and the chicken. Boil, then lid on and simmer 25 min, stirring at halfway so the lentils don't catch.","Lid off, spinach through in handfuls. Season, lemon, and divide into seven."],
     reheat:"Splash of water, 3 min in the microwave. Lentils drink it up in the fridge and it sets almost solid — that's normal, the water brings it back."},
   ]},
  {day:"Wednesday cook",time:"55 min",covers:"Thursday through Saturday or Sunday",yields:"7 portions",
   kit:"One large casserole or deep pan with a lid.",
   timeline:[
    ["0:00","Dice 2 onions, crush 4 garlic, grate a thumb of ginger. Peel and cube the sweet potato into 3 cm chunks."],
    ["0:08","Casserole on high: brown the beef in two 500 g batches, 5 min each. Lift out, leave the fat."],
    ["0:18","Onions 7 min. Garlic, ginger and the chilli for 90 seconds."],
    ["0:21","Peanut butter in, stirred until it loosens into the onions — a minute. Then the tomatoes, and scrape the bottom."],
    ["0:24","Beef back in with the sweet potato, butter beans and stock. Boil, lid on, simmer."],
    ["0:28","25 minutes. The sweet potato should give to a fork but still hold its shape."],
    ["0:53","Spinach through, season generously — peanut and tomato both need salt."],
    ["0:58","Cool uncovered, then seven portions. Two into the freezer."]],
   dishes:[
    {name:"Beef and sweet potato groundnut stew",portions:"7 portions",
     macros:"477 kcal · 41 g protein · about 425 g cooked per portion",
     self:"Complete meal — sweet potato and butter beans are the carb.",
     ing:["1 kg beef mince, 5% fat (two 500 g packs)","600 g sweet potato, peeled and cubed","2 × 400 g tins butter beans, drained","2 × 400 g tins chopped tomatoes","80 g smooth peanut butter (no added sugar)","800 ml beef stock","2 onions, diced","4 garlic cloves, 1 tbsp grated ginger","1 scotch bonnet, deseeded, or 1 tsp chilli flakes","200 g spinach","1 tbsp olive oil, salt"],
     steps:["Brown the beef in two batches on high heat. Lift out, leave the fat in the pot.","Onions 7 min, then garlic, ginger and chilli for 90 seconds.","Peanut butter in and stirred until it loosens, then the tomatoes — scrape the bottom of the pot.","Beef back in with the sweet potato, butter beans and stock. Lid on, simmer 25 min until the potato gives to a fork.","Spinach through, season generously, then divide into seven."],
     reheat:"3 min in the microwave, stirred at halfway. The peanut thickens it in the fridge — a splash of water loosens it."},
   ]}]}
];

const BREAKFAST=[
 {name:"Breakfast",macros:"382 kcal · 34 g protein",
  what:"300 g 0% Greek yoghurt, 40 g granola, 80 g frozen berries. The berries thaw overnight in the fridge."},
 {name:"Mid-morning, or straight after training",macros:"250 kcal · 14 g protein",
  what:"Two boiled eggs and a banana. Boil a week's worth on a cook day — seven minutes, then straight into cold water, and they keep in the fridge in their shells."},
 {name:"Afternoon",macros:"234 kcal · 24 g protein",
  what:"200 g Greek yoghurt and 20 g nuts."},
 {name:"Evening",macros:"143 kcal · 13 g protein",
  what:"Two more boiled eggs. This is the one that holds the day's protein up now that there are no shakes — skip it and you lose 13 g."},
 {name:"Overnight oats, if you want something warm",macros:"swap for breakfast",
  what:"60 g porridge oats, 200 ml semi-skimmed milk, 80 g berries, and stir 100 g of the Greek yoghurt through it. Make three jars on a cook day. This is what the oats on the list are for."}
];

const SHOPPING={
 w1:[
  {group:"Meat",items:[["Chicken thigh fillets","1.5 kg"],["Beef mince, 5%","2 × 500 g"],["Turkey mince, 8%","2 × 500 g"],["Cooking chorizo","100 g"]]},
  {group:"Tins — all 400 g",items:[["Chopped tomatoes","5 tins"],["Black beans","2 tins"],["Chickpeas","1 tin"]]},
  {group:"Dry goods",items:[["Basmati rice","1 kg bag"],["Pasta","500 g"],["Couscous","500 g"],["Porridge oats","1 kg"],["Granola","500 g"],["Mixed nuts","200 g"]]},
  {group:"Veg",items:[["Onions","4"],["Red peppers","4"],["Carrots","1 pack"],["Celery","1 pack"],["Garlic","2 bulbs"],["Fresh ginger","1 piece"],["Spinach","200 g"],["Bananas","7"],["Lemon","1"]]},
  {group:"Daily protein",items:[["Eggs","30 — four a day"],["0% Greek yoghurt","3.5 kg"]]},
  {group:"Chilled & freezer",items:[["Semi-skimmed milk","2 L"],["Frozen berries","500 g"]]},
  {group:"Cupboard",items:[["Rose harissa","1 jar"],["Tomato purée","1 tube"],["Stock cubes","chicken + beef"],["Smoked paprika, cumin, oregano","if you're out"],["Chilli flakes, bay leaves","if you're out"],["Olive oil","as needed"]]}
 ],
 w2:[
  {group:"Meat",items:[["Chicken thigh fillets","1 kg"],["Beef mince, 5%","2 × 500 g"]]},
  {group:"Tins — all 400 g",items:[["Chopped tomatoes","4 tins"],["Butter beans","2 tins"]]},
  {group:"Dry goods",items:[["Red lentils","300 g"],["Smooth peanut butter","1 jar, no added sugar"],["Porridge oats","if you're out"],["Granola","500 g"],["Mixed nuts","200 g"]]},
  {group:"Veg",items:[["Onions","4"],["Sweet potato","600 g"],["Garlic","2 bulbs"],["Fresh ginger","1 piece"],["Spinach","400 g"],["Scotch bonnet","1, or use chilli flakes"],["Bananas","7"],["Lemon","1"]]},
  {group:"Daily protein",items:[["Eggs","30 — four a day"],["0% Greek yoghurt","3.5 kg"]]},
  {group:"Chilled & freezer",items:[["Semi-skimmed milk","1 L"],["Frozen berries","500 g"]]},
  {group:"Cupboard",items:[["Chicken and beef stock cubes","1 pack each"],["Cumin, ground coriander, turmeric, garam masala","if you're out"],["Chilli flakes","if you're out"],["Olive oil","as needed"]]}
 ]
};

const SWAPS=[
 ["Portion looks wrong","Weigh it once. The cooked weight is the honest measure — a 385 g dhal portion fills a container the traybake's 290 g doesn't, because the dhal is mostly water and lentils. Both are about the same calories."],
 ["No rose harissa","Plain harissa, same 3 tbsp, plus 1 tsp honey. Or mix your own: 2 tbsp tomato purée, 2 tsp smoked paprika, 1 tsp cumin, 1 tsp chilli flakes, a crushed garlic clove, 1 tbsp oil, squeeze of lemon. Waitrose keeps Belazu rose harissa in world foods rather than with the cooking sauces."],
 ["Sick of eggs","A tin of tuna is 26 g protein for 120 kcal and slots into either snack. Two a week is plenty of variety; more than that and the eggs are easier."],
 ["Thigh to breast","Saves about 40 kcal and adds 3 g protein a portion, but breast dries out over a long cook. In the dhal add it in the last 12 minutes instead of browning it first."],
 ["No scotch bonnet","1 tsp chilli flakes. The stew wants heat behind the peanut, not on top of it."],
 ["Meat-free week 2","The dhal works with 2 extra tins of chickpeas in place of the chicken — about 28 g protein a portion instead of 49, so take two more eggs that day."]
];

const TROUBLE=[
 ["Losing weight faster than 0.7 kg a week","Add food back before you lose strength, not after. 50 g more dry lentils, rice or pasta per meal is +170 kcal and the easiest lever."],
 ["Top sets dropping two sessions running","That is the signal the deficit is too steep. Add the 50 g of carbs per meal and two more eggs at breakfast, and hold there for a fortnight."],
 ["Starving by 9pm","Move the afternoon yoghurt later, or shift the evening eggs to just before bed. Same total, different timing."],
 ["Same dish seven meals running is grim","That is the cost of one pot per half-week. Hot sauce, a squeeze of lemon, or a handful of fresh herbs on top changes it more than you'd think. Or go back to week 1's two-dish structure."],
 ["Dhal set solid in the fridge","Normal — lentils keep drinking. A splash of water and a stir brings it back."],
 ["Traybake rice still crunchy","The stock wasn't boiling when it went in, or the foil wasn't sealed. Add 100 ml boiling water, re-cover, 10 min."]
];

const STORAGE=[
 "Cool uncovered within an hour of cooking, then lid it and fridge it. Warm food in a sealed box is what shortens its life.",
 "Portion into individual containers straight away rather than one big tub — it reheats better and you won't pick at it.",
 "Fridge at 4°C or below, eaten within four days.",
 "Week 2's Wednesday cook has to stretch to Sunday, which is five days. So freeze two of the seven portions on cook day and defrost them Saturday night — then nothing is ever more than four days old.",
 "Week 1 makes 18 portions against the 14 you eat, so four go in the freezer. Label them with the date.",
 "Reheat until piping hot through, stirring halfway, once only. Rice is the one to respect: cool it fast, eat within 24 hours, which is why the chilli has none stirred into it."
];
