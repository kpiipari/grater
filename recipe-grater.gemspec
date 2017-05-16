# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'recipe-grater/version'

Gem::Specification.new do |spec|
  spec.name          = "recipe-grater"
  spec.version       = RecipeGrater::VERSION
  spec.authors       = ["Kaisa Piipari"]
  spec.email         = ["kaisa.piipari@gmail.com"]
  spec.description   = %q{CLI that gets recipes from BBC goodfood}
  spec.summary       = %q{CLLI that gets recipe collections and prints out ingredients and cooking steps to a selected recipe.}
  spec.homepage      = "https://github.com/kpiipari/grater"
  spec.license       = "MIT"

  spec.files         = `git ls-files`.split($/)
  spec.bindir        = "bin"
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.add_development_dependency 'bundler', '~> 1.14'
  spec.add_development_dependency 'rake', '~> 10.0'
  spec.add_development_dependency 'rspec'
  spec.add_development_dependency 'nokogiri', '1.6.6.2'
  spec.add_development_dependency 'pry'
end