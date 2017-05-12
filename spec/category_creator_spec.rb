require "spec_helper"

describe "CategoryCreator" do

  let!(:category) { CategoryCreator.new({:category_name=>"7-a-day", :category_url=>"https://www.bbcgoodfood.com/recipes/collection/7-day"}) }

    after(:each) do
        Grater.class_variable_set(:@@all, [])
    end

 let!(:recipe_category_array) { [{:category_name=>"7-a-day", :category_url=>"https://www.bbcgoodfood.com/recipes/collection/7-day"},
                                    {:category_name=>"Freezable", :category_url=>"https://www.bbcgoodfood.com/recipes/collection/freezable"},
                                    {:category_name=>"Curry", :category_url=>"https://www.bbcgoodfood.com/recipes/collection/curry"}] }

     describe "#new" do
        it "accepts a category hash as an argument and creates a new category object based on the recipe hash keys and values" do
            expect{CategoryCreator.new({:category_name=>"7-a-day", :category_url=>"https://www.bbcgoodfood.com/recipes/collection/7-day"})}.to_not raise_error
            expect(category.category_name).to eq("7-a-day")
            expect(category.category_url).to eq("https://www.bbcgoodfood.com/recipes/collection/7-day")
        end

        it "adds the new category to the `@@all` class variable that keeps account of all created categories." do 
            expect(CategoryCreator.class_variable_get(:@@all).first.category_name).to eq("7-a-day")
        end
    end

    describe ".category_creator" do
        it "creates new category instances from a collection of categories created from Scraper class" do
            CategoryCreator.class_variable_set(:@@all, [])
            CategoryCreator.category_creator(recipe_category_array)
            expect(CategoryCreator.class_variable_get(:@@all).first.category_name).to eq("7-a-day")
            expect(CategoryCreator.class_variable_get(:@@all).last.category_name).to eq("Curry")
            expect(CategoryCreator.class_variable_get(:@@all).first.category_url).to eq("https://www.bbcgoodfood.com/recipes/collection/7-day")
            expect(CategoryCreator.class_variable_get(:@@all)[1].category_url).to eq("https://www.bbcgoodfood.com/recipes/collection/freezable")
        end
    end


    describe ".all" do
        it "returns the class variable @@all array" do
            CategoryCreator.class_variable_set(:@@all, [])
            expect(CategoryCreator.all).to match_array([])
        end
    end

end