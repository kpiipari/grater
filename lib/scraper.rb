require 'open-uri'
require 'nokogiri'
require 'pry'

class Scraper

    def self.recipe_index_page_scraper(index_page_url)

        html = open(index_page_url)
        doc = Nokogiri::HTML(html)
        students = doc.css("")

    end


end