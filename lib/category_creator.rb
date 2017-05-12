class CategoryCreator

    attr_accessor :category_name, :category_url

    @@all = []

    def initialize(category_hash)
        category_hash.each {|key, value| self.send(("#{key}="), value)}
        @@all << self
    end

    def self.category_creator(category_index)
        category_index.each {|category| self.new(category)}
    end

    def self.all
        @@all
    end

end