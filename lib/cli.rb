require_relative "../lib/scraper.rb"
require_relative "../lib/grater.rb"
require_relative "../lib/category_creator.rb"
require 'nokogiri'

class CommandLineInterface

    #URL = "./fixtures/index.html"
    #URL = "https://www.bbcgoodfood.com/recipes/collection/batch-cooking"
    CATEGORY_BASE_URL = "https://www.bbcgoodfood.com/recipes/category/"
    RECIPE_BASE_URL = "https://www.bbcgoodfood.com/recipes/collection/"
    BASE_CATEGORIES = ["healthy", "family-kids", "cakes-baking", "cuisines", "dishes", "events", "everyday", "ingredients", "occasions", "quick-easy", "seasonal", "special-diets", "vegetarian"]

    def run
        puts "Welcome to Grater! \n\n"
        puts "Select from the following categories: \n\n"
        base_categories
        category = user_interaction
        create_category_list(category)
        puts "\n\n"
        puts "#{BASE_CATEGORIES[category].capitalize} has the following collections: \n\n"
        display_category_list
        puts "\n\n"
        puts "Select from the above collections: \n\n"
        input = user_interaction
        collection = CategoryCreator.all[input][category_name]
        create_recipe_list(collection)
        display_recipe_list
        recipe = user_interaction
        display_full_recipe(recipe)
    end

    def base_categories
        BASE_CATEGORIES.each_with_index do |category, index|
            puts "#{index + 1}. #{category}"
        end
    end

    def user_commands
        input = gets.chomp
        meal_type = input.split(" ").last

        if input.include?("grater") && meal_type != "grater"
            meal_type
        else
            input = gets.chomp
        end
    end


    def user_interaction
        input = gets.chomp.to_i - 1
        input
    end

    def create_category_list(category)
        category_list = Scraper.recipe_category_page_scraper(CATEGORY_BASE_URL + BASE_CATEGORIES[category])
        CategoryCreator.category_creator(category_list)
    end

    def display_category_list
        CategoryCreator.all.each_with_index do |category, index|
            puts "#{index + 1}. #{category.category_name}"
        end
    end

    def create_recipe_list(page_url)
        recipe_list = Scraper.recipe_index_page_scraper(RECIPE_BASE_URL + page_url)
        Grater.recipe_creator(recipe_list)
    end

    def display_recipe_list
        Grater.all.each_with_index do |recipe, index|
            puts "#{index + 1}. #{recipe.recipe_name}"
        end
         puts "\n"
         puts "I would like to cook number: "
         puts "\n"
    end

    def create_recipe(user_input)
        recipe = Grater.all[user_input]
        details = Scraper.recipe_scraper(recipe.recipe_url)
        recipe.recipe_details_creator(details)
    end  

    def display_full_recipe(chosen_recipe)
        create_recipe(chosen_recipe)
        recipe = Grater.all[chosen_recipe]
        puts "\n #{recipe.recipe_name} \n\n"
        recipe.ingredients.each {|i| puts "* #{i} \n"}
        puts "\n \n"
        recipe.method.each_with_index {|step, index| puts "#{index + 1}. #{step} \n"}
    end

end