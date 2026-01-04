const recipes = [];

const recipe1 = {
  name: "Spaghetti Carbonara",
  ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
  cookingTime: 22,
  totalIngredients: null,
  difficultyLevel: ""
};

const recipe2 = {
  name: "Chicken Curry",
  ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
  cookingTime: 42,
  totalIngredients: null,
  difficultyLevel: ""
};

const recipe3 = {
  name: "Vegetable Stir Fry",
  ingredients: ["broccoli", "carrot", "bell pepper"],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: ""
};

recipes.push(recipe1, recipe2, recipe3);

function getTotalIngredients(ingredients) {
  return ingredients.length;
}

function getDifficultyLevel(cookingTime) {
  if (cookingTime <= 30) {
    return "easy";
  } else if (cookingTime <= 60) {
    return "medium";
  } else {
    return "hard";
  }
}

const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
console.log(recipe1TotalIngredients);

const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
console.log(recipe1DifficultyLevel);

recipe1.totalIngredients = getTotalIngredients(recipe1.ingredients);
recipe1.difficultyLevel = getDifficultyLevel(recipe1.cookingTime);

recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients);
recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime);

recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients);
recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime);

console.log(recipes);

// recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients);
// recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime);explain bangla please

// এই দুই লাইনের কোড কী করছে, তা সহজ বাংলায় ব্যাখ্যা করছি 👇

// recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients);
// recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime);

// 🔹 ১ম লাইন ব্যাখ্যা
// recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients);


// recipe3.ingredients
// 👉 recipe3 অবজেক্টের ingredient–এর array নেয়
// 👉 যেমন: ["broccoli", "carrot", "bell pepper"]

// getTotalIngredients(recipe3.ingredients)
// 👉 এই ফাংশন array–টির মোট কয়টি item আছে তা গুনে দেয়
// 👉 এখানে ফলাফল হবে 3

// এই মানটি recipe3.totalIngredients–এ সেট করা হয়

// 👉 অর্থাৎ, এখন:

// recipe3.totalIngredients = 3;

// 🔹 ২য় লাইন ব্যাখ্যা
// recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime);


// recipe3.cookingTime
// 👉 recipe3 রান্না করতে সময় লাগে 15 মিনিট

// getDifficultyLevel(15)
// 👉 ফাংশনটি সময় দেখে difficulty নির্ধারণ করে
// 👉 15 ≤ 30, তাই রিটার্ন করে "easy"

// এই মানটি recipe3.difficultyLevel–এ সেট করা হয়

// 👉 অর্থাৎ, এখন:

// recipe3.difficultyLevel = "easy";

// ✅ চূড়ান্ত অবস্থা (recipe3)
// {
//   name: "Vegetable Stir Fry",
//   ingredients: ["broccoli", "carrot", "bell pepper"],
//   cookingTime: 15,
//   totalIngredients: 3,
//   difficultyLevel: "easy"
// }

// 🔑 সংক্ষেপে:

// প্রথম লাইন → ingredient সংখ্যা বের করে সেট করে

// দ্বিতীয় লাইন → রান্নার সময় দেখে difficulty ঠিক করে

// ফাংশন ব্যবহার করায় কোড পরিষ্কার ও পুনঃব্যবহারযোগ্য হয়েছে 👍

//   totalIngredients: null,
//   difficultyLevel: ""; null and "" aikhane bose taina

// ভালো প্রশ্ন 👍
// হ্যাঁ, null আর "" (empty string) এখানে কেন বসানো হয়েছে—এটা বুঝে নেওয়া খুব জরুরি।

// totalIngredients: null,
// difficultyLevel: ""

// ❓ এগুলো কেন দেওয়া হয়েছে?

// 👉 এগুলো placeholder (অস্থায়ী মান) হিসেবে রাখা হয়েছে।

// অর্থাৎ:

// অবজেক্ট তৈরি করার সময়ই বলে দেওয়া হচ্ছে—

// এই প্রপার্টিগুলো থাকবে

// কিন্তু এখনো মান নির্ধারণ করা হয়নি

// পরে আমরা ফাংশন কল করে আসল মান বসাই।

// 🔹 totalIngredients: null কেন?

// totalIngredients হবে একটি number

// কিন্তু শুরুতে আমরা জানি না সংখ্যাটা কত

// তাই null দেওয়া হয়েছে, যার মানে:
// 👉 “এখনো কোনো মান নেই”

// পরে:

// recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients);


// এখানে null এর জায়গায় সংখ্যা বসে যায় (যেমন: 3)

// 🔹 difficultyLevel: "" কেন?

// difficultyLevel হবে একটি string

// শুরুতে কোনো difficulty নির্ধারণ করা হয়নি

// তাই empty string ("") রাখা হয়েছে

// পরে:

// recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime);


// এখানে "" এর জায়গায় "easy" / "medium" / "hard" বসে যায়

// 🔹 না দিলেও কি চলত?

// হ্যাঁ, চাইলে এই দুই প্রপার্টি শুরুতে না-ও দিতে পারতে।

// যেমন:

// const recipe3 = {
//   name: "Vegetable Stir Fry",
//   ingredients: ["broccoli", "carrot", "bell pepper"],
//   cookingTime: 15
// };


// পরে:

// recipe3.totalIngredients = 3;
// recipe3.difficultyLevel = "easy";


// 👉 এটাও কাজ করবে।

// 🔑 তাহলে কেন দেওয়া হয়?

// Best Practice হিসেবে:

// অবজেক্টের structure আগে থেকেই পরিষ্কার থাকে

// কোড পড়লে বোঝা যায়, পরে কোন ডেটা আসবে

// বড় প্রজেক্টে কম confusion হয়

// ✅ সংক্ষেপে:

// null → মান পরে আসবে (number expected)

// "" → খালি string, পরে আসল string বসবে

// placeholder হিসেবে রাখা হয়েছে, বাধ্যতামূলক না

// চাও তো আমি null vs undefined vs "" পার্থক্যটাও ছোট টেবিলে বুঝিয়ে দিতে পারি 😊