import { Component, OnInit } from '@angular/core';
import { RecipeService } from "./recipe.service";
import { Recipe } from "./recipe.model";

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
	providers: [RecipeService]
})
export class RecipiesComponent implements OnInit {
	selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
		this.recipeService.recipeSelected.subscribe(
			(recipe: Recipe) => {
				this.selectedRecipe = recipe;
			}
		);
  }

}
