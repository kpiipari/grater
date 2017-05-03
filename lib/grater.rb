require 'pry'

class Grater

    attr_accessor :recipe, :recipe_url, :ingredients, :method

    @@all = [] #class variable to keep account of all recipe instances

    def initialize(recipe_hash)
        recipe_hash.each {|key, value| self.send(("#{key}="), value)}
        @@all << self
    end


end