require 'bundler/setup'
Bundler.require(:default, :development)

require 'nokogiri'
require 'open-uri'

require_relative "../lib/recipe-grater/cli.rb"
require_relative "../lib/recipe-grater/scraper.rb"
require_relative "../lib/recipe-grater/grater.rb"
require_relative "../lib/recipe-grater/category_creator.rb"
require_relative "../lib/recipe-grater/version.rb"
