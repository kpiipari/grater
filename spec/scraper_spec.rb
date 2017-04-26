require "spec_helper"

describe "Scraper" do

  let!(:recipe_index_array) { [{:recipe=>"Baked sweet potatoes with steak fajita filling", :recipe_url=>"./fixtures/recipes/baked_potato_steak_fajita.html"}, 
                                {:recipe=>"Double bean & roasted pepper chilli", :recipe_url=>"./fixtures/recipes/baked_potato_steak_fajita.html"}, 
                                {:recipe=>"Pull-apart pork with honey chipotle", :recipe_url=>"./fixtures/recipes/pork_with_honey chipotle.html"}] }

    let!(:recipe_pork_with_honey) { {:ingredients=>["1.2kg trimmed pork shoulder joint (weight after cutting away the rind - ask your butcher to do this)",
                                    "75g ketchup, plus 1tbsp", "3 tbsp chipotle paste", "3 tbsp honey", "1 tbsp red wine vinegar"], 
                                    :method=>["Up to two days before (and at least 2 hrs ahead), mix together 75g ketchup with 2 tbsp chipotle, 
                                    2 tbsp honey and the vinegar. Rub all over the pork and leave in a food bag (or bowl) in the fridge to marinate, 
                                    turning occasionally.", "Heat oven to 160C/140C fan/gas 3. Lift the pork into a snug-fitting roasting tin and baste with 
                                    any excess marinade, plus 100ml water. Cover with foil, ensuring the pork is sealed in but the foil isn’t touching it, and bake 
                                    for 4 hrs.", "Turn up the oven to 200C/180C fan/gas 6 (or cool and chill the pork, if making ahead). Remove the foil and put the 
                                    pork back in for 30 mins until crisp and sticky on the outside.", "Lift the pork from the tin and use two forks to shred the meat. 
                                    Mix together the extra 1 tbsp ketchup with the remaining chipotle and honey, and stir it through the shredded meat with some seasoning 
                                    before serving."]} }

  describe "#recipe_index_page_scraper" do
    it "Returns an array of hashes where each hash consists of a recipe name and a link to the recipe" do
        index_page_url = "./fixtures/index_files"
        recipe_list = Scraper.recipe_index_page_scraper(index_page_url)
        expect(recipe_list).to be_a Array
        expect(recipe_list.first). to have_key(:recipe)
        expect(recipe_list.first). to have_key(:recipe_url)
        expect(recipe_list.length). to_eq(recipe_index_array.length)
        expect(recipe_list). to include(recipe_index_array[0], recipe_index_array[1], recipe_index_array[2])
    end
  end
end
