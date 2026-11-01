/* Iron & Icebox — plan data. Edit here; index.html renders it. */
const PLAN=[
 {key:"upperA",warmup:{general:"5 min on the rower, easy pace \u2014 just enough to raise your temperature.",drills:["20 band pull-aparts","10 scapular push-ups","10 arm circles each way"]},n:1,name:"Upper A",day:"Monday",focus:"Horizontal push, vertical pull",
  blurb:"",
  ex:[
   {id:"bench",tag:"1",n:"Barbell bench press",s:4,r:"6–8",rest:"2–3 min",rs:150,note:"Main strength lift. Add weight before reps."},
   {id:"csrow",tag:"2",n:"Chest-supported row",s:4,r:"8–10",rest:"2 min",rs:120,note:"Chest on the pad kills momentum — pull to the lower ribs."},
   {id:"inclinedb",tag:"3",n:"Incline dumbbell press",s:3,r:"10–12",rest:"60 s",rs:60,note:"30° bench. Stretch at the bottom, don't bounce."},
   {id:"latraise",tag:"4A",n:"Cable lateral raise",s:3,r:"12–15",rest:"45 s",rs:45,note:"One arm at a time, cable behind you."},
   {id:"ezcurl",tag:"4B",n:"EZ-bar curl",s:3,r:"10–12",rest:"45 s",rs:45,note:"Elbows pinned to your sides."},
   {id:"ohtri",tag:"4C",n:"Overhead cable triceps extension",s:3,r:"12–15",rest:"45 s",rs:45,note:"Rope, full stretch overhead."},
   {id:"pulldown",tag:"5",n:"Lat pulldown, wide grip",s:3,r:"10–12",rest:"60 s",rs:60,note:"Lean back about 15°, drive the elbows down rather than back."}]},
 {key:"lowerA",warmup:{general:"5 min on the bike, easy pace.",drills:["10 bodyweight squats, slow and deep","10 leg swings each side","20 glute bridges","10 ankle rocks each side"]},n:2,name:"Lower A",day:"Tuesday",focus:"Squat",
  blurb:"",
  ex:[
   {id:"squat",tag:"1",n:"Back squat",s:4,r:"5–8",rest:"3 min",rs:180,note:"Below parallel if your hips allow. Belt optional on the top set."},
   {id:"legpress",tag:"2",n:"Leg press",s:3,r:"10–12",rest:"2 min",rs:120,note:"Feet mid-platform, knees track over toes."},
   {id:"lunge",tag:"3",n:"Walking lunge",s:2,r:"10–12 / leg",rest:"60 s",rs:60,note:"Dumbbells at your sides. Long strides."},
   {id:"seatedcurl",tag:"4A",n:"Seated leg curl",s:3,r:"12–15",rest:"45 s",rs:45,note:"More stretch than lying."},
   {id:"standcalf",tag:"4B",n:"Standing calf raise",s:3,r:"10–15",rest:"45 s",rs:45,note:"2-second pause at the bottom of every rep."},
   {id:"abwheel",tag:"5",n:"Core — ab wheel or long-lever plank",s:2,r:"8–12 or 30 s",rest:"45 s",rs:45,note:"Ribs down, no sagging."}]},
 {key:"upperB",warmup:{general:"5 min on the rower, easy pace.",drills:["20 band pull-aparts","10 wall slides","10 shoulder dislocates with a band or broomstick"]},n:3,name:"Upper B",day:"Thursday",focus:"Vertical push, horizontal pull",
  blurb:"",
  ex:[
   {id:"ohp",tag:"1",n:"Seated shoulder press",s:4,r:"6–8",rest:"2–3 min",rs:150,note:"Backrest at 80–85°. More reclined turns it into a chest press."},
   {id:"pullup",tag:"2",n:"Pull-up, weighted if you can",s:3,r:"6–10",rest:"2 min",rs:120,note:"Neutral-grip pulldowns if 6 clean reps is a stretch."},
   {id:"cablerow",tag:"3",n:"Seated cable row",s:3,r:"10–12",rest:"60 s",rs:60,note:"Pause a second with the handle at your stomach."},
   {id:"dbraise",tag:"4A",n:"Dumbbell lateral raise",s:3,r:"15–20",rest:"60 s",rs:60,note:"Light. Lead with the elbow, stop at shoulder height."},
   {id:"inclinecurl",tag:"4B",n:"Incline dumbbell curl",s:3,r:"10–12",rest:"45 s",rs:45,note:"Bench at 45°, arms hanging behind you."},
   {id:"pushdown",tag:"4C",n:"Rope pushdown or dips",s:3,r:"10–12",rest:"45 s",rs:45,note:"Dips if your shoulders are happy, pushdowns if not."},
   {id:"facepull",tag:"4D",n:"Face pull",s:3,r:"15–20",rest:"45 s",rs:45,note:"Light and controlled."}]},
 {key:"lowerB",warmup:{general:"5 min on the bike, easy pace.",drills:["10 walking lunges","10 leg swings each side","10 hip-flexor rocks each side","20 bodyweight calf raises"]},n:4,name:"Lower B",day:"Friday",focus:"Single-leg and posterior chain",
  blurb:"",
  ex:[
   {id:"bulgarian",tag:"1",n:"Bulgarian split squat",s:3,r:"8–10 / leg",rest:"2–3 min",rs:150,note:"Upright for quads, leaned forward for glutes."},
   {id:"backext",tag:"2",n:"45° back extension, weighted",s:3,r:"10–12",rest:"2 min",rs:120,note:"Plate at the chest. Squeeze the glutes at the top, don't hyperextend."},
   {id:"lyingcurl",tag:"3",n:"Lying leg curl",s:4,r:"10–12",rest:"60 s",rs:60,note:"Different hip angle to Day 2's seated curl."},
   {id:"legext",tag:"4A",n:"Leg extension",s:3,r:"12–15",rest:"45 s",rs:45,note:"Last set as a drop set once a fortnight."},
   {id:"seatedcalf",tag:"4B",n:"Seated calf raise, dumbbell on knees",s:3,r:"12–15",rest:"45 s",rs:45,note:"Sit on a bench, balls of feet on a plate or step, one heavy dumbbell stood upright on your knees. Knees at 90° is what makes it the soleus. Leg press with a soft knee works too."},
   {id:"crunch",tag:"5",n:"Core — cable crunch",s:2,r:"12–15",rest:"45 s",rs:45,note:"Round the spine, ribs to hips."}]}
];

/* Portions are given as cooked weight so you can check them on scales —
   calories follow from that rather than the other way round. */

const PORTION_NOTE="";

const TARGETS={
 week1:{kcal:"2,397",protein:"198",deficit:"350",rate:"0.32"},
 week2:{kcal:"2,042",protein:"182",deficit:"705",rate:"0.64"}
};


const WEEKS=[
{id:"w1",label:"Week 1",
 note:"Four dishes, two per cook day. Larger portions, about 694 kcal each.",
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
 note:"One dish per half-week, seven portions each. Freeze two on cook day for the last two meals.",
 cooks:[
  {day:"Sunday cook",time:"70 min",covers:"Sunday dinner through Wednesday",yields:"7 portions",
   kit:"One big pot with a tight lid, a blender and the air fryer.",
   timeline:[
    ["0:00","Chicken into a pot with 1 halved onion, the stock cube, thyme, 1 tsp of the curry powder, the bay leaves and 900 ml water. Bring to the boil."],
    ["0:05","While it comes up: blend 2 red peppers, the tin of tomatoes, 1 onion and the scotch bonnet until smooth. Slice the last pepper and onion."],
    ["0:18","Chicken out \u2014 thighs need 15\u201318 min. Strain the liquid and keep it. That is your stock, and it is the whole reason for boiling first."],
    ["0:20","Pot back on with the oil: sliced onion and pepper 5 min. Tomato pur\u00e9e in and fried 3 min until it darkens."],
    ["0:28","Blended base in. Boil hard and uncovered for 10 min \u2014 this is the step that decides whether it tastes cooked or raw."],
    ["0:38","Remaining curry powder in, then the rinsed rice, stirred to coat. 700 ml of the reserved chicken stock in. Lid on tight, lowest heat, 22 min. Do not stir."],
    ["0:45","Air fryer to 200\u00b0C. Chicken in for 12\u201315 min, turned once, until the edges catch."],
    ["1:00","Rice off the heat, lid still on, 10 min."],
    ["1:10","Fork the rice through, chicken on top or diced through it. Cool uncovered, seven portions, two to the freezer."]],
   dishes:[
    {name:"Jollof rice with chicken",portions:"7 portions",
     macros:"515 kcal \u00b7 41 g protein \u00b7 about 400 g cooked per portion",
     self:"Complete meal. No side. The chicken is boiled first and air fried while the rice cooks \u2014 the strained boiling liquid is the stock.",
     ing:["1 kg chicken thigh fillets, left whole for the air fryer","350 g long-grain rice, dry, rinsed","3 red peppers","1 \u00d7 400 g tin chopped tomatoes","3 onions (one goes in the boil)","1 scotch bonnet, deseeded for less heat","3 tbsp tomato pur\u00e9e","2 tsp curry powder, 1 tsp dried thyme, 2 bay leaves","1 chicken stock cube","2 tbsp oil, salt"],
     steps:["Boil the chicken first, in 900 ml water with a halved onion, the stock cube, thyme, 1 tsp curry powder and the bay leaves. 15\u201318 min for thighs.","Lift the chicken out and strain the liquid \u2014 keep 700 ml. Seasoning the boil is what makes that liquid worth having.","Blend 2 peppers, the tomatoes, 1 onion and the scotch bonnet smooth. Slice the last pepper and onion.","Oil in the pot: sliced onion and pepper 5 min, then the pur\u00e9e fried 3 min until it darkens.","Blended base in, boil hard uncovered 10 min until it thickens and loses the raw smell.","Remaining curry powder, then the rinsed rice stirred to coat, then the 700 ml of chicken stock. Tight lid, lowest heat, 22 min, no stirring. Rest 10 min off the heat.","Air fry the chicken at 200\u00b0C for 12\u201315 min while the rice cooks. Fork the rice through and put the chicken on top."],
     reheat:"2 tbsp water, 3 min in the microwave. The chicken softens in the fridge whatever you do \u2014 6 min in the air fryer at 180\u00b0C brings it back better than the microwave does."}]},
  {day:"Wednesday cook",time:"45 min",covers:"Thursday through Sunday",yields:"7 portions",
   kit:"One large deep pan.",
   timeline:[
    ["0:00","Dice 2 onions and 3 peppers. Blitz or crush the peanuts, then mix the suya spice: peanuts, paprika, cayenne, ginger, garlic and onion powder, crumbled stock cube."],
    ["0:08","Pan on high: brown the beef in two 500 g batches, 5 min each. Lift out, leave the fat."],
    ["0:18","Onions and peppers, 6 min."],
    ["0:24","Tomato pur\u00e9e 2 min, then two thirds of the suya mix for 1 min \u2014 it will smell roasted."],
    ["0:27","Tomatoes in, beef back, splash of water. Simmer uncovered 12 min."],
    ["0:39","Spinach through. Off the heat, stir in the last third of the suya mix \u2014 that is what keeps it tasting fresh rather than cooked flat."],
    ["0:42","Cool uncovered, seven portions, two to the freezer."]],
   dishes:[
    {name:"Suya beef and pepper stew",portions:"7 portions",
     macros:"543 kcal \u00b7 40 g protein \u00b7 about 505 g cooked per portion, with 60 g dry rice",
     self:"60 g dry rice on the night.",
     ing:["1 kg beef mince, 5% fat (two 500 g packs)","3 red peppers, diced","2 onions, diced","2 \u00d7 400 g tins chopped tomatoes","2 tbsp tomato pur\u00e9e","200 g spinach","1 tbsp oil, salt","Suya spice: 60 g roasted peanuts, blitzed; 2 tsp smoked paprika; 1\u20132 tsp cayenne; 1 tsp ground ginger; 1 tsp garlic powder; 1 tsp onion powder; 1 beef stock cube"],
     steps:["Mix the suya spice in a bowl first \u2014 it goes in twice.","Brown the beef in two batches on high heat. Lift out.","Onions and peppers 6 min in the fat.","Pur\u00e9e 2 min, then two thirds of the suya mix for 1 min.","Tomatoes and the beef back in with a splash of water. Simmer uncovered 12 min.","Spinach through, then the last third of the suya mix off the heat. Season and divide into seven."],
     reheat:"Splash of water, 3 min in the microwave."}]}]}
];

const FIXED=[
 {name:"Breakfast",macros:"382 kcal \u00b7 34 g protein",what:"300 g 0% Greek yoghurt, 40 g granola, 80 g frozen berries."},
 {name:"Afternoon",macros:"234 kcal \u00b7 24 g protein",what:"200 g Greek yoghurt, 20 g nuts."}
];

/* Two protein slots a day, mid-morning and evening. Pick one set for the
   week and eat it through \u2014 two things to buy, not eight. */
const SNACK_SETS=[
 {label:"Set A",a:"2 boiled eggs",b:"Tin of tuna in spring water",macros:"263 kcal \u00b7 39 g protein",
  buy:"14 eggs, 7 tins of tuna"},
 {label:"Set B",a:"100 g roast chicken slices",b:"200 g Greek yoghurt",macros:"224 kcal \u00b7 44 g protein",
  buy:"700 g chicken slices, 1.4 kg extra yoghurt"},
 {label:"Set C",a:"150 g edamame, from frozen",b:"Tin of tuna in spring water",macros:"300 kcal \u00b7 43 g protein",
  buy:"1 kg frozen edamame, 7 tins of tuna"}
];
const SNACK_NOTE="One set a week, rotated. Add a banana to the mid-morning one on training days.";
const SNACK_SWAPS="For a change in either slot: 50 g biltong (145 kcal, 26 g), 150 g king prawns (110, 30), 80 g smoked salmon (145, 20).";

const SHOPPING={
 w1:[
  {group:"Meat",items:[["Chicken thigh fillets","1.5 kg"],["Beef mince, 5%","2 × 500 g"],["Turkey mince, 8%","2 × 500 g"],["Cooking chorizo","100 g"]]},
  {group:"Tins — all 400 g",items:[["Chopped tomatoes","5 tins"],["Black beans","2 tins"],["Chickpeas","1 tin"]]},
  {group:"Dry goods",items:[["Basmati rice","1 kg bag"],["Pasta","500 g"],["Couscous","500 g"],["Porridge oats","1 kg"],["Granola","500 g"],["Mixed nuts","200 g"]]},
  {group:"Veg",items:[["Onions","4"],["Red peppers","4"],["Carrots","1 pack"],["Celery","1 pack"],["Garlic","2 bulbs"],["Fresh ginger","1 piece"],["Spinach","200 g"],["Bananas","7"],["Lemon","1"]]},
  {group:"Daily protein",items:[["0% Greek yoghurt","3.5 kg"],["This week's snack set","see Meals — two items"]]},
  {group:"Chilled & freezer",items:[["Semi-skimmed milk","2 L"],["Frozen berries","500 g"]]},
  {group:"Cupboard",items:[["Rose harissa","1 jar"],["Tomato purée","1 tube"],["Stock cubes","chicken + beef"],["Smoked paprika, cumin, oregano","if you're out"],["Chilli flakes, bay leaves","if you're out"],["Olive oil","as needed"]]}
 ],
 w2:[
  {group:"Meat",items:[["Chicken thigh fillets","1 kg"],["Beef mince, 5%","2 \u00d7 500 g"]]},
  {group:"Tins",items:[["Chopped tomatoes, 400 g","3 tins"]]},
  {group:"Dry goods",items:[["Long-grain rice","1 kg bag"],["Roasted peanuts","60 g"],["Granola","500 g"],["Mixed nuts","200 g"]]},
  {group:"Veg",items:[["Onions","6"],["Red peppers","6"],["Scotch bonnet","1\u20132"],["Garlic","1 bulb"],["Fresh ginger","1 piece"],["Spinach","200 g"],["Bananas","7"]]},
  {group:"Daily protein",items:[["0% Greek yoghurt","3.5 kg"],["This week\u0027s snack set","see Meals \u2014 two items"]]},
  {group:"Freezer",items:[["Frozen berries","500 g"]]},
  {group:"Cupboard",items:[["Tomato pur\u00e9e","1 tube"],["Chicken and beef stock cubes","1 pack each"],["Curry powder, dried thyme, bay leaves","if you\u0027re out"],["Smoked paprika, cayenne, ground ginger","if you\u0027re out"],["Garlic powder, onion powder","if you\u0027re out"],["Oil","as needed"]]}
 ]
};

const SWAPS=[
 ["No rose harissa","Plain harissa, same 3 tbsp, plus 1 tsp honey. Waitrose keeps it in world foods, not with the cooking sauces."],
 ["Sick of eggs","A tin of tuna is 26 g protein for 120 kcal and slots into either snack."],
 ["No roasted peanuts","2 tbsp smooth peanut butter stirred in with the tomatoes."],
 ["Thigh to breast","Add it in the last 12 minutes rather than browning it first."],
 ["No scotch bonnet for the jollof","1 tsp chilli flakes, or leave it out \u2014 the dish works without the heat."]
];

const TROUBLE=[
 ["Losing more than 0.7 kg a week","Add 50 g dry rice, pasta or lentils per meal."],
 ["Top sets down two sessions running","Add the 50 g of carbs, plus two more eggs at breakfast."],
 ["Jollof dried out","2 tbsp water before reheating, lid on."],
 ["Traybake rice crunchy","Stock wasn't boiling or the foil wasn't sealed. 100 ml boiling water, re-cover, 10 min."]
];

const STORAGE=[
 "Cool uncovered within an hour, then lid and fridge.",
 "Portion into individual containers straight away.",
 "Fridge at 4\u00b0C or below, eaten within four days.",
 "Week 2's Wednesday cook has to reach Sunday \u2014 freeze two portions on cook day, defrost Saturday night.",
 "Reheat piping hot through, stirring halfway, once only.",
 "Rice: cool fast, eat within 24 hours."
];

const RAMP=[
 {pct:0,reps:"8\u201310",label:"Empty bar, or the lightest setting"},
 {pct:0.5,reps:"5",label:"Half your top weight"},
 {pct:0.7,reps:"3",label:"Seventy per cent"},
 {pct:0.85,reps:"1\u20132",label:"Eighty-five per cent"}
];
const RAMP_NOTE="Not working sets \u2014 rest only as long as the plate change takes.";
const RAMP_NOHIST="No history yet \u2014 work up in three or four jumps, 5, 3 and 1 reps. Numbers appear here once you log a session.";
