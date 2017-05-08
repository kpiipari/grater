require_relative "../lib/scraper.rb"
require_relative "../lib/grater.rb"
require 'nokogiri'

class CommandLineInterface

    URL = "./fixtures/index.html"
    #URL = "https://www.bbcgoodfood.com/recipes/collection/batch-cooking"

    def run
        puts "Welcome to Grater! \n\n"
        puts "Please select from the following recipes: \n\n"
        create_recipe_list
        display_recipe_list
        display_full_recipe
    end

    def user_interaction
        input = gets.chomp.to_i - 1
        input
    end

    def create_recipe_list
        recipe_list = Scraper.recipe_index_page_scraper(URL)
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

    def create_recipe
        user_input = user_interaction
        recipe = Grater.all[user_input]
        details = Scraper.recipe_scraper(recipe.recipe_url)
        recipe.recipe_details_creator(details)
        user_input
    end  

    def display_full_recipe
        recipe_index = create_recipe
        recipe = Grater.all[recipe_index]
        puts "\n #{recipe.recipe_name} \n\n"
        recipe.ingredients.each {|i| puts "* #{i} \n"}
        puts "\n \n"
        recipe.method.each_with_index {|step, index| puts "#{index + 1}. #{step} \n"}
    end

end