class Scraper

    def self.recipe_category_page_scraper(category_page_url)

        html = open(category_page_url)
        doc = Nokogiri::HTML(html)
        recipe_category_page = doc.css(".category-item--title")

        recipe_category_page.map do |category|
            {:category_name=>"#{category.text.strip}", :category_url=>"https://www.bbcgoodfood.com#{category.css("a").attr("href")}"}
        end
    end

    def self.recipe_index_page_scraper(index_page_url)

        html = open(index_page_url)
        doc = Nokogiri::HTML(html)
        recipe_index_page = doc.css(".teaser-item__title")

        recipe_index_page.map do |recipe|
            {:recipe_name=>"#{recipe.css("a").text.strip}", :recipe_url=>"https://www.bbcgoodfood.com#{recipe.css("a").attr("href")}"}
        end
    end

    def self.recipe_scraper(recipe_page_url)

        html = open(recipe_page_url)
        doc = Nokogiri::HTML(html)
       
        recipe =  doc.css(".ingredients-list__group > li")
        recipe.children.each {|c| c.remove if c.name == 'span'}
       
        recipe_details = {
                       :ingredients=>recipe.map {|ingredient| ingredient.text},
                       :method=>doc.css(".method__item").map {|method| method.text.gsub(/\n/, '')}
                    }
        recipe_details
    end
    
end