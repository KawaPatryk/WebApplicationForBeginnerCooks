//sprawdzic problematyczne rzeczy, takie jak "vegetable oil", "soy souce", "sesame oil", "ketchup", "white bread"
// 0 jako to taste
//mushrooms sa jako qty
const AllRecipes = [
    {
        "id": "Easy Sugar Cookies",
        "ingredients": [
            {"id": "flour", "quantity": 680},
            {"id": "baking soda", "quantity": 5},
            {"id": "baking powder", "quantity": 3},
            {"id": "butter", "quantity": 250},
            {"id": "white sugar", "quantity": 375},
            {"id": "egg", "quantity": 1},
            {"id": "vanilla extract", "quantity": 30},
        ],
        "description": "Quick and easy sugar cookies! They are really good, plain or with candies in them. My friend uses chocolate mints on top, and they're great!",
        "steps": ["reheat oven to 375 degrees F (190 degrees C). In a small bowl, stir together flour, baking soda, and baking powder. Set aside.", "In a large bowl, cream together the butter and sugar until smooth. Beat in egg and vanilla. Gradually blend in the dry ingredients. Roll rounded teaspoonfuls of dough into balls, and place onto ungreased cookie sheets.", "Bake 8 to 10 minutes in the preheated oven, or until golden. Let stand on cookie sheet two minutes before removing to cool on wire racks."],
        "img": "https://i.ibb.co/vkKbbwc/Easy-Sugar-Cookies.png",
        "favorites": false
    }, {
        "id": "Chef John's Perfect Prime Rib",
        "ingredients": [
            {"id": "prime rib roast", "quantity": 2000},
            {"id": "butter", "quantity": 60},
            {"id": "black pepper", "quantity": 30},
            {"id": "salt", "quantity": 30},
        ],
        "description": "This is a specific formula for achieving a perfectly pink prime rib cooked somewhere a shade under medium rare. To use this method you must have a full-sized, modern oven with a digital temperature setting that indicates when it is preheated. Older ovens with manual controls can vary greatly, and the doors may not have the proper insulation.",
        "steps": ["Place rib roast on a plate and bring to room temperature, about 4 hours.", "Preheat an oven to 500 degrees F (260 degrees C).", "Combine butter, pepper, and herbes de Provence in a bowl; mix until well blended. Spread butter mixture evenly over entire roast. Season roast generously with kosher salt.", "Roast the 4-pound prime rib (see footnote if using a larger and smaller roast) in the preheated oven for 20 minutes. Turn the oven off and, leaving the roast in the oven with the door closed, let the roast sit in the oven for 2 hours. Remove roast from the oven, slice, and serve."],
        "img": "https://i.ibb.co/dMpbjBx/Chef-John-s-Perfect-Prime-Rib.png",
        "favorites": false
    }, {
        "id": "Juicy Roasted Chicken",
        "ingredients": [
            {"id": "whole chicken", "quantity": 1},
            {"id": "black pepper", "quantity": 30},
            {"id": "onion powder", "quantity": 250},
            {"id": "margarine", "quantity": 125},
            {"id": "celery", "quantity": 1},
        ],
        "description": "My grandmother's recipe for roasted chicken. We are German and she used to do it this way all the time. I never have had a chicken this juicy before; this little trick works and makes the people eating it go silent. It's funny. We nibble on the celery after.",
        "steps": ["Preheat oven to 350 degrees F (175 degrees C).", "Place chicken in a roasting pan, and season generously inside and out with salt and pepper. Sprinkle inside and out with onion powder. Place 3 tablespoons margarine in the chicken cavity. Arrange dollops of the remaining margarine around the chicken's exterior. Cut the celery into 3 or 4 pieces, and place in the chicken cavity.", "Bake uncovered 1 hour and 15 minutes in the preheated oven, to a minimum internal temperature of 180 degrees F (82 degrees C). Remove from heat, and baste with melted margarine and drippings. Cover with aluminum foil, and allow to rest about 30 minutes before serving."],
        "img": "https://i.ibb.co/QQTdz3N/Juicy-Roasted-Chicken.png",
        "favorites": false
    }, {
        "id": "Creamy Au Gratin Potatoes",
        "ingredients": [
            {"id": "potatoes", "quantity": 4},
            {"id": "onion", "quantity": 1},
            {"id": "salt", "quantity": 30},
            {"id": "black pepper", "quantity": 30},
            {"id": "butter", "quantity": 100},
            {"id": "flour", "quantity": 750},
            {"id": "milk", "quantity": 500},
            {"id": "cheddar", "quantity": 375},
        ],
        "description": "This is my husband's favorite dish, and he considers it a special occasion every time I make it. The creamy cheese sauce and the tender potatoes in this classic French dish combine to make a deliciously addictive experience. It's a great side dish with a roast pork loin or beef tenderloin. Add a green salad and French bread, and you have found the magic path to a man's heart. To avoid lumps in your sauce, add the milk just a little at a time as you stir the flour and butter. Experiment with different cheeses for variety.",
        "steps": ["Preheat oven to 400 degrees F (200 degrees C). Butter a medium casserole dish.", "Layer 1/2 of the potatoes into bottom of the prepared casserole dish. Top with the onion slices, and add the remaining potatoes. Season with salt and pepper to taste.", "In a medium-size saucepan, melt butter over medium heat. Mix in the flour and salt, and stir constantly with a whisk for one minute. Stir in milk. Cook until mixture has thickened. Stir in cheese all at once, and continue stirring until melted, about 30 to 60 seconds. Pour cheese over the potatoes, and cover the dish with aluminum foil.", "Bake 1 1/2 hours in the preheated oven."],
        "img": "https://i.ibb.co/Z2rMtGt/Creamy-Au-Gratin-Potatoes.png",
        "favorites": false
    }, {
        "id": "Basic Crepes",
        "ingredients": [
            {"id": "flour", "quantity": 150},
            {"id": "egg", "quantity": 2},
            {"id": "milk", "quantity": 150},
            {"id": "water", "quantity": 250},
            {"id": "salt", "quantity": 1},
            {"id": "butter", "quantity": 30},
        ],
        "description": "Here is a simple but delicious crepe batter which can be made in minutes. It's made from ingredients that everyone has on hand.",
        "steps": ["In a large mixing bowl, whisk together the flour and the eggs. Gradually add in the milk and water, stirring to combine. Add the salt and butter; beat until smooth.", "Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each crepe. Tilt the pan with a circular motion so that the batter coats the surface evenly.", "Cook the crepe for about 2 minutes, until the bottom is light brown. Loosen with a spatula, turn and cook the other side. Serve hot."],
        "img": "https://i.ibb.co/pyZXtVv/Basic-Crepes.png",
        "favorites": false
    }, {
        "id": "Chicken Parmesan",
        "ingredients": [
            {"id": "chicken breast", "quantity": 4},
            {"id": "salt", "quantity": 15},
            {"id": "black pepper", "quantity": 30},
            {"id": "egg", "quantity": 2},
            {"id": "bread crumbs", "quantity": 150},
            {"id": "parmesan cheese", "quantity": 75},
            {"id": "flour", "quantity": 150},
            {"id": "olive oil", "quantity": 150},
            {"id": "tomato sauce", "quantity": 150},
            {"id": "mozzarella", "quantity": 40},
            {"id": "fresh basil", "quantity": 150},
            {"id": "provolone cheese", "quantity": 150},
        ],
        "description": "My version of chicken parmesan is a little different than what they do in the restaurants, with less sauce and a crispier crust.",
        "steps": ["Preheat an oven to 450 degrees F (230 degrees C).", "Place chicken breasts between two sheets of heavy plastic (resealable freezer bags work well) on a solid, level surface. Firmly pound chicken with the smooth side of a meat mallet to a thickness of 1/2-inch. Season chicken thoroughly with salt and pepper.", "Beat eggs in a shallow bowl and set aside.", "Mix bread crumbs and 1/2 cup Parmesan cheese in a separate bowl, set aside.", "Place flour in a sifter or strainer; sprinkle over chicken breasts, evenly coating both sides.", "Dip flour coated chicken breast in beaten eggs. Transfer breast to breadcrumb mixture, pressing the crumbs into both sides. Repeat for each breast. Set aside breaded chicken breasts for about 15 minutes.", "Heat 1 cup olive oil in a large skillet on medium-high heat until it begins to shimmer. Cook chicken until golden, about 2 minutes on each side. The chicken will finish cooking in the oven.", "Place chicken in a baking dish and top each breast with about 1/3 cup of tomato sauce. Layer each chicken breast with equal amounts of mozzarella cheese, fresh basil, and provolone cheese. Sprinkle 1 to 2 tablespoons of Parmesan cheese on top and drizzle with 1 tablespoon olive oil.", "Bake in the preheated oven until cheese is browned and bubbly, and chicken breasts are no longer pink in the center, 15 to 20 minutes. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C)."],
        "img": "https://i.ibb.co/XXQwqqp/Chicken-Parmesan.png",
        "favorites": false
    }, {
        "id": "Fried Rice Restaurant Style",
        "ingredients": [
            {"id": "white rice", "quantity": 300},
            {"id": "water", "quantity": 600},
            {"id": "green peas", "quantity": 150},
            {"id": "vegetable oil", "quantity": 20},
            {"id": "egg", "quantity": 2},
            {"id": "soy sauce", "quantity": 0},
            {"id": "sesame oil", "quantity": 20},
        ],
        "description": "A quick fried rice like you get at your favorite Chinese restaurant. A couple of eggs, baby carrots, peas and soy sauce is all you need.",
        "steps": ["n a saucepan, combine rice and water. Bring to a boil. Reduce heat, cover, and simmer for 20 minutes.", "In a small saucepan, boil carrots in water about 3 to 5 minutes. Drop peas into boiling water, and drain.", "Heat wok over high heat. Pour in oil, then stir in carrots and peas; cook about 30 seconds. Crack in eggs, stirring quickly to scramble eggs with vegetables. Stir in cooked rice. Shake in soy sauce, and toss rice to coat. Drizzle with sesame oil, and toss again."],
        "img": "https://i.ibb.co/NWpYNrc/Fried-Rice-Restaurant-Style.png",
        "favorites": false
    }, {
        "id": "Klupskies (Polish Burgers)",
        "ingredients": [
            {"id": "ground beef", "quantity": 1000},
            {"id": "onion", "quantity": 1},
            {"id": "green pepper", "quantity": 10},
            {"id": "egg", "quantity": 1},
            {"id": "ketchup", "quantity": 30},
            {"id": "salt", "quantity": 5},
            {"id": "white bread", "quantity": 100},
            {"id": "olive oil", "quantity": 0},
        ],
        "description": "This recipe is a family favorite that was passed down over the generations. Grandma and Pap just ate them plain, with a fork (sometimes dipped in ketchup), but our family likes to top these burgers with cheese and serve on a hamburger bun in a the traditional way. I have also seen these referred to as Kotlety Mielone. These can also be cooked on the grill.",
        "steps": ["Mix ground beef, onion, green pepper, egg, ketchup, and sea salt together in a bowl; mix in the white bread pieces until evenly distributed. Form the mixture into 4 patties.", "Spray a large skillet with olive oil cooking spray and set over medium heat. Cook the burgers until well-browned on the bottoms, about 10 minutes; flip the burgers and cook until the meat is no longer pink and the juices run clear, 8 to 10 more minutes."],
        "img": "https://i.ibb.co/FnrP0WD/Klupskies-Polish-Burgers.png",
        "favorites": false
    }, {
        "id": "Chicken Marsala",
        "ingredients": [
            {"id": "flour", "quantity": 40},
            {"id": "salt", "quantity": 10},
            {"id": "black pepper", "quantity": 5},
            {"id": "oregano", "quantity": 5},
            {"id": "chicken breast", "quantity": 4},
            {"id": "butter", "quantity": 60},
            {"id": "mushrooms", "quantity": 10},
            {"id": "red wine", "quantity": 200},
        ],
        "description": "A delicious, classic chicken dish -- lightly coated chicken breasts braised with Marsala wine and mushrooms. Easy and ideal for both a quick weeknight entree AND serving to company.",
        "steps": ["In a shallow dish or bowl, mix together the flour, salt, pepper and oregano. Coat chicken pieces in flour mixture.", "In a large skillet, melt butter in oil over medium heat. Place chicken in the pan, and lightly brown. Turn over chicken pieces, and add mushrooms. Pour in wine and sherry. Cover skillet; simmer chicken 10 minutes, turning once, until no longer pink and juices run clear."],
        "img": "https://i.ibb.co/F6NLQkx/Chicken-Marsala.png",
        "favorites": false
    }, {
        "id": "Authentic German Potato Salad",
        "ingredients": [
            {"id": "potato", "quantity": 3},
            {"id": "bacon", "quantity": 300},
            {"id": "onion", "quantity": 1},
            {"id": "vinegar", "quantity": 50},
            {"id": "water", "quantity": 30},
            {"id": "white sugar", "quantity": 45},
            {"id": "salt", "quantity": 15},
            {"id": "black pepper", "quantity": 5},
            {"id": "parsley", "quantity": 15},
        ],
        "description": "This is my mother's recipe. Everyone, German or not, loves it. It is easy to double the recipe as well. I often bring it to potlucks, and we also have it at home on special occasions. There are usually no leftovers, but if there are, they don't last long!",
        "steps": ["Place the potatoes into a pot, and fill with enough water to cover. Bring to a boil, and cook for about 10 minutes, or until easily pierced with a fork. Drain, and set aside to cool.", "Place the bacon in a large deep skillet over medium-high heat. Fry until browned and crisp, turning as needed. Remove from the pan and set aside.", "Add onion to the bacon grease, and cook over medium heat until browned. Add the vinegar, water, sugar, salt and pepper to the pan. Bring to a boil, then add the potatoes and parsley. Crumble in half of the bacon. Heat through, then transfer to a serving dish. Crumble the remaining bacon over the top, and serve warm."],
        "img": "https://i.ibb.co/s67Sd5H/Authentic-German-Potato-Salad.png",
        "favorites": false
    }, {
        "id": "Pesto Pasta",
        "ingredients": [
            {"id": "onion", "quantity": 125},
            {"id": "pesto", "quantity": 70},
            {"id": "olive oil", "quantity": 30},
            {"id": "parmesan cheese", "quantity": 60},
            {"id": "penne pasta", "quantity": 500},
            {"id": "salt", "quantity": 0},
            {"id": "black pepper", "quantity": 0},
        ],
        "description": "Easy to make, but full of flavor! Good hot or cold.",
        "steps": ["Cook pasta in a large pot of boiling water until done. Drain.", "Meanwhile, heat the oil in a frying pan over medium low heat. Add pesto, onion, and salt and pepper. Cook about five minutes, or until onions are soft.", "In a large bowl, mix pesto mixture into pasta. Stir in grated cheese. Serve."],
        "img": "https://i.ibb.co/S63M5gt/Pesto-Pasta.png",
        "favorites": false
    }, {
        "id": "Quick Beef Stir-Fry",
        "ingredients": [
            {"id": "vegetable oil", "quantity": 60},
            {"id": "ground beef", "quantity": 300},
            {"id": "red bell pepper", "quantity": 375},
            {"id": "carrot", "quantity": 2},
            {"id": "broccoli", "quantity": 375},
            {"id": "minced garlic", "quantity": 5},
            {"id": "soy sauce", "quantity": 60},
            {"id": "sesame seed", "quantity": 60},
        ],
        "description": "Quick and easy. I make this on my busiest weeknights.",
        "steps": ["Heat vegetable oil in a large wok or skillet over medium-high heat; cook and stir beef until browned, 3 to 4 minutes. Move beef to the side of the wok and add broccoli, bell pepper, carrots, green onion, and garlic to the center of the wok. Cook and stir vegetables for 2 minutes.", "Stir beef into vegetables and season with soy sauce and sesame seeds. Continue to cook and stir until vegetables are tender, about 2 more minutes."],
        "img": "https://i.ibb.co/XFvKhnD/Quick-Beef-Stir-Fry.png",
        "favorites": false
    }, {
        "id": "Chicken Katsu",
        "ingredients": [
            {"id": "chicken breast", "quantity":4},
            {"id": "salt", "quantity":0},
            {"id": "black pepper", "quantity":0},
            {"id": "egg", "quantity":1},
            {"id": "bread crumbs", "quantity":250},
            {"id": "vegetable oil", "quantity":50},
        ],
        "description": "This is my family recipe for Chicken Katsu - Japanese style fried chicken. Can also be used to make Tonkatsu, just use pork cutlets instead of chicken. Serve with white rice and tonkatsu sauce.",
        "steps": ["Season the chicken breasts on both sides with salt and pepper. Place the flour, egg and panko crumbs into separate shallow dishes. Coat the chicken breasts in flour, shaking off any excess. Dip them into the egg, and then press into the panko crumbs until well coated on both sides.","Heat 1/4 inch of oil in a large skillet over medium-high heat. Place chicken in the hot oil, and cook 3 or 4 minutes per side, or until golden brown."],
        "img": "https://i.ibb.co/10YySFT/Chicken-Katsu.png",
        "favorites": false
    }, {
        "id": "Easy Swedish Meatball Sauce",
        "ingredients": [
            {"id": "beef stock", "quantity":250},
            {"id": "heavy cream", "quantity":250},
            {"id": "flour", "quantity":90},
            {"id": "soy sauce", "quantity":30},
            {"id": "black pepper", "quantity":5},
            {"id": "dried rosemary", "quantity":3},
            {"id": "meatball", "quantity":400},
        ],
        "description": "A quick but very tasty sauce to add to already prepared frozen meatballs. This recipe makes a generous amount of sauce for a 1/2 package (20 oz) of meatballs. Serve over egg noodles or rice.",
        "steps": ["Whisk together the beef stock, heavy cream, flour, soy sauce, black pepper, and rosemary in a large saucepan until smooth. Cook and stir over low heat until thickened, about 10 minutes, stirring occasionally. Stir in the meatballs, and continue cooking until meatballs are heated through, about 5 more minutes."],
        "img": "https://i.ibb.co/f1SfxfB/Easy-Swedish-Meatball-Sauce.png",
        "favorites": false
    }, {
        "id": "Easy Blini (Russian Pancake)",
        "ingredients": [
            {"id": "flour", "quantity":250},
            {"id": "salt", "quantity":5},
            {"id": "baking powder", "quantity":3},
            {"id": "milk", "quantity":250},
            {"id": "egg", "quantity":1},
            {"id": "butter", "quantity":60},
        ],
        "description": "I love these bite-sized pancakes because they make perfect appetizers. Top blini with smoked salmon, creme fraiche, or even caviar. Add a sprig of dill and they are sure to impress. My children also love eating these plain too!",
        "steps": ["Combine flour, salt, and baking powder in a bowl.","Whisk 3/4 cup plus 2 tablespoons milk, egg, and 1 tablespoon melted butter together in a separate bowl. Mix into the flour mixture until batter is fully combined.","Heat 1 tablespoon butter in a skillet over medium-low heat. Drop batter, 1 tablespoon at a time, onto the heated skillet. Cook until bubbles form, 1 1/2 to 2 minutes. Flip and continue cooking until brown, about 1 minute more. Lay on plate lined with a paper towel to help soak up excess butter. Repeat with the remaining batter."],
        "img": "https://i.ibb.co/f4fhkzD/Easy-Blini-Russian-Pancake.png",
        "favorites": false
    }, {
        "id": "Easy Mexican Casserole",
        "ingredients": [
            {"id": "ground beef", "quantity":450},
            {"id": "salsa", "quantity":500},
            {"id": "beans", "quantity":450},
            {"id": "tortilla chips", "quantity":750},
            {"id": "sour cream", "quantity":500},
            {"id": "black olives", "quantity":60},
            {"id": "onion", "quantity":150},
            {"id": "tomato", "quantity":150},
            {"id": "cheddar cheese", "quantity":500},
        ],
        "description": "This is an easy and very tasty dish. I often substitute ground turkey and low fat dairy products and it is still delicious! Serve with chips, salsa and green salad.",
        "steps": ["Preheat oven to 350 degrees F (175 degrees C).","In a large skillet over medium-high heat, cook ground beef until no longer pink. Stir in salsa, reduce heat, and simmer 20 minutes, or until liquid is absorbed. Stir in beans, and heat through.","Spray a 9x13 baking dish with cooking spray. Spread crushed tortilla chips in dish, and then spoon beef mixture over chips. Spread sour cream over beef, and sprinkle olives, green onion, and tomato over the sour cream. Top with Cheddar cheese.","Bake in preheated oven for 30 minutes, or until hot and bubbly." ],
        "img": "https://i.ibb.co/7jcFxrr/Easy-Mexican-Casserole.png",
        "favorites": false
    }, {
        "id": "Quick and Easy Pancit",
        "ingredients": [
            {"id": "rice noodles", "quantity":340},
            {"id": "vegetable oil", "quantity":10},
            {"id": "onion", "quantity":1},
            {"id": "garlic clove", "quantity":3},
            {"id": "chicken breast", "quantity":2},
            {"id": "cabbage", "quantity":300},
            {"id": "carrot", "quantity":4},
            {"id": "soy sauce", "quantity":70},
            {"id": "lemon", "quantity":2},
        ],
        "description": "Quick, Easy and delicious! Will remind you of Island Fiestas!",
        "steps": ["Place the rice noodles in a large bowl, and cover with warm water. When soft, drain, and set aside.","Heat oil in a wok or large skillet over medium heat. Saute onion and garlic until soft. Stir in chicken cabbage, carrots and soy sauce. Cook until cabbage begins to soften. Toss in noodles, and cook until heated through, stirring constantly. Transfer pancit to a serving dish and garnish with quartered lemons." ],
        "img": "https://i.ibb.co/vstZ5Mh/Quick-and-Easy-Pancit.png",
        "favorites": false
    }, {
        "id": "Beef Bulgogi",
        "ingredients": [
            {"id": "flank steak", "quantity":500},
            {"id": "soy sauce", "quantity":150},
            {"id": "sugar", "quantity":60},
            {"id": "onion", "quantity":2},
            {"id": "minced garlic", "quantity":60},
            {"id": "sesame seeds", "quantity":60},
            {"id": "sesame oil", "quantity":60},
            {"id": "black pepper", "quantity":5},
        ],
        "description": "Just like my Korean mom makes it! It's delicious! Even better if rolled up in red leaf lettuce with rice and hot pepper paste. If you want to spice it up just add red pepper powder to your marinade",
        "steps": ["Place the beef in a shallow dish. Combine soy sauce, sugar, green onion, garlic, sesame seeds, sesame oil, and ground black pepper in a small bowl. Pour over beef. Cover and refrigerate for at least 1 hour or overnight.","Preheat an outdoor grill for high heat, and lightly oil the grate.","Quickly grill beef on hot grill until slightly charred and cooked through, 1 to 2 minutes per side."],
        "img": "https://i.ibb.co/JvqRmdD/Beef-Bulgogi.png",
        "favorites": false
    },{
        "id": "Asian Coconut Rice",
        "ingredients": [
            {"id": "coconut milk", "quantity":400},
            {"id": "water", "quantity":300},
            {"id": "sugar", "quantity":5},
            {"id": "salt", "quantity":0},
            {"id": "rice", "quantity":350},
        ],
        "description": "I tried so many different ways to duplicate my favorite restaurant's coconut rice after they went out of business. This one is perfect! Garnish with toasted coconut and chopped cilantro if you like.",
        "steps": ["In a saucepan, combine coconut milk, water, sugar, and salt. Stir until sugar is dissolved. Stir in rice. Bring to a boil over medium heat. Cover, reduce heat, and simmer 18 to 20 minutes, until rice is tender."],
        "img": "https://i.ibb.co/zGyBfxH/Asian-Coconut-Rice.png",
        "favorites": false
    },{
        "id": "Jamaican Style Curry Chicken",
        "ingredients": [
            {"id": "vegetable oil", "quantity":70},
            {"id": "onion", "quantity":1},
            {"id": "tomato", "quantity":1},
            {"id": "garlic clove", "quantity":1},
            {"id": "curry", "quantity":60},
            {"id": "habanero pepper", "quantity":0.5},
            {"id": "thyme", "quantity":2},
            {"id": "chicken breast", "quantity":2},
            {"id": "water", "quantity":250},
            {"id": "salt", "quantity":0},
        ],
        "description": "This is a recipe that I have put together over some various websites, verbal consultations and just experimenting on my own and with my family. Rich and hearty with a great flavor when you can't get the real thing in the islands. Try a variety of hot peppers to change the flavor - even sweet bell peppers give a different taste. Use fresh thyme to really bring out the fresh taste.",
        "steps": ["Heat vegetable oil in a skillet over medium-high heat; cook and stir onion, tomato, garlic, curry powder, habanero pepper, and thyme until onion is golden, about 7 minutes. Stir in chicken and cook until chicken is lightly browned, about 5 minutes.","Pour water into the skillet, reduce heat to low; cover and simmer until chicken is no longer pink at the center, about 30 minutes. Season with salt."],
        "img": "https://i.ibb.co/yFLychX/Jamaican-Style-Curry-Chicken.png",
        "favorites": false
    }


];

export default AllRecipes;
