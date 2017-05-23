# Grater

Grater is a recipe scraper command line application that scrapes recipes from [BBC Good Food](https://www.bbcgoodfood.com/).

When you run Grater, it gives you a list of 12 recipe categories to choose from. Based on a category (e.g. "healthy) you select, it lists the recipe collections available for that category. By selecting a collection, Grater returns a numbered list of recipe titles to choose from. When you select a recipe, Grater lists the ingredient list and step by step method to cook the chosen recipe.

## Installation

Add this line to your application's Gemfile:

```
gem 'recipe-grater'
```

And then execute:
```
$ bundle
```

Or install it yourself as:
```
gem install recipe-grater
```

## Usage

Install the gem and follow the instructions. When prompted for a response, use numbers to provide input.

## Development

After checking out the repo, run bin/setup to install dependencies. You can also run bin/console for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org/).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/[USERNAME]/grater. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org/) code of conduct.

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).



