require_relative "../lib/scraper.rb"
require_relative "../lib/grater.rb"
require_relative "../lib/category_creator.rb"
require 'nokogiri'

class CommandLineInterface

    CATEGORY_BASE_URL = "https://www.bbcgoodfood.com/recipes/category/"
    BASE_CATEGORIES = ["healthy", "family-kids", "cakes-baking", "cuisines", 
                        "dishes", "events", "everyday", "occasions", 
                        "quick-easy", "seasonal", "special-diets", "vegetarian"]

    def run
        puts "Welcome to Grater! \n\n"
        puts "Select from the following categories: \n\n"
        print_categories
        print_collections(input)
        puts "\n\n"
        puts "Select a collections: \n\n"
        print_recipes(input)
        print_full_recipe(input)
    end

    def input
        input = gets.chomp.to_i - 1
        input
    end

    def print_categories
        BASE_CATEGORIES.each_with_index do |category, index|
            puts "#{index + 1}. #{category}"
        end
        puts "\n"
    end

    def print_collections(input)
        category_list = Scraper.recipe_category_page_scraper(CATEGORY_BASE_URL + BASE_CATEGORIES[input])
        CategoryCreator.category_creator(category_list)
        puts "\n"
        puts "#{BASE_CATEGORIES[input].capitalize} has the following collections: \n\n"
        CategoryCreator.all.each_with_index do |category, index|
            puts "#{index + 1}. #{category.category_name}"
        end
    end

    def create_recipe_list(input)
        collection = CategoryCreator.all[input]
        url = collection.category_url
        recipe_list = Scraper.recipe_index_page_scraper(url)
        Grater.recipe_creator(recipe_list)
    end

    def print_recipes(input)
        create_recipe_list(input)
        puts "\n"
        Grater.all.each_with_index do |recipe, index|
            puts "#{index + 1}. #{recipe.recipe_name}"
        end
        puts "\n\n"
    end

    def create_recipe(chosen_recipe)
        recipe = Grater.all[chosen_recipe]
        details = Scraper.recipe_scraper(recipe.recipe_url)
        recipe.recipe_details_creator(details)
        recipe
    end  

    def print_ingredients(chosen_recipe)
        recipe = create_recipe(chosen_recipe)
        puts "\n #{recipe.recipe_name} Ingredients: \n\n"
        recipe.ingredients.each {|i| puts "* #{i} \n"}
    end

    def print_method(chosen_recipe)
        recipe = create_recipe(chosen_recipe)
        puts "\n #{recipe.recipe_name} Steps: \n\n"
        recipe.method.each_with_index {|step, index| puts "#{index + 1}. #{step} \n"}
    end

    def print_full_recipe(chosen_recipe)
        recipe = create_recipe(chosen_recipe)
        puts "\n#{recipe.recipe_name}"
        puts "------------------------------------------\n\n"
        puts "Ingredients"
        puts "-----------\n\n"
        recipe.ingredients.each {|i| puts "* #{i} \n"}
        puts "\n\n"
        puts "Steps"
        puts "-----\n\n"
        recipe.method.each_with_index {|step, index| puts "#{index + 1}. #{step} \n\n"}
    end

end