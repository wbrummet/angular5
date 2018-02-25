//Checking to see if this works correctly
import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
	recipeSelected = new EventEmitter<Recipe>();
	private recipies: Recipe[] = [
		new Recipe('A test recipe',
		"This is simply a test",
		"http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=KPTNrvis",
		[
			new Ingredient("peepee", 1),
			new Ingredient("poopoo", 1)
		]
	),
		new Recipe('A test recipe :)',
		"This is simply a testz",
		"http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=KPTNrvis",
		[
			new Ingredient("wieners", 50),
			new Ingredient("balls", 1000)
		]
	)
	];
  constructor(private slService: ShoppingListService) { }

	getRecipies() {
		console.log("git test, delete this when done");
		return this.recipies.slice();
	}

	addIngredientsToShoppingList(ingredients: Ingredient[]) {
		this.slService.addIngredients(ingredients);
	}
}
