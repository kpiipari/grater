class Grater

    attr_accessor :recipe_name, :recipe_url, :ingredients, :method

    @@all = [] #class variable to keep account of all recipe instances

    def initialize(recipe_hash)
        recipe_hash.each {|key, value| self.send(("#{key}="), value)}
        @@all << self
    end

    def self.recipe_creator(recipe_index)
        recipe_index.each {|recipe| self.new(recipe)}
    end

    def recipe_details_creator(recipe_details_hash)
        recipe_details_hash.each {|key, value| self.send(("#{key}="), value)}
        self
    end

    def self.all
        @@all
    end

   


end