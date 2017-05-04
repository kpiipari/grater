require "spec_helper"

describe "Grater" do

    let!(:recipe) { Grater.new({:recipe_name=>"Pull-apart pork with honey chipotle", :recipe_url=>"https://www.bbcgoodfood.com/recipes/pull-apart-pork-honey-chipotle"}) }

    after(:each) do
        Grater.class_variable_set(:@@all, [])
    end

                                method = "Up to two days before (and at least 2 hrs ahead), mix together 75g ketchup with 2 tbsp chipotle, 2 tbsp honey and the vinegar. Rub all over the pork and leave in a food bag (or bowl) in the fridge to marinate, turning occasionally.%Heat oven to 160C/140
C fan/gas 3. Lift the pork into a snug-fitting roasting tin and baste with any excess marinade, plus 100ml water. Cover with foil, ensuring the pork is sealed in but the foil isn’t touching it, and bake for 4 hrs.%Turn up the oven to 200C/180C fan/gas 6 (or cool and chill t
he pork, if making ahead). Remove the foil and put the pork back in for 30 mins until crisp and sticky on the outside.%Lift the pork from the tin and use two forks to shred the meat. Mix together the extra 1 tbsp ketchup with the remaining chipotle and honey, and stir it th
rough the shredded meat with some seasoning before serving."

    let!(:recipe_details_hash) { {:ingredients=>["1.2kg trimmed pork shoulder joint (weight after cutting away the rind - ask your butcher to do this)",
                                    "75g ketchup, plus 1tbsp", "3 tbsp chipotle paste", "3 tbsp honey", "1 tbsp red wine vinegar"], 
                                    :method => method.gsub(/\n/, '').split('%')} }
    
    let!(:recipe_index_array) { [{:recipe_name=>"Baked sweet potatoes with steak fajita filling", :recipe_url=>"https://www.bbcgoodfood.com/recipes/baked-sweet-potatoes-steak-fajita-filling"}, 
                                {:recipe_name=>"Double bean & roasted pepper chilli", :recipe_url=>"https://www.bbcgoodfood.com/recipes/double-bean-roasted-pepper-chilli"}, 
                                {:recipe_name=>"Pull-apart pork with honey chipotle", :recipe_url=>"https://www.bbcgoodfood.com/recipes/pull-apart-pork-honey-chipotle"}] }

    let!(:ingredients_list_print) { "* 1.2kg trimmed pork shoulder joint (weight after cutting away the rind - ask your butcher to do this)"
                                    "* 75g ketchup, plus 1tbsp"
                                    "* 3 tbsp chipotle paste"
                                    "* 3 tbsp honey"
                                    "* 1 tbsp red wine vinegar"}

    describe "#new" do
        it "accepts a recipe hash as an argument and creates a new recipe object based on the recipe has keys and values" do
            expect{Grater.new({:recipe_name=>"Double bean & roasted pepper chilli", :recipe_url=>"https://www.bbcgoodfood.com/recipes/double-bean-roasted-pepper-chilli"})}.to_not raise_error
            expect(recipe.recipe_name).to eq("Pull-apart pork with honey chipotle")
            expect(recipe.recipe_url).to eq("https://www.bbcgoodfood.com/recipes/pull-apart-pork-honey-chipotle")
        end

        it "adds the new recipe to the `@@all` class variable that keeps account of all created recipes." do 
            expect(Grater.class_variable_get(:@@all).first.recipe_name).to eq("Pull-apart pork with honey chipotle")
        end
    end

    describe ".recipe_creator" do
        it "creates new recipe instances from a collection of recipes created from Scraper class" do
            Grater.class_variable_set(:@@all, [])
            Grater.recipe_creator(recipe_index_array)
            expect(Grater.class_variable_get(:@@all).first.recipe_name).to eq("Baked sweet potatoes with steak fajita filling")
            expect(Grater.class_variable_get(:@@all).last.recipe_name).to eq("Pull-apart pork with honey chipotle")
        end
    end

    describe "#recipe_details_creator" do
        it "adds recipe detail attributes from Scraper class" do
            recipe.recipe_details_creator(recipe_details_hash)
            expect(recipe.ingredients).to be_a Array
            expect(recipe.method).to be_a Array
            expect(recipe.ingredients).to include(recipe_details_hash[:ingredients][0], recipe_details_hash[:ingredients][1], recipe_details_hash[:ingredients][2], recipe_details_hash[:ingredients][3])
            expect(recipe.method).to include(recipe_details_hash[:method][0], recipe_details_hash[:method][1], recipe_details_hash[:method][2], recipe_details_hash[:method][3])
        end
    end

    describe ".all" do
        it "returns the class variable @@all array" do
            Grater.class_variable_set(:@@all, [])
            expect(Grater.all).to match_array([])
        end
    end

    describe "#print_ingredients_list" do
        it "prints a list of ingredients" do
            expect(recipe.print_ingredients_list).to match(ingredients_list_print)
        end
    end

end

  