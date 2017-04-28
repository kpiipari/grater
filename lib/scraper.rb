require 'open-uri'
require 'nokogiri'
require 'pry'

class Scraper

    def self.recipe_index_page_scraper(index_page_url)

        html = open(index_page_url)
        doc = Nokogiri::HTML(html)
        recipe_index_page = doc.css(".teaser-item__title")

        a = recipe_index_page.map do |recipe|
            {:recipe=>"#{recipe.css("span[itemprop=name]").text}", :recipe_url=>"#{recipe.css("a").attr("href")}"}
        end
    end


end