require_relative "../lib/sraper.rb"
require_relative "../lib/grater.rb"

class CommandLineInterface

    def run
        create_recipe_list
        display_recipe_list
        user_interaction
        create_recipe
        display_recipe
    end

    def user_interaction

    end

    def create_recipe_list

    end

    def display_recipe_list

    end

    def create_recipe

    end

    def print_ingredients_list
        self.ingredients.each {|ingredient| puts "* #{ingredient}"}
    end

end