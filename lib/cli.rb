require_relative "../lib/scraper.rb"
require_relative "../lib/grater.rb"

class CommandLineInterface

    URL = "./fixtures/index.html"

    def run
        puts "Welcome to Grater!!"
        puts "Please select from the following recipes:"
        create_recipe_list
        display_recipe_list
        #user_interaction
        #create_recipe
        #display_recipe
    end

    def user_interaction
        input = gets.chomp
        input
    end

    def create_recipe_list
        recipe_list = Scraper.recipe_index_page_scraper(URL)
        Grater.recipe_creator(recipe_list)
    end

    def display_recipe_list
        Grater.all.each do |recipe|
            puts "#{recipe.recipe_name}"
        end
    end

    def create_recipe
        Grater.all.each do |recipe|
            details = Scraper.recipe_scraper(recipe.recipe_url)
            recipe.recipe_details_creator(details)
        end
    end

    #def print_ingredients_list
     #   self.ingredients.each {|ingredient| puts "* #{ingredient}"}
    #end

end