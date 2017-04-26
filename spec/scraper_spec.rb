require "spec_helper"

describe "Scraper" do

    let!(:recipe_index_array) { [{:recipe=>"Baked sweet potatoes with steak fajita filling", :recipe_url=>"./fixtures/recipes/baked_potato_steak_fajita.html"}, {:recipe=>"Double bean & roasted pepper chilli", :recipe_url=>"./fixtures/recipes/baked_potato_steak_fajita.html"}, {:recipe=>"Pull-apart pork with honey chipotle", :recipe_url=>"./fixtures/recipes/pork_with_honey chipotle.html"}] }
    it "Returns an array of hashes where each hash consists of a recipe name and a link to the recipe"
end